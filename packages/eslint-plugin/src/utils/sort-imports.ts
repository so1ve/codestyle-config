import type { TSESLint, TSESTree } from "@typescript-eslint/utils";
import natsort from "natsort";

const NEWLINE = /(\r?\n)/;

const hasNewline = (text: string): boolean => NEWLINE.test(text);

function guessNewline(sourceCode: TSESLint.SourceCode): string {
  const match = NEWLINE.exec(sourceCode.text);

  return match == null ? "\n" : match[0];
}

type WhitespaceToken =
  | { type: "Spaces"; code: string }
  | { type: "Newline"; code: string };

type EnhanceToken<T> = T & { code: string };

type EnhancedToken = EnhanceToken<TSESTree.Token | TSESTree.Comment>;

type PrintedToken =
  | EnhancedToken
  | WhitespaceToken
  | {
      type: "Comma";
      code: ",";
    };

const withCode = <T extends TSESTree.Token | TSESTree.Comment>(
  token: T,
  sourceCode: TSESLint.SourceCode,
): T & { code: string } => ({ ...token, code: sourceCode.getText(token) });

function parseWhitespace(whitespace: string): WhitespaceToken[] {
  const allItems = whitespace.split(NEWLINE);

  const items =
    allItems.length >= 5
      ? [...allItems.slice(0, 2), ...allItems.slice(-1)]
      : allItems;

  return items
    .map((spacesOrNewline, index) =>
      index % 2 === 0
        ? ({ type: "Spaces", code: spacesOrNewline } as const)
        : ({ type: "Newline", code: spacesOrNewline } as const),
    )
    .filter((token) => token.code !== "");
}

const naturalSort = (
  ("default" in natsort ? natsort.default : natsort) as typeof natsort
)();

function compare(path1: string, path2: string): number {
  const path1Depth = path1.split("-").filter((p) => p === "__").length;
  const path2Depth = path2.split("-").filter((p) => p === "__").length;
  const path1IsDot = path1 === "_-,";
  const path2IsDot = path2 === "_-,";

  if (path1IsDot && !path2IsDot) {
    return 1;
  }
  if (path2IsDot && !path1IsDot) {
    return -1;
  }

  return path1Depth === path2Depth
    ? naturalSort(path1, path2)
    : path2Depth - path1Depth;
}

const isIdentifier = (
  node: PrintedToken,
): node is EnhancedToken & {
  type: "Identifier";
} => node.type === "Identifier";

const isKeyword = (
  node: PrintedToken,
): node is EnhancedToken & { type: "Keyword" } => node.type === "Keyword";

type PunctuatorLike = { type: string } & { value?: unknown };

export const isPunctuator = (
  node: PunctuatorLike,
  value: string,
): node is PunctuatorLike & { type: "Punctuator"; value: string } =>
  node.type === "Punctuator" &&
  typeof node.value === "string" &&
  node.value === value;

const isBlockComment = (
  node: PrintedToken,
): node is EnhanceToken<TSESTree.BlockComment> => node.type === "Block";

const isLineComment = (
  node: PrintedToken,
): node is EnhanceToken<TSESTree.LineComment> => node.type === "Line";

const isSpaces = (
  node: PrintedToken,
): node is WhitespaceToken & { type: "Spaces" } => node.type === "Spaces";

const isNewline = (
  node: PrintedToken,
): node is WhitespaceToken & { type: "Newline" } => node.type === "Newline";

interface ImportExportKindNode {
  importKind?: "type" | "value";
  exportKind?: "type" | "value";
}

const getImportExportKind = (node: ImportExportKindNode): "type" | "value" =>
  node.importKind ?? node.exportKind ?? "value";

type SourceNode = TSESTree.Node & { source: TSESTree.Literal };

function getSource(node: SourceNode): {
  source: string;
  originalSource: string;
  kind: "type" | "value";
} {
  const source = String(node.source.value);

  return {
    source: source
      .replace(/^[./]*\.$/, "$&/")
      .replace(/^[./]*\/$/, "$&,")
      .replace(/[./_-]/g, (char) => {
        switch (char) {
          case ".": {
            return "_";
          }
          case "/": {
            return "-";
          }
          case "_": {
            return ".";
          }
          case "-": {
            return "/";
          }
          default: {
            throw new Error(`Unknown source substitution character: ${char}`);
          }
        }
      }),
    originalSource: source,
    kind: getImportExportKind(node as ImportExportKindNode),
  };
}

function findLastIndex<T>(
  array: readonly T[],
  fn: (value: T, index: number, array: readonly T[]) => boolean,
): number {
  for (let index = array.length - 1; index >= 0; index--) {
    if (fn(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

export const flatMap = <T, U>(
  array: readonly T[],
  fn: (item: T, index: number) => readonly U[],
): U[] => array.flatMap((item, index) => fn(item, index));

function getAllTokens(
  node: TSESTree.Node,
  sourceCode: TSESLint.SourceCode,
): PrintedToken[] {
  const tokens = sourceCode.getTokens(node);
  const lastTokenIndex = tokens.length - 1;

  return flatMap(tokens, (token, tokenIndex) => {
    const newToken = withCode(token, sourceCode);

    if (tokenIndex === lastTokenIndex) {
      return [newToken];
    }

    const comments = sourceCode.getCommentsAfter(token);
    const last = comments.length > 0 ? comments[comments.length - 1] : token;
    const nextToken = tokens[tokenIndex + 1];

    return [
      newToken,
      ...flatMap(comments, (comment, commentIndex) => {
        const previous =
          commentIndex === 0 ? token : comments[commentIndex - 1];

        return [
          ...parseWhitespace(
            sourceCode.text.slice(previous.range[1], comment.range[0]),
          ),
          withCode(comment, sourceCode),
        ];
      }),
      ...parseWhitespace(
        sourceCode.text.slice(last.range[1], nextToken.range[0]),
      ),
    ];
  });
}

const printTokens = (tokens: readonly PrintedToken[]): string =>
  tokens.map((token) => token.code).join("");

const removeBlankLines = (whitespace: string): string =>
  printTokens(parseWhitespace(whitespace));

function printCommentsBefore(
  node: TSESTree.Node,
  comments: readonly TSESTree.Comment[],
  sourceCode: TSESLint.SourceCode,
): string {
  const lastIndex = comments.length - 1;

  return comments
    .map((comment, index) => {
      const next = index === lastIndex ? node : comments[index + 1];

      return (
        sourceCode.getText(comment) +
        removeBlankLines(sourceCode.text.slice(comment.range[1], next.range[0]))
      );
    })
    .join("");
}

const printCommentsAfter = (
  node: TSESTree.Node,
  comments: readonly TSESTree.Comment[],
  sourceCode: TSESLint.SourceCode,
): string =>
  comments
    .map((comment, index) => {
      const previous = index === 0 ? node : comments[index - 1];

      return (
        removeBlankLines(
          sourceCode.text.slice(previous.range[1], comment.range[0]),
        ) + sourceCode.getText(comment)
      );
    })
    .join("");

function getIndentationAt(
  index: number,
  sourceCode: TSESLint.SourceCode,
): string {
  const text = sourceCode.text.slice(0, index);
  const lines = text.split(NEWLINE);

  const linePrefix = lines[lines.length - 1];

  // Only treat leading whitespace as "indentation".
  // If the node starts mid-line (e.g. `;import "x"`), the prefix contains code,
  // and using it as indentation breaks range calculations and can cause unstable fixes.
  return /^\s*$/u.test(linePrefix) ? linePrefix : "";
}

function getTrailingSpacesAt(
  index: number,
  sourceCode: TSESLint.SourceCode,
): string {
  const { text } = sourceCode;

  let end = index;
  while (end < text.length) {
    const char = text[end];
    if (char === " " || char === "\t") {
      end++;
      continue;
    }
    break;
  }

  return text.slice(index, end);
}

interface ImportExportItem<TNode extends SourceNode> {
  node: TNode;
  code: string;
  start: number;
  end: number;
  isSideEffectImport: boolean;
  source: {
    source: string;
    originalSource: string;
    kind: "type" | "value";
  };
  index: number;
  needsNewline: boolean;
}

export const sortImportExportItems = <TNode extends SourceNode>(
  items: readonly ImportExportItem<TNode>[],
): ImportExportItem<TNode>[] =>
  [...items].sort((itemA, itemB) =>
    itemA.isSideEffectImport && itemB.isSideEffectImport
      ? itemA.index - itemB.index
      : itemA.isSideEffectImport
        ? -1
        : itemB.isSideEffectImport
          ? 1
          : compare(itemA.source.source, itemB.source.source) ||
            compare(itemA.source.originalSource, itemB.source.originalSource) ||
            compare(itemA.source.kind, itemB.source.kind) ||
            itemA.index - itemB.index,
  );

type SortableSpecifier = TSESTree.ImportSpecifier | TSESTree.ExportSpecifier;

interface SpecifierItem {
  before: PrintedToken[];
  after: PrintedToken[];
  specifier: PrintedToken[];
  hadComma: boolean;
  node: SortableSpecifier;
  index: number;
}

const getSpecifierName = (
  node: TSESTree.Identifier | TSESTree.StringLiteral,
): string => (node.type === "Identifier" ? node.name : node.value);

const getExternalName = (node: SortableSpecifier): string =>
  getSpecifierName("imported" in node ? node.imported : node.exported);

const getLocalName = (node: SortableSpecifier): string =>
  getSpecifierName(node.local);

function compareImportExportKind(
  kindA: "type" | "value",
  kindB: "type" | "value",
): number {
  if (kindA === kindB) {
    return 0;
  }

  return kindA === "type" ? -1 : 1;
}

const sortSpecifierItems = (items: readonly SpecifierItem[]): SpecifierItem[] =>
  [...items].sort(
    (itemA, itemB) =>
      compareImportExportKind(
        getImportExportKind(itemA.node),
        getImportExportKind(itemB.node),
      ) ||
      compare(getExternalName(itemA.node), getExternalName(itemB.node)) ||
      compare(getLocalName(itemA.node), getLocalName(itemB.node)) ||
      itemA.index - itemB.index,
  );

export type ChunkDecision = "PartOfChunk" | "PartOfNewChunk" | "NotPartOfChunk";

export function extractChunks<TNode extends TSESTree.Node>(
  parentNode: { body: readonly TNode[] },
  isPartOfChunk: (node: TNode, lastNode: TNode | undefined) => ChunkDecision,
): TNode[][] {
  const chunks: TNode[][] = [];
  let chunk: TNode[] = [];
  let lastNode: TNode | undefined;

  for (const node of parentNode.body) {
    const result = isPartOfChunk(node, lastNode);

    switch (result) {
      case "PartOfChunk": {
        chunk.push(node);
        break;
      }

      case "PartOfNewChunk": {
        if (chunk.length > 0) {
          chunks.push(chunk);
        }
        chunk = [node];
        break;
      }

      case "NotPartOfChunk": {
        if (chunk.length > 0) {
          chunks.push(chunk);
          chunk = [];
        }
        break;
      }

      default: {
        // Exhaustive check
        const _never: never = result;
        throw new Error(`Unknown chunk result: ${String(_never)}`);
      }
    }

    lastNode = node;
  }

  if (chunk.length > 0) {
    chunks.push(chunk);
  }

  return chunks;
}

export function maybeReportSorting(
  context: TSESLint.RuleContext<string, readonly unknown[]>,
  sorted: string,
  start: number,
  end: number,
): void {
  const sourceCode = context.sourceCode;
  const original = sourceCode.getText().slice(start, end);
  if (original !== sorted) {
    context.report({
      messageId: "sort",
      loc: {
        start: sourceCode.getLocFromIndex(start),
        end: sourceCode.getLocFromIndex(end),
      },
      fix: (fixer) => fixer.replaceTextRange([start, end], sorted),
    });
  }
}

export function printSortedItems<TNode extends SourceNode>(
  sortedItems: readonly (readonly (readonly ImportExportItem<TNode>[])[])[],
  originalItems: readonly ImportExportItem<TNode>[],
  sourceCode: TSESLint.SourceCode,
): string {
  const newline = guessNewline(sourceCode);

  const sorted = sortedItems
    .map((groups) =>
      groups
        .map((groupItems) => groupItems.map((item) => item.code).join(newline))
        .join(newline),
    )
    .join(newline + newline);

  const flattened = flatMap(sortedItems, (groups) => flatMap(groups, (g) => g));
  const lastSortedItem = flattened[flattened.length - 1];
  const lastOriginalItem = originalItems[originalItems.length - 1];

  const nextToken = lastSortedItem.needsNewline
    ? sourceCode.getTokenAfter(lastOriginalItem.node, {
        includeComments: true,
        filter: (token) =>
          token.type !== "Line" &&
          (token.type !== "Block" ||
            token.loc.end.line !== lastOriginalItem.node.loc.end.line),
      })
    : undefined;

  const maybeNewline =
    nextToken != null &&
    nextToken.loc.start.line === lastOriginalItem.node.loc.end.line
      ? newline
      : "";

  return sorted + maybeNewline;
}

interface SpecifierItemsResult {
  before: PrintedToken[];
  after: PrintedToken[];
  items: {
    state: "before" | "specifier" | "after";
    before: PrintedToken[];
    after: PrintedToken[];
    specifier: PrintedToken[];
    hadComma: boolean;
  }[];
}

const makeEmptyItem = (): SpecifierItemsResult["items"][number] => ({
  state: "before",
  before: [],
  after: [],
  specifier: [],
  hadComma: false,
});

function getSpecifierItems(tokens: readonly PrintedToken[]): {
  before: PrintedToken[];
  after: PrintedToken[];
  items: {
    before: PrintedToken[];
    after: PrintedToken[];
    specifier: PrintedToken[];
    hadComma: boolean;
  }[];
} {
  const result: SpecifierItemsResult = {
    before: [],
    after: [],
    items: [],
  };

  let current = makeEmptyItem();

  for (const token of tokens) {
    switch (current.state) {
      case "before": {
        switch (token.type) {
          case "Newline": {
            current.before.push(token);

            if (result.before.length === 0 && result.items.length === 0) {
              result.before = current.before;
              current = makeEmptyItem();
            }
            break;
          }

          case "Spaces":
          case "Block":
          case "Line": {
            current.before.push(token);
            break;
          }

          default: {
            if (result.before.length === 0 && result.items.length === 0) {
              result.before = current.before;
              current = makeEmptyItem();
            }

            current.state = "specifier";
            current.specifier.push(token);
          }
        }
        break;
      }

      case "specifier": {
        switch (token.type) {
          case "Punctuator": {
            if (isPunctuator(token, ",")) {
              current.hadComma = true;
              current.state = "after";
            } else {
              current.specifier.push(token);
            }
            break;
          }

          default: {
            current.specifier.push(token);
          }
        }
        break;
      }

      case "after": {
        switch (token.type) {
          case "Newline": {
            current.after.push(token);
            result.items.push(current);
            current = makeEmptyItem();
            break;
          }

          case "Spaces":
          case "Line": {
            current.after.push(token);
            break;
          }

          case "Block": {
            if (hasNewline(token.code)) {
              result.items.push(current);
              current = makeEmptyItem();
              current.before.push(token);
            } else {
              current.after.push(token);
            }
            break;
          }

          default: {
            result.items.push(current);
            current = makeEmptyItem();
            current.state = "specifier";
            current.specifier.push(token);
          }
        }
        break;
      }

      default: {
        const _never: never = current.state;
        throw new Error(`Unknown state: ${String(_never)}`);
      }
    }
  }

  switch (current.state) {
    case "before": {
      result.after = current.before;
      break;
    }

    case "specifier": {
      const lastIdentifierIndex = findLastIndex(
        current.specifier,
        (t) => isIdentifier(t) || isKeyword(t),
      );

      const specifier: PrintedToken[] = current.specifier.slice(
        0,
        lastIdentifierIndex + 1,
      );
      const after: PrintedToken[] = current.specifier.slice(
        lastIdentifierIndex + 1,
      );

      const newlineIndexRaw = after.findIndex((t) => isNewline(t));
      const newlineIndex = newlineIndexRaw === -1 ? -1 : newlineIndexRaw + 1;

      const multilineBlockCommentIndex = after.findIndex(
        (t) => isBlockComment(t) && hasNewline(t.code),
      );

      const sliceIndex =
        newlineIndex >= 0 && multilineBlockCommentIndex !== -1
          ? Math.min(newlineIndex, multilineBlockCommentIndex)
          : newlineIndex >= 0
            ? newlineIndex
            : multilineBlockCommentIndex === -1
              ? endsWithSpaces(after)
                ? after.length - 1
                : -1
              : multilineBlockCommentIndex;

      current.specifier = specifier;
      current.after = sliceIndex === -1 ? after : after.slice(0, sliceIndex);
      result.items.push(current);
      result.after = sliceIndex === -1 ? [] : after.slice(sliceIndex);

      break;
    }

    case "after": {
      if (endsWithSpaces(current.after)) {
        const last = current.after.pop();
        if (last) {
          result.after = [last];
        }
      }
      result.items.push(current);
      break;
    }

    default: {
      const _never: never = current.state;
      throw new Error(`Unknown state: ${String(_never)}`);
    }
  }

  return {
    before: result.before,
    after: result.after,
    items: result.items.map((item) => ({
      before: item.before,
      after: item.after,
      specifier: item.specifier,
      hadComma: item.hadComma,
    })),
  };
}

function needsStartingNewline(tokens: readonly PrintedToken[]): boolean {
  const before: PrintedToken[] = tokens.filter((token) => !isSpaces(token));

  if (before.length === 0) {
    return false;
  }

  const firstToken = before[0];

  return (
    isLineComment(firstToken) ||
    (isBlockComment(firstToken) && !hasNewline(firstToken.code))
  );
}

function endsWithSpaces(tokens: readonly PrintedToken[]): boolean {
  const last = tokens.length > 0 ? tokens[tokens.length - 1] : undefined;

  return last == null ? false : isSpaces(last);
}

export function printWithSortedSpecifiers<TNode extends TSESTree.Node>(
  node: TNode,
  sourceCode: TSESLint.SourceCode,
  getSpecifiers: (node: TNode) => readonly SortableSpecifier[],
): string {
  const allTokens = getAllTokens(node, sourceCode);
  const openBraceIndex = allTokens.findIndex((token) =>
    isPunctuator(token, "{"),
  );
  const closeBraceIndex = allTokens.findIndex((token) =>
    isPunctuator(token, "}"),
  );

  const specifiers = getSpecifiers(node);

  if (
    openBraceIndex === -1 ||
    closeBraceIndex === -1 ||
    specifiers.length <= 1
  ) {
    return printTokens(allTokens);
  }

  const specifierTokens = allTokens.slice(openBraceIndex + 1, closeBraceIndex);
  const itemsResult = getSpecifierItems(specifierTokens);

  const items: SpecifierItem[] = itemsResult.items.map(
    (originalItem, index) => ({
      ...originalItem,
      node: specifiers[index],
      index,
    }),
  );

  const sortedItems = sortSpecifierItems(items);

  const newline = guessNewline(sourceCode);

  const hasTrailingComma = (() => {
    for (let index = closeBraceIndex - 1; index > openBraceIndex; index--) {
      const token = allTokens[index];
      if (
        token.type === "Spaces" ||
        token.type === "Newline" ||
        token.type === "Block" ||
        token.type === "Line"
      ) {
        continue;
      }

      return isPunctuator(token, ",");
    }

    return false;
  })();

  const lastIndex = sortedItems.length - 1;

  const sorted = flatMap(sortedItems, (item, index) => {
    const previous = index === 0 ? undefined : sortedItems[index - 1];

    const maybeNewline =
      previous != null &&
      needsStartingNewline(item.before) &&
      (previous.after.length <= 0 ||
        !isNewline(previous.after[previous.after.length - 1]))
        ? [{ type: "Newline", code: newline } satisfies WhitespaceToken]
        : [];

    if (index < lastIndex || hasTrailingComma) {
      return [
        ...maybeNewline,
        ...item.before,
        ...item.specifier,
        { type: "Comma", code: "," } as const,
        ...item.after,
      ];
    }

    const nonBlankIndex = item.after.findIndex(
      (token) => !isNewline(token) && !isSpaces(token),
    );

    const after = item.hadComma
      ? nonBlankIndex === -1
        ? []
        : item.after.slice(nonBlankIndex)
      : item.after;

    return [...maybeNewline, ...item.before, ...item.specifier, ...after];
  });

  const maybeNewline =
    needsStartingNewline(itemsResult.after) &&
    !isNewline(sorted[sorted.length - 1])
      ? [{ type: "Newline", code: newline } satisfies WhitespaceToken]
      : [];

  return printTokens([
    ...allTokens.slice(0, openBraceIndex + 1),
    ...itemsResult.before,
    ...sorted,
    ...maybeNewline,
    ...itemsResult.after,
    ...allTokens.slice(closeBraceIndex),
  ]);
}

function handleLastSemicolon<TNode extends SourceNode>(
  chunk: readonly TNode[],
  sourceCode: TSESLint.SourceCode,
): TNode[] {
  const lastIndex = chunk.length - 1;
  const lastNode = chunk[lastIndex];

  const tokens = sourceCode.getLastTokens(lastNode, { count: 2 });
  if (tokens.length < 2) {
    return [...chunk];
  }

  const [nextToLastToken, lastToken] = tokens;
  const lastIsSemicolon =
    lastToken.type === "Punctuator" && lastToken.value === ";";

  if (!lastIsSemicolon) {
    return [...chunk];
  }

  const semicolonBelongsToNode =
    nextToLastToken.loc.end.line === lastToken.loc.start.line ||
    sourceCode.getTokenAfter(lastToken) == null;

  if (semicolonBelongsToNode) {
    return [...chunk];
  }

  const newLastNode = {
    ...lastNode,
    range: [lastNode.range[0], nextToLastToken.range[1]] as TSESTree.Range,
    loc: {
      start: lastNode.loc.start,
      end: nextToLastToken.loc.end,
    },
  };

  return [...chunk.slice(0, lastIndex), newLastNode];
}

export function getImportExportItems<TNode extends SourceNode>(
  passedChunk: readonly TNode[],
  sourceCode: TSESLint.SourceCode,
  isSideEffectImport: (node: TNode, sourceCode: TSESLint.SourceCode) => boolean,
  getSpecifiers: (node: TNode) => readonly SortableSpecifier[],
): ImportExportItem<TNode>[] {
  const chunk = handleLastSemicolon(passedChunk, sourceCode);

  return chunk.map((node, nodeIndex) => {
    const lastLine =
      nodeIndex === 0
        ? node.loc.start.line - 1
        : chunk[nodeIndex - 1].loc.end.line;

    const commentsBefore = sourceCode
      .getCommentsBefore(node)
      .filter(
        (comment) =>
          comment.loc.start.line <= node.loc.start.line &&
          comment.loc.end.line > lastLine &&
          (nodeIndex > 0 || comment.loc.start.line > lastLine),
      );

    const commentsAfter = sourceCode
      .getCommentsAfter(node)
      .filter((comment) => comment.loc.end.line === node.loc.end.line);

    const before = printCommentsBefore(node, commentsBefore, sourceCode);
    const after = printCommentsAfter(node, commentsAfter, sourceCode);

    const indentation = getIndentationAt(
      (commentsBefore.length > 0 ? commentsBefore[0] : node).range[0],
      sourceCode,
    );

    const trailingSpaces = getTrailingSpacesAt(
      (commentsAfter.length > 0
        ? commentsAfter[commentsAfter.length - 1]
        : node
      ).range[1],
      sourceCode,
    );

    const code =
      indentation +
      before +
      printWithSortedSpecifiers(node, sourceCode, getSpecifiers) +
      after +
      trailingSpaces;

    const all = [...commentsBefore, node, ...commentsAfter];
    const [start] = all[0].range;
    const [, end] = all[all.length - 1].range;

    const source = getSource(node);

    const lastAfter =
      commentsAfter.length > 0
        ? commentsAfter[commentsAfter.length - 1]
        : undefined;

    return {
      node,
      code,
      start: start - indentation.length,
      end: end + trailingSpaces.length,
      isSideEffectImport: isSideEffectImport(node, sourceCode),
      source,
      index: nodeIndex,
      needsNewline: lastAfter?.type === "Line",
    };
  });
}
