export const GLOB_SRC_EXT = "?([cm])[jt]s?(x)";
export const GLOB_SRC = `**/*.${GLOB_SRC_EXT}`;

export const GLOB_JS = "**/*.?([cm])js";
export const GLOB_JSX = "**/*.?([cm])jsx";

export const GLOB_TS = "**/*.?([cm])ts";
export const GLOB_TSX = "**/*.?([cm])tsx";
export const GLOB_DTS = "**/*.d.?([cm])tsx";

export const GLOB_STYLE = "**/*.{c,le,sc}ss";
export const GLOB_CSS = "**/*.css";
export const GLOB_LESS = "**/*.less";
export const GLOB_SCSS = "**/*.scss";

export const GLOB_JSON = "**/*.json";
export const GLOB_JSON5 = "**/*.json5";
export const GLOB_JSONC = "**/*.jsonc";
export const GLOB_ESLINTRC = "**/.eslintrc";

export const GLOB_MARKDOWN = "**/*.md?(x)";
export const GLOB_VUE = "**/*.vue";
export const GLOB_YAML = "**/*.y?(a)ml";
export const GLOB_TOML = "**/*.toml";
export const GLOB_HTML = "**/*.htm?(l)";

export const GLOB_PACKAGEJSON = "**/package.json";
export const GLOB_TSCONFIG = ["**/tsconfig.json", "**/tsconfig.*.json"];

export const GLOB_MARKDOWN_CODE = `${GLOB_MARKDOWN}/**`;

export const GLOB_TESTS = [
	`**/__tests__/**/*.${GLOB_SRC_EXT}`,
	`**/*.spec.${GLOB_SRC_EXT}`,
	`**/*.test.${GLOB_SRC_EXT}`,
	`**/*.bench.${GLOB_SRC_EXT}`,
	`**/*.benchmark.${GLOB_SRC_EXT}`,
];

export const GLOB_ALL_SRC = [
	GLOB_SRC,
	GLOB_STYLE,
	GLOB_JSON,
	GLOB_JSON5,
	GLOB_ESLINTRC,
	GLOB_MARKDOWN,
	GLOB_VUE,
	GLOB_YAML,
	GLOB_HTML,
];

export const GLOB_EXCLUDE = [
	"**/node_modules",
	"**/dist",
	"**/out",
	"**/output",
	"**/package-lock.json",
	"**/yarn.lock",
	"**/pnpm-lock.yaml",
	"**/bun.lockb",

	"**/coverage",
	"**/temp",
	"**/.vitepress/cache",
	"**/.nuxt",
	"**/.nitro",
	"**/.vercel",
	"**/.netlify",
	"**/.output",
	"**/.vercel",
	"**/.changeset",
	"**/.idea",
	"**/.vite-inspect",
	"**/.yarn",

	"**/CHANGELOG*.md",
	"**/*.min.*",
	"**/LICENSE*",
	"**/__snapshots__",
	"**/auto-import?(s).d.ts",
	"**/components.d.ts",

	// Volar
	"**/*.vue.js",
	"**/*.vue.jsx",
	"**/*.vue.ts",
	"**/*.vue.tsx",
];
