import { GLOB_MARKDOWN } from "../globs";
import type {
	OptionsComponentExts,
	OptionsOverrides,
	TypedFlatConfigItem,
} from "../types";
import { interopDefault } from "../utils";

export async function mdx({
	componentExts = [],
	overrides,
}: OptionsComponentExts & OptionsOverrides = {}): Promise<
	TypedFlatConfigItem[]
> {
	const pluginMdx = await interopDefault(import("eslint-plugin-mdx"));

	return [
		{
			...(pluginMdx.flat as TypedFlatConfigItem),
			name: "so1ve/mdx/setup",
			processor: pluginMdx.createRemarkProcessor({
				lintCodeBlocks: true,
				languageMapper: {},
			}),
		},
		{
			...(pluginMdx.flatCodeBlocks as TypedFlatConfigItem),
			name: "so1ve/mdx/rules",
			files: [
				...(pluginMdx.flatCodeBlocks.files as string[]),
				...componentExts.map((ext) => `${GLOB_MARKDOWN}/*.${ext}`),
			],
			rules: {
				...pluginMdx.flatCodeBlocks.rules,
				"html/require-doctype": "off",
				"ts/no-redeclare": "off",
				"ts/no-unused-vars": "off",
				"ts/no-use-before-define": "off",
				"ts/no-var-requires": "off",
				"ts/consistent-type-imports": "off",
				"ts/no-namespace": "off",
				"ts/no-require-imports": "off",
				"import/no-unresolved": "off",
				"unused-imports/no-unused-imports": "off",
				"unused-imports/no-unused-vars": "off",
				"no-alert": "off",
				"no-console": "off",
				"no-restricted-imports": "off",
				"no-undef": "off",
				"no-unused-expressions": "off",

				...overrides,
			},
		},
	];
}
