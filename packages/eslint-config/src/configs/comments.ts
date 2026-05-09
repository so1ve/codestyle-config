import { pluginComments } from "../plugins";
import type { TypedFlatConfigItem } from "../types";

export const comments = (): TypedFlatConfigItem[] => [
  {
    name: "so1ve/comments/setup",
    plugins: {
      "eslint-comments": pluginComments,
    },
  },
  {
    name: "so1ve/comments/rules",
    // @keep-sorted
    rules: {
      "eslint-comments/disable-enable-pair": "off",
      "eslint-comments/no-aggregating-enable": "error",
      "eslint-comments/no-duplicate-disable": "error",
      "eslint-comments/no-unlimited-disable": "off",
      "eslint-comments/no-unused-enable": "error",
    },
  },
];
