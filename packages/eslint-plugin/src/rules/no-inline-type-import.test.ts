import { run } from "./_test";
import rule, { RULE_NAME } from "./no-inline-type-import";

const valid = ['import type { a } from "foo";'];
const invalid = [
  'import { type a } from "foo";',
  'import { type a, b } from "foo";',
  'import D, { type a } from "foo";',
  'import D, { type a, b } from "foo";',
  'import { D, type a as b } from "foo";',
];

run({
  name: RULE_NAME,
  rule,

  valid,
  invalid,
});
