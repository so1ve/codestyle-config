import tseslint from "typescript-eslint";

import { GLOB_ASTRO_TS, GLOB_MARKDOWN_CODE, GLOB_TS, GLOB_TSX } from "../globs";
import { pluginImport } from "../plugins";
import type {
	OptionsComponentExts,
	OptionsOverrides,
	OptionsTypeScriptParserOptions,
	TypedFlatConfigItem,
} from "../types";
import { renameRules } from "../utils";

export const typescript = async ({
	componentExts = [],
	parserOptions,
	overrides,
}: OptionsTypeScriptParserOptions &
	OptionsComponentExts &
	OptionsOverrides = {}): Promise<TypedFlatConfigItem[]> => [
	{
		name: "so1ve/typescript/setup",
		// Install the plugins without globs, so they can be configured separately.
		plugins: {
			import: pluginImport,
			ts: tseslint.plugin,
		},
	},
	{
		name: "so1ve/typescript/rules",
		files: [GLOB_TS, GLOB_TSX, ...componentExts.map((ext) => `**/*.${ext}`)],
		languageOptions: {
			parser: tseslint.parser as any,
			parserOptions: {
				sourceType: "module",
				extraFileExtensions: componentExts.map((ext) => `.${ext}`),
				...(parserOptions as any),
			},
		},
		settings: {
			"import/resolver": {
				node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
				typescript: {
					extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
				},
			},
		},
		// @keep-sorted
		rules: {
			...renameRules(tseslint.configs.eslintRecommended.rules!, {
				"@typescript-eslint": "ts",
			}),
			...renameRules(
				tseslint.configs.recommended
					.map((config) => config.rules)
					.filter(Boolean)
					.reduce((a, b) => ({ ...a, ...b }), {})!,
				{ "@typescript-eslint": "ts" },
			),

			"import/named": "off",
			"no-dupe-class-members": "off",
			"no-invalid-this": "off",
			"no-redeclare": "off",
			"no-use-before-define": "off",

			// Override JS
			"no-useless-constructor": "off",
			"object-curly-spacing": "off",

			// so1ve
			"so1ve/no-inline-type-import": "error",

			"so1ve/prefer-ts-expect-error": "error",
			"space-before-blocks": "off",
			"space-before-function-paren": "off",
			"ts/ban-ts-comment": [
				"error",
				{
					minimumDescriptionLength: 0,
				},
			],
			"ts/ban-ts-ignore": "off",
			"ts/brace-style": "off",

			// off
			"ts/camelcase": "off",

			// TS
			"ts/comma-dangle": "off",
			"ts/comma-spacing": "off",
			"ts/consistent-indexed-object-style": ["error", "record"],
			"ts/consistent-type-definitions": ["error", "interface"],
			"ts/consistent-type-imports": [
				"error",
				{ prefer: "type-imports", disallowTypeAnnotations: false },
			],
			"ts/explicit-function-return-type": "off",
			"ts/explicit-member-accessibility": [
				"error",
				{
					accessibility: "explicit",
					overrides: {
						constructors: "no-public",
					},
				},
			],
			"ts/explicit-module-boundary-types": "off",
			"ts/func-call-spacing": "off",
			"ts/indent": "off",
			"ts/keyword-spacing": "off",
			"ts/member-delimiter-style": "off",
			"ts/method-signature-style": ["error", "property"],
			"ts/no-dupe-class-members": "error",
			"ts/no-duplicate-enum-values": "error",
			"ts/no-empty-function": "off",
			"ts/no-empty-interface": "off",
			"ts/no-empty-object-type": [
				"error",
				{
					allowInterfaces: "always",
				},
			],
			"ts/no-explicit-any": "off",
			"ts/no-extra-semi": "off",
			"ts/no-invalid-this": "error",
			"ts/no-non-null-asserted-nullish-coalescing": "error",
			"ts/no-non-null-assertion": "off",
			"ts/no-parameter-properties": "off",
			"ts/no-redeclare": "error",
			"ts/no-require-imports": "error",
			"ts/no-restricted-types": [
				"error",
				{
					types: {
						String: {
							message: "Use `string` instead.",
							fixWith: "string",
						},
						Number: {
							message: "Use `number` instead.",
							fixWith: "number",
						},
						Boolean: {
							message: "Use `boolean` instead.",
							fixWith: "boolean",
						},
						Symbol: {
							message: "Use `symbol` instead.",
							fixWith: "symbol",
						},
						BigInt: {
							message: "Use `bigint` instead.",
							fixWith: "bigint",
						},
						Object: {
							message:
								"The `Object` type is mostly the same as `unknown`. You probably want `Record<PropertyKey, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848",
							fixWith: "Record<PropertyKey, unknown>",
						},
						object: {
							message:
								"The `object` type is hard to use. Use `Record<PropertyKey, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
							fixWith: "Record<PropertyKey, unknown>",
						},
						Function: {
							message: "Use `(...args: any[]) => any` instead.",
							fixWith: "(...args: any[]) => any",
						},
					},
				},
			],
			"ts/no-unsafe-function-type": "error",
			// handled by unused-imports/no-unused-imports
			"ts/no-unused-vars": "off",
			"ts/no-use-before-define": [
				"error",
				{ functions: false, classes: false, variables: true },
			],
			"ts/no-wrapper-object-types": "error",
			"ts/prefer-for-of": "error",
			"ts/quotes": "off",
			"ts/semi": "off",
			"ts/space-before-blocks": "off",
			"ts/space-before-function-paren": "off",
			"ts/triple-slash-reference": "off",
			"ts/type-annotation-spacing": "off",

			...overrides,
		},
	},
	{
		name: "so1ve/typescript/rules/type-aware",
		files: [GLOB_TS, GLOB_TSX, ...componentExts.map((ext) => `**/*.${ext}`)],
		ignores: [GLOB_MARKDOWN_CODE, GLOB_ASTRO_TS],
		languageOptions: {
			parser: tseslint.parser as any,
			parserOptions: {
				sourceType: "module",
				projectService: true,
				tsconfigRootDir: process.cwd(),
			},
		},
		settings: {
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
				},
				typescript: {
					extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
				},
			},
		},
		// @keep-sorted
		rules: {
			"dot-notation": "off",
			"no-implied-eval": "off",
			"no-throw-literal": "off",
			"no-void": ["error", { allowAsStatement: true }],
			"ts/array-type": ["error", { default: "array", readonly: "array" }],
			"ts/await-thenable": "error",
			"ts/consistent-generic-constructors": "error",
			"ts/consistent-type-assertions": [
				"error",
				{ assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
			],
			"ts/consistent-type-exports": "error",
			"ts/dot-notation": ["error", { allowKeywords: true }],
			"ts/no-for-in-array": "error",
			"ts/no-implied-eval": "error",
			"ts/no-unnecessary-type-arguments": "error",
			"ts/no-unnecessary-type-assertion": "error",
			"ts/non-nullable-type-assertion-style": "error",
			"ts/only-throw-error": "error",
			"ts/prefer-nullish-coalescing": "error",
			"ts/prefer-optional-chain": "error",
			"ts/prefer-return-this-type": "error",
			"ts/restrict-template-expressions": [
				"error",
				{
					allowAny: true,
					allowNumber: true,
					allowBoolean: true,
				},
			],
		},
	},
	{
		name: "so1ve/typescript/rules/dts",
		files: ["**/*.d.ts"],
		// @keep-sorted
		rules: {
			"eslint-comments/no-unlimited-disable": "off",
			"import/no-duplicates": "off",
			"unused-imports/no-unused-vars": "off",
		},
	},
	{
		name: "so1ve/typescript/rules/js",
		files: ["**/*.js", "**/*.cjs"],
		// @keep-sorted
		rules: {
			"ts/no-require-imports": "off",
			"ts/no-var-requires": "off",
		},
	},
];
