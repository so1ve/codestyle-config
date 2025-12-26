import { run } from "./_test";
import rule, { RULE_NAME } from "./sort-imports";

run({
  name: RULE_NAME,
  rule,
  valid: [
    `import fs from "node:fs";

import a from "a";
import b from "b";

import x from "./x";
`,
  ],
  invalid: [
    `import x from "./x";
import b from "b";
import fs from "node:fs";
import a from "a";
`,
  ],
});
