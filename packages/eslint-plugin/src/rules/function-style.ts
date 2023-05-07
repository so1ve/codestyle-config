import { AST_NODE_TYPES } from "@typescript-eslint/types";
import type { TSESTree } from "@typescript-eslint/types";

import { createEslintRule } from "../utils";

export const RULE_NAME = "function-style";
export type MessageIds = "arrow" | "arrowShorthand" | "declaration";
export type Options = [];

const START_RETURN = /^return /;
const END_SEMICOLON = /;$/;

function getBeforeNode(node: TSESTree.Node) {
  const { parent } = node;
  if (!parent) return;
  const { body } = parent as any;
  if (!body) return;
  const index = body.indexOf(node);
  if (index === 0) return;
  return body[index - 1];
}

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "Enforce function style.",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      arrow: "Expected an arrow function.",
      arrowShorthand: "Expected an arrow function shorthand.",
      declaration: "Expected a function declaration.",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();

    const getStatementRaw = (statement: TSESTree.Statement) =>
      text
        .slice(statement.range[0], statement.range[1])
        .replace(START_RETURN, "")
        .replace(END_SEMICOLON, "");

    function getLonelyReturnStatement(
      node: TSESTree.FunctionDeclaration | TSESTree.ArrowFunctionExpression
    ) {
      const { body } = node;
      if (body.type === AST_NODE_TYPES.BlockStatement) {
        const { body: blockBody } = body;
        if (blockBody.length === 1) {
          const [statement] = blockBody;
          if (statement?.type === AST_NODE_TYPES.ReturnStatement) {
            return statement;
          }
        }
      }
    }

    function generateFunction(
      node: TSESTree.FunctionDeclaration | TSESTree.ArrowFunctionExpression,
      type: "arrow" | "declaration"
    ) {
      const async = node.async ? "async " : "";
      const params = node.params
        .map((param) => sourceCode.getText(param))
        .join(", ");
      const generics = node.typeParameters
        ? sourceCode.getText(node.typeParameters)
        : "";
      const body = sourceCode.getText(node.body);
      return type === "arrow"
        ? `const ${node.id!.name} = ${async}${generics}(${params}) => ${body};`
        : `${async}function ${
            (node.parent as any).id.name
          }${generics}(${params}) ${body}`;
    }

    return {
      FunctionDeclaration(node) {
        if (!node.id?.name) return;
        const statement = getLonelyReturnStatement(node);
        if (
          !statement ||
          node.generator ||
          getBeforeNode(node)?.type === AST_NODE_TYPES.TSDeclareFunction
        )
          return;
        context.report({
          node,
          messageId: "arrow",
          fix: (fixer) => {
            const [start, end] = node.range;
            return fixer.replaceTextRange(
              [start, end],
              generateFunction(node, "arrow")
            );
          },
        });
      },
      ArrowFunctionExpression(node) {
        const { body, parent } = node;
        if ((parent as any)?.id?.typeAnnotation) return;
        if (body.type === AST_NODE_TYPES.BlockStatement) {
          const { body: blockBody } = body;
          if (
            blockBody.length > 1 &&
            node.parent?.parent?.type === AST_NODE_TYPES.VariableDeclaration
          ) {
            const parent = node.parent.parent;
            context.report({
              node: parent,
              messageId: "declaration",
              fix: (fixer) => {
                const [start, end] = parent.range;
                return fixer.replaceTextRange(
                  [start, end],
                  generateFunction(node, "declaration")
                );
              },
            });
          }
        }
        const statement = getLonelyReturnStatement(node);
        if (statement)
          context.report({
            node,
            messageId: "arrowShorthand",
            fix: (fixer) => {
              const [start, end] = node.body.range;
              return fixer.replaceTextRange(
                [start, end],
                getStatementRaw(statement)
              );
            },
          });
      },
    };
  },
});
