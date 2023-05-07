import importDedupe from "./rules/import-dedupe";
import noInlineTypeImport from "./rules/no-inline-type-import";
import noUselessTemplateString from "./rules/no-useless-template-string";
import noBeginningNewline from "./rules/no-beginning-newline";
import functionStyle from "./rules/function-style";

export default {
  rules: {
    "import-dedupe": importDedupe,
    "no-inline-type-import": noInlineTypeImport,
    "no-useless-template-string": noUselessTemplateString,
    "no-beginning-newline": noBeginningNewline,
    "function-style": functionStyle,
  },
};
