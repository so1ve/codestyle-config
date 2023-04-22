// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "@so1ve/eslint-config-ts",
    "plugin:svelte/recommended",
    // For Dprint
    "plugin:svelte/prettier",
  ],
  overrides: [
    {
      plugins: ["svelte"],
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
});
