import type { ESLintUtils } from "@typescript-eslint/utils";

import { createEslintRule } from "../utils";

export const RULE_NAME = "import-dedupe";
export type MessageIds = "importDedupe";
export type Options = [];

// eslint-disable-next-line ts/no-unnecessary-type-arguments
const rule: ESLintUtils.RuleModule<MessageIds, Options> = createEslintRule({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "Fix duplication in imports.",
    },
    fixable: "code",
    schema: [],
    messages: {
      importDedupe: "Expect no duplication in imports.",
    },
  },
  defaultOptions: [],
  create: (context) => ({
    ImportDeclaration(node) {
      if (node.specifiers.length <= 1) {
        return;
      }

      const names = new Set<string>();
      for (const n of node.specifiers) {
        const id = n.local.name;
        if (names.has(id)) {
          context.report({
            node,
            loc: {
              start: n.loc.end,
              end: n.loc.start,
            },
            messageId: "importDedupe",
            fix(fixer) {
              const start = n.range[0];
              let end = n.range[1];
              const nextToken = context.sourceCode.getTokenAfter(n);
              if (nextToken?.value === ",") {
                end = nextToken.range[1];
              }

              return fixer.removeRange([start, end]);
            },
          });
        }
        names.add(id);
      }
    },
  }),
});

export default rule;
