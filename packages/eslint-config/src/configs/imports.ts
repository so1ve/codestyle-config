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
		rules: {
			"import/named": "error",
			"import/default": "error",
			"import/export": "error",
			"import/first": "error",
			"import/namespace": "off", // Disable this for better performance
			"import/no-mutable-exports": "error",
			"import/no-useless-path-segments": ["error", { noUselessIndex: true }],
			"import/no-named-as-default": "error",
			"import/no-unresolved": "off",
			"import/no-absolute-path": "off",
			"import/no-duplicates": "error",
			"import/no-named-default": "error",
			"import/no-webpack-loader-syntax": "error",
			"import/no-named-as-default-member": "off",
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
