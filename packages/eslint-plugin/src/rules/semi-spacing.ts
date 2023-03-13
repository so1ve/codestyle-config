import { AST_TOKEN_TYPES } from "@typescript-eslint/utils";
import { createEslintRule } from "../utils";

export const RULE_NAME = "semi-spacing";
export type MessageIds = "noSpaceBeforeSemi";
export type Options = [];
type AlphabetLowercase = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
type Numeric = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type AlphaNumeric = AlphabetLowercase | Uppercase<AlphabetLowercase> | Numeric;

export type CamelCase<Word extends string> = (
  Word extends `${infer FirstCharacter}${infer Rest}`
    ? (
        FirstCharacter extends AlphaNumeric
          ? `${FirstCharacter}${CamelCase<Rest>}`
          : Capitalize<CamelCase<Rest>>
      )
    : Word
);
export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: "layout",
    docs: {
      description: "Semicolon spacing in types",
      recommended: "error",
    },
    fixable: "whitespace",
    schema: [],
    messages: {
      noSpaceBeforeSemi: "Expected no space before semicolon",
    },
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    return {
      TSTypeAliasDeclaration (node) {
        const leftToken = node.typeAnnotation;
        const rightToken = sourceCode.getTokenAfter(node.typeAnnotation);
        if (!rightToken || rightToken.type !== AST_TOKEN_TYPES.Punctuator || rightToken.value !== ";") { return; }
        const hasSpacing = sourceCode.isSpaceBetween(leftToken, rightToken);
        if (hasSpacing) {
          context.report({
            loc: {
              start: {
                line: leftToken.loc.end.line,
                column: leftToken.loc.end.column,
              },
              end: {
                line: rightToken.loc.start.line,
                column: rightToken.loc.start.column,
              },
            },
            node,
            messageId: "noSpaceBeforeSemi",
            *fix (fixer) {
              yield fixer.removeRange([leftToken.range[1], rightToken.range[0]]);
            },
          });
        }
      },
    };
  },
});
