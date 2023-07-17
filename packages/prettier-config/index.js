// @ts-check

const SLASH_RE = /\\/g;

const plugins = [
  "astro",
  "svelte",
  "toml",
  // "jsdoc"
  "curly",
  "pkgsort",
].map(
  (p) =>
    `file://${require.resolve(`prettier-plugin-${p}`).replace(SLASH_RE, "/")}`,
);

module.exports = {
  useTabs: false,
  quoteProps: "preserve",
  trailingComma: "all",
  htmlWhitespaceSensitivity: "ignore",
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "angular",
      },
    },
  ],
  plugins,

  // Plugin Options
  // JSDoc
  jsdocPreferCodeFences: true,
  tsdoc: true,
};
