import { defineConfig } from "tsdown";

import base from "../../tsdown.config.ts";

export default defineConfig({
	...base,
	format: "cjs",
	dts: false,
});
