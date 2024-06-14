import { pluginSortImports } from "../plugins";
import type { ConfigItem } from "../types";

export const sortImports = (): ConfigItem[] => [
	{
		name: "so1ve/sort-imports/setup",
		plugins: {
			"sort-imports": pluginSortImports,
		},
	},
	{
		name: "so1ve/sort-imports/rules",
		rules: {
			"sort-imports/imports": "error",
			"sort-imports/exports": "error",
		},
	},
];
