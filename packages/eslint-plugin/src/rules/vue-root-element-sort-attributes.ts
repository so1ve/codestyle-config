import type { AST as VueAST } from "vue-eslint-parser";

import { createEslintRule } from "../utils";

export const RULE_NAME = "vue-root-element-sort-attributes";
export type MessageIds = "wrongOrder";
export type Options = [
	{
		script?: string[];
		[otherElement: string]: string[] | undefined;
	},
];

const defaultOptions = {
	script: ["setup", "lang"],
};

export default createEslintRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: "layout",
		docs: {
			description:
				"Sort attributes of root <script>, <template>, and <style> elements in Vue files.",
		},
		fixable: "code",
		schema: [
			{
				type: "object",
				properties: {
					script: { type: "array", items: { type: "string" } },
				},
				additionalProperties: true,
			},
		],
		messages: {
			wrongOrder:
				"Attributes of root element should be sorted in a specific order.",
		},
	},
	defaultOptions: [defaultOptions],
	create(context, [options]) {
		const order = {
			...options,
			script: options.script ?? defaultOptions.script,
		};

		const sourceCode = context.sourceCode;
		const documentFragment: VueAST.VDocumentFragment | undefined = (
			sourceCode.parserServices as any
		).getDocumentFragment?.();

		function getTopLevelHTMLElements() {
			if (documentFragment) {
				return documentFragment.children.filter((n) => n.type === "VElement");
			}

			return [];
		}

		return {
			Program: (_node) => {
				const topLevelElements = getTopLevelHTMLElements();
				for (const element of topLevelElements) {
					if (!(element.name in order)) {
						continue;
					}
					const expectedOrder = order[element.name as keyof typeof order];
					const attributesToCheck: VueAST.VAttribute[] = [];
					let reprintAttributes = false;
					for (const attribute of element.startTag.attributes) {
						if (attribute.key.type !== "VIdentifier" || attribute.directive) {
							continue;
						}
						if (expectedOrder.includes(attribute.key.name)) {
							attributesToCheck.push(attribute);
						}
					}
					for (const attribute of attributesToCheck) {
						const index = expectedOrder.indexOf(attribute.key.name);
						if (
							index !== -1 &&
							index !== attributesToCheck.indexOf(attribute)
						) {
							reprintAttributes = true;
						}
					}
					if (reprintAttributes) {
						context.report({
							node: element.startTag as any,
							messageId: "wrongOrder",
							*fix(fixer) {
								const sortedAttributes = [...attributesToCheck].sort(
									(a, b) =>
										expectedOrder.indexOf(a.key.name) -
										expectedOrder.indexOf(b.key.name),
								);

								for (const [i, originalAttr] of attributesToCheck.entries()) {
									const sortedAttr = sortedAttributes[i];

									if (originalAttr.key.name !== sortedAttr.key.name) {
										yield fixer.replaceText(
											originalAttr as any,
											sourceCode.getText(sortedAttr as any),
										);
									}
								}
							},
						});
					}
				}
			},
		};
	},
});
