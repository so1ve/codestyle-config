import type { FlatESLintConfigItem } from "eslint-define-config";

import { pluginSortImports } from "../plugins";

export const sortImports = (): FlatESLintConfigItem[] => [
	{
		plugins: {
			"sort-imports": pluginSortImports,
		},
	},
	{
		rules: {
			"sort-imports/imports": "error",
			"sort-imports/exports": "error",
		},
	},
];
