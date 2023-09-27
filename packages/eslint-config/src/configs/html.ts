import type { FlatESLintConfigItem } from "eslint-define-config";
import { GLOB_HTML, GLOB_MARKDOWN, GLOB_MARKDOWN_CODE } from "../globs";
import {
	parserHtml,
	parserMdx,
	pluginHtml,
	pluginHtml_,
	pluginMdx,
} from "../plugins";

export function html(): FlatESLintConfigItem[] {
	return [
		{
			plugins: {
				html: pluginHtml,
				html_: pluginHtml_,
			},
		},
		{
			languageOptions: {
				parser: parserHtml,
			},
			settings: {
				"html/report-bad-indent": "off",
			},
			files: [GLOB_HTML],
			rules: {
				...pluginHtml.configs.recommended.rules,
				"html/indent": "off",
				"html/no-trailing-spaces": "off",
				"html/require-closing-tags": "off",
				"html/no-extra-spacing-attrs": "off",
				"html/quotes": "off",
			},
		},
	];
}
