import fs from "node:fs/promises";

import { builtinRules } from "eslint/use-at-your-own-risk";
import { flatConfigsToRulesDTS } from "eslint-typegen/core";

import type { MaybeArray, MaybePromise, TypedFlatConfigItem } from "../src";
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
	perfectionist,
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
} from "../src";

async function combine(
	...configs: MaybePromise<MaybeArray<TypedFlatConfigItem>>[]
): Promise<any[]> {
	// eslint-disable-next-line ts/await-thenable
	const resolved = await Promise.all(configs);

	return resolved.flat();
}

const configs = await combine(
	{
		plugins: {
			"": {
				rules: Object.fromEntries(builtinRules.entries()),
			},
		},
	},
	astro(),
	comments(),
	formatting(),
	html(),
	ignores(),
	imports(),
	javascript(),
	jsonc(),
	mdx(),
	node(),
	onlyError(),
	perfectionist(),
	pnpm(),
	promise(),
	solid(),
	sortImports(),
	test(),
	toml(),
	typescript(),
	unicorn(),
	vue(),
	yaml(),
);

const configNames = configs.map((i) => i.name).filter(Boolean) as string[];

let dts = await flatConfigsToRulesDTS(configs, {
	includeAugmentation: false,
});

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(" | ")}
`;

await fs.writeFile("src/typegen.d.ts", dts);
