import { pluginOnlyError } from "../plugins";
import type { TypedFlatConfigItem } from "../types";

export const onlyError = (): TypedFlatConfigItem[] => [
	{
		name: "so1ve/only-error",
		plugins: {
			"only-error": pluginOnlyError,
		},
	},
];
