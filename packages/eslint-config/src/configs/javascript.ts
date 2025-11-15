import globals from "globals";

import { GLOB_SRC, GLOB_SRC_EXT } from "../globs";
import {
	pluginArrayFunc,
	pluginNoAwaitInPromise,
	pluginRegexp,
	pluginSo1ve,
	pluginSortImports,
	pluginUnusedImports,
} from "../plugins";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function javascript({ overrides }: OptionsOverrides = {}): Promise<
	TypedFlatConfigItem[]
> {
	const regexpRecommended = pluginRegexp.configs["flat/recommended"];

	return [
		{
			name: "so1ve/javascript/setup",
			plugins: {
				"so1ve": await interopDefault(pluginSo1ve),
				"unused-imports": pluginUnusedImports,
				"sort-imports": pluginSortImports,
				"array-func": pluginArrayFunc,
				"no-await-in-promise": pluginNoAwaitInPromise,
			},
		},
		{
			name: "so1ve/javascript/rules",
			languageOptions: {
				ecmaVersion: 2022,
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
					ecmaVersion: 2022,
					sourceType: "module",
				},
				sourceType: "module",
			},
			linterOptions: {
				reportUnusedDisableDirectives: true,
			},
			rules: {
				// Common
				"array-bracket-newline": "off",
				"array-element-newline": "off",
				"arrow-body-style": "off",
				"arrow-parens": "off",
				"dot-notation": ["error", { allowKeywords: true }],
				"function-call-argument-newline": "off",
				"function-paren-newline": "off",
				"generator-star": "off",
				"implicit-arrow-linebreak": "off",
				"indent": "off",
				"indent-legacy": "off",
				"jsx-quotes": "off",
				"linebreak-style": "off",
				"newline-per-chained-call": "off",
				"no-arrow-condition": "off",
				"no-comma-dangle": "off",
				"no-confusing-arrow": "off",
				"no-extra-semi": "off",
				"no-reserved-keys": "off",
				"no-spaced-func": "off",
				"no-space-before-semi": "off",
				"no-wrap-func": "off",
				"nonblock-statement-body-position": "off",
				"one-var-declaration-per-line": "off",
				"switch-colon-spacing": "off",
				"symbol-description": "off",
				"wrap-regex": "off",

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

				"accessor-pairs": [
					"error",
					{ setWithoutGet: true, enforceForClassMembers: true },
				],
				"constructor-super": "error",
				"default-case-last": "error",
				"new-cap": [
					"error",
					{ newIsCap: true, capIsNew: false, properties: true },
				],
				"no-array-constructor": "error",
				"no-async-promise-executor": "error",
				"no-caller": "error",
				"no-class-assign": "error",
				"no-compare-neg-zero": "error",
				"no-const-assign": "error",
				"no-control-regex": "error",
				"no-delete-var": "error",
				"no-dupe-args": "error",
				"no-dupe-class-members": "error",
				"no-dupe-keys": "error",
				"no-duplicate-case": "error",
				"no-useless-backreference": "error",
				"no-useless-call": "error",
				"no-useless-computed-key": "error",
				"no-useless-constructor": "error",
				"no-useless-rename": "error",
				"no-useless-return": "error",
				"no-void": "error",
				"no-empty": ["error", { allowEmptyCatch: true }],
				"no-empty-character-class": "error",
				"no-empty-pattern": "error",
				"no-eval": "error",
				"no-ex-assign": "error",
				"no-extend-native": "error",
				"no-extra-bind": "error",
				"no-extra-boolean-cast": "error",
				"no-fallthrough": "error",
				"no-func-assign": "error",
				"no-global-assign": "error",
				"no-implied-eval": "error",
				"no-import-assign": "error",
				"no-invalid-regexp": "error",
				"no-irregular-whitespace": "error",
				"no-iterator": "error",
				"no-labels": ["error", { allowLoop: true, allowSwitch: false }],
				"no-lone-blocks": "error",
				"no-loss-of-precision": "error",
				"no-misleading-character-class": "error",
				"no-new-func": "error",
				"no-object-constructor": "error",
				"no-new-native-nonconstructor": "error",
				"no-new-wrappers": "error",
				"no-prototype-builtins": "error",
				"no-useless-catch": "error",
				"no-param-reassign": "off",
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
				"no-obj-calls": "error",
				"no-octal": "error",
				"no-octal-escape": "error",
				"no-proto": "error",
				"no-redeclare": ["error", { builtinGlobals: false }],
				"no-regex-spaces": "error",
				"no-self-assign": ["error", { props: true }],
				"no-self-compare": "error",
				"no-sequences": "error",
				"no-shadow-restricted-names": "error",
				"no-template-curly-in-string": "error",
				"no-this-before-super": "error",
				"no-throw-literal": "error",
				"no-undef": "error",
				"no-undef-init": "error",
				"no-unexpected-multiline": "error",
				"no-unmodified-loop-condition": "error",
				"no-unneeded-ternary": ["error", { defaultAssignment: false }],
				"no-unreachable": "error",
				"no-unreachable-loop": "error",
				"no-unsafe-finally": "error",
				"no-unsafe-negation": "error",
				"no-return-await": "off",

				// es6
				"no-var": "error",
				"prefer-const": [
					"error",
					{
						destructuring: "all",
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
				"one-var": ["error", "never"],
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
				"prefer-promise-reject-errors": "error",
				"prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
				"yoda": ["error", "never"],

				// best-practice
				"array-callback-return": "error",
				"block-scoped-var": "error",
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
				"consistent-return": "off",
				"complexity": ["off", 11],
				"eqeqeq": ["error", "smart"],
				"no-alert": "error",
				"no-case-declarations": "error",
				"no-multi-str": "error",
				"no-with": "error",
				"no-invalid-this": "error",
				"vars-on-top": "error",
				"require-await": "off",
				"use-isnan": [
					"error",
					{
						enforceForSwitchCase: true,
						enforceForIndexOf: true,
					},
				],
				"valid-typeof": ["error", { requireStringLiterals: true }],

				// so1ve
				"so1ve/import-dedupe": "error",
				"so1ve/require-async-with-await": "error",

				// Sort Imports
				"sort-imports/imports": ["error"],
				"sort-imports/exports": "error",

				// array-func
				"array-func/prefer-array-from": "off",
				"array-func/no-unnecessary-this-arg": "off", // Handled by unicorn/no-array-method-this-argument
				"array-func/prefer-flat": "off", // Handled by unicorn
				"array-func/from-map": "off", // Conflicts with unicorn/prefer-spread
				"array-func/avoid-reverse": "error",
				"array-func/prefer-flat-map": "error",

				// no-await-in-promise
				"no-await-in-promise/no-await-in-promise": "error",

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
