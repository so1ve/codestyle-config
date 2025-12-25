// Credits: https://github.com/typescript-eslint/typescript-eslint/blob/3f5fbf698e75ddd87874885ffbf937913761cdb0/packages/eslint-plugin/src/rules/prefer-ts-expect-error.ts
import type { ESLintUtils, TSESTree } from "@typescript-eslint/utils";
import { AST_TOKEN_TYPES } from "@typescript-eslint/utils";
import type { RuleFix, RuleFixer } from "@typescript-eslint/utils/ts-eslint";

import { createEslintRule } from "../utils";

export const RULE_NAME = "prefer-ts-expect-error";
export type MessageIds = "preferExpectErrorComment";
export type Options = [];

// eslint-disable-next-line ts/no-unnecessary-type-arguments
const rule: ESLintUtils.RuleModule<MessageIds, Options> = createEslintRule({
	name: "prefer-ts-expect-error",
	meta: {
		type: "problem",
		docs: {
			description: "Enforce using `@ts-expect-error` over `@ts-ignore`",
		},
		fixable: "code",
		messages: {
			preferExpectErrorComment:
				'Use "@ts-expect-error" to ensure an error is actually being suppressed.',
		},
		replacedBy: ["@typescript-eslint/ban-ts-comment"],
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		const tsIgnoreRegExpSingleLine = /^\s*(?:\/\s*)?@ts-ignore/;
		const tsIgnoreRegExpMultiLine = /^\s*(?:(?:\/|\*)+\s*)?@ts-ignore/;

		const isLineComment = (comment: TSESTree.Comment): boolean =>
			comment.type === AST_TOKEN_TYPES.Line;

		function getLastCommentLine(comment: TSESTree.Comment): string {
			if (isLineComment(comment)) {
				return comment.value;
			}

			// For multiline comments - we look at only the last line.
			const commentlines = comment.value.split("\n");

			return commentlines[commentlines.length - 1];
		}

		function isValidTsIgnorePresent(comment: TSESTree.Comment): boolean {
			const line = getLastCommentLine(comment);

			return isLineComment(comment)
				? tsIgnoreRegExpSingleLine.test(line)
				: tsIgnoreRegExpMultiLine.test(line);
		}

		return {
			Program(): void {
				const comments = context.sourceCode.getAllComments();
				for (const comment of comments) {
					if (isValidTsIgnorePresent(comment)) {
						const lineCommentRuleFixer = (fixer: RuleFixer): RuleFix =>
							fixer.replaceText(
								comment,
								`//${comment.value.replace("@ts-ignore", "@ts-expect-error")}`,
							);

						const blockCommentRuleFixer = (fixer: RuleFixer): RuleFix =>
							fixer.replaceText(
								comment,
								`/*${comment.value.replace(
									"@ts-ignore",
									"@ts-expect-error",
								)}*/`,
							);

						context.report({
							node: comment,
							messageId: "preferExpectErrorComment",
							fix: isLineComment(comment)
								? lineCommentRuleFixer
								: blockCommentRuleFixer,
						});
					}
				}
			},
		};
	},
});

export default rule;
