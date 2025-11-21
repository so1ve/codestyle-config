import { GLOB_DTS } from "../globs";
import { pluginImport } from "../plugins";
import type { Options, TypedFlatConfigItem } from "../types";

export const imports = (options: Options = {}): TypedFlatConfigItem[] => [
	{
		name: "so1ve/imports/setup",
		plugins: {
			import: pluginImport,
		},
	},
	{
		name: "so1ve/imports/rules",
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
		},
		settings: {
			"import/parsers": {
				"espree": [".js", ".cjs", ".mjs", ".jsx"],
				"@typescript-eslint/parser": [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
			},
			"import/resolver": {
				...(options.typescript
					? {
							node: {
								extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
							},
							typescript: {
								extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
							},
						}
					: {
							node: { extensions: [".js", ".mjs"] },
						}),
			},
		},
		// @keep-sorted
		rules: {
			"import/default": "error",
			"import/export": "error",
			"import/first": "error",
			"import/named": "error",
			"import/namespace": "off", // Disable this for better performance
			"import/no-duplicates": "error",
			"import/no-mutable-exports": "error",
			"import/no-named-as-default": "error",
			"import/no-named-default": "error",
			"import/no-useless-path-segments": ["error", { noUselessIndex: true }],
			"import/no-webpack-loader-syntax": "error",
		},
	},
	{
		name: "so1ve/imports/rules/dts",
		files: [GLOB_DTS],
		rules: {
			"import/no-duplicates": "off",
		},
	},
];
