import type { FlatESLintConfigItem } from "eslint-define-config";

import { pluginPromise } from "../plugins";

export const promise = (): FlatESLintConfigItem[] => [
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
