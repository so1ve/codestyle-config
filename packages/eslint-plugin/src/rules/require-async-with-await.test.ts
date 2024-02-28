import { RuleTester } from "@typescript-eslint/utils/ts-eslint";
import { it } from "vitest";

import rule, { RULE_NAME } from "./require-async-with-await";

const valid = [
	"async () => { await 1; }",
	"async function a() { await 1; }",
	"class a { async a() { await 1; } }",
	"class a { static async a() { await 1; } }",
	"class a { constructor() { await 1; } }", // We don't handle constructor
	"class a { get a() { await 1; }; set a() { await 1; } }", // nor getters and setters
	"const a = { get a() { await 1; }, set a() { await 1; } }", // and inside an object
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
	["const a = { a() { await 1; } }", "const a = { async a() { await 1; } }"],
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
			errors: [{ messageId: "requireAsyncWithAwait" }],
		})),
	});
});
