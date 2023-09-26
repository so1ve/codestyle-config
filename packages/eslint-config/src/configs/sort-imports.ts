import type { FlatESLintConfigItem } from "eslint-define-config";
import { pluginImport, pluginSortImports } from "../plugins";
import { GLOB_DTS } from "../globs";

export const sortImports: FlatESLintConfigItem[] = [
	{
		plugins: {
			"sort-imports": pluginSortImports,
		},
		rules: {
			"sort-imports/imports": "error",
			"sort-imports/exports": "error",
		},
	},
];
