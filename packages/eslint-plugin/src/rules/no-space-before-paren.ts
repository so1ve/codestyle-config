import { AST_NODE_TYPES } from "@typescript-eslint/utils";
import { computed, ref } from "@vue/reactivity";

import { createEslintRule } from "../utils";

export const RULE_NAME = "no-space-before-paren";
export type MessageIds = "noSpaceBeforeParen";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Space before paren",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      noSpaceBeforeParen: "Expected no space before paren",
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
        const importEnd = node.range[0] + 6 /* "import" */;
        const textBetweenImportAndParenRange = [importEnd, parenStart] as const;
        const textBetweenImportAndParen = text.slice(...textBetweenImportAndParenRange);
        if (textBetweenImportAndParen.length > 0) {
          context.report({
            node,
            messageId: "noSpaceBeforeParen",
            *fix(fixer) {
              yield fixer.removeRange(textBetweenImportAndParenRange);
            },
          });
        }
      },
      CallExpression(node) {
        let caller = "property" in node.callee ? node.callee.property : node.callee;
        if (caller.type === AST_NODE_TYPES.TSInstantiationExpression && "property" in caller.expression) {
          caller = caller.expression.property;
        }
        const callerEnd = ref(caller.range[1]);
        const textAfterCaller = computed(() => text.slice(callerEnd.value));
        const parenStart = ref(callerEnd.value + textAfterCaller.value.indexOf("("));
        const textBetweenFunctionNameAndParenRange = computed(() =>
          [callerEnd.value, parenStart.value] as [number, number]
        );
        const textBetweenFunctionNameAndParen = computed(() =>
          text.slice(...textBetweenFunctionNameAndParenRange.value)
        );
        const hasGenerics = computed(() => /^\s*</.test(textBetweenFunctionNameAndParen.value));
        const hasIndex = computed(() => textBetweenFunctionNameAndParen.value.startsWith("]"));
        if (hasIndex.value) { callerEnd.value += 1; }
        if (node.optional) { parenStart.value = callerEnd.value + textAfterCaller.value.indexOf("("); }
        const spaces = /(\s*)$/.exec(textBetweenFunctionNameAndParen.value)[1];
        if (!hasGenerics.value) {
          if (spaces.length > 0 && textBetweenFunctionNameAndParen.value !== "?.") {
            const textBeforeSpaces = textBetweenFunctionNameAndParen.value.slice(
              0,
              textBetweenFunctionNameAndParen.value.length - spaces.length,
            );
            context.report({
              node,
              messageId: "noSpaceBeforeParen",
              *fix(fixer) {
                yield fixer.replaceTextRange(
                  textBetweenFunctionNameAndParenRange.value,
                  textBeforeSpaces + (node.optional ? "?." : ""),
                );
              },
            });
          }
        } else {
          const preSpaces = /^(\s*)/.exec(textBetweenFunctionNameAndParen.value)[1];
          const postSpaces = /(\s*)$/.exec(textBetweenFunctionNameAndParen.value)[1];
          const spacesBeforeOptionalMark = /(\s*)\?\./.exec(textBetweenFunctionNameAndParen.value)?.[1] || "";
          if (preSpaces.length > 0) {
            context.report({
              node,
              messageId: "noSpaceBeforeParen",
              *fix(fixer) {
                yield fixer.removeRange([callerEnd.value, callerEnd.value + preSpaces.length]);
              },
            });
          }
          if (postSpaces.length > 0) {
            context.report({
              node,
              messageId: "noSpaceBeforeParen",
              *fix(fixer) {
                yield fixer.removeRange([parenStart.value - postSpaces.length, parenStart.value]);
              },
            });
          }
          if (spacesBeforeOptionalMark.length > 0 && !textBetweenFunctionNameAndParen.value.endsWith(" ")) {
            context.report({
              node,
              messageId: "noSpaceBeforeParen",
              *fix(fixer) {
                yield fixer.removeRange([parenStart.value - spacesBeforeOptionalMark.length - 2, parenStart.value - 2]);
              },
            });
          }
        }
      },
      NewExpression(node) {
        const calleeEnd = node.callee.range[1];
        const textAfterCallee = text.slice(calleeEnd);
        const parenStart = calleeEnd + textAfterCallee.indexOf("(");
        const textBetweenCalleeAndParenRange = [calleeEnd, parenStart] as const;
        const textBetweenCalleeAndParen = text.slice(...textBetweenCalleeAndParenRange);
        const hasGenerics = /^\s*</.test(textBetweenCalleeAndParen);
        if (!hasGenerics && textBetweenCalleeAndParen.length > 0) {
          context.report({
            node,
            messageId: "noSpaceBeforeParen",
            *fix(fixer) {
              yield fixer.removeRange(textBetweenCalleeAndParenRange);
            },
          });
        } else if (hasGenerics) {
          const preSpaces = /^(\s*)/.exec(textBetweenCalleeAndParen)[1];
          const postSpaces = /(\s*)$/.exec(textBetweenCalleeAndParen)[1];
          if (preSpaces.length > 0) {
            context.report({
              node,
              messageId: "noSpaceBeforeParen",
              *fix(fixer) {
                yield fixer.removeRange([calleeEnd, calleeEnd + preSpaces.length]);
              },
            });
          }
          if (postSpaces.length > 0) {
            context.report({
              node,
              messageId: "noSpaceBeforeParen",
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
