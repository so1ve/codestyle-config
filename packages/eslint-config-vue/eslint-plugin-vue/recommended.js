module.exports = {
	extends: require.resolve("./strongly-recommended"),
	rules: {
		"vue/attributes-order": "error",
		"vue/component-tags-order": "error",
		"vue/no-lone-template": "error",
		"vue/no-multiple-slot-args": "error",
		"vue/no-v-html": "error",
		"vue/order-in-components": "error",
		"vue/this-in-template": "error",
	},
};
