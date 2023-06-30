// @ts-check
const fs = require("node:fs");
const path = require("node:path");
const prettierConfig = require("@so1ve/prettier-config");
const { defineConfig } = require("eslint-define-config");

const makePrettierConfig = (inlineConfig) => ({
  ...prettierConfig,
  ...inlineConfig,
});
/** @returns {import("eslint-define-config").Override} */
const makePlainOverride = (extension, parser) => ({
  files: [`*.${extension}`],
  parser: "eslint-parser-plain",
  rules: {
    "@so1ve/prettier/prettier": ["error", makePrettierConfig({ parser })],
  },
});
const PLAIN_OVERRIDES = [
  ...["sql", "sh", "css", "scss", "less"].map((lang) =>
    makePlainOverride(lang, lang),
  ),
  makePlainOverride("rs", "jinx-rust"),
];

const cwd = process.cwd();
const hasUnoConfig =
  fs.existsSync(path.join(cwd, "uno.config.ts")) ||
  fs.existsSync(path.join(cwd, "unocss.config.ts"));

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  plugins: [
    "@so1ve",
    "@so1ve/prettier",
    "@so1ve/sort-imports",
    "@html-eslint",
    "@unocss",
    "jsdoc",
    "vitest",
    "json-schema-validator",
    "unicorn",
    "unused-imports",
    "no-only-tests",
  ],
  extends: [
    "./standard",
    "plugin:import/recommended",
    "plugin:@eslint-community/eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
    "plugin:vitest/recommended",
    "plugin:eslint-plugin-jest-formatting/strict",
    "plugin:regexp/recommended",
    "plugin:toml/standard",
    "plugin:array-func/all",
  ],
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist*",
    "release",
    "LICENSE*",
    "output",
    "out",
    "coverage",
    "public",
    "!src/public",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    // ignore for in lint-staged
    "*.png",
    "*.ico",
    "*.patch",
    "*.txt",
    "*.crt",
    "*.key",
    // force include
    "!.github",
    "!.vitepress",
    "!.vscode",
    "!.eslintrc*",
    // force exclude
    ".vitepress/cache",
  ],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] },
    },
  },
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
      rules: {
        "@html-eslint/no-multiple-empty-lines": ["error", { max: 1 }],
        "@html-eslint/indent": "off",
        "@html-eslint/no-trailing-spaces": "off",
        "@html-eslint/require-closing-tags": "off",
        "@html-eslint/no-extra-spacing-attrs": "off",
        "@html-eslint/quotes": "off",
        "@so1ve/prettier/prettier": [
          "error",
          makePrettierConfig({ parser: "angular" }),
        ],
      },
    },
    ...PLAIN_OVERRIDES,
    {
      files: ["*.json", "*.json5", "*.jsonc", ".eslintrc"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/quotes": ["error", "double"],
        "jsonc/quote-props": ["error", "always"],
        "jsonc/array-bracket-spacing": ["error", "never"],
        "jsonc/comma-dangle": ["error", "never"],
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": [
          "error",
          { beforeColon: false, afterColon: true },
        ],
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": [
          "error",
          { multiline: true, consistent: true },
        ],
        "jsonc/object-property-newline": [
          "error",
          { allowMultiplePropertiesPerLine: true },
        ],
        "@so1ve/prettier/prettier": [
          "error",
          makePrettierConfig({ trailingComma: "none" }),
        ],
      },
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      rules: {
        "spaced-comment": "off",
      },
    },
    {
      files: ["*.toml"],
      parser: "toml-eslint-parser",
      rules: {
        "@so1ve/prettier/prettier": [
          "error",
          makePrettierConfig({ parser: "toml" }),
        ],
        "toml/padding-line-between-pairs": "off",
        "spaced-comment": "off",
      },
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^exports$",
            order: { type: "asc" },
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
          {
            pathPattern: "^exports.*$",
            order: ["types", "require", "import"],
          },
        ],
        ...makePrettierConfig(),
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.js", "*.cjs", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        "no-void": ["error", { allowAsStatement: true }],
      },
    },
    {
      files: ["scripts/**/*.*", "cli.*"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
        "no-only-tests/no-only-tests": "error",
      },
    },
    {
      // Code blocks in markdown file
      files: ["**/*.md/*.*"],
      rules: {
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-require-imports": "off",
        "import/no-unresolved": "off",
        "unused-imports/no-unused-imports": "off",
        "unused-imports/no-unused-vars": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      },
    },
  ],
  rules: {
    // import
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "import/namespace": "off", // Disable this for better performance

    "@so1ve/sort-imports/imports": ["error"],
    "@so1ve/sort-imports/exports": "error",

    // array-func
    "array-func/prefer-array-from": "off",

    // vitest
    "vitest/expect-expect": "off",
    "vitest/valid-describe-callback": "off",
    "vitest/no-alias-methods": "error",
    "vitest/no-interpolation-in-snapshots": "error",
    "vitest/no-test-prefixes": "error",
    "vitest/prefer-expect-resolves": "error",
    "vitest/prefer-comparison-matcher": "error",
    "vitest/prefer-mock-promise-shorthand": "error",
    "vitest/prefer-spy-on": "error",
    "vitest/prefer-to-be-falsy": "error",
    "vitest/prefer-to-be-object": "error",
    "vitest/prefer-to-be-truthy": "error",
    "vitest/prefer-to-contain": "error",
    "vitest/prefer-to-have-length": "error",
    "vitest/prefer-todo": "error",

    "vitest/valid-title": ["error", { allowArguments: true }],

    // json-schema-validator
    "json-schema-validator/no-invalid": "warn",

    // regexp
    "regexp/no-unused-capturing-group": "warn",

    // Common
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-spacing": "off",
    "brace-style": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": "off",
    "computed-property-spacing": "off",
    "curly": "off",
    "dot-location": "off",
    "eol-last": "off",
    "func-call-spacing": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "generator-star": "off",
    "generator-star-spacing": "off",
    "implicit-arrow-linebreak": "off",
    "indent": "off",
    "indent-legacy": "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "linebreak-style": "off",
    "max-len": "off",
    "multiline-ternary": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-arrow-condition": "off",
    "no-comma-dangle": "off",
    "no-confusing-arrow": "off",
    "no-extra-semi": "off",
    "no-floating-decimal": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-reserved-keys": "off",
    "no-spaced-func": "off",
    "no-space-before-semi": "off",
    "no-tabs": "off",
    "no-trailing-spaces": "off",
    "no-whitespace-before-property": "off",
    "no-wrap-func": "off",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "one-var-declaration-per-line": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "quotes": "off",
    "rest-spread-spacing": "off",
    "semi": "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "space-after-function-name": "off",
    "space-after-keywords": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-before-function-parentheses": "off",
    "space-before-keywords": "off",
    "space-in-brackets": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-return-throw-case": "off",
    "space-unary-ops": "off",
    "space-unary-word-ops": "off",
    "switch-colon-spacing": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "unicode-bom": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    "yield-star-spacing": "off",
    "quote-props": ["error", "consistent-as-needed"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],

    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    "no-param-reassign": "off",
    "camelcase": "off",
    "no-sparse-arrays": "error",
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-console": ["error", { allow: ["error", "warn", "table", "time"] }],
    "no-cond-assign": ["error", "always"],
    "no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-return-await": "off",

    // es6
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
      },
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          markers: ["/"],
          exceptions: ["/", "#"],
        },
        block: {
          markers: ["!"],
          exceptions: ["*"],
          balanced: true,
        },
      },
    ],

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ],
    "consistent-return": "off",
    "complexity": ["off", 11],
    "eqeqeq": ["error", "smart"],
    "no-alert": "error",
    "no-case-declarations": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-useless-escape": "off",
    "no-invalid-this": "error",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",

    // unicorns
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/number-literal-case": "error",
    "unicorn/numeric-separators-style": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/no-useless-spread": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-set-size": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/relative-url-style": ["error", "always"],
    "unicorn/empty-brace-spaces": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-array-for-each": "error",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-negated-condition": "error",
    "unicorn/switch-case-braces": "error",
    "unicorn/prefer-ternary": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-modern-math-apis": "error",
    "unicorn/prefer-json-parse-buffer": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-flat": "error",
    "unicorn/prefer-array-find": "error",

    "@eslint-community/eslint-comments/disable-enable-pair": "off",
    "import/no-named-as-default-member": "off",
    "n/no-callback-literal": "off",

    // yml
    "yml/quotes": ["error", { prefer: "double", avoidEscape: false }],
    "yml/no-empty-document": "off",

    // Unocss
    ...(hasUnoConfig
      ? { "@unocss/order": "error", "@unocss/order-attributify": "error" }
      : {}),

    // so1ve
    "@so1ve/import-dedupe": "error",
    "@so1ve/no-useless-template-string": "error",
    "@so1ve/no-negated-comparison": "error",
    "@so1ve/no-import-promises-as": "error",
    "@so1ve/pad-after-last-import": "error",
    "@so1ve/function-style": "error",

    "@so1ve/prettier/prettier": ["error", prettierConfig],
  },
});
