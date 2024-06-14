import { GLOB_EXCLUDE } from "../globs";
import type { ConfigItem } from "../types";

export const ignores = (): ConfigItem[] => [
	{ name: "so1ve/ignores", ignores: GLOB_EXCLUDE },
];
