import globals from "globals";

import { GLOB_SRC, GLOB_SRC_EXT } from "../globs";
import {
  pluginArrayFunc,
  pluginNoAwaitInPromise,
  pluginRegexp,
  pluginSo1ve,
  pluginUnusedImports,
} from "../plugins";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";

export async function javascript({ overrides }: OptionsOverrides = {}): Promise<
  TypedFlatConfigItem[]
> {
  const regexpRecommended = pluginRegexp.configs["flat/recommended"];

  return [
    {
      name: "so1ve/javascript/setup",
      // @keep-sorted
      plugins: {
        "array-func": pluginArrayFunc,
        "no-await-in-promise": pluginNoAwaitInPromise,
        "so1ve": pluginSo1ve,
        "unused-imports": pluginUnusedImports,
      },
    },
    {
      name: "so1ve/javascript/rules",
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: "latest",
          sourceType: "module",
        },
        sourceType: "module",
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      // @keep-sorted
      rules: {
        // Common

        "accessor-pairs": [
          "error",
          { setWithoutGet: true, enforceForClassMembers: true },
        ],
        "array-bracket-newline": "off",

        // best-practice
        "array-callback-return": "error",
        "array-element-newline": "off",
        // Conflicts with unicorn/prefer-spread
        "array-func/avoid-reverse": "error",
        // Handled by unicorn
        "array-func/from-map": "off",
        "array-func/no-unnecessary-this-arg": "off",
        // array-func
        "array-func/prefer-array-from": "off",
        "array-func/prefer-flat-map": "error",
        // Handled by unicorn/no-array-method-this-argument
        "array-func/prefer-flat": "off",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "block-scoped-var": "error",
        "complexity": ["off", 11],
        "consistent-return": "off",
        "constructor-super": "error",
        "default-case-last": "error",
        "dot-notation": ["error", { allowKeywords: true }],
        "eqeqeq": ["error", "smart"],
        "function-call-argument-newline": "off",
        "function-paren-newline": "off",
        "generator-star": "off",
        "implicit-arrow-linebreak": "off",
        "indent-legacy": "off",
        "indent": "off",
        "jsx-quotes": "off",
        "linebreak-style": "off",
        "new-cap": [
          "error",
          { newIsCap: true, capIsNew: false, properties: true },
        ],
        "newline-per-chained-call": "off",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-arrow-condition": "off",
        "no-async-promise-executor": "error",

        // no-await-in-promise
        "no-await-in-promise/no-await-in-promise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-comma-dangle": "off",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        "no-confusing-arrow": "off",
        "no-console": ["error", { allow: ["error", "warn", "table", "time"] }],
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "off",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": ["error", { allowLoop: true, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-multi-str": "error",
        "no-new-func": "error",
        "no-new-native-nonconstructor": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-object-constructor": "error",
        "no-octal-escape": "error",
        "no-octal": "error",
        "no-param-reassign": "off",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": ["error", { builtinGlobals: false }],
        "no-regex-spaces": "error",
        "no-reserved-keys": "off",
        "no-restricted-globals": [
          "error",
          { name: "global", message: "Use `globalThis` instead." },
          { name: "self", message: "Use `globalThis` instead." },
          { name: "isNaN", message: "Use `Number.isNaN` instead" },
          { name: "isFinite", message: "Use `Number.isFinite` instead" },
          { name: "parseFloat", message: "Use `Number.parseFloat` instead" },
          { name: "parseInt", message: "Use `Number.parseInt` instead" },
        ],
        "no-restricted-properties": [
          "error",
          {
            object: "globalThis",
            property: "isNaN",
            message: "Use `Number.isNaN` instead",
          },
          {
            object: "globalThis",
            property: "isFinite",
            message: "Use `Number.isFinite` instead",
          },
          {
            object: "globalThis",
            property: "parseFloat",
            message: "Use `Number.parseFloat` instead",
          },
          {
            object: "globalThis",
            property: "parseInt",
            message: "Use `Number.parseInt` instead",
          },
          {
            object: "window",
            property: "isNaN",
            message: "Use `Number.isNaN` instead",
          },
          {
            object: "window",
            property: "isFinite",
            message: "Use `Number.isFinite` instead",
          },
          {
            object: "window",
            property: "parseFloat",
            message: "Use `Number.parseFloat` instead",
          },
          {
            object: "window",
            property: "parseInt",
            message: "Use `Number.parseInt` instead",
          },
        ],
        "no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement",
        ],
        "no-return-await": "off",
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-space-before-semi": "off",
        "no-spaced-func": "off",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-unreachable-loop": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        "no-unused-vars": [
          "error",
          {
            args: "none",
            caughtErrors: "none",
            ignoreRestSiblings: true,
            vars: "all",
          },
        ],
        "no-use-before-define": [
          "error",
          { functions: false, classes: false, variables: true },
        ],
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",

        // es6
        "no-var": "error",
        "no-void": "error",
        "no-with": "error",
        "no-wrap-func": "off",
        "nonblock-statement-body-position": "off",
        "object-shorthand": [
          "error",
          "always",
          {
            ignoreConstructors: false,
          },
        ],
        "one-var-declaration-per-line": "off",
        "one-var": ["error", "never"],
        "prefer-arrow-callback": [
          "error",
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        "prefer-const": [
          "error",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true,
          },
        ],
        "prefer-exponentiation-operator": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-await": "off",

        // so1ve
        "so1ve/import-dedupe": "error",
        "so1ve/require-async-with-await": "error",
        "switch-colon-spacing": "off",
        "symbol-description": "off",

        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
        "use-isnan": [
          "error",
          {
            enforceForSwitchCase: true,
            enforceForIndexOf: true,
          },
        ],
        "valid-typeof": ["error", { requireStringLiterals: true }],
        "vars-on-top": "error",
        "wrap-regex": "off",
        "yoda": ["error", "never"],

        ...overrides,
      },
    },
    {
      ...regexpRecommended,
      name: "so1ve/javascript/regexp",
      rules: {
        ...regexpRecommended.rules,
        "regexp/no-unused-capturing-group": "off",
      },
    },
    {
      name: "so1ve/javascript/cli",
      files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      rules: {
        "no-console": "off",
      },
    },
  ];
}
