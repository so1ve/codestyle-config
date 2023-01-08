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
          const pre = sourceCode.text.slice(0, param.range[0]);
          const preSpace = pre.match(/(\s+)$/)?.[0];
          const preComma = pre.match(/(,)\s+$/)?.[0];
          const post = sourceCode.text.slice(param.range[1]);
          const postSpace = post.match(/^(\s*)/)?.[0];
          const expectedIndent = node.parent.loc.start.column + 2;
          if (
            param.loc.start.column !== expectedIndent
            && param.loc.start.line !== node.parent.loc.start.line
          ) {
            context.report({
              node,
              loc: {
                start: {
                  line: param.loc.start.line,
                  column: 0,
                },
                end: {
                  line: param.loc.start.line,
                  column: param.loc.start.column - 1,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                // 2 - \n\r
                yield fixer.replaceTextRange([param.range[0] + 2 - preSpace.length, param.range[0]], " ".repeat(node.parent.loc.start.column + 2));
              },
            });
          }
          if (preSpace && preSpace.length && !preComma && param.loc.start.line === node.loc.start.line) {
            context.report({
              node,
              loc: {
                start: {
                  line: param.loc.start.line,
                  column: param.loc.start.column + 1 - preSpace.length,
                },
                end: {
                  line: param.loc.start.line,
                  column: param.loc.start.column - 1,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.removeRange([param.range[0] - preSpace.length, param.range[0]]);
              },
            });
          }
          if (postSpace && postSpace.length && param.loc.end.line === node.loc.end.line) {
            context.report({
              loc: {
                start: {
                  line: param.loc.end.line,
                  column: param.loc.end.column,
                },
                end: {
                  line: param.loc.end.line,
                  column: param.loc.end.column + postSpace.length,
                },
              },
              node,
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.replaceTextRange([param.range[1], param.range[1] + postSpace.length], "");
              },
            });
          }
        }
        if (!["TSCallSignatureDeclaration", "ArrowFunctionExpression"].includes(node.parent.type)) {
          const pre = sourceCode.text.slice(0, node.range[0]);
          const preSpace = pre.match(/(\s+)$/)?.[0];
          const post = sourceCode.text.slice(node.range[1]);
          const postBracket = post.match(/^(\s*)\(/)?.[0];
          // strip space before <T>
          // NOTE: don't strip when type Fn = <T>(t: T) => void;
          if (preSpace && preSpace.length && !postBracket) {
            context.report({
              node,
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.removeRange([node.range[0] - preSpace.length, node.range[0]]);
              },
            });
          }
          // strip space between <T> and (t: T)
          if (postBracket && postBracket.length > 1) {
            context.report({
              node,
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.removeRange([node.range[1], node.range[1] + postBracket.length - 1]);
              },
            });
          }
        }
        // add space between <T,K>
        for (let i = 1; i < params.length; i++) {
          const prev = params[i - 1];
          const current = params[i];
          const from = prev.range[1];
          const to = current.range[0];
          const span = sourceCode.text.slice(from, to);
          if (span !== ", " && !span.match(/,\n/)) {
            context.report({
              *fix(fixer) {
                yield fixer.replaceTextRange([from, to], ", ");
              },
              loc: {
                start: prev.loc.end,
                end: current.loc.start,
              },
              messageId: "genericSpacingMismatch",
              node,
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
              *fix(fixer) {
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
              *fix(fixer) {
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
          const pre = sourceCode.text.slice(0, param.range[0]);
          const preSpace = pre.match(/(\s+)$/)?.[0];
          const preComma = pre.match(/(,)\s+$/)?.[0];
          const post = sourceCode.text.slice(param.range[1]);
          const postSpace = post.match(/^(\s*)/)?.[0];
          if (preSpace && preSpace.length && !preComma) {
            context.report({
              node,
              loc: {
                start: {
                  line: param.loc.start.line,
                  column: param.loc.start.column + 1 - preSpace.length,
                },
                end: {
                  line: param.loc.start.line,
                  column: param.loc.start.column - 1,
                },
              },
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.replaceTextRange([param.range[0] - preSpace.length, param.range[0]], "");
              },
            });
          }
          if (postSpace && postSpace.length) {
            context.report({
              loc: {
                start: {
                  line: param.loc.end.line,
                  column: param.loc.end.column,
                },
                end: {
                  line: param.loc.end.line,
                  column: param.loc.end.column + postSpace.length,
                },
              },
              node,
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.replaceTextRange([param.range[1], param.range[1] + postSpace.length], "");
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
            *fix(fixer) {
              yield fixer.replaceTextRange([extendsKeywordStart, extendsKeywordEnd - 8], " ");
            },
          });
        }
      },
    };
  },
});
