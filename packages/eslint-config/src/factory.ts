import fs from "node:fs";

import gitignore from "eslint-config-flat-gitignore";
import type { FlatESLintConfigItem } from "eslint-define-config";
import { isPackageExists } from "local-pkg";

import {
	comments,
	ignores,
	imports,
	javascript,
	jsdoc,
	jsonc,
	mdx,
	node,
	onlyError,
	promise,
	solid,
	sortImports,
	test,
	toml,
	typescript,
	typescriptWithTypes,
	unicorn,
	vue,
	yaml,
} from "./configs";
import type { Options } from "./types";
import { combine } from "./utils";

const flatConfigProps: (keyof FlatESLintConfigItem)[] = [
	"files",
	"ignores",
	"languageOptions",
	"linterOptions",
	"processor",
	"plugins",
	"rules",
	"settings",
];

const VuePackages = ["vue", "nuxt", "vitepress", "@slidev/cli"];

/**
 * Construct an array of ESLint flat config items.
 */
export function so1ve(
	options: Options = {},
	...userConfigs: (FlatESLintConfigItem | FlatESLintConfigItem[])[]
) {
	const {
		vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
		solid: enableSolid = isPackageExists("solid-js"),
		typescript: enableTypeScript = isPackageExists("typescript"),
		gitignore: enableGitignore = true,
		overrides = {},
	} = options;

	const configs: FlatESLintConfigItem[][] = [];

	if (enableGitignore) {
		if (typeof enableGitignore === "boolean") {
			if (fs.existsSync(".gitignore")) {
				configs.push([gitignore()]);
			}
		} else {
			configs.push([gitignore(enableGitignore)]);
		}
	}

	// Base configs
	configs.push(
		ignores(),
		javascript({
			overrides: overrides.javascript,
		}),
		comments(),
		node(),
		onlyError(),
		promise(),
		// jsdoc(),
		sortImports(),
		imports(),
		jsdoc(),
		unicorn(),
	);

	// In the future we may support more component extensions like Svelte or so
	const componentExts: string[] = [];

	if (enableVue) {
		componentExts.push("vue");
	}

	if (enableTypeScript) {
		configs.push(
			typescript({
				componentExts,
				overrides: overrides.typescript,
			}),
		);

		if (typeof enableTypeScript !== "boolean") {
			configs.push(
				typescriptWithTypes({
					...enableTypeScript,
					componentExts,
					overrides: overrides.typescriptWithTypes,
				}),
			);
		}
	}

	if (options.test ?? true) {
		configs.push(
			test({
				overrides: overrides.test,
			}),
		);
	}

	if (enableVue) {
		configs.push(
			vue({
				overrides: overrides.vue,
				typescript: !!enableTypeScript,
			}),
		);
	}

	if (enableSolid) {
		configs.push(
			solid({
				overrides: overrides.solid,
				typescript: !!enableTypeScript,
			}),
		);
	}

	if (options.jsonc ?? true) {
		configs.push(jsonc());
	}

	if (options.toml ?? true) {
		configs.push(
			toml({
				overrides: overrides.toml,
			}),
		);
	}

	if (options.yaml ?? true) {
		configs.push(
			yaml({
				overrides: overrides.yaml,
			}),
		);
	}

	if (options.mdx ?? true) {
		configs.push(
			mdx({
				componentExts,
				overrides: overrides.mdx,
			}),
		);
	}

	// User can optionally pass a flat config item to the first argument
	// We pick the known keys as ESLint would do schema validation
	const fusedConfig = flatConfigProps.reduce((acc, key) => {
		if (key in options) {
			acc[key] = options[key as keyof Options];
		}

		return acc;
	}, {} as FlatESLintConfigItem);

	if (Object.keys(fusedConfig).length > 0) {
		configs.push([fusedConfig]);
	}

	const merged = combine(...configs, ...userConfigs);

	return merged;
}
