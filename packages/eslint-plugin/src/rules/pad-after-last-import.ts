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
      recommended: "error",
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
    let lastImportNode = null;

    return {
      ImportDeclaration (node) {
        lastImportNode = node;
      },
      "Program:exit" () {
        if (lastImportNode) {
          const nextToken = sourceCode.getTokenAfter(lastImportNode);
          if (lastImportNode.loc.end.line + 1 === nextToken.loc.start.line) {
            context.report({
              node: lastImportNode,
              messageId: "padAfterLastImport",
              fix: (fixer) => fixer.insertTextAfter(lastImportNode, "\n"),
            });
          }
        }
      },
    };
  },
});
