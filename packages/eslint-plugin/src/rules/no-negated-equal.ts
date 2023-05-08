import { AST_NODE_TYPES } from "@typescript-eslint/types";

import { createEslintRule } from "../utils";

export const RULE_NAME = "no-negated-equal";
export type MessageIds = "noNegatedEqual";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "Disallow negated equal sign.",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      noNegatedEqual: "Expect no negated equal sign.",
    },
  },
  defaultOptions: [],
  create: (context) => ({
    BinaryExpression(node) {
      const { parent, left, right } = node;
      if (!parent) {
        return;
      }
      if (
        ["==", "==="].includes(node.operator) &&
        parent.type === AST_NODE_TYPES.UnaryExpression &&
        parent.operator === "!"
      ) {
        context.report({
          node,
          messageId: "noNegatedEqual",
          *fix(fixer) {
            const operatorRange = [left.range[1], right.range[0]] as const;
            const fixedOperator = node.operator === "==" ? "!=" : "!==";
            yield fixer.replaceTextRange(operatorRange, fixedOperator);
            yield fixer.removeRange([parent.range[0], parent.range[0] + 1]);
          },
        });
      }
    },
  }),
});
