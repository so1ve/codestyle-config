import { RuleTester } from "@typescript-eslint/utils/ts-eslint";
import { it } from "vitest";

import rule, { RULE_NAME } from "./no-inline-type-import";

const valid = ['import type { a } from "foo";'];
const invalid = [
	['import { type a } from "foo";', 'import type { a } from "foo";'],
	[
		'import { type a, b } from "foo";',
		'import type { a } from "foo";\nimport { b } from "foo";',
	],
	[
		'import D, { type a, b } from "foo";',
		'import type { a } from "foo";\nimport D, { b } from "foo";',
	],
];

it("runs", () => {
	const ruleTester: RuleTester = new RuleTester({
		parser: require.resolve("@typescript-eslint/parser"),
	});

	ruleTester.run(RULE_NAME, rule, {
		valid,
		invalid: invalid.map((i) => ({
			code: i[0],
			output: i[1],
			errors: [{ messageId: "noInlineTypeImport" }],
		})),
	});
});
