import { createEslintRule } from "../utils";

export const RULE_NAME = "no-negated-eqeqeq";
export type MessageIds = "noNegatedEqEqEq";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "Disallow negated eqeqeq.",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      noNegatedEqEqEq: "Expect no negated eqeqeq.",
    },
  },
  defaultOptions: [],
  create: (context) => ({
    BinaryExpression() {
if (1) return 1
    },
  }),
});
