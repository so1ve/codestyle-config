// @ts-check
const { isPackageExists } = require("local-pkg");

const TS = isPackageExists("typescript");

if (!TS) {
	console.warn(
		"[@so1ve/eslint-config] TypeScript is not installed, fallback to JS only.",
	);
}

module.exports = TS
	? require("@so1ve/eslint-config-ts")
	: require("@so1ve/eslint-config-js");
