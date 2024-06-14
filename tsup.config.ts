import { defineConfig } from "tsup";

export default defineConfig({
	tsconfig: "../../tsconfig.json",
	entry: ["src/index.ts"],
	format: "esm",
	splitting: true,
	clean: true,
	dts: true,
});
