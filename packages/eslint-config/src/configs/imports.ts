import type { FlatESLintConfigItem } from "eslint-define-config";
import { pluginImport } from "../plugins";
import { GLOB_DTS } from "../globs";

export const imports = (options: any /* TODO */): FlatESLintConfigItem[] => [
	{
		plugins: {
			import: pluginImport,
		},
		settings: options.typescript
			? {
					"import/resolver": {
						node: { extensions: [".js", ".mjs"] },
					},
			  }
			: {
					node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
					typescript: {
						extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"],
					},
			  },
		rules: {
			...pluginImport.configs.recommended.rules,
			"import/first": "error",
			"import/no-mutable-exports": "error",
			"import/no-useless-path-segments": ["error", { noUselessIndex: true }],
			"import/no-unresolved": "off",
			"import/no-absolute-path": "off",
			"import/namespace": "off", // Disable this for better performance
			"import/export": "error",
			"import/no-duplicates": "error",
			"import/no-named-default": "error",
			"import/no-webpack-loader-syntax": "error",
			"import/no-named-as-default-member": "off",
		},
	},
	{
		files: [GLOB_DTS],
		rules: {
			"import/no-duplicates": "off",
		},
	},
];
