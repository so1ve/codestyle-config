// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "@so1ve/eslint-config-ts",
  ],
  plugins: [
    "svelte3",
  ],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
  },
  settings: {
    "svelte3/typescript": true,
  },
});
