import { defineConfig } from "tsdown";

export default defineConfig({
  workspace: {
    include: ["packages/*"],
  },
  entry: ["src/index.ts"],
  format: "esm",
  unbundle: true,
  dts: {
    oxc: true,
  },
  exports: true,
});
