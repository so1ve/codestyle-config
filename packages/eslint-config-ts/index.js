// @ts-check
const fs = require("node:fs");
const path = require("node:path");

const basic = require("@so1ve/eslint-config-basic");
const { defineConfig } = require("eslint-define-config");

const tsconfig = process.env.ESLINT_TSCONFIG || "tsconfig.json";

/** @type {import("eslint-define-config").Override} */
const typescriptOverride = {
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: [tsconfig],
  },
  extends: ["plugin:etc/recommended"],
  parser: "@typescript-eslint/parser",
  excludedFiles: ["**/*.md/*.*"],
  files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
  rules: {
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],
    "no-void": ["error", { allowAsStatement: true }],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowAny: true,
        allowNumber: true,
        allowBoolean: true,
      },
    ],
    "@typescript-eslint/array-type": [
      "error",
      { default: "array", readonly: "array" },
    ],
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    
  },
};

/** @type {import("eslint-define-config").Override} */
const jestOverride = {
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
  files: ["**/__tests__/**/*.ts", "**/*.spec.ts", "**/*.test.ts"],
  plugins: ["jest"],
  rules: {
    // you should turn the original rule off *only* for test files
    "jest/unbound-method": "error",
  },
};

const overrides = fs.existsSync(path.join(process.cwd(), tsconfig))
  ? [typescriptOverride, jestOverride]
  : [];

module.exports = defineConfig({
  extends: [
    "@so1ve/eslint-config-basic",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["no-explicit-type-exports"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
      typescript: {
        extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  overrides: [...(basic.overrides || []), ...overrides],
  rules: {
    "import/named": "off",

    // TS
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        minimumDescriptionLength: 0,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", disallowTypeAnnotations: false },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
    ],
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/no-require-imports": "error",

    // Override JS
    "no-useless-constructor": "off",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ],
    "object-curly-spacing": "off",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "space-before-function-paren": "off",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],

    "no-explicit-type-exports/no-explicit-type-exports": "error",

    // so1ve
    "@so1ve/no-inline-type-import": "error",

    // off
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    // handled by unused-imports/no-unused-imports
    "@typescript-eslint/no-unused-vars": "off",
  },
});
