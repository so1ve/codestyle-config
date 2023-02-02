import { createEslintRule } from "../utils";

export const RULE_NAME = "space-in-empty-block";
export type MessageIds = "noSpaceInEmptyBlock";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Disallow spaces in empty block",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      noSpaceInEmptyBlock: "Expected no space in empty block",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    // e.g function a() {} is correct
    // e.g function a() { } is incorrect
    return {
      BlockStatement: (node) => {
        if (node.body.length || sourceCode.getCommentsInside(node).length) {
          return;
        }
        const spaceStartRange = node.range[1] - 2;
        const post = sourceCode.text.slice(spaceStartRange);
        const postSpace = post.match(/^(\s*)/)?.[0];
        if (postSpace && postSpace.length) {
          context.report({
            loc: {
              start: node.loc.start,
              end: {
                line: node.loc.end.line,
                column: node.loc.end.column - 1 + postSpace.length,
              },
            },
            messageId: "noSpaceInEmptyBlock",
            *fix (fixer) {
              yield fixer.replaceTextRange([node.range[0] + 1, spaceStartRange + postSpace.length], "");
            },
          });
        }
        const spaceEndRange = node.range[0] + 1;
        const pre = sourceCode.text.slice(0, spaceEndRange);
        const preSpace = pre.match(/(\s+)$/)?.[0];
        if (preSpace && preSpace.length) {
          context.report({
            loc: {
              start: {
                line: node.loc.start.line,
                column: node.loc.start.column - preSpace.length,
              },
              end: {
                line: node.loc.start.line,
                column: node.loc.start.column,
              },
            },
            messageId: "noSpaceInEmptyBlock",
            *fix (fixer) {
              yield fixer.replaceTextRange([spaceEndRange - preSpace.length, spaceEndRange], "");
            },
          });
        }
      },
    };
  },
});
