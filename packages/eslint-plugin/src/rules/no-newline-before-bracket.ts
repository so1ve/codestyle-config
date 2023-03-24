import { createEslintRule } from "../utils";

export const RULE_NAME = "no-newline-before-bracket";
export type MessageIds = "noNewlineBeforeBracket";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "No newline before bracket",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      noNewlineBeforeBracket: "No newline before bracket",
    },
  },
  defaultOptions: [],
  create: (context) => {
    // Forbid newline before bracket
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();
    return {
      "ArrayExpression, ArrayPattern, CallExpression, NewExpression, ObjectExpression, ObjectPattern, TSArrayType, TSConditionalType, TSFunctionType, TSImportType, TSIndexedAccessType, TSInferType, TSIntersectionType, TSLiteralType, TSMappedType, TSParenthesizedType, TSPrefixUnaryExpression, TSRestType, TSUnionType, TSUnknownKeyword, TSVoidKeyword":
        (node: any) => {
          const token = sourceCode.getFirstToken(node);
          if (token && token.loc.start.line < token.loc.end.line) {
            const start = token.range[0];
            const end = token.range[1];
            const textBetween = text.slice(start, end);
            const match = textBetween.match(/[\r]*[\r]/);
            if (match) {
              context.report({
                node,
                messageId: "noNewlineBeforeBracket",
                fix: (fixer) => {
                  return fixer.replaceTextRange([start, start + match[0].length], " ");
                },
              });
            }
          }
        },
    };
  },
});
