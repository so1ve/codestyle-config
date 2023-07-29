const path = require("node:path");

const SEARCH_STR = `${path.sep}node_modules${path.sep}eslint${path.sep}`;

module.exports = function getEslintModules() {
	const map = {};
	for (const modulePath of Object.keys(require.cache)) {
		const pos = modulePath.indexOf(SEARCH_STR);
		if (pos !== -1) {
			const eslintPath = modulePath.slice(
				0,
				Math.max(0, pos + SEARCH_STR.length),
			);
			if (!map[eslintPath]) {
				map[eslintPath] = require(eslintPath);
			}
		}
	}

	let modules = Object.values(map);
	if (modules.length === 0) {
		modules = [require("eslint")];
	}

	return modules;
};
