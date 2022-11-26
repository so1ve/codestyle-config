module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
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
};
