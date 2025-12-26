import { run } from "./_test";
import rule, { RULE_NAME } from "./no-inline-type-modifier";

const valid = [
  'import type { a } from "foo";',
  'export type { a } from "foo";',
  "export type { a };",
];

const invalid = [
  'import { type a } from "foo";',
  'import { type a, b } from "foo";',
  'import D, { type a } from "foo";',
  'import D, { type a, b } from "foo";',
  'import { D, type a as b } from "foo";',
  'export { type a } from "foo";',
  'export { type a, b } from "foo";',
  'export { a, type b } from "foo";',
  'export { type a as b } from "foo";',
  "export { type a };",
  "export { type a, b };",
];

run({
  name: RULE_NAME,
  rule,

  valid,
  invalid,
});
