import { pluginPromise } from "../plugins";
import type { ConfigItem } from "../types";

export const promise = (): ConfigItem[] => [
	{
		plugins: {
			promise: pluginPromise,
		},
	},
	{
		rules: {
			"promise/param-names": "error",
		},
	},
];
