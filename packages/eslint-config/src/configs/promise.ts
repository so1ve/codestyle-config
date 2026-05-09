import { pluginPromise } from "../plugins";
import type { TypedFlatConfigItem } from "../types";

export const promise = (): TypedFlatConfigItem[] => [
  {
    name: "so1ve/promise/setup",
    plugins: {
      promise: pluginPromise,
    },
  },
  {
    name: "so1ve/promise/rules",
    rules: { "promise/param-names": "error" },
  },
];
