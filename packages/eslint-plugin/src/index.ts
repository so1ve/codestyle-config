import genericSpacing from "./rules/generic-spacing";
import importDedupe from "./rules/import-dedupe";
import spaceBetweenGenericAndParen from "./rules/space-between-generic-and-paren";
import noSpaceBeforeParen from "./rules/no-space-before-paren";
import spaceInEmptyBlock from "./rules/space-in-empty-block";
import spaceBeforeFunctionParen from "./rules/space-before-function-paren";
import semiSpacing from "./rules/semi-spacing";
import noInlineTypeImport from "./rules/no-inline-type-import";
import arrayBracketSpacing from "./rules/array-spacing";

export default {
  rules: {
    "import-dedupe": importDedupe,
    "generic-spacing": genericSpacing,
    "space-between-generic-and-paren": spaceBetweenGenericAndParen,
    "space-in-empty-block": spaceInEmptyBlock,
    "semi-spacing": semiSpacing,
    "no-inline-type-import": noInlineTypeImport,
    "no-space-before-paren": noSpaceBeforeParen,
    "space-before-function-paren": spaceBeforeFunctionParen,
    "array-bracket-spacing": arrayBracketSpacing,
  },
};
