import { RuleTester } from "@typescript-eslint/utils/ts-eslint";
import { it } from "vitest";

import rule, { RULE_NAME } from "./no-negated-comparison";

const valid = ["a != b", "a !== b"];
const invalid = [
  ["!(a == b)", "(a!=b)"],
  ["!(a === b)", "(a!==b)"],
  ["!(a != b)", "(a==b)"],
  ["!(a !== b)", "(a===b)"],
  ["!(a < b)", "(a>=b)"],
  ["!(a <= b)", "(a>b)"],
  ["!(a > b)", "(a<=b)"],
  ["!(a >= b)", "(a<b)"],
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
      errors: [{ messageId: "noNegatedComparison" }],
    })),
  });
});
