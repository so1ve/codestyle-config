import { pluginOnlyError } from "../plugins";
import type { ConfigItem } from "../types";

export const onlyError = (): ConfigItem[] => [
	{
		plugins: {
			"only-error": pluginOnlyError,
		},
	},
];
