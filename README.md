# @so1ve/eslint-config and @so1ve/prettier-config

[![npm](https://img.shields.io/npm/v/@so1ve/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@so1ve/eslint-config)

> Forked from [antfu/eslint-config](https://github.com/antfu/eslint-config)

## Features
 
- Double quotes, with semicolons
- Use tabs for indent ([Read more](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/))
- Auto fix for formatting (Powered by [Prettier](https://github.com/prettier/prettier))
- Supports TypeScript, Vue, React, Svelte, Solid, MDX, JSON, Yaml, Markdown, HTML out-of-box!
- Sorted imports, dangling commas for cleaner commit diff
- Autofix for syntax errors, e.g. automatically add `async` keyword when using `await` in a non-async function
- Focused on consistent code style, with custom rules to enforce style
- Reasonable defaults, best practices, only one-line of config
- **Style principle**: Consistent for reading, stable for diff. More automated style fixes is better.

## Usage

### Install

```bash
pnpm add -D eslint prettier @so1ve/eslint-config @so1ve/prettier-config
```

### Config `.eslintrc` and `.prettierrc.cjs`

```json
{
	"extends": "@so1ve"
}
```

```js
module.exports = require("@so1ve/prettier-config");
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
	"scripts": {
		"lint": "eslint . && prettier . --check",
		"lint:fix": "eslint . -- fix && prettier . --write"
	}
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
	"editor.defaultFormatter": "esbenp.vscode-prettier",
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	}
}
```

## License

MIT
