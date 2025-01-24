import { createRequire } from "node:module";

import type { Config } from "prettier";

const require = createRequire(import.meta.url);

const plugins = [
	...["astro", "curly-and-jsdoc", "pkgsort"].map((p) =>
		require.resolve(`prettier-plugin-${p}`),
	),
	require.resolve("@so1ve/prettier-plugin-toml"),
];

export default {
	useTabs: true,
	endOfLine: "lf",
	quoteProps: "preserve",
	trailingComma: "all",
	htmlWhitespaceSensitivity: "ignore",
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
	// JSDoc
	jsdocPreferCodeFences: true,
	jsdocCommentLineStrategy: "multiline",
	tsdoc: true,
} satisfies Config & Record;
