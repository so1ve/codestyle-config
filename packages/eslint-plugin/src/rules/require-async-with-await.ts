import { TSESTree } from "@typescript-eslint/types";
import type { ESLintUtils } from "@typescript-eslint/utils";

import { createEslintRule } from "../utils";

export const RULE_NAME = "require-async-with-await";
export type MessageIds = "requireAsyncWithAwait";
export type Options = [];

type FunctionNode =
	| TSESTree.FunctionExpression
	| TSESTree.FunctionDeclaration
	| TSESTree.ArrowFunctionExpression;

const rule: ESLintUtils.RuleModule<MessageIds> = createEslintRule<
	Options,
	MessageIds
>({
	name: RULE_NAME,
	meta: {
		type: "problem",
		docs: {
			description: "Require using async keyword with await.",
		},
		fixable: "code",
		schema: [],
		messages: {
			requireAsyncWithAwait: "Expect using async keyword with await.",
		},
	},
	defaultOptions: [],
	create: (context) => {
		const functionNodeStack: FunctionNode[] = [];
		function setupNode(node: FunctionNode) {
			functionNodeStack.push(node);
		}
		function clearNode() {
			functionNodeStack.pop();
		}

		return {
			"FunctionExpression": setupNode,
			"FunctionExpression:exit": clearNode,
			"FunctionDeclaration": setupNode,
			"FunctionDeclaration:exit": clearNode,
			"ArrowFunctionExpression": setupNode,
			"ArrowFunctionExpression:exit": clearNode,
			AwaitExpression() {
				const node = functionNodeStack[functionNodeStack.length - 1];

				if (!node || node.async) {
					return;
				}

				let fixRange: TSESTree.Range | undefined;

				if (node.type === TSESTree.AST_NODE_TYPES.ArrowFunctionExpression) {
					fixRange = node.range;
				}

				if (
					node.type === TSESTree.AST_NODE_TYPES.FunctionDeclaration ||
					node.type === TSESTree.AST_NODE_TYPES.FunctionExpression
				) {
					if (
						node.parent.type === TSESTree.AST_NODE_TYPES.Property ||
						node.parent.type === TSESTree.AST_NODE_TYPES.MethodDefinition
					) {
						if (node.parent.kind === "method" || node.parent.kind === "init") {
							fixRange = node.parent.key.range;
						}
					} else {
						fixRange = node.range;
					}
				}

				if (fixRange) {
					context.report({
						node,
						messageId: "requireAsyncWithAwait",
						fix: (fixer) => fixer.insertTextBeforeRange(fixRange, "async "),
					});
				}
			},
		};
	},
});

export default rule;
