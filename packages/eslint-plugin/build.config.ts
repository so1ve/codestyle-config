import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	clean: true,
	externals: ["@typescript-eslint/types"],
});
