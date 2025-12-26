import type { ESLintUtils, TSESLint, TSESTree } from "@typescript-eslint/utils";

import { createEslintRule } from "../utils";
import {
  extractChunks,
  getImportExportItems,
  maybeReportSorting,
  printSortedItems,
  printWithSortedSpecifiers,
  sortImportExportItems,
} from "../utils/sort-imports";

export const RULE_NAME = "sort-exports";
export type MessageIds = "sort";
export type Options = [];

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

type ExportFromNode =
  | (TSESTree.ExportNamedDeclaration & { source: TSESTree.Literal })
  | (TSESTree.ExportAllDeclaration & { source: TSESTree.Literal });

const isExportFrom = (node: TSESTree.Node): node is ExportFromNode =>
  (node.type === "ExportNamedDeclaration" && node.source != null) ||
  (node.type === "ExportAllDeclaration" && node.source != null);

function isPartOfChunk(
  node: TSESTree.Node,
  lastNode: TSESTree.Node | undefined,
  sourceCode: TSESLint.SourceCode,
): "PartOfChunk" | "PartOfNewChunk" | "NotPartOfChunk" {
  if (!isExportFrom(node)) {
    return "NotPartOfChunk";
  }

  const hasGroupingComment = sourceCode
    .getCommentsBefore(node)
    .some(
      (comment) =>
        (lastNode == null || comment.loc.start.line > lastNode.loc.end.line) &&
        comment.loc.end.line < node.loc.start.line,
    );

  return hasGroupingComment ? "PartOfNewChunk" : "PartOfChunk";
}

const getSpecifiers = (
  exportNode: ExportFromNode,
): TSESTree.ExportSpecifier[] =>
  exportNode.type === "ExportNamedDeclaration" ? exportNode.specifiers : [];

function maybeReportChunkSorting(
  chunk: TSESTree.Node[],
  context: TSESLint.RuleContext<MessageIds, Options>,
): void {
  const sourceCode = context.sourceCode;

  const items = getImportExportItems(
    chunk.filter(isExportFrom),
    sourceCode,
    () => false,
    getSpecifiers,
  );

  const sortedItems = [[sortImportExportItems(items)]];
  const sorted = printSortedItems(sortedItems, items, sourceCode);

  const start = items[0].start;
  const end = items[items.length - 1].end;

  maybeReportSorting(context, sorted, start, end);
}

function maybeReportExportSpecifierSorting(
  node: TSESTree.ExportNamedDeclaration,
  context: TSESLint.RuleContext<MessageIds, Options>,
): void {
  const sorted = printWithSortedSpecifiers(
    node,
    context.sourceCode,
    (n) => n.specifiers,
  );
  const [start, end] = node.range;
  maybeReportSorting(context, sorted, start, end);
}

// eslint-disable-next-line ts/no-unnecessary-type-arguments
const rule: ESLintUtils.RuleModule<MessageIds, Options> = createEslintRule({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Sort export declarations.",
      url: "https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order",
    },
    fixable: "code",
    schema: [],
    messages: {
      sort: "Run autofix to sort these exports!",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const parents = new Set<ParentWithBody>();

    function addParent(node: TSESTree.Node): void {
      if (isExportFrom(node) && isParentWithBody(node.parent)) {
        parents.add(node.parent);
      }
    }

    return {
      ExportNamedDeclaration(node) {
        if (node.source == null && node.declaration == null) {
          maybeReportExportSpecifierSorting(node, context);
        } else {
          addParent(node);
        }
      },

      ExportAllDeclaration(node) {
        addParent(node);
      },

      "Program:exit"() {
        const sourceCode = context.sourceCode;

        for (const parent of parents) {
          for (const chunk of extractChunks(parent, (node, lastNode) =>
            isPartOfChunk(node, lastNode, sourceCode),
          )) {
            maybeReportChunkSorting(chunk, context);
          }
        }

        parents.clear();
      },
    };
  },
});

export default rule;
