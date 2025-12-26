import type { InvalidTestCase } from "eslint-vitest-rule-tester";
import vueParser from "vue-eslint-parser";

import { run } from "./_test";
import rule, { RULE_NAME } from "./import-export-newline";

const valid = [
  'import a from "foo";\n\nconst b = 1;',
  'import a from "foo";\n\nexport const b = 1;',
  "const a = 1;\n\nexport const b = 1;",
  "export const a = 1;",
  `
/**
 * JSDoc
 */
export const a = 1;
`,
  `
const a = 1;

/**
 * JSDoc
 */
export const b = 1;
`,
  `declare module "foo" {
	export interface Foo {}
}`,
  `namespace Bar {
	export const a = 1;
}`,
  `declare module "foo" {
	/**
	 * JSDoc
	 */
	export interface Foo {}
}`,
  {
    code: `<script>import a from "foo";</script>`,
    filename: "test.vue",
    parser: vueParser,
  },
  {
    code: `<script>import a from "foo";\n\nconst b = 1;</script>`,
    filename: "test.vue",
    parser: vueParser,
  },
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
  `const a = 1;
/**
 * JSDoc
 */
export const b = 2;`,
  {
    code: `<script>import a from "foo";\nconst b = 1;</script>`,
    output: `<script>import a from "foo";\n\nconst b = 1;</script>`,
    filename: "test.vue",
    parser: vueParser,
    errors: [{ messageId: "newlineAfterLastImport" }],
  },
  {
    code: "export const a = 1;expression;",
    output: "export const a = 1;\n\nexpression;",
    errors: [{ messageId: "newlineAfterExport" }],
  },
  {
    code: `import foo from 'a';expression;`,
    output: `import foo from 'a';\n\nexpression;`,
    errors: [{ messageId: "newlineAfterLastImport" }],
  },
];

run({
  name: RULE_NAME,
  rule,
  valid,
  invalid,
});
