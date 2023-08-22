// @ts-check
const { defineConfig } = require("eslint-define-config");
const { isPackageExists } = require("local-pkg");

const TS = isPackageExists("typescript");

if (!TS) {
	console.warn(
		"[@so1ve/eslint-config-solid] TypeScript is not installed, fallback to JS only.",
	);
}

module.exports = defineConfig({
	extends: [
		...(TS?["@so1ve/eslint-config-ts",
		"plugin:solid/typescript"]:["@so1ve/eslint-config-basic"]),
		"plugin:solid/recommended",
	],
});
