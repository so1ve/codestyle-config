export const GLOB_SRC_EXT: string = "?([cm])[jt]s?(x)";
export const GLOB_SRC: string = `**/*.${GLOB_SRC_EXT}`;

export const GLOB_JS: string = "**/*.?([cm])js";
export const GLOB_JSX: string = "**/*.?([cm])jsx";

export const GLOB_TS: string = "**/*.?([cm])ts";
export const GLOB_TSX: string = "**/*.?([cm])tsx";
export const GLOB_DTS: string = "**/*.d.?([cm])tsx";

export const GLOB_STYLE: string = "**/*.{c,le,sc}ss";
export const GLOB_CSS: string = "**/*.css";
export const GLOB_LESS: string = "**/*.less";
export const GLOB_SCSS: string = "**/*.scss";

export const GLOB_JSON: string = "**/*.json";
export const GLOB_JSON5: string = "**/*.json5";
export const GLOB_JSONC: string = "**/*.jsonc";
export const GLOB_ESLINTRC: string = "**/.eslintrc";

export const GLOB_MARKDOWN: string = "**/*.md?(x)";
export const GLOB_ASTRO: string = "**/*.astro";
export const GLOB_ASTRO_TS: string = "**/*.astro/*.ts";
export const GLOB_VUE: string = "**/*.vue";
export const GLOB_YAML: string = "**/*.y?(a)ml";
export const GLOB_TOML: string = "**/*.toml";
export const GLOB_HTML: string = "**/*.htm?(l)";

export const GLOB_PACKAGEJSON: string = "**/package.json";
export const GLOB_TSCONFIG: string[] = [
	"**/tsconfig.json",
	"**/tsconfig.*.json",
];

export const GLOB_MARKDOWN_CODE: string = `${GLOB_MARKDOWN}/**`;

export const GLOB_TESTS: string[] = [
	`**/__tests__/**/*.${GLOB_SRC_EXT}`,
	`**/*.spec.${GLOB_SRC_EXT}`,
	`**/*.test.${GLOB_SRC_EXT}`,
	`**/*.bench.${GLOB_SRC_EXT}`,
	`**/*.benchmark.${GLOB_SRC_EXT}`,
];

export const GLOB_ALL_SRC: string[] = [
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

export const GLOB_EXCLUDE: string[] = [
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
