import tseslint from "typescript-eslint";

import { GLOB_VUE } from "../globs";
import type {
	OptionsHasTypeScript,
	OptionsOverrides,
	TypedFlatConfigItem,
} from "../types";
import { interopDefault } from "../utils";

export async function vue({
	overrides,
	typescript,
}: OptionsHasTypeScript & OptionsOverrides = {}): Promise<
	TypedFlatConfigItem[]
> {
	const [parserVue, pluginVue] = await Promise.all([
		interopDefault(import("vue-eslint-parser")),
		interopDefault(import("eslint-plugin-vue")),
	]);

	return [
		{
			name: "so1ve/vue/setup",
			plugins: {
				vue: pluginVue,
			},
		},
		{
			name: "so1ve/vue/rules",
			files: [GLOB_VUE],
			languageOptions: {
				parser: parserVue,
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
					extraFileExtensions: [".vue"],
					parser: typescript ? (tseslint.parser as any) : null,
					sourceType: "module",
				},
			},
			processor: pluginVue.processors[".vue"],
			// @keep-sorted
			rules: {
				...pluginVue.configs.base.rules,
				...pluginVue.configs.essential.rules,
				...pluginVue.configs["strongly-recommended"].rules,
				...pluginVue.configs.recommended.rules,
				"no-undef": "off",
				"no-unused-vars": "off",
				"so1ve/vue-root-element-sort-attributes": "error",
				"ts/no-unused-vars": "off",
				"vue/array-bracket-spacing": "off",
				"vue/arrow-spacing": "off",
				"vue/attributes-order": [
					"error",
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
				"vue/block-lang": [
					"error",
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

				"vue/block-order": [
					"error",
					{
						order: [
							"script:not([setup])",
							"script[setup]",
							"template",
							"style",
						],
					},
				],
				"vue/block-spacing": "off",
				"vue/brace-style": "off",
				"vue/comma-dangle": "off",
				"vue/comma-spacing": "off",
				"vue/comma-style": "off",
				"vue/component-api-style": ["error", ["script-setup", "composition"]],
				"vue/component-name-in-template-casing": [
					"error",
					"PascalCase",
					{ registeredComponentsOnly: false },
				],
				"vue/component-options-name-casing": ["error", "PascalCase"],
				"vue/custom-event-name-casing": ["error", "camelCase"],
				"vue/define-macros-order": [
					"error",
					{
						order: [
							"defineOptions",
							"defineEmits",
							"defineProps",
							"defineSlots",
						],
					},
				],

				// extensions
				"vue/dot-location": ["error", "property"],
				"vue/dot-notation": ["error", { allowKeywords: true }],
				"vue/eqeqeq": ["error", "smart"],
				"vue/html-closing-bracket-spacing": "off",
				"vue/html-comment-content-newline": [
					"error",
					{ singleline: "ignore", multiline: "always" },
				],
				"vue/html-comment-content-spacing": [
					"error",
					"always",
					{ exceptions: ["-"] },
				],
				"vue/html-comment-indent": ["error", "tab"],
				"vue/html-indent": "off",
				"vue/html-quotes": "off",
				"vue/html-self-closing": [
					"error",
					{
						html: {
							void: "always",
							normal: "always",
							component: "always",
						},
						svg: "always",
						math: "always",
					},
				],
				"vue/key-spacing": "off",
				"vue/keyword-spacing": "off",
				"vue/max-attributes-per-line": "off",
				"vue/multi-word-component-names": "off",
				"vue/multiline-html-element-content-newline": "off",
				"vue/mustache-interpolation-spacing": "off",
				"vue/no-console": [
					"error",
					{ allow: ["error", "warn", "table", "time"] },
				],
				"vue/no-constant-condition": "error",
				"vue/no-empty-pattern": "error",
				"vue/no-irregular-whitespace": "error",
				"vue/no-loss-of-precision": "error",
				"vue/no-multi-spaces": "off",

				// off
				"vue/no-multiple-template-root": "off",
				"vue/no-restricted-syntax": [
					"error",
					"DebuggerStatement",
					"LabeledStatement",
					"WithStatement",
				],
				"vue/no-restricted-v-bind": ["error", "/^v-/"],
				"vue/no-sparse-arrays": "error",
				"vue/no-static-inline-styles": ["error", { allowBinding: true }],
				"vue/no-unused-refs": "error",
				"vue/no-useless-concat": "error",
				"vue/no-useless-v-bind": ["error", { ignoreIncludesComment: true }],

				"vue/no-v-html": "off",
				"vue/no-v-text-v-html-on-component": "error",
				"vue/object-curly-newline": [
					"error",
					{ multiline: true, consistent: true },
				],
				"vue/object-property-newline": [
					"error",
					{ allowMultiplePropertiesPerLine: true },
				],
				"vue/object-shorthand": [
					"error",
					"always",
					{ ignoreConstructors: false, avoidQuotes: true },
				],
				"vue/operator-linebreak": "off",
				"vue/padding-line-between-blocks": ["error", "always"],
				"vue/prefer-define-options": "error",
				"vue/prefer-separate-static-class": "error",
				"vue/prefer-template": "error",
				"vue/prefer-true-attribute-shorthand": "error",
				"vue/quote-props": ["error", "consistent-as-needed"],
				"vue/require-default-prop": "off",
				"vue/require-macro-variable-name": [
					"error",
					{
						defineProps: "props",
						defineEmits: "emit",
						defineSlots: "slots",
						useSlots: "slots",
						useAttrs: "attrs",
					},
				],
				"vue/require-prop-types": "off",
				"vue/require-typed-ref": "error",
				"vue/singleline-html-element-content-newline": "off",
				"vue/template-curly-spacing": "off",
				"vue/v-bind-style": [
					"error",
					"shorthand",
					{
						sameNameShorthand: "always",
					},
				],
				"vue/v-for-delimiter-style": ["error", "in"],

				...overrides,
			},
		},
	];
}
