import { GLOB_ESLINTRC, GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from "../globs";
import { parserJsonc, pluginJsonc } from "../plugins";
import type { ConfigItem } from "../types";

export const jsonc = (): ConfigItem[] => [
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
];
