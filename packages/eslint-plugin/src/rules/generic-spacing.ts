import { createEslintRule } from "../utils";

export const RULE_NAME = "generic-spacing";
export type MessageIds = "genericSpacingMismatch";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    docs: {
      description: "Spaces around generic type parameters",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      genericSpacingMismatch: "Generic spaces mismatch",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    return {
      TSTypeParameterDeclaration: (node) => {
        // e.g type A< T > = 1;
        // trim space before and after T
        const params = node.params;
        for (let i = 0; i < params.length; i++) {
          const param = params[i];
          const pre = sourceCode.text.slice(0, param.range[0]);
          const preSpace = pre.match(/(\s+)$/)?.[0];
          const post = sourceCode.text.slice(param.range[1]);
          const postSpace = post.match(/^(\s*)/)?.[0];
          if (preSpace && preSpace.length) {
            context.report({
              node,
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.replaceTextRange([param.range[0] - preSpace.length, param.range[0]], "");
              },
            });
          }
          if (postSpace && postSpace.length) {
            context.report({
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
                yield fixer.replaceTextRange([node.range[0] - preSpace.length, node.range[0]], "");
              },
            });
          }
          // strip space between <T> and (t: T)
          if (postBracket && postBracket.length > 1) {
            context.report({
              node,
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.replaceTextRange([node.range[1], node.range[1] + postBracket.length - 1], "");
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
        if (sourceCode.text.slice(from, to) !== " = ") {
          context.report({
            *fix(fixer) {
              yield fixer.replaceTextRange([from, to], " = ");
            },
            loc: {
              start: endNode.loc.end,
              end: node.default.loc.start,
            },
            messageId: "genericSpacingMismatch",
            node,
          });
        }
      },
    };
  },
});
