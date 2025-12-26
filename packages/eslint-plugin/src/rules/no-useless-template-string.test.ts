import { run } from "./_test";
import rule, { RULE_NAME } from "./no-useless-template-string";

const valid = [
  "const a = '1';",
  'const a = "1"',
  // eslint-disable-next-line no-template-curly-in-string
  "const a = `1${b}`",
  "String.raw`str`",
  '`""`',
  "`''`",
];
const invalid = ["const a = `1`"];

run({
  name: RULE_NAME,
  rule,
  valid,
  invalid,
});
