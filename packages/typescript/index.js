// @ts-check
const fs = require("node:fs");
const path = require("node:path");

const { defineConfig } = require("eslint-define-config");
const basic = require("@so1ve/eslint-config-basic");
const disableDprintConflict = require("@so1ve/eslint-config-basic/disable-dprint-conflict");

const tsconfig = process.env.ESLINT_TSCONFIG || "tsconfig.json";

/**
 * @type {import("eslint-define-config").Override}
 */
const typescriptOverride = {
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: [tsconfig],
  },
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
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/array-type": ["error", { default: "array", readonly: "array" }],
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
  },
};

/**
 * @type {import("eslint-define-config").Override}
 */
const jestOverride = {
  // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
  files: ["**/__tests__/**/*.ts", "**/*.spec.ts", "**/*.test.ts"],
  plugins: ["jest"],
  rules: {
    // you should turn the original rule off *only* for test files
    "jest/unbound-method": "error",
  },
};

const overrides = !fs.existsSync(path.join(process.cwd(), tsconfig))
  ? []
  : [typescriptOverride, jestOverride];

module.exports = defineConfig({
  extends: [
    "@so1ve/eslint-config-basic",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
    },
  },
  overrides: [
    ...(basic.overrides || []),
    ...overrides,
    {
      files: ["!*.vue"],
      rules: disableDprintConflict,
    },
  ],
  rules: {
    "import/named": "off",

    // TS
    "@typescript-eslint/ban-ts-comment": ["error", {
      minimumDescriptionLength: 0,
    }],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/type-annotation-spacing": ["error", {}],
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports", disallowTypeAnnotations: false }],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/prefer-ts-expect-error": "error",

    // Override JS
    "no-useless-constructor": "off",
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: [
        "TemplateLiteral *",
        "JSXElement",
        "JSXElement > *",
        "JSXAttribute",
        "JSXIdentifier",
        "JSXNamespacedName",
        "JSXMemberExpression",
        "JSXSpreadAttribute",
        "JSXExpressionContainer",
        "JSXOpeningElement",
        "JSXClosingElement",
        "JSXFragment",
        "JSXOpeningFragment",
        "JSXClosingFragment",
        "JSXText",
        "JSXEmptyExpression",
        "JSXSpreadChild",
        "TSTypeParameterInstantiation",
        "FunctionExpression > .params[decorators.length > 0]",
        "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
        "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
      ],
      offsetTernaryExpressions: true,
    }],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: false, variables: true }],
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "semi": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": ["error", "always"],
    "space-before-function-paren": "off",
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["error", { before: true, after: true }],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error", { before: false, after: true }],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["error", "functions"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    // so1ve
    "@so1ve/generic-spacing": "error",
    "@so1ve/space-between-generic-and-paren": "error",
    "@so1ve/space-in-empty-block": "error",
    "@so1ve/semi-spacing": "error",
    "@so1ve/no-inline-type-import": "error",
    // "@so1ve/space-before-function-paren": ["error", "always"],
    "@so1ve/array-bracket-spacing": "error",

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
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    // handled by unused-imports/no-unused-imports
    "@typescript-eslint/no-unused-vars": "off",
  },
});
