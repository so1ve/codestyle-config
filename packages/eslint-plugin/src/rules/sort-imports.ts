import type { ESLintUtils, TSESLint, TSESTree } from "@typescript-eslint/utils";

import { createEslintRule } from "../utils";
import {
  extractChunks,
  getImportExportItems,
  isPunctuator,
  maybeReportSorting,
  printSortedItems,
  sortImportExportItems,
} from "../utils/sort-imports";

export const RULE_NAME = "sort-imports";
export type MessageIds = "sort";
export type Options = [
  {
    groups?: string[][];
  },
];

type ParentWithBody = TSESTree.Node & { body: TSESTree.Node[] };

function isParentWithBody(
  node: TSESTree.Node | null | undefined,
): node is ParentWithBody {
  if (!node) {
    return false;
  }

  if (!("body" in node)) {
    return false;
  }

  const maybe = node as { body?: unknown };

  return Array.isArray(maybe.body);
}

const defaultGroups: string[][] = [
  ["^node:"],
  ["^@?\\w"],
  ["^"],
  ["^\\."],
  ["^\\u0000"],
];

const isImportSpecifier = (
  node: TSESTree.Node,
): node is TSESTree.ImportSpecifier => node.type === "ImportSpecifier";

const getSpecifiers = (
  importNode: TSESTree.ImportDeclaration,
): TSESTree.ImportSpecifier[] =>
  importNode.specifiers.filter(isImportSpecifier);

const isImport = (node: TSESTree.Node): node is TSESTree.ImportDeclaration =>
  node.type === "ImportDeclaration";

function isSideEffectImport(
  importNode: TSESTree.ImportDeclaration,
  sourceCode: TSESLint.SourceCode,
): boolean {
  const token = sourceCode.getFirstToken(importNode, { skip: 1 });
  const startsWithBrace = token != null && isPunctuator(token, "{");

  return (
    importNode.specifiers.length === 0 &&
    (!importNode.importKind || importNode.importKind === "value") &&
    !startsWithBrace
  );
}

const rule: ESLintUtils.RuleModule<MessageIds, Options> = createEslintRule({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Sort import declarations.",
      url: "https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          groups: {
            type: "array",
            items: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      sort: "Run autofix to sort these imports!",
    },
  },
  defaultOptions: [{ groups: defaultGroups }],
  create: (context) => {
    const rawGroups = context.options[0]?.groups ?? defaultGroups;

    const outerGroups = rawGroups.map((groups) =>
      groups.map((item) => new RegExp(item, "u")),
    );

    const parents = new Set<ParentWithBody>();

    return {
      ImportDeclaration(node) {
        if (isParentWithBody(node.parent)) {
          parents.add(node.parent);
        }
      },

      "Program:exit"() {
        const sourceCode = context.sourceCode;

        for (const parent of parents) {
          for (const chunk of extractChunks(parent, (node, lastNode) => {
            if (!isImport(node)) {
              return "NotPartOfChunk";
            }

            return lastNode != null &&
              isImport(lastNode) &&
              lastNode.loc.end.line === node.loc.start.line
              ? "PartOfNewChunk"
              : "PartOfChunk";
          })) {
            maybeReportChunkSorting(chunk, context, outerGroups, sourceCode);
          }
        }

        parents.clear();
      },
    };
  },
});

export default rule;

type ImportItems = ReturnType<
  typeof getImportExportItems<TSESTree.ImportDeclaration>
>;

type ImportItem = ImportItems[number];

function maybeReportChunkSorting(
  chunk: TSESTree.Node[],
  context: TSESLint.RuleContext<MessageIds, Options>,
  outerGroups: RegExp[][],
  sourceCode: TSESLint.SourceCode,
): void {
  const items = getImportExportItems<TSESTree.ImportDeclaration>(
    chunk.filter(isImport),
    sourceCode,
    isSideEffectImport,
    getSpecifiers,
  );

  const sortedItems = makeSortedItems(items, outerGroups);
  const sorted = printSortedItems(sortedItems, items, sourceCode);

  const start = items[0].start;
  const end = items[items.length - 1].end;

  maybeReportSorting(context, sorted, start, end);
}

function makeSortedItems(
  items: ImportItems,
  outerGroups: RegExp[][],
): ImportItem[][][] {
  const itemGroups = outerGroups.map((groups) =>
    groups.map((regex) => ({ regex, items: [] as ImportItem[] })),
  );
  const rest: ImportItem[] = [];

  for (const item of items) {
    const { originalSource } = item.source;
    const source = item.isSideEffectImport
      ? `\0${originalSource}`
      : item.source.kind === "value"
        ? originalSource
        : `${originalSource}\0`;

    let matchedGroup:
      | {
          regex: RegExp;
          items: ImportItem[];
        }
      | undefined;
    let longestMatchLength = -1;

    for (const groups of itemGroups) {
      for (const group of groups) {
        const match = group.regex.exec(source);
        if (match != null && match[0].length > longestMatchLength) {
          matchedGroup = group;
          longestMatchLength = match[0].length;
        }
      }
    }

    if (matchedGroup == null) {
      rest.push(item);
    } else {
      matchedGroup.items.push(item);
    }
  }

  return [...itemGroups, [{ regex: /^/, items: rest }]]
    .map((groups) => groups.filter((group) => group.items.length > 0))
    .filter((groups) => groups.length > 0)
    .map((groups) => groups.map((group) => sortImportExportItems(group.items)));
}
