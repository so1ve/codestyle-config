import { rules } from "../rules";

export const recommended = {
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "so1ve",
  ],
  rules: {
    "so1ve/no-inline-type-import": "error",
  },
};

export const all = rules;
