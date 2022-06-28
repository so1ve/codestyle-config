// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require("@so1ve/eslint-config-basic");

module.exports = {
  extends: [
    "@so1ve/eslint-config-basic",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: basic.overrides,
  rules: {
    "import/named": "off",

    // TS
    "@typescript-eslint/semi": ["warn", "always"],
    "@typescript-eslint/ban-ts-comment": ["warn", { "ts-ignore": "allow-with-description" }],
    "@typescript-eslint/member-delimiter-style": ["warn", { multiline: { delimiter: "none" } }],
    "@typescript-eslint/type-annotation-spacing": ["warn", {}],
    "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports", disallowTypeAnnotations: false }],
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    "@typescript-eslint/prefer-ts-expect-error": "warn",

    // Override JS
    "no-useless-constructor": "off",
    "indent": "off",
    "@typescript-eslint/indent": ["warn", 2],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["warn", { functions: false, classes: false, variables: true }],
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["warn", "1tbs", { allowSingleLine: true }],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["warn", "always"],
    "space-before-function-paren": ["warn", "always"],

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
  },
};
