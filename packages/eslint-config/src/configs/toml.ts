import { GLOB_TOML } from "../globs";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function toml({ overrides }: OptionsOverrides = {}): Promise<
  TypedFlatConfigItem[]
> {
  const [parserToml, pluginToml] = await Promise.all([
    interopDefault(import("toml-eslint-parser")),
    interopDefault(import("eslint-plugin-toml")),
  ]);

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
      // @keep-sorted
      rules: {
        "no-irregular-whitespace": "off",
        "style/spaced-comment": "off",
        "toml/no-unreadable-number-separator": "error",
        "toml/precision-of-fractional-seconds": "error",
        "toml/precision-of-integer": "error",
        "toml/vue-custom-block/no-parsing-error": "error",
        ...overrides,
      },
    },
  ];
}
