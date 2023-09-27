import type { FlatESLintConfigItem } from "eslint-define-config";
import { GLOB_YAML } from "../globs";
import { parserYaml, pluginYaml } from "../plugins";

export function yaml(): FlatESLintConfigItem[] {
	return [
		{
			plugins: {
				yaml: pluginYaml,
			},
			languageOptions: {
				parser: parserYaml,
			},
			files: [GLOB_YAML],
			rules: {
				...(pluginYaml.configs.prettier.rules as any),
				...(pluginYaml.configs.recommended.rules as any),
				"yaml/no-empty-document": "off",
				"spaced-comment": "off",
			},
		},
	];
}
