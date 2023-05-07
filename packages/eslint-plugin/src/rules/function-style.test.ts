import { RuleTester } from "@typescript-eslint/utils/dist/ts-eslint";
import { it } from "vitest";

import type { InvalidCase } from "../test-types";

import type { MessageIds } from "./function-style";
import rule, { RULE_NAME } from "./function-style";

const valid = [
  "const a = () => 1;",
  `function a() {
    stuff;
    return 1;
  }`,
  `function a(some: Type)
  function a(some: Another)
  function a() {
    return 1;
  }`,
  `const a: Annotation = () => {
    stuff;
    return 1;
  };`,
  "function* a() {}",
  "const a = () => {}",
  "function a() {}",
];
const invalid: InvalidCase<MessageIds>[] = [
  {
    code: "function a() { return 1; }",
    output: "const a = () => { return 1; };",
    errors: [{ messageId: "arrow" }],
  },
  {
    code: "const a = () => { return 1; };",
    output: "const a = () => 1;",
    errors: [{ messageId: "arrowShorthand" }],
  },
  {
    code: "const a = () => { stuff; return 1; };",
    output: "function a() { stuff; return 1; }",
    errors: [{ messageId: "declaration" }],
  },
  {
    code: "async function a() { return 1; }",
    output: "const a = async () => { return 1; };",
    errors: [{ messageId: "arrow" }],
  },
  {
    code: "const a = async () => { return 1; };",
    output: "const a = async () => 1;",
    errors: [{ messageId: "arrowShorthand" }],
  },
  {
    code: "const a = async () => { stuff; return 1; };",
    output: "async function a() { stuff; return 1; }",
    errors: [{ messageId: "declaration" }],
  },
];

it("runs", () => {
  const ruleTester: RuleTester = new RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
  });

  ruleTester.run(RULE_NAME, rule, {
    valid,
    invalid,
  });
});
