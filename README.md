# Ray's Codestyle Config

[![npm](https://img.shields.io/npm/v/@so1ve/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@so1ve/eslint-config)

> Forked from [antfu/eslint-config](https://github.com/antfu/eslint-config)

## Features

- Double quotes, with semicolons
- Use 2 spaces for indent
- Auto fix for formatting (Powered by [Prettier](https://github.com/prettier/prettier))
- Supports TypeScript, Vue, React, Svelte, Solid, MDX, JSON, Yaml, Markdown, HTML out-of-box!
- Sorted imports, dangling commas for cleaner commit diff
- Autofix for syntax errors, e.g. automatically add `async` keyword when using `await` in a non-async function
- Focused on consistent code style, with custom rules to enforce style
- Reasonable defaults, best practices, only one-line of config
- Respects `.gitignore` by default
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- **Style principle**: Consistent for reading, stable for diff. More automated style fixes is better.

> [!IMPORTANT]
> The main branch is for v3.0, which rewrites to ESLint Flat config and requires ESLint v9.0.0+.

> Thanks to [sxzz/eslint-config](https://github.com/sxzz/eslint-config) and [antfu/eslint-config](https://github.com/antfu/eslint-config) for the inspiration and reference.

## Usage

### Install

```bash
pnpm add -D eslint prettier @so1ve/eslint-config @so1ve/prettier-config
```

### Config `eslint.config.mjs` and `prettier.config.mjs`

```js
// eslint.config.mjs
import { so1ve } from "@so1ve/eslint-config";

export default so1ve();
```

```js
// prettier.config.mjs
export { default } from "@so1ve/prettier-config";
```

> Note that `.eslintignore` no longer works in Flat config, see [customization](#customization) for more details.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint . && prettier . --check",
    "lint:fix": "eslint . --fix && prettier . --write"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "json5",
    "toml",
    "yaml",
    "svelte",
    "github-actions-workflow"
  ]
}
```

## Customization

Since v1.0, we migrated to [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new). It provides a much better organization and composition.

Normally you only need to import the `so1ve` preset:

```js
// eslint.config.js
import { so1ve } from "@so1ve/eslint-config";

export default so1ve();
```

And that's it! Or you can configure each integration individually, for example:

```js
// eslint.config.js
import { so1ve } from "@so1ve/eslint-config";

export default so1ve(
  {
    typescript: true,
    vue: true,
    solid: false,
    jsonc: false,
    yaml: false,
  },
  {
    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    // also supports function to modify the default ignores
    ignores: [
      "./fixtures",
      // ...globs
    ],
  },
);
```

The `so1ve` factory function also accepts any number of arbitrary custom config overrides:

```js
// eslint.config.js
import { so1ve } from "@so1ve/eslint-config";

export default so1ve(
  {
    // Configures for so1ve's config
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ["**/*.ts"],
    rules: {},
  },
  {
    rules: {},
  },
);
```

## Plugins Renaming

Since flat config requires us to explicitly provide the plugin names (instead of mandatory convention from npm package name), we renamed some plugins to make overall scope more consistent and easier to write.

| New Prefix | Original Prefix        | Source Plugin                                                                              |
| ---------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| `import/*` | `import-x/*`           | [eslint-plugin-import-x](https://github.com/un-es/eslint-plugin-import-x)                  |
| `node/*`   | `n/*`                  | [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)                     |
| `yaml/*`   | `yml/*`                | [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)                        |
| `style/*`  | `@stylistic/*`         | [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)           |
| `ts/*`     | `@typescript-eslint/*` | [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) |
| `html/*`   | `@html-eslint/*`       | [@html-eslint/eslint-plugin](https://github.com/yeonjuan/html-eslint)                      |

When you want to override rules, or disable them inline, you need to update to the new prefix:

```diff
-// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
+// eslint-disable-next-line ts/consistent-type-definitions
type foo = { bar: 2 }
```

### Rules Overrides

Certain rules would only be enabled in specific files, for example, `ts/*` rules would only be enabled in `.ts` files and `vue/*` rules would only be enabled in `.vue` files. If you want to override the rules, you need to specify the file extension:

```js
// eslint.config.js
import { so1ve } from "@so1ve/eslint-config";

export default so1ve(
  { vue: true, typescript: true },
  {
    // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ["**/*.vue"],
    rules: {
      "vue/operator-linebreak": ["error", "before"],
    },
  },
  {
    // Without `files`, they are general rules for all files
    rules: {
      "style/semi": ["error", "never"],
    },
  },
);
```

We also provided a `overrides` options in each integration to make it easier:

```js
// eslint.config.js
import { so1ve } from "@so1ve/eslint-config";

export default so1ve({
  vue: {
    overrides: {
      "vue/operator-linebreak": ["error", "before"],
    },
  },
  typescript: {
    overrides: {
      "ts/consistent-type-definitions": ["error", "interface"],
    },
  },
  yaml: {
    overrides: {
      // ...
    },
  },
});
```

### Config Composer

The factory function `so1ve()` returns a [`FlatConfigComposer` object from `eslint-flat-config-utils`](https://github.com/antfu/eslint-flat-config-utils#composer) where you can chain the methods to compose the config even more flexibly.

```js
// eslint.config.js
import { so1ve } from "@so1ve/eslint-config";

export default so1ve()
  // some configs before the main config
  .prepend()
  // overrides any named configs
  .override("so1ve/imports/rules", {
    rules: {
      "import/named": "off",
    },
  })
  // rename plugin prefixes
  .renamePlugins({
    "old-prefix": "new-prefix",
    // ...
  });
// ...
```

### Type Aware Rules

[Type Aware Rules](https://typescript-eslint.io/linting/typed-linting/) are enabled by default.

## License

MIT
