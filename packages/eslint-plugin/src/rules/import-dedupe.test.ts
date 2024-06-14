import { run } from "./_test";
import rule, { RULE_NAME } from "./import-dedupe";

const valid = ['import { a } from "foo";'];
const invalid = ['import { a, b, a, a, c, a , } from "foo";'];

run({
	name: RULE_NAME,
	rule,
	valid,
	invalid,
});
