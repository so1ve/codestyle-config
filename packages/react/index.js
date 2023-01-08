// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "@so1ve/eslint-config-ts",
  ],
  settings: {
    react: {
      version: "17.0",
    },
  },
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-closing-tag-location": ["error"],
    "react/jsx-curly-spacing": ["error", { when: "never" }],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-indent": ["error", 2, { indentLogicalExpressions: true }],
    "react/jsx-no-comment-textnodes": ["error"],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-one-expression-per-line": ["error"],
    "react/jsx-pascal-case": ["error"],
    "react/jsx-tag-spacing": ["error", {
      beforeSelfClosing: "always",
      beforeClosing: "never",
    }],
    "react/jsx-sort-props": ["error", {
      callbacksLast: true,
      shorthandFirst: true,
      multiline: "last",
      ignoreCase: true,
      noSortAlphabetically: true,
      reservedFirst: true,
      locale: "auto",
    }],
    "react/jsx-wrap-multilines": ["error", {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      prop: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
    }],
    "react/self-closing-comp": ["error", {
      component: true,
      html: true,
    }],
  },
});
