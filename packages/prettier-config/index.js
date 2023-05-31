// @ts-check

const plugins = [
  "@prettier/plugin-xml",
  "prettier-plugin-astro",
  "prettier-plugin-autocorrect",
  "prettier-plugin-properties",
  "prettier-plugin-rust",
  "prettier-plugin-sql",
  "prettier-plugin-sh",
  "prettier-plugin-svelte",
  "prettier-plugin-toml",
  "prettier-plugin-jsdoc",
  "prettier-plugin-organize-class-members",
];

module.exports = {
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
  plugins: plugins.map((p) => require.resolve(p)),

  // Plugin Options
  // JSDoc
  jsdocPreferCodeFences: true,
  tsdoc: true,

  // Organize Class Members
  classSectionOrder: [
    "staticProperties",
    "properties",
    "constructor",
    "staticMethods",
    "methods",
  ],
};
