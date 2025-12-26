import { run } from "./_test";
import rule, { RULE_NAME } from "./no-import-promises-as";

const valid = ['import { promises } from "fs";'];
const invalid = [
  'import { promises as fs } from "fs";',
  'import { promises as fs } from "node:fs";',
];

run({
  name: RULE_NAME,
  rule,
  valid,
  invalid,
});
