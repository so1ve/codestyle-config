import type { FlatESLintConfigItem } from "eslint-define-config";
import { pluginNode, pluginSolid } from "../plugins";
import { Options } from "../types";

export function solid(options: Options = {}): FlatESLintConfigItem[] {
	return [
		{
			plugins: {
				solid: pluginSolid,
			},
		},
		{
			languageOptions: {
				sourceType: "module",
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
				},
			},
			rules: {
				...pluginSolid.configs.recommended.rules,
				...(options.typescript ? pluginSolid.configs.typescript.rules : {}),
			},
		},
	];
}
