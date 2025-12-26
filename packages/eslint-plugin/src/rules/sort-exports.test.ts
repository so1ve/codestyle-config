import { run } from "./_test";
import rule, { RULE_NAME } from "./sort-exports";

run({
  name: RULE_NAME,
  rule,
  valid: [
    "export { a, b } from 'a';\nexport { c } from 'c';\n",
    "export { a, b as c }\n",
  ],
  invalid: [
    "export { c } from 'c';\nexport { a } from 'a';\n",
    "export { b, a }\n",
    `export {
			a,
			type b,
		} from '';`,
  ],
});
