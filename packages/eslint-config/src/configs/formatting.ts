import type { FlatESLintConfigItem } from "eslint-define-config";

import { GLOB_PACKAGEJSON, GLOB_TESTS, GLOB_TSCONFIG } from "../globs";
import type { Options } from "../types";

export const formatting = (options: Options): FlatESLintConfigItem[] =>
	[
		{
			rules: {
				"so1ve/no-useless-template-string": "error",
				"so1ve/no-negated-comparison": "error",
				"so1ve/no-import-promises-as": "error",
				"so1ve/pad-after-last-import": "error",
				"so1ve/function-style": "error",
				"quote-props": ["error", "consistent-as-needed"],
				"padding-line-between-statements": [
					"error",
					{ blankLine: "always", prev: "*", next: "return" },
				],
			},
		},
		(options.jsonc ?? true) && [
			{
				files: [GLOB_PACKAGEJSON],
				rules: {
					"jsonc/sort-keys": [
						"error",
						{
							pathPattern: "^exports$",
							order: { type: "asc" },
						},
						{
							pathPattern: "^exports.*$",
							order: ["types", "require", "import", "default"],
						},
					],
				},
			},
			{
				files: GLOB_TSCONFIG,
				rules: {
					"jsonc/sort-keys": [
						"error",
						{
							order: [
								"extends",
								"compilerOptions",
								"references",
								"files",
								"include",
								"exclude",
							],
							pathPattern: "^$",
						},
						{
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
								"paths",
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
							],
							pathPattern: "^compilerOptions$",
						},
					],
				},
			},
		],
		(options.test ?? true) && {
			files: GLOB_TESTS,
			rules: {
				"jest-formatting/padding-around-all": "error",
			},
		},
	]
		.flat()
		.filter(Boolean) as any;
