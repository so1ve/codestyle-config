import { pluginNode } from "../plugins";
import type { ConfigItem } from "../types";

export const node = (): ConfigItem[] => [
	{
		plugins: {
			node: pluginNode,
		},
	},
	{
		rules: {
			"node/no-callback-literal": "off",
			"node/handle-callback-err": ["error", "^(err|error)$"],
			"node/no-deprecated-api": "error",
			"node/no-exports-assign": "error",
			"node/no-new-require": "error",
			"node/no-path-concat": "error",
			"node/process-exit-as-throw": "error",
		},
	},
];
