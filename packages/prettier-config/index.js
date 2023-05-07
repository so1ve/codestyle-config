// @ts-check

const plugins = [
  "@prettier/plugin-xml",
  "prettier-plugin-astro",
  "prettier-plugin-autocorrect",
  "prettier-plugin-properties",
  "prettier-plugin-rust",
  "prettier-plugin-sql",
  "prettier-plugin-svelte",
  "prettier-plugin-toml",
  "prettier-plugin-jsdoc",
];

module.exports = {
  quoteProps: "preserve",
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "angular",
        tabWidth: 4,
      },
    },
  ],
  plugins: plugins.map((p) => require.resolve(p)),

  // Plugin Options
  // JSDoc
  jsdocPreferCodeFences: true,
  tsdoc: true,
};
