import type { TSESTree } from "@typescript-eslint/types";

import { createEslintRule } from "../utils";

export const RULE_NAME = "use-async-with-await";
export type MessageIds = "useAsyncWithAwait";
export type Options = [];

type FunctionNode =
	| TSESTree.FunctionExpression
	| TSESTree.FunctionDeclaration
	| TSESTree.ArrowFunctionExpression;

export default createEslintRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: "problem",
		docs: {
			description: "Enforce using async keyword with await.",
			recommended: "error",
		},
		fixable: "code",
		schema: [],
		messages: {
			useAsyncWithAwait: "Expect using async keyword with await.",
		},
	},
	defaultOptions: [],
	create: (context) => {
		const functionNodeScopeStack: FunctionNode[] = [];
		function setupNode(node: FunctionNode) {
			functionNodeScopeStack.push(node);
		}
		function clearNode() {
			functionNodeScopeStack.pop();
		}

		return {
			"FunctionExpression": setupNode,
			"FunctionExpression:exit": clearNode,
			"FunctionDeclaration": setupNode,
			"FunctionDeclaration:exit": clearNode,
			"ArrowFunctionExpression": setupNode,
			"ArrowFunctionExpression:exit": clearNode,
			AwaitExpression() {
				const closestFunctionNode =
					functionNodeScopeStack[functionNodeScopeStack.length - 1];
				if (!closestFunctionNode || closestFunctionNode.async) {
					return;
				}
				context.report({
					node: closestFunctionNode,
					messageId: "useAsyncWithAwait",
					fix: (fixer) => fixer.insertTextBefore(closestFunctionNode, "async "),
				});
			},
		};
	},
});