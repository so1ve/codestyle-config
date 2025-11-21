import { GLOB_TESTS } from "../globs";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function test({ overrides }: OptionsOverrides = {}): Promise<
	TypedFlatConfigItem[]
> {
	const [pluginNoOnlyTests, pluginVitest, pluginJestFormatting] =
		await Promise.all([
			interopDefault(
				// @ts-expect-error No declaration
				import("eslint-plugin-no-only-tests"),
			),
			interopDefault(import("@vitest/eslint-plugin")),
			interopDefault(
				// @ts-expect-error No declaration
				import("eslint-plugin-jest-formatting"),
			),
		]);

	return [
		{
			name: "so1ve/test/setup",
			// @keep-sorted
			plugins: {
				"jest-formatting": pluginJestFormatting,
				"no-only-tests": pluginNoOnlyTests,
				"vitest": pluginVitest,
			},
		},
		{
			name: "so1ve/test/rules",
			files: GLOB_TESTS,
			// @keep-sorted
			rules: {
				...pluginVitest.configs.recommended.rules,
				"no-only-tests/no-only-tests": "error",
				"vitest/expect-expect": "off",
				"vitest/no-alias-methods": "error",
				"vitest/no-interpolation-in-snapshots": "error",
				"vitest/no-test-prefixes": "error",
				"vitest/prefer-comparison-matcher": "error",
				"vitest/prefer-expect-resolves": "error",
				"vitest/prefer-mock-promise-shorthand": "error",
				"vitest/prefer-spy-on": "error",
				"vitest/prefer-to-be-falsy": "error",
				"vitest/prefer-to-be-object": "error",
				"vitest/prefer-to-be-truthy": "error",
				"vitest/prefer-to-contain": "error",
				"vitest/prefer-to-have-length": "error",
				"vitest/prefer-todo": "error",
				"vitest/valid-describe-callback": "off",
				"vitest/valid-title": "off",

				...overrides,
			},
		},
	];
}
