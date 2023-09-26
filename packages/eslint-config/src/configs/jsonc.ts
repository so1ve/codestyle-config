import type { FlatESLintConfigItem } from "eslint-define-config";
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC, GLOB_ESLINTRC } from "../globs";
import { parserJsonc, pluginJsonc } from "../plugins";

export const jsonc: FlatESLintConfigItem[] = [
	{
		files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC, GLOB_ESLINTRC],
		languageOptions: {
			parser: parserJsonc,
		},
		plugins: {
			jsonc: pluginJsonc,
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
