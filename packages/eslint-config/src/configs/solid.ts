import type {
	OptionsHasTypeScript,
	OptionsOverrides,
	Rules,
	TypedFlatConfigItem,
} from "../types";
import { interopDefault } from "../utils";

export async function solid({
	overrides,
	typescript,
}: OptionsHasTypeScript & OptionsOverrides = {}): Promise {
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
				...(pluginSolid.configs.recommended.rules as Rules),
				...(typescript ? (pluginSolid.configs.typescript.rules as Rules) : {}),
				...overrides,
			},
		},
	];
}
