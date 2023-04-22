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
        const specifiers = node.specifiers;
        const typeSpecifiers = specifiers.filter((s) => s.type === "ImportSpecifier" && s.importKind === "type");
        const valueSpecifiers = specifiers.filter((s) => s.type === "ImportSpecifier" && s.importKind === "value");
        if (typeSpecifiers.length > 0 && valueSpecifiers.length > 0) {
          context.report({
            loc: node.loc,
            messageId: "noInlineTypeImport",
            *fix(fixer) {
              const typeSpecifiersText = typeSpecifiers
                .map((s) => sourceCode.getText(s).replace("type ", ""))
                .join(", ");
              const valueSpecifiersText = valueSpecifiers.map((s) => sourceCode.getText(s)).join(", ");
              yield fixer.replaceText(
                node,
                `import type { ${typeSpecifiersText} } from "${node.source.value}";\nimport { ${valueSpecifiersText} } from "${node.source.value}";`
              );
            },
          });
        } else if (typeSpecifiers.length > 0) {
          context.report({
            loc: node.loc,
            messageId: "noInlineTypeImport",
            *fix(fixer) {
              const typeSpecifiersText = typeSpecifiers
                .map((s) => sourceCode.getText(s).replace("type ", ""))
                .join(", ");
              yield fixer.replaceText(node, `import type { ${typeSpecifiersText} } from "${node.source.value}";`);
            },
          });
        }
      },
    };
  },
});
