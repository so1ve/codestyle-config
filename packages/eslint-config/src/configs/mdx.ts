import type { FlatESLintConfigItem } from "eslint-define-config";

import { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE } from "../globs";
import { parserMdx, pluginMdx } from "../plugins";
import type { OptionsComponentExts, OptionsOverrides } from "../types";

export const mdx = ({
	componentExts = [],
	overrides,
}: OptionsComponentExts & OptionsOverrides = {}): FlatESLintConfigItem[] => [
	{
		plugins: {
			mdx: pluginMdx,
		},
	},
	{
		languageOptions: {
			parser: parserMdx,
		},
		settings: {
			"mdx/code-blocks": true,
		},
		files: [GLOB_MARKDOWN],
		processor: "mdx/remark",
		rules: {
			"mdx/remark": "warn",
			"no-unused-expressions": "error",
		},
	},
	{
		files: [
			GLOB_MARKDOWN_CODE,
			...componentExts.map((ext) => `${GLOB_MARKDOWN}/**/*.${ext}`),
		],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					impliedStrict: true,
				},
			},
		},
		rules: {
			"html/require-doctype": "off",
			"ts/no-redeclare": "off",
			"ts/no-unused-vars": "off",
			"ts/no-use-before-define": "off",
			"ts/no-var-requires": "off",
			"ts/consistent-type-imports": "off",
			"ts/no-namespace": "off",
			"ts/no-require-imports": "off",
			"import/no-unresolved": "off",
			"unused-imports/no-unused-imports": "off",
			"unused-imports/no-unused-vars": "off",
			"no-alert": "off",
			"no-console": "off",
			"no-restricted-imports": "off",
			"no-undef": "off",
			"no-unused-expressions": "off",

			...overrides,
		},
	},
];
