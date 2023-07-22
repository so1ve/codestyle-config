import { RuleTester } from "@typescript-eslint/utils/ts-eslint";
import { it } from "vitest";

import rule, { RULE_NAME } from "./use-async-with-await";

const valid = [
	"async () => { await 1; }",
	"async function a() { await 1; }",
	"class a { async a() { await 1; } }",
	"class a { static async a() { await 1; } }",
];

const invalid = [
	["() => { await 1; }", "async () => { await 1; }"],
	["function a() { await 1; }", "async function a() { await 1; }"],
	[
		"() => { function a() { await 1; } }",
		"() => { async function a() { await 1; } }",
	],
	["() => { () => {}; await 1; }", "async () => { () => {}; await 1; }"],
	["class a { a() { await 1; } }", "class a { async a() { await 1; } }"],
	[
		"class a { @foo a() { await 1; } }",
		"class a { @foo async a() { await 1; } }",
	],
	[
		"class a { static a() { await 1; } }",
		"class a { static async a() { await 1; } }",
	],
	[
		"class a { @foo static a() { await 1; } }",
		"class a { @foo static async a() { await 1; } }",
	],
	[
		"class a { @foo static a() { await 1; } }",
		"class a { @foo static async a() { await 1; } }",
	],
	[
		"class a { a = function a() { await 1; } }",
		"class a { a = async function a() { await 1; } }",
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
			errors: [{ messageId: "useAsyncWithAwait" }],
		})),
	});
});
