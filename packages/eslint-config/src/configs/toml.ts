import { GLOB_TOML } from "../globs";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function toml({ overrides }: OptionsOverrides = {}): Promise<
	TypedFlatConfigItem[]
> {
	const parserToml = await interopDefault(import("toml-eslint-parser"));
	const pluginToml = await interopDefault(import("eslint-plugin-toml"));

	return [
		{
			name: "so1ve/toml/setup",
			plugins: {
				toml: pluginToml,
			},
		},
		{
			name: "so1ve/toml/rules",
			languageOptions: {
				parser: parserToml,
			},
			files: [GLOB_TOML],
			rules: {
				...(pluginToml.configs.recommended.rules as any),
				"no-irregular-whitespace": "off",
				"spaced-comment": "off",
				...overrides,
			},
		},
	];
}
