import type { ESLintUtils } from "@typescript-eslint/utils";

import { createEslintRule } from "../utils";

export const RULE_NAME = "html-spaced-comment";
export type MessageIds = "expectedSpaceBefore" | "expectedSpaceAfter";
export type Options = [];

// eslint-disable-next-line ts/no-unnecessary-type-arguments
const rule: ESLintUtils.RuleModule<MessageIds, Options> = createEslintRule({
	name: RULE_NAME,
	meta: {
		type: "layout",
		docs: {
			description: "Enforce consistent spacing in HTML comments",
		},
		fixable: "whitespace",
		schema: [],
		messages: {
			expectedSpaceBefore: "Expected space after '<!--'.",
			expectedSpaceAfter: "Expected space before '-->'.",
		},
	},
	defaultOptions: [],
	create: (context) => ({
		Comment(node: any) {
			if (node.type !== "Comment" || node.value?.type !== "CommentContent") {
				return;
			}

			const rawValue = node.value.value;
			if (typeof rawValue !== "string") {
				return;
			}

			if (rawValue.trim().length === 0) {
				return;
			}

			if (!rawValue.startsWith(" ")) {
				context.report({
					node: node.value,
					messageId: "expectedSpaceBefore",
					fix(fixer) {
						return fixer.insertTextBefore(node.value, " ");
					},
				});
			}

			if (!rawValue.endsWith(" ")) {
				context.report({
					node: node.value,
					messageId: "expectedSpaceAfter",
					fix(fixer) {
						return fixer.insertTextAfter(node.value, " ");
					},
				});
			}
		},
	}),
});

export default rule;
