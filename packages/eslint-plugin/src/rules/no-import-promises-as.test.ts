import { RuleTester } from "@typescript-eslint/utils/ts-eslint";
import { it } from "vitest";

import rule, { RULE_NAME } from "./no-import-promises-as";

const valid = ['import { promises } from "fs";'];
const invalid = [
  [
    'import { promises as fs } from "fs";',
    'import {  } from "fs";\nimport fs from "fs/promises";',
  ],
  [
    'import { promises as fs } from "node:fs";',
    'import {  } from "node:fs";\nimport fs from "node:fs/promises";',
  ],
];

it("runs", () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
  });

  ruleTester.run(RULE_NAME, rule, {
    valid,
    invalid: invalid.map((i) => ({
      code: i[0],
      output: i[1],
      errors: [{ messageId: "noImportPromisesAs" }],
    })),
  });
});
