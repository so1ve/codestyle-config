module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "@so1ve/eslint-config-ts",
  ],
  settings: {
    react: {
      version: "17.0",
    },
  },
  rules: {
    "jsx-quotes": ["warn", "prefer-double"],
    "react/jsx-closing-bracket-location": ["warn", "line-aligned"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-closing-tag-location": ["warn"],
    "react/jsx-curly-spacing": ["warn", { when: "never" }],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-indent": ["warn", 2, { indentLogicalExpressions: true }],
    "react/jsx-no-comment-textnodes": ["warn"],
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
    "react/jsx-one-expression-per-line": ["warn"],
    "react/jsx-pascal-case": ["warn"],
    "react/jsx-tag-spacing": ["warn", {
      beforeSelfClosing: "always",
      beforeClosing: "never",
    }],
    "react/jsx-wrap-multilines": ["warn", {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      prop: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
    }],
    "react/self-closing-comp": ["warn", {
      component: true,
      html: true,
    }],
  },
};
