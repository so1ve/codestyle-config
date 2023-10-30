import { pluginSortImports } from "../plugins";
import type { ConfigItem } from "../types";

export const sortImports = (): ConfigItem[] => [
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
