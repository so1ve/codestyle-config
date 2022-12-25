import { RuleTester } from "@typescript-eslint/utils/dist/ts-eslint";
import { it } from "vitest";
import rule, { RULE_NAME } from "./space-between-generic-and-paren";

const valids = [
  "const a = <T>(t: T) => t;",
  "function a<T>(t: T) { return t; }",
];
const invalids = [
  [
    "const a = <T> (t: T) => t;",
    "const a = <T>(t: T) => t;",
  ],
  [
    "const a = <T>            (t: T) => t;",
    "const a = <T>(t: T) => t;",
  ],
  [
    "function a <T> (t: T) { return t; }",
    "function a<T>(t: T) { return t; }",
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
      errors: [{ messageId: "noSpaceBetweenGenericAndParen" }],
    })),
  });
});
