import { GLOB_ESLINTRC, GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from "../globs";
import type { ConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function jsonc(): Promise<ConfigItem[]> {
	const parserJsonc = await interopDefault(import("jsonc-eslint-parser"));
	const pluginJsonc = await interopDefault(import("eslint-plugin-jsonc"));

	return [
		{
			name: "so1ve/jsonc/setup",
			plugins: {
				jsonc: pluginJsonc,
			},
		},
		{
			name: "so1ve/jsonc/rules",
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
}
