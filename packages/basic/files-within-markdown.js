const origFiles = [
  "*.md",
  "*.mkd",
  "*.mkdn",
  "*.mdown",
  "*.markdown",
  "*.js",
  "*.jsx",
  "*.cjs",
  "*.mjs",
  "*.ts",
  "*.tsx",
  "*.mts",
  "*.cts",
  "*.json",
  "*.json5",
  "*.jsonc",
  "*.toml",
  "Dockerfile",
];
const filesWithinMarkdown = [...origFiles.map((f) => `**/*.md/${f}`), ...origFiles];
module.exports = filesWithinMarkdown;
