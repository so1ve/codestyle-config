import importDedupe from "./rules/import-dedupe";
import noInlineTypeImport from "./rules/no-inline-type-import";
import noUselessTemplateString from "./rules/no-useless-template-string";
import padAfterLastImport from "./rules/pad-after-last-import";

export default {
  rules: {
    "import-dedupe": importDedupe,
    "no-inline-type-import": noInlineTypeImport,
    "no-useless-template-string": noUselessTemplateString,
    "pad-after-last-import": padAfterLastImport,
  },
};
