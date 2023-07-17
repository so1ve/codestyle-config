import type { TSESTree } from "@typescript-eslint/types";

import { createEslintRule } from "../utils";

export const RULE_NAME = "pad-after-last-import";
export type MessageIds = "padAfterLastImport";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "Pad after the last import.",
      recommended: "stylistic",
    },
    fixable: "code",
    schema: [],
    messages: {
      padAfterLastImport: "Expected a blank line after the last import.",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    let lastImportNode: TSESTree.ImportDeclaration | null = null;

    return {
      ImportDeclaration(node) {
        lastImportNode = node;
      },
      "Program:exit"() {
        if (lastImportNode) {
          const nextToken = sourceCode.getTokenAfter(lastImportNode);
          const firstCommentAfterTokenStartLine =
            sourceCode.getCommentsAfter(lastImportNode)[0]?.loc.start.line;
          const expectedLine = lastImportNode.loc.end.line + 1;
          const nextTokenStartLine = nextToken?.loc.start.line;

          if (
            nextToken &&
            // Workaround: Vue
            nextToken.value !== "</script>" &&
            (expectedLine === nextTokenStartLine ||
              expectedLine === firstCommentAfterTokenStartLine)
          ) {
            context.report({
              node: lastImportNode,
              messageId: "padAfterLastImport",
              fix: (fixer) => fixer.insertTextAfter(lastImportNode!, "\n"),
            });
          }
        }
      },
    };
  },
});
