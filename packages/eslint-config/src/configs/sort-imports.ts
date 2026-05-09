import type { TypedFlatConfigItem } from "../types";

export const sortImports = (): TypedFlatConfigItem[] => [
  {
    name: "so1ve/sort-imports/rules",
    rules: {
      "so1ve/sort-imports": "error",
      "so1ve/sort-exports": "error",
    },
  },
];
