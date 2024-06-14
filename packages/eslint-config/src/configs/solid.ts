import type {
	ConfigItem,
	OptionsHasTypeScript,
	OptionsOverrides,
} from "../types";
import { interopDefault } from "../utils";

export async function solid({
	overrides,
	typescript,
}: OptionsHasTypeScript & OptionsOverrides = {}): Promise<ConfigItem[]> {
	const pluginSolid = await interopDefault(import("eslint-plugin-solid"));

	return [
		{
			name: "so1ve/solid/setup",
			plugins: {
				solid: pluginSolid,
			},
		},
		{
			name: "so1ve/solid/rules",
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
}
