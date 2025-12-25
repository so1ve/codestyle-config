import type { InvalidTestCase } from "eslint-vitest-rule-tester";

import { run } from "./_test";
import rule, { RULE_NAME } from "./import-export-newline";

const valid = [
	'import a from "foo";\n\nconst b = 1;',
	'import a from "foo";\n\nexport const b = 1;',
	"const a = 1;\n\nexport const b = 1;",
	"export const a = 1;",
];
const invalid: InvalidTestCase[] = [
	`import a from "foo";
const b = 1;`,
	`import a from "foo";
// comment
const b = 1;`,
	{
		code: `import a from "foo";
export const b = 1;`,
		output: `import a from "foo";

export const b = 1;`,
		errors: [{ messageId: "newlineAfterLastImport" }],
	},
	{
		code: `import a from "foo";
const c = 1;
export const b = 1;`,
		output: `import a from "foo";

const c = 1;

export const b = 1;`,
		errors: [
			{ messageId: "newlineAfterLastImport" },
			{ messageId: "newlineBeforeExport" },
		],
	},
	{
		code: `export const a = 1;
const b = 1;`,
		output: `export const a = 1;

const b = 1;`,
		errors: [{ messageId: "newlineAfterExport" }],
	},
	`export * from 'a';
// a
export const c = 3;
const d = 4;

1;
export default 1;
`,
];

run({
	name: RULE_NAME,
	rule,
	valid,
	invalid,
});
