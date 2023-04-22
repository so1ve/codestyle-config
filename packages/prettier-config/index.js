// @ts-check

const plugins = ["svelte", "astro", "rust"].map((s) => `prettier-plugin-${s}`);

module.exports = {
  printWidth: 120,
  quoteProps: "preserve",
  plugins,
};
