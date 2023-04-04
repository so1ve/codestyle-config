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
    "react/jsx-child-element-spacing": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-space-before-closing": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-no-comment-textnodes": ["error"],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-pascal-case": ["error"],
    "react/jsx-sort-props": ["error", {
      callbacksLast: true,
      shorthandFirst: true,
      multiline: "last",
      ignoreCase: true,
      noSortAlphabetically: true,
      reservedFirst: true,
      locale: "auto",
    }],
    "react/self-closing-comp": ["error", {
      component: true,
      html: true,
    }],
  },
});
