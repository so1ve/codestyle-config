import type { FlatESLintConfigItem } from "eslint-define-config";

import { GLOB_HTML } from "../globs";
import { parserHtml, pluginHtml, pluginHtml_ } from "../plugins";

export const html = (): FlatESLintConfigItem[] => [
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
