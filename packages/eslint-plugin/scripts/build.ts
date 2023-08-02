import fs from "node:fs/promises";
import { join } from "node:path";

import { execa } from "execa";

const tsconfigPath = join(__dirname, "../../..", "tsconfig.json");

(async () => {
  const tsconfig = await fs.readFile(tsconfigPath, "utf8");
  await fs.writeFile(tsconfigPath, tsconfig.replace("Bundler", "Node"));
  await execa("pnpm", ["build:real"], { stdio: "inherit" });
  await fs.writeFile(tsconfigPath, tsconfig);
})();
