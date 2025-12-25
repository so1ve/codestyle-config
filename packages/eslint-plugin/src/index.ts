/* eslint-disable ts/no-unnecessary-type-assertion */
import functionStyle from "./rules/function-style";
import htmlSpacedComment from "./rules/html-spaced-comment";
import importDedupe from "./rules/import-dedupe";
import noImportPromisesAs from "./rules/no-import-promises-as";
import noInlineTypeImport from "./rules/no-inline-type-import";
import noNegatedComparison from "./rules/no-negated-comparison";
import noUselessTemplateString from "./rules/no-useless-template-string";
import padAfterLastImport from "./rules/pad-after-last-import";
import preferTsExpectError from "./rules/prefer-ts-expect-error";
import requireAsyncWithAwait from "./rules/require-async-with-await";
import vueRootElementSortAttributes from "./rules/vue-root-element-sort-attributes";

export default {
	// @keep-sorted
	rules: {
		"function-style": functionStyle as typeof functionStyle,
		"html-spaced-comment": htmlSpacedComment as typeof htmlSpacedComment,
		"import-dedupe": importDedupe as typeof importDedupe,
		"no-import-promises-as": noImportPromisesAs as typeof noImportPromisesAs,
		"no-inline-type-import": noInlineTypeImport as typeof noInlineTypeImport,
		"no-negated-comparison": noNegatedComparison as typeof noNegatedComparison,
		"no-useless-template-string":
			noUselessTemplateString as typeof noUselessTemplateString,
		"pad-after-last-import": padAfterLastImport as typeof padAfterLastImport,
		"prefer-ts-expect-error": preferTsExpectError as typeof preferTsExpectError,
		"require-async-with-await":
			requireAsyncWithAwait as typeof requireAsyncWithAwait,
		"vue-root-element-sort-attributes":
			vueRootElementSortAttributes as typeof vueRootElementSortAttributes,
	},
};
