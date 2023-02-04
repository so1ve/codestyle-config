import genericSpacing from "./rules/generic-spacing";
import importDedupe from "./rules/import-dedupe";
import spaceBetweenGenericAndParen from "./rules/space-between-generic-and-paren";
import noSpacesBeforeParen from "./rules/no-spaces-before-paren";
import spaceInEmptyBlock from "./rules/space-in-empty-block";
import spaceBeforeFunctionParen from "./rules/space-before-function-paren";
import semiSpacing from "./rules/semi-spacing";
import noInlineTypeImport from "./rules/no-inline-type-import";
import noBeginningNewline from "./rules/no-beginning-newline";

export default {
  rules: {
    "import-dedupe": importDedupe,
    "generic-spacing": genericSpacing,
    "space-between-generic-and-paren": spaceBetweenGenericAndParen,
    "space-in-empty-block": spaceInEmptyBlock,
    "semi-spacing": semiSpacing,
    "no-inline-type-import": noInlineTypeImport,
    "no-spaces-before-paren": noSpacesBeforeParen,
    "space-before-function-paren": spaceBeforeFunctionParen,
    "no-beginning-newline": noBeginningNewline,
  },
};
