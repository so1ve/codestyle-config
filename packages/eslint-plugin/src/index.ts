import genericSpacing from "./rules/generic-spacing";
import importDedupe from "./rules/import-dedupe";
import spaceBetweenGenericAndParen from "./rules/space-between-generic-and-paren";
import spaceInEmptyBlock from "./rules/space-in-empty-block"; import semiSpacing from "./rules/semi-spacing";
import noInlineTypeImport from "./rules/no-inline-type-import";

export default {
  rules: {
    "import-dedupe": importDedupe,
    "generic-spacing": genericSpacing,
    "space-between-generic-and-paren": spaceBetweenGenericAndParen,
    "space-in-empty-block": spaceInEmptyBlock,
    "semi-spacing": semiSpacing,
    "no-inline-type-import": noInlineTypeImport,
  },
};
