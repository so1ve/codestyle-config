import { computed, ref } from "@vue/reactivity";
import { createEslintRule } from "../utils";

export const RULE_NAME = "no-spaces-before-paren";
export type MessageIds = "noSpacesBeforeParen";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Spaces before paren",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      noSpacesBeforeParen: "Expected no space before paren",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();
    return {
      ImportExpression(node) {
        const sourceRange = node.source.range;
        const parenStart = sourceRange[0] - 1;
        const importEnd = node.range[0] + 6/* import */;
        const textBetweenImportAndParenRange = [importEnd, parenStart] as const;
        const textBetweenImportAndParen = text.slice(...textBetweenImportAndParenRange);
        if (textBetweenImportAndParen.length > 0) {
          context.report({
            node,
            messageId: "noSpacesBeforeParen",
            *fix(fixer) {
              yield fixer.removeRange(textBetweenImportAndParenRange);
            },
          });
        }
      },
      CallExpression(node) {
        const caller = "property" in node.callee ? node.callee.property : node.callee;
        const textAfterCaller = text.slice(caller.range[1]);
        const parenStart = caller.range[1] + textAfterCaller.indexOf("(");
        const callerEnd = ref(caller.range[1]);
        const textBetweenFunctionNameAndParenRange = computed(() => [callerEnd.value, parenStart] as [number, number]);
        const textBetweenFunctionNameAndParen = computed(() => text.slice(...textBetweenFunctionNameAndParenRange.value));
        const hasGenerics = />\s*$/.test(textBetweenFunctionNameAndParen.value);
        const hasIndex = textBetweenFunctionNameAndParen.value.startsWith("]");
        if (hasIndex) {
          callerEnd.value += 1;
        }
        if (!hasGenerics) {
          if (textBetweenFunctionNameAndParen.value.length > 0 && textBetweenFunctionNameAndParen.value !== "?.") {
            context.report({
              node,
              messageId: "noSpacesBeforeParen",
              *fix(fixer) {
                yield fixer.replaceTextRange(textBetweenFunctionNameAndParenRange.value, node.optional ? "?." : "");
              },
            });
          }
        } else {
          const preSpaces = /^(\s*)/.exec(textBetweenFunctionNameAndParen.value)[1];
          const postSpaces = /(\s*)$/.exec(textBetweenFunctionNameAndParen.value)[1];
          if (preSpaces.length > 0) {
            context.report({
              node,
              messageId: "noSpacesBeforeParen",
              *fix(fixer) {
                yield fixer.removeRange([callerEnd.value, callerEnd.value + preSpaces.length]);
              },
            });
          }
          if (postSpaces.length > 0) {
            context.report({
              node,
              messageId: "noSpacesBeforeParen",
              *fix(fixer) {
                yield fixer.removeRange([parenStart - postSpaces.length, parenStart]);
              },
            });
          }
        }
      },
    };
  },
});
