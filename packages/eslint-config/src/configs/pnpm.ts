import fs from "node:fs/promises";

import { findUp } from "find-up-simple";

import type { OptionsPnpm, TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

async function _detectCatalogUsage(): Promise<boolean> {
  const workspaceFile = await findUp("pnpm-workspace.yaml");
  if (!workspaceFile) {
    return false;
  }

  const yaml = await fs.readFile(workspaceFile, "utf-8");

  return yaml.includes("catalog:") || yaml.includes("catalogs:");
}

export async function pnpm(
  options: OptionsPnpm,
): Promise<TypedFlatConfigItem[]> {
  const {
    // catalogs = await detectCatalogUsage(),
    json = true,
    yaml = true,
  } = options;

  const [pluginPnpm, yamlParser, jsoncParser] = await Promise.all([
    interopDefault(import("eslint-plugin-pnpm")),
    yaml ? interopDefault(import("yaml-eslint-parser")) : undefined,
    json ? interopDefault(import("jsonc-eslint-parser")) : undefined,
  ]);

  const configs: TypedFlatConfigItem[] = [];

  if (json) {
    configs.push({
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
        // ...(catalogs && {
        //   "pnpm/json-enforce-catalog": [
        //     "error",
        //     {
        //       ignores: ["@types/vscode"],
        //     },
        //   ],
        // }),
        "pnpm/json-prefer-workspace-settings": "error",
        // "pnpm/json-valid-catalog": "error",
      },
    });
  }

  if (yaml) {
    configs.push(
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
                shellEmulator: true,
              },
            },
          ],
          // "pnpm/yaml-no-duplicate-catalog-item": "error",
          // "pnpm/yaml-no-unused-catalog-item": "error",
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
                  "requiredScripts",
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
    );
  }

  return configs;
}
