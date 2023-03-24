import type { TSESTree } from "@typescript-eslint/utils";
import { AST_NODE_TYPES } from "@typescript-eslint/utils";
import type { RuleFunction } from "@typescript-eslint/utils/dist/ts-eslint";
import { computed, ref } from "@vue/reactivity";

import { createEslintRule } from "../utils";

export const RULE_NAME = "array-bracket-spacing";
export type MessageIds = "arrayBracketSpacing";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Array bracket spacing",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      arrayBracketSpacing: "Array bracket spacing mismatch",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();
    const checkNode: RuleFunction<TSESTree.TSTupleType | TSESTree.ArrayExpression> = (node) => {
      const elements = node.type === AST_NODE_TYPES.TSTupleType ? node.elementTypes : node.elements;
      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];
      if (!firstElement) {
        return;
      }
      const leftToken = sourceCode.getTokenBefore(firstElement);
      const rightToken = ref(sourceCode.getTokenAfter(lastElement));
      if (rightToken.value.value === ",") { rightToken.value = sourceCode.getTokenAfter(rightToken.value); }
      const textBetweenFirstAndToken = computed(() => text.slice(leftToken.range[1], firstElement.range[0]));
      const isNewline = computed(() => textBetweenFirstAndToken.value.includes("\n"));
      const textBetweenLastAndToken = computed(() => text.slice(lastElement.range[1], rightToken.value.range[0]));
      const hasNewlineAfter = computed(() => textBetweenLastAndToken.value.includes("\n"));
      if (sourceCode.isSpaceBetween(leftToken, firstElement) && !isNewline.value) {
        context.report({
          node,
          messageId: "arrayBracketSpacing",
          *fix (fixer) {
            yield fixer.removeRange([leftToken.range[1], firstElement.range[0]]);
          },
        });
      }
      if (sourceCode.isSpaceBetween(lastElement, rightToken.value)) {
        if (!isNewline.value) {
          context.report({
            node,
            messageId: "arrayBracketSpacing",
            *fix (fixer) {
              yield fixer.removeRange([lastElement.range[1], rightToken.value.range[0]]);
            },
          });
        }
      }
      if (isNewline.value && !hasNewlineAfter.value) {
        context.report({
          node,
          messageId: "arrayBracketSpacing",
          *fix (fixer) {
            yield fixer.replaceTextRange([lastElement.range[1], rightToken.value.range[0]], "\n");
          },
        });
      }
    };
    return {
      TSTupleType: checkNode,
      ArrayExpression: checkNode,
    };
  },
});
