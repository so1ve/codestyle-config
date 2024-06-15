import { GLOB_EXCLUDE } from "../globs";
import type { TypedFlatConfigItem } from "../types";

export const ignores = (): TypedFlatConfigItem[] => [
	{ name: "so1ve/ignores", ignores: GLOB_EXCLUDE },
];
