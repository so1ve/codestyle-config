import type so1vePlugin from "@so1ve/eslint-plugin";
import type { ParserOptions } from "@typescript-eslint/parser";
import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";
import type { FlatESLintConfigItem, Rules } from "eslint-define-config";

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
	overrides?: ConfigItem["rules"];
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
		javascript?: ConfigItem["rules"];
		typescript?: ConfigItem["rules"];
		test?: ConfigItem["rules"];
		vue?: ConfigItem["rules"];
		solid?: ConfigItem["rules"];
		jsonc?: ConfigItem["rules"];
		mdx?: ConfigItem["rules"];
		yaml?: ConfigItem["rules"];
		toml?: ConfigItem["rules"];
	};
}

type Unprefix<T extends Record<string, any>, Pre extends string> = {
	[K in keyof T as K extends `${Pre}${infer U}` ? U : never]: T[K];
};

type Prefix<T extends Record<string, any>, Pre extends string> = {
	[K in keyof T as `${Pre}${K & string}`]: T[K];
};

type RenamePrefix<
	T extends Record<string, any>,
	Old extends string,
	New extends string,
> = Prefix<Unprefix<T, Old>, New>;

type MergeIntersection<T extends Record<any, any>> = {
	[K in keyof T]: T[K];
};

export type RenamedRules = MergeIntersection<
	Rules &
		RenamePrefix<Rules, "@typescript-eslint/", "ts/"> &
		RenamePrefix<Rules, "yml/", "yaml/"> &
		RenamePrefix<Rules, "n/", "node/"> &
		Prefix<Partial<(typeof so1vePlugin)["rules"]>, "so1ve/">
>;

export type ConfigItem = Omit<FlatESLintConfigItem, "plugins" | "rules"> & {
	// Relax plugins type limitation, as most of the plugins did not have correct type info yet.
	plugins?: Record<string, any>;
	rules?: RenamedRules | Record<string, any>;
};
