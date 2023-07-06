// @ts-check
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: [
    "@so1ve/eslint-config-ts",
    "plugin:solid/typescript",
    "plugin:solid/recommended",
  ],
});
