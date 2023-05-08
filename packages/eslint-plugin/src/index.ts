import functionStyle from "./rules/function-style";
import importDedupe from "./rules/import-dedupe";
import noInlineTypeImport from "./rules/no-inline-type-import";
import noNegatedEqual from "./rules/no-negated-equal";
import noUselessTemplateString from "./rules/no-useless-template-string";

export default {
  rules: {
    "function-style": functionStyle,
    "import-dedupe": importDedupe,
    "no-inline-type-import": noInlineTypeImport,
    "no-useless-template-string": noUselessTemplateString,
    "no-negated-equal": noNegatedEqual,
  },
};
