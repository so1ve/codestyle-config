import { GLOB_TESTS } from "../globs";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function test({ overrides }: OptionsOverrides = {}): Promise {
	const pluginNoOnlyTests = await interopDefault(
		// @ts-expect-error No declaration
		import("eslint-plugin-no-only-tests"),
	);
	const pluginVitest = await interopDefault(import("eslint-plugin-vitest"));
	const pluginJestFormatting = await interopDefault(
		// @ts-expect-error No declaration
		import("eslint-plugin-jest-formatting"),
	);

	return [
		{
			name: "so1ve/test/setup",
			plugins: {
				"no-only-tests": pluginNoOnlyTests,
				"vitest": pluginVitest,
				"jest-formatting": pluginJestFormatting,
			},
		},
		{
			name: "so1ve/test/rules",
			files: GLOB_TESTS,
			rules: {
				...pluginVitest.configs.recommended.rules,
				"no-only-tests/no-only-tests": "error",
				"vitest/expect-expect": "off",
				"vitest/valid-title": "off",
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

				...overrides,
			},
		},
	];
}
