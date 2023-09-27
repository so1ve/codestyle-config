import type { FlatESLintConfigItem } from "eslint-define-config";

import { pluginOnlyError } from "../plugins";

export const onlyError = (): FlatESLintConfigItem[] => [
	{
		plugins: {
			"only-error": pluginOnlyError,
		},
	},
];
