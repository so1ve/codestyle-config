import { AST_NODE_TYPES } from "@typescript-eslint/types";

import { createEslintRule } from "../utils";

export const RULE_NAME = "no-inline-type-import";
export type MessageIds = "noInlineTypeImport";
export type Options = [];

export default createEslintRule<Options, MessageIds>({
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
			);
			const valueSpecifiers = specifiers.filter(
				(s) =>
					s.type === AST_NODE_TYPES.ImportSpecifier && s.importKind === "value",
			);
			const defaultImportSpecifier = specifiers.find(
				(s) => s.type === AST_NODE_TYPES.ImportDefaultSpecifier,
			);
			if (typeSpecifiers.length > 0) {
				if (valueSpecifiers.length > 0) {
					context.report({
						node,
						messageId: "noInlineTypeImport",
						fix(fixer) {
							const typeSpecifiersText = typeSpecifiers
								.map((s) => s.local.name)
								.join(", ");
							const valueSpecifiersText = valueSpecifiers
								.map((s) => s.local.name)
								.join(", ");
							const defaultImportSpecifierText =
								defaultImportSpecifier?.local.name;
							const defaultAndValueSpecifiersText = defaultImportSpecifier
								? `import ${defaultImportSpecifierText}, { ${valueSpecifiersText} } from "${node.source.value}";`
								: `import { ${valueSpecifiersText} } from "${node.source.value}";`;
							const texts = [
								`import type { ${typeSpecifiersText} } from "${node.source.value}";`,
								defaultAndValueSpecifiersText,
							];

							return fixer.replaceText(node, texts.join("\n"));
						},
					});
				} else {
					context.report({
						node,
						messageId: "noInlineTypeImport",
						fix(fixer) {
							const typeSpecifiersText = typeSpecifiers
								.map((s) => s.local.name)
								.join(", ");

							return fixer.replaceText(
								node,
								`import type { ${typeSpecifiersText} } from "${node.source.value}";`,
							);
						},
					});
				}
			}
		},
	}),
});
