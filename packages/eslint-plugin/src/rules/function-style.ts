import type { TSESTree } from "@typescript-eslint/types";
import { AST_NODE_TYPES } from "@typescript-eslint/types";
import type { Scope } from "@typescript-eslint/utils/ts-eslint";

import { createEslintRule, getPreviousNode } from "../utils";

export const RULE_NAME = "function-style";
export type MessageIds = "arrow" | "declaration";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: "problem",
		docs: {
			description: "Enforce function style.",
		},
		fixable: "code",
		schema: [],
		messages: {
			arrow: "Expected an arrow function shorthand.",
			declaration: "Expected a function declaration.",
		},
	},
	defaultOptions: [],
	create: (context) => {
		const sourceCode = context.sourceCode;

		function getLoneReturnStatement(
			node: TSESTree.FunctionDeclaration | TSESTree.ArrowFunctionExpression,
		) {
			const { body } = node;
			if (body.type !== AST_NODE_TYPES.BlockStatement) {
				return;
			}
			const { body: blockBody } = body;
			const allComments = sourceCode.getCommentsInside(node);
			if (blockBody.length !== 1) {
				return;
			}
			const [statement] = blockBody;
			const statementComments = sourceCode.getCommentsInside(statement);
			if (allComments.length !== statementComments.length) {
				return;
			}
			if (statement?.type === AST_NODE_TYPES.ReturnStatement) {
				return statement;
			}
		}

		function generateFunction(
			type: "arrow",
			name: string | null,
			node: TSESTree.FunctionDeclaration | TSESTree.FunctionExpression,
			rawStatement: string,
			asVariable?: boolean,
		): string;
		function generateFunction(
			type: "declaration",
			name: string,
			node:
				| TSESTree.FunctionDeclaration
				| TSESTree.FunctionExpression
				| TSESTree.ArrowFunctionExpression,
		): string;
		function generateFunction(
			type: "arrow" | "declaration",
			name: string | null,
			node:
				| TSESTree.FunctionDeclaration
				| TSESTree.FunctionExpression
				| TSESTree.ArrowFunctionExpression,
			rawStatement?: string,
			asVariable = true,
		) {
			const async = node.async ? "async " : "";
			const generics = node.typeParameters
				? sourceCode.getText(node.typeParameters)
				: "";
			const params = node.params
				.map((param) => sourceCode.getText(param))
				.join(", ");
			const returnType = node.returnType
				? sourceCode.getText(node.returnType)
				: "";
			const body = sourceCode.getText(node.body);
			const variableDeclaration = asVariable && name ? `const ${name} = ` : "";

			return type === "arrow"
				? `${variableDeclaration}${async}${generics}(${params})${returnType} => ${rawStatement!};`
				: `${async}function ${name!}${generics}(${params})${returnType} ${body}`;
		}

		const scopeStack: Scope.Scope[] = [];
		let haveThisAccess = false;
		function setupScope(node: TSESTree.Node) {
			scopeStack.push(sourceCode.getScope(node));
		}
		function clearThisAccess() {
			scopeStack.pop();
			haveThisAccess = false;
		}

		return {
			"FunctionExpression": setupScope,
			"FunctionExpression:exit"(node: TSESTree.FunctionExpression) {
				if (
					(node.parent as any)?.id?.typeAnnotation ||
					node.parent?.type !== AST_NODE_TYPES.VariableDeclarator ||
					haveThisAccess
				) {
					clearThisAccess();

					return;
				}
				const name = (node.parent.id as any).name as string;
				context.report({
					node,
					messageId: "declaration",
					fix: (fixer) =>
						fixer.replaceText(
							node.parent.parent!,
							generateFunction("declaration", name, node),
						),
				});
				clearThisAccess();
			},
			"FunctionDeclaration:not(TSDeclareFunction + FunctionDeclaration)":
				setupScope,
			"FunctionDeclaration:not(TSDeclareFunction + FunctionDeclaration):exit"(
				node: TSESTree.FunctionDeclaration,
			) {
				if (haveThisAccess) {
					return;
				}
				const previousNode = getPreviousNode(node.parent);
				if (
					previousNode?.type === AST_NODE_TYPES.ExportNamedDeclaration &&
					previousNode.declaration?.type === AST_NODE_TYPES.TSDeclareFunction
				) {
					return;
				}
				const statement = getLoneReturnStatement(node);
				const isExportDefault =
					node.parent?.type === AST_NODE_TYPES.ExportDefaultDeclaration;
				if (
					!statement?.argument ||
					(!node.id?.name && !isExportDefault) ||
					node.generator
				) {
					clearThisAccess();

					return;
				}
				const returnVal = `(${sourceCode.getText(statement.argument)})`;
				context.report({
					node,
					messageId: "arrow",
					fix: (fixer) =>
						fixer.replaceText(
							node,
							generateFunction(
								"arrow",
								node.id?.name ?? null,
								node,
								returnVal,
								!isExportDefault,
							),
						),
				});
				clearThisAccess();
			},
			"ArrowFunctionExpression": setupScope,
			"ArrowFunctionExpression:exit"(node: TSESTree.ArrowFunctionExpression) {
				if (haveThisAccess) {
					return;
				}
				const { body, parent } = node;
				const statement = getLoneReturnStatement(node);
				if (statement?.argument) {
					const returnVal = `(${sourceCode.getText(statement.argument)})`;
					context.report({
						node,
						messageId: "arrow",
						fix: (fixer) => fixer.replaceText(node.body, returnVal),
					});
				} else if (
					body.type === AST_NODE_TYPES.BlockStatement &&
					!(parent as any)?.id?.typeAnnotation
				) {
					const { body: blockBody } = body;
					if (
						blockBody.length > 0 &&
						node.parent?.parent?.type === AST_NODE_TYPES.VariableDeclaration
					) {
						const { parent: grandParent } = node.parent;
						context.report({
							node: grandParent,
							messageId: "declaration",
							fix: (fixer) =>
								fixer.replaceText(
									grandParent,
									generateFunction(
										"declaration",
										(node.parent as any).id.name,
										node,
									),
								),
						});
					}
				}
				clearThisAccess();
			},
			ThisExpression(node) {
				haveThisAccess = scopeStack.includes(sourceCode.getScope(node));
			},
		};
	},
});
