import { run } from "./_test";
import rule, { RULE_NAME } from "./pad-after-last-import";

const valid = ['import a from "foo";\n\nconst b = 1;'];
const invalid = [
	'import a from "foo";\nconst b = 1;',
	'import a from "foo";\n// comment\nconst b = 1;',
];

run({
	name: RULE_NAME,
	rule,
	valid,
	invalid,
});
