import type { MaybePromise } from "./types";

/**
 * Rename plugin prefixes in a rule object. Accepts a map of prefixes to rename.
 *
 * @example
 *
 * ```ts
 * import { renameRules } from "@antfu/eslint-config";
 *
 * export default [
 * 	{
 * 		rules: renameRules(
 * 			{
 * 				"@typescript-eslint/indent": "error",
 * 			},
 * 			{ "@typescript-eslint": "ts" },
 * 		),
 * 	},
 * ];
 * ```
 */
export const renameRules = (rules: Record, map: Record) =>
	Object.fromEntries(
		Object.entries(rules).map(([key, value]) => {
			for (const [from, to] of Object.entries(map)) {
				if (key.startsWith(`${from}/`)) {
					return [to + key.slice(from.length), value];
				}
			}

			return [key, value];
		}),
	);

export async function interopDefault<T>(m: MaybePromise): Promise {
	const resolved = await m;

	return (resolved as any).default || resolved;
}
