import type { FlatESLintConfigItem } from "eslint-define-config";
import { pluginNode, pluginPromise } from "../plugins";

export function promise(): FlatESLintConfigItem[] {
	return [
		{
			plugins: {
				node: pluginPromise,
			},
		},
		{
			rules: {
				"promise/param-names": "error",
			},
		},
	];
}
