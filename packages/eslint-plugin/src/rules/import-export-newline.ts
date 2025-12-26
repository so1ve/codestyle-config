import type { TSESTree } from "@typescript-eslint/types";
import type { ESLintUtils } from "@typescript-eslint/utils";

import { createEslintRule, getNextNode, getPreviousNode } from "../utils";

export const RULE_NAME = "import-export-newline";
export type MessageIds =
	| "newlineAfterLastImport"
	| "newlineBeforeExport"
	| "newlineAfterExport";
export type Options = [];

const isExportDeclaration = (node: TSESTree.Node) =>
	node.type === "ExportNamedDeclaration" ||
	node.type === "ExportDefaultDeclaration" ||
	node.type === "ExportAllDeclaration";

// eslint-disable-next-line ts/no-unnecessary-type-arguments
const rule: ESLintUtils.RuleModule<MessageIds, Options> = createEslintRule({
	name: RULE_NAME,
	meta: {
		type: "problem",
		docs: {
			description: "Enforce spacing between imports and exports.",
		},
		fixable: "code",
		schema: [],
		messages: {
			newlineAfterLastImport: "Expected a blank line after the last import.",
			newlineBeforeExport: "Expected a blank line before the export.",
			newlineAfterExport: "Expected a blank line after the export.",
		},
	},
	defaultOptions: [],
	create: (context) => {
		const sourceCode = context.sourceCode;
		let lastImportNode: TSESTree.ImportDeclaration | null = null;
		const exportNodes: TSESTree.Node[] = [];

		function checkExport(node: TSESTree.Node) {
			exportNodes.push(node);
		}

		function checkNewline(
			node: TSESTree.Node,
			direction: "before" | "after",
		): TSESTree.Node | TSESTree.Comment | null {
			let token: TSESTree.Token | null;
			let expectedLine: number;
			let tokenLine: number | undefined;

			if (direction === "after") {
				const comments = sourceCode.getCommentsAfter(node);
				const sameLineComment = comments.find(
					(c) => c.loc.start.line === node.loc.end.line,
				);
				const endNode = sameLineComment ?? node;

				token = sourceCode.getTokenAfter(endNode);
				const nextComment = sourceCode.getCommentsAfter(endNode)[0];

				expectedLine = endNode.loc.end.line + 1;
				tokenLine = token?.loc.start.line;
				const commentLine = nextComment?.loc.start.line;

				if (
					token &&
					(expectedLine === tokenLine ||
						expectedLine === commentLine ||
						tokenLine === endNode.loc.end.line) &&
					token.value !== "}" &&
					token.value !== "</script>"
				) {
					return endNode;
				}

				return null;
			}

			const comments = sourceCode.getCommentsBefore(node);
			const firstComment = comments[0];
			const startNode = firstComment || node;

			token = sourceCode.getTokenBefore(startNode);
			expectedLine = startNode.loc.start.line - 1;
			tokenLine = token?.loc.end.line;

			if (token && expectedLine === tokenLine) {
				return startNode;
			}

			return null;
		}

		return {
			ImportDeclaration(node) {
				lastImportNode = node;
			},
			ExportNamedDeclaration: checkExport,
			ExportDefaultDeclaration: checkExport,
			ExportAllDeclaration: checkExport,
			"Program:exit"() {
				const lastImportFixNode = lastImportNode
					? checkNewline(lastImportNode, "after")
					: null;
				if (lastImportNode && lastImportFixNode) {
					context.report({
						node: lastImportNode,
						messageId: "newlineAfterLastImport",
						fix: (fixer) => fixer.insertTextAfter(lastImportFixNode, "\n"),
					});
				}

				for (const node of exportNodes) {
					const prevNode = getPreviousNode(node);
					if (
						// If previous node is not an export
						(!prevNode || !isExportDeclaration(prevNode)) &&
						// And not the last import (handled above)
						!(lastImportNode && prevNode === lastImportNode)
					) {
						const beforeFixNode = checkNewline(node, "before");
						if (beforeFixNode) {
							context.report({
								node,
								messageId: "newlineBeforeExport",
								fix: (fixer) => fixer.insertTextBefore(beforeFixNode, "\n"),
							});
						}
					}

					const nextNode = getNextNode(node);
					if (nextNode && !isExportDeclaration(nextNode)) {
						const afterFixNode = checkNewline(node, "after");
						if (afterFixNode) {
							context.report({
								node,
								messageId: "newlineAfterExport",
								fix: (fixer) => fixer.insertTextAfter(afterFixNode, "\n"),
							});
						}
					}
				}
			},
		};
	},
});

export default rule;
