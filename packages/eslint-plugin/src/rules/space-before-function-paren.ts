import { createEslintRule } from "../utils";

export const RULE_NAME = "space-before-function-paren";
export type MessageIds = "spaceBeforeFunctionParenMismatch";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Enforce consistent spacing before function parenthesis",
      recommended: "error",
      extendsBaseRule: true,
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      spaceBeforeFunctionParenMismatch: "Space before function paren mismatch",
    },
  },
  defaultOptions: [],
  create: (context) => {
    // Add spaces before function paren
    // e.g function a() {} -> function a () {}
    // e.g async() => {} -> async () => {}
    // e.g function() {} -> function () {}
    // but don't add when have generics
    // e.g async <T> () {} -> async<T>() {}
    // e.g function a <T> () {} -> function a<T>() {}
    // Also add in types
    // Thanks copilot!
    function a() {}
    const sourceCode = context.getSourceCode();
    return {
      FunctionDeclaration: (node) => {
        console.log(node);
        const pre = sourceCode.text.slice(0, node.range[0]);
        const preSpace = pre.match(/(\s+)$/)?.[0];
        if (!preSpace || !preSpace.length) {
          context.report({
            node,
            loc: {
              start: node.loc.start,
              end: {
                line: node.loc.start.line,
                column: node.loc.start.column + 1,
              },
            },
            messageId: "spaceBeforeFunctionParenMismatch",
            *fix (fixer) {
              yield fixer.insertTextBefore(node, " ");
            },
          });
        }
      },
      FunctionExpression: (node) => {
        const pre = sourceCode.text.slice(0, node.range[0]);
        const preSpace = pre.match(/(\s+)$/)?.[0];
        if (!preSpace || !preSpace.length) {
          context.report({
            node,
            loc: {
              start: node.loc.start,
              end: {
                line: node.loc.start.line,
                column: node.loc.start.column + 1,
              },
            },
            messageId: "spaceBeforeFunctionParenMismatch",
            *fix (fixer) {
              yield fixer.insertTextBefore(node, " ");
            },
          });
        }
      },
      ArrowFunctionExpression: (node) => {
        const pre = sourceCode.text.slice(0, node.range[0]);
        const preSpace = pre.match(/(\s+)$/)?.[0];
        if (!preSpace || !preSpace.length) {
          context.report({
            node,
            loc: {
              start: node.loc.start,
              end: {
                line: node.loc.start.line,
                column: node.loc.start.column + 1,
              },
            },
            messageId: "spaceBeforeFunctionParenMismatch",
            *fix (fixer) {
              yield fixer.insertTextBefore(node, " ");
            },
          });
        }
      },
      TSDeclareFunction: (node) => {
        const pre = sourceCode.text.slice(0, node.range[0]);
        const preSpace = pre.match(/(\s+)$/)?.[0];
        if (!preSpace || !preSpace.length) {
          context.report({
            node,
            loc: {
              start: node.loc.start,
              end: {
                line: node.loc.start.line,
                column: node.loc.start.column + 1,
              },
            },
            messageId: "spaceBeforeFunctionParenMismatch",
            *fix (fixer) {
              yield fixer.insertTextBefore(node, " ");
            },
          });
        }
      },
      TSTypeReference: (node) => {
        const pre = sourceCode.text.slice(0, node.range[0]);
        const preSpace = pre.match(/(\s+)$/)?.[0];
        if (!preSpace || !preSpace.length) {
          context.report({
            node,
            loc: {
              start: node.loc.start,
              end: {
                line: node.loc.start.line,
                column: node.loc.start.column + 1,
              },
            },
            messageId: "spaceBeforeFunctionParenMismatch",
            *fix (fixer) {
              yield fixer.insertTextBefore(node, " ");
            },
          });
        }
      },
    };
  },
});
