"use strict";

const shared = require("./shared");

// `export * from "a"` does not have `.specifiers`.
const getSpecifiers = (exportNode) => exportNode.specifiers || [];

// Full export-from statement.
// export {a, b} from "A"
// export * from "A"
// export * as A from "A"
const isExportFrom = (node) =>
  (node.type === "ExportNamedDeclaration" ||
    node.type === "ExportAllDeclaration") &&
  node.source != null;

function isPartOfChunk(node, lastNode, sourceCode) {
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

function maybeReportChunkSorting(chunk, context) {
  const { sourceCode } = context;
  const items = shared.getImportExportItems(
    chunk,
    sourceCode,
    () => false, // isSideEffectImport
    getSpecifiers,
  );
  const sortedItems = [[shared.sortImportExportItems(items)]];
  const sorted = shared.printSortedItems(sortedItems, items, sourceCode);
  const { start } = items[0];
  const { end } = items[items.length - 1];
  shared.maybeReportSorting(context, sorted, start, end);
}

function maybeReportExportSpecifierSorting(node, context) {
  const sorted = shared.printWithSortedSpecifiers(
    node,
    context.sourceCode,
    getSpecifiers,
  );
  const [start, end] = node.range;
  shared.maybeReportSorting(context, sorted, start, end);
}

module.exports = {
  meta: {
    type: "layout",
    fixable: "code",
    schema: [],
    docs: {
      url: "https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order",
    },
    messages: {
      sort: "Run autofix to sort these exports!",
    },
  },
  create: (context) => {
    const parents = new Set();

    function addParent(node) {
      if (isExportFrom(node)) {
        parents.add(node.parent);
      }
    }

    return {
      "ExportNamedDeclaration": (node) => {
        if (node.source == null && node.declaration == null) {
          maybeReportExportSpecifierSorting(node, context);
        } else {
          addParent(node);
        }
      },

      "ExportAllDeclaration": addParent,

      "Program:exit": () => {
        const sourceCode = context.sourceCode;
        for (const parent of parents) {
          for (const chunk of shared.extractChunks(parent, (node, lastNode) =>
            isPartOfChunk(node, lastNode, sourceCode),
          )) {
            maybeReportChunkSorting(chunk, context);
          }
        }
        parents.clear();
      },
    };
  },
};
