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
  // This is fucking ugly but cannot be fixed
  "const a: Type = async function foo(): Returns {}",
  "const a = () => { a = this; return 1; }",
  'function a() { return this; }'
];
const invalid: InvalidCase<MessageIds>[] = [
  {
    code: "const a = () => { return 1; };",
    output: "const a = () => (1);",
    errors: [{ messageId: "arrow" }],
  },
  {
    code: "const a = () => { stuff; return 1; };",
    output: "function a() { stuff; return 1; }",
    errors: [{ messageId: "declaration" }],
  },
  {
    code: "const a = () => { stuff; };",
    output: "function a() { stuff; }",
    errors: [{ messageId: "declaration" }],
  },
  {
    code: "const a = async () => { return 1; };",
    output: "const a = async () => (1);",
    errors: [{ messageId: "arrow" }],
  },
  {
    code: "const a = async () => { stuff; return 1; };",
    output: "async function a() { stuff; return 1; }",
    errors: [{ messageId: "declaration" }],
  },
  {
    code: "const a = async (): Promise<1> => { stuff; return 1; };",
    output: "async function a(): Promise<1> { stuff; return 1; }",
    errors: [{ messageId: "declaration" }],
  },
  {
    code: "const a: Some = async (): Type => { return 1; };",
    output: "const a: Some = async (): Type => (1);",
    errors: [{ messageId: "arrow" }],
  },
  {
    code: "async function a(): Type { return 1; }",
    output: "const a = async (): Type => (1);",
    errors: [{ messageId: "arrow" }],
  },
  {
    code: "const a = async function foo(): Returns {}",
    output: "async function a(): Returns {}",
    errors: [{ messageId: "declaration" }],
  },
  {
    code: `const a = () => {
      return {
        a: 1,
      };
    };`,
    output: `const a = () => ({
        a: 1,
      });`,
    errors: [{ messageId: "arrow" }],
  },
  {
    code: `export default function a() {
  return {};
}`,
    output: "export default () => ({});",
    errors: [{ messageId: "arrow" }],
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
