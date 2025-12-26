import type { TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function pnpm(): Promise<TypedFlatConfigItem[]> {
	const [pluginPnpm, yamlParser, jsoncParser] = await Promise.all([
		interopDefault(import("eslint-plugin-pnpm")),
		interopDefault(import("yaml-eslint-parser")),
		interopDefault(import("jsonc-eslint-parser")),
	]);

	return [
		{
			files: ["package.json", "**/package.json"],
			languageOptions: {
				parser: jsoncParser,
			},
			name: "so1ve/pnpm/package-json",
			plugins: {
				pnpm: pluginPnpm,
			},
			// @keep-sorted
			rules: {
				"pnpm/json-enforce-catalog": "error",
				"pnpm/json-prefer-workspace-settings": "error",
				"pnpm/json-valid-catalog": "error",
			},
		},
		{
			files: ["pnpm-workspace.yaml"],
			languageOptions: {
				parser: yamlParser,
			},
			name: "so1ve/pnpm/pnpm-workspace-yaml",
			plugins: {
				pnpm: pluginPnpm,
			},
			rules: {
				"pnpm/yaml-enforce-settings": [
					"error",
					{
						settings: {
							catalogMode: "prefer",
							cleanupUnusedCatalogs: true,
							shellEmulator: true,
						},
					},
				],
				// "pnpm/yaml-no-duplicate-catalog-item": "error",
				"pnpm/yaml-no-unused-catalog-item": "error",
			},
		},
		{
			files: ["pnpm-workspace.yaml"],
			name: "so1ve/yaml/pnpm-workspace-yaml-sort",
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
