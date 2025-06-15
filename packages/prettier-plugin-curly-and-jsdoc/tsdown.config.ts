import { defineConfig } from "tsdown";

import base from "../../tsdown.config";

export default defineConfig({
	...base,
	dts: false,
});
