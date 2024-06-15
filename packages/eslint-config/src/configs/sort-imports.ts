import { pluginSortImports } from "../plugins";
import type { TypedFlatConfigItem } from "../types";

export const sortImports = (): TypedFlatConfigItem[] => [
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
