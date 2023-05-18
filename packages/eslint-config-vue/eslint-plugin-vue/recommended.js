module.exports = {
  extends: require.resolve("./strongly-recommended"),
  rules: {
    "vue/attributes-order": "warn",
    "vue/component-tags-order": "warn",
    "vue/no-lone-template": "warn",
    "vue/no-multiple-slot-args": "warn",
    "vue/no-v-html": "warn",
    "vue/order-in-components": "warn",
    "vue/this-in-template": "warn",
  },
};
