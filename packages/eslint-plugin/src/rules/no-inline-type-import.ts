import { AST_NODE_TYPES } from "@typescript-eslint/types";

import { createEslintRule } from "../utils";

export const RULE_NAME = "no-inline-type-import";
export type MessageIds = "noInlineTypeImport";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Disallow inline type import.",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      noInlineTypeImport: "Expected no inline type import.",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();

    return {
      ImportDeclaration: (node) => {
        const { specifiers } = node;
        const typeSpecifiers = specifiers.filter(
          (s) =>
            s.type === AST_NODE_TYPES.ImportSpecifier &&
            s.importKind === "type",
        );
        const valueSpecifiers = specifiers.filter(
          (s) =>
            s.type === AST_NODE_TYPES.ImportSpecifier &&
            s.importKind === "value",
        );
        const defaultImportSpecifier = specifiers.find(
          (s) => s.type === AST_NODE_TYPES.ImportDefaultSpecifier,
        );
        if (typeSpecifiers.length > 0 && valueSpecifiers.length > 0) {
          context.report({
            loc: node.loc,
            messageId: "noInlineTypeImport",
            fix(fixer) {
              const typeSpecifiersText = typeSpecifiers
                .map((s) => sourceCode.getText(s).replace("type ", ""))
                .join(", ");
              const valueSpecifiersText = valueSpecifiers
                .map((s) => sourceCode.getText(s))
                .join(", ");
              const defaultImportSpecifierText = sourceCode.getText(
                defaultImportSpecifier,
              );
              const defaultAndvalueSpecifiersText = defaultImportSpecifier
                ? `import ${defaultImportSpecifierText}, { ${valueSpecifiersText} } from "${node.source.value}";`
                : `import { ${valueSpecifiersText} } from "${node.source.value}";`;
              const texts = [
                `import type { ${typeSpecifiersText} } from "${node.source.value}";`,
                defaultAndvalueSpecifiersText,
              ];

              return fixer.replaceText(node, texts.join("\n"));
            },
          });
        } else if (typeSpecifiers.length > 0) {
          context.report({
            loc: node.loc,
            messageId: "noInlineTypeImport",
            fix(fixer) {
              const typeSpecifiersText = typeSpecifiers
                .map((s) => sourceCode.getText(s).replace("type ", ""))
                .join(", ");

              return fixer.replaceText(
                node,
                `import type { ${typeSpecifiersText} } from "${node.source.value}";`,
              );
            },
          });
        }
      },
    };
  },
});
