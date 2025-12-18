import type { TSESTree } from "@typescript-eslint/utils";
import { ESLintUtils } from "@typescript-eslint/utils";

export const createEslintRule: ReturnType<typeof ESLintUtils.RuleCreator> =
	ESLintUtils.RuleCreator((ruleName) => ruleName);

export function getPreviousNode(
	node?: TSESTree.Node,
): TSESTree.Node | undefined {
	if (!node) {
		return;
	}
	const { parent } = node;
	if (parent && "body" in parent) {
		const { body } = parent;
		if (!Array.isArray(body)) {
			return;
		}
		// @ts-expect-error
		const index = body.indexOf(node);
		if (index > 0) {
			return body[index - 1];
		}
	}
}
