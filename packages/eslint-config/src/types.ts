import type { ParserOptions } from "@typescript-eslint/utils/ts-eslint";
import type { Linter } from "eslint";
import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";

import type { RuleOptions } from "./typegen";

export type MaybePromise<T> = T | Promise<T>;
export type MaybeArray<T> = T | T[];

export type Rules = RuleOptions;

export type TypedFlatConfigItem = Omit<
	Linter.FlatConfig<Linter.RulesRecord & Rules>,
	"plugins"
> & {
	// Relax plugins type limitation, as most of the plugins did not have correct type info yet.
	/**
	 * An object containing a name-value mapping of plugin names to plugin
	 * objects. When `files` is specified, these plugins are only available to the
	 * matching files.
	 *
	 * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
	 */
	plugins?: Record<string, any>;
};

export interface OptionsComponentExts {
	/**
	 * Additional extensions for components.
	 */
	componentExts?: string[];
}

export interface OptionsTypeScriptParserOptions {
	/**
	 * Additional parser options for TypeScript.
	 */
	parserOptions?: Partial<ParserOptions>;
}

export interface OptionsHasTypeScript {
	typescript?: boolean;
}

export interface OptionsOverrides {
	overrides?: TypedFlatConfigItem["rules"];
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
	 * Core rules. Can't be disabled.
	 */
	javascript?: OptionsOverrides;

	/**
	 * Enable HTML support.
	 */
	html?: boolean;

	/**
	 * Enable TypeScript support.
	 *
	 * Passing an object to enable TypeScript Language Server support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	typescript?: boolean | OptionsOverrides;

	/**
	 * Enable test support.
	 *
	 * @default true
	 */
	test?: boolean | OptionsOverrides;

	/**
	 * Enable Vue support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	vue?: boolean | OptionsOverrides;

	/**
	 * Enable Solid.js support.
	 *
	 * @default auto-detect based on the dependencies
	 */
	solid?: boolean | OptionsOverrides;

	/**
	 * Enable JSONC support.
	 *
	 * @default true
	 */
	jsonc?: boolean | OptionsOverrides;

	/**
	 * Enable YAML support.
	 *
	 * @default true
	 */
	yaml?: boolean | OptionsOverrides;

	/**
	 * Enable TOML support.
	 *
	 * @default true
	 */
	toml?: boolean | OptionsOverrides;

	/**
	 * Enable markdown and mdx support.
	 *
	 * @default true
	 */
	mdx?: boolean | OptionsOverrides;

	/**
	 * Enable formatting rules.
	 *
	 * @default true
	 */
	formatting?: boolean | OptionsOverrides;

	/**
	 * Provide overrides for rules for each integration.
	 *
	 * @deprecated Use `overrides` option in each integration key instead
	 */
	overrides?: {
		javascript?: TypedFlatConfigItem["rules"];
		typescript?: TypedFlatConfigItem["rules"];
		test?: TypedFlatConfigItem["rules"];
		vue?: TypedFlatConfigItem["rules"];
		solid?: TypedFlatConfigItem["rules"];
		jsonc?: TypedFlatConfigItem["rules"];
		mdx?: TypedFlatConfigItem["rules"];
		yaml?: TypedFlatConfigItem["rules"];
		toml?: TypedFlatConfigItem["rules"];
	};
}
