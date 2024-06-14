import { defineConfig } from "tsup";

import base from "../../tsup.config";

export default defineConfig({
	...base,
	esbuildOptions: (options) => {
		options.inject = ["./build/shims.ts"];
	},
});
