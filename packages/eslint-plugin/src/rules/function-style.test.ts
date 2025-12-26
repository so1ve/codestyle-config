import type { InvalidTestCase } from "eslint-vitest-rule-tester";
import { unindent as $ } from "eslint-vitest-rule-tester";
import { expect } from "vitest";

import { run } from "./_test";
import rule, { RULE_NAME } from "./function-style";

const valid = [
  "const a = () => 1;",
  $`
    function a() {
      stuff;
      return 1;
    }
  `,
  $`
    function a(some: Type)
      function a(some: Another)
      function a() {
        return 1;
    }
  `,
  $`
    const a: Annotation = () => {
      stuff;
      return 1;
    };
  `,
  "function* a() {}",
  "const a = () => {}",
  "function a() {}",
  // This is fucking ugly but cannot be fixed
  "const a: Type = async function foo(): Returns {}",
  "const a = () => { a = this; return 1; }",
  "function a() { return this; }",
  "function a() { return () => this }",
  "const a = () => { foo; function a() { this; } }",
  $`
    export function last(array: readonly []): undefined;
    export function last<T>(array: readonly T[]): T;
    export function last<T>(array: readonly T[]): T | undefined {
      return at(array, -1);
    }
  `,
  $`
    export default function () {
      return
    }
  `,
  $`
    function a() {
      return
    }
  `,
  "const a = () => { const b = () => { return this; }; return this; };",
  $`
    function a() {
      // foo
      return 1
    }
  `,
];

const invalid: InvalidTestCase[] = [
  "const a = () => { return 1; };",
  "const a = () => { stuff; return 1; };",
  "const a = () => { stuff; };",
  "const a = async () => { return 1; };",
  "const a = async () => { stuff; return 1; };",
  "const a = async (): Promise<1> => { stuff; return 1; };",
  "const a: Some = async (): Type => { return 1; };",
  "async function a(): Type { return 1; }",
  "const a = async function foo(): Returns {}",
  $`
    const a = () => {
      return {
        a: 1,
      };
    };
  `,
  $`
    export default function a() {
      return {};
    }
  `,
  $`
    export default function() {
      return {};
    }
  `,
  $`
    function foo() {
      return [
        // foo
      ];
    }
  `,
  "function foo() { return{} }",
];

run({
  name: RULE_NAME,
  rule,

  valid,
  invalid: invalid.map(
    (i): InvalidTestCase =>
      typeof i === "string"
        ? {
            code: i,
            output: (o) => expect(o).toMatchSnapshot(),
          }
        : i,
  ),
});
