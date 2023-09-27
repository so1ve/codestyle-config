import type { FlatESLintConfigItem } from "eslint-define-config";
import { pluginComments } from "../plugins";

export const comments = (): FlatESLintConfigItem[] => [
	{
		plugins: {
			"eslint-comments": pluginComments,
		},
	},
	{
		rules: {
			"eslint-comments/no-aggregating-enable": "error",
			"eslint-comments/no-duplicate-disable": "error",
			"eslint-comments/no-unused-enable": "error",
			"eslint-comments/disable-enable-pair": "off",
			"eslint-comments/no-unlimited-disable": "off",
		},
	},
];
