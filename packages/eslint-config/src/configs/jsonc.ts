import { GLOB_ESLINTRC, GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from "../globs";
import type { TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function jsonc(): Promise<TypedFlatConfigItem[]> {
	const [parserJsonc, pluginJsonc] = await Promise.all([
		interopDefault(import("jsonc-eslint-parser")),
		interopDefault(import("eslint-plugin-jsonc")),
	]);

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
			// @keep-sorted
			rules: {
				...(pluginJsonc.configs.base.overrides[0].rules as any),
				...(pluginJsonc.configs["recommended-with-jsonc"].rules as any),
				"jsonc/no-octal-escape": "error",
				"jsonc/quotes-props": "off",
				"jsonc/quotes": "off",
			},
		},
	];
}
