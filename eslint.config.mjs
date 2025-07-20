import { so1ve } from "@so1ve/eslint-config";
import pluginAntfu from "eslint-plugin-antfu";

export default so1ve({ pnpm: true }).append({
	name: "tests",
	files: ["**/*.test.ts"],
	plugins: {
		antfu: pluginAntfu,
	},
	rules: {
		"antfu/indent-unindent": "error",
	},
});
