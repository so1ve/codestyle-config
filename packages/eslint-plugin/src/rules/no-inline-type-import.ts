import { createEslintRule } from "../utils";

export const RULE_NAME = "no-inline-type-import";
export type MessageIds = "noInlineTypeImport";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow inline type import",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      noInlineTypeImport: "Expected no inline type import",
    },
  },
  defaultOptions: [],
  create: (context) => {
    // e.g import type { a } from "a" is correct
    // e.g import { type a } from "a" is incorrect
    // e.g import { type a, b } from "a" is incorrect
    // e.g import { a, type b } from "a" is incorrect
    // e.g import { a } from "a" is correct
    // Do not remove the import directly
    // e.g import { type a, b } from "a" fix to:
    // import { b } from "a"
    // import type { a } from "a"
    return {
      ImportDeclaration: (node) => {
        const specifiers = node.specifiers;
        const typeSpecifiers = specifiers.filter(s => s.type === "ImportSpecifier" && s.importKind === "type");
        const valueSpecifiers = specifiers.filter(s => s.type === "ImportSpecifier" && s.importKind === "value");
        if (typeSpecifiers.length && valueSpecifiers.length) {
          context.report({
            loc: node.loc,
            messageId: "noInlineTypeImport",
            *fix(fixer) {
              const sourceCode = context.getSourceCode();
              const typeSpecifiersText = typeSpecifiers.map(s => sourceCode.getText(s).replace("type ", "")).join(", ");
              const valueSpecifiersText = valueSpecifiers.map(s => sourceCode.getText(s)).join(", ");
              yield fixer.replaceText(node, `import type { ${typeSpecifiersText} } from "${node.source.value}";\nimport { ${valueSpecifiersText} } from "${node.source.value}";`);
            },
          });
        }
      },
    };
  },
});
