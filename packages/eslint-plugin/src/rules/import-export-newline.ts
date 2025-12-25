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

		function shouldHaveNewline(
			node: TSESTree.Node,
			direction: "before" | "after",
		) {
			let token: TSESTree.Token | null;
			let commentLine: number;
			let expectedLine: number;
			let tokenLine: number | undefined;

			if (direction === "after") {
				token = sourceCode.getTokenAfter(node);
				commentLine = sourceCode.getCommentsAfter(node)[0]?.loc.start.line;
				expectedLine = node.loc.end.line + 1;
				tokenLine = token?.loc.start.line;
			} else {
				token = sourceCode.getTokenBefore(node);
				commentLine = sourceCode.getCommentsBefore(node)[0]?.loc.end.line;
				expectedLine = node.loc.start.line - 1;
				tokenLine = token?.loc.end.line;
			}

			return (
				token &&
				(expectedLine === tokenLine || expectedLine === commentLine) &&
				(direction === "after"
					? token.value !== "}" && token.value !== "</script>"
					: true)
			);
		}

		return {
			ImportDeclaration(node) {
				lastImportNode = node;
			},
			ExportNamedDeclaration: checkExport,
			ExportDefaultDeclaration: checkExport,
			ExportAllDeclaration: checkExport,
			"Program:exit"() {
				if (lastImportNode && shouldHaveNewline(lastImportNode, "after")) {
					context.report({
						node: lastImportNode,
						messageId: "newlineAfterLastImport",
						fix: (fixer) => fixer.insertTextAfter(lastImportNode!, "\n"),
					});
				}

				for (const node of exportNodes) {
					const prevNode = getPreviousNode(node);
					if (
						// If previous node is not an export
						(!prevNode || !isExportDeclaration(prevNode)) &&
						// And not the last import (handled above)
						!(lastImportNode && prevNode === lastImportNode) &&
						shouldHaveNewline(node, "before")
					) {
						context.report({
							node,
							messageId: "newlineBeforeExport",
							fix: (fixer) => fixer.insertTextBefore(node, "\n"),
						});
					}

					const nextNode = getNextNode(node);
					if (
						nextNode &&
						!isExportDeclaration(nextNode) &&
						shouldHaveNewline(node, "after")
					) {
						context.report({
							node,
							messageId: "newlineAfterExport",
							fix: (fixer) => fixer.insertTextAfter(node, "\n"),
						});
					}
				}
			},
		};
	},
});

export default rule;
