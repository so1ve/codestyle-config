import type { TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function perfectionist(): Promise<TypedFlatConfigItem[]> {
	const pluginPerfectionist = await interopDefault(
		import("eslint-plugin-perfectionist"),
	);

	return [
		{
			name: "so1ve/perfectionist/setup",
			plugins: {
				perfectionist: pluginPerfectionist,
			},
		},
		{
			name: "so1ve/perfectionist/rules",
			// @keep-sorted
			rules: {
				"perfectionist/sort-array-includes": [
					"error",
					{
						ignoreCase: false,
						partitionByComment: true,
						partitionByNewLine: true,
						type: "natural",
					},
				],
				"perfectionist/sort-decorators": [
					"error",
					{
						type: "natural",
					},
				],
				"perfectionist/sort-heritage-clauses": [
					"error",
					{
						type: "natural",
					},
				],
				"perfectionist/sort-maps": [
					"error",
					{
						partitionByComment: true,
						partitionByNewLine: true,
						type: "natural",
					},
				],
				"perfectionist/sort-sets": [
					"error",
					{
						partitionByComment: true,
						partitionByNewLine: true,
						type: "natural",
					},
				],
			},
		},
	];
}
