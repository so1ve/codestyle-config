import { defineConfig } from "tsdown";

export default defineConfig({
	workspace: {
		include: ["packages/*"],
		exclude: ["packages/eslint-plugin-sort-imports"],
	},
	entry: ["src/index.ts"],
	format: "esm",
	clean: true,
	dts: true,
	fixedExtension: false,
});
