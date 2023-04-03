import { RuleTester } from "@typescript-eslint/utils/dist/ts-eslint";
import { it } from "vitest";

import rule, { RULE_NAME } from "./no-useless-template-string";

const valids = [
  "const a = '1';",
  "const a = \"1\"",
  // eslint-disable-next-line no-template-curly-in-string
  "const a = \`1${b}\`",
];
const invalids = [
  [
    "const a = \`1\`",
    "const a = \"1\"",
  ],
];

it("runs", () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
  });

  ruleTester.run(RULE_NAME, rule, {
    valid: valids,
    invalid: invalids.map(i => ({
      code: i[0],
      output: i[1],
      errors: [
        { messageId: "noUselessTemplateString" },
      ],
    })),
  });
});
