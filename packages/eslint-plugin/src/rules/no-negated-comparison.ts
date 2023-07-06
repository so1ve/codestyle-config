import { AST_NODE_TYPES } from "@typescript-eslint/types";

import { createEslintRule } from "../utils";

export const RULE_NAME = "no-negated-comparison";
export type MessageIds = "noNegatedComparison";
export type Options = [];

const negatedToPositive = {
  "==": "!=",
  "===": "!==",
  "!=": "==",
  "!==": "===",
  "<": ">=",
  "<=": ">",
  ">": "<=",
  ">=": "<",
} as const;
type Negatives = keyof typeof negatedToPositive;
const negatives = Object.keys(negatedToPositive) as Negatives[];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "Disallow negated comparison.",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      noNegatedComparison: "Expect no negated comparison.",
    },
  },
  defaultOptions: [],
  create: (context) => ({
    BinaryExpression(node) {
      const { parent, left, right, operator } = node;
      if (!parent) {
        return;
      }
      if (
        negatives.includes(node.operator as any) &&
        parent.type === AST_NODE_TYPES.UnaryExpression && // Is this necessary?
        parent.operator === "!"
      ) {
        context.report({
          node,
          messageId: "noNegatedComparison",
          *fix(fixer) {
            const operatorRange = [left.range[1], right.range[0]] as const;
            const fixedOperator = negatedToPositive[operator as Negatives];
            yield fixer.replaceTextRange(operatorRange, fixedOperator);
            yield fixer.removeRange([parent.range[0], parent.range[0] + 1]);
          },
        });
      }
    },
  }),
});
