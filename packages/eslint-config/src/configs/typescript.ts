import type { FlatESLintConfigItem } from "eslint-define-config";

import { GLOB_MARKDOWN_CODE, GLOB_TS, GLOB_TSX } from "../globs";
import { parserTs, pluginEtc, pluginImport, pluginTs } from "../plugins";
import type {
	OptionsComponentExts,
	OptionsOverrides,
	OptionsTypeScriptParserOptions,
} from "../types";
import { renameRules } from "../utils";

export function typescript({
	componentExts = [],
	parserOptions,
	overrides,
}: OptionsTypeScriptParserOptions &
	OptionsComponentExts &
	OptionsOverrides = {}): FlatESLintConfigItem[] {
	const typeAwareRules: FlatESLintConfigItem["rules"] = {
		"etc/no-assign-mutated-array": "error",
		"etc/no-deprecated": "warn",
		"etc/no-internal": "error",

		"no-throw-literal": "off",
		"ts/no-throw-literal": "error",
		"no-implied-eval": "off",
		"ts/no-implied-eval": "error",
		"dot-notation": "off",
		"ts/dot-notation": ["error", { allowKeywords: true }],
		"no-void": ["error", { allowAsStatement: true }],
		"ts/await-thenable": "error",
		"ts/no-for-in-array": "error",
		"ts/no-unnecessary-type-assertion": "error",
		"ts/restrict-template-expressions": [
			"error",
			{
				allowAny: true,
				allowNumber: true,
				allowBoolean: true,
			},
		],
		"ts/array-type": ["error", { default: "array", readonly: "array" }],
		"ts/consistent-generic-constructors": "error",
		"ts/consistent-type-exports": "error",
		"ts/consistent-type-assertions": [
			"error",
			{ assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
		],
		"ts/prefer-nullish-coalescing": "error",
		"ts/prefer-optional-chain": "error",
		"ts/prefer-return-this-type": "error",
		"ts/no-unnecessary-type-arguments": "error",
		"ts/non-nullable-type-assertion-style": "error",
	};

	return [
		{
			// Install the plugins without globs, so they can be configured separately.
			plugins: {
				import: pluginImport,
				ts: pluginTs,
				etc: pluginEtc,
			},
		},
		{
			files: [GLOB_TS, GLOB_TSX, ...componentExts.map((ext) => `**/*.${ext}`)],
			languageOptions: {
				parser: parserTs,
				parserOptions: {
					sourceType: "module",
					extraFileExtensions: componentExts.map((ext) => `.${ext}`),
					EXPERIMENTAL_useProjectService: true,
					// eslint-disable-next-line ts/no-unnecessary-type-assertion
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
			rules: {
				...renameRules(
					pluginTs.configs["eslint-recommended"].overrides![0].rules!,
					"@typescript-eslint/",
					"ts/",
				),
				...renameRules(
					pluginTs.configs.recommended.rules!,
					"@typescript-eslint/",
					"ts/",
				),

				"import/named": "off",

				// TS
				"ts/comma-dangle": "off",
				"ts/brace-style": "off",
				"ts/comma-spacing": "off",
				"ts/func-call-spacing": "off",
				"ts/indent": "off",
				"ts/keyword-spacing": "off",
				"ts/member-delimiter-style": "off",
				"ts/no-extra-parens": "off",
				"ts/no-extra-semi": "off",
				"ts/quotes": "off",
				"ts/semi": "off",
				"ts/space-before-function-paren": "off",
				"ts/type-annotation-spacing": "off",
				"ts/ban-ts-comment": [
					"error",
					{
						minimumDescriptionLength: 0,
					},
				],
				"ts/ban-types": [
					"error",
					{
						extendDefaults: false,
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
				"ts/consistent-type-imports": [
					"error",
					{ prefer: "type-imports", disallowTypeAnnotations: false },
				],
				"ts/consistent-type-definitions": ["error", "interface"],
				"ts/consistent-indexed-object-style": ["error", "record"],
				"ts/prefer-ts-expect-error": "error",
				"ts/no-require-imports": "error",
				"ts/method-signature-style": ["error", "property"],
				"ts/explicit-member-accessibility": "error",

				// Override JS
				"no-useless-constructor": "off",
				"no-invalid-this": "off",
				"ts/no-invalid-this": "error",
				"no-redeclare": "off",
				"ts/no-redeclare": "error",
				"no-use-before-define": "off",
				"ts/no-use-before-define": [
					"error",
					{ functions: false, classes: false, variables: true },
				],
				"object-curly-spacing": "off",
				"space-before-blocks": "off",
				"ts/space-before-blocks": "off",
				"space-before-function-paren": "off",
				"no-dupe-class-members": "off",
				"ts/no-dupe-class-members": "error",
				"no-loss-of-precision": "off",
				"ts/no-loss-of-precision": "error",
				"lines-between-class-members": "off",
				"ts/lines-between-class-members": [
					"error",
					"always",
					{ exceptAfterSingleLine: true },
				],

				// so1ve
				"so1ve/no-inline-type-import": "error",

				// off
				"ts/camelcase": "off",
				"ts/explicit-function-return-type": "off",
				"ts/no-explicit-any": "off",
				"ts/no-parameter-properties": "off",
				"ts/no-empty-interface": "off",
				"ts/ban-ts-ignore": "off",
				"ts/no-empty-function": "off",
				"ts/no-non-null-assertion": "off",
				"ts/explicit-module-boundary-types": "off",
				"ts/triple-slash-reference": "off",
				"ts/prefer-for-of": "error",
				"ts/no-duplicate-enum-values": "error",
				"ts/no-non-null-asserted-nullish-coalescing": "error",
				// handled by unused-imports/no-unused-imports
				"ts/no-unused-vars": "off",

				...typeAwareRules,

				...overrides,
			},
		},
		{
			files: [GLOB_MARKDOWN_CODE],
			languageOptions: {
				parser: parserTs,
				parserOptions: {
					sourceType: "module",
				},
			},
			rules: {
				...Object.fromEntries(
					Object.keys(typeAwareRules).map((k) => [k, "off"]),
				),
			},
		},
		{
			files: ["**/*.d.ts"],
			rules: {
				"eslint-comments/no-unlimited-disable": "off",
				"import/no-duplicates": "off",
				"unused-imports/no-unused-vars": "off",
			},
		},
		{
			files: ["**/*.js", "**/*.cjs"],
			rules: {
				"ts/no-require-imports": "off",
				"ts/no-var-requires": "off",
			},
		},
	];
}
