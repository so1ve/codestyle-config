import functionStyle from "./rules/function-style";
import importDedupe from "./rules/import-dedupe";
import noInlineTypeImport from "./rules/no-inline-type-import";
import noNegatedComparison from "./rules/no-negated-comparison";
import noUselessTemplateString from "./rules/no-useless-template-string";
import noBeginningNewline from "./rules/no-beginning-newline";

export default {
  rules: {
    "function-style": functionStyle,
    "import-dedupe": importDedupe,
    "no-inline-type-import": noInlineTypeImport,
    "no-negated-comparison": noNegatedComparison,
    "no-useless-template-string": noUselessTemplateString,
    "no-beginning-newline": noBeginningNewline,
  },
};
