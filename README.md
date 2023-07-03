# @so1ve/eslint-config

[![npm](https://img.shields.io/npm/v/@so1ve/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@so1ve/eslint-config)

> Forked from [antfu/eslint-config](https://github.com/antfu/eslint-config)

## Features

Strongly opinionated to satisfy the author([@so1ve](https://github.com/so1ve))'s need. It aims to make every part of code to have the same looking - anyone who writes code will be formatted in the same style. It also tries to unify the code logic, for example, it will change negated comparison(`!(a == 1)`) to a not-negated version(`a != 1` and change functions with a lone return statement to an arrow function sorthand, and the rest will be converted to function declaration.

- Double quotes, with semi
- 2 spaces for indent
- Auto fix for formatting (Powered by [Prettier](https://github.com/prettier/prettier))
- TypeScript, Vue, React, Svelte, Solid out-of-box!
- Lint also for json, yaml, markdown, html
- Sorted imports, dangling commas for cleaner commit diff
- Focused on consistent code style, with custom rules to enforce style
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @so1ve/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@so1ve"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
"lint:fix":"eslint . --fix&
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false, // We use eslint-plugin-prettier
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

MIT
