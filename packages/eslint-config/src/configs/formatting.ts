import { GLOB_PACKAGEJSON, GLOB_TESTS, GLOB_TSCONFIG } from "../globs";
import type { MaybeArray, Options, TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function formatting(
  options?: Options,
): Promise<TypedFlatConfigItem[]> {
  const pluginStylistic = await interopDefault(
    import("@stylistic/eslint-plugin"),
  );

  return (
    [
      {
        name: "so1ve/formatting/setup",
        plugins: {
          style: pluginStylistic,
        },
      },
      {
        name: "so1ve/formatting/rules",
        // @keep-sorted
        rules: {
          "curly": ["error", "all"],
          "so1ve/function-style": "error",
          "so1ve/import-export-newline": "error",
          "so1ve/no-import-promises-as": "error",
          "so1ve/no-negated-comparison": "error",
          "so1ve/no-useless-template-string": "error",
          "style/lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
          ],
          "style/no-extra-parens": ["error", "functions"],
          "style/padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
          ],
          "style/quote-props": ["error", "consistent-as-needed"],
          "style/spaced-comment": [
            "error",
            "always",
            {
              line: {
                markers: ["/"],
                exceptions: ["/", "#"],
              },
              block: {
                markers: ["!"],
                exceptions: ["*"],
                balanced: true,
              },
            },
          ],
        },
      },
      (options?.jsonc ?? true) && [
        {
          name: "so1ve/formatting/rules/sort-package-json",
          files: [GLOB_PACKAGEJSON],
          rules: {
            "jsonc/sort-keys": [
              "error",
              {
                pathPattern: "^$",
                order: [
                  "name",
                  "displayName",
                  "private",
                  "preview",
                  "version",
                  "packageManager",
                  "publisher",
                  "author",
                  "contributors",
                  "type",
                  "description",
                  "keywords",
                  "homepage",
                  "repository",
                  "bugs",
                  "funding",
                  "categories",
                  "license",
                  "sideEffects",
                  "exports",
                  "bin",
                  "main",
                  "module",
                  "browser",
                  "unpkg",
                  "jsdelivr",
                  "types",
                  "typesVersions",
                  "icon",
                  "files",
                  "engines",
                  "extensionKind",
                  "activationEvents",
                  "contributes",
                  "eslintConfig",
                  "publishConfig",
                  "scripts",
                  "husky",
                  "simple-git-hooks",
                  "lint-staged",
                  "dependencies",
                  "devDependencies",
                  "optionalDependencies",
                  "peerDependencies",
                  "peerDependenciesMeta",
                  "pnpm",
                  "overrides",
                  "resolutions",
                ],
              },
              {
                pathPattern: "^exports$",
                order: { type: "asc" },
              },
              {
                pathPattern: "^exports.*$",
                order: ["types", "require", "import", "default"],
              },
              {
                pathPattern:
                  "^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$",
                order: { type: "asc" },
              },
              {
                pathPattern: "^(?:resolutions|overrides|pnpm.overrides)$",
                order: { type: "asc" },
              },
              {
                pathPattern: "^workspaces\\.catalog$",
                order: { type: "asc" },
              },
              {
                pathPattern: "^workspaces\\.catalogs\\.[^.]+$",
                order: { type: "asc" },
              },
              {
                pathPattern: "^(?:gitHooks|husky|simple-git-hooks)$",
                order: [
                  // client hooks only
                  "pre-commit",
                  "prepare-commit-msg",
                  "commit-msg",
                  "post-commit",
                  "pre-rebase",
                  "post-rewrite",
                  "post-checkout",
                  "post-merge",
                  "pre-push",
                  "pre-auto-gc",
                ],
              },
            ],
          },
        },
        {
          name: "so1ve/formatting/rules/sort-tsconfig",
          files: GLOB_TSCONFIG,
          rules: {
            "jsonc/sort-array-values": [
              "error",
              {
                pathPattern: "^compilerOptions\\.types$",
                order: { type: "asc" },
              },
              {
                pathPattern: "^include$",
                order: { type: "asc" },
              },
              {
                pathPattern: "^exclude$",
                order: { type: "asc" },
              },
            ],
            "jsonc/sort-keys": [
              "error",
              {
                pathPattern: "^$",
                order: [
                  "extends",
                  "compilerOptions",
                  "references",
                  "files",
                  "include",
                  "exclude",
                ],
              },
              {
                pathPattern: "^compilerOptions$",
                order: [
                  /* Projects */
                  "incremental",
                  "composite",
                  "tsBuildInfoFile",
                  "disableSourceOfProjectReferenceRedirect",
                  "disableSolutionSearching",
                  "disableReferencedProjectLoad",
                  /* Language and Environment */
                  "target",
                  "jsx",
                  "jsxFactory",
                  "jsxFragmentFactory",
                  "jsxImportSource",
                  "lib",
                  "moduleDetection",
                  "noLib",
                  "reactNamespace",
                  "useDefineForClassFields",
                  "emitDecoratorMetadata",
                  "experimentalDecorators",
                  /* Modules */
                  "baseUrl",
                  "rootDir",
                  "rootDirs",
                  "customConditions",
                  "module",
                  "moduleResolution",
                  "moduleSuffixes",
                  "noResolve",
                  "resolveJsonModule",
                  "resolvePackageJsonExports",
                  "resolvePackageJsonImports",
                  "typeRoots",
                  "types",
                  "allowArbitraryExtensions",
                  "allowImportingTsExtensions",
                  "allowUmdGlobalAccess",
                  /* JavaScript Support */
                  "allowJs",
                  "checkJs",
                  "maxNodeModuleJsDepth",
                  /* Type Checking */
                  "strict",
                  "strictBindCallApply",
                  "strictFunctionTypes",
                  "strictNullChecks",
                  "strictPropertyInitialization",
                  "allowUnreachableCode",
                  "allowUnusedLabels",
                  "alwaysStrict",
                  "erasableSyntaxOnly",
                  "exactOptionalPropertyTypes",
                  "noFallthroughCasesInSwitch",
                  "noImplicitAny",
                  "noImplicitOverride",
                  "noImplicitReturns",
                  "noImplicitThis",
                  "noPropertyAccessFromIndexSignature",
                  "noUncheckedIndexedAccess",
                  "noUnusedLocals",
                  "noUnusedParameters",
                  "useUnknownInCatchVariables",
                  /* Emit */
                  "declaration",
                  "declarationDir",
                  "declarationMap",
                  "downlevelIteration",
                  "emitBOM",
                  "emitDeclarationOnly",
                  "importHelpers",
                  "importsNotUsedAsValues",
                  "inlineSourceMap",
                  "inlineSources",
                  "mapRoot",
                  "newLine",
                  "noEmit",
                  "noEmitHelpers",
                  "noEmitOnError",
                  "outDir",
                  "outFile",
                  "preserveConstEnums",
                  "preserveValueImports",
                  "removeComments",
                  "sourceMap",
                  "sourceRoot",
                  "stripInternal",
                  /* Interop Constraints */
                  "allowSyntheticDefaultImports",
                  "esModuleInterop",
                  "forceConsistentCasingInFileNames",
                  "isolatedModules",
                  "preserveSymlinks",
                  "verbatimModuleSyntax",
                  /* Completeness */
                  "skipDefaultLibCheck",
                  "skipLibCheck",
                  /* Alias */
                  "paths",
                ],
              },
              {
                pathPattern: "^compilerOptions\\.paths$",
                order: { type: "asc" },
              },
            ],
          },
        },
      ],
      (options?.test ?? true) && {
        name: "so1ve/formatting/rules/test",
        files: GLOB_TESTS,
        rules: {
          "jest-formatting/padding-around-all": "error",
        },
      },
    ] satisfies (MaybeArray<TypedFlatConfigItem> | boolean)[]
  )
    .flat()
    .filter(Boolean) as any;
}
