import { pluginNode } from "../plugins";
import type { ConfigItem } from "../types";

export const node = (): ConfigItem[] => [
	{
		name: "so1ve/node/setup",
		plugins: {
			node: pluginNode,
		},
	},
	{
		name: "so1ve/node/rules",
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
