import { GLOB_EXCLUDE } from "../globs";
import type { ConfigItem } from "../types";

export const ignores = (): ConfigItem[] => [{ ignores: GLOB_EXCLUDE }];
