import { GLOB_YAML } from "../globs";
import type { OptionsOverrides, TypedFlatConfigItem } from "../types";
import { interopDefault, renameRules } from "../utils";

export async function yaml({ overrides }: OptionsOverrides = {}): Promise<
	TypedFlatConfigItem[]
> {
	const [parserYaml, pluginYaml] = await Promise.all([
		interopDefault(import("yaml-eslint-parser")),
		interopDefault(import("eslint-plugin-yml")),
	]);

	return [
		{
			name: "so1ve/yaml/setup",
			plugins: {
				yaml: pluginYaml,
			},
		},
		{
			name: "so1ve/yaml/rules",
			languageOptions: {
				parser: parserYaml,
			},
			files: [GLOB_YAML],
			// @keep-sorted
			rules: {
				...renameRules(pluginYaml.configs.prettier.rules, { yml: "yaml" }),
				...renameRules(pluginYaml.configs.recommended.rules, { yml: "yaml" }),
				"style/spaced-comment": "off",
				"yaml/no-empty-document": "off",
				...overrides,
			},
		},
		{
			files: ["pnpm-workspace.yaml"],
			name: "so1ve/yaml/pnpm-workspace",
			rules: {
				"yaml/sort-keys": [
					"error",
					{
						order: [
							// @keep-sorted
							// eslint-disable-next-line unicorn/no-useless-spread
							...[
								"cacheDir",
								"catalogMode",
								"cleanupUnusedCatalogs",
								"dedupeDirectDeps",
								"deployAllFiles",
								"enablePrePostScripts",
								"engineStrict",
								"extendNodePath",
								"hoist",
								"hoistPattern",
								"hoistWorkspacePackages",
								"ignoreCompatibilityDb",
								"ignoreDepScripts",
								"ignoreScripts",
								"ignoreWorkspaceRootCheck",
								"managePackageManagerVersions",
								"minimumReleaseAge",
								"minimumReleaseAgeExclude",
								"modulesDir",
								"nodeLinker",
								"nodeVersion",
								"optimisticRepeatInstall",
								"packageManagerStrict",
								"packageManagerStrictVersion",
								"preferSymlinkedExecutables",
								"preferWorkspacePackages",
								"publicHoistPattern",
								"registrySupportsTimeField",
								"requiredScrpts",
								"resolutionMode",
								"savePrefix",
								"scriptShell",
								"shamefullyHoist",
								"shellEmulator",
								"stateDir",
								"supportedArchitectures",
								"symlink",
								"tag",
								"trustPolicy",
								"trustPolicyExclude",
								"updateNotifier",
							],

							// Packages and dependencies
							"packages",
							"overrides",
							"patchedDependencies",

							// Other
							// @keep-sorted
							// eslint-disable-next-line unicorn/no-useless-spread
							...[
								"allowedDeprecatedVersions",
								"allowNonAppliedPatches",
								"configDependencies",
								"ignoredBuiltDependencies",
								"ignoredOptionalDependencies",
								"neverBuiltDependencies",
								"onlyBuiltDependencies",
								"onlyBuiltDependenciesFile",
								"packageExtensions",
								"peerDependencyRules",
							],

							// Catalogs
							"catalog",
							"catalogs",
						],
						pathPattern: "^$",
					},
					{
						order: { type: "asc" },
						pathPattern: ".*",
					},
				],
			},
		},
	];
}
