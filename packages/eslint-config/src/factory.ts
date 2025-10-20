import fs from "node:fs";

import { FlatConfigComposer } from "eslint-flat-config-utils";
import { isPackageExists } from "local-pkg";

import {
	astro,
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
	pnpm,
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
import type { ConfigNames } from "./typegen";
import type {
	MaybeArray,
	MaybePromise,
	Options,
	TypedFlatConfigItem,
} from "./types";
import { interopDefault } from "./utils";

const flatConfigProps: (keyof TypedFlatConfigItem)[] = [
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

export const defaultPluginRenaming = {
	"@stylistic": "style",
	"@typescript-eslint": "ts",
	"@html-eslint": "html",
	"import-x": "import",
	"n": "node",
	"yml": "yaml",
};

/**
 * Construct an array of ESLint flat config items.
 */
export function so1ve(
	options: Options & TypedFlatConfigItem = {},
	...userConfigs: MaybeArray<TypedFlatConfigItem>[]
) {
	const {
		astro: enableAstro = isPackageExists("astro"),
		vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
		solid: enableSolid = isPackageExists("solid-js"),
		typescript: enableTypeScript = isPackageExists("typescript"),
		gitignore: enableGitignore = true,
		pnpm: enableCatalogs = false,
		componentExts = [],
	} = options;

	const configs: MaybePromise<TypedFlatConfigItem[]>[] = [];

	if (enableGitignore) {
		if (typeof enableGitignore === "boolean") {
			if (fs.existsSync(".gitignore")) {
				configs.push(
					interopDefault(import("eslint-config-flat-gitignore")).then((r) => [
						r(),
					]),
				);
			}
		} else {
			configs.push(
				interopDefault(import("eslint-config-flat-gitignore")).then((r) => [
					r(enableGitignore),
				]),
			);
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
	);

	if (enableCatalogs) {
		configs.push(pnpm());
	}

	if (enableVue) {
		componentExts.push("vue");
	}

	if (options.html ?? true) {
		configs.push(html());
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

	if (enableAstro) {
		configs.push(
			astro({
				overrides: getOverrides(options, "astro"),
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

	if (options.formatting ?? true) {
		configs.push(formatting(options));
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

	// User can optionally pass a flat config item to the first argument
	// We pick the known keys as ESLint would do schema validation
	const fusedConfig = flatConfigProps.reduce((acc, key) => {
		if (key in options) {
			acc[key] = options[key as keyof Options] as any;
		}

		return acc;
	}, {} as TypedFlatConfigItem);

	if (Object.keys(fusedConfig).length > 0) {
		configs.push([fusedConfig]);
	}

	const composer = new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>()
		.append(...configs, ...userConfigs)
		.renamePlugins(defaultPluginRenaming);

	return composer;
}

export type ResolvedOptions<T> = T extends boolean ? never : NonNullable<T>;

export const resolveSubOptions = <K extends keyof Options>(
	options: Options & TypedFlatConfigItem,
	key: K,
): ResolvedOptions<Options[K]> =>
	typeof options[key] === "boolean"
		? ({} as any)
		: ((options[key] as any) ?? {});

export function getOverrides<K extends keyof Options>(
	options: Options,
	key: K,
) {
	const sub = resolveSubOptions(options, key);

	return {
		...(options.overrides as any)?.[key],
		...("overrides" in sub ? sub.overrides : {}),
	};
}
