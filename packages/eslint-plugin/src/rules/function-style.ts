import type { TSESTree } from "@typescript-eslint/types";
import { AST_NODE_TYPES } from "@typescript-eslint/types";

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
      description: "Enforce function style.",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      arrow: "Expected an arrow function shorthand.",
      declaration: "Expected a function declaration.",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();

    const getStatementRaw = (statement: TSESTree.Statement) =>
      `(${text
        .slice(statement.range[0], statement.range[1])
        .replace(START_RETURN, "")
        .replace(END_SEMICOLON, "")})`;

    function getLoneReturnStatement(
      node: TSESTree.FunctionDeclaration | TSESTree.ArrowFunctionExpression,
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
      type: "arrow",
      name: string,
      node: TSESTree.FunctionDeclaration | TSESTree.FunctionExpression,
      rawStatement: string,
      asVariable?: boolean,
    ): string;
    function generateFunction(
      type: "declaration",
      name: string,
      node:
        | TSESTree.FunctionDeclaration
        | TSESTree.FunctionExpression
        | TSESTree.ArrowFunctionExpression,
    ): string;
    function generateFunction(
      type: "arrow" | "declaration",
      name: string,
      node:
        | TSESTree.FunctionDeclaration
        | TSESTree.FunctionExpression
        | TSESTree.ArrowFunctionExpression,
      rawStatement?: string,
      asVariable = true,
    ) {
      const async = node.async ? "async " : "";
      const generics = node.typeParameters
        ? sourceCode.getText(node.typeParameters)
        : "";
      const params = node.params
        .map((param) => sourceCode.getText(param))
        .join(", ");
      const returnType = node.returnType
        ? sourceCode.getText(node.returnType)
        : "";
      const body = sourceCode.getText(node.body);
      const variableDeclaration = asVariable ? `const ${name} = ` : "";

      return type === "arrow"
        ? `${variableDeclaration}${async}${generics}(${params})${returnType} => ${rawStatement!};`
        : `${async}function ${name}${generics}(${params})${returnType} ${body}`;
    }

    return {
      FunctionExpression(node) {
        if (
          (node.parent as any)?.id?.typeAnnotation ||
          node.parent?.type !== AST_NODE_TYPES.VariableDeclarator
        ) {
          return;
        }
        const name = (node.parent.id as any).name as string;
        context.report({
          node,
          messageId: "declaration",
          fix: (fixer) =>
            fixer.replaceTextRange(
              node.parent!.parent!.range,
              generateFunction("declaration", name, node),
            ),
        });
      },
      "FunctionDeclaration:not(TSDeclareFunction + FunctionDeclaration)"(
        node: TSESTree.FunctionDeclaration,
      ) {
        const statement = getLoneReturnStatement(node);
        if (!statement || !node.id?.name || node.generator) {
          return;
        }
        const asVariable =
          node.parent?.type !== AST_NODE_TYPES.ExportDefaultDeclaration;
        context.report({
          node,
          messageId: "arrow",
          fix: (fixer) =>
            fixer.replaceTextRange(
              node.range,
              generateFunction(
                "arrow",
                node.id!.name,
                node,
                getStatementRaw(statement),
                asVariable,
              ),
            ),
        });
      },
      ArrowFunctionExpression(node) {
        const { body, parent } = node;

        const statement = getLoneReturnStatement(node);
        if (statement) {
          context.report({
            node,
            messageId: "arrow",
            fix: (fixer) =>
              fixer.replaceTextRange(
                node.body.range,
                getStatementRaw(statement),
              ),
          });
        }

        if ((parent as any)?.id?.typeAnnotation) {
          return;
        }
        if (body.type === AST_NODE_TYPES.BlockStatement) {
          const { body: blockBody } = body;
          if (
            blockBody.length > 1 &&
            node.parent?.parent?.type === AST_NODE_TYPES.VariableDeclaration
          ) {
            const { parent } = node.parent;
            context.report({
              node: parent,
              messageId: "declaration",
              fix: (fixer) => {
                const [start, end] = parent.range;

                return fixer.replaceTextRange(
                  [start, end],
                  generateFunction(
                    "declaration",
                    (node.parent as any).id.name,
                    node,
                  ),
                );
              },
            });
          }
        }
      },
    };
  },
});
