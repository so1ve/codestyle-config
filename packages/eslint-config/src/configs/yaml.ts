import { GLOB_YAML } from "../globs";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

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
        "style/spaced-comment": "off",
        "yaml/block-mapping-colon-indicator-newline": "off",
        "yaml/block-mapping-question-indicator-newline": "off",
        "yaml/block-sequence-hyphen-indicator-newline": "off",
        "yaml/flow-mapping-curly-newline": "off",
        "yaml/flow-mapping-curly-spacing": "off",
        "yaml/flow-sequence-bracket-newline": "off",
        "yaml/flow-sequence-bracket-spacing": "off",
        "yaml/indent": "off",
        "yaml/key-spacing": "off",
        "yaml/no-empty-document": "off",
        "yaml/no-empty-key": "error",
        "yaml/no-empty-mapping-value": "error",
        "yaml/no-empty-sequence-entry": "error",
        "yaml/no-irregular-whitespace": "error",
        "yaml/no-multiple-empty-lines": "off",
        "yaml/no-tab-indent": "error",
        "yaml/no-trailing-zeros": "off",
        "yaml/quotes": "off",
        "yaml/vue-custom-block/no-parsing-error": "error",
        ...overrides,
      },
    },
  ];
}
