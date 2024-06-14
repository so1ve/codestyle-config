import { pluginPromise } from "../plugins";
import type { ConfigItem } from "../types";

export const promise = (): ConfigItem[] => [
	{
		name: "so1ve/promise/setup",
		plugins: {
			promise: pluginPromise,
		},
	},
	{
		name: "so1ve/promise/rules",
		rules: { "promise/param-names": "error" },
	},
];
