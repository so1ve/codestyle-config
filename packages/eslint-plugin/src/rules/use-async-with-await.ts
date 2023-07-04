import type { TSESTree } from "@typescript-eslint/types";
import type { Scope } from "@typescript-eslint/utils/dist/ts-eslint";

import { createEslintRule } from "../utils";

export const RULE_NAME = "use-async-with-await";
export type MessageIds = "useAsyncWithAwait";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "Enforce using async keyword with await.",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      useAsyncWithAwait: "Expect using async keyword with await.",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const scopeStack: Scope.Scope[] = [];
    let haveAwaitExpression = false;
    function setupScope() {
      scopeStack.push(context.getScope());
    }
    function clearAwaitExpression() {
      scopeStack.pop();
      haveAwaitExpression = false;
    }

    return {
      "FunctionExpression[async=false]": setupScope,
      "FunctionExpression[async=false]:exit"(
        node: TSESTree.FunctionExpression,
      ) {
        if (!haveAwaitExpression) {
          return;
        }
        context.report({
          node,
          messageId: "useAsyncWithAwait",
          fix: (fixer) => fixer.insertTextBefore(node, "async "),
        });
        clearAwaitExpression();
      },
      "FunctionDeclaration[async=false]": setupScope,
      "FunctionDeclaration[async=false]:exit"(
        node: TSESTree.FunctionDeclaration,
      ) {
        if (!haveAwaitExpression) {
          return;
        }
        context.report({
          node,
          messageId: "useAsyncWithAwait",
          fix: (fixer) => fixer.insertTextBefore(node, "async "),
        });
        clearAwaitExpression();
      },
      "ArrowFunctionExpression[async=false]": setupScope,
      "ArrowFunctionExpression[async=false]:exit"(
        node: TSESTree.ArrayExpression,
      ) {
        if (!haveAwaitExpression) {
          return;
        }
        context.report({
          node,
          messageId: "useAsyncWithAwait",
          fix: (fixer) => fixer.insertTextBefore(node, "async "),
        });
        clearAwaitExpression();
      },
      AwaitExpression() {
        haveAwaitExpression = scopeStack.includes(context.getScope());
      },
    };
  },
});
