import type { InvalidTestCase, ValidTestCase } from "eslint-vitest-rule-tester";
import { unindent as $ } from "eslint-vitest-rule-tester";
import { expect } from "vitest";
import VueEslintParser from "vue-eslint-parser";

import { run } from "./_test";
import type { Options } from "./vue-root-element-sort-attributes";
import rule, { RULE_NAME } from "./vue-root-element-sort-attributes";

const valid: ValidTestCase<Options>[] = [
	// Basic correct order
	$`
	  <script setup lang="ts"></script>
	`,
	// Single attribute
	$`
	  <script setup></script>
	`,
	// No attributes
	$`
	  <script></script>
	`,
	// Template with correct order
	{
		code: $`
		  <template id="app" class="container"></template>
		`,
		options: [
			{
				template: ["id", "class"],
			},
		],
	},
	// Style with correct order
	{
		code: $`
		  <style scoped lang="scss"></style>
		`,
		options: [
			{
				style: ["scoped", "lang"],
			},
		],
	},
	// Multiple elements with correct order
	{
		code: $`
		  <template id="app" class="container"></template>
		  <script setup lang="ts"></script>
		  <style scoped lang="scss"></style>
		`,
		options: [
			{
				template: ["id", "class"],
				script: ["setup", "lang"],
				style: ["scoped", "lang"],
			},
		],
	},
	// Attributes not in configuration should be ignored
	{
		code: $`
		  <script setup lang="ts" custom-attr></script>
		`,
		options: [
			{
				script: ["setup", "lang"],
			},
		],
	},
	// Directives should be ignored
	$`
	  <template v-if="show" v-for="item in items"></template>
	`,
	// Mixed attributes and directives
	{
		code: $`
		  <template id="app" v-if="show" class="container"></template>
		`,
		options: [
			{
				template: ["id", "class"],
			},
		],
	},
];
const invalid: InvalidTestCase<Options>[] = [
	// Basic wrong order
	'<script lang="ts" setup></script>',
	// Multiple elements with wrong order
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
	// Template with wrong order
	{
		code: $`
		  <template class="container" id="app"></template>
		`,
		options: [
			{
				template: ["id", "class"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
	// Style with wrong order
	{
		code: $`
		  <style lang="scss" scoped></style>
		`,
		options: [
			{
				style: ["scoped", "lang"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
	// Script with multiple wrong attributes
	{
		code: $`
		  <script lang="ts" src="./external.ts" setup></script>
		`,
		options: [
			{
				script: ["setup", "src", "lang"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
	// Complex case with multiple root elements
	{
		code: $`
		  <template class="container" id="app" data-test="root"></template>
		  <script lang="ts" src="./external.ts" setup></script>
		  <style module lang="scss" scoped></style>
		`,
		options: [
			{
				template: ["id", "class", "data-test"],
				script: ["setup", "src", "lang"],
				style: ["scoped", "module", "lang"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
	// Wrong order with mixed attributes and directives
	{
		code: $`
		  <template class="container" v-if="show" id="app" v-for="item in items"></template>
		`,
		options: [
			{
				template: ["id", "class"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
	// Style with media attribute
	{
		code: $`
		  <style media="print" scoped lang="css"></style>
		`,
		options: [
			{
				style: ["scoped", "lang", "media"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
	// Three attributes in completely wrong order
	{
		code: $`
		  <script type="module" lang="js" setup></script>
		`,
		options: [
			{
				script: ["setup", "lang", "type"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
	// Custom element with wrong order
	{
		code: $`
		  <custom-element attr-c attr-a attr-b></custom-element>
		`,
		options: [
			{
				"custom-element": ["attr-a", "attr-b", "attr-c"],
			},
		],
		output: (o) => expect(o).toMatchSnapshot(),
	},
	// Only some attributes are configured (partial ordering)
	{
		code: $`
		  <script other-attr lang="ts" setup custom-attr></script>
		`,
		options: [
			{
				script: ["setup", "lang"], // other-attr and custom-attr are not configured
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
