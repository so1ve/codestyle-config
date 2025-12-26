import { AST_NODE_TYPES } from "@typescript-eslint/types";
import type { ESLintUtils, TSESTree } from "@typescript-eslint/utils";

import { createEslintRule } from "../utils";

export const RULE_NAME = "no-inline-type-modifier";
export type MessageIds = "noInlineTypeModifier";
export type Options = [];

type Specifier = TSESTree.ImportSpecifier | TSESTree.ExportSpecifier;

const getName = (node: TSESTree.Identifier | TSESTree.Literal) =>
  node.type === AST_NODE_TYPES.Identifier ? node.name : node.raw;

function getSpecifierText(s: Specifier) {
  const isExport = s.type === AST_NODE_TYPES.ExportSpecifier;
  const name1 = getName(isExport ? s.local : s.imported);
  const name2 = getName(isExport ? s.exported : s.local);

  return name1 === name2 ? name1 : `${name1} as ${name2}`;
}

function generateSpecifiersText(specifiers: Specifier[]) {
  const texts = specifiers.map(getSpecifierText);

  return `{ ${texts.join(", ")} }`;
}

const generateTypeText = (specifiers: Specifier[]) =>
  `type ${generateSpecifiersText(specifiers)}`;

function generateValueText(
  valueSpecifiers: Specifier[],
  defaultSpecifier?: TSESTree.ImportDefaultSpecifier,
) {
  const parts = [];
  if (defaultSpecifier) {
    parts.push(defaultSpecifier.local.name);
  }
  if (valueSpecifiers.length > 0) {
    parts.push(generateSpecifiersText(valueSpecifiers));
  }

  return parts.join(", ");
}

function classifySpecifiers(
  specifiers: (TSESTree.ImportClause | TSESTree.ExportSpecifier)[],
) {
  const typeSpecifiers: Specifier[] = [];
  const valueSpecifiers: Specifier[] = [];
  let defaultSpecifier: TSESTree.ImportDefaultSpecifier | undefined;

  for (const s of specifiers) {
    if (s.type === AST_NODE_TYPES.ImportDefaultSpecifier) {
      defaultSpecifier = s;
    } else if (s.type === AST_NODE_TYPES.ImportSpecifier) {
      if (s.importKind === "type") {
        typeSpecifiers.push(s);
      } else {
        valueSpecifiers.push(s);
      }
    } else if (s.type === AST_NODE_TYPES.ExportSpecifier) {
      if (s.exportKind === "type") {
        typeSpecifiers.push(s);
      } else {
        valueSpecifiers.push(s);
      }
    }
  }

  return { typeSpecifiers, valueSpecifiers, defaultSpecifier };
}

// eslint-disable-next-line ts/no-unnecessary-type-arguments
const rule: ESLintUtils.RuleModule<MessageIds, Options> = createEslintRule({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Disallow inline type modifiers in import/export.",
    },
    fixable: "code",
    schema: [],
    messages: {
      noInlineTypeModifier: "Expected no inline type modifier.",
    },
  },
  defaultOptions: [],
  create: (context) => ({
    ImportDeclaration: (node) => {
      const { typeSpecifiers, valueSpecifiers, defaultSpecifier } =
        classifySpecifiers(node.specifiers);

      if (typeSpecifiers.length === 0) {
        return;
      }

      const texts: string[] = [];

      texts.push(generateTypeText(typeSpecifiers));

      if (defaultSpecifier || valueSpecifiers.length > 0) {
        texts.push(generateValueText(valueSpecifiers, defaultSpecifier));
      }

      const textToReport = texts
        .map((text) => `import ${text} from "${node.source.value}";`)
        .join("\n");

      context.report({
        node,
        messageId: "noInlineTypeModifier",
        fix(fixer) {
          return fixer.replaceText(node, textToReport);
        },
      });
    },

    ExportNamedDeclaration: (node) => {
      if (node.declaration || node.exportKind === "type") {
        return;
      }

      const { typeSpecifiers, valueSpecifiers } = classifySpecifiers(
        node.specifiers,
      );

      if (typeSpecifiers.length === 0) {
        return;
      }

      const fromText = node.source ? ` from "${node.source.value}"` : "";

      const texts: string[] = [];

      texts.push(generateTypeText(typeSpecifiers));

      if (valueSpecifiers.length > 0) {
        texts.push(generateValueText(valueSpecifiers));
      }

      const textToReport = texts
        .map((text) => `export ${text}${fromText};`)
        .join("\n");

      context.report({
        node,
        messageId: "noInlineTypeModifier",
        fix(fixer) {
          return fixer.replaceText(node, textToReport);
        },
      });
    },
  }),
});

export default rule;
