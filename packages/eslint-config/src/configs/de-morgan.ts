import { pluginDeMorgan } from "../plugins";
import type { TypedFlatConfigItem } from "../types";

export const deMorgan = (): TypedFlatConfigItem[] => [
	{
		...pluginDeMorgan.configs.recommended,
		name: "so1ve/de-morgan",
	},
];
