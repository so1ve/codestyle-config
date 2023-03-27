

export const RULE_NAME = "type-indent";
export type MessageIds = "expected";
export type Options = [];

// Currently, indent is not enforced to type declaretions.
// Like:
// type a = 1;
// The indent should be infered from the context.
// Add support for types.
// Also, this isn't applied now:
// type a =
// 1; (This should be indented)
// It accepts an option "indent", the indent size should be applied.
