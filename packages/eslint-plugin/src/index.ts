import genericSpacing from "./rules/generic-spacing";
import importDedupe from "./rules/import-dedupe";

export default {
  rules: {
    "import-dedupe": importDedupe,
    "generic-spacing": genericSpacing,
  },
};
