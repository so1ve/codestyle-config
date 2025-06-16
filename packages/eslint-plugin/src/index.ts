import functionStyle from "./rules/function-style";
import importDedupe from "./rules/import-dedupe";
import noImportPromisesAs from "./rules/no-import-promises-as";
import noInlineTypeImport from "./rules/no-inline-type-import";
import noNegatedComparison from "./rules/no-negated-comparison";
import noUselessTemplateString from "./rules/no-useless-template-string";
import padAfterLastImport from "./rules/pad-after-last-import";
import requireAsyncWithAwait from "./rules/require-async-with-await";
import vueRootElementSortAttributes from "./rules/vue-root-element-sort-attributes";

export default {
	rules: {
		"function-style": functionStyle,
		"import-dedupe": importDedupe,
		"no-inline-type-import": noInlineTypeImport,
		"no-negated-comparison": noNegatedComparison,
		"no-useless-template-string": noUselessTemplateString,
		"no-import-promises-as": noImportPromisesAs,
		"pad-after-last-import": padAfterLastImport,
		"require-async-with-await": requireAsyncWithAwait,
		"vue-root-element-sort-attributes": vueRootElementSortAttributes,
	},
};
