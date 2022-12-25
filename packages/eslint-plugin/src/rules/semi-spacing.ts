import { createEslintRule } from "../utils";

export const RULE_NAME = "semi-spacing";
export type MessageIds = "semiSpacingMismatch";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    docs: {
      description: "Semicolon spacing",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      semiSpacingMismatch: "Semi spacing mismatch",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.text;
    return {
      TSTypeAliasDeclaration(node) {
        const sourceLine = text.slice(node.range[0], node.range[1]);
        const preSemiSpace = sourceLine.match(/(\s+);$/)?.[0];
        if (preSemiSpace) {
          const spaceStart = node.range[0] + sourceLine.length - preSemiSpace.length;
          const spaceEnd = node.range[0] + sourceLine.length - 1;
          context.report({
            loc: {
              start: {
                line: node.loc.start.line,
                column: node.loc.start.column + sourceLine.length - preSemiSpace.length,
              },
              end: {
                line: node.loc.start.line,
                column: node.loc.start.column + sourceLine.length - 1,
              },
            },
            node,
            messageId: "semiSpacingMismatch",
            *fix(fixer) {
              yield fixer.removeRange([spaceStart, spaceEnd]);
            },
          });
        }
      },
    };
  },
});
