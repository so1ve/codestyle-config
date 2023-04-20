import { createEslintRule } from "../utils";

export const RULE_NAME = "no-beginning-newline";
export type MessageIds = "noBeginningNewline";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "No beginning newline",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      noBeginningNewline: "No beginning newline",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const text = context.getSourceCode().text;
    return {
      Program: (node) => {
        const newlines = text.match(/([\n]*)/)![1];
        if (newlines.length > 0) {
          context.report({
            node,
            loc: {
              start: {
                line: 0,
                column: 0,
              },
              end: node.loc.start,
            },
            messageId: "noBeginningNewline",
            *fix(fixer) {
              yield fixer.removeRange([0, node.range[0]]);
            },
          });
        }
      },
    };
  },
});
