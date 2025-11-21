import { defineConfig } from "tsdown";

export default defineConfig({
	tsconfig: "../../tsconfig.json",
	entry: ["src/index.ts"],
	format: "esm",
	clean: true,
	dts: true,
	fixedExtension: false,
});
