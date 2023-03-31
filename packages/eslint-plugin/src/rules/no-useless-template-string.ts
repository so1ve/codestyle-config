import { createEslintRule } from "../utils";

export const RULE_NAME = "no-useless-template-string";
export type MessageIds = "noUselessTemplateString";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "No useless template string",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      noUselessTemplateString: "No useless template string",
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      TemplateLiteral(node) {
        const hasNewline = node.quasis.some((n) => n.value.raw.includes("\n"));
        if (node.expressions.length === 0 && !hasNewline) {
          context.report({
            node,
            messageId: "noUselessTemplateString",
            fix(fixer) {
              const s = node.range[0];
              const e = node.range[1];
              return fixer.replaceTextRange([s, e], `"${node.quasis[0].value.raw}"`);
            },
          });
        }
      },
    };
  },
});
