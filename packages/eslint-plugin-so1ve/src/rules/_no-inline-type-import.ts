// Ported from https://github.com/gajus/eslint-plugin-canonical/blob/master/src/rules/preferInlineTypeImport.js
// by Gajus Kuizinas https://github.com/gajus

import type { TSESLint, TSESTree } from "@typescript-eslint/utils";
import type { ImportDefaultSpecifier, ImportSpecifier } from "@typescript-eslint/types/dist/generated/ast-spec";
// import P, { type ParserServices as PP, parse } from "@typescript-eslint/parser";
import type { AST } from "@typescript-eslint/utils/dist/ts-eslint";
import E, { ESLint } from "@typescript-eslint/utils/dist/ts-eslint";
// import type * as P2 from "@typescript-eslint/parser";
// import type P3 from "@typescript-eslint/parser";
import { createEslintRule } from "../utils";

export const RULE_NAME = "no-inline-type-import";
export type MessageIds = "noInlineTypeImport";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    docs: {
      description: "No inline type import",
      recommended: "error",
    },
    fixable: "code",
    schema: [],
    messages: {
      noInlineTypeImport: "No inline type import",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    return {
      ImportDeclaration: (node) => {
        // e.g import { default as ts } from "typescript";
        if (node.importKind === "value" && node.specifiers.every(s => (s as ImportSpecifier).importKind === "value")) { return; }
        if (node.specifiers.every(s => ["ImportNamespaceSpecifier", "ImportDefaultSpecifier"].includes(s.type))) { return; }
        // e.g import type { TSESLint, TSESTree } from "@typescript-eslint/utils";
        if (node.importKind === "type" && node.specifiers.every(s => (s as ImportSpecifier).importKind === "value")) { return; }

        // if (node.specifiers.length !== 1 || node.specifiers[0].type !== "ImportSpecifier" || node.specifiers[0].importKind !== "type") { return; }

        const ss = node.specifiers as (ImportSpecifier | ImportDefaultSpecifier)[];
        const defaultImport = ss.find(s => s.type === "ImportDefaultSpecifier") as ImportDefaultSpecifier | undefined;
        const valueImports = ss.filter(s => (s as ImportSpecifier).importKind === "value") as ImportSpecifier[];
        const typeImports = ss.filter(s => (s as ImportSpecifier).importKind === "type") as ImportSpecifier[];
        const importFrom = node.source.value;

        console.log({
          defaultImport,
          valueImports,
          typeImports,
          importFrom,
        });

        context.report({
          *fix (fixer) {
            // console.log(node);
            // yield fixer.remove(node);
            yield * removeImportStatement(fixer, sourceCode, node);

            yield * insertTypeImports(fixer, node, typeImports, importFrom);

            yield * insertDefaultAndValueImports(fixer, node, defaultImport, valueImports, importFrom);
            // for (const specifier of node.specifiers) {
            //   const start = specifier.parent!.range[0];
            //   yield fixer.insertTextAfterRange([start, start + 6], " type");
            // }
          },
          loc: node.loc,
          messageId: "noInlineTypeImport",
          node,
        });
      },
    };
  },
});

function *removeImportStatement (fixer: TSESLint.RuleFixer, sourceCode: TSESLint.SourceCode, node: TSESTree.Node) {
  const tokens = sourceCode.getTokens(node)!;

  for (const tok of tokens) {
    yield fixer.remove(tok);
  }
}

function *insertTypeImports (fixer: TSESLint.RuleFixer, node: TSESTree.Node, imports: ImportSpecifier[], importFrom: string) {
  if (!imports.length) { return; }
  yield fixer.insertTextBefore(node, typeImportsToString(imports, importFrom));
  // for (const specifier of imports) {
  //   const start = specifier.parent!.range[0];
  //   yield fixer.insertTextAfterRange([start, start + 6], " type");
  // }
}

function *insertDefaultAndValueImports (fixer: TSESLint.RuleFixer, node: TSESTree.Node, defaultImport: ImportDefaultSpecifier | undefined, valueImports: ImportSpecifier[], importFrom: string) {
  yield fixer.insertTextBefore(node, defaultAndValueImportsToString(defaultImport, valueImports, importFrom));
  // for (const specifier of imports) {
  //   const start = specifier.parent!.range[0];
  //   yield fixer.insertTextAfterRange([start, start + 6], " type");
  // }
}

function typeImportsToString (imports: ImportSpecifier[], importFrom: string) {
  return "";
}

function defaultAndValueImportsToString (defaultImport: ImportDefaultSpecifier | undefined, valueImports: ImportSpecifier[], importFrom: string) {
  const defaultImportString = defaultImport?.local.name || "";
  const valueImportStrings = valueImports.map(i => getResolvedImportName(i.imported.name, i.local.name));
  let result = "import ";
  if (!defaultImportString && !valueImports.length) { return ""; }
  if (defaultImportString) {
    result += `${defaultImportString}`;
    if (valueImports.length) {
      result += ", ";
    } else {
      result += " ";
    }
  }
  if (valueImportStrings.length) {
    result += `{ ${valueImportStrings.join(", ")} } `;
  }
  result += `from "${importFrom}";`;
  return result;
}

function getResolvedImportName (imported: string, local: string) {
  return imported === local ? imported : `${imported} as ${local}`;
}
