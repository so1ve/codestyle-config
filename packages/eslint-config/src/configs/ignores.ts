import { GLOB_EXCLUDE } from "../globs";
import type { TypedFlatConfigItem } from "../types";

export function ignores(
  userIgnores: string[] | ((originals: string[]) => string[]) = [],
): TypedFlatConfigItem[] {
  let ignores = [...GLOB_EXCLUDE];

  ignores =
    typeof userIgnores === "function"
      ? userIgnores(ignores)
      : [...ignores, ...userIgnores];

  return [{ name: "so1ve/ignores", ignores }];
}
