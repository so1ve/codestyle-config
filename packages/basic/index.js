// @ts-check

const { defineConfig } = require("eslint-define-config");

const disableDprintConflict = require("./disable-dprint-conflict");

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  plugins: [
    "@so1ve",
    "@html-eslint",
    "jsdoc",
    "unicorn",
    "unused-imports",
    "no-only-tests",
    "dprint-integration",
  ],
  extends: [
    "./standard",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
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
    "*.css",
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
        "@html-eslint/no-trailing-spaces": "error",
      },
    },
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/quotes": ["error", "double"],
        "jsonc/quote-props": ["error", "always"],
        "jsonc/array-bracket-spacing": ["error", "never"],
        "jsonc/comma-dangle": ["error", "never"],
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": ["error", { multiline: true, consistent: true }],
        "jsonc/object-curly-spacing": ["error", "always"],
        "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
        "eol-last": "error",
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
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "name",
              "displayName",
              "private",
              "version",
              "packageManager",
              "publisher",
              "author",
              "contributors",
              "description",
              "keywords",
              "type",
              "homepage",
              "repository",
              "bugs",
              "funding",
              "categories",
              "license",
              "sideEffects",
              "exports",
              "main",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "typesVersions",
              "bin",
              "icon",
              "files",
              "engines",
              "activationEvents",
              "contributes",
              "publishConfig",
              "scripts",
              "peerDependencies",
              "dependencies",
              "devDependencies",
              "optionalDependencies",
              "peerDependenciesMeta",
              "pnpm",
              "overrides",
              "resolutions",
              "husky",
              "simple-git-hooks",
              "lint-staged",
              "eslintConfig",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
          {
            pathPattern: "^exports.*$",
            order: [
              "types",
              "require",
              "import",
            ],
          },
        ],
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.js", "*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        "no-void": ["error", { allowAsStatement: true }],
      },
    },
    {
      files: ["*.js", "*.jsx", "*.cjs", "*.mjs", "*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        // Not supported in ESLint 8 yet
        // "jsdoc/check-examples": "error",
        "jsdoc/require-jsdoc": "off",
        "jsdoc/check-indentation": "error",
        "jsdoc/check-param-names": ["error", { enableFixer: true }],
        "jsdoc/require-returns-type": "off",
        "jsdoc/require-returns": "off",
      },
      extends: [
        "plugin:jsdoc/recommended-error",
      ],
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
    {
      files: [
        "*.js",
        "*.jsx",
        "*.cjs",
        "*.mjs",
        "*.ts",
        "*.tsx",
        "*.mts",
        "*.cts",
        "*.json",
        "*.json5",
        "*.jsonc",
      ],
      rules: disableDprintConflict,
    },
  ],
  rules: {
    // import
    "import/order": ["error", {
      "newlines-between": "always",
      "warnOnUnassignedImports": true,
    }],
    "import/first": "error",
    "import/exports-last": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",

    // Common
    "semi": ["error", "always"],
    "curly": ["error", "all"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent-as-needed"],

    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],

    "no-param-reassign": "off",
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": ["error", "always"],
    "camelcase": "off",
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline"],
    "no-sparse-arrays": "error",
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-console": ["error", { allow: ["error", "warn", "table", "time"] }],
    "no-cond-assign": ["error", "always"],
    "func-call-spacing": ["off", "never"],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "indent": ["error", 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    "no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "object-curly-spacing": ["error", "always"],
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
        avoidQuotes: true,
      },
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "space-before-function-paren": ["error", "always"],
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "generator-star-spacing": "off",
    "spaced-comment": ["error", "always", {
      line: {
        markers: ["/"],
        exceptions: ["/", "#"],
      },
      block: {
        markers: ["!"],
        exceptions: ["*"],
        balanced: true,
      },
    }],

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    "complexity": ["off", 11],
    "eqeqeq": ["error", "smart"],
    "no-alert": "error",
    "no-case-declarations": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-useless-escape": "off",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",
    "operator-linebreak": ["error", "before"],

    // unicorns
    // Pass error message when throwing errors
    "unicorn/error-message": "error",
    // Uppercase regex escapes
    "unicorn/escape-case": "error",
    // Array.isArray instead of instanceof
    "unicorn/no-instanceof-array": "error",
    // Prevent deprecated `new Buffer()`
    "unicorn/no-new-buffer": "error",
    // Keep regex literals safe!
    "unicorn/no-unsafe-regex": "off",
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    "unicorn/number-literal-case": "error",
    // includes over indexOf when checking for existence
    "unicorn/prefer-includes": "error",
    // String methods startsWith/endsWith instead of more complicated stuff
    "unicorn/prefer-string-starts-ends-with": "error",
    // textContent instead of innerText
    "unicorn/prefer-text-content": "error",
    // Enforce throwing type error when throwing error while checking typeof
    "unicorn/prefer-type-error": "error",
    // Enforce adding `node:` protocol
    "unicorn/prefer-node-protocol": "error",
    // Use new when throwing error
    "unicorn/throw-new-error": "error",

    "no-use-before-define": ["error", { functions: false, classes: false, variables: true }],
    "eslint-comments/disable-enable-pair": "off",
    "import/no-named-as-default-member": "off",
    "n/no-callback-literal": "off",

    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],

    // yml
    "yml/quotes": ["error", { prefer: "double", avoidEscape: false }],
    "yml/no-empty-document": "off",

    // so1ve
    "@so1ve/import-dedupe": "error",
    "@so1ve/no-space-before-paren": "error",

    "dprint-integration/dprint": [
      "error",
      {},
      {
        typescript: {
          "useBraces": "always",
          "quoteStyle": "alwaysDouble",
          "functionDeclaration.spaceBeforeParentheses": true,
          "module.sortImportDeclarations": "caseSensitive",
          "module.sortExportDeclarations": "caseSensitive",
          "exportDeclaration.sortNamedExports": "caseSensitive",
          "importDeclaration.sortNamedImports": "caseSensitive",
        },
      },
    ],
    ...disableDprintConflict,
  },
});
