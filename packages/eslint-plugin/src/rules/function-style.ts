import type {
  ArrowFunctionExpression,
  FunctionDeclaration,
  Statement,
} from "@typescript-eslint/types/dist/generated/ast-spec";
import { AST_NODE_TYPES } from "@typescript-eslint/types/dist/generated/ast-spec";

import { createEslintRule } from "../utils";

export const RULE_NAME = "function-style";
export type MessageIds = "arrow" | "declaration";
export type Options = [];

const START_RETURN = /^return /;
const END_SEMICOLON = /;$/;

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
      arrow: "Expected an arrow function.",
      declaration: "Expected a function declaration.",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();

    const getStatementRaw = (statement: Statement) =>
      `(${text
        .slice(statement.range[0], statement.range[1])
        .replace(START_RETURN, "")
        .replace(END_SEMICOLON, "")})`;

    function getReturnStatement(
      node: FunctionDeclaration | ArrowFunctionExpression
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

    function generateArrowFunction(node: FunctionDeclaration) {
      const async = node.async ? "async " : "";
      const params = node.params
        .map((param) => sourceCode.getText(param))
        .join(", ");
      const generics = node.typeParameters
        ? sourceCode.getText(node.typeParameters)
        : "";
      const body = sourceCode.getText(node.body);
      return `const ${
        node.id!.name
      } = ${async}${generics}(${params}) => ${body}`;
    }

    function generateFunctionDeclaration(node: ArrowFunctionExpression) {
      const async = node.async ? "async " : "";
      const params = node.params
        .map((param) => sourceCode.getText(param))
        .join(", ");
      const generics = node.typeParameters
        ? sourceCode.getText(node.typeParameters)
        : "";
      const body = sourceCode.getText(node.body);
      return `${async} function ${
        (node.parent as any).id.name
      }${generics}(${params}) ${body}`;
    }

    return {
      FunctionDeclaration(node) {
        if (!node.id?.name) return;
        const statement = getReturnStatement(node);
        if (!statement || node.generator) return;
        context.report({
          node,
          messageId: "arrow",
          fix: (fixer) => {
            const [start, end] = node.range;
            return fixer.replaceTextRange(
              [start, end],
              generateArrowFunction(node)
            );
          },
        });
      },
      ArrowFunctionExpression(node) {
        const { body } = node;
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
                  generateFunctionDeclaration(node)
                );
              },
            });
          }
        }
        // Convert arrow function return to shortcut
        const statement = getReturnStatement(node);
        if (!statement) return;
        context.report({
          node,
          messageId: "arrow",
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
