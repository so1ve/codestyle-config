// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  extends: ["./eslint-plugin-vue/recommended", "@so1ve/eslint-config-ts"],
  rules: {
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",

    // reactivity transform
    "vue/no-setup-props-destructure": "off",

    "vue/component-tags-order": [
      "warn",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/block-tag-newline": [
      "warn",
      {
        singleline: "always",
        multiline: "always",
        maxEmptyLines: 0,
      },
    ],
    "vue/component-api-style": ["warn", ["script-setup", "composition"]],
    "vue/component-name-in-template-casing": [
      "warn",
      "PascalCase",
      { registeredComponentsOnly: false },
    ],
    "vue/component-options-name-casing": ["warn", "PascalCase"],
    "vue/custom-event-name-casing": ["warn", "camelCase"],
    "vue/define-macros-order": [
      "warn",
      {
        order: ["defineProps", "defineEmits"],
      },
    ],
    "vue/html-comment-content-spacing": [
      "warn",
      "always",
      { exceptions: ["-"] },
    ],
    "vue/html-quotes": ["warn", "double"],
    "vue/no-restricted-v-bind": ["warn", "/^v-/"],
    "vue/no-useless-v-bind": ["warn", { ignoreIncludesComment: true }],
    "vue/no-unused-refs": "warn",
    "vue/no-v-text-v-html-on-component": "warn",
    "vue/padding-line-between-blocks": ["warn", "always"],
    "vue/prefer-separate-static-class": "warn",

    // extensions
    "vue/array-bracket-spacing": ["warn", "never"],
    "vue/arrow-spacing": ["warn", { before: true, after: true }],
    "vue/block-spacing": ["warn", "always"],
    "vue/brace-style": ["warn", "stroustrup", { allowSingleLine: true }],
    "vue/comma-dangle": ["warn", "always-multiline"],
    "vue/comma-spacing": ["warn", { before: false, after: true }],
    "vue/comma-style": ["warn", "last"],
    "vue/dot-location": ["warn", "property"],
    "vue/dot-notation": ["warn", { allowKeywords: true }],
    "vue/eqeqeq": ["warn", "smart"],
    // 'vue/func-call-spacing': ['off', 'never'],
    "vue/key-spacing": ["warn", { beforeColon: false, afterColon: true }],
    "vue/keyword-spacing": ["warn", { before: true, after: true }],
    "vue/no-constant-condition": "warn",
    "vue/no-empty-pattern": "warn",
    "vue/no-extra-parens": "warn",
    "vue/no-irregular-whitespace": "warn",
    "vue/no-loss-of-precision": "warn",
    "vue/no-restricted-syntax": [
      "warn",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "vue/no-sparse-arrays": "warn",
    "vue/object-curly-newline": ["warn", { multiline: true, consistent: true }],
    "vue/object-property-newline": [
      "warn",
      { allowMultiplePropertiesPerLine: true },
    ],
    "vue/object-shorthand": [
      "warn",
      "always",
      { ignoreConstructors: false, avoidQuotes: true },
    ],
    "vue/operator-linebreak": ["warn", "before"],
    "vue/prefer-template": "warn",
    "vue/quote-props": ["warn", "consistent-as-needed"],
    "vue/template-curly-spacing": "warn",
    "vue/static-class-names-order": "warn",
    "vue/block-lang": [
      "warn",
      {
        script: {
          lang: ["js", "ts"],
        },
        template: {
          lang: ["html", "jade", "pug", "ejs"],
        },
        style: {
          lang: ["css", "sass", "scss", "less", "stylus", "postcss"],
        },
      },
    ],
    "vue/no-static-inline-styles": ["warn", { allowBinding: true }],
    "vue/camelcase": "warn",
    "vue/v-for-delimiter-style": ["warn", "in"],
    "vue/attributes-order": [
      "warn",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          ["UNIQUE", "SLOT"],
          "GLOBAL",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: true,
      },
    ],
    "vue/prefer-true-attribute-shorthand": "warn",
    "vue/html-comment-content-newline": [
      "warn",
      { singleline: "ignore", multiline: "always" },
    ],
    "vue/html-comment-indent": ["warn", 2],
    "vue/no-useless-concat": "warn",
    // off
    "vue/no-multiple-template-root": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
  },
});
