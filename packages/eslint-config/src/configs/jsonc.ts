import type { FlatESLintConfigItem } from "eslint-define-config";

import {
	GLOB_ESLINTRC,
	GLOB_JSON,
	GLOB_JSON5,
	GLOB_JSONC,
	GLOB_PACKAGEJSON,
} from "../globs";
import { parserJsonc, pluginJsonc } from "../plugins";

export const jsonc = (): FlatESLintConfigItem[] => [
	{
		plugins: {
			jsonc: pluginJsonc,
		},
	},
	{
		files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC, GLOB_ESLINTRC],
		languageOptions: {
			parser: parserJsonc,
		},
		rules: {
			...(pluginJsonc.configs.base.overrides[0].rules as any),
			...(pluginJsonc.configs["recommended-with-jsonc"].rules as any),
			"jsonc/no-octal-escape": "error",
			"jsonc/quotes": "off",
			"jsonc/quotes-props": "off",
		},
	},
	{
		files: [GLOB_PACKAGEJSON],
		rules: {
			"jsonc/sort-keys": [
				"error",
				{
					pathPattern: "^exports$",
					order: { type: "asc" },
				},
				{
					pathPattern: "^exports.*$",
					order: ["types", "require", "import", "default"],
				},
			],
		},
	},
];
