import type { TSESTree } from "@typescript-eslint/types";

import { createEslintRule } from "../utils";

export const RULE_NAME = "no-useless-template-string";
export type MessageIds = "noUselessTemplateString";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "No useless template string.",
      recommended: "warn",
    },
    fixable: "code",
    schema: [],
    messages: {
      noUselessTemplateString: "No useless template string.",
    },
  },
  defaultOptions: [],
  create: (context) => ({
    "TemplateLiteral:not(TaggedTemplateExpression > TemplateLiteral)"(
      node: TSESTree.TemplateLiteral,
    ) {
      const hasNewline = node.quasis.some((n) => n.value.raw.includes("\n"));
      if (node.expressions.length === 0 && !hasNewline) {
        context.report({
          node,
          messageId: "noUselessTemplateString",
          fix(fixer) {
            return fixer.replaceTextRange(
              node.range,
              `"${node.quasis[0].value.raw}"`,
            );
          },
        });
      }
    },
  }),
});
