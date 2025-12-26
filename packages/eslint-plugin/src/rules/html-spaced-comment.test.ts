import parser from "@html-eslint/parser";

import { run } from "./_test";
import rule, { RULE_NAME } from "./html-spaced-comment";

const valid = [
  "<!-- a -->",
  "<!-- a b -->",
  "<!-- -->",
  "<!---->",
  `<!--
	-->`,
];

const invalid = [
  {
    code: "<!--a-->",
    output: "<!-- a -->",
  },
  {
    code: "<!-- a-->",
    output: "<!-- a -->",
  },
  {
    code: "<!--a -->",
    output: "<!-- a -->",
  },
];

run({
  name: RULE_NAME,
  rule,
  parser,
  valid,
  invalid,
});
