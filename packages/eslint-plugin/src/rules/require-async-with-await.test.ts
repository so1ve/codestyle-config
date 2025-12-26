import { run } from "./_test";
import rule, { RULE_NAME } from "./require-async-with-await";

const valid = [
  "async () => { await 1; }",
  "async function a() { await 1; }",
  "class a { async a() { await 1; } }",
  "class a { static async a() { await 1; } }",
  "class a { constructor() { await 1; } }", // We don't handle constructor
  "class a { get a() { await 1; }; set a() { await 1; } }", // nor getters and setters
  "const a = { get a() { await 1; }, set a() { await 1; } }", // and inside an object
];

const invalid = [
  "() => { await 1; }",
  "function a() { await 1; }",
  "() => { function a() { await 1; } }",
  "() => { () => {}; await 1; }",
  "class a { a() { await 1; } }",
  "class a { @foo a() { await 1; } }",
  "class a { static a() { await 1; } }",
  "class a { @foo static a() { await 1; } }",
  "class a { @foo static a() { await 1; } }",
  "class a { a = function a() { await 1; } }",
  "const a = { a() { await 1; } }",
];

run({
  name: RULE_NAME,
  rule,
  valid,
  invalid,
});
