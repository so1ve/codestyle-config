import { GLOB_ESLINTRC, GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from "../globs";
import type { TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function jsonc(): Promise<TypedFlatConfigItem[]> {
  const pluginJsonc = await interopDefault(import("eslint-plugin-jsonc"));

  return [
    {
      name: "so1ve/jsonc/setup",
      plugins: {
        jsonc: pluginJsonc,
      },
    },
    {
      name: "so1ve/jsonc/rules",
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC, GLOB_ESLINTRC],
      language: "jsonc/x",
      // @keep-sorted
      rules: {
        "jsonc/no-bigint-literals": "error",
        "jsonc/no-binary-expression": "error",
        "jsonc/no-binary-numeric-literals": "error",
        "jsonc/no-dupe-keys": "error",
        "jsonc/no-escape-sequence-in-identifier": "error",
        "jsonc/no-floating-decimal": "error",
        "jsonc/no-hexadecimal-numeric-literals": "error",
        "jsonc/no-infinity": "error",
        "jsonc/no-irregular-whitespace": "error",
        "jsonc/no-multi-str": "error",
        "jsonc/no-nan": "error",
        "jsonc/no-number-props": "error",
        "jsonc/no-numeric-separators": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/no-octal-numeric-literals": "error",
        "jsonc/no-octal": "error",
        "jsonc/no-parenthesized": "error",
        "jsonc/no-plus-sign": "error",
        "jsonc/no-regexp-literals": "error",
        "jsonc/no-sparse-arrays": "error",
        "jsonc/no-template-literals": "error",
        "jsonc/no-undefined-value": "error",
        "jsonc/no-unicode-codepoint-escapes": "error",
        "jsonc/no-useless-escape": "error",
        "jsonc/quote-props": "error",
        "jsonc/quotes-props": "off",
        "jsonc/quotes": "off",
        "jsonc/space-unary-ops": "error",
        "jsonc/valid-json-number": "error",
        "jsonc/vue-custom-block/no-parsing-error": "error",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "strict": "off",
      },
    },
  ];
}
