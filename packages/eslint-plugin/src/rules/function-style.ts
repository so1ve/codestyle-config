import type { TSESTree } from "@typescript-eslint/types";
import { AST_NODE_TYPES } from "@typescript-eslint/types";
import type { ESLintUtils } from "@typescript-eslint/utils";
import type { Scope } from "@typescript-eslint/utils/ts-eslint";

import { createEslintRule, getPreviousNode } from "../utils";

export const RULE_NAME = "function-style";
export type MessageIds = "arrow" | "declaration";
export type Options = [];

type FunctionNode =
	| TSESTree.FunctionDeclaration
	| TSESTree.FunctionExpression
	| TSESTree.ArrowFunctionExpression;

interface FunctionInfo {
	async: boolean;
	generics: string;
	params: string;
	returnType: string;
	body: string;
}

const rule: ESLintUtils.RuleModule<MessageIds> = createEslintRule<
	Options,
	MessageIds
>({
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
		const scopeStack: Scope.Scope[] = [];
		let haveThisAccess = false;

		function getSingleReturnStatement(
			node: TSESTree.FunctionDeclaration | TSESTree.ArrowFunctionExpression,
		) {
			const { body } = node;
			if (body.type !== AST_NODE_TYPES.BlockStatement) {
				return;
			}

			const { body: blockBody } = body;
			if (blockBody.length !== 1) {
				return;
			}

			const [statement] = blockBody;
			if (statement?.type !== AST_NODE_TYPES.ReturnStatement) {
				return;
			}

			const allComments = sourceCode.getCommentsInside(node);
			const statementComments = sourceCode.getCommentsInside(statement);
			if (allComments.length !== statementComments.length) {
				return;
			}

			return statement;
		}

		const extractFunctionInfo = (node: FunctionNode): FunctionInfo => ({
			async: node.async,
			generics: node.typeParameters
				? sourceCode.getText(node.typeParameters)
				: "",
			params: node.params.map((param) => sourceCode.getText(param)).join(", "),
			returnType: node.returnType ? sourceCode.getText(node.returnType) : "",
			body: sourceCode.getText(node.body),
		});

		function generateArrowFunction(
			name: string | null,
			info: FunctionInfo,
			returnValue: string,
			asVariable = true,
		): string {
			const asyncKeyword = info.async ? "async " : "";
			const variableDeclaration = asVariable && name ? `const ${name} = ` : "";

			return `${variableDeclaration}${asyncKeyword}${info.generics}(${info.params})${info.returnType} => ${returnValue};`;
		}
		function generateFunctionDeclaration(
			name: string,
			info: FunctionInfo,
		): string {
			const asyncKeyword = info.async ? "async " : "";

			return `${asyncKeyword}function ${name}${info.generics}(${info.params})${info.returnType} ${info.body}`;
		}

		function setupScope(node: TSESTree.Node): void {
			scopeStack.push(sourceCode.getScope(node));
		}
		function clearThisAccess() {
			scopeStack.pop();
			haveThisAccess = false;
		}

		function getFunctionExpressionParentNameString(
			node: TSESTree.FunctionExpression,
		): string | null {
			const parent = node.parent;

			if (
				(parent as any)?.id?.typeAnnotation ||
				parent?.type !== AST_NODE_TYPES.VariableDeclarator ||
				haveThisAccess
			) {
				return null;
			}

			return (parent.id as any).name as string;
		}

		function shouldConvertFunctionDeclarationToArrow(
			node: TSESTree.FunctionDeclaration,
		): { shouldConvert: boolean; returnStatement?: TSESTree.ReturnStatement } {
			if (haveThisAccess) {
				return { shouldConvert: false };
			}

			const previousNode = getPreviousNode(node.parent);
			if (
				previousNode?.type === AST_NODE_TYPES.ExportNamedDeclaration &&
				previousNode.declaration?.type === AST_NODE_TYPES.TSDeclareFunction
			) {
				return { shouldConvert: false };
			}

			const returnStatement = getSingleReturnStatement(node);
			const isExportDefault =
				node.parent?.type === AST_NODE_TYPES.ExportDefaultDeclaration;

			if (
				!returnStatement?.argument ||
				(!node.id?.name && !isExportDefault) ||
				node.generator
			) {
				return { shouldConvert: false };
			}

			return { shouldConvert: true, returnStatement };
		}

		return {
			"FunctionExpression": setupScope,
			"FunctionExpression:exit"(node: TSESTree.FunctionExpression) {
				const name = getFunctionExpressionParentNameString(node);
				if (!name) {
					clearThisAccess();

					return;
				}

				const info = extractFunctionInfo(node);
				const grandParent = node.parent?.parent;
				if (!grandParent) {
					return;
				}

				context.report({
					node,
					messageId: "declaration",
					fix: (fixer) =>
						fixer.replaceText(
							grandParent,
							generateFunctionDeclaration(name, info),
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
				const { shouldConvert, returnStatement } =
					shouldConvertFunctionDeclarationToArrow(node);
				if (!shouldConvert || !returnStatement?.argument) {
					clearThisAccess();

					return;
				}

				const info = extractFunctionInfo(node);
				const isExportDefault =
					node.parent?.type === AST_NODE_TYPES.ExportDefaultDeclaration;
				const returnValue = `(${sourceCode.getText(returnStatement.argument)})`;

				context.report({
					node,
					messageId: "arrow",
					fix: (fixer) =>
						fixer.replaceText(
							node,
							generateArrowFunction(
								node.id?.name ?? null,
								info,
								returnValue,
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
				const returnStatement = getSingleReturnStatement(node);

				if (returnStatement?.argument) {
					const returnValue = `(${sourceCode.getText(returnStatement.argument)})`;
					context.report({
						node,
						messageId: "arrow",
						fix: (fixer) => fixer.replaceText(node.body, returnValue),
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
						const grandParent = node.parent.parent;
						const name = (node.parent as any).id.name as string;
						const info = extractFunctionInfo(node);

						context.report({
							node: grandParent,
							messageId: "declaration",
							fix: (fixer) =>
								fixer.replaceText(
									grandParent,
									generateFunctionDeclaration(name, info),
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

export default rule;
