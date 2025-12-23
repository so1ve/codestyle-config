import { AST_NODE_TYPES } from "@typescript-eslint/types";
import type { ESLintUtils, TSESTree } from "@typescript-eslint/utils";

import { createEslintRule } from "../utils";

export const RULE_NAME = "no-inline-type-import";
export type MessageIds = "noInlineTypeImport";
export type Options = [];

function generateImportsText(specifiers: TSESTree.ImportSpecifier[]) {
	let text = "{ ";
	const texts = [];
	for (const s of specifiers) {
		const importedName =
			s.imported.type === AST_NODE_TYPES.Identifier
				? s.imported.name
				: s.imported.raw;

		texts.push(
			importedName === s.local.name
				? s.local.name
				: `${importedName} as ${s.local.name}`,
		);
	}
	text += texts.join(", ");
	text += " }";

	return text;
}

function generateTypeImportText(typeSpecifiers: TSESTree.ImportSpecifier[]) {
	let text = "type ";

	text += generateImportsText(typeSpecifiers);

	return text;
}

function generateValueImportText(
	defaultImportSpecifier: TSESTree.ImportDefaultSpecifier | undefined,
	valueSpecifiers: TSESTree.ImportSpecifier[],
) {
	const hasValueImport = valueSpecifiers.length > 0;
	let text = "";

	if (defaultImportSpecifier) {
		text += defaultImportSpecifier.local.name;
		if (hasValueImport) {
			text += ", ";
		}
	}

	if (hasValueImport) {
		text += generateImportsText(valueSpecifiers);
	}

	return text;
}

const rule: ESLintUtils.RuleModule<MessageIds> = createEslintRule<
	Options,
	MessageIds
>({
	name: RULE_NAME,
	meta: {
		type: "layout",
		docs: {
			description: "Disallow inline type import.",
		},
		fixable: "code",
		schema: [],
		messages: {
			noInlineTypeImport: "Expected no inline type import.",
		},
	},
	defaultOptions: [],
	create: (context) => ({
		ImportDeclaration: (node) => {
			const { specifiers } = node;
			const typeSpecifiers = specifiers.filter(
				(s) =>
					s.type === AST_NODE_TYPES.ImportSpecifier && s.importKind === "type",
			) as TSESTree.ImportSpecifier[];
			const valueSpecifiers = specifiers.filter(
				(s) =>
					s.type === AST_NODE_TYPES.ImportSpecifier && s.importKind === "value",
			) as TSESTree.ImportSpecifier[];
			const defaultImportSpecifier = specifiers.find(
				(s) => s.type === AST_NODE_TYPES.ImportDefaultSpecifier,
			);
			const hasDefaultImport = !!defaultImportSpecifier;
			const hasTypeImport = typeSpecifiers.length > 0;
			const hasValueImport = valueSpecifiers.length > 0;

			if (!hasTypeImport) {
				return;
			}

			const texts: string[] = [];

			texts.push(generateTypeImportText(typeSpecifiers));

			if (hasDefaultImport || hasValueImport) {
				texts.push(
					generateValueImportText(defaultImportSpecifier, valueSpecifiers),
				);
			}

			const textToReport = texts
				.map((text) => `import ${text} from "${node.source.value}";`)
				.join("\n");

			context.report({
				node,
				messageId: "noInlineTypeImport",
				fix(fixer) {
					return fixer.replaceText(node, textToReport);
				},
			});
		},
	}),
});

export default rule;
