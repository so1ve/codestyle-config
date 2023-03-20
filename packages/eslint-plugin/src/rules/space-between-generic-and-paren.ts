import { AST_NODE_TYPES } from "@typescript-eslint/utils";

import { createEslintRule } from "../utils";

const operatorOrAnyBracketOrKeywordRE = /^(\||&|\*|\+|\-|\/|%|<|>|<=|>=|==|!=|===|!==|\[|\(|\{|as|extends|implements|keyof|new|readonly|typeof|unique|unknown)/;

export const RULE_NAME = "space-between-generic-and-paren";
export type MessageIds = "noSpaceBetweenGenericAndParen";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Spaces between generic type parameters and paren",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      noSpaceBetweenGenericAndParen: "Expected no space between generic type parameters and paren",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.text;
    // e.g const a = <T>(t: T) => t; is correct
    // e.g const a = <T> (t: T) => t; is incorrect
    // e.g function a<T>(t: T) { return t; } is correct
    // e.g function a <T> (t: T) { return t; } is incorrect
    return {
      TSTypeParameter: (node) => {
        const spaceStartRange = node.range[1] + 1;
        const post = text.slice(spaceStartRange);
        const postSpace = post.match(/^(\s*)/)?.[0];
        const postEqual = post.slice(postSpace.length)
          .match(/^(=)/)?.[0];
        const postComma = text.slice(node.range[1])
          .match(/^(,)/)?.[0];
        // Edge case: type GetTail<T extends any[]> = T extends [infer _Head, ...infer Tail] ? Tail : never;
        const postQuestionMark = text.slice(spaceStartRange + postSpace.length)
          .match(/^(\?)/)?.[0];
        const postOperatorOrAnyBracketOrKeyword = text.slice(spaceStartRange + postSpace.length)
          .match(operatorOrAnyBracketOrKeywordRE)?.[0];
        if (postSpace && postSpace.length && !postEqual && !postComma && !postQuestionMark && !postOperatorOrAnyBracketOrKeyword && node.parent.type !== AST_NODE_TYPES.TSInferType) {
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
            node,
            messageId: "noSpaceBetweenGenericAndParen",
            *fix (fixer) {
              yield fixer.replaceTextRange([spaceStartRange, spaceStartRange + postSpace.length], "");
            },
          });
        }
        if (node.parent?.parent.type === AST_NODE_TYPES.FunctionDeclaration) {
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
              node,
              messageId: "noSpaceBetweenGenericAndParen",
              *fix (fixer) {
                yield fixer.replaceTextRange([spaceEndRange - preSpace.length, spaceEndRange], "");
              },
            });
          }
        }
      },
    };
  },
});
