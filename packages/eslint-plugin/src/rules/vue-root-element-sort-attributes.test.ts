import type { InvalidTestCase, ValidTestCase } from "eslint-vitest-rule-tester";
import { unindent as $ } from "eslint-vitest-rule-tester";
import { expect } from "vitest";
import VueEslintParser from "vue-eslint-parser";

import { run } from "./_test";
import type { Options } from "./vue-root-element-sort-attributes";
import rule, { RULE_NAME } from "./vue-root-element-sort-attributes";

const valid: ValidTestCase<Options>[] = [
	$`
	  <script setup lang="ts"></script>
	`,
];
const invalid: InvalidTestCase<Options>[] = [
	'<script lang="ts" setup></script>',
	{
		code: $`
		  <script lang="ts" setup></script>
		  <template b a></template>
		`,
		options: [
			{
				script: ["lang", "setup"],
				template: ["a", "b"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
];

run({
	name: RULE_NAME,
	rule,
	parser: VueEslintParser,
	valid,
	invalid,
});
