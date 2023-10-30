import { pluginSolid } from "../plugins";
import type {
	ConfigItem,
	OptionsHasTypeScript,
	OptionsOverrides,
} from "../types";

export const solid = ({
	overrides,
	typescript,
}: OptionsHasTypeScript & OptionsOverrides = {}): ConfigItem[] => [
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
