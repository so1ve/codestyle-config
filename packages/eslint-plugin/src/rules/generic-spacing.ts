import { AST_NODE_TYPES } from "@typescript-eslint/utils";
import * as util from "@typescript-eslint/utils/dist/ast-utils";

import { createEslintRule } from "../utils";

export const RULE_NAME = "generic-spacing";
export type MessageIds = "genericSpacingMismatch";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Spaces around generic type parameters",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      genericSpacingMismatch: "Generic spaces mismatch",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();
    return {
      TSTypeParameterDeclaration: (node) => {
        // e.g type A< T > = 1;
        // trim space before and after T
        const params = node.params;
        for (let i = 0; i < params.length; i++) {
          const param = params[i];
          const leftToken = sourceCode.getTokenBefore(param);
          const rightToken = sourceCode.getTokenAfter(param);
          const hasSpacingBeforeParam = sourceCode.isSpaceBetween(leftToken, param);
          const hasSpacingAfterParam = sourceCode.isSpaceBetween(param, rightToken);
          if (hasSpacingBeforeParam && param.loc.start.line === node.loc.start.line && leftToken.value === "<") {
            context.report({
              node,
              loc: {
                start: {
                  line: leftToken.loc.end.line,
                  column: leftToken.loc.end.column,
                },
                end: {
                  line: param.loc.start.line,
                  column: param.loc.start.column - 1,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix (fixer) {
                yield fixer.removeRange([leftToken.range[1], param.range[0]]);
              },
            });
          }
          if (hasSpacingAfterParam && param.loc.end.line === node.loc.end.line) {
            context.report({
              loc: {
                start: {
                  line: param.loc.end.line,
                  column: param.loc.end.column,
                },
                end: {
                  line: rightToken.loc.start.line,
                  column: rightToken.loc.start.column,
                },
              },
              node,
              messageId: "genericSpacingMismatch",
              *fix (fixer) {
                yield fixer.removeRange([param.range[1], rightToken.range[0]]);
              },
            });
          }
          if (!hasSpacingBeforeParam && util.isCommaToken(leftToken)) {
            // Add space before ,
            context.report({
              node,
              loc: {
                start: {
                  line: leftToken.loc.end.line,
                  column: leftToken.loc.end.column,
                },
                end: {
                  line: param.loc.start.line,
                  column: param.loc.start.column - 1,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix (fixer) {
                yield fixer.replaceTextRange([leftToken.range[1], param.range[0]], " ");
              },
            });
          }
        }
        if (!["TSCallSignatureDeclaration", "ArrowFunctionExpression"].includes(node.parent.type)) {
          const leftToken = sourceCode.getTokenBefore(node);
          const hasSpacingBeforeNode = sourceCode.isSpaceBetween(leftToken, node);
          const lastParam = params[params.length - 1];
          const endBracket = sourceCode.getTokenAfter(lastParam);
          const rightToken = sourceCode.getTokenAfter(endBracket, util.isOpeningParenToken);
          const hasSpacingAfterParam = sourceCode.isSpaceBetween(endBracket, rightToken);
          // strip space before <T>
          // NOTE: don't strip when type Fn = <T>(t: T) => void;
          if (hasSpacingBeforeNode && node.parent.type !== AST_NODE_TYPES.TSFunctionType) {
            context.report({
              node,
              loc: {
                start: {
                  line: leftToken.loc.end.line,
                  column: leftToken.loc.end.column,
                },
                end: {
                  line: node.loc.start.line,
                  column: node.loc.start.column,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix (fixer) {
                yield fixer.removeRange([leftToken.range[1], node.range[0]]);
              },
            });
          }
          // strip space between <T> and (t: T)
          if (hasSpacingAfterParam && [AST_NODE_TYPES.TSFunctionType, AST_NODE_TYPES.FunctionDeclaration].includes(node.parent.type)) {
            context.report({
              node,
              loc: {
                start: {
                  line: endBracket.loc.end.line,
                  column: endBracket.loc.end.column,
                },
                end: {
                  line: rightToken.loc.start.line,
                  column: rightToken.loc.start.column,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix (fixer) {
                yield fixer.removeRange([endBracket.range[1], rightToken.range[0]]);
              },
            });
          }
        }
      },
      // add space around = in type Foo<T = true>
      TSTypeParameter: (node) => {
        if (!node.default) { return; }
        const endNode = node.constraint || node.name;
        const from = endNode.range[1];
        const to = node.default.range[0];
        const spaceAndEqual = sourceCode.text.slice(from, to);
        if (spaceAndEqual !== " = ") {
          const preSpace = spaceAndEqual.match(/^(\s*)/)?.[0];
          const postSpace = spaceAndEqual.match(/(\s*)$/)?.[0];
          if (preSpace.length !== 1) {
            context.report({
              *fix (fixer) {
                yield fixer.replaceTextRange([from, from + preSpace.length], " ");
              },
              loc: {
                start: {
                  line: node.loc.start.line,
                  column: node.loc.start.column + 1,
                },
                end: {
                  line: node.loc.end.line,
                  column: node.loc.end.column - 2 - postSpace.length,
                },
              },
              node,
              messageId: "genericSpacingMismatch",
            });
          }
          if (postSpace.length !== 1) {
            context.report({
              *fix (fixer) {
                yield fixer.replaceTextRange([to - postSpace.length, to], " ");
              },
              loc: {
                start: {
                  line: node.loc.start.line,
                  column: node.loc.start.column + 2 + preSpace.length,
                },
                end: {
                  line: node.loc.end.line,
                  column: node.loc.end.column - 1,
                },
              },
              messageId: "genericSpacingMismatch",
            });
          }
        }
      },
      // type T = Generic< any >
      TSTypeParameterInstantiation: (node) => {
        const params = node.params;
        for (let i = 0; i < params.length; i++) {
          const param = params[i];
          const leftToken = sourceCode.getTokenBefore(param);
          const rightToken = sourceCode.getTokenAfter(param);
          const hasSpacingBeforeParam = leftToken.value === "<" ? sourceCode.isSpaceBetween(leftToken, param) : false;
          const hasSpacingAfterParam = rightToken.value === ">" ? sourceCode.isSpaceBetween(param, rightToken) : false;
          if (hasSpacingBeforeParam && leftToken.loc.end.line === param.loc.start.line) {
            // Remove space before param
            context.report({
              node,
              loc: {
                start: {
                  line: leftToken.loc.end.line,
                  column: leftToken.loc.end.column,
                },
                end: {
                  line: param.loc.start.line,
                  column: param.loc.start.column,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix (fixer) {
                yield fixer.removeRange([leftToken.range[1], param.range[0]]);
              },
            });
          }
          if (hasSpacingAfterParam && param.loc.end.line === rightToken.loc.start.line) {
            // Remove space after param
            context.report({
              node,
              loc: {
                start: {
                  line: param.loc.end.line,
                  column: param.loc.end.column,
                },
                end: {
                  line: rightToken.loc.start.line,
                  column: rightToken.loc.start.column,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix (fixer) {
                yield fixer.removeRange([param.range[1], rightToken.range[0]]);
              },
            });
          }
        }
      },
      // Add spaces before extends
      // interface a {}
      // interface A<B extends 1>extends a {}
      // Fix to: interface A<B extends 1> extends a {}
      TSInterfaceDeclaration: (node) => {
        if (!node.extends || !node.typeParameters) { return; }
        const { typeParameters } = node;
        const extendsKeywordStart = typeParameters.range[1];
        const extendsKeywordEnd = node.extends[0].range[0];
        const extendsText = text.slice(extendsKeywordStart, extendsKeywordEnd);
        if (!/^\s+/.test(extendsText)) {
          context.report({
            loc: {
              start: {
                line: typeParameters.loc.end.line,
                column: typeParameters.loc.end.column,
              },
              end: {
                line: typeParameters.loc.end.line,
                column: typeParameters.loc.end.column + 7,
              },
            },
            node,
            messageId: "genericSpacingMismatch",
            *fix (fixer) {
              yield fixer.replaceTextRange([extendsKeywordStart, extendsKeywordEnd - 8], " ");
            },
          });
        }
      },
    };
  },
});
