import type { FlatESLintConfigItem } from "eslint-define-config";

import { pluginJsdoc } from "../plugins";

export const jsdoc = (): FlatESLintConfigItem[] => [
	{
		plugins: {
			jsdoc: pluginJsdoc,
		},
		rules: {
			"jsdoc/check-access": "error",
			"jsdoc/check-alignment": "error",
			"jsdoc/check-param-names": "error",
			"jsdoc/check-property-names": "error",
			"jsdoc/check-types": "error",
			"jsdoc/empty-tags": "error",
			"jsdoc/implements-on-classes": "error",
			"jsdoc/multiline-blocks": "error",
			"jsdoc/no-defaults": "error",
			"jsdoc/no-multi-asterisks": "error",
			"jsdoc/require-param-name": "error",
			"jsdoc/require-property": "error",
			"jsdoc/require-property-description": "error",
			"jsdoc/require-property-name": "error",
			"jsdoc/require-returns-check": "error",
			"jsdoc/require-returns-description": "error",
			"jsdoc/require-yields-check": "error",
			"jsdoc/valid-types": "error",
		},
	},
];
