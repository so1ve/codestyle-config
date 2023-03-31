import importDedupe from "./rules/import-dedupe";
import noInlineTypeImport from "./rules/no-inline-type-import";

export default {
  rules: {
    "import-dedupe": importDedupe,
    "no-inline-type-import": noInlineTypeImport,
  },
};
