import { run } from "./_test";
import rule, { RULE_NAME } from "./no-negated-comparison";

const valid = ["a != b", "a !== b"];
const invalid = [
	"!(a == b)",
	"!(a === b)",
	"!(a != b)",
	"!(a !== b)",
	"!(a < b)",
	"!(a <= b)",
	"!(a > b)",
	"!(a >= b)",
];

run({
	name: RULE_NAME,
	rule,
	valid,
	invalid,
});
