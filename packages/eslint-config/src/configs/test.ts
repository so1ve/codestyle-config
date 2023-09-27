import type { FlatESLintConfigItem } from "eslint-define-config";

import { GLOB_TESTS } from "../globs";
import {
	pluginJestFormatting,
	pluginNoOnlyTests,
	pluginVitest,
} from "../plugins";
import type { OptionsOverrides } from "../types";

export const test = ({
	overrides,
}: OptionsOverrides = {}): FlatESLintConfigItem[] => [
	{
		plugins: {
			"no-only-tests": pluginNoOnlyTests,
			"vitest": pluginVitest,
			"jest-formatting": pluginJestFormatting,
		},
	},
	{
		files: GLOB_TESTS,
		rules: {
			...pluginVitest.configs.recommended.rules,
			"no-only-tests/no-only-tests": "error",
			"vitest/expect-expect": "off",
			"vitest/valid-describe-callback": "off",
			"vitest/no-alias-methods": "error",
			"vitest/no-interpolation-in-snapshots": "error",
			"vitest/no-test-prefixes": "error",
			"vitest/prefer-expect-resolves": "error",
			"vitest/prefer-comparison-matcher": "error",
			"vitest/prefer-mock-promise-shorthand": "error",
			"vitest/prefer-spy-on": "error",
			"vitest/prefer-to-be-falsy": "error",
			"vitest/prefer-to-be-object": "error",
			"vitest/prefer-to-be-truthy": "error",
			"vitest/prefer-to-contain": "error",
			"vitest/prefer-to-have-length": "error",
			"vitest/prefer-todo": "error",
			"vitest/valid-title": ["error", { allowArguments: true }],
			"jest-formatting/padding-around-all": "error",

			...overrides,
		},
	},
];
