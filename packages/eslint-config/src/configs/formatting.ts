import type { FlatESLintConfigItem } from "eslint-define-config";

import { GLOB_PACKAGEJSON, GLOB_TESTS } from "../globs";
import type { Options } from "../types";

export const formatting = (options: Options): FlatESLintConfigItem[] =>
	[
		{
			rules: {
				"so1ve/no-useless-template-string": "error",
				"so1ve/no-negated-comparison": "error",
				"so1ve/no-import-promises-as": "error",
				"so1ve/pad-after-last-import": "error",
				"so1ve/function-style": "error",
				"quote-props": ["error", "consistent-as-needed"],
				"padding-line-between-statements": [
					"error",
					{ blankLine: "always", prev: "*", next: "return" },
				],
			},
		},
		(options.jsonc ?? true) && {
			files: [GLOB_PACKAGEJSON],
			rules: {
				"jsonc/sort-keys": [
					"error",
					{
						pathPattern: "^exports$",
						order: { type: "asc" },
					},
					{
						pathPattern: "^exports.*$",
						order: ["types", "require", "import", "default"],
					},
				],
			},
		},
		(options.test ?? true) && {
			files: GLOB_TESTS,
			rules: {
				"jest-formatting/padding-around-all": "error",
			},
		},
	].filter(Boolean) as any;
