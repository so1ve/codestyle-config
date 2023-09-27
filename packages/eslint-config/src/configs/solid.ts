import type { FlatESLintConfigItem } from "eslint-define-config";

import { pluginSolid } from "../plugins";
import type { OptionsHasTypeScript, OptionsOverrides } from "../types";

export const solid = ({
	overrides,
	typescript,
}: OptionsHasTypeScript & OptionsOverrides = {}): FlatESLintConfigItem[] => [
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
			...(typescript ? pluginSolid.configs.typescript.rules : {}),
			...overrides,
		},
	},
];
