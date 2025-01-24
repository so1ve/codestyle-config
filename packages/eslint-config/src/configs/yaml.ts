import { GLOB_YAML } from "../globs";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function yaml({ overrides }: OptionsOverrides = {}): Promise {
	const parserYaml = await interopDefault(import("yaml-eslint-parser"));
	const pluginYaml = await interopDefault(import("eslint-plugin-yml"));

	return [
		{
			name: "so1ve/yaml/setup",
			plugins: {
				yaml: pluginYaml,
			},
		},
		{
			name: "so1ve/yaml/rules",
			languageOptions: {
				parser: parserYaml,
			},
			files: [GLOB_YAML],
			rules: {
				...renameRules(pluginYaml.configs.prettier.rules, { yml: "yaml" }),
				...renameRules(pluginYaml.configs.recommended.rules, { yml: "yaml" }),
				"yaml/no-empty-document": "off",
				"spaced-comment": "off",
				...overrides,
			},
		},
	];
}
