import type { FlatESLintConfigItem } from "eslint-define-config";
import { GLOB_TOML, GLOB_YAML } from "../globs";
import { parserToml, parserYaml, pluginToml, pluginYaml } from "../plugins";

export function toml(): FlatESLintConfigItem[] {
	return [
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
			},
		},
	];
}
