import type { TSESTree } from "@typescript-eslint/utils";
import { ESLintUtils } from "@typescript-eslint/utils";

export const createEslintRule: ReturnType<typeof ESLintUtils.RuleCreator> =
  ESLintUtils.RuleCreator((ruleName) => ruleName);

function getSiblingNode(
  node: TSESTree.Node | undefined,
  offset: number,
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
    const targetIndex = index + offset;
    if (targetIndex >= 0 && targetIndex < body.length) {
      return body[targetIndex];
    }
  }
}

export const getPreviousNode = (
  node?: TSESTree.Node,
): TSESTree.Node | undefined => getSiblingNode(node, -1);

export const getNextNode = (node?: TSESTree.Node): TSESTree.Node | undefined =>
  getSiblingNode(node, 1);
