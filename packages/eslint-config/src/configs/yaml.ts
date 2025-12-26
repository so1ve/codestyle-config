import { GLOB_YAML } from "../globs";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function yaml({ overrides }: OptionsOverrides = {}): Promise<
	TypedFlatConfigItem[]
> {
	const [parserYaml, pluginYaml] = await Promise.all([
		interopDefault(import("yaml-eslint-parser")),
		interopDefault(import("eslint-plugin-yml")),
	]);

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
			// @keep-sorted
			rules: {
				...renameRules(pluginYaml.configs.prettier.rules, { yml: "yaml" }),
				...renameRules(pluginYaml.configs.recommended.rules, { yml: "yaml" }),
				"style/spaced-comment": "off",
				"yaml/no-empty-document": "off",
				...overrides,
			},
		},
	];
}
