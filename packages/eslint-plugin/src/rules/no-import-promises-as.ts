import { createEslintRule } from "../utils";

export const RULE_NAME = "no-import-promises-as";
export type MessageIds = "noImportPromisesAs";
export type Options = [];

const POSSIBLE_IMPORT_SOURCES = ["dns", "fs", "readline", "stream"].flatMap(
	(s) => [s, `node:${s}`],
);

export default createEslintRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: "problem",
		docs: {
			description: "Disallow import promises as.",
		},
		fixable: "code",
		schema: [],
		messages: {
			noImportPromisesAs: "Expect no import promises as.",
		},
	},
	defaultOptions: [],
	create: (context) => {
		const sourceCode = context.sourceCode;
		const { text } = sourceCode;

		return {
			ImportDeclaration(node) {
				if (!POSSIBLE_IMPORT_SOURCES.includes(node.source.value)) {
					return;
				}
				const promisesSpecifier = node.specifiers.find(
					(s) =>
						s.type === "ImportSpecifier" &&
						s.imported.type === "Identifier" &&
						s.imported.name === "promises" &&
						s.local.name !== "promises",
				);
				const as = promisesSpecifier?.local.name;
				if (!promisesSpecifier || !as) {
					return;
				}
				context.report({
					node,
					messageId: "noImportPromisesAs",
					*fix(fixer) {
						const s = promisesSpecifier.range[0];
						let e = promisesSpecifier.range[1];
						if (text[e] === ",") {
							e += 1;
						}

						yield fixer.removeRange([s, e]);
						yield fixer.insertTextAfter(
							node,
							`\nimport ${as} from "${node.source.value}/promises";`,
						);
					},
				});
			},
		};
	},
});
