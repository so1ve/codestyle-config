import { GLOB_TOML } from "../globs";
import { parserToml, pluginToml } from "../plugins";
import type { ConfigItem, OptionsOverrides } from "../types";

export const toml = ({ overrides }: OptionsOverrides = {}): ConfigItem[] => [
	{
		plugins: {
			toml: pluginToml,
		},
	},
	{
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
