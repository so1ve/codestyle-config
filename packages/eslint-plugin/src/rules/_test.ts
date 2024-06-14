import tsParser from "@typescript-eslint/parser";
import type {
	InvalidTestCase,
	RuleTesterInitOptions,
	TestCasesOptions,
} from "eslint-vitest-rule-tester";
import { run as _run } from "eslint-vitest-rule-tester";
import { expect } from "vitest";

export const run = (options: TestCasesOptions & RuleTesterInitOptions) =>
	_run({
		parser: tsParser as any,
		...options,
		invalid: options.invalid?.map(
			(i): InvalidTestCase =>
				typeof i === "string"
					? {
							code: i,
							output: (o) => expect(o).toMatchSnapshot(),
						}
					: i,
		),
	});
