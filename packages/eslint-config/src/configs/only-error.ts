import { pluginOnlyError } from "../plugins";
import type { ConfigItem } from "../types";

export const onlyError = (): ConfigItem[] => [
	{
		name: "so1ve/only-error",
		plugins: {
			"only-error": pluginOnlyError,
		},
	},
];
