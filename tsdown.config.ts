import { defineConfig } from "tsdown";

export default defineConfig({
  workspace: {
    include: ["packages/*"],
  },
  entry: ["src/index.ts"],
  format: "esm",
  clean: true,
  dts: {
    oxc: true,
  },
  exports: true,
});
