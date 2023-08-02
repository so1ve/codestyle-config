// @ts-check

const plugins = [
	...["astro", "curly-and-jsdoc", "pkgsort"].map((p) =>
		require.resolve(`prettier-plugin-${p}`),
	),
	require.resolve("@so1ve/prettier-plugin-toml"),
];

module.exports = {
	useTabs: true,
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
	],
	plugins,

	// Plugin Options
	// JSDoc
	jsdocPreferCodeFences: true,
	tsdoc: true,
};
