import { pluginComments } from "../plugins";
import type { ConfigItem } from "../types";

export const comments = (): ConfigItem[] => [
	{
		name: "so1ve/comments/setup",
		plugins: {
			"eslint-comments": pluginComments,
		},
	},
	{
		name: "so1ve/comments/rules",
		rules: {
			"eslint-comments/no-aggregating-enable": "error",
			"eslint-comments/no-duplicate-disable": "error",
			"eslint-comments/no-unused-enable": "error",
			"eslint-comments/disable-enable-pair": "off",
			"eslint-comments/no-unlimited-disable": "off",
		},
	},
];
