import { format } from "prettier";
import { describe, expect, it } from "vitest";

describe("prettier-plugin-curly-and-jsdoc", () => {
  it("should format", async () => {
    await expect(
      format(
        `/**
 * @abstract
 */
if (a) foo;
`,
        { parser: "typescript", plugins: ["./dist/index.js"] },
      ),
    ).resolves.toMatchInlineSnapshot(`
      "/** @abstract */
      if (a) {
        foo;
      }
      "
    `);
  });
});
