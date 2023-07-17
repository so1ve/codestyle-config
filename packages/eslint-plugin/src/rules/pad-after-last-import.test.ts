import { RuleTester } from "@typescript-eslint/utils/ts-eslint";
import { it } from "vitest";

import rule, { RULE_NAME } from "./pad-after-last-import";

const valids = ['import a from "foo";\n\nconst b = 1;'];
const invalids = [
  [
    'import a from "foo";\nconst b = 1;',
    'import a from "foo";\n\nconst b = 1;',
  ],
  [
    'import a from "foo";\n// comment\nconst b = 1;',
    'import a from "foo";\n\n// comment\nconst b = 1;',
  ],
];

it("runs", () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
  });

  ruleTester.run(RULE_NAME, rule, {
    valid: valids,
    invalid: invalids.map((i) => ({
      code: i[0],
      output: i[1],
      errors: [{ messageId: "padAfterLastImport" }],
    })),
  });
});
