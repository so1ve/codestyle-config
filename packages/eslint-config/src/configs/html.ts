import { GLOB_HTML } from "../globs";
import type { ConfigItem } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function html(): Promise<ConfigItem[]> {
	const parserHtml = await interopDefault(import("@html-eslint/parser"));
	const pluginHtml = await interopDefault(import("@html-eslint/eslint-plugin"));
	const pluginHtmlJsSupport = await interopDefault(
		// @ts-expect-error No declaration
		import("eslint-plugin-html"),
	);

	return [
		{
			name: "so1ve/html/setup",
			plugins: {
				"html": pluginHtml,
				"html-js-support": pluginHtmlJsSupport,
			},
		},
		{
			name: "so1ve/html/rules",
			languageOptions: {
				parser: parserHtml,
			},
			settings: {
				"html/report-bad-indent": "off",
			},
			files: [GLOB_HTML],
			rules: {
				...renameRules(pluginHtml.configs.recommended.rules, {
					"@html-eslint": "html",
				}),
				"html/indent": "off",
				"html/no-trailing-spaces": "off",
				"html/require-closing-tags": "off",
				"html/no-extra-spacing-attrs": "off",
				"html/quotes": "off",
			},
		},
	];
}
