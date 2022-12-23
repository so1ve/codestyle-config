import { createEslintRule } from "../utils";

export const RULE_NAME = "space-between-generic-and-paren";
export type MessageIds = "spaceBetweenGenericAndParenMismatch";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    docs: {
      description: "Spaces between generic type parameters and paren",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      spaceBetweenGenericAndParenMismatch: "Space between generic and paren mismatch",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    // e.g const a = <T>(t: T) => t; is correct
    // e.g const a = <T> (t: T) => t; is incorrect
    // e.g function a<T>(t: T) { return t; } is correct
    // e.g function a <T> (t: T) { return t; } is incorrect
    return {
      TSTypeParameter: (node) => {
        const spaceStartRange = node.range[1] + 1;
        const post = sourceCode.text.slice(spaceStartRange);
        const postSpace = post.match(/^(\s*)/)?.[0];
        if (postSpace && postSpace.length) {
          context.report({
            loc: {
              start: {
                line: node.loc.end.line,
                column: node.loc.end.column + 1,
              },
              end: {
                line: node.loc.end.line,
                column: node.loc.end.column + 1 + postSpace.length,
              },
            },
            messageId: "spaceBetweenGenericAndParenMismatch",
            *fix(fixer) {
              yield fixer.replaceTextRange([spaceStartRange, spaceStartRange + postSpace.length], "");
            },
          });
        }
        if (node.parent?.parent.type === "FunctionDeclaration") {
          const spaceEndRange = node.range[0] - 1;
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
                  column: node.loc.start.column - 1,
                },
              },
              messageId: "spaceBetweenGenericAndParenMismatch",
              *fix(fixer) {
                yield fixer.replaceTextRange([spaceEndRange - preSpace.length, spaceEndRange], "");
              },
            });
          }
        }
      },
    };
  },
});
