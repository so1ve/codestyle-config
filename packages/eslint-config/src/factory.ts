import fs from "node:fs";

import gitignore from "eslint-config-flat-gitignore";
import { isPackageExists } from "local-pkg";

import {
	comments,
	formatting,
	html,
	ignores,
	imports,
	javascript,
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
	unicorn,
	vue,
	yaml,
} from "./configs";
import type { ConfigItem, Options } from "./types";

const flatConfigProps: (keyof ConfigItem)[] = [
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
	...userConfigs: (ConfigItem | ConfigItem[])[]
) {
	const {
		vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
		solid: enableSolid = isPackageExists("solid-js"),
		typescript: enableTypeScript = isPackageExists("typescript"),
		gitignore: enableGitignore = true,
		componentExts = [],
	} = options;

	const configs: ConfigItem[][] = [];

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
			overrides: getOverrides(options, "javascript"),
		}),
		comments(),
		node(),
		onlyError(),
		promise(),
		sortImports(),
		imports(),
		unicorn(),
		html(),
	);

	if (enableVue) {
		componentExts.push("vue");
	}

	if (enableTypeScript) {
		configs.push(
			typescript({
				componentExts,
				overrides: getOverrides(options, "typescript"),
			}),
		);
	}

	if (options.test ?? true) {
		configs.push(
			test({
				overrides: getOverrides(options, "test"),
			}),
		);
	}

	if (enableVue) {
		configs.push(
			vue({
				overrides: getOverrides(options, "vue"),
				typescript: !!enableTypeScript,
			}),
		);
	}

	if (enableSolid) {
		configs.push(
			solid({
				overrides: getOverrides(options, "solid"),
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
				overrides: getOverrides(options, "toml"),
			}),
		);
	}

	if (options.yaml ?? true) {
		configs.push(
			yaml({
				overrides: getOverrides(options, "yaml"),
			}),
		);
	}

	if (options.mdx ?? true) {
		configs.push(
			mdx({
				componentExts,
				overrides: getOverrides(options, "mdx"),
			}),
		);
	}

	if (options.formatting ?? true) {
		configs.push(formatting(options));
	}

	// User can optionally pass a flat config item to the first argument
	// We pick the known keys as ESLint would do schema validation
	const fusedConfig = flatConfigProps.reduce((acc, key) => {
		if (key in options) {
			acc[key] = options[key as keyof Options] as any;
		}

		return acc;
	}, {} as ConfigItem);

	if (Object.keys(fusedConfig).length > 0) {
		configs.push([fusedConfig]);
	}

	const merged = [...configs, ...userConfigs].flat();

	return merged;
}

export type ResolvedOptions<T> = T extends boolean ? never : NonNullable<T>;

export const resolveSubOptions = <K extends keyof Options>(
	options: Options & ConfigItem,
	key: K,
): ResolvedOptions<Options[K]> =>
	typeof options[key] === "boolean" ? ({} as any) : options[key] || {};

export function getOverrides<K extends keyof Options>(
	options: Options,
	key: K,
) {
	const sub = resolveSubOptions(options, key);

	return {
		// eslint-disable-next-line etc/no-deprecated
		...(options.overrides as any)?.[key],
		...("overrides" in sub ? sub.overrides : {}),
	};
}
