import type { ParserOptions } from "@typescript-eslint/parser";
import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";
import type { FlatESLintConfigItem } from "eslint-define-config";

export interface OptionsComponentExts {
	/** Additional extensions for components. */
	componentExts?: string[];
}

export interface OptionsTypeScriptParserOptions {
	/** Additional parser options for TypeScript. */
	parserOptions?: Partial<ParserOptions>;
}

export interface OptionsHasTypeScript {
	typescript?: boolean;
}

export interface OptionsOverrides {
	overrides?: FlatESLintConfigItem["rules"];
}

export interface Options extends OptionsComponentExts {
	/**
	 * Enable gitignore support.
	 *
	 * Passing an object to configure the options.
	 *
	 * @default true
	 * @see https://github.com/antfu/eslint-config-flat-gitignore
	 */
	gitignore?: boolean | FlatGitignoreOptions;

	/**
	 * Enable TypeScript support.
	 *
	 * Passing an object to enable TypeScript Language Server support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	typescript?: boolean;

	/**
	 * Enable test support.
	 *
	 * @default true
	 */
	test?: boolean;

	/**
	 * Enable Vue support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	vue?: boolean;

	/**
	 * Enable Solid.js support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	solid?: boolean;

	/**
	 * Enable JSONC support.
	 *
	 * @default true
	 */
	jsonc?: boolean;

	/**
	 * Enable YAML support.
	 *
	 * @default true
	 */
	yaml?: boolean;

	/**
	 * Enable TOML support.
	 *
	 * @default true
	 */
	toml?: boolean;

	/**
	 * Enable markdown and mdx support.
	 *
	 * @default true
	 */
	mdx?: boolean;

	/**
	 * Enable formatting rules.
	 *
	 * @default true
	 */
	formatting?: boolean;

	/** Provide overrides for rules for each integration. */
	overrides?: {
		javascript?: FlatESLintConfigItem["rules"];
		typescript?: FlatESLintConfigItem["rules"];
		test?: FlatESLintConfigItem["rules"];
		vue?: FlatESLintConfigItem["rules"];
		solid?: FlatESLintConfigItem["rules"];
		jsonc?: FlatESLintConfigItem["rules"];
		mdx?: FlatESLintConfigItem["rules"];
		yaml?: FlatESLintConfigItem["rules"];
		toml?: FlatESLintConfigItem["rules"];
	};
}
