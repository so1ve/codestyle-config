import type { Plugin } from "prettier";
import * as _jsdoc from "prettier-plugin-jsdoc";

const jsdoc = _jsdoc as any;

export default {
	options: jsdoc.options,
	defaultOptions: jsdoc.defaultOptions,
	parsers: {
		...jsdoc.parsers,
		babel: {
			...jsdoc.parsers.babel,
			preprocess: (code, options) =>
				jsdoc.parsers.babel.preprocess(
					// curly.parsers.babel.preprocess(code, options),
					code,
					options,
				),
		},
		typescript: {
			...jsdoc.parsers.typescript,
			preprocess: (code, options) =>
				jsdoc.parsers.typescript.preprocess(
					// curly.parsers.typescript.preprocess(code, options),
					code,
					options,
				),
		},
	},
} satisfies Plugin;
