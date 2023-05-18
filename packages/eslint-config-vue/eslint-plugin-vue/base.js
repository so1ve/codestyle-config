module.exports = {
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["vue"],
  rules: {
    "vue/comment-directive": "warn",
    "vue/jsx-uses-vars": "warn",
  },
};
