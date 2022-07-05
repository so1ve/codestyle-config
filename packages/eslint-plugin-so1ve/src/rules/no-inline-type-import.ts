// Ported from https://github.com/gajus/eslint-plugin-canonical/blob/master/src/rules/preferInlineTypeImport.js
// by Gajus Kuizinas https://github.com/gajus

import type { decodedTextSpanIntersectsWith } from "typescript";
import type { TSESLint, TSESTree } from "@typescript-eslint/utils";
import type { ImportSpecifier } from "@typescript-eslint/types/dist/generated/ast-spec";
import P, { type ParserServices, parse } from "@typescript-eslint/parser";
import type * as P2 from "@typescript-eslint/parser";
import type P3 from "@typescript-eslint/parser";
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
        if (node.specifiers.every(s => ["ImportNamespaceSpecifier", "ImportDefaultSpecifier"].includes(s.type))) { return; }

        if (node.specifiers.length !== 1 || node.specifiers[0].type !== "ImportSpecifier" || node.specifiers[0].importKind !== "type") { return; }

        context.report({
          *fix (fixer) {
            yield * removeTypeSpecifier(fixer, sourceCode, node);

            for (const specifier of node.specifiers) {
              const start = specifier.parent!.range[0];
              yield fixer.insertTextAfterRange([start, start + 6], " type");
            }
          },
          loc: node.loc,
          messageId: "noInlineTypeImport",
          node,
        });
      },
    };
  },
});

function *removeTypeSpecifier (fixer: TSESLint.RuleFixer, sourceCode: TSESLint.SourceCode, node: TSESTree.Node) {
  const importKeyword = sourceCode.getFirstToken(node)!;

  const typeIdentifier = sourceCode.getTokensAfter(importKeyword)[1]!;

  yield fixer.remove(typeIdentifier);
}
