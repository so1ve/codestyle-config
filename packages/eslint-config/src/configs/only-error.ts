import type { FlatESLintConfigItem } from "eslint-define-config";
import { pluginNode, pluginOnlyError } from "../plugins";

export function onlyError(): FlatESLintConfigItem[] {
	return [
		{
			plugins: {
				"only-error": pluginOnlyError,
			},
		},
	];
}
