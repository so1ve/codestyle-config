import { createRequire } from "node:module";

import type { Config } from "prettier";

const require = createRequire(import.meta.url);

const plugins = [
	require.resolve("@so1ve/prettier-plugin-toml"),
	...["astro", "pkgsort"].map((p) => require.resolve(`prettier-plugin-${p}`)),
];

export default {
	useTabs: true,
	endOfLine: "lf",
	quoteProps: "preserve",
	trailingComma: "all",
	htmlWhitespaceSensitivity: "ignore",
	// experimentalOperatorPosition: "start",
	overrides: [
		{
			files: "*.html",
			options: {
				parser: "angular",
			},
		},
		{
			files: ["*.json", "*.json5", "*.jsonc", ".eslintrc"],
			options: {
				trailingComma: "none",
			},
		},
		...["package-lock.json", "pnpm-lock.yaml", ".yarn/**"].map((filename) => ({
			files: [filename],
			options: {
				requirePragma: true,
			},
		})),
	],
	plugins,

	// Plugin Options
	// JSDoc, disabled due to https://github.com/hosseinmd/prettier-plugin-jsdoc/issues/245
	// jsdocPreferCodeFences: true,
	// jsdocCommentLineStrategy: "multiline",
	// tsdoc: true,
} satisfies Config & Record<string, unknown>;
