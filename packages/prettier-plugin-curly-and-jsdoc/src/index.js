const curly = require("prettier-plugin-curly");
const jsdoc = require("prettier-plugin-jsdoc");

exports.options = jsdoc.options;
exports.defaultOptions = jsdoc.defaultOptions;
exports.parsers = {
	...jsdoc.parsers,
	babel: {
		...jsdoc.parsers.babel,
		preprocess: (code, options) =>
			jsdoc.parsers.babel.preprocess(
				curly.parsers.babel.preprocess(code, options),
				options,
			),
	},
	typescript: {
		...jsdoc.parsers.typescript,
		preprocess: (code, options) =>
			jsdoc.parsers.typescript.preprocess(
				curly.parsers.typescript.preprocess(code, options),
				options,
			),
	},
};
