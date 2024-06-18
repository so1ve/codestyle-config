/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface RuleOptions {
	/**
	 * Enforce getter and setter pairs in objects and classes
	 *
	 * @see https://eslint.org/docs/latest/rules/accessor-pairs
	 */
	"accessor-pairs"?: Linter.RuleEntry<AccessorPairs>;
	/**
	 * Enforce linebreaks after opening and before closing array brackets
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/array-bracket-newline
	 */
	"array-bracket-newline"?: Linter.RuleEntry<ArrayBracketNewline>;
	/**
	 * Enforce consistent spacing inside array brackets
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/array-bracket-spacing
	 */
	"array-bracket-spacing"?: Linter.RuleEntry<ArrayBracketSpacing>;
	/**
	 * Enforce `return` statements in callbacks of array methods
	 *
	 * @see https://eslint.org/docs/latest/rules/array-callback-return
	 */
	"array-callback-return"?: Linter.RuleEntry<ArrayCallbackReturn>;
	/**
	 * Enforce line breaks after each array element
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/array-element-newline
	 */
	"array-element-newline"?: Linter.RuleEntry<ArrayElementNewline>;
	/**
	 * Prefer methods operating from the right over reversing the array
	 */
	"array-func/avoid-reverse"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using the mapFn callback of Array.from over an immediate .map()
	 * call.
	 */
	"array-func/from-map"?: Linter.RuleEntry<[]>;
	/**
	 * Avoid the this parameter when providing arrow function as callback in array
	 * functions.
	 */
	"array-func/no-unnecessary-this-arg"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using Array.from over spreading an iterable in an array literal.
	 * Using Array.from also preserves the original type of TypedArrays while
	 * mapping.
	 */
	"array-func/prefer-array-from"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using .flat() over concatenating to flatten an array.
	 */
	"array-func/prefer-flat"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using the flatMap over an immediate .flat() call after a .map().
	 */
	"array-func/prefer-flat-map"?: Linter.RuleEntry<[]>;
	/**
	 * Require braces around arrow function bodies
	 *
	 * @see https://eslint.org/docs/latest/rules/arrow-body-style
	 */
	"arrow-body-style"?: Linter.RuleEntry<ArrowBodyStyle>;
	/**
	 * Require parentheses around arrow function arguments
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/arrow-parens
	 */
	"arrow-parens"?: Linter.RuleEntry<ArrowParens>;
	/**
	 * Enforce consistent spacing before and after the arrow in arrow functions
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/arrow-spacing
	 */
	"arrow-spacing"?: Linter.RuleEntry<ArrowSpacing>;
	/**
	 * Enforce the use of variables within the scope they are defined
	 *
	 * @see https://eslint.org/docs/latest/rules/block-scoped-var
	 */
	"block-scoped-var"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow or enforce spaces inside of blocks after opening block and before
	 * closing block
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/block-spacing
	 */
	"block-spacing"?: Linter.RuleEntry<BlockSpacing>;
	/**
	 * Enforce consistent brace style for blocks
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/brace-style
	 */
	"brace-style"?: Linter.RuleEntry<BraceStyle>;
	/**
	 * Require `return` statements after callbacks
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/callback-return
	 */
	"callback-return"?: Linter.RuleEntry<CallbackReturn>;
	/**
	 * Enforce camelcase naming convention
	 *
	 * @see https://eslint.org/docs/latest/rules/camelcase
	 */
	"camelcase"?: Linter.RuleEntry<Camelcase>;
	/**
	 * Enforce or disallow capitalization of the first letter of a comment
	 *
	 * @see https://eslint.org/docs/latest/rules/capitalized-comments
	 */
	"capitalized-comments"?: Linter.RuleEntry<CapitalizedComments>;
	/**
	 * Enforce that class methods utilize `this`
	 *
	 * @see https://eslint.org/docs/latest/rules/class-methods-use-this
	 */
	"class-methods-use-this"?: Linter.RuleEntry<ClassMethodsUseThis>;
	/**
	 * Require or disallow trailing commas
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/comma-dangle
	 */
	"comma-dangle"?: Linter.RuleEntry<CommaDangle>;
	/**
	 * Enforce consistent spacing before and after commas
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/comma-spacing
	 */
	"comma-spacing"?: Linter.RuleEntry<CommaSpacing>;
	/**
	 * Enforce consistent comma style
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/comma-style
	 */
	"comma-style"?: Linter.RuleEntry<CommaStyle>;
	/**
	 * Enforce a maximum cyclomatic complexity allowed in a program
	 *
	 * @see https://eslint.org/docs/latest/rules/complexity
	 */
	"complexity"?: Linter.RuleEntry<Complexity>;
	/**
	 * Enforce consistent spacing inside computed property brackets
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/computed-property-spacing
	 */
	"computed-property-spacing"?: Linter.RuleEntry<ComputedPropertySpacing>;
	/**
	 * Require `return` statements to either always or never specify values
	 *
	 * @see https://eslint.org/docs/latest/rules/consistent-return
	 */
	"consistent-return"?: Linter.RuleEntry<ConsistentReturn>;
	/**
	 * Enforce consistent naming when capturing the current execution context
	 *
	 * @see https://eslint.org/docs/latest/rules/consistent-this
	 */
	"consistent-this"?: Linter.RuleEntry<ConsistentThis>;
	/**
	 * Require `super()` calls in constructors
	 *
	 * @see https://eslint.org/docs/latest/rules/constructor-super
	 */
	"constructor-super"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent brace style for all control statements
	 *
	 * @see https://eslint.org/docs/latest/rules/curly
	 */
	"curly"?: Linter.RuleEntry<Curly>;
	/**
	 * Require `default` cases in `switch` statements
	 *
	 * @see https://eslint.org/docs/latest/rules/default-case
	 */
	"default-case"?: Linter.RuleEntry<DefaultCase>;
	/**
	 * Enforce default clauses in switch statements to be last
	 *
	 * @see https://eslint.org/docs/latest/rules/default-case-last
	 */
	"default-case-last"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce default parameters to be last
	 *
	 * @see https://eslint.org/docs/latest/rules/default-param-last
	 */
	"default-param-last"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent newlines before and after dots
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/dot-location
	 */
	"dot-location"?: Linter.RuleEntry<DotLocation>;
	/**
	 * Enforce dot notation whenever possible
	 *
	 * @see https://eslint.org/docs/latest/rules/dot-notation
	 */
	"dot-notation"?: Linter.RuleEntry<DotNotation>;
	/**
	 * Require or disallow newline at the end of files
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/eol-last
	 */
	"eol-last"?: Linter.RuleEntry<EolLast>;
	/**
	 * Require the use of `===` and `!==`
	 *
	 * @see https://eslint.org/docs/latest/rules/eqeqeq
	 */
	"eqeqeq"?: Linter.RuleEntry<Eqeqeq>;
	/**
	 * Require a `eslint-enable` comment for every `eslint-disable` comment
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
	 */
	"eslint-comments/disable-enable-pair"?: Linter.RuleEntry<EslintCommentsDisableEnablePair>;
	/**
	 * Disallow a `eslint-enable` comment for multiple `eslint-disable` comments
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html
	 */
	"eslint-comments/no-aggregating-enable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate `eslint-disable` comments
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html
	 */
	"eslint-comments/no-duplicate-disable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `eslint-disable` comments about specific rules
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html
	 */
	"eslint-comments/no-restricted-disable"?: Linter.RuleEntry<EslintCommentsNoRestrictedDisable>;
	/**
	 * Disallow `eslint-disable` comments without rule names
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html
	 */
	"eslint-comments/no-unlimited-disable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused `eslint-disable` comments
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
	 */
	"eslint-comments/no-unused-disable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused `eslint-enable` comments
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html
	 */
	"eslint-comments/no-unused-enable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow ESLint directive-comments
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-use.html
	 */
	"eslint-comments/no-use"?: Linter.RuleEntry<EslintCommentsNoUse>;
	/**
	 * Require include descriptions in ESLint directive-comments
	 *
	 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
	 */
	"eslint-comments/require-description"?: Linter.RuleEntry<EslintCommentsRequireDescription>;
	/**
	 * Enforce "for" loop update clause moving the counter in the right direction
	 *
	 * @see https://eslint.org/docs/latest/rules/for-direction
	 */
	"for-direction"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow spacing between function identifiers and their
	 * invocations
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/func-call-spacing
	 */
	"func-call-spacing"?: Linter.RuleEntry<FuncCallSpacing>;
	/**
	 * Require function names to match the name of the variable or property to
	 * which they are assigned
	 *
	 * @see https://eslint.org/docs/latest/rules/func-name-matching
	 */
	"func-name-matching"?: Linter.RuleEntry<FuncNameMatching>;
	/**
	 * Require or disallow named `function` expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/func-names
	 */
	"func-names"?: Linter.RuleEntry<FuncNames>;
	/**
	 * Enforce the consistent use of either `function` declarations or expressions
	 * assigned to variables
	 *
	 * @see https://eslint.org/docs/latest/rules/func-style
	 */
	"func-style"?: Linter.RuleEntry<FuncStyle>;
	/**
	 * Enforce line breaks between arguments of a function call
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/function-call-argument-newline
	 */
	"function-call-argument-newline"?: Linter.RuleEntry<FunctionCallArgumentNewline>;
	/**
	 * Enforce consistent line breaks inside function parentheses
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/function-paren-newline
	 */
	"function-paren-newline"?: Linter.RuleEntry<FunctionParenNewline>;
	/**
	 * Enforce consistent spacing around `*` operators in generator functions
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/generator-star-spacing
	 */
	"generator-star-spacing"?: Linter.RuleEntry<GeneratorStarSpacing>;
	/**
	 * Enforce `return` statements in getters
	 *
	 * @see https://eslint.org/docs/latest/rules/getter-return
	 */
	"getter-return"?: Linter.RuleEntry<GetterReturn>;
	/**
	 * Require `require()` calls to be placed at top-level module scope
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/global-require
	 */
	"global-require"?: Linter.RuleEntry<[]>;
	/**
	 * Require grouped accessor pairs in object literals and classes
	 *
	 * @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs
	 */
	"grouped-accessor-pairs"?: Linter.RuleEntry<GroupedAccessorPairs>;
	/**
	 * Require `for-in` loops to include an `if` statement
	 *
	 * @see https://eslint.org/docs/latest/rules/guard-for-in
	 */
	"guard-for-in"?: Linter.RuleEntry<[]>;
	/**
	 * Require error handling in callbacks
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/handle-callback-err
	 */
	"handle-callback-err"?: Linter.RuleEntry<HandleCallbackErr>;
	/**
	 * Enforce newline between elements.
	 */
	"html/element-newline"?: Linter.RuleEntry<HtmlElementNewline>;
	/**
	 * Enforce consistent naming id attributes
	 */
	"html/id-naming-convention"?: Linter.RuleEntry<HtmlIdNamingConvention>;
	/**
	 * Enforce consistent indentation
	 */
	"html/indent"?: Linter.RuleEntry<HtmlIndent>;
	/**
	 * Enforce to use lowercase for tag and attribute names.
	 */
	"html/lowercase"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow to use of abstract roles
	 */
	"html/no-abstract-roles"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow to use of accesskey attribute
	 */
	"html/no-accesskey-attrs"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow to use aria-hidden attributes on the `body` element.
	 */
	"html/no-aria-hidden-body"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow to use duplicate attributes
	 */
	"html/no-duplicate-attrs"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow to use duplicate id
	 */
	"html/no-duplicate-id"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow an extra spacing around attributes
	 */
	"html/no-extra-spacing-attrs"?: Linter.RuleEntry<HtmlNoExtraSpacingAttrs>;
	/**
	 * Disallow using inline style
	 */
	"html/no-inline-styles"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow multiple empty lines
	 */
	"html/no-multiple-empty-lines"?: Linter.RuleEntry<HtmlNoMultipleEmptyLines>;
	/**
	 * Disallow multiple `<h1></h1>`.
	 */
	"html/no-multiple-h1"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow use of `user-scalable=no` in `<meta name="viewport">`.
	 */
	"html/no-non-scalable-viewport"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow to use obsolete elements in HTML5
	 */
	"html/no-obsolete-tags"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow use of positive `tabindex`.
	 */
	"html/no-positive-tabindex"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow specified attributes
	 */
	"html/no-restricted-attr-values"?: Linter.RuleEntry<HtmlNoRestrictedAttrValues>;
	/**
	 * Disallow specified attributes
	 */
	"html/no-restricted-attrs"?: Linter.RuleEntry<HtmlNoRestrictedAttrs>;
	/**
	 * Enforce to omit type attributes for style sheets and scripts
	 */
	"html/no-script-style-type"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow skipping heading levels
	 */
	"html/no-skip-heading-levels"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usage of unsafe `target='_blank'`
	 */
	"html/no-target-blank"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow trailing whitespace at the end of lines
	 */
	"html/no-trailing-spaces"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent quoting attributes with double(") or single(')
	 */
	"html/quotes"?: Linter.RuleEntry<HtmlQuotes>;
	/**
	 * Require specified attributes
	 */
	"html/require-attrs"?: Linter.RuleEntry<HtmlRequireAttrs>;
	/**
	 * Require use of button element with a valid type attribute.
	 */
	"html/require-button-type"?: Linter.RuleEntry<[]>;
	/**
	 * Require closing tags.
	 */
	"html/require-closing-tags"?: Linter.RuleEntry<HtmlRequireClosingTags>;
	/**
	 * Require `<!DOCTYPE HTML>` in html,
	 */
	"html/require-doctype"?: Linter.RuleEntry<[]>;
	/**
	 * Require `title` in `<frame>`, `<iframe>`
	 */
	"html/require-frame-title"?: Linter.RuleEntry<[]>;
	/**
	 * Require `alt` attribute at `<img>` tag
	 */
	"html/require-img-alt"?: Linter.RuleEntry<HtmlRequireImgAlt>;
	/**
	 * Require `lang` attribute at `<html>` tag
	 */
	"html/require-lang"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce `<li>` to be in `<ul>`, `<ol>` or `<menu>`.
	 */
	"html/require-li-container"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce to use `<meta charset="...">` in `<head>`
	 */
	"html/require-meta-charset"?: Linter.RuleEntry<[]>;
	/**
	 * Require use of `<meta name="description">` in `<head>`
	 */
	"html/require-meta-description"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce to use `<meta name="viewport">` in `<head>`
	 */
	"html/require-meta-viewport"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce to use `<meta name="viewport">` in `<head>`
	 */
	"html/require-open-graph-protocol"?: Linter.RuleEntry<HtmlRequireOpenGraphProtocol>;
	/**
	 * Require `<title><title/>` in the `<head><head/>`
	 */
	"html/require-title"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce attributes alphabetical sorting
	 */
	"html/sort-attrs"?: Linter.RuleEntry<HtmlSortAttrs>;
	/**
	 * Disallow specified identifiers
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/id-blacklist
	 */
	"id-blacklist"?: Linter.RuleEntry<IdBlacklist>;
	/**
	 * Disallow specified identifiers
	 *
	 * @see https://eslint.org/docs/latest/rules/id-denylist
	 */
	"id-denylist"?: Linter.RuleEntry<IdDenylist>;
	/**
	 * Enforce minimum and maximum identifier lengths
	 *
	 * @see https://eslint.org/docs/latest/rules/id-length
	 */
	"id-length"?: Linter.RuleEntry<IdLength>;
	/**
	 * Require identifiers to match a specified regular expression
	 *
	 * @see https://eslint.org/docs/latest/rules/id-match
	 */
	"id-match"?: Linter.RuleEntry<IdMatch>;
	/**
	 * Enforce the location of arrow function bodies
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
	 */
	"implicit-arrow-linebreak"?: Linter.RuleEntry<ImplicitArrowLinebreak>;
	/**
	 * Enforce or ban the use of inline type-only markers for named imports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/consistent-type-specifier-style.md
	 */
	"import/consistent-type-specifier-style"?: Linter.RuleEntry<ImportConsistentTypeSpecifierStyle>;
	/**
	 * Ensure a default export is present, given a default import.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/default.md
	 */
	"import/default"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce a leading comment with the webpackChunkName for dynamic imports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/dynamic-import-chunkname.md
	 */
	"import/dynamic-import-chunkname"?: Linter.RuleEntry<ImportDynamicImportChunkname>;
	/**
	 * Forbid any invalid exports, i.e. re-export of the same name.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/export.md
	 */
	"import/export"?: Linter.RuleEntry<[]>;
	/**
	 * Ensure all exports appear after other statements.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/exports-last.md
	 */
	"import/exports-last"?: Linter.RuleEntry<[]>;
	/**
	 * Ensure consistent use of file extension within the import path.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/extensions.md
	 */
	"import/extensions"?: Linter.RuleEntry<ImportExtensions>;
	/**
	 * Ensure all imports appear before other statements.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/first.md
	 */
	"import/first"?: Linter.RuleEntry<ImportFirst>;
	/**
	 * Prefer named exports to be grouped together in a single export declaration.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/group-exports.md
	 */
	"import/group-exports"?: Linter.RuleEntry<ImportGroupExports>;
	/**
	 * Replaced by `import-x/first`.
	 *
	 * @deprecated
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md
	 */
	"import/imports-first"?: Linter.RuleEntry<ImportImportsFirst>;
	/**
	 * Enforce the maximum number of dependencies a module can have.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/max-dependencies.md
	 */
	"import/max-dependencies"?: Linter.RuleEntry<ImportMaxDependencies>;
	/**
	 * Ensure named imports correspond to a named export in the remote file.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/named.md
	 */
	"import/named"?: Linter.RuleEntry<ImportNamed>;
	/**
	 * Ensure imported namespaces contain dereferenced properties as they are
	 * dereferenced.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/namespace.md
	 */
	"import/namespace"?: Linter.RuleEntry<ImportNamespace>;
	/**
	 * Enforce a newline after import statements.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/newline-after-import.md
	 */
	"import/newline-after-import"?: Linter.RuleEntry<ImportNewlineAfterImport>;
	/**
	 * Forbid import of modules using absolute paths.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-absolute-path.md
	 */
	"import/no-absolute-path"?: Linter.RuleEntry<ImportNoAbsolutePath>;
	/**
	 * Forbid AMD `require` and `define` calls.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-amd.md
	 */
	"import/no-amd"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid anonymous values as default exports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-anonymous-default-export.md
	 */
	"import/no-anonymous-default-export"?: Linter.RuleEntry<ImportNoAnonymousDefaultExport>;
	/**
	 * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-commonjs.md
	 */
	"import/no-commonjs"?: Linter.RuleEntry<ImportNoCommonjs>;
	/**
	 * Forbid a module from importing a module with a dependency path back to
	 * itself.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-cycle.md
	 */
	"import/no-cycle"?: Linter.RuleEntry<ImportNoCycle>;
	/**
	 * Forbid default exports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-default-export.md
	 */
	"import/no-default-export"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid imported names marked with `@deprecated` documentation tag.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-deprecated.md
	 */
	"import/no-deprecated"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid repeated import of the same module in multiple places.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-duplicates.md
	 */
	"import/no-duplicates"?: Linter.RuleEntry<ImportNoDuplicates>;
	/**
	 * Forbid `require()` calls with expressions.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-dynamic-require.md
	 */
	"import/no-dynamic-require"?: Linter.RuleEntry<ImportNoDynamicRequire>;
	/**
	 * Forbid empty named import blocks.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-empty-named-blocks.md
	 */
	"import/no-empty-named-blocks"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid the use of extraneous packages.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-extraneous-dependencies.md
	 */
	"import/no-extraneous-dependencies"?: Linter.RuleEntry<ImportNoExtraneousDependencies>;
	/**
	 * Forbid import statements with CommonJS module.exports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-import-module-exports.md
	 */
	"import/no-import-module-exports"?: Linter.RuleEntry<ImportNoImportModuleExports>;
	/**
	 * Forbid importing the submodules of other modules.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-internal-modules.md
	 */
	"import/no-internal-modules"?: Linter.RuleEntry<ImportNoInternalModules>;
	/**
	 * Forbid the use of mutable exports with `var` or `let`.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-mutable-exports.md
	 */
	"import/no-mutable-exports"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid use of exported name as identifier of default export.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-named-as-default.md
	 */
	"import/no-named-as-default"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid use of exported name as property of default export.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-named-as-default-member.md
	 */
	"import/no-named-as-default-member"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid named default exports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-named-default.md
	 */
	"import/no-named-default"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid named exports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-named-export.md
	 */
	"import/no-named-export"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid namespace (a.k.a. "wildcard" `*`) imports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-namespace.md
	 */
	"import/no-namespace"?: Linter.RuleEntry<ImportNoNamespace>;
	/**
	 * Forbid Node.js builtin modules.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-nodejs-modules.md
	 */
	"import/no-nodejs-modules"?: Linter.RuleEntry<ImportNoNodejsModules>;
	/**
	 * Forbid importing packages through relative paths.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-relative-packages.md
	 */
	"import/no-relative-packages"?: Linter.RuleEntry<ImportNoRelativePackages>;
	/**
	 * Forbid importing modules from parent directories.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-relative-parent-imports.md
	 */
	"import/no-relative-parent-imports"?: Linter.RuleEntry<ImportNoRelativeParentImports>;
	/**
	 * Enforce which files can be imported in a given folder.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-restricted-paths.md
	 */
	"import/no-restricted-paths"?: Linter.RuleEntry<ImportNoRestrictedPaths>;
	/**
	 * Forbid a module from importing itself.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-self-import.md
	 */
	"import/no-self-import"?: Linter.RuleEntry<[]>;
	/**
	 * Forbid unassigned imports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-unassigned-import.md
	 */
	"import/no-unassigned-import"?: Linter.RuleEntry<ImportNoUnassignedImport>;
	/**
	 * Ensure imports point to a file/module that can be resolved.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-unresolved.md
	 */
	"import/no-unresolved"?: Linter.RuleEntry<ImportNoUnresolved>;
	/**
	 * Forbid modules without exports, or exports without matching import in
	 * another module.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-unused-modules.md
	 */
	"import/no-unused-modules"?: Linter.RuleEntry<ImportNoUnusedModules>;
	/**
	 * Forbid unnecessary path segments in import and require statements.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-useless-path-segments.md
	 */
	"import/no-useless-path-segments"?: Linter.RuleEntry<ImportNoUselessPathSegments>;
	/**
	 * Forbid webpack loader syntax in imports.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/no-webpack-loader-syntax.md
	 */
	"import/no-webpack-loader-syntax"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce a convention in module import order.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/order.md
	 */
	"import/order"?: Linter.RuleEntry<ImportOrder>;
	/**
	 * Prefer a default export if module exports a single name or multiple names.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/prefer-default-export.md
	 */
	"import/prefer-default-export"?: Linter.RuleEntry<ImportPreferDefaultExport>;
	/**
	 * Forbid potentially ambiguous parse goal (`script` vs. `module`).
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v0.4.4/docs/rules/unambiguous.md
	 */
	"import/unambiguous"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent indentation
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/indent
	 */
	"indent"?: Linter.RuleEntry<Indent>;
	/**
	 * Enforce consistent indentation
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/indent-legacy
	 */
	"indent-legacy"?: Linter.RuleEntry<IndentLegacy>;
	/**
	 * Require or disallow initialization in variable declarations
	 *
	 * @see https://eslint.org/docs/latest/rules/init-declarations
	 */
	"init-declarations"?: Linter.RuleEntry<InitDeclarations>;
	"jest-formatting/padding-around-after-all-blocks"?: Linter.RuleEntry<[]>;
	"jest-formatting/padding-around-after-each-blocks"?: Linter.RuleEntry<[]>;
	"jest-formatting/padding-around-all"?: Linter.RuleEntry<[]>;
	"jest-formatting/padding-around-before-all-blocks"?: Linter.RuleEntry<[]>;
	"jest-formatting/padding-around-before-each-blocks"?: Linter.RuleEntry<[]>;
	"jest-formatting/padding-around-describe-blocks"?: Linter.RuleEntry<[]>;
	"jest-formatting/padding-around-expect-groups"?: Linter.RuleEntry<[]>;
	"jest-formatting/padding-around-test-blocks"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce line breaks after opening and before closing array brackets
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html
	 */
	"jsonc/array-bracket-newline"?: Linter.RuleEntry<JsoncArrayBracketNewline>;
	/**
	 * Disallow or enforce spaces inside of brackets
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
	 */
	"jsonc/array-bracket-spacing"?: Linter.RuleEntry<JsoncArrayBracketSpacing>;
	/**
	 * Enforce line breaks between array elements
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html
	 */
	"jsonc/array-element-newline"?: Linter.RuleEntry<JsoncArrayElementNewline>;
	/**
	 * Apply jsonc rules similar to your configured ESLint core rules
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html
	 */
	"jsonc/auto"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow trailing commas
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html
	 */
	"jsonc/comma-dangle"?: Linter.RuleEntry<JsoncCommaDangle>;
	/**
	 * Enforce consistent comma style
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
	 */
	"jsonc/comma-style"?: Linter.RuleEntry<JsoncCommaStyle>;
	/**
	 * Enforce consistent indentation
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
	 */
	"jsonc/indent"?: Linter.RuleEntry<JsoncIndent>;
	/**
	 * Enforce naming convention to property key names
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html
	 */
	"jsonc/key-name-casing"?: Linter.RuleEntry<JsoncKeyNameCasing>;
	/**
	 * Enforce consistent spacing between keys and values in object literal
	 * properties
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
	 */
	"jsonc/key-spacing"?: Linter.RuleEntry<JsoncKeySpacing>;
	/**
	 * Disallow BigInt literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html
	 */
	"jsonc/no-bigint-literals"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow binary expression
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html
	 */
	"jsonc/no-binary-expression"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow binary numeric literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html
	 */
	"jsonc/no-binary-numeric-literals"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow comments
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html
	 */
	"jsonc/no-comments"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate keys in object literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html
	 */
	"jsonc/no-dupe-keys"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow escape sequences in identifiers.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html
	 */
	"jsonc/no-escape-sequence-in-identifier"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow leading or trailing decimal points in numeric literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html
	 */
	"jsonc/no-floating-decimal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow hexadecimal numeric literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html
	 */
	"jsonc/no-hexadecimal-numeric-literals"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow Infinity
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html
	 */
	"jsonc/no-infinity"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow irregular whitespace
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html
	 */
	"jsonc/no-irregular-whitespace"?: Linter.RuleEntry<JsoncNoIrregularWhitespace>;
	/**
	 * Disallow multiline strings
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html
	 */
	"jsonc/no-multi-str"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow NaN
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html
	 */
	"jsonc/no-nan"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow number property keys
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html
	 */
	"jsonc/no-number-props"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow numeric separators
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html
	 */
	"jsonc/no-numeric-separators"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow legacy octal literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html
	 */
	"jsonc/no-octal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow octal escape sequences in string literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html
	 */
	"jsonc/no-octal-escape"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow octal numeric literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html
	 */
	"jsonc/no-octal-numeric-literals"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow parentheses around the expression
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html
	 */
	"jsonc/no-parenthesized"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow plus sign
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html
	 */
	"jsonc/no-plus-sign"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow RegExp literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html
	 */
	"jsonc/no-regexp-literals"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow sparse arrays
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html
	 */
	"jsonc/no-sparse-arrays"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow template literals
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html
	 */
	"jsonc/no-template-literals"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `undefined`
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html
	 */
	"jsonc/no-undefined-value"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow Unicode code point escape sequences.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html
	 */
	"jsonc/no-unicode-codepoint-escapes"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary escape usage
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html
	 */
	"jsonc/no-useless-escape"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent line breaks inside braces
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
	 */
	"jsonc/object-curly-newline"?: Linter.RuleEntry<JsoncObjectCurlyNewline>;
	/**
	 * Enforce consistent spacing inside braces
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
	 */
	"jsonc/object-curly-spacing"?: Linter.RuleEntry<JsoncObjectCurlySpacing>;
	/**
	 * Enforce placing object properties on separate lines
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
	 */
	"jsonc/object-property-newline"?: Linter.RuleEntry<JsoncObjectPropertyNewline>;
	/**
	 * Require quotes around object literal property names
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html
	 */
	"jsonc/quote-props"?: Linter.RuleEntry<JsoncQuoteProps>;
	/**
	 * Enforce use of double or single quotes
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html
	 */
	"jsonc/quotes"?: Linter.RuleEntry<JsoncQuotes>;
	/**
	 * Require array values to be sorted
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html
	 */
	"jsonc/sort-array-values"?: Linter.RuleEntry<JsoncSortArrayValues>;
	/**
	 * Require object keys to be sorted
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
	 */
	"jsonc/sort-keys"?: Linter.RuleEntry<JsoncSortKeys>;
	/**
	 * Disallow spaces after unary operators
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html
	 */
	"jsonc/space-unary-ops"?: Linter.RuleEntry<JsoncSpaceUnaryOps>;
	/**
	 * Disallow invalid number for JSON
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html
	 */
	"jsonc/valid-json-number"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow parsing errors in Vue custom blocks
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html
	 */
	"jsonc/vue-custom-block/no-parsing-error"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the consistent use of either double or single quotes in JSX
	 * attributes
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/jsx-quotes
	 */
	"jsx-quotes"?: Linter.RuleEntry<JsxQuotes>;
	/**
	 * Enforce consistent spacing between keys and values in object literal
	 * properties
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/key-spacing
	 */
	"key-spacing"?: Linter.RuleEntry<KeySpacing>;
	/**
	 * Enforce consistent spacing before and after keywords
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/keyword-spacing
	 */
	"keyword-spacing"?: Linter.RuleEntry<KeywordSpacing>;
	/**
	 * Enforce position of line comments
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/line-comment-position
	 */
	"line-comment-position"?: Linter.RuleEntry<LineCommentPosition>;
	/**
	 * Enforce consistent linebreak style
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/linebreak-style
	 */
	"linebreak-style"?: Linter.RuleEntry<LinebreakStyle>;
	/**
	 * Require empty lines around comments
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/lines-around-comment
	 */
	"lines-around-comment"?: Linter.RuleEntry<LinesAroundComment>;
	/**
	 * Require or disallow newlines around directives
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/lines-around-directive
	 */
	"lines-around-directive"?: Linter.RuleEntry<LinesAroundDirective>;
	/**
	 * Require or disallow an empty line between class members
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/lines-between-class-members
	 */
	"lines-between-class-members"?: Linter.RuleEntry<LinesBetweenClassMembers>;
	/**
	 * Require or disallow logical assignment operator shorthand
	 *
	 * @see https://eslint.org/docs/latest/rules/logical-assignment-operators
	 */
	"logical-assignment-operators"?: Linter.RuleEntry<LogicalAssignmentOperators>;
	/**
	 * Enforce a maximum number of classes per file
	 *
	 * @see https://eslint.org/docs/latest/rules/max-classes-per-file
	 */
	"max-classes-per-file"?: Linter.RuleEntry<MaxClassesPerFile>;
	/**
	 * Enforce a maximum depth that blocks can be nested
	 *
	 * @see https://eslint.org/docs/latest/rules/max-depth
	 */
	"max-depth"?: Linter.RuleEntry<MaxDepth>;
	/**
	 * Enforce a maximum line length
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/max-len
	 */
	"max-len"?: Linter.RuleEntry<MaxLen>;
	/**
	 * Enforce a maximum number of lines per file
	 *
	 * @see https://eslint.org/docs/latest/rules/max-lines
	 */
	"max-lines"?: Linter.RuleEntry<MaxLines>;
	/**
	 * Enforce a maximum number of lines of code in a function
	 *
	 * @see https://eslint.org/docs/latest/rules/max-lines-per-function
	 */
	"max-lines-per-function"?: Linter.RuleEntry<MaxLinesPerFunction>;
	/**
	 * Enforce a maximum depth that callbacks can be nested
	 *
	 * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
	 */
	"max-nested-callbacks"?: Linter.RuleEntry<MaxNestedCallbacks>;
	/**
	 * Enforce a maximum number of parameters in function definitions
	 *
	 * @see https://eslint.org/docs/latest/rules/max-params
	 */
	"max-params"?: Linter.RuleEntry<MaxParams>;
	/**
	 * Enforce a maximum number of statements allowed in function blocks
	 *
	 * @see https://eslint.org/docs/latest/rules/max-statements
	 */
	"max-statements"?: Linter.RuleEntry<MaxStatements>;
	/**
	 * Enforce a maximum number of statements allowed per line
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/max-statements-per-line
	 */
	"max-statements-per-line"?: Linter.RuleEntry<MaxStatementsPerLine>;
	/**
	 * Linter integration with remark plugins
	 */
	"mdx/remark"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce a particular style for multiline comments
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/multiline-comment-style
	 */
	"multiline-comment-style"?: Linter.RuleEntry<MultilineCommentStyle>;
	/**
	 * Enforce newlines between operands of ternary expressions
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/multiline-ternary
	 */
	"multiline-ternary"?: Linter.RuleEntry<MultilineTernary>;
	/**
	 * Require constructor names to begin with a capital letter
	 *
	 * @see https://eslint.org/docs/latest/rules/new-cap
	 */
	"new-cap"?: Linter.RuleEntry<NewCap>;
	/**
	 * Enforce or disallow parentheses when invoking a constructor with no
	 * arguments
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/new-parens
	 */
	"new-parens"?: Linter.RuleEntry<NewParens>;
	/**
	 * Require or disallow an empty line after variable declarations
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/newline-after-var
	 */
	"newline-after-var"?: Linter.RuleEntry<NewlineAfterVar>;
	/**
	 * Require an empty line before `return` statements
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/newline-before-return
	 */
	"newline-before-return"?: Linter.RuleEntry<[]>;
	/**
	 * Require a newline after each call in a method chain
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/newline-per-chained-call
	 */
	"newline-per-chained-call"?: Linter.RuleEntry<NewlinePerChainedCall>;
	/**
	 * Disallow the use of `alert`, `confirm`, and `prompt`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-alert
	 */
	"no-alert"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `Array` constructors
	 *
	 * @see https://eslint.org/docs/latest/rules/no-array-constructor
	 */
	"no-array-constructor"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using an async function as a Promise executor
	 *
	 * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
	 */
	"no-async-promise-executor"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `await` inside of loops
	 *
	 * @see https://eslint.org/docs/latest/rules/no-await-in-loop
	 */
	"no-await-in-loop"?: Linter.RuleEntry<[]>;
	/**
	 * No await inside Promise statements
	 *
	 * @see https://github.com/hugo-vrijswijk/eslint-plugin-no-await-in-promise/blob/main/docs/rules/no-await-in-promise.md
	 */
	"no-await-in-promise/no-await-in-promise"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow bitwise operators
	 *
	 * @see https://eslint.org/docs/latest/rules/no-bitwise
	 */
	"no-bitwise"?: Linter.RuleEntry<NoBitwise>;
	/**
	 * Disallow use of the `Buffer()` constructor
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-buffer-constructor
	 */
	"no-buffer-constructor"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `arguments.caller` or `arguments.callee`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-caller
	 */
	"no-caller"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow lexical declarations in case clauses
	 *
	 * @see https://eslint.org/docs/latest/rules/no-case-declarations
	 */
	"no-case-declarations"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `catch` clause parameters from shadowing variables in the outer
	 * scope
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-catch-shadow
	 */
	"no-catch-shadow"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow reassigning class members
	 *
	 * @see https://eslint.org/docs/latest/rules/no-class-assign
	 */
	"no-class-assign"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow comparing against -0
	 *
	 * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
	 */
	"no-compare-neg-zero"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow assignment operators in conditional expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-cond-assign
	 */
	"no-cond-assign"?: Linter.RuleEntry<NoCondAssign>;
	/**
	 * Disallow arrow functions where they could be confused with comparisons
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
	 */
	"no-confusing-arrow"?: Linter.RuleEntry<NoConfusingArrow>;
	/**
	 * Disallow the use of `console`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-console
	 */
	"no-console"?: Linter.RuleEntry<NoConsole>;
	/**
	 * Disallow reassigning `const` variables
	 *
	 * @see https://eslint.org/docs/latest/rules/no-const-assign
	 */
	"no-const-assign"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow expressions where the operation doesn't affect the value
	 *
	 * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
	 */
	"no-constant-binary-expression"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow constant expressions in conditions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-constant-condition
	 */
	"no-constant-condition"?: Linter.RuleEntry<NoConstantCondition>;
	/**
	 * Disallow returning value from constructor
	 *
	 * @see https://eslint.org/docs/latest/rules/no-constructor-return
	 */
	"no-constructor-return"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `continue` statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-continue
	 */
	"no-continue"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow control characters in regular expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-control-regex
	 */
	"no-control-regex"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `debugger`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-debugger
	 */
	"no-debugger"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow deleting variables
	 *
	 * @see https://eslint.org/docs/latest/rules/no-delete-var
	 */
	"no-delete-var"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow equal signs explicitly at the beginning of regular expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-div-regex
	 */
	"no-div-regex"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate arguments in `function` definitions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-dupe-args
	 */
	"no-dupe-args"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate class members
	 *
	 * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
	 */
	"no-dupe-class-members"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate conditions in if-else-if chains
	 *
	 * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
	 */
	"no-dupe-else-if"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate keys in object literals
	 *
	 * @see https://eslint.org/docs/latest/rules/no-dupe-keys
	 */
	"no-dupe-keys"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate case labels
	 *
	 * @see https://eslint.org/docs/latest/rules/no-duplicate-case
	 */
	"no-duplicate-case"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate module imports
	 *
	 * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
	 */
	"no-duplicate-imports"?: Linter.RuleEntry<NoDuplicateImports>;
	/**
	 * Disallow `else` blocks after `return` statements in `if` statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-else-return
	 */
	"no-else-return"?: Linter.RuleEntry<NoElseReturn>;
	/**
	 * Disallow empty block statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-empty
	 */
	"no-empty"?: Linter.RuleEntry<NoEmpty>;
	/**
	 * Disallow empty character classes in regular expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-empty-character-class
	 */
	"no-empty-character-class"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty functions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-empty-function
	 */
	"no-empty-function"?: Linter.RuleEntry<NoEmptyFunction>;
	/**
	 * Disallow empty destructuring patterns
	 *
	 * @see https://eslint.org/docs/latest/rules/no-empty-pattern
	 */
	"no-empty-pattern"?: Linter.RuleEntry<NoEmptyPattern>;
	/**
	 * Disallow empty static blocks
	 *
	 * @see https://eslint.org/docs/latest/rules/no-empty-static-block
	 */
	"no-empty-static-block"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `null` comparisons without type-checking operators
	 *
	 * @see https://eslint.org/docs/latest/rules/no-eq-null
	 */
	"no-eq-null"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `eval()`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-eval
	 */
	"no-eval"?: Linter.RuleEntry<NoEval>;
	/**
	 * Disallow reassigning exceptions in `catch` clauses
	 *
	 * @see https://eslint.org/docs/latest/rules/no-ex-assign
	 */
	"no-ex-assign"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow extending native types
	 *
	 * @see https://eslint.org/docs/latest/rules/no-extend-native
	 */
	"no-extend-native"?: Linter.RuleEntry<NoExtendNative>;
	/**
	 * Disallow unnecessary calls to `.bind()`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-extra-bind
	 */
	"no-extra-bind"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary boolean casts
	 *
	 * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
	 */
	"no-extra-boolean-cast"?: Linter.RuleEntry<NoExtraBooleanCast>;
	/**
	 * Disallow unnecessary labels
	 *
	 * @see https://eslint.org/docs/latest/rules/no-extra-label
	 */
	"no-extra-label"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary parentheses
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-extra-parens
	 */
	"no-extra-parens"?: Linter.RuleEntry<NoExtraParens>;
	/**
	 * Disallow unnecessary semicolons
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-extra-semi
	 */
	"no-extra-semi"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow fallthrough of `case` statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-fallthrough
	 */
	"no-fallthrough"?: Linter.RuleEntry<NoFallthrough>;
	/**
	 * Disallow leading or trailing decimal points in numeric literals
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-floating-decimal
	 */
	"no-floating-decimal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow reassigning `function` declarations
	 *
	 * @see https://eslint.org/docs/latest/rules/no-func-assign
	 */
	"no-func-assign"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow assignments to native objects or read-only global variables
	 *
	 * @see https://eslint.org/docs/latest/rules/no-global-assign
	 */
	"no-global-assign"?: Linter.RuleEntry<NoGlobalAssign>;
	/**
	 * Disallow shorthand type conversions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
	 */
	"no-implicit-coercion"?: Linter.RuleEntry<NoImplicitCoercion>;
	/**
	 * Disallow declarations in the global scope
	 *
	 * @see https://eslint.org/docs/latest/rules/no-implicit-globals
	 */
	"no-implicit-globals"?: Linter.RuleEntry<NoImplicitGlobals>;
	/**
	 * Disallow the use of `eval()`-like methods
	 *
	 * @see https://eslint.org/docs/latest/rules/no-implied-eval
	 */
	"no-implied-eval"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow assigning to imported bindings
	 *
	 * @see https://eslint.org/docs/latest/rules/no-import-assign
	 */
	"no-import-assign"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow inline comments after code
	 *
	 * @see https://eslint.org/docs/latest/rules/no-inline-comments
	 */
	"no-inline-comments"?: Linter.RuleEntry<NoInlineComments>;
	/**
	 * Disallow variable or `function` declarations in nested blocks
	 *
	 * @see https://eslint.org/docs/latest/rules/no-inner-declarations
	 */
	"no-inner-declarations"?: Linter.RuleEntry<NoInnerDeclarations>;
	/**
	 * Disallow invalid regular expression strings in `RegExp` constructors
	 *
	 * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
	 */
	"no-invalid-regexp"?: Linter.RuleEntry<NoInvalidRegexp>;
	/**
	 * Disallow use of `this` in contexts where the value of `this` is `undefined`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-invalid-this
	 */
	"no-invalid-this"?: Linter.RuleEntry<NoInvalidThis>;
	/**
	 * Disallow irregular whitespace
	 *
	 * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
	 */
	"no-irregular-whitespace"?: Linter.RuleEntry<NoIrregularWhitespace>;
	/**
	 * Disallow the use of the `__iterator__` property
	 *
	 * @see https://eslint.org/docs/latest/rules/no-iterator
	 */
	"no-iterator"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow labels that share a name with a variable
	 *
	 * @see https://eslint.org/docs/latest/rules/no-label-var
	 */
	"no-label-var"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow labeled statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-labels
	 */
	"no-labels"?: Linter.RuleEntry<NoLabels>;
	/**
	 * Disallow unnecessary nested blocks
	 *
	 * @see https://eslint.org/docs/latest/rules/no-lone-blocks
	 */
	"no-lone-blocks"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `if` statements as the only statement in `else` blocks
	 *
	 * @see https://eslint.org/docs/latest/rules/no-lonely-if
	 */
	"no-lonely-if"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow function declarations that contain unsafe references inside loop
	 * statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-loop-func
	 */
	"no-loop-func"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow literal numbers that lose precision
	 *
	 * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
	 */
	"no-loss-of-precision"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow magic numbers
	 *
	 * @see https://eslint.org/docs/latest/rules/no-magic-numbers
	 */
	"no-magic-numbers"?: Linter.RuleEntry<NoMagicNumbers>;
	/**
	 * Disallow characters which are made with multiple code points in character
	 * class syntax
	 *
	 * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
	 */
	"no-misleading-character-class"?: Linter.RuleEntry<NoMisleadingCharacterClass>;
	/**
	 * Disallow mixed binary operators
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-mixed-operators
	 */
	"no-mixed-operators"?: Linter.RuleEntry<NoMixedOperators>;
	/**
	 * Disallow `require` calls to be mixed with regular variable declarations
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-mixed-requires
	 */
	"no-mixed-requires"?: Linter.RuleEntry<NoMixedRequires>;
	/**
	 * Disallow mixed spaces and tabs for indentation
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
	 */
	"no-mixed-spaces-and-tabs"?: Linter.RuleEntry<NoMixedSpacesAndTabs>;
	/**
	 * Disallow use of chained assignment expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-multi-assign
	 */
	"no-multi-assign"?: Linter.RuleEntry<NoMultiAssign>;
	/**
	 * Disallow multiple spaces
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-multi-spaces
	 */
	"no-multi-spaces"?: Linter.RuleEntry<NoMultiSpaces>;
	/**
	 * Disallow multiline strings
	 *
	 * @see https://eslint.org/docs/latest/rules/no-multi-str
	 */
	"no-multi-str"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow multiple empty lines
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-multiple-empty-lines
	 */
	"no-multiple-empty-lines"?: Linter.RuleEntry<NoMultipleEmptyLines>;
	/**
	 * Disallow assignments to native objects or read-only global variables
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-native-reassign
	 */
	"no-native-reassign"?: Linter.RuleEntry<NoNativeReassign>;
	/**
	 * Disallow negated conditions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-negated-condition
	 */
	"no-negated-condition"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow negating the left operand in `in` expressions
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-negated-in-lhs
	 */
	"no-negated-in-lhs"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow nested ternary expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-nested-ternary
	 */
	"no-nested-ternary"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `new` operators outside of assignments or comparisons
	 *
	 * @see https://eslint.org/docs/latest/rules/no-new
	 */
	"no-new"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `new` operators with the `Function` object
	 *
	 * @see https://eslint.org/docs/latest/rules/no-new-func
	 */
	"no-new-func"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `new` operators with global non-constructor functions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
	 */
	"no-new-native-nonconstructor"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `Object` constructors
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-new-object
	 */
	"no-new-object"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `new` operators with calls to `require`
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-new-require
	 */
	"no-new-require"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `new` operators with the `Symbol` object
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-new-symbol
	 */
	"no-new-symbol"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
	 *
	 * @see https://eslint.org/docs/latest/rules/no-new-wrappers
	 */
	"no-new-wrappers"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `\8` and `\9` escape sequences in string literals
	 *
	 * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
	 */
	"no-nonoctal-decimal-escape"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow calling global object properties as functions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-obj-calls
	 */
	"no-obj-calls"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow calls to the `Object` constructor without an argument
	 *
	 * @see https://eslint.org/docs/latest/rules/no-object-constructor
	 */
	"no-object-constructor"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow octal literals
	 *
	 * @see https://eslint.org/docs/latest/rules/no-octal
	 */
	"no-octal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow octal escape sequences in string literals
	 *
	 * @see https://eslint.org/docs/latest/rules/no-octal-escape
	 */
	"no-octal-escape"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow .only blocks in tests
	 *
	 * @see https://github.com/levibuzolic/eslint-plugin-no-only-tests
	 */
	"no-only-tests/no-only-tests"?: Linter.RuleEntry<NoOnlyTestsNoOnlyTests>;
	/**
	 * Disallow reassigning `function` parameters
	 *
	 * @see https://eslint.org/docs/latest/rules/no-param-reassign
	 */
	"no-param-reassign"?: Linter.RuleEntry<NoParamReassign>;
	/**
	 * Disallow string concatenation with `__dirname` and `__filename`
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-path-concat
	 */
	"no-path-concat"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the unary operators `++` and `--`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-plusplus
	 */
	"no-plusplus"?: Linter.RuleEntry<NoPlusplus>;
	/**
	 * Disallow the use of `process.env`
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-process-env
	 */
	"no-process-env"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `process.exit()`
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-process-exit
	 */
	"no-process-exit"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow returning values from Promise executor functions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
	 */
	"no-promise-executor-return"?: Linter.RuleEntry<NoPromiseExecutorReturn>;
	/**
	 * Disallow the use of the `__proto__` property
	 *
	 * @see https://eslint.org/docs/latest/rules/no-proto
	 */
	"no-proto"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow calling some `Object.prototype` methods directly on objects
	 *
	 * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
	 */
	"no-prototype-builtins"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow variable redeclaration
	 *
	 * @see https://eslint.org/docs/latest/rules/no-redeclare
	 */
	"no-redeclare"?: Linter.RuleEntry<NoRedeclare>;
	/**
	 * Disallow multiple spaces in regular expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-regex-spaces
	 */
	"no-regex-spaces"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow specified names in exports
	 *
	 * @see https://eslint.org/docs/latest/rules/no-restricted-exports
	 */
	"no-restricted-exports"?: Linter.RuleEntry<NoRestrictedExports>;
	/**
	 * Disallow specified global variables
	 *
	 * @see https://eslint.org/docs/latest/rules/no-restricted-globals
	 */
	"no-restricted-globals"?: Linter.RuleEntry<NoRestrictedGlobals>;
	/**
	 * Disallow specified modules when loaded by `import`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-restricted-imports
	 */
	"no-restricted-imports"?: Linter.RuleEntry<NoRestrictedImports>;
	/**
	 * Disallow specified modules when loaded by `require`
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-restricted-modules
	 */
	"no-restricted-modules"?: Linter.RuleEntry<NoRestrictedModules>;
	/**
	 * Disallow certain properties on certain objects
	 *
	 * @see https://eslint.org/docs/latest/rules/no-restricted-properties
	 */
	"no-restricted-properties"?: Linter.RuleEntry<NoRestrictedProperties>;
	/**
	 * Disallow specified syntax
	 *
	 * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
	 */
	"no-restricted-syntax"?: Linter.RuleEntry<NoRestrictedSyntax>;
	/**
	 * Disallow assignment operators in `return` statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-return-assign
	 */
	"no-return-assign"?: Linter.RuleEntry<NoReturnAssign>;
	/**
	 * Disallow unnecessary `return await`
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-return-await
	 */
	"no-return-await"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `javascript:` urls
	 *
	 * @see https://eslint.org/docs/latest/rules/no-script-url
	 */
	"no-script-url"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow assignments where both sides are exactly the same
	 *
	 * @see https://eslint.org/docs/latest/rules/no-self-assign
	 */
	"no-self-assign"?: Linter.RuleEntry<NoSelfAssign>;
	/**
	 * Disallow comparisons where both sides are exactly the same
	 *
	 * @see https://eslint.org/docs/latest/rules/no-self-compare
	 */
	"no-self-compare"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow comma operators
	 *
	 * @see https://eslint.org/docs/latest/rules/no-sequences
	 */
	"no-sequences"?: Linter.RuleEntry<NoSequences>;
	/**
	 * Disallow returning values from setters
	 *
	 * @see https://eslint.org/docs/latest/rules/no-setter-return
	 */
	"no-setter-return"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow variable declarations from shadowing variables declared in the
	 * outer scope
	 *
	 * @see https://eslint.org/docs/latest/rules/no-shadow
	 */
	"no-shadow"?: Linter.RuleEntry<NoShadow>;
	/**
	 * Disallow identifiers from shadowing restricted names
	 *
	 * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
	 */
	"no-shadow-restricted-names"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow spacing between function identifiers and their applications
	 * (deprecated)
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-spaced-func
	 */
	"no-spaced-func"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow sparse arrays
	 *
	 * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
	 */
	"no-sparse-arrays"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow synchronous methods
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-sync
	 */
	"no-sync"?: Linter.RuleEntry<NoSync>;
	/**
	 * Disallow all tabs
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-tabs
	 */
	"no-tabs"?: Linter.RuleEntry<NoTabs>;
	/**
	 * Disallow template literal placeholder syntax in regular strings
	 *
	 * @see https://eslint.org/docs/latest/rules/no-template-curly-in-string
	 */
	"no-template-curly-in-string"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow ternary operators
	 *
	 * @see https://eslint.org/docs/latest/rules/no-ternary
	 */
	"no-ternary"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `this`/`super` before calling `super()` in constructors
	 *
	 * @see https://eslint.org/docs/latest/rules/no-this-before-super
	 */
	"no-this-before-super"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow throwing literals as exceptions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-throw-literal
	 */
	"no-throw-literal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow trailing whitespace at the end of lines
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-trailing-spaces
	 */
	"no-trailing-spaces"?: Linter.RuleEntry<NoTrailingSpaces>;
	/**
	 * Disallow the use of undeclared variables unless mentioned in `/*global *\/`
	 * comments
	 *
	 * @see https://eslint.org/docs/latest/rules/no-undef
	 */
	"no-undef"?: Linter.RuleEntry<NoUndef>;
	/**
	 * Disallow initializing variables to `undefined`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-undef-init
	 */
	"no-undef-init"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `undefined` as an identifier
	 *
	 * @see https://eslint.org/docs/latest/rules/no-undefined
	 */
	"no-undefined"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow dangling underscores in identifiers
	 *
	 * @see https://eslint.org/docs/latest/rules/no-underscore-dangle
	 */
	"no-underscore-dangle"?: Linter.RuleEntry<NoUnderscoreDangle>;
	/**
	 * Disallow confusing multiline expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unexpected-multiline
	 */
	"no-unexpected-multiline"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unmodified loop conditions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
	 */
	"no-unmodified-loop-condition"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow ternary operators when simpler alternatives exist
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
	 */
	"no-unneeded-ternary"?: Linter.RuleEntry<NoUnneededTernary>;
	/**
	 * Disallow unreachable code after `return`, `throw`, `continue`, and `break`
	 * statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unreachable
	 */
	"no-unreachable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow loops with a body that allows only one iteration
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unreachable-loop
	 */
	"no-unreachable-loop"?: Linter.RuleEntry<NoUnreachableLoop>;
	/**
	 * Disallow control flow statements in `finally` blocks
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
	 */
	"no-unsafe-finally"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow negating the left operand of relational operators
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
	 */
	"no-unsafe-negation"?: Linter.RuleEntry<NoUnsafeNegation>;
	/**
	 * Disallow use of optional chaining in contexts where the `undefined` value
	 * is not allowed
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
	 */
	"no-unsafe-optional-chaining"?: Linter.RuleEntry<NoUnsafeOptionalChaining>;
	/**
	 * Disallow unused expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unused-expressions
	 */
	"no-unused-expressions"?: Linter.RuleEntry<NoUnusedExpressions>;
	/**
	 * Disallow unused labels
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unused-labels
	 */
	"no-unused-labels"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused private class members
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
	 */
	"no-unused-private-class-members"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused variables
	 *
	 * @see https://eslint.org/docs/latest/rules/no-unused-vars
	 */
	"no-unused-vars"?: Linter.RuleEntry<NoUnusedVars>;
	/**
	 * Disallow the use of variables before they are defined
	 *
	 * @see https://eslint.org/docs/latest/rules/no-use-before-define
	 */
	"no-use-before-define"?: Linter.RuleEntry<NoUseBeforeDefine>;
	/**
	 * Disallow variable assignments when the value is not used
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-assignment
	 */
	"no-useless-assignment"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow useless backreferences in regular expressions
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-backreference
	 */
	"no-useless-backreference"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary calls to `.call()` and `.apply()`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-call
	 */
	"no-useless-call"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary `catch` clauses
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-catch
	 */
	"no-useless-catch"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary computed property keys in objects and classes
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
	 */
	"no-useless-computed-key"?: Linter.RuleEntry<NoUselessComputedKey>;
	/**
	 * Disallow unnecessary concatenation of literals or template literals
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-concat
	 */
	"no-useless-concat"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary constructors
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-constructor
	 */
	"no-useless-constructor"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary escape characters
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-escape
	 */
	"no-useless-escape"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow renaming import, export, and destructured assignments to the same
	 * name
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-rename
	 */
	"no-useless-rename"?: Linter.RuleEntry<NoUselessRename>;
	/**
	 * Disallow redundant return statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-useless-return
	 */
	"no-useless-return"?: Linter.RuleEntry<[]>;
	/**
	 * Require `let` or `const` instead of `var`
	 *
	 * @see https://eslint.org/docs/latest/rules/no-var
	 */
	"no-var"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `void` operators
	 *
	 * @see https://eslint.org/docs/latest/rules/no-void
	 */
	"no-void"?: Linter.RuleEntry<NoVoid>;
	/**
	 * Disallow specified warning terms in comments
	 *
	 * @see https://eslint.org/docs/latest/rules/no-warning-comments
	 */
	"no-warning-comments"?: Linter.RuleEntry<NoWarningComments>;
	/**
	 * Disallow whitespace before properties
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/no-whitespace-before-property
	 */
	"no-whitespace-before-property"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `with` statements
	 *
	 * @see https://eslint.org/docs/latest/rules/no-with
	 */
	"no-with"?: Linter.RuleEntry<[]>;
	/**
	 * Require `return` statements after callbacks
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md
	 */
	"node/callback-return"?: Linter.RuleEntry<NodeCallbackReturn>;
	/**
	 * Enforce either `module.exports` or `exports`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md
	 */
	"node/exports-style"?: Linter.RuleEntry<NodeExportsStyle>;
	/**
	 * Enforce the style of file extensions in `import` declarations
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md
	 */
	"node/file-extension-in-import"?: Linter.RuleEntry<NodeFileExtensionInImport>;
	/**
	 * Require `require()` calls to be placed at top-level module scope
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md
	 */
	"node/global-require"?: Linter.RuleEntry<[]>;
	/**
	 * Require error handling in callbacks
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md
	 */
	"node/handle-callback-err"?: Linter.RuleEntry<NodeHandleCallbackErr>;
	/**
	 * Require correct usage of hashbang
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
	 */
	"node/hashbang"?: Linter.RuleEntry<NodeHashbang>;
	/**
	 * Enforce Node.js-style error-first callback pattern is followed
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md
	 */
	"node/no-callback-literal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow deprecated APIs
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md
	 */
	"node/no-deprecated-api"?: Linter.RuleEntry<NodeNoDeprecatedApi>;
	/**
	 * Disallow the assignment to `exports`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md
	 */
	"node/no-exports-assign"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `import` declarations which import extraneous modules
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md
	 */
	"node/no-extraneous-import"?: Linter.RuleEntry<NodeNoExtraneousImport>;
	/**
	 * Disallow `require()` expressions which import extraneous modules
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md
	 */
	"node/no-extraneous-require"?: Linter.RuleEntry<NodeNoExtraneousRequire>;
	/**
	 * Disallow third-party modules which are hiding core modules
	 *
	 * @deprecated
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-hide-core-modules.md
	 */
	"node/no-hide-core-modules"?: Linter.RuleEntry<NodeNoHideCoreModules>;
	/**
	 * Disallow `import` declarations which import non-existence modules
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
	 */
	"node/no-missing-import"?: Linter.RuleEntry<NodeNoMissingImport>;
	/**
	 * Disallow `require()` expressions which import non-existence modules
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md
	 */
	"node/no-missing-require"?: Linter.RuleEntry<NodeNoMissingRequire>;
	/**
	 * Disallow `require` calls to be mixed with regular variable declarations
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md
	 */
	"node/no-mixed-requires"?: Linter.RuleEntry<NodeNoMixedRequires>;
	/**
	 * Disallow `new` operators with calls to `require`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md
	 */
	"node/no-new-require"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow string concatenation with `__dirname` and `__filename`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md
	 */
	"node/no-path-concat"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `process.env`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md
	 */
	"node/no-process-env"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `process.exit()`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md
	 */
	"node/no-process-exit"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow specified modules when loaded by `import` declarations
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md
	 */
	"node/no-restricted-import"?: Linter.RuleEntry<NodeNoRestrictedImport>;
	/**
	 * Disallow specified modules when loaded by `require`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md
	 */
	"node/no-restricted-require"?: Linter.RuleEntry<NodeNoRestrictedRequire>;
	/**
	 * Disallow synchronous methods
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md
	 */
	"node/no-sync"?: Linter.RuleEntry<NodeNoSync>;
	/**
	 * Disallow `bin` files that npm ignores
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md
	 */
	"node/no-unpublished-bin"?: Linter.RuleEntry<NodeNoUnpublishedBin>;
	/**
	 * Disallow `import` declarations which import private modules
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md
	 */
	"node/no-unpublished-import"?: Linter.RuleEntry<NodeNoUnpublishedImport>;
	/**
	 * Disallow `require()` expressions which import private modules
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md
	 */
	"node/no-unpublished-require"?: Linter.RuleEntry<NodeNoUnpublishedRequire>;
	/**
	 * Disallow unsupported ECMAScript built-ins on the specified version
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md
	 */
	"node/no-unsupported-features/es-builtins"?: Linter.RuleEntry<NodeNoUnsupportedFeaturesEsBuiltins>;
	/**
	 * Disallow unsupported ECMAScript syntax on the specified version
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
	 */
	"node/no-unsupported-features/es-syntax"?: Linter.RuleEntry<NodeNoUnsupportedFeaturesEsSyntax>;
	/**
	 * Disallow unsupported Node.js built-in APIs on the specified version
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md
	 */
	"node/no-unsupported-features/node-builtins"?: Linter.RuleEntry<NodeNoUnsupportedFeaturesNodeBuiltins>;
	/**
	 * Enforce either `Buffer` or `require("buffer").Buffer`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md
	 */
	"node/prefer-global/buffer"?: Linter.RuleEntry<NodePreferGlobalBuffer>;
	/**
	 * Enforce either `console` or `require("console")`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/console.md
	 */
	"node/prefer-global/console"?: Linter.RuleEntry<NodePreferGlobalConsole>;
	/**
	 * Enforce either `process` or `require("process")`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md
	 */
	"node/prefer-global/process"?: Linter.RuleEntry<NodePreferGlobalProcess>;
	/**
	 * Enforce either `TextDecoder` or `require("util").TextDecoder`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-decoder.md
	 */
	"node/prefer-global/text-decoder"?: Linter.RuleEntry<NodePreferGlobalTextDecoder>;
	/**
	 * Enforce either `TextEncoder` or `require("util").TextEncoder`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-encoder.md
	 */
	"node/prefer-global/text-encoder"?: Linter.RuleEntry<NodePreferGlobalTextEncoder>;
	/**
	 * Enforce either `URL` or `require("url").URL`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url.md
	 */
	"node/prefer-global/url"?: Linter.RuleEntry<NodePreferGlobalUrl>;
	/**
	 * Enforce either `URLSearchParams` or `require("url").URLSearchParams`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md
	 */
	"node/prefer-global/url-search-params"?: Linter.RuleEntry<NodePreferGlobalUrlSearchParams>;
	/**
	 * Enforce using the `node:` protocol when importing Node.js builtin modules.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md
	 */
	"node/prefer-node-protocol"?: Linter.RuleEntry<NodePreferNodeProtocol>;
	/**
	 * Enforce `require("dns").promises`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/dns.md
	 */
	"node/prefer-promises/dns"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce `require("fs").promises`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md
	 */
	"node/prefer-promises/fs"?: Linter.RuleEntry<[]>;
	/**
	 * Require that `process.exit()` expressions use the same code path as `throw`
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md
	 */
	"node/process-exit-as-throw"?: Linter.RuleEntry<[]>;
	/**
	 * Require correct usage of hashbang
	 *
	 * @deprecated
	 * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
	 */
	"node/shebang"?: Linter.RuleEntry<NodeShebang>;
	/**
	 * Enforce the location of single-line statements
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/nonblock-statement-body-position
	 */
	"nonblock-statement-body-position"?: Linter.RuleEntry<NonblockStatementBodyPosition>;
	/**
	 * Enforce consistent line breaks after opening and before closing braces
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/object-curly-newline
	 */
	"object-curly-newline"?: Linter.RuleEntry<ObjectCurlyNewline>;
	/**
	 * Enforce consistent spacing inside braces
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/object-curly-spacing
	 */
	"object-curly-spacing"?: Linter.RuleEntry<ObjectCurlySpacing>;
	/**
	 * Enforce placing object properties on separate lines
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/object-property-newline
	 */
	"object-property-newline"?: Linter.RuleEntry<ObjectPropertyNewline>;
	/**
	 * Require or disallow method and property shorthand syntax for object
	 * literals
	 *
	 * @see https://eslint.org/docs/latest/rules/object-shorthand
	 */
	"object-shorthand"?: Linter.RuleEntry<ObjectShorthand>;
	/**
	 * Enforce variables to be declared either together or separately in functions
	 *
	 * @see https://eslint.org/docs/latest/rules/one-var
	 */
	"one-var"?: Linter.RuleEntry<OneVar>;
	/**
	 * Require or disallow newlines around variable declarations
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/one-var-declaration-per-line
	 */
	"one-var-declaration-per-line"?: Linter.RuleEntry<OneVarDeclarationPerLine>;
	/**
	 * Require or disallow assignment operator shorthand where possible
	 *
	 * @see https://eslint.org/docs/latest/rules/operator-assignment
	 */
	"operator-assignment"?: Linter.RuleEntry<OperatorAssignment>;
	/**
	 * Enforce consistent linebreak style for operators
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/operator-linebreak
	 */
	"operator-linebreak"?: Linter.RuleEntry<OperatorLinebreak>;
	/**
	 * Require or disallow padding within blocks
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/padded-blocks
	 */
	"padded-blocks"?: Linter.RuleEntry<PaddedBlocks>;
	/**
	 * Require or disallow padding lines between statements
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/padding-line-between-statements
	 */
	"padding-line-between-statements"?: Linter.RuleEntry<PaddingLineBetweenStatements>;
	/**
	 * Require using arrow functions for callbacks
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
	 */
	"prefer-arrow-callback"?: Linter.RuleEntry<PreferArrowCallback>;
	/**
	 * Require `const` declarations for variables that are never reassigned after
	 * declared
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-const
	 */
	"prefer-const"?: Linter.RuleEntry<PreferConst>;
	/**
	 * Require destructuring from arrays and/or objects
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-destructuring
	 */
	"prefer-destructuring"?: Linter.RuleEntry<PreferDestructuring>;
	/**
	 * Disallow the use of `Math.pow` in favor of the `**` operator
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
	 */
	"prefer-exponentiation-operator"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using named capture group in regular expression
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-named-capture-group
	 */
	"prefer-named-capture-group"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal,
	 * and hexadecimal literals
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-numeric-literals
	 */
	"prefer-numeric-literals"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of
	 * `Object.hasOwn()`
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-object-has-own
	 */
	"prefer-object-has-own"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using Object.assign with an object literal as the first argument
	 * and prefer the use of object spread instead
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-object-spread
	 */
	"prefer-object-spread"?: Linter.RuleEntry<[]>;
	/**
	 * Require using Error objects as Promise rejection reasons
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
	 */
	"prefer-promise-reject-errors"?: Linter.RuleEntry<PreferPromiseRejectErrors>;
	/**
	 * Require `Reflect` methods where applicable
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/prefer-reflect
	 */
	"prefer-reflect"?: Linter.RuleEntry<PreferReflect>;
	/**
	 * Disallow use of the `RegExp` constructor in favor of regular expression
	 * literals
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-regex-literals
	 */
	"prefer-regex-literals"?: Linter.RuleEntry<PreferRegexLiterals>;
	/**
	 * Require rest parameters instead of `arguments`
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-rest-params
	 */
	"prefer-rest-params"?: Linter.RuleEntry<[]>;
	/**
	 * Require spread operators instead of `.apply()`
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-spread
	 */
	"prefer-spread"?: Linter.RuleEntry<[]>;
	/**
	 * Require template literals instead of string concatenation
	 *
	 * @see https://eslint.org/docs/latest/rules/prefer-template
	 */
	"prefer-template"?: Linter.RuleEntry<[]>;
	/**
	 * Require returning inside each `then()` to create readable and reusable
	 * Promise chains.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md
	 */
	"promise/always-return"?: Linter.RuleEntry<PromiseAlwaysReturn>;
	/**
	 * Disallow creating `new` promises outside of utility libs (use [pify][]
	 * instead).
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md
	 */
	"promise/avoid-new"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of `catch()` on un-returned promises.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md
	 */
	"promise/catch-or-return"?: Linter.RuleEntry<PromiseCatchOrReturn>;
	/**
	 * Disallow calling `cb()` inside of a `then()` (use [nodeify][] instead).
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md
	 */
	"promise/no-callback-in-promise"?: Linter.RuleEntry<PromiseNoCallbackInPromise>;
	/**
	 * Disallow creating new promises with paths that resolve multiple times.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md
	 */
	"promise/no-multiple-resolved"?: Linter.RuleEntry<[]>;
	/**
	 * Require creating a `Promise` constructor before using it in an ES5
	 * environment.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md
	 */
	"promise/no-native"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow nested `then()` or `catch()` statements.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md
	 */
	"promise/no-nesting"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow calling `new` on a Promise static method.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md
	 */
	"promise/no-new-statics"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using promises inside of callbacks.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md
	 */
	"promise/no-promise-in-callback"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow return statements in `finally()`.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md
	 */
	"promise/no-return-in-finally"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not
	 * needed.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md
	 */
	"promise/no-return-wrap"?: Linter.RuleEntry<PromiseNoReturnWrap>;
	/**
	 * Enforce consistent param names and ordering when creating new promises.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md
	 */
	"promise/param-names"?: Linter.RuleEntry<PromiseParamNames>;
	/**
	 * Prefer async/await to the callback pattern.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md
	 */
	"promise/prefer-await-to-callbacks"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise
	 * values.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md
	 */
	"promise/prefer-await-to-then"?: Linter.RuleEntry<[]>;
	/**
	 * Enforces the proper number of arguments are passed to Promise functions.
	 *
	 * @see https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md
	 */
	"promise/valid-params"?: Linter.RuleEntry<[]>;
	/**
	 * Require quotes around object literal property names
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/quote-props
	 */
	"quote-props"?: Linter.RuleEntry<QuoteProps>;
	/**
	 * Enforce the consistent use of either backticks, double, or single quotes
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/quotes
	 */
	"quotes"?: Linter.RuleEntry<Quotes>;
	/**
	 * Enforce the consistent use of the radix argument when using `parseInt()`
	 *
	 * @see https://eslint.org/docs/latest/rules/radix
	 */
	"radix"?: Linter.RuleEntry<Radix>;
	/**
	 * Disallow confusing quantifiers
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html
	 */
	"regexp/confusing-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent escaping of control characters
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html
	 */
	"regexp/control-character-escape"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce single grapheme in string literal
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/grapheme-string-literal.html
	 */
	"regexp/grapheme-string-literal"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent usage of hexadecimal escape
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/hexadecimal-escape.html
	 */
	"regexp/hexadecimal-escape"?: Linter.RuleEntry<RegexpHexadecimalEscape>;
	/**
	 * Enforce into your favorite case
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/letter-case.html
	 */
	"regexp/letter-case"?: Linter.RuleEntry<RegexpLetterCase>;
	/**
	 * Enforce match any character style
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html
	 */
	"regexp/match-any"?: Linter.RuleEntry<RegexpMatchAny>;
	/**
	 * Enforce use of escapes on negation
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html
	 */
	"regexp/negation"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow elements that contradict assertions
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html
	 */
	"regexp/no-contradiction-with-assertion"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow control characters
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html
	 */
	"regexp/no-control-character"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate characters in the RegExp character class
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html
	 */
	"regexp/no-dupe-characters-character-class"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate disjunctions
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html
	 */
	"regexp/no-dupe-disjunctions"?: Linter.RuleEntry<RegexpNoDupeDisjunctions>;
	/**
	 * Disallow alternatives without elements
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html
	 */
	"regexp/no-empty-alternative"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow capturing group that captures empty.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html
	 */
	"regexp/no-empty-capturing-group"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow character classes that match no characters
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html
	 */
	"regexp/no-empty-character-class"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty group
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html
	 */
	"regexp/no-empty-group"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty lookahead assertion or empty lookbehind assertion
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html
	 */
	"regexp/no-empty-lookarounds-assertion"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty string literals in character classes
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html
	 */
	"regexp/no-empty-string-literal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow escape backspace (`[\b]`)
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html
	 */
	"regexp/no-escape-backspace"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary nested lookaround assertions
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html
	 */
	"regexp/no-extra-lookaround-assertions"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow invalid regular expression strings in `RegExp` constructors
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html
	 */
	"regexp/no-invalid-regexp"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow invisible raw character
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html
	 */
	"regexp/no-invisible-character"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow lazy quantifiers at the end of an expression
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html
	 */
	"regexp/no-lazy-ends"?: Linter.RuleEntry<RegexpNoLazyEnds>;
	/**
	 * Disallow legacy RegExp features
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html
	 */
	"regexp/no-legacy-features"?: Linter.RuleEntry<RegexpNoLegacyFeatures>;
	/**
	 * Disallow capturing groups that do not behave as one would expect
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html
	 */
	"regexp/no-misleading-capturing-group"?: Linter.RuleEntry<RegexpNoMisleadingCapturingGroup>;
	/**
	 * Disallow multi-code-point characters in character classes and quantifiers
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html
	 */
	"regexp/no-misleading-unicode-character"?: Linter.RuleEntry<RegexpNoMisleadingUnicodeCharacter>;
	/**
	 * Disallow missing `g` flag in patterns used in `String#matchAll` and
	 * `String#replaceAll`
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html
	 */
	"regexp/no-missing-g-flag"?: Linter.RuleEntry<RegexpNoMissingGFlag>;
	/**
	 * Disallow non-standard flags
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html
	 */
	"regexp/no-non-standard-flag"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow obscure character ranges
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html
	 */
	"regexp/no-obscure-range"?: Linter.RuleEntry<RegexpNoObscureRange>;
	/**
	 * Disallow octal escape sequence
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-octal.html
	 */
	"regexp/no-octal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow optional assertions
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html
	 */
	"regexp/no-optional-assertion"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow backreferences that reference a group that might not be matched
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html
	 */
	"regexp/no-potentially-useless-backreference"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow standalone backslashes (`\`)
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-standalone-backslash.html
	 */
	"regexp/no-standalone-backslash"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow exponential and polynomial backtracking
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html
	 */
	"regexp/no-super-linear-backtracking"?: Linter.RuleEntry<RegexpNoSuperLinearBacktracking>;
	/**
	 * Disallow quantifiers that cause quadratic moves
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html
	 */
	"regexp/no-super-linear-move"?: Linter.RuleEntry<RegexpNoSuperLinearMove>;
	/**
	 * Disallow trivially nested assertions
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html
	 */
	"regexp/no-trivially-nested-assertion"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow nested quantifiers that can be rewritten as one quantifier
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html
	 */
	"regexp/no-trivially-nested-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused capturing group
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html
	 */
	"regexp/no-unused-capturing-group"?: Linter.RuleEntry<RegexpNoUnusedCapturingGroup>;
	/**
	 * Disallow assertions that are known to always accept (or reject)
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html
	 */
	"regexp/no-useless-assertions"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow useless backreferences in regular expressions
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html
	 */
	"regexp/no-useless-backreference"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow character class with one character
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html
	 */
	"regexp/no-useless-character-class"?: Linter.RuleEntry<RegexpNoUselessCharacterClass>;
	/**
	 * Disallow useless `$` replacements in replacement string
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html
	 */
	"regexp/no-useless-dollar-replacements"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary escape characters in RegExp
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html
	 */
	"regexp/no-useless-escape"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary regex flags
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html
	 */
	"regexp/no-useless-flag"?: Linter.RuleEntry<RegexpNoUselessFlag>;
	/**
	 * Disallow unnecessarily non-greedy quantifiers
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html
	 */
	"regexp/no-useless-lazy"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary non-capturing group
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html
	 */
	"regexp/no-useless-non-capturing-group"?: Linter.RuleEntry<RegexpNoUselessNonCapturingGroup>;
	/**
	 * Disallow quantifiers that can be removed
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html
	 */
	"regexp/no-useless-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary character ranges
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html
	 */
	"regexp/no-useless-range"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary elements in expression character classes
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html
	 */
	"regexp/no-useless-set-operand"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow string disjunction of single characters in `\q{...}`
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html
	 */
	"regexp/no-useless-string-literal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary `{n,m}` quantifier
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html
	 */
	"regexp/no-useless-two-nums-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow quantifiers with a maximum of zero
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html
	 */
	"regexp/no-zero-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the alternatives of lookarounds that end with a non-constant
	 * quantifier
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html
	 */
	"regexp/optimal-lookaround-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Require optimal quantifiers for concatenated quantifiers
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html
	 */
	"regexp/optimal-quantifier-concatenation"?: Linter.RuleEntry<RegexpOptimalQuantifierConcatenation>;
	/**
	 * Enforce using character class
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html
	 */
	"regexp/prefer-character-class"?: Linter.RuleEntry<RegexpPreferCharacterClass>;
	/**
	 * Enforce using `\d`
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html
	 */
	"regexp/prefer-d"?: Linter.RuleEntry<RegexpPreferD>;
	/**
	 * Enforces escape of replacement `$` character (`$$`).
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-escape-replacement-dollar-char.html
	 */
	"regexp/prefer-escape-replacement-dollar-char"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer lookarounds over capturing group that do not replace
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-lookaround.html
	 */
	"regexp/prefer-lookaround"?: Linter.RuleEntry<RegexpPreferLookaround>;
	/**
	 * Enforce using named backreferences
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-backreference.html
	 */
	"regexp/prefer-named-backreference"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using named capture groups
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-capture-group.html
	 */
	"regexp/prefer-named-capture-group"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using named replacement
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-replacement.html
	 */
	"regexp/prefer-named-replacement"?: Linter.RuleEntry<RegexpPreferNamedReplacement>;
	/**
	 * Enforce using `+` quantifier
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html
	 */
	"regexp/prefer-plus-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer predefined assertion over equivalent lookarounds
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html
	 */
	"regexp/prefer-predefined-assertion"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using quantifier
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-quantifier.html
	 */
	"regexp/prefer-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using `?` quantifier
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html
	 */
	"regexp/prefer-question-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using character class range
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html
	 */
	"regexp/prefer-range"?: Linter.RuleEntry<RegexpPreferRange>;
	/**
	 * Enforce that `RegExp#exec` is used instead of `String#match` if no global
	 * flag is provided
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-exec.html
	 */
	"regexp/prefer-regexp-exec"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce that `RegExp#test` is used instead of `String#match` and
	 * `RegExp#exec`
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-test.html
	 */
	"regexp/prefer-regexp-test"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using result array `groups`
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-result-array-groups.html
	 */
	"regexp/prefer-result-array-groups"?: Linter.RuleEntry<RegexpPreferResultArrayGroups>;
	/**
	 * Prefer character class set operations instead of lookarounds
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html
	 */
	"regexp/prefer-set-operation"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using `*` quantifier
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html
	 */
	"regexp/prefer-star-quantifier"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce use of unicode codepoint escapes
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html
	 */
	"regexp/prefer-unicode-codepoint-escapes"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using `\w`
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html
	 */
	"regexp/prefer-w"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of the `u` flag
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-regexp.html
	 */
	"regexp/require-unicode-regexp"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of the `v` flag
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-sets-regexp.html
	 */
	"regexp/require-unicode-sets-regexp"?: Linter.RuleEntry<[]>;
	/**
	 * Require simplify set operations
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html
	 */
	"regexp/simplify-set-operations"?: Linter.RuleEntry<[]>;
	/**
	 * Sort alternatives if order doesn't matter
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-alternatives.html
	 */
	"regexp/sort-alternatives"?: Linter.RuleEntry<[]>;
	/**
	 * Enforces elements order in character class
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-character-class-elements.html
	 */
	"regexp/sort-character-class-elements"?: Linter.RuleEntry<RegexpSortCharacterClassElements>;
	/**
	 * Require regex flags to be sorted
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html
	 */
	"regexp/sort-flags"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow not strictly valid regular expressions
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html
	 */
	"regexp/strict"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent usage of unicode escape or unicode codepoint escape
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-escape.html
	 */
	"regexp/unicode-escape"?: Linter.RuleEntry<RegexpUnicodeEscape>;
	/**
	 * Enforce consistent naming of unicode properties
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-property.html
	 */
	"regexp/unicode-property"?: Linter.RuleEntry<RegexpUnicodeProperty>;
	/**
	 * Use the `i` flag if it simplifies the pattern
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html
	 */
	"regexp/use-ignore-case"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow assignments that can lead to race conditions due to usage of
	 * `await` or `yield`
	 *
	 * @see https://eslint.org/docs/latest/rules/require-atomic-updates
	 */
	"require-atomic-updates"?: Linter.RuleEntry<RequireAtomicUpdates>;
	/**
	 * Disallow async functions which have no `await` expression
	 *
	 * @see https://eslint.org/docs/latest/rules/require-await
	 */
	"require-await"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of `u` or `v` flag on RegExp
	 *
	 * @see https://eslint.org/docs/latest/rules/require-unicode-regexp
	 */
	"require-unicode-regexp"?: Linter.RuleEntry<[]>;
	/**
	 * Require generator functions to contain `yield`
	 *
	 * @see https://eslint.org/docs/latest/rules/require-yield
	 */
	"require-yield"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce spacing between rest and spread operators and their expressions
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/rest-spread-spacing
	 */
	"rest-spread-spacing"?: Linter.RuleEntry<RestSpreadSpacing>;
	/**
	 * Require or disallow semicolons instead of ASI
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/semi
	 */
	"semi"?: Linter.RuleEntry<Semi>;
	/**
	 * Enforce consistent spacing before and after semicolons
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/semi-spacing
	 */
	"semi-spacing"?: Linter.RuleEntry<SemiSpacing>;
	/**
	 * Enforce location of semicolons
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/semi-style
	 */
	"semi-style"?: Linter.RuleEntry<SemiStyle>;
	/**
	 * Enforce function style.
	 *
	 * @see function-style
	 */
	"so1ve/function-style"?: Linter.RuleEntry<[]>;
	/**
	 * Fix duplication in imports.
	 *
	 * @see import-dedupe
	 */
	"so1ve/import-dedupe"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow import promises as.
	 *
	 * @see no-import-promises-as
	 */
	"so1ve/no-import-promises-as"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow inline type import.
	 *
	 * @see no-inline-type-import
	 */
	"so1ve/no-inline-type-import"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow negated comparison.
	 *
	 * @see no-negated-comparison
	 */
	"so1ve/no-negated-comparison"?: Linter.RuleEntry<[]>;
	/**
	 * No useless template string.
	 *
	 * @see no-useless-template-string
	 */
	"so1ve/no-useless-template-string"?: Linter.RuleEntry<[]>;
	/**
	 * Pad after the last import.
	 *
	 * @see pad-after-last-import
	 */
	"so1ve/pad-after-last-import"?: Linter.RuleEntry<[]>;
	/**
	 * Require using async keyword with await.
	 *
	 * @see require-async-with-await
	 */
	"so1ve/require-async-with-await"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow early returns in components. Solid components only run once, and
	 * so conditionals should be inside JSX.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/components-return-once.md
	 */
	"solid/components-return-once"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce naming DOM element event handlers consistently and prevent Solid's
	 * analysis from misunderstanding whether a prop should be an event handler.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/event-handlers.md
	 */
	"solid/event-handlers"?: Linter.RuleEntry<SolidEventHandlers>;
	/**
	 * Enforce consistent imports from "solid-js", "solid-js/web", and
	 * "solid-js/store".
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/imports.md
	 */
	"solid/imports"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow passing the same prop twice in JSX.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-duplicate-props.md
	 */
	"solid/jsx-no-duplicate-props"?: Linter.RuleEntry<SolidJsxNoDuplicateProps>;
	/**
	 * Disallow javascript: URLs.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-script-url.md
	 */
	"solid/jsx-no-script-url"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow references to undefined variables in JSX. Handles custom
	 * directives.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-undef.md
	 */
	"solid/jsx-no-undef"?: Linter.RuleEntry<SolidJsxNoUndef>;
	/**
	 * Prevent variables used in JSX from being marked as unused.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-uses-vars.md
	 */
	"solid/jsx-uses-vars"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usage of type-unsafe event handlers.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-array-handlers.md
	 */
	"solid/no-array-handlers"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow destructuring props. In Solid, props must be used with property
	 * accesses (`props.foo`) to preserve reactivity. This rule only tracks
	 * destructuring in the parameter list.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-destructure.md
	 */
	"solid/no-destructure"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usage of the innerHTML attribute, which can often lead to security
	 * vulnerabilities.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-innerhtml.md
	 */
	"solid/no-innerhtml"?: Linter.RuleEntry<SolidNoInnerhtml>;
	/**
	 * Disallow usage of APIs that use ES6 Proxies, only to target environments
	 * that don't support them.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-proxy-apis.md
	 */
	"solid/no-proxy-apis"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usage of dependency arrays in `createEffect` and `createMemo`.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-deps.md
	 */
	"solid/no-react-deps"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usage of React-specific `className`/`htmlFor` props, which were
	 * deprecated in v1.4.0.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-specific-props.md
	 */
	"solid/no-react-specific-props"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using only Solid-specific namespaced attribute names (i.e. `'on:'`
	 * in `<div on:click={...} />`).
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-unknown-namespaces.md
	 */
	"solid/no-unknown-namespaces"?: Linter.RuleEntry<SolidNoUnknownNamespaces>;
	/**
	 * Enforce using the classlist prop over importing a classnames helper. The
	 * classlist prop accepts an object `{ [class: string]: boolean }` just like
	 * classnames.
	 *
	 * @deprecated
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-classlist.md
	 */
	"solid/prefer-classlist"?: Linter.RuleEntry<SolidPreferClasslist>;
	/**
	 * Enforce using Solid's `<For />` component for mapping an array to JSX
	 * elements.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-for.md
	 */
	"solid/prefer-for"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using Solid's `<Show />` component for conditionally showing
	 * content. Solid's compiler covers this case, so it's a stylistic rule only.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-show.md
	 */
	"solid/prefer-show"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce that reactivity (props, signals, memos, etc.) is properly used, so
	 * changes in those values will be tracked and update the view as expected.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/reactivity.md
	 */
	"solid/reactivity"?: Linter.RuleEntry<SolidReactivity>;
	/**
	 * Disallow extra closing tags for components without children.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/self-closing-comp.md
	 */
	"solid/self-closing-comp"?: Linter.RuleEntry<SolidSelfClosingComp>;
	/**
	 * Require CSS properties in the `style` prop to be valid and kebab-cased (ex.
	 * 'font-size'), not camel-cased (ex. 'fontSize') like in React, and that
	 * property values with dimensions are strings, not numbers with implicit 'px'
	 * units.
	 *
	 * @see https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/style-prop.md
	 */
	"solid/style-prop"?: Linter.RuleEntry<SolidStyleProp>;
	/**
	 * Enforce sorted import declarations within modules
	 *
	 * @see https://eslint.org/docs/latest/rules/sort-imports
	 */
	"sort-imports"?: Linter.RuleEntry<SortImports>;
	/**
	 * @see https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order
	 */
	"sort-imports/exports"?: Linter.RuleEntry<[]>;
	/**
	 * @see https://github.com/lydell/eslint-plugin-simple-import-sort#sort-order
	 */
	"sort-imports/imports"?: Linter.RuleEntry<SortImportsImports>;
	/**
	 * Require object keys to be sorted
	 *
	 * @see https://eslint.org/docs/latest/rules/sort-keys
	 */
	"sort-keys"?: Linter.RuleEntry<SortKeys>;
	/**
	 * Require variables within the same declaration block to be sorted
	 *
	 * @see https://eslint.org/docs/latest/rules/sort-vars
	 */
	"sort-vars"?: Linter.RuleEntry<SortVars>;
	/**
	 * Enforce consistent spacing before blocks
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/space-before-blocks
	 */
	"space-before-blocks"?: Linter.RuleEntry<SpaceBeforeBlocks>;
	/**
	 * Enforce consistent spacing before `function` definition opening parenthesis
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/space-before-function-paren
	 */
	"space-before-function-paren"?: Linter.RuleEntry<SpaceBeforeFunctionParen>;
	/**
	 * Enforce consistent spacing inside parentheses
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/space-in-parens
	 */
	"space-in-parens"?: Linter.RuleEntry<SpaceInParens>;
	/**
	 * Require spacing around infix operators
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/space-infix-ops
	 */
	"space-infix-ops"?: Linter.RuleEntry<SpaceInfixOps>;
	/**
	 * Enforce consistent spacing before or after unary operators
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/space-unary-ops
	 */
	"space-unary-ops"?: Linter.RuleEntry<SpaceUnaryOps>;
	/**
	 * Enforce consistent spacing after the `//` or `/*` in a comment
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/spaced-comment
	 */
	"spaced-comment"?: Linter.RuleEntry<SpacedComment>;
	/**
	 * Require or disallow strict mode directives
	 *
	 * @see https://eslint.org/docs/latest/rules/strict
	 */
	"strict"?: Linter.RuleEntry<Strict>;
	/**
	 * Enforce linebreaks after opening and before closing array brackets
	 *
	 * @see https://eslint.style/rules/js/array-bracket-newline
	 */
	"style/array-bracket-newline"?: Linter.RuleEntry<StyleArrayBracketNewline>;
	/**
	 * Enforce consistent spacing inside array brackets
	 *
	 * @see https://eslint.style/rules/js/array-bracket-spacing
	 */
	"style/array-bracket-spacing"?: Linter.RuleEntry<StyleArrayBracketSpacing>;
	/**
	 * Enforce line breaks after each array element
	 *
	 * @see https://eslint.style/rules/js/array-element-newline
	 */
	"style/array-element-newline"?: Linter.RuleEntry<StyleArrayElementNewline>;
	/**
	 * Require parentheses around arrow function arguments
	 *
	 * @see https://eslint.style/rules/js/arrow-parens
	 */
	"style/arrow-parens"?: Linter.RuleEntry<StyleArrowParens>;
	/**
	 * Enforce consistent spacing before and after the arrow in arrow functions
	 *
	 * @see https://eslint.style/rules/js/arrow-spacing
	 */
	"style/arrow-spacing"?: Linter.RuleEntry<StyleArrowSpacing>;
	/**
	 * Disallow or enforce spaces inside of blocks after opening block and before
	 * closing block
	 *
	 * @see https://eslint.style/rules/ts/block-spacing
	 */
	"style/block-spacing"?: Linter.RuleEntry<StyleBlockSpacing>;
	/**
	 * Enforce consistent brace style for blocks
	 *
	 * @see https://eslint.style/rules/ts/brace-style
	 */
	"style/brace-style"?: Linter.RuleEntry<StyleBraceStyle>;
	/**
	 * Require or disallow trailing commas
	 *
	 * @see https://eslint.style/rules/ts/comma-dangle
	 */
	"style/comma-dangle"?: Linter.RuleEntry<StyleCommaDangle>;
	/**
	 * Enforce consistent spacing before and after commas
	 *
	 * @see https://eslint.style/rules/ts/comma-spacing
	 */
	"style/comma-spacing"?: Linter.RuleEntry<StyleCommaSpacing>;
	/**
	 * Enforce consistent comma style
	 *
	 * @see https://eslint.style/rules/js/comma-style
	 */
	"style/comma-style"?: Linter.RuleEntry<StyleCommaStyle>;
	/**
	 * Enforce consistent spacing inside computed property brackets
	 *
	 * @see https://eslint.style/rules/js/computed-property-spacing
	 */
	"style/computed-property-spacing"?: Linter.RuleEntry<StyleComputedPropertySpacing>;
	/**
	 * Enforce consistent newlines before and after dots
	 *
	 * @see https://eslint.style/rules/js/dot-location
	 */
	"style/dot-location"?: Linter.RuleEntry<StyleDotLocation>;
	/**
	 * Require or disallow newline at the end of files
	 *
	 * @see https://eslint.style/rules/js/eol-last
	 */
	"style/eol-last"?: Linter.RuleEntry<StyleEolLast>;
	/**
	 * Require or disallow spacing between function identifiers and their
	 * invocations
	 *
	 * @see https://eslint.style/rules/ts/function-call-spacing
	 */
	"style/func-call-spacing"?: Linter.RuleEntry<StyleFuncCallSpacing>;
	/**
	 * Enforce line breaks between arguments of a function call
	 *
	 * @see https://eslint.style/rules/js/function-call-argument-newline
	 */
	"style/function-call-argument-newline"?: Linter.RuleEntry<StyleFunctionCallArgumentNewline>;
	/**
	 * Require or disallow spacing between function identifiers and their
	 * invocations
	 *
	 * @see https://eslint.style/rules/ts/function-call-spacing
	 */
	"style/function-call-spacing"?: Linter.RuleEntry<StyleFunctionCallSpacing>;
	/**
	 * Enforce consistent line breaks inside function parentheses
	 *
	 * @see https://eslint.style/rules/js/function-paren-newline
	 */
	"style/function-paren-newline"?: Linter.RuleEntry<StyleFunctionParenNewline>;
	/**
	 * Enforce consistent spacing around `*` operators in generator functions
	 *
	 * @see https://eslint.style/rules/js/generator-star-spacing
	 */
	"style/generator-star-spacing"?: Linter.RuleEntry<StyleGeneratorStarSpacing>;
	/**
	 * Enforce the location of arrow function bodies
	 *
	 * @see https://eslint.style/rules/js/implicit-arrow-linebreak
	 */
	"style/implicit-arrow-linebreak"?: Linter.RuleEntry<StyleImplicitArrowLinebreak>;
	/**
	 * Enforce consistent indentation
	 *
	 * @see https://eslint.style/rules/ts/indent
	 */
	"style/indent"?: Linter.RuleEntry<StyleIndent>;
	/**
	 * Indentation for binary operators
	 *
	 * @see https://eslint.style/rules/plus/indent-binary-ops
	 */
	"style/indent-binary-ops"?: Linter.RuleEntry<StyleIndentBinaryOps>;
	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and
	 * expressions
	 *
	 * @see https://eslint.style/rules/jsx/jsx-child-element-spacing
	 */
	"style/jsx-child-element-spacing"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce closing bracket location in JSX
	 *
	 * @see https://eslint.style/rules/jsx/jsx-closing-bracket-location
	 */
	"style/jsx-closing-bracket-location"?: Linter.RuleEntry<StyleJsxClosingBracketLocation>;
	/**
	 * Enforce closing tag location for multiline JSX
	 *
	 * @see https://eslint.style/rules/jsx/jsx-closing-tag-location
	 */
	"style/jsx-closing-tag-location"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary JSX expressions when literals alone are sufficient or
	 * enforce JSX expressions on literals in JSX children or attributes
	 *
	 * @see https://eslint.style/rules/jsx/jsx-curly-brace-presence
	 */
	"style/jsx-curly-brace-presence"?: Linter.RuleEntry<StyleJsxCurlyBracePresence>;
	/**
	 * Enforce consistent linebreaks in curly braces in JSX attributes and
	 * expressions
	 *
	 * @see https://eslint.style/rules/jsx/jsx-curly-newline
	 */
	"style/jsx-curly-newline"?: Linter.RuleEntry<StyleJsxCurlyNewline>;
	/**
	 * Enforce or disallow spaces inside of curly braces in JSX attributes and
	 * expressions
	 *
	 * @see https://eslint.style/rules/jsx/jsx-curly-spacing
	 */
	"style/jsx-curly-spacing"?: Linter.RuleEntry<StyleJsxCurlySpacing>;
	/**
	 * Enforce or disallow spaces around equal signs in JSX attributes
	 *
	 * @see https://eslint.style/rules/jsx/jsx-equals-spacing
	 */
	"style/jsx-equals-spacing"?: Linter.RuleEntry<StyleJsxEqualsSpacing>;
	/**
	 * Enforce proper position of the first property in JSX
	 *
	 * @see https://eslint.style/rules/jsx/jsx-first-prop-new-line
	 */
	"style/jsx-first-prop-new-line"?: Linter.RuleEntry<StyleJsxFirstPropNewLine>;
	/**
	 * Enforce line breaks before and after JSX elements when they are used as
	 * arguments to a function.
	 *
	 * @see https://eslint.style/rules/jsx/jsx-function-call-newline
	 */
	"style/jsx-function-call-newline"?: Linter.RuleEntry<StyleJsxFunctionCallNewline>;
	/**
	 * Enforce JSX indentation
	 *
	 * @see https://eslint.style/rules/jsx/jsx-indent
	 */
	"style/jsx-indent"?: Linter.RuleEntry<StyleJsxIndent>;
	/**
	 * Enforce props indentation in JSX
	 *
	 * @see https://eslint.style/rules/jsx/jsx-indent-props
	 */
	"style/jsx-indent-props"?: Linter.RuleEntry<StyleJsxIndentProps>;
	/**
	 * Enforce maximum of props on a single line in JSX
	 *
	 * @see https://eslint.style/rules/jsx/jsx-max-props-per-line
	 */
	"style/jsx-max-props-per-line"?: Linter.RuleEntry<StyleJsxMaxPropsPerLine>;
	/**
	 * Require or prevent a new line after jsx elements and expressions.
	 *
	 * @see https://eslint.style/rules/jsx/jsx-newline
	 */
	"style/jsx-newline"?: Linter.RuleEntry<StyleJsxNewline>;
	/**
	 * Require one JSX element per line
	 *
	 * @see https://eslint.style/rules/jsx/jsx-one-expression-per-line
	 */
	"style/jsx-one-expression-per-line"?: Linter.RuleEntry<StyleJsxOneExpressionPerLine>;
	/**
	 * Enforce PascalCase for user-defined JSX components
	 *
	 * @see https://eslint.style/rules/jsx/jsx-pascal-case
	 */
	"style/jsx-pascal-case"?: Linter.RuleEntry<StyleJsxPascalCase>;
	/**
	 * Disallow multiple spaces between inline JSX props
	 *
	 * @see https://eslint.style/rules/jsx/jsx-props-no-multi-spaces
	 */
	"style/jsx-props-no-multi-spaces"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the consistent use of either double or single quotes in JSX
	 * attributes
	 *
	 * @see https://eslint.style/rules/js/jsx-quotes
	 */
	"style/jsx-quotes"?: Linter.RuleEntry<StyleJsxQuotes>;
	/**
	 * Disallow extra closing tags for components without children
	 *
	 * @see https://eslint.style/rules/jsx/jsx-self-closing-comp
	 */
	"style/jsx-self-closing-comp"?: Linter.RuleEntry<StyleJsxSelfClosingComp>;
	/**
	 * Enforce props alphabetical sorting
	 *
	 * @see https://eslint.style/rules/jsx/jsx-sort-props
	 */
	"style/jsx-sort-props"?: Linter.RuleEntry<StyleJsxSortProps>;
	/**
	 * Enforce whitespace in and around the JSX opening and closing brackets
	 *
	 * @see https://eslint.style/rules/jsx/jsx-tag-spacing
	 */
	"style/jsx-tag-spacing"?: Linter.RuleEntry<StyleJsxTagSpacing>;
	/**
	 * Disallow missing parentheses around multiline JSX
	 *
	 * @see https://eslint.style/rules/jsx/jsx-wrap-multilines
	 */
	"style/jsx-wrap-multilines"?: Linter.RuleEntry<StyleJsxWrapMultilines>;
	/**
	 * Enforce consistent spacing between property names and type annotations in
	 * types and interfaces
	 *
	 * @see https://eslint.style/rules/ts/key-spacing
	 */
	"style/key-spacing"?: Linter.RuleEntry<StyleKeySpacing>;
	/**
	 * Enforce consistent spacing before and after keywords
	 *
	 * @see https://eslint.style/rules/ts/keyword-spacing
	 */
	"style/keyword-spacing"?: Linter.RuleEntry<StyleKeywordSpacing>;
	/**
	 * Enforce position of line comments
	 *
	 * @see https://eslint.style/rules/js/line-comment-position
	 */
	"style/line-comment-position"?: Linter.RuleEntry<StyleLineCommentPosition>;
	/**
	 * Enforce consistent linebreak style
	 *
	 * @see https://eslint.style/rules/js/linebreak-style
	 */
	"style/linebreak-style"?: Linter.RuleEntry<StyleLinebreakStyle>;
	/**
	 * Require empty lines around comments
	 *
	 * @see https://eslint.style/rules/ts/lines-around-comment
	 */
	"style/lines-around-comment"?: Linter.RuleEntry<StyleLinesAroundComment>;
	/**
	 * Require or disallow an empty line between class members
	 *
	 * @see https://eslint.style/rules/ts/lines-between-class-members
	 */
	"style/lines-between-class-members"?: Linter.RuleEntry<StyleLinesBetweenClassMembers>;
	/**
	 * Enforce a maximum line length
	 *
	 * @see https://eslint.style/rules/js/max-len
	 */
	"style/max-len"?: Linter.RuleEntry<StyleMaxLen>;
	/**
	 * Enforce a maximum number of statements allowed per line
	 *
	 * @see https://eslint.style/rules/js/max-statements-per-line
	 */
	"style/max-statements-per-line"?: Linter.RuleEntry<StyleMaxStatementsPerLine>;
	/**
	 * Require a specific member delimiter style for interfaces and type literals
	 *
	 * @see https://eslint.style/rules/ts/member-delimiter-style
	 */
	"style/member-delimiter-style"?: Linter.RuleEntry<StyleMemberDelimiterStyle>;
	/**
	 * Enforce a particular style for multiline comments
	 *
	 * @see https://eslint.style/rules/js/multiline-comment-style
	 */
	"style/multiline-comment-style"?: Linter.RuleEntry<StyleMultilineCommentStyle>;
	/**
	 * Enforce newlines between operands of ternary expressions
	 *
	 * @see https://eslint.style/rules/js/multiline-ternary
	 */
	"style/multiline-ternary"?: Linter.RuleEntry<StyleMultilineTernary>;
	/**
	 * Enforce or disallow parentheses when invoking a constructor with no
	 * arguments
	 *
	 * @see https://eslint.style/rules/js/new-parens
	 */
	"style/new-parens"?: Linter.RuleEntry<StyleNewParens>;
	/**
	 * Require a newline after each call in a method chain
	 *
	 * @see https://eslint.style/rules/js/newline-per-chained-call
	 */
	"style/newline-per-chained-call"?: Linter.RuleEntry<StyleNewlinePerChainedCall>;
	/**
	 * Disallow arrow functions where they could be confused with comparisons
	 *
	 * @see https://eslint.style/rules/js/no-confusing-arrow
	 */
	"style/no-confusing-arrow"?: Linter.RuleEntry<StyleNoConfusingArrow>;
	/**
	 * Disallow unnecessary parentheses
	 *
	 * @see https://eslint.style/rules/ts/no-extra-parens
	 */
	"style/no-extra-parens"?: Linter.RuleEntry<StyleNoExtraParens>;
	/**
	 * Disallow unnecessary semicolons
	 *
	 * @see https://eslint.style/rules/ts/no-extra-semi
	 */
	"style/no-extra-semi"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow leading or trailing decimal points in numeric literals
	 *
	 * @see https://eslint.style/rules/js/no-floating-decimal
	 */
	"style/no-floating-decimal"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow mixed binary operators
	 *
	 * @see https://eslint.style/rules/js/no-mixed-operators
	 */
	"style/no-mixed-operators"?: Linter.RuleEntry<StyleNoMixedOperators>;
	/**
	 * Disallow mixed spaces and tabs for indentation
	 *
	 * @see https://eslint.style/rules/js/no-mixed-spaces-and-tabs
	 */
	"style/no-mixed-spaces-and-tabs"?: Linter.RuleEntry<StyleNoMixedSpacesAndTabs>;
	/**
	 * Disallow multiple spaces
	 *
	 * @see https://eslint.style/rules/js/no-multi-spaces
	 */
	"style/no-multi-spaces"?: Linter.RuleEntry<StyleNoMultiSpaces>;
	/**
	 * Disallow multiple empty lines
	 *
	 * @see https://eslint.style/rules/js/no-multiple-empty-lines
	 */
	"style/no-multiple-empty-lines"?: Linter.RuleEntry<StyleNoMultipleEmptyLines>;
	/**
	 * Disallow all tabs
	 *
	 * @see https://eslint.style/rules/js/no-tabs
	 */
	"style/no-tabs"?: Linter.RuleEntry<StyleNoTabs>;
	/**
	 * Disallow trailing whitespace at the end of lines
	 *
	 * @see https://eslint.style/rules/js/no-trailing-spaces
	 */
	"style/no-trailing-spaces"?: Linter.RuleEntry<StyleNoTrailingSpaces>;
	/**
	 * Disallow whitespace before properties
	 *
	 * @see https://eslint.style/rules/js/no-whitespace-before-property
	 */
	"style/no-whitespace-before-property"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the location of single-line statements
	 *
	 * @see https://eslint.style/rules/js/nonblock-statement-body-position
	 */
	"style/nonblock-statement-body-position"?: Linter.RuleEntry<StyleNonblockStatementBodyPosition>;
	/**
	 * Enforce consistent line breaks after opening and before closing braces
	 *
	 * @see https://eslint.style/rules/js/object-curly-newline
	 */
	"style/object-curly-newline"?: Linter.RuleEntry<StyleObjectCurlyNewline>;
	/**
	 * Enforce consistent spacing inside braces
	 *
	 * @see https://eslint.style/rules/ts/object-curly-spacing
	 */
	"style/object-curly-spacing"?: Linter.RuleEntry<StyleObjectCurlySpacing>;
	/**
	 * Enforce placing object properties on separate lines
	 *
	 * @see https://eslint.style/rules/js/object-property-newline
	 */
	"style/object-property-newline"?: Linter.RuleEntry<StyleObjectPropertyNewline>;
	/**
	 * Require or disallow newlines around variable declarations
	 *
	 * @see https://eslint.style/rules/js/one-var-declaration-per-line
	 */
	"style/one-var-declaration-per-line"?: Linter.RuleEntry<StyleOneVarDeclarationPerLine>;
	/**
	 * Enforce consistent linebreak style for operators
	 *
	 * @see https://eslint.style/rules/js/operator-linebreak
	 */
	"style/operator-linebreak"?: Linter.RuleEntry<StyleOperatorLinebreak>;
	/**
	 * Require or disallow padding within blocks
	 *
	 * @see https://eslint.style/rules/js/padded-blocks
	 */
	"style/padded-blocks"?: Linter.RuleEntry<StylePaddedBlocks>;
	/**
	 * Require or disallow padding lines between statements
	 *
	 * @see https://eslint.style/rules/ts/padding-line-between-statements
	 */
	"style/padding-line-between-statements"?: Linter.RuleEntry<StylePaddingLineBetweenStatements>;
	/**
	 * Require quotes around object literal, type literal, interfaces and enums
	 * property names
	 *
	 * @see https://eslint.style/rules/ts/quote-props
	 */
	"style/quote-props"?: Linter.RuleEntry<StyleQuoteProps>;
	/**
	 * Enforce the consistent use of either backticks, double, or single quotes
	 *
	 * @see https://eslint.style/rules/ts/quotes
	 */
	"style/quotes"?: Linter.RuleEntry<StyleQuotes>;
	/**
	 * Enforce spacing between rest and spread operators and their expressions
	 *
	 * @see https://eslint.style/rules/js/rest-spread-spacing
	 */
	"style/rest-spread-spacing"?: Linter.RuleEntry<StyleRestSpreadSpacing>;
	/**
	 * Require or disallow semicolons instead of ASI
	 *
	 * @see https://eslint.style/rules/ts/semi
	 */
	"style/semi"?: Linter.RuleEntry<StyleSemi>;
	/**
	 * Enforce consistent spacing before and after semicolons
	 *
	 * @see https://eslint.style/rules/js/semi-spacing
	 */
	"style/semi-spacing"?: Linter.RuleEntry<StyleSemiSpacing>;
	/**
	 * Enforce location of semicolons
	 *
	 * @see https://eslint.style/rules/js/semi-style
	 */
	"style/semi-style"?: Linter.RuleEntry<StyleSemiStyle>;
	/**
	 * Enforce consistent spacing before blocks
	 *
	 * @see https://eslint.style/rules/ts/space-before-blocks
	 */
	"style/space-before-blocks"?: Linter.RuleEntry<StyleSpaceBeforeBlocks>;
	/**
	 * Enforce consistent spacing before function parenthesis
	 *
	 * @see https://eslint.style/rules/ts/space-before-function-paren
	 */
	"style/space-before-function-paren"?: Linter.RuleEntry<StyleSpaceBeforeFunctionParen>;
	/**
	 * Enforce consistent spacing inside parentheses
	 *
	 * @see https://eslint.style/rules/js/space-in-parens
	 */
	"style/space-in-parens"?: Linter.RuleEntry<StyleSpaceInParens>;
	/**
	 * Require spacing around infix operators
	 *
	 * @see https://eslint.style/rules/ts/space-infix-ops
	 */
	"style/space-infix-ops"?: Linter.RuleEntry<StyleSpaceInfixOps>;
	/**
	 * Enforce consistent spacing before or after unary operators
	 *
	 * @see https://eslint.style/rules/js/space-unary-ops
	 */
	"style/space-unary-ops"?: Linter.RuleEntry<StyleSpaceUnaryOps>;
	/**
	 * Enforce consistent spacing after the `//` or `/*` in a comment
	 *
	 * @see https://eslint.style/rules/js/spaced-comment
	 */
	"style/spaced-comment"?: Linter.RuleEntry<StyleSpacedComment>;
	/**
	 * Enforce spacing around colons of switch statements
	 *
	 * @see https://eslint.style/rules/js/switch-colon-spacing
	 */
	"style/switch-colon-spacing"?: Linter.RuleEntry<StyleSwitchColonSpacing>;
	/**
	 * Require or disallow spacing around embedded expressions of template strings
	 *
	 * @see https://eslint.style/rules/js/template-curly-spacing
	 */
	"style/template-curly-spacing"?: Linter.RuleEntry<StyleTemplateCurlySpacing>;
	/**
	 * Require or disallow spacing between template tags and their literals
	 *
	 * @see https://eslint.style/rules/js/template-tag-spacing
	 */
	"style/template-tag-spacing"?: Linter.RuleEntry<StyleTemplateTagSpacing>;
	/**
	 * Require consistent spacing around type annotations
	 *
	 * @see https://eslint.style/rules/ts/type-annotation-spacing
	 */
	"style/type-annotation-spacing"?: Linter.RuleEntry<StyleTypeAnnotationSpacing>;
	/**
	 * Enforces consistent spacing inside TypeScript type generics
	 *
	 * @see https://eslint.style/rules/plus/type-generic-spacing
	 */
	"style/type-generic-spacing"?: Linter.RuleEntry<[]>;
	/**
	 * Expect space before the type declaration in the named tuple
	 *
	 * @see https://eslint.style/rules/plus/type-named-tuple-spacing
	 */
	"style/type-named-tuple-spacing"?: Linter.RuleEntry<[]>;
	/**
	 * Require parentheses around immediate `function` invocations
	 *
	 * @see https://eslint.style/rules/js/wrap-iife
	 */
	"style/wrap-iife"?: Linter.RuleEntry<StyleWrapIife>;
	/**
	 * Require parenthesis around regex literals
	 *
	 * @see https://eslint.style/rules/js/wrap-regex
	 */
	"style/wrap-regex"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow spacing around the `*` in `yield*` expressions
	 *
	 * @see https://eslint.style/rules/js/yield-star-spacing
	 */
	"style/yield-star-spacing"?: Linter.RuleEntry<StyleYieldStarSpacing>;
	/**
	 * Enforce spacing around colons of switch statements
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/switch-colon-spacing
	 */
	"switch-colon-spacing"?: Linter.RuleEntry<SwitchColonSpacing>;
	/**
	 * Require symbol descriptions
	 *
	 * @see https://eslint.org/docs/latest/rules/symbol-description
	 */
	"symbol-description"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow spacing around embedded expressions of template strings
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/template-curly-spacing
	 */
	"template-curly-spacing"?: Linter.RuleEntry<TemplateCurlySpacing>;
	/**
	 * Require or disallow spacing between template tags and their literals
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/template-tag-spacing
	 */
	"template-tag-spacing"?: Linter.RuleEntry<TemplateTagSpacing>;
	/**
	 * Enforce linebreaks after opening and before closing array brackets
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-newline.html
	 */
	"toml/array-bracket-newline"?: Linter.RuleEntry<TomlArrayBracketNewline>;
	/**
	 * Enforce consistent spacing inside array brackets
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-spacing.html
	 */
	"toml/array-bracket-spacing"?: Linter.RuleEntry<TomlArrayBracketSpacing>;
	/**
	 * Enforce line breaks between array elements
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-element-newline.html
	 */
	"toml/array-element-newline"?: Linter.RuleEntry<TomlArrayElementNewline>;
	/**
	 * Enforce consistent comma style in array
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/comma-style.html
	 */
	"toml/comma-style"?: Linter.RuleEntry<TomlCommaStyle>;
	/**
	 * Enforce consistent indentation
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/indent.html
	 */
	"toml/indent"?: Linter.RuleEntry<TomlIndent>;
	/**
	 * Enforce consistent spacing inside braces
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-curly-spacing.html
	 */
	"toml/inline-table-curly-spacing"?: Linter.RuleEntry<TomlInlineTableCurlySpacing>;
	/**
	 * Enforce consistent spacing between keys and values in key/value pairs
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/key-spacing.html
	 */
	"toml/key-spacing"?: Linter.RuleEntry<TomlKeySpacing>;
	/**
	 * Disallow defining pair keys out-of-order
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/keys-order.html
	 */
	"toml/keys-order"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow mixed data types in array
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-mixed-type-in-array.html
	 */
	"toml/no-mixed-type-in-array"?: Linter.RuleEntry<TomlNoMixedTypeInArray>;
	/**
	 * Disallow hexadecimal, octal and binary integer
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-non-decimal-integer.html
	 */
	"toml/no-non-decimal-integer"?: Linter.RuleEntry<TomlNoNonDecimalInteger>;
	/**
	 * Disallow spacing around infix operators
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-space-dots.html
	 */
	"toml/no-space-dots"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow number separators that to not enhance readability.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-unreadable-number-separator.html
	 */
	"toml/no-unreadable-number-separator"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow padding lines between pairs
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-pairs.html
	 */
	"toml/padding-line-between-pairs"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow padding lines between tables
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-tables.html
	 */
	"toml/padding-line-between-tables"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow precision of fractional seconds greater than the specified value.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-fractional-seconds.html
	 */
	"toml/precision-of-fractional-seconds"?: Linter.RuleEntry<TomlPrecisionOfFractionalSeconds>;
	/**
	 * Disallow precision of integer greater than the specified value.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-integer.html
	 */
	"toml/precision-of-integer"?: Linter.RuleEntry<TomlPrecisionOfInteger>;
	/**
	 * Require or disallow quotes around keys
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/quoted-keys.html
	 */
	"toml/quoted-keys"?: Linter.RuleEntry<TomlQuotedKeys>;
	/**
	 * Require spacing around equals sign
	 *
	 * @deprecated
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/space-eq-sign.html
	 */
	"toml/space-eq-sign"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent spacing after the `#` in a comment
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/spaced-comment.html
	 */
	"toml/spaced-comment"?: Linter.RuleEntry<TomlSpacedComment>;
	/**
	 * Enforce consistent spacing inside table brackets
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/table-bracket-spacing.html
	 */
	"toml/table-bracket-spacing"?: Linter.RuleEntry<TomlTableBracketSpacing>;
	/**
	 * Disallow defining tables out-of-order
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/tables-order.html
	 */
	"toml/tables-order"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow parsing errors in Vue custom blocks
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/vue-custom-block/no-parsing-error.html
	 */
	"toml/vue-custom-block/no-parsing-error"?: Linter.RuleEntry<[]>;
	/**
	 * Require that function overload signatures be consecutive
	 *
	 * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
	 */
	"ts/adjacent-overload-signatures"?: Linter.RuleEntry<[]>;
	/**
	 * Require consistently using either `T[]` or `Array<T>` for arrays
	 *
	 * @see https://typescript-eslint.io/rules/array-type
	 */
	"ts/array-type"?: Linter.RuleEntry<TsArrayType>;
	/**
	 * Disallow awaiting a value that is not a Thenable
	 *
	 * @see https://typescript-eslint.io/rules/await-thenable
	 */
	"ts/await-thenable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `@ts-<directive>` comments or require descriptions after
	 * directives
	 *
	 * @see https://typescript-eslint.io/rules/ban-ts-comment
	 */
	"ts/ban-ts-comment"?: Linter.RuleEntry<TsBanTsComment>;
	/**
	 * Disallow `// tslint:<rule-flag>` comments
	 *
	 * @see https://typescript-eslint.io/rules/ban-tslint-comment
	 */
	"ts/ban-tslint-comment"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow certain types
	 *
	 * @see https://typescript-eslint.io/rules/ban-types
	 */
	"ts/ban-types"?: Linter.RuleEntry<TsBanTypes>;
	/**
	 * Disallow or enforce spaces inside of blocks after opening block and before
	 * closing block
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/block-spacing
	 */
	"ts/block-spacing"?: Linter.RuleEntry<TsBlockSpacing>;
	/**
	 * Enforce consistent brace style for blocks
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/brace-style
	 */
	"ts/brace-style"?: Linter.RuleEntry<TsBraceStyle>;
	/**
	 * Enforce that literals on classes are exposed in a consistent style
	 *
	 * @see https://typescript-eslint.io/rules/class-literal-property-style
	 */
	"ts/class-literal-property-style"?: Linter.RuleEntry<TsClassLiteralPropertyStyle>;
	/**
	 * Enforce that class methods utilize `this`
	 *
	 * @see https://typescript-eslint.io/rules/class-methods-use-this
	 */
	"ts/class-methods-use-this"?: Linter.RuleEntry<TsClassMethodsUseThis>;
	/**
	 * Require or disallow trailing commas
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/comma-dangle
	 */
	"ts/comma-dangle"?: Linter.RuleEntry<TsCommaDangle>;
	/**
	 * Enforce consistent spacing before and after commas
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/comma-spacing
	 */
	"ts/comma-spacing"?: Linter.RuleEntry<TsCommaSpacing>;
	/**
	 * Enforce specifying generic type arguments on type annotation or constructor
	 * name of a constructor call
	 *
	 * @see https://typescript-eslint.io/rules/consistent-generic-constructors
	 */
	"ts/consistent-generic-constructors"?: Linter.RuleEntry<TsConsistentGenericConstructors>;
	/**
	 * Require or disallow the `Record` type
	 *
	 * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
	 */
	"ts/consistent-indexed-object-style"?: Linter.RuleEntry<TsConsistentIndexedObjectStyle>;
	/**
	 * Require `return` statements to either always or never specify values
	 *
	 * @see https://typescript-eslint.io/rules/consistent-return
	 */
	"ts/consistent-return"?: Linter.RuleEntry<TsConsistentReturn>;
	/**
	 * Enforce consistent usage of type assertions
	 *
	 * @see https://typescript-eslint.io/rules/consistent-type-assertions
	 */
	"ts/consistent-type-assertions"?: Linter.RuleEntry<TsConsistentTypeAssertions>;
	/**
	 * Enforce type definitions to consistently use either `interface` or `type`
	 *
	 * @see https://typescript-eslint.io/rules/consistent-type-definitions
	 */
	"ts/consistent-type-definitions"?: Linter.RuleEntry<TsConsistentTypeDefinitions>;
	/**
	 * Enforce consistent usage of type exports
	 *
	 * @see https://typescript-eslint.io/rules/consistent-type-exports
	 */
	"ts/consistent-type-exports"?: Linter.RuleEntry<TsConsistentTypeExports>;
	/**
	 * Enforce consistent usage of type imports
	 *
	 * @see https://typescript-eslint.io/rules/consistent-type-imports
	 */
	"ts/consistent-type-imports"?: Linter.RuleEntry<TsConsistentTypeImports>;
	/**
	 * Enforce default parameters to be last
	 *
	 * @see https://typescript-eslint.io/rules/default-param-last
	 */
	"ts/default-param-last"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce dot notation whenever possible
	 *
	 * @see https://typescript-eslint.io/rules/dot-notation
	 */
	"ts/dot-notation"?: Linter.RuleEntry<TsDotNotation>;
	/**
	 * Require explicit return types on functions and class methods
	 *
	 * @see https://typescript-eslint.io/rules/explicit-function-return-type
	 */
	"ts/explicit-function-return-type"?: Linter.RuleEntry<TsExplicitFunctionReturnType>;
	/**
	 * Require explicit accessibility modifiers on class properties and methods
	 *
	 * @see https://typescript-eslint.io/rules/explicit-member-accessibility
	 */
	"ts/explicit-member-accessibility"?: Linter.RuleEntry<TsExplicitMemberAccessibility>;
	/**
	 * Require explicit return and argument types on exported functions' and
	 * classes' public class methods
	 *
	 * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
	 */
	"ts/explicit-module-boundary-types"?: Linter.RuleEntry<TsExplicitModuleBoundaryTypes>;
	/**
	 * Require or disallow spacing between function identifiers and their
	 * invocations
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/func-call-spacing
	 */
	"ts/func-call-spacing"?: Linter.RuleEntry<TsFuncCallSpacing>;
	/**
	 * Enforce consistent indentation
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/indent
	 */
	"ts/indent"?: Linter.RuleEntry<TsIndent>;
	/**
	 * Require or disallow initialization in variable declarations
	 *
	 * @see https://typescript-eslint.io/rules/init-declarations
	 */
	"ts/init-declarations"?: Linter.RuleEntry<TsInitDeclarations>;
	/**
	 * Enforce consistent spacing between property names and type annotations in
	 * types and interfaces
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/key-spacing
	 */
	"ts/key-spacing"?: Linter.RuleEntry<TsKeySpacing>;
	/**
	 * Enforce consistent spacing before and after keywords
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/keyword-spacing
	 */
	"ts/keyword-spacing"?: Linter.RuleEntry<TsKeywordSpacing>;
	/**
	 * Require empty lines around comments
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/lines-around-comment
	 */
	"ts/lines-around-comment"?: Linter.RuleEntry<TsLinesAroundComment>;
	/**
	 * Require or disallow an empty line between class members
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/lines-between-class-members
	 */
	"ts/lines-between-class-members"?: Linter.RuleEntry<TsLinesBetweenClassMembers>;
	/**
	 * Enforce a maximum number of parameters in function definitions
	 *
	 * @see https://typescript-eslint.io/rules/max-params
	 */
	"ts/max-params"?: Linter.RuleEntry<TsMaxParams>;
	/**
	 * Require a specific member delimiter style for interfaces and type literals
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/member-delimiter-style
	 */
	"ts/member-delimiter-style"?: Linter.RuleEntry<TsMemberDelimiterStyle>;
	/**
	 * Require a consistent member declaration order
	 *
	 * @see https://typescript-eslint.io/rules/member-ordering
	 */
	"ts/member-ordering"?: Linter.RuleEntry<TsMemberOrdering>;
	/**
	 * Enforce using a particular method signature syntax
	 *
	 * @see https://typescript-eslint.io/rules/method-signature-style
	 */
	"ts/method-signature-style"?: Linter.RuleEntry<TsMethodSignatureStyle>;
	/**
	 * Enforce naming conventions for everything across a codebase
	 *
	 * @see https://typescript-eslint.io/rules/naming-convention
	 */
	"ts/naming-convention"?: Linter.RuleEntry<TsNamingConvention>;
	/**
	 * Disallow generic `Array` constructors
	 *
	 * @see https://typescript-eslint.io/rules/no-array-constructor
	 */
	"ts/no-array-constructor"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using the `delete` operator on array values
	 *
	 * @see https://typescript-eslint.io/rules/no-array-delete
	 */
	"ts/no-array-delete"?: Linter.RuleEntry<[]>;
	/**
	 * Require `.toString()` to only be called on objects which provide useful
	 * information when stringified
	 *
	 * @see https://typescript-eslint.io/rules/no-base-to-string
	 */
	"ts/no-base-to-string"?: Linter.RuleEntry<TsNoBaseToString>;
	/**
	 * Disallow non-null assertion in locations that may be confusing
	 *
	 * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
	 */
	"ts/no-confusing-non-null-assertion"?: Linter.RuleEntry<[]>;
	/**
	 * Require expressions of type void to appear in statement position
	 *
	 * @see https://typescript-eslint.io/rules/no-confusing-void-expression
	 */
	"ts/no-confusing-void-expression"?: Linter.RuleEntry<TsNoConfusingVoidExpression>;
	/**
	 * Disallow duplicate class members
	 *
	 * @see https://typescript-eslint.io/rules/no-dupe-class-members
	 */
	"ts/no-dupe-class-members"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate enum member values
	 *
	 * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
	 */
	"ts/no-duplicate-enum-values"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate constituents of union or intersection types
	 *
	 * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
	 */
	"ts/no-duplicate-type-constituents"?: Linter.RuleEntry<TsNoDuplicateTypeConstituents>;
	/**
	 * Disallow using the `delete` operator on computed key expressions
	 *
	 * @see https://typescript-eslint.io/rules/no-dynamic-delete
	 */
	"ts/no-dynamic-delete"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty functions
	 *
	 * @see https://typescript-eslint.io/rules/no-empty-function
	 */
	"ts/no-empty-function"?: Linter.RuleEntry<TsNoEmptyFunction>;
	/**
	 * Disallow the declaration of empty interfaces
	 *
	 * @see https://typescript-eslint.io/rules/no-empty-interface
	 */
	"ts/no-empty-interface"?: Linter.RuleEntry<TsNoEmptyInterface>;
	/**
	 * Disallow the `any` type
	 *
	 * @see https://typescript-eslint.io/rules/no-explicit-any
	 */
	"ts/no-explicit-any"?: Linter.RuleEntry<TsNoExplicitAny>;
	/**
	 * Disallow extra non-null assertions
	 *
	 * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
	 */
	"ts/no-extra-non-null-assertion"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary parentheses
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/no-extra-parens
	 */
	"ts/no-extra-parens"?: Linter.RuleEntry<TsNoExtraParens>;
	/**
	 * Disallow unnecessary semicolons
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/no-extra-semi
	 */
	"ts/no-extra-semi"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow classes used as namespaces
	 *
	 * @see https://typescript-eslint.io/rules/no-extraneous-class
	 */
	"ts/no-extraneous-class"?: Linter.RuleEntry<TsNoExtraneousClass>;
	/**
	 * Require Promise-like statements to be handled appropriately
	 *
	 * @see https://typescript-eslint.io/rules/no-floating-promises
	 */
	"ts/no-floating-promises"?: Linter.RuleEntry<TsNoFloatingPromises>;
	/**
	 * Disallow iterating over an array with a for-in loop
	 *
	 * @see https://typescript-eslint.io/rules/no-for-in-array
	 */
	"ts/no-for-in-array"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `eval()`-like methods
	 *
	 * @see https://typescript-eslint.io/rules/no-implied-eval
	 */
	"ts/no-implied-eval"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of top-level import type qualifier when an import only has
	 * specifiers with inline type qualifiers
	 *
	 * @see https://typescript-eslint.io/rules/no-import-type-side-effects
	 */
	"ts/no-import-type-side-effects"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow explicit type declarations for variables or parameters initialized
	 * to a number, string, or boolean
	 *
	 * @see https://typescript-eslint.io/rules/no-inferrable-types
	 */
	"ts/no-inferrable-types"?: Linter.RuleEntry<TsNoInferrableTypes>;
	/**
	 * Disallow `this` keywords outside of classes or class-like objects
	 *
	 * @see https://typescript-eslint.io/rules/no-invalid-this
	 */
	"ts/no-invalid-this"?: Linter.RuleEntry<TsNoInvalidThis>;
	/**
	 * Disallow `void` type outside of generic or return types
	 *
	 * @see https://typescript-eslint.io/rules/no-invalid-void-type
	 */
	"ts/no-invalid-void-type"?: Linter.RuleEntry<TsNoInvalidVoidType>;
	/**
	 * Disallow function declarations that contain unsafe references inside loop
	 * statements
	 *
	 * @see https://typescript-eslint.io/rules/no-loop-func
	 */
	"ts/no-loop-func"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow literal numbers that lose precision
	 *
	 * @see https://typescript-eslint.io/rules/no-loss-of-precision
	 */
	"ts/no-loss-of-precision"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow magic numbers
	 *
	 * @see https://typescript-eslint.io/rules/no-magic-numbers
	 */
	"ts/no-magic-numbers"?: Linter.RuleEntry<TsNoMagicNumbers>;
	/**
	 * Disallow the `void` operator except when used to discard a value
	 *
	 * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
	 */
	"ts/no-meaningless-void-operator"?: Linter.RuleEntry<TsNoMeaninglessVoidOperator>;
	/**
	 * Enforce valid definition of `new` and `constructor`
	 *
	 * @see https://typescript-eslint.io/rules/no-misused-new
	 */
	"ts/no-misused-new"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow Promises in places not designed to handle them
	 *
	 * @see https://typescript-eslint.io/rules/no-misused-promises
	 */
	"ts/no-misused-promises"?: Linter.RuleEntry<TsNoMisusedPromises>;
	/**
	 * Disallow enums from having both number and string members
	 *
	 * @see https://typescript-eslint.io/rules/no-mixed-enums
	 */
	"ts/no-mixed-enums"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow TypeScript namespaces
	 *
	 * @see https://typescript-eslint.io/rules/no-namespace
	 */
	"ts/no-namespace"?: Linter.RuleEntry<TsNoNamespace>;
	/**
	 * Disallow non-null assertions in the left operand of a nullish coalescing
	 * operator
	 *
	 * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
	 */
	"ts/no-non-null-asserted-nullish-coalescing"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow non-null assertions after an optional chain expression
	 *
	 * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
	 */
	"ts/no-non-null-asserted-optional-chain"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow non-null assertions using the `!` postfix operator
	 *
	 * @see https://typescript-eslint.io/rules/no-non-null-assertion
	 */
	"ts/no-non-null-assertion"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow variable redeclaration
	 *
	 * @see https://typescript-eslint.io/rules/no-redeclare
	 */
	"ts/no-redeclare"?: Linter.RuleEntry<TsNoRedeclare>;
	/**
	 * Disallow members of unions and intersections that do nothing or override
	 * type information
	 *
	 * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
	 */
	"ts/no-redundant-type-constituents"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow invocation of `require()`
	 *
	 * @see https://typescript-eslint.io/rules/no-require-imports
	 */
	"ts/no-require-imports"?: Linter.RuleEntry<TsNoRequireImports>;
	/**
	 * Disallow specified modules when loaded by `import`
	 *
	 * @see https://typescript-eslint.io/rules/no-restricted-imports
	 */
	"ts/no-restricted-imports"?: Linter.RuleEntry<TsNoRestrictedImports>;
	/**
	 * Disallow variable declarations from shadowing variables declared in the
	 * outer scope
	 *
	 * @see https://typescript-eslint.io/rules/no-shadow
	 */
	"ts/no-shadow"?: Linter.RuleEntry<TsNoShadow>;
	/**
	 * Disallow aliasing `this`
	 *
	 * @see https://typescript-eslint.io/rules/no-this-alias
	 */
	"ts/no-this-alias"?: Linter.RuleEntry<TsNoThisAlias>;
	/**
	 * Disallow throwing literals as exceptions
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/no-throw-literal
	 */
	"ts/no-throw-literal"?: Linter.RuleEntry<TsNoThrowLiteral>;
	/**
	 * Disallow type aliases
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/no-type-alias
	 */
	"ts/no-type-alias"?: Linter.RuleEntry<TsNoTypeAlias>;
	/**
	 * Disallow unnecessary equality comparisons against boolean literals
	 *
	 * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
	 */
	"ts/no-unnecessary-boolean-literal-compare"?: Linter.RuleEntry<TsNoUnnecessaryBooleanLiteralCompare>;
	/**
	 * Disallow conditionals where the type is always truthy or always falsy
	 *
	 * @see https://typescript-eslint.io/rules/no-unnecessary-condition
	 */
	"ts/no-unnecessary-condition"?: Linter.RuleEntry<TsNoUnnecessaryCondition>;
	/**
	 * Disallow unnecessary namespace qualifiers
	 *
	 * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
	 */
	"ts/no-unnecessary-qualifier"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary template expressions
	 *
	 * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
	 */
	"ts/no-unnecessary-template-expression"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow type arguments that are equal to the default
	 *
	 * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
	 */
	"ts/no-unnecessary-type-arguments"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow type assertions that do not change the type of an expression
	 *
	 * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
	 */
	"ts/no-unnecessary-type-assertion"?: Linter.RuleEntry<TsNoUnnecessaryTypeAssertion>;
	/**
	 * Disallow unnecessary constraints on generic types
	 *
	 * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
	 */
	"ts/no-unnecessary-type-constraint"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow calling a function with a value with type `any`
	 *
	 * @see https://typescript-eslint.io/rules/no-unsafe-argument
	 */
	"ts/no-unsafe-argument"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow assigning a value with type `any` to variables and properties
	 *
	 * @see https://typescript-eslint.io/rules/no-unsafe-assignment
	 */
	"ts/no-unsafe-assignment"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow calling a value with type `any`
	 *
	 * @see https://typescript-eslint.io/rules/no-unsafe-call
	 */
	"ts/no-unsafe-call"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unsafe declaration merging
	 *
	 * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
	 */
	"ts/no-unsafe-declaration-merging"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow comparing an enum value with a non-enum value
	 *
	 * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
	 */
	"ts/no-unsafe-enum-comparison"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow member access on a value with type `any`
	 *
	 * @see https://typescript-eslint.io/rules/no-unsafe-member-access
	 */
	"ts/no-unsafe-member-access"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow returning a value with type `any` from a function
	 *
	 * @see https://typescript-eslint.io/rules/no-unsafe-return
	 */
	"ts/no-unsafe-return"?: Linter.RuleEntry<[]>;
	/**
	 * Require unary negation to take a number
	 *
	 * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
	 */
	"ts/no-unsafe-unary-minus"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused expressions
	 *
	 * @see https://typescript-eslint.io/rules/no-unused-expressions
	 */
	"ts/no-unused-expressions"?: Linter.RuleEntry<TsNoUnusedExpressions>;
	/**
	 * Disallow unused variables
	 *
	 * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
	 */
	"ts/no-unused-vars"?: Linter.RuleEntry<TsNoUnusedVars>;
	/**
	 * Disallow the use of variables before they are defined
	 *
	 * @see https://typescript-eslint.io/rules/no-use-before-define
	 */
	"ts/no-use-before-define"?: Linter.RuleEntry<TsNoUseBeforeDefine>;
	/**
	 * Disallow unnecessary constructors
	 *
	 * @see https://typescript-eslint.io/rules/no-useless-constructor
	 */
	"ts/no-useless-constructor"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty exports that don't change anything in a module file
	 *
	 * @see https://typescript-eslint.io/rules/no-useless-empty-export
	 */
	"ts/no-useless-empty-export"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary template expressions
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/no-useless-template-literals
	 */
	"ts/no-useless-template-literals"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `require` statements except in import statements
	 *
	 * @see https://typescript-eslint.io/rules/no-var-requires
	 */
	"ts/no-var-requires"?: Linter.RuleEntry<TsNoVarRequires>;
	/**
	 * Enforce non-null assertions over explicit type casts
	 *
	 * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
	 */
	"ts/non-nullable-type-assertion-style"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent spacing inside braces
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/object-curly-spacing
	 */
	"ts/object-curly-spacing"?: Linter.RuleEntry<TsObjectCurlySpacing>;
	/**
	 * Disallow throwing non-`Error` values as exceptions
	 *
	 * @see https://typescript-eslint.io/rules/only-throw-error
	 */
	"ts/only-throw-error"?: Linter.RuleEntry<TsOnlyThrowError>;
	/**
	 * Require or disallow padding lines between statements
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/padding-line-between-statements
	 */
	"ts/padding-line-between-statements"?: Linter.RuleEntry<TsPaddingLineBetweenStatements>;
	/**
	 * Require or disallow parameter properties in class constructors
	 *
	 * @see https://typescript-eslint.io/rules/parameter-properties
	 */
	"ts/parameter-properties"?: Linter.RuleEntry<TsParameterProperties>;
	/**
	 * Enforce the use of `as const` over literal type
	 *
	 * @see https://typescript-eslint.io/rules/prefer-as-const
	 */
	"ts/prefer-as-const"?: Linter.RuleEntry<[]>;
	/**
	 * Require destructuring from arrays and/or objects
	 *
	 * @see https://typescript-eslint.io/rules/prefer-destructuring
	 */
	"ts/prefer-destructuring"?: Linter.RuleEntry<TsPreferDestructuring>;
	/**
	 * Require each enum member value to be explicitly initialized
	 *
	 * @see https://typescript-eslint.io/rules/prefer-enum-initializers
	 */
	"ts/prefer-enum-initializers"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of Array.prototype.find() over Array.prototype.filter()
	 * followed by [0] when looking for a single result
	 *
	 * @see https://typescript-eslint.io/rules/prefer-find
	 */
	"ts/prefer-find"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of `for-of` loop over the standard `for` loop where
	 * possible
	 *
	 * @see https://typescript-eslint.io/rules/prefer-for-of
	 */
	"ts/prefer-for-of"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using function types instead of interfaces with call signatures
	 *
	 * @see https://typescript-eslint.io/rules/prefer-function-type
	 */
	"ts/prefer-function-type"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce `includes` method over `indexOf` method
	 *
	 * @see https://typescript-eslint.io/rules/prefer-includes
	 */
	"ts/prefer-includes"?: Linter.RuleEntry<[]>;
	/**
	 * Require all enum members to be literal values
	 *
	 * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
	 */
	"ts/prefer-literal-enum-member"?: Linter.RuleEntry<TsPreferLiteralEnumMember>;
	/**
	 * Require using `namespace` keyword over `module` keyword to declare custom
	 * TypeScript modules
	 *
	 * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
	 */
	"ts/prefer-namespace-keyword"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using the nullish coalescing operator instead of logical
	 * assignments or chaining
	 *
	 * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
	 */
	"ts/prefer-nullish-coalescing"?: Linter.RuleEntry<TsPreferNullishCoalescing>;
	/**
	 * Enforce using concise optional chain expressions instead of chained logical
	 * ands, negated logical ors, or empty objects
	 *
	 * @see https://typescript-eslint.io/rules/prefer-optional-chain
	 */
	"ts/prefer-optional-chain"?: Linter.RuleEntry<TsPreferOptionalChain>;
	/**
	 * Require using Error objects as Promise rejection reasons
	 *
	 * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
	 */
	"ts/prefer-promise-reject-errors"?: Linter.RuleEntry<TsPreferPromiseRejectErrors>;
	/**
	 * Require private members to be marked as `readonly` if they're never
	 * modified outside of the constructor
	 *
	 * @see https://typescript-eslint.io/rules/prefer-readonly
	 */
	"ts/prefer-readonly"?: Linter.RuleEntry<TsPreferReadonly>;
	/**
	 * Require function parameters to be typed as `readonly` to prevent accidental
	 * mutation of inputs
	 *
	 * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
	 */
	"ts/prefer-readonly-parameter-types"?: Linter.RuleEntry<TsPreferReadonlyParameterTypes>;
	/**
	 * Enforce using type parameter when calling `Array#reduce` instead of casting
	 *
	 * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
	 */
	"ts/prefer-reduce-type-parameter"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce `RegExp#exec` over `String#match` if no global flag is provided
	 *
	 * @see https://typescript-eslint.io/rules/prefer-regexp-exec
	 */
	"ts/prefer-regexp-exec"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce that `this` is used when only `this` type is returned
	 *
	 * @see https://typescript-eslint.io/rules/prefer-return-this-type
	 */
	"ts/prefer-return-this-type"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using `String#startsWith` and `String#endsWith` over other
	 * equivalent methods of checking substrings
	 *
	 * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
	 */
	"ts/prefer-string-starts-ends-with"?: Linter.RuleEntry<TsPreferStringStartsEndsWith>;
	/**
	 * Enforce using `@ts-expect-error` over `@ts-ignore`
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
	 */
	"ts/prefer-ts-expect-error"?: Linter.RuleEntry<[]>;
	/**
	 * Require any function or method that returns a Promise to be marked async
	 *
	 * @see https://typescript-eslint.io/rules/promise-function-async
	 */
	"ts/promise-function-async"?: Linter.RuleEntry<TsPromiseFunctionAsync>;
	/**
	 * Enforce the consistent use of either backticks, double, or single quotes
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/quotes
	 */
	"ts/quotes"?: Linter.RuleEntry<TsQuotes>;
	/**
	 * Require `Array#sort` and `Array#toSorted` calls to always provide a
	 * `compareFunction`
	 *
	 * @see https://typescript-eslint.io/rules/require-array-sort-compare
	 */
	"ts/require-array-sort-compare"?: Linter.RuleEntry<TsRequireArraySortCompare>;
	/**
	 * Disallow async functions which do not return promises and have no `await`
	 * expression
	 *
	 * @see https://typescript-eslint.io/rules/require-await
	 */
	"ts/require-await"?: Linter.RuleEntry<[]>;
	/**
	 * Require both operands of addition to be the same type and be `bigint`,
	 * `number`, or `string`
	 *
	 * @see https://typescript-eslint.io/rules/restrict-plus-operands
	 */
	"ts/restrict-plus-operands"?: Linter.RuleEntry<TsRestrictPlusOperands>;
	/**
	 * Enforce template literal expressions to be of `string` type
	 *
	 * @see https://typescript-eslint.io/rules/restrict-template-expressions
	 */
	"ts/restrict-template-expressions"?: Linter.RuleEntry<TsRestrictTemplateExpressions>;
	/**
	 * Enforce consistent returning of awaited values
	 *
	 * @see https://typescript-eslint.io/rules/return-await
	 */
	"ts/return-await"?: Linter.RuleEntry<TsReturnAwait>;
	/**
	 * Require or disallow semicolons instead of ASI
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/semi
	 */
	"ts/semi"?: Linter.RuleEntry<TsSemi>;
	/**
	 * Enforce constituents of a type union/intersection to be sorted
	 * alphabetically
	 *
	 * @see https://typescript-eslint.io/rules/sort-type-constituents
	 */
	"ts/sort-type-constituents"?: Linter.RuleEntry<TsSortTypeConstituents>;
	/**
	 * Enforce consistent spacing before blocks
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/space-before-blocks
	 */
	"ts/space-before-blocks"?: Linter.RuleEntry<TsSpaceBeforeBlocks>;
	/**
	 * Enforce consistent spacing before function parenthesis
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/space-before-function-paren
	 */
	"ts/space-before-function-paren"?: Linter.RuleEntry<TsSpaceBeforeFunctionParen>;
	/**
	 * Require spacing around infix operators
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/space-infix-ops
	 */
	"ts/space-infix-ops"?: Linter.RuleEntry<TsSpaceInfixOps>;
	/**
	 * Disallow certain types in boolean expressions
	 *
	 * @see https://typescript-eslint.io/rules/strict-boolean-expressions
	 */
	"ts/strict-boolean-expressions"?: Linter.RuleEntry<TsStrictBooleanExpressions>;
	/**
	 * Require switch-case statements to be exhaustive
	 *
	 * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
	 */
	"ts/switch-exhaustiveness-check"?: Linter.RuleEntry<TsSwitchExhaustivenessCheck>;
	/**
	 * Disallow certain triple slash directives in favor of ES6-style import
	 * declarations
	 *
	 * @see https://typescript-eslint.io/rules/triple-slash-reference
	 */
	"ts/triple-slash-reference"?: Linter.RuleEntry<TsTripleSlashReference>;
	/**
	 * Require consistent spacing around type annotations
	 *
	 * @deprecated
	 * @see https://typescript-eslint.io/rules/type-annotation-spacing
	 */
	"ts/type-annotation-spacing"?: Linter.RuleEntry<TsTypeAnnotationSpacing>;
	/**
	 * Require type annotations in certain places
	 *
	 * @see https://typescript-eslint.io/rules/typedef
	 */
	"ts/typedef"?: Linter.RuleEntry<TsTypedef>;
	/**
	 * Enforce unbound methods are called with their expected scope
	 *
	 * @see https://typescript-eslint.io/rules/unbound-method
	 */
	"ts/unbound-method"?: Linter.RuleEntry<TsUnboundMethod>;
	/**
	 * Disallow two overloads that could be unified into one with a union or an
	 * optional/rest parameter
	 *
	 * @see https://typescript-eslint.io/rules/unified-signatures
	 */
	"ts/unified-signatures"?: Linter.RuleEntry<TsUnifiedSignatures>;
	/**
	 * Enforce typing arguments in `.catch()` callbacks as `unknown`
	 *
	 * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
	 */
	"ts/use-unknown-in-catch-callback-variable"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow Unicode byte order mark (BOM)
	 *
	 * @see https://eslint.org/docs/latest/rules/unicode-bom
	 */
	"unicode-bom"?: Linter.RuleEntry<UnicodeBom>;
	/**
	 * Improve regexes by making them shorter, consistent, and safer.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/better-regex.md
	 */
	"unicorn/better-regex"?: Linter.RuleEntry<UnicornBetterRegex>;
	/**
	 * Enforce a specific parameter name in catch clauses.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/catch-error-name.md
	 */
	"unicorn/catch-error-name"?: Linter.RuleEntry<UnicornCatchErrorName>;
	/**
	 * Use destructured variables over properties.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/consistent-destructuring.md
	 */
	"unicorn/consistent-destructuring"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer consistent types when spreading a ternary in an array literal.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/consistent-empty-array-spread.md
	 */
	"unicorn/consistent-empty-array-spread"?: Linter.RuleEntry<[]>;
	/**
	 * Move function definitions to the highest possible scope.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/consistent-function-scoping.md
	 */
	"unicorn/consistent-function-scoping"?: Linter.RuleEntry<UnicornConsistentFunctionScoping>;
	/**
	 * Enforce correct `Error` subclassing.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/custom-error-definition.md
	 */
	"unicorn/custom-error-definition"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce no spaces between braces.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/empty-brace-spaces.md
	 */
	"unicorn/empty-brace-spaces"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce passing a `message` value when creating a built-in error.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/error-message.md
	 */
	"unicorn/error-message"?: Linter.RuleEntry<[]>;
	/**
	 * Require escape sequences to use uppercase values.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/escape-case.md
	 */
	"unicorn/escape-case"?: Linter.RuleEntry<[]>;
	/**
	 * Add expiration conditions to TODO comments.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/expiring-todo-comments.md
	 */
	"unicorn/expiring-todo-comments"?: Linter.RuleEntry<UnicornExpiringTodoComments>;
	/**
	 * Enforce explicitly comparing the `length` or `size` property of a value.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/explicit-length-check.md
	 */
	"unicorn/explicit-length-check"?: Linter.RuleEntry<UnicornExplicitLengthCheck>;
	/**
	 * Enforce a case style for filenames.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/filename-case.md
	 */
	"unicorn/filename-case"?: Linter.RuleEntry<UnicornFilenameCase>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#import-index
	 */
	"unicorn/import-index"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce specific import styles per module.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/import-style.md
	 */
	"unicorn/import-style"?: Linter.RuleEntry<UnicornImportStyle>;
	/**
	 * Enforce the use of `new` for all builtins, except `String`, `Number`,
	 * `Boolean`, `Symbol` and `BigInt`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/new-for-builtins.md
	 */
	"unicorn/new-for-builtins"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce specifying rules to disable in `eslint-disable` comments.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-abusive-eslint-disable.md
	 */
	"unicorn/no-abusive-eslint-disable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow anonymous functions and classes as the default export.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-anonymous-default-export.md
	 */
	"unicorn/no-anonymous-default-export"?: Linter.RuleEntry<[]>;
	/**
	 * Prevent passing a function reference directly to iterator methods.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-array-callback-reference.md
	 */
	"unicorn/no-array-callback-reference"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `for…of` over the `forEach` method.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-array-for-each.md
	 */
	"unicorn/no-array-for-each"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#no-array-instanceof
	 */
	"unicorn/no-array-instanceof"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using the `this` argument in array methods.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-array-method-this-argument.md
	 */
	"unicorn/no-array-method-this-argument"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce combining multiple `Array#push()` into one call.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-array-push-push.md
	 */
	"unicorn/no-array-push-push"?: Linter.RuleEntry<UnicornNoArrayPushPush>;
	/**
	 * Disallow `Array#reduce()` and `Array#reduceRight()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-array-reduce.md
	 */
	"unicorn/no-array-reduce"?: Linter.RuleEntry<UnicornNoArrayReduce>;
	/**
	 * Disallow member access from await expression.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-await-expression-member.md
	 */
	"unicorn/no-await-expression-member"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using `await` in `Promise` method parameters.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-await-in-promise-methods.md
	 */
	"unicorn/no-await-in-promise-methods"?: Linter.RuleEntry<[]>;
	/**
	 * Do not use leading/trailing space between `console.log` parameters.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-console-spaces.md
	 */
	"unicorn/no-console-spaces"?: Linter.RuleEntry<[]>;
	/**
	 * Do not use `document.cookie` directly.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-document-cookie.md
	 */
	"unicorn/no-document-cookie"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty files.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-empty-file.md
	 */
	"unicorn/no-empty-file"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#no-fn-reference-in-iterator
	 */
	"unicorn/no-fn-reference-in-iterator"?: Linter.RuleEntry<[]>;
	/**
	 * Do not use a `for` loop that can be replaced with a `for-of` loop.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-for-loop.md
	 */
	"unicorn/no-for-loop"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of Unicode escapes instead of hexadecimal escapes.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-hex-escape.md
	 */
	"unicorn/no-hex-escape"?: Linter.RuleEntry<[]>;
	/**
	 * Require `Array.isArray()` instead of `instanceof Array`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-instanceof-array.md
	 */
	"unicorn/no-instanceof-array"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow invalid options in `fetch()` and `new Request()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-invalid-fetch-options.md
	 */
	"unicorn/no-invalid-fetch-options"?: Linter.RuleEntry<[]>;
	/**
	 * Prevent calling `EventTarget#removeEventListener()` with the result of an
	 * expression.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-invalid-remove-event-listener.md
	 */
	"unicorn/no-invalid-remove-event-listener"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow identifiers starting with `new` or `class`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-keyword-prefix.md
	 */
	"unicorn/no-keyword-prefix"?: Linter.RuleEntry<UnicornNoKeywordPrefix>;
	/**
	 * Disallow `if` statements as the only statement in `if` blocks without
	 * `else`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-lonely-if.md
	 */
	"unicorn/no-lonely-if"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow a magic number as the `depth` argument in `Array#flat(…).`
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-magic-array-flat-depth.md
	 */
	"unicorn/no-magic-array-flat-depth"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow negated conditions.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-negated-condition.md
	 */
	"unicorn/no-negated-condition"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow nested ternary expressions.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-nested-ternary.md
	 */
	"unicorn/no-nested-ternary"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `new Array()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-new-array.md
	 */
	"unicorn/no-new-array"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the
	 * deprecated `new Buffer()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-new-buffer.md
	 */
	"unicorn/no-new-buffer"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of the `null` literal.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-null.md
	 */
	"unicorn/no-null"?: Linter.RuleEntry<UnicornNoNull>;
	/**
	 * Disallow the use of objects as default parameters.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-object-as-default-parameter.md
	 */
	"unicorn/no-object-as-default-parameter"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `process.exit()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-process-exit.md
	 */
	"unicorn/no-process-exit"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#no-reduce
	 */
	"unicorn/no-reduce"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow passing single-element arrays to `Promise` methods.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-single-promise-in-promise-methods.md
	 */
	"unicorn/no-single-promise-in-promise-methods"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow classes that only have static members.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-static-only-class.md
	 */
	"unicorn/no-static-only-class"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `then` property.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-thenable.md
	 */
	"unicorn/no-thenable"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow assigning `this` to a variable.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-this-assignment.md
	 */
	"unicorn/no-this-assignment"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow comparing `undefined` using `typeof`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-typeof-undefined.md
	 */
	"unicorn/no-typeof-undefined"?: Linter.RuleEntry<UnicornNoTypeofUndefined>;
	/**
	 * Disallow awaiting non-promise values.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-unnecessary-await.md
	 */
	"unicorn/no-unnecessary-await"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of built-in methods instead of unnecessary polyfills.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-unnecessary-polyfills.md
	 */
	"unicorn/no-unnecessary-polyfills"?: Linter.RuleEntry<UnicornNoUnnecessaryPolyfills>;
	/**
	 * Disallow unreadable array destructuring.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-unreadable-array-destructuring.md
	 */
	"unicorn/no-unreadable-array-destructuring"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unreadable IIFEs.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-unreadable-iife.md
	 */
	"unicorn/no-unreadable-iife"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#no-unsafe-regex
	 */
	"unicorn/no-unsafe-regex"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused object properties.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-unused-properties.md
	 */
	"unicorn/no-unused-properties"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow useless fallback when spreading in object literals.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-useless-fallback-in-spread.md
	 */
	"unicorn/no-useless-fallback-in-spread"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow useless array length check.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-useless-length-check.md
	 */
	"unicorn/no-useless-length-check"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow returning/yielding `Promise.resolve/reject()` in async functions
	 * or promise callbacks
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-useless-promise-resolve-reject.md
	 */
	"unicorn/no-useless-promise-resolve-reject"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary spread.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-useless-spread.md
	 */
	"unicorn/no-useless-spread"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow useless case in switch statements.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-useless-switch-case.md
	 */
	"unicorn/no-useless-switch-case"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow useless `undefined`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-useless-undefined.md
	 */
	"unicorn/no-useless-undefined"?: Linter.RuleEntry<UnicornNoUselessUndefined>;
	/**
	 * Disallow number literals with zero fractions or dangling dots.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-zero-fractions.md
	 */
	"unicorn/no-zero-fractions"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce proper case for numeric literals.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/number-literal-case.md
	 */
	"unicorn/number-literal-case"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the style of numeric separators by correctly grouping digits.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/numeric-separators-style.md
	 */
	"unicorn/numeric-separators-style"?: Linter.RuleEntry<UnicornNumericSeparatorsStyle>;
	/**
	 * Prefer `.addEventListener()` and `.removeEventListener()` over
	 * `on`-functions.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-add-event-listener.md
	 */
	"unicorn/prefer-add-event-listener"?: Linter.RuleEntry<UnicornPreferAddEventListener>;
	/**
	 * Prefer `.find(…)` and `.findLast(…)` over the first or last element from
	 * `.filter(…)`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-array-find.md
	 */
	"unicorn/prefer-array-find"?: Linter.RuleEntry<UnicornPreferArrayFind>;
	/**
	 * Prefer `Array#flat()` over legacy techniques to flatten arrays.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-array-flat.md
	 */
	"unicorn/prefer-array-flat"?: Linter.RuleEntry<UnicornPreferArrayFlat>;
	/**
	 * Prefer `.flatMap(…)` over `.map(…).flat()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-array-flat-map.md
	 */
	"unicorn/prefer-array-flat-map"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `Array#{indexOf,lastIndexOf}()` over
	 * `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-array-index-of.md
	 */
	"unicorn/prefer-array-index-of"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast}(…)`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-array-some.md
	 */
	"unicorn/prefer-array-some"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `.at()` method for index access and `String#charAt()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-at.md
	 */
	"unicorn/prefer-at"?: Linter.RuleEntry<UnicornPreferAt>;
	/**
	 * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and
	 * `Blob#text()` over `FileReader#readAsText(…)`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-blob-reading-methods.md
	 */
	"unicorn/prefer-blob-reading-methods"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and
	 * `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-code-point.md
	 */
	"unicorn/prefer-code-point"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-dataset
	 */
	"unicorn/prefer-dataset"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-date-now.md
	 */
	"unicorn/prefer-date-now"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer default parameters over reassignment.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-default-parameters.md
	 */
	"unicorn/prefer-default-parameters"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `Node#append()` over `Node#appendChild()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-dom-node-append.md
	 */
	"unicorn/prefer-dom-node-append"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using `.dataset` on DOM elements over calling attribute methods.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-dom-node-dataset.md
	 */
	"unicorn/prefer-dom-node-dataset"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-dom-node-remove.md
	 */
	"unicorn/prefer-dom-node-remove"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `.textContent` over `.innerText`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-dom-node-text-content.md
	 */
	"unicorn/prefer-dom-node-text-content"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-event-key
	 */
	"unicorn/prefer-event-key"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `EventTarget` over `EventEmitter`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-event-target.md
	 */
	"unicorn/prefer-event-target"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-exponentiation-operator
	 */
	"unicorn/prefer-exponentiation-operator"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `export…from` when re-exporting.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-export-from.md
	 */
	"unicorn/prefer-export-from"?: Linter.RuleEntry<UnicornPreferExportFrom>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-flat-map
	 */
	"unicorn/prefer-flat-map"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for
	 * existence or non-existence.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-includes.md
	 */
	"unicorn/prefer-includes"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer reading a JSON file as a buffer.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-json-parse-buffer.md
	 */
	"unicorn/prefer-json-parse-buffer"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-keyboard-event-key.md
	 */
	"unicorn/prefer-keyboard-event-key"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using a logical operator over a ternary.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-logical-operator-over-ternary.md
	 */
	"unicorn/prefer-logical-operator-over-ternary"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the use of `Math.trunc` instead of bitwise operators.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-math-trunc.md
	 */
	"unicorn/prefer-math-trunc"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over
	 * `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or
	 * `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-modern-dom-apis.md
	 */
	"unicorn/prefer-modern-dom-apis"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer modern `Math` APIs over legacy patterns.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-modern-math-apis.md
	 */
	"unicorn/prefer-modern-math-apis"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer JavaScript modules (ESM) over CommonJS.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-module.md
	 */
	"unicorn/prefer-module"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol`
	 * directly.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-native-coercion-functions.md
	 */
	"unicorn/prefer-native-coercion-functions"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer negative index over `.length - index` when possible.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-negative-index.md
	 */
	"unicorn/prefer-negative-index"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-node-append
	 */
	"unicorn/prefer-node-append"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using the `node:` protocol when importing Node.js builtin modules.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-node-protocol.md
	 */
	"unicorn/prefer-node-protocol"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-node-remove
	 */
	"unicorn/prefer-node-remove"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `Number` static properties over global ones.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-number-properties.md
	 */
	"unicorn/prefer-number-properties"?: Linter.RuleEntry<UnicornPreferNumberProperties>;
	/**
	 * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs
	 * into an object.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-object-from-entries.md
	 */
	"unicorn/prefer-object-from-entries"?: Linter.RuleEntry<UnicornPreferObjectFromEntries>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-object-has-own
	 */
	"unicorn/prefer-object-has-own"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer omitting the `catch` binding parameter.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-optional-catch-binding.md
	 */
	"unicorn/prefer-optional-catch-binding"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer borrowing methods from the prototype instead of the instance.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-prototype-methods.md
	 */
	"unicorn/prefer-prototype-methods"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()`
	 * over `.getElementsByClassName()` and `.getElementsByTagName()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-query-selector.md
	 */
	"unicorn/prefer-query-selector"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `Reflect.apply()` over `Function#apply()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-reflect-apply.md
	 */
	"unicorn/prefer-reflect-apply"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-regexp-test.md
	 */
	"unicorn/prefer-regexp-test"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-replace-all
	 */
	"unicorn/prefer-replace-all"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `Set#has()` over `Array#includes()` when checking for existence or
	 * non-existence.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-set-has.md
	 */
	"unicorn/prefer-set-has"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using `Set#size` instead of `Array#length`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-set-size.md
	 */
	"unicorn/prefer-set-size"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`,
	 * `Array#{slice,toSpliced}()` and `String#split('')`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-spread.md
	 */
	"unicorn/prefer-spread"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-starts-ends-with
	 */
	"unicorn/prefer-starts-ends-with"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using the `String.raw` tag to avoid escaping `\`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-string-raw.md
	 */
	"unicorn/prefer-string-raw"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `String#replaceAll()` over regex searches with the global flag.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-string-replace-all.md
	 */
	"unicorn/prefer-string-replace-all"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-string-slice.md
	 */
	"unicorn/prefer-string-slice"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-string-starts-ends-with.md
	 */
	"unicorn/prefer-string-starts-ends-with"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` /
	 * `String#trimRight()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-string-trim-start-end.md
	 */
	"unicorn/prefer-string-trim-start-end"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer using `structuredClone` to create a deep clone.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-structured-clone.md
	 */
	"unicorn/prefer-structured-clone"?: Linter.RuleEntry<UnicornPreferStructuredClone>;
	/**
	 * Prefer `switch` over multiple `else-if`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-switch.md
	 */
	"unicorn/prefer-switch"?: Linter.RuleEntry<UnicornPreferSwitch>;
	/**
	 * Prefer ternary expressions over simple `if-else` statements.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-ternary.md
	 */
	"unicorn/prefer-ternary"?: Linter.RuleEntry<UnicornPreferTernary>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-text-content
	 */
	"unicorn/prefer-text-content"?: Linter.RuleEntry<[]>;
	/**
	 * Prefer top-level await over top-level promises and async function calls.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-top-level-await.md
	 */
	"unicorn/prefer-top-level-await"?: Linter.RuleEntry<[]>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#prefer-trim-start-end
	 */
	"unicorn/prefer-trim-start-end"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce throwing `TypeError` in type checking conditions.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prefer-type-error.md
	 */
	"unicorn/prefer-type-error"?: Linter.RuleEntry<[]>;
	/**
	 * Prevent abbreviations.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/prevent-abbreviations.md
	 */
	"unicorn/prevent-abbreviations"?: Linter.RuleEntry<UnicornPreventAbbreviations>;
	/**
	 * @deprecated
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/deprecated-rules.md#regex-shorthand
	 */
	"unicorn/regex-shorthand"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent relative URL style.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/relative-url-style.md
	 */
	"unicorn/relative-url-style"?: Linter.RuleEntry<UnicornRelativeUrlStyle>;
	/**
	 * Enforce using the separator argument with `Array#join()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/require-array-join-separator.md
	 */
	"unicorn/require-array-join-separator"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using the digits argument with `Number#toFixed()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/require-number-to-fixed-digits-argument.md
	 */
	"unicorn/require-number-to-fixed-digits-argument"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using the `targetOrigin` argument with `window.postMessage()`.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/require-post-message-target-origin.md
	 */
	"unicorn/require-post-message-target-origin"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce better string content.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/string-content.md
	 */
	"unicorn/string-content"?: Linter.RuleEntry<UnicornStringContent>;
	/**
	 * Enforce consistent brace style for `case` clauses.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/switch-case-braces.md
	 */
	"unicorn/switch-case-braces"?: Linter.RuleEntry<UnicornSwitchCaseBraces>;
	/**
	 * Fix whitespace-insensitive template indentation.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/template-indent.md
	 */
	"unicorn/template-indent"?: Linter.RuleEntry<UnicornTemplateIndent>;
	/**
	 * Enforce consistent case for text encoding identifiers.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/text-encoding-identifier-case.md
	 */
	"unicorn/text-encoding-identifier-case"?: Linter.RuleEntry<[]>;
	/**
	 * Require `new` when creating an error.
	 *
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/throw-new-error.md
	 */
	"unicorn/throw-new-error"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused variables
	 *
	 * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
	 */
	"unused-imports/no-unused-imports"?: Linter.RuleEntry<UnusedImportsNoUnusedImports>;
	/**
	 * Disallow unused variables
	 *
	 * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
	 */
	"unused-imports/no-unused-vars"?: Linter.RuleEntry<UnusedImportsNoUnusedVars>;
	/**
	 * Require calls to `isNaN()` when checking for `NaN`
	 *
	 * @see https://eslint.org/docs/latest/rules/use-isnan
	 */
	"use-isnan"?: Linter.RuleEntry<UseIsnan>;
	/**
	 * Enforce comparing `typeof` expressions against valid strings
	 *
	 * @see https://eslint.org/docs/latest/rules/valid-typeof
	 */
	"valid-typeof"?: Linter.RuleEntry<ValidTypeof>;
	/**
	 * Require `var` declarations be placed at the top of their containing scope
	 *
	 * @see https://eslint.org/docs/latest/rules/vars-on-top
	 */
	"vars-on-top"?: Linter.RuleEntry<[]>;
	/**
	 * Require .spec test file pattern
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
	 */
	"vitest/consistent-test-filename"?: Linter.RuleEntry<VitestConsistentTestFilename>;
	/**
	 * Enforce using test or it but not both
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
	 */
	"vitest/consistent-test-it"?: Linter.RuleEntry<VitestConsistentTestIt>;
	/**
	 * Enforce having expectation in test body
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
	 */
	"vitest/expect-expect"?: Linter.RuleEntry<VitestExpectExpect>;
	/**
	 * Enforce a maximum number of expect per test
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
	 */
	"vitest/max-expects"?: Linter.RuleEntry<VitestMaxExpects>;
	/**
	 * Require describe block to be less than set max value or default value
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
	 */
	"vitest/max-nested-describe"?: Linter.RuleEntry<VitestMaxNestedDescribe>;
	/**
	 * Disallow alias methods
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
	 */
	"vitest/no-alias-methods"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow commented out tests
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
	 */
	"vitest/no-commented-out-tests"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow conditional expects
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
	 */
	"vitest/no-conditional-expect"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow conditional tests
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
	 */
	"vitest/no-conditional-in-test"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow conditional tests
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
	 */
	"vitest/no-conditional-tests"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow disabled tests
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
	 */
	"vitest/no-disabled-tests"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using a callback in asynchronous tests and hooks
	 *
	 * @deprecated
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md
	 */
	"vitest/no-done-callback"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplicate hooks and teardown hooks
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
	 */
	"vitest/no-duplicate-hooks"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow focused tests
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
	 */
	"vitest/no-focused-tests"?: Linter.RuleEntry<VitestNoFocusedTests>;
	/**
	 * Disallow setup and teardown hooks
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
	 */
	"vitest/no-hooks"?: Linter.RuleEntry<VitestNoHooks>;
	/**
	 * Disallow identical titles
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
	 */
	"vitest/no-identical-title"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow importing `node:test`
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
	 */
	"vitest/no-import-node-test"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow string interpolation in snapshots
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
	 */
	"vitest/no-interpolation-in-snapshots"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow large snapshots
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
	 */
	"vitest/no-large-snapshots"?: Linter.RuleEntry<VitestNoLargeSnapshots>;
	/**
	 * Disallow importing from **mocks** directory
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
	 */
	"vitest/no-mocks-import"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of certain matchers
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
	 */
	"vitest/no-restricted-matchers"?: Linter.RuleEntry<VitestNoRestrictedMatchers>;
	/**
	 * Disallow specific `vi.` methods
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
	 */
	"vitest/no-restricted-vi-methods"?: Linter.RuleEntry<VitestNoRestrictedViMethods>;
	/**
	 * Disallow using `expect` outside of `it` or `test` blocks
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
	 */
	"vitest/no-standalone-expect"?: Linter.RuleEntry<VitestNoStandaloneExpect>;
	/**
	 * Disallow using `test` as a prefix
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
	 */
	"vitest/no-test-prefixes"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow return statements in tests
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
	 */
	"vitest/no-test-return-statement"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
	 */
	"vitest/prefer-called-with"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using the built-in comparison matchers
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
	 */
	"vitest/prefer-comparison-matcher"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using `each` rather than manual loops
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
	 */
	"vitest/prefer-each"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using the built-in quality matchers
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
	 */
	"vitest/prefer-equality-matcher"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using expect assertions instead of callbacks
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
	 */
	"vitest/prefer-expect-assertions"?: Linter.RuleEntry<VitestPreferExpectAssertions>;
	/**
	 * Enforce using `expect().resolves` over `expect(await ...)` syntax
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
	 */
	"vitest/prefer-expect-resolves"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce having hooks in consistent order
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
	 */
	"vitest/prefer-hooks-in-order"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce having hooks before any test cases
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
	 */
	"vitest/prefer-hooks-on-top"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce lowercase titles
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
	 */
	"vitest/prefer-lowercase-title"?: Linter.RuleEntry<VitestPreferLowercaseTitle>;
	/**
	 * Enforce mock resolved/rejected shorthands for promises
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
	 */
	"vitest/prefer-mock-promise-shorthand"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce including a hint with external snapshots
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
	 */
	"vitest/prefer-snapshot-hint"?: Linter.RuleEntry<VitestPreferSnapshotHint>;
	/**
	 * Enforce using `vi.spyOn`
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
	 */
	"vitest/prefer-spy-on"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce strict equal over equal
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
	 */
	"vitest/prefer-strict-equal"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using toBe()
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
	 */
	"vitest/prefer-to-be"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using toBeFalsy()
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
	 */
	"vitest/prefer-to-be-falsy"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using toBeObject()
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
	 */
	"vitest/prefer-to-be-object"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using `toBeTruthy`
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
	 */
	"vitest/prefer-to-be-truthy"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using toContain()
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
	 */
	"vitest/prefer-to-contain"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using toHaveLength()
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
	 */
	"vitest/prefer-to-have-length"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce using `test.todo`
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
	 */
	"vitest/prefer-todo"?: Linter.RuleEntry<[]>;
	/**
	 * Require setup and teardown to be within a hook
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
	 */
	"vitest/require-hook"?: Linter.RuleEntry<VitestRequireHook>;
	/**
	 * Require local Test Context for concurrent snapshot tests
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
	 */
	"vitest/require-local-test-context-for-concurrent-snapshots"?: Linter.RuleEntry<
		[]
	>;
	/**
	 * Require toThrow() to be called with an error message
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
	 */
	"vitest/require-to-throw-message"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce that all tests are in a top-level describe
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
	 */
	"vitest/require-top-level-describe"?: Linter.RuleEntry<VitestRequireTopLevelDescribe>;
	/**
	 * Enforce valid describe callback
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
	 */
	"vitest/valid-describe-callback"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `expect()` usage
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
	 */
	"vitest/valid-expect"?: Linter.RuleEntry<VitestValidExpect>;
	/**
	 * Enforce valid titles
	 *
	 * @see https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
	 */
	"vitest/valid-title"?: Linter.RuleEntry<VitestValidTitle>;
	/**
	 * Enforce linebreaks after opening and before closing array brackets in
	 * `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/array-bracket-newline.html
	 */
	"vue/array-bracket-newline"?: Linter.RuleEntry<VueArrayBracketNewline>;
	/**
	 * Enforce consistent spacing inside array brackets in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/array-bracket-spacing.html
	 */
	"vue/array-bracket-spacing"?: Linter.RuleEntry<VueArrayBracketSpacing>;
	/**
	 * Enforce line breaks after each array element in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/array-element-newline.html
	 */
	"vue/array-element-newline"?: Linter.RuleEntry<VueArrayElementNewline>;
	/**
	 * Enforce consistent spacing before and after the arrow in arrow functions in
	 * `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/arrow-spacing.html
	 */
	"vue/arrow-spacing"?: Linter.RuleEntry<VueArrowSpacing>;
	/**
	 * Enforce attribute naming style on custom components in template
	 *
	 * @see https://eslint.vuejs.org/rules/attribute-hyphenation.html
	 */
	"vue/attribute-hyphenation"?: Linter.RuleEntry<VueAttributeHyphenation>;
	/**
	 * Enforce order of attributes
	 *
	 * @see https://eslint.vuejs.org/rules/attributes-order.html
	 */
	"vue/attributes-order"?: Linter.RuleEntry<VueAttributesOrder>;
	/**
	 * Disallow use other than available `lang`
	 *
	 * @see https://eslint.vuejs.org/rules/block-lang.html
	 */
	"vue/block-lang"?: Linter.RuleEntry<VueBlockLang>;
	/**
	 * Enforce order of component top-level elements
	 *
	 * @see https://eslint.vuejs.org/rules/block-order.html
	 */
	"vue/block-order"?: Linter.RuleEntry<VueBlockOrder>;
	/**
	 * Disallow or enforce spaces inside of blocks after opening block and before
	 * closing block in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/block-spacing.html
	 */
	"vue/block-spacing"?: Linter.RuleEntry<VueBlockSpacing>;
	/**
	 * Enforce line breaks after opening and before closing block-level tags
	 *
	 * @see https://eslint.vuejs.org/rules/block-tag-newline.html
	 */
	"vue/block-tag-newline"?: Linter.RuleEntry<VueBlockTagNewline>;
	/**
	 * Enforce consistent brace style for blocks in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/brace-style.html
	 */
	"vue/brace-style"?: Linter.RuleEntry<VueBraceStyle>;
	/**
	 * Enforce camelcase naming convention in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/camelcase.html
	 */
	"vue/camelcase"?: Linter.RuleEntry<VueCamelcase>;
	/**
	 * Require or disallow trailing commas in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/comma-dangle.html
	 */
	"vue/comma-dangle"?: Linter.RuleEntry<VueCommaDangle>;
	/**
	 * Enforce consistent spacing before and after commas in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/comma-spacing.html
	 */
	"vue/comma-spacing"?: Linter.RuleEntry<VueCommaSpacing>;
	/**
	 * Enforce consistent comma style in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/comma-style.html
	 */
	"vue/comma-style"?: Linter.RuleEntry<VueCommaStyle>;
	/**
	 * Support comment-directives in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/comment-directive.html
	 */
	"vue/comment-directive"?: Linter.RuleEntry<VueCommentDirective>;
	/**
	 * Enforce component API style
	 *
	 * @see https://eslint.vuejs.org/rules/component-api-style.html
	 */
	"vue/component-api-style"?: Linter.RuleEntry<VueComponentApiStyle>;
	/**
	 * Enforce specific casing for component definition name
	 *
	 * @see https://eslint.vuejs.org/rules/component-definition-name-casing.html
	 */
	"vue/component-definition-name-casing"?: Linter.RuleEntry<VueComponentDefinitionNameCasing>;
	/**
	 * Enforce specific casing for the component naming style in template
	 *
	 * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
	 */
	"vue/component-name-in-template-casing"?: Linter.RuleEntry<VueComponentNameInTemplateCasing>;
	/**
	 * Enforce the casing of component name in `components` options
	 *
	 * @see https://eslint.vuejs.org/rules/component-options-name-casing.html
	 */
	"vue/component-options-name-casing"?: Linter.RuleEntry<VueComponentOptionsNameCasing>;
	/**
	 * Enforce order of component top-level elements
	 *
	 * @deprecated
	 * @see https://eslint.vuejs.org/rules/component-tags-order.html
	 */
	"vue/component-tags-order"?: Linter.RuleEntry<VueComponentTagsOrder>;
	/**
	 * Enforce specific casing for custom event name
	 *
	 * @see https://eslint.vuejs.org/rules/custom-event-name-casing.html
	 */
	"vue/custom-event-name-casing"?: Linter.RuleEntry<VueCustomEventNameCasing>;
	/**
	 * Enforce declaration style of `defineEmits`
	 *
	 * @see https://eslint.vuejs.org/rules/define-emits-declaration.html
	 */
	"vue/define-emits-declaration"?: Linter.RuleEntry<VueDefineEmitsDeclaration>;
	/**
	 * Enforce order of `defineEmits` and `defineProps` compiler macros
	 *
	 * @see https://eslint.vuejs.org/rules/define-macros-order.html
	 */
	"vue/define-macros-order"?: Linter.RuleEntry<VueDefineMacrosOrder>;
	/**
	 * Enforce declaration style of `defineProps`
	 *
	 * @see https://eslint.vuejs.org/rules/define-props-declaration.html
	 */
	"vue/define-props-declaration"?: Linter.RuleEntry<VueDefinePropsDeclaration>;
	/**
	 * Enforce consistent newlines before and after dots in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/dot-location.html
	 */
	"vue/dot-location"?: Linter.RuleEntry<VueDotLocation>;
	/**
	 * Enforce dot notation whenever possible in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/dot-notation.html
	 */
	"vue/dot-notation"?: Linter.RuleEntry<VueDotNotation>;
	/**
	 * Enforce or forbid the use of the `scoped` and `module` attributes in SFC
	 * top level style tags
	 *
	 * @see https://eslint.vuejs.org/rules/enforce-style-attribute.html
	 */
	"vue/enforce-style-attribute"?: Linter.RuleEntry<VueEnforceStyleAttribute>;
	/**
	 * Require the use of `===` and `!==` in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/eqeqeq.html
	 */
	"vue/eqeqeq"?: Linter.RuleEntry<VueEqeqeq>;
	/**
	 * Enforce the location of first attribute
	 *
	 * @see https://eslint.vuejs.org/rules/first-attribute-linebreak.html
	 */
	"vue/first-attribute-linebreak"?: Linter.RuleEntry<VueFirstAttributeLinebreak>;
	/**
	 * Require or disallow spacing between function identifiers and their
	 * invocations in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/func-call-spacing.html
	 */
	"vue/func-call-spacing"?: Linter.RuleEntry<VueFuncCallSpacing>;
	/**
	 * Disallow usage of button without an explicit type attribute
	 *
	 * @see https://eslint.vuejs.org/rules/html-button-has-type.html
	 */
	"vue/html-button-has-type"?: Linter.RuleEntry<VueHtmlButtonHasType>;
	/**
	 * Require or disallow a line break before tag's closing brackets
	 *
	 * @see https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
	 */
	"vue/html-closing-bracket-newline"?: Linter.RuleEntry<VueHtmlClosingBracketNewline>;
	/**
	 * Require or disallow a space before tag's closing brackets
	 *
	 * @see https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
	 */
	"vue/html-closing-bracket-spacing"?: Linter.RuleEntry<VueHtmlClosingBracketSpacing>;
	/**
	 * Enforce unified line brake in HTML comments
	 *
	 * @see https://eslint.vuejs.org/rules/html-comment-content-newline.html
	 */
	"vue/html-comment-content-newline"?: Linter.RuleEntry<VueHtmlCommentContentNewline>;
	/**
	 * Enforce unified spacing in HTML comments
	 *
	 * @see https://eslint.vuejs.org/rules/html-comment-content-spacing.html
	 */
	"vue/html-comment-content-spacing"?: Linter.RuleEntry<VueHtmlCommentContentSpacing>;
	/**
	 * Enforce consistent indentation in HTML comments
	 *
	 * @see https://eslint.vuejs.org/rules/html-comment-indent.html
	 */
	"vue/html-comment-indent"?: Linter.RuleEntry<VueHtmlCommentIndent>;
	/**
	 * Enforce end tag style
	 *
	 * @see https://eslint.vuejs.org/rules/html-end-tags.html
	 */
	"vue/html-end-tags"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent indentation in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/html-indent.html
	 */
	"vue/html-indent"?: Linter.RuleEntry<VueHtmlIndent>;
	/**
	 * Enforce quotes style of HTML attributes
	 *
	 * @see https://eslint.vuejs.org/rules/html-quotes.html
	 */
	"vue/html-quotes"?: Linter.RuleEntry<VueHtmlQuotes>;
	/**
	 * Enforce self-closing style
	 *
	 * @see https://eslint.vuejs.org/rules/html-self-closing.html
	 */
	"vue/html-self-closing"?: Linter.RuleEntry<VueHtmlSelfClosing>;
	/**
	 * Prevent variables used in JSX to be marked as unused
	 *
	 * @see https://eslint.vuejs.org/rules/jsx-uses-vars.html
	 */
	"vue/jsx-uses-vars"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent spacing between keys and values in object literal
	 * properties in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/key-spacing.html
	 */
	"vue/key-spacing"?: Linter.RuleEntry<VueKeySpacing>;
	/**
	 * Enforce consistent spacing before and after keywords in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/keyword-spacing.html
	 */
	"vue/keyword-spacing"?: Linter.RuleEntry<VueKeywordSpacing>;
	/**
	 * Require component name property to match its file name
	 *
	 * @see https://eslint.vuejs.org/rules/match-component-file-name.html
	 */
	"vue/match-component-file-name"?: Linter.RuleEntry<VueMatchComponentFileName>;
	/**
	 * Require the registered component name to match the imported component name
	 *
	 * @see https://eslint.vuejs.org/rules/match-component-import-name.html
	 */
	"vue/match-component-import-name"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce the maximum number of attributes per line
	 *
	 * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
	 */
	"vue/max-attributes-per-line"?: Linter.RuleEntry<VueMaxAttributesPerLine>;
	/**
	 * Enforce a maximum line length in `.vue` files
	 *
	 * @see https://eslint.vuejs.org/rules/max-len.html
	 */
	"vue/max-len"?: Linter.RuleEntry<VueMaxLen>;
	/**
	 * Enforce maximum number of lines in Vue SFC blocks
	 *
	 * @see https://eslint.vuejs.org/rules/max-lines-per-block.html
	 */
	"vue/max-lines-per-block"?: Linter.RuleEntry<VueMaxLinesPerBlock>;
	/**
	 * Require component names to be always multi-word
	 *
	 * @see https://eslint.vuejs.org/rules/multi-word-component-names.html
	 */
	"vue/multi-word-component-names"?: Linter.RuleEntry<VueMultiWordComponentNames>;
	/**
	 * Require a line break before and after the contents of a multiline element
	 *
	 * @see https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
	 */
	"vue/multiline-html-element-content-newline"?: Linter.RuleEntry<VueMultilineHtmlElementContentNewline>;
	/**
	 * Enforce newlines between operands of ternary expressions in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/multiline-ternary.html
	 */
	"vue/multiline-ternary"?: Linter.RuleEntry<VueMultilineTernary>;
	/**
	 * Enforce unified spacing in mustache interpolations
	 *
	 * @see https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
	 */
	"vue/mustache-interpolation-spacing"?: Linter.RuleEntry<VueMustacheInterpolationSpacing>;
	/**
	 * Enforce new lines between multi-line properties in Vue components
	 *
	 * @see https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
	 */
	"vue/new-line-between-multi-line-property"?: Linter.RuleEntry<VueNewLineBetweenMultiLineProperty>;
	/**
	 * Enforce Promise or callback style in `nextTick`
	 *
	 * @see https://eslint.vuejs.org/rules/next-tick-style.html
	 */
	"vue/next-tick-style"?: Linter.RuleEntry<VueNextTickStyle>;
	/**
	 * Disallow using arrow functions to define watcher
	 *
	 * @see https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
	 */
	"vue/no-arrow-functions-in-watch"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow asynchronous actions in computed properties
	 *
	 * @see https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
	 */
	"vue/no-async-in-computed-properties"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of bare strings in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
	 */
	"vue/no-bare-strings-in-template"?: Linter.RuleEntry<VueNoBareStringsInTemplate>;
	/**
	 * Disallow boolean defaults
	 *
	 * @see https://eslint.vuejs.org/rules/no-boolean-default.html
	 */
	"vue/no-boolean-default"?: Linter.RuleEntry<VueNoBooleanDefault>;
	/**
	 * Disallow element's child contents which would be overwritten by a directive
	 * like `v-html` or `v-text`
	 *
	 * @see https://eslint.vuejs.org/rules/no-child-content.html
	 */
	"vue/no-child-content"?: Linter.RuleEntry<VueNoChildContent>;
	/**
	 * Disallow accessing computed properties in `data`.
	 *
	 * @see https://eslint.vuejs.org/rules/no-computed-properties-in-data.html
	 */
	"vue/no-computed-properties-in-data"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow the use of `console` in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-console.html
	 */
	"vue/no-console"?: Linter.RuleEntry<VueNoConsole>;
	/**
	 * Disallow constant expressions in conditions in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-constant-condition.html
	 */
	"vue/no-constant-condition"?: Linter.RuleEntry<VueNoConstantCondition>;
	/**
	 * Disallow custom modifiers on v-model used on the component
	 *
	 * @see https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html
	 */
	"vue/no-custom-modifiers-on-v-model"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
	 */
	"vue/no-deprecated-data-object-declaration"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks
	 * (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
	 */
	"vue/no-deprecated-destroyed-lifecycle"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated `$listeners` (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
	 */
	"vue/no-deprecated-dollar-listeners-api"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
	 */
	"vue/no-deprecated-dollar-scopedslots-api"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated events api (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-events-api.html
	 */
	"vue/no-deprecated-events-api"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated filters syntax (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-filter.html
	 */
	"vue/no-deprecated-filter"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated the `functional` template (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
	 */
	"vue/no-deprecated-functional-template"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated the `is` attribute on HTML elements (in Vue.js
	 * 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
	 */
	"vue/no-deprecated-html-element-is"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
	 */
	"vue/no-deprecated-inline-template"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow deprecated `model` definition (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-model-definition.html
	 */
	"vue/no-deprecated-model-definition"?: Linter.RuleEntry<VueNoDeprecatedModelDefinition>;
	/**
	 * Disallow deprecated `this` access in props default function (in Vue.js
	 * 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
	 */
	"vue/no-deprecated-props-default-this"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html
	 */
	"vue/no-deprecated-router-link-tag-prop"?: Linter.RuleEntry<VueNoDeprecatedRouterLinkTagProp>;
	/**
	 * Disallow deprecated `scope` attribute (in Vue.js 2.5.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
	 */
	"vue/no-deprecated-scope-attribute"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow deprecated `slot` attribute (in Vue.js 2.6.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
	 */
	"vue/no-deprecated-slot-attribute"?: Linter.RuleEntry<VueNoDeprecatedSlotAttribute>;
	/**
	 * Disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
	 */
	"vue/no-deprecated-slot-scope-attribute"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow use of deprecated `.sync` modifier on `v-bind` directive (in
	 * Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
	 */
	"vue/no-deprecated-v-bind-sync"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow deprecated `v-is` directive (in Vue.js 3.1.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-v-is.html
	 */
	"vue/no-deprecated-v-is"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
	 */
	"vue/no-deprecated-v-on-native-modifier"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
	 */
	"vue/no-deprecated-v-on-number-modifiers"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+)
	 *
	 * @see https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html
	 */
	"vue/no-deprecated-vue-config-keycodes"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplication of field names
	 *
	 * @see https://eslint.vuejs.org/rules/no-dupe-keys.html
	 */
	"vue/no-dupe-keys"?: Linter.RuleEntry<VueNoDupeKeys>;
	/**
	 * Disallow duplicate conditions in `v-if` / `v-else-if` chains
	 *
	 * @see https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
	 */
	"vue/no-dupe-v-else-if"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`
	 *
	 * @see https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
	 */
	"vue/no-duplicate-attr-inheritance"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow duplication of attributes
	 *
	 * @see https://eslint.vuejs.org/rules/no-duplicate-attributes.html
	 */
	"vue/no-duplicate-attributes"?: Linter.RuleEntry<VueNoDuplicateAttributes>;
	/**
	 * Disallow the `<template>` `<script>` `<style>` block to be empty
	 *
	 * @see https://eslint.vuejs.org/rules/no-empty-component-block.html
	 */
	"vue/no-empty-component-block"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty destructuring patterns in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-empty-pattern.html
	 */
	"vue/no-empty-pattern"?: Linter.RuleEntry<VueNoEmptyPattern>;
	/**
	 * Disallow `export` in `<script setup>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-export-in-script-setup.html
	 */
	"vue/no-export-in-script-setup"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow asynchronously registered `expose`
	 *
	 * @see https://eslint.vuejs.org/rules/no-expose-after-await.html
	 */
	"vue/no-expose-after-await"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary parentheses in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-extra-parens.html
	 */
	"vue/no-extra-parens"?: Linter.RuleEntry<VueNoExtraParens>;
	/**
	 * Require valid keys in model option
	 *
	 * @deprecated
	 * @see https://eslint.vuejs.org/rules/no-invalid-model-keys.html
	 */
	"vue/no-invalid-model-keys"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow irregular whitespace in `.vue` files
	 *
	 * @see https://eslint.vuejs.org/rules/no-irregular-whitespace.html
	 */
	"vue/no-irregular-whitespace"?: Linter.RuleEntry<VueNoIrregularWhitespace>;
	/**
	 * Disallow asynchronously registered lifecycle hooks
	 *
	 * @see https://eslint.vuejs.org/rules/no-lifecycle-after-await.html
	 */
	"vue/no-lifecycle-after-await"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-lone-template.html
	 */
	"vue/no-lone-template"?: Linter.RuleEntry<VueNoLoneTemplate>;
	/**
	 * Disallow literal numbers that lose precision in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-loss-of-precision.html
	 */
	"vue/no-loss-of-precision"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow multiple spaces
	 *
	 * @see https://eslint.vuejs.org/rules/no-multi-spaces.html
	 */
	"vue/no-multi-spaces"?: Linter.RuleEntry<VueNoMultiSpaces>;
	/**
	 * Disallow to pass multiple objects into array to class
	 *
	 * @see https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
	 */
	"vue/no-multiple-objects-in-class"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow to pass multiple arguments to scoped slots
	 *
	 * @see https://eslint.vuejs.org/rules/no-multiple-slot-args.html
	 */
	"vue/no-multiple-slot-args"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow adding multiple root nodes to the template
	 *
	 * @see https://eslint.vuejs.org/rules/no-multiple-template-root.html
	 */
	"vue/no-multiple-template-root"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow mutation of component props
	 *
	 * @see https://eslint.vuejs.org/rules/no-mutating-props.html
	 */
	"vue/no-mutating-props"?: Linter.RuleEntry<VueNoMutatingProps>;
	/**
	 * Disallow parsing errors in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-parsing-error.html
	 */
	"vue/no-parsing-error"?: Linter.RuleEntry<VueNoParsingError>;
	/**
	 * Disallow a potential typo in your component property
	 *
	 * @see https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
	 */
	"vue/no-potential-component-option-typo"?: Linter.RuleEntry<VueNoPotentialComponentOptionTypo>;
	/**
	 * Disallow use of value wrapped by `ref()` (Composition API) as an operand
	 *
	 * @see https://eslint.vuejs.org/rules/no-ref-as-operand.html
	 */
	"vue/no-ref-as-operand"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usages of ref objects that can lead to loss of reactivity
	 *
	 * @deprecated
	 * @see https://eslint.vuejs.org/rules/no-ref-object-destructure.html
	 */
	"vue/no-ref-object-destructure"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usages of ref objects that can lead to loss of reactivity
	 *
	 * @see https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html
	 */
	"vue/no-ref-object-reactivity-loss"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce props with default values to be optional
	 *
	 * @see https://eslint.vuejs.org/rules/no-required-prop-with-default.html
	 */
	"vue/no-required-prop-with-default"?: Linter.RuleEntry<VueNoRequiredPropWithDefault>;
	/**
	 * Disallow the use of reserved names in component definitions
	 *
	 * @see https://eslint.vuejs.org/rules/no-reserved-component-names.html
	 */
	"vue/no-reserved-component-names"?: Linter.RuleEntry<VueNoReservedComponentNames>;
	/**
	 * Disallow overwriting reserved keys
	 *
	 * @see https://eslint.vuejs.org/rules/no-reserved-keys.html
	 */
	"vue/no-reserved-keys"?: Linter.RuleEntry<VueNoReservedKeys>;
	/**
	 * Disallow reserved names in props
	 *
	 * @see https://eslint.vuejs.org/rules/no-reserved-props.html
	 */
	"vue/no-reserved-props"?: Linter.RuleEntry<VueNoReservedProps>;
	/**
	 * Disallow specific block
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-block.html
	 */
	"vue/no-restricted-block"?: Linter.RuleEntry<VueNoRestrictedBlock>;
	/**
	 * Disallow asynchronously called restricted methods
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
	 */
	"vue/no-restricted-call-after-await"?: Linter.RuleEntry<VueNoRestrictedCallAfterAwait>;
	/**
	 * Disallow specific classes in Vue components
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-class.html
	 */
	"vue/no-restricted-class"?: Linter.RuleEntry<VueNoRestrictedClass>;
	/**
	 * Disallow specific component names
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-component-names.html
	 */
	"vue/no-restricted-component-names"?: Linter.RuleEntry<VueNoRestrictedComponentNames>;
	/**
	 * Disallow specific component option
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-component-options.html
	 */
	"vue/no-restricted-component-options"?: Linter.RuleEntry<VueNoRestrictedComponentOptions>;
	/**
	 * Disallow specific custom event
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-custom-event.html
	 */
	"vue/no-restricted-custom-event"?: Linter.RuleEntry<VueNoRestrictedCustomEvent>;
	/**
	 * Disallow specific HTML elements
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-html-elements.html
	 */
	"vue/no-restricted-html-elements"?: Linter.RuleEntry<VueNoRestrictedHtmlElements>;
	/**
	 * Disallow specific props
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-props.html
	 */
	"vue/no-restricted-props"?: Linter.RuleEntry<VueNoRestrictedProps>;
	/**
	 * Disallow specific attribute
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
	 */
	"vue/no-restricted-static-attribute"?: Linter.RuleEntry<VueNoRestrictedStaticAttribute>;
	/**
	 * Disallow specified syntax in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-syntax.html
	 */
	"vue/no-restricted-syntax"?: Linter.RuleEntry<VueNoRestrictedSyntax>;
	/**
	 * Disallow specific argument in `v-bind`
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-v-bind.html
	 */
	"vue/no-restricted-v-bind"?: Linter.RuleEntry<VueNoRestrictedVBind>;
	/**
	 * Disallow specific argument in `v-on`
	 *
	 * @see https://eslint.vuejs.org/rules/no-restricted-v-on.html
	 */
	"vue/no-restricted-v-on"?: Linter.RuleEntry<VueNoRestrictedVOn>;
	/**
	 * Disallow `v-if` directives on root element
	 *
	 * @see https://eslint.vuejs.org/rules/no-root-v-if.html
	 */
	"vue/no-root-v-if"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usages that lose the reactivity of `props` passed to `setup`
	 *
	 * @deprecated
	 * @see https://eslint.vuejs.org/rules/no-setup-props-destructure.html
	 */
	"vue/no-setup-props-destructure"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow usages that lose the reactivity of `props` passed to `setup`
	 *
	 * @see https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html
	 */
	"vue/no-setup-props-reactivity-loss"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce component's data property to be a function
	 *
	 * @see https://eslint.vuejs.org/rules/no-shared-component-data.html
	 */
	"vue/no-shared-component-data"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow side effects in computed properties
	 *
	 * @see https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
	 */
	"vue/no-side-effects-in-computed-properties"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow spaces around equal signs in attribute
	 *
	 * @see https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
	 */
	"vue/no-spaces-around-equal-signs-in-attribute"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow sparse arrays in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-sparse-arrays.html
	 */
	"vue/no-sparse-arrays"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow static inline `style` attributes
	 *
	 * @see https://eslint.vuejs.org/rules/no-static-inline-styles.html
	 */
	"vue/no-static-inline-styles"?: Linter.RuleEntry<VueNoStaticInlineStyles>;
	/**
	 * Disallow `key` attribute on `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-template-key.html
	 */
	"vue/no-template-key"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow variable declarations from shadowing variables declared in the
	 * outer scope
	 *
	 * @see https://eslint.vuejs.org/rules/no-template-shadow.html
	 */
	"vue/no-template-shadow"?: Linter.RuleEntry<VueNoTemplateShadow>;
	/**
	 * Disallow target="_blank" attribute without rel="noopener noreferrer"
	 *
	 * @see https://eslint.vuejs.org/rules/no-template-target-blank.html
	 */
	"vue/no-template-target-blank"?: Linter.RuleEntry<VueNoTemplateTargetBlank>;
	/**
	 * Disallow mustaches in `<textarea>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-textarea-mustache.html
	 */
	"vue/no-textarea-mustache"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow `this` usage in a `beforeRouteEnter` method
	 *
	 * @see https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
	 */
	"vue/no-this-in-before-route-enter"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow use of undefined components in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-undef-components.html
	 */
	"vue/no-undef-components"?: Linter.RuleEntry<VueNoUndefComponents>;
	/**
	 * Disallow undefined properties
	 *
	 * @see https://eslint.vuejs.org/rules/no-undef-properties.html
	 */
	"vue/no-undef-properties"?: Linter.RuleEntry<VueNoUndefProperties>;
	/**
	 * Disallow unsupported Vue.js syntax on the specified version
	 *
	 * @see https://eslint.vuejs.org/rules/no-unsupported-features.html
	 */
	"vue/no-unsupported-features"?: Linter.RuleEntry<VueNoUnsupportedFeatures>;
	/**
	 * Disallow registering components that are not used inside templates
	 *
	 * @see https://eslint.vuejs.org/rules/no-unused-components.html
	 */
	"vue/no-unused-components"?: Linter.RuleEntry<VueNoUnusedComponents>;
	/**
	 * Disallow unused emit declarations
	 *
	 * @see https://eslint.vuejs.org/rules/no-unused-emit-declarations.html
	 */
	"vue/no-unused-emit-declarations"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused properties
	 *
	 * @see https://eslint.vuejs.org/rules/no-unused-properties.html
	 */
	"vue/no-unused-properties"?: Linter.RuleEntry<VueNoUnusedProperties>;
	/**
	 * Disallow unused refs
	 *
	 * @see https://eslint.vuejs.org/rules/no-unused-refs.html
	 */
	"vue/no-unused-refs"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unused variable definitions of v-for directives or scope
	 * attributes
	 *
	 * @see https://eslint.vuejs.org/rules/no-unused-vars.html
	 */
	"vue/no-unused-vars"?: Linter.RuleEntry<VueNoUnusedVars>;
	/**
	 * Disallow use computed property like method
	 *
	 * @see https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html
	 */
	"vue/no-use-computed-property-like-method"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using `v-else-if`/`v-else` on the same element as `v-for`
	 *
	 * @see https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html
	 */
	"vue/no-use-v-else-with-v-for"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow using `v-if` on the same element as `v-for`
	 *
	 * @see https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
	 */
	"vue/no-use-v-if-with-v-for"?: Linter.RuleEntry<VueNoUseVIfWithVFor>;
	/**
	 * Disallow unnecessary concatenation of literals or template literals in
	 * `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-useless-concat.html
	 */
	"vue/no-useless-concat"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary mustache interpolations
	 *
	 * @see https://eslint.vuejs.org/rules/no-useless-mustaches.html
	 */
	"vue/no-useless-mustaches"?: Linter.RuleEntry<VueNoUselessMustaches>;
	/**
	 * Disallow useless attribute on `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-useless-template-attributes.html
	 */
	"vue/no-useless-template-attributes"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow unnecessary `v-bind` directives
	 *
	 * @see https://eslint.vuejs.org/rules/no-useless-v-bind.html
	 */
	"vue/no-useless-v-bind"?: Linter.RuleEntry<VueNoUselessVBind>;
	/**
	 * Disallow `key` attribute on `<template v-for>`
	 *
	 * @see https://eslint.vuejs.org/rules/no-v-for-template-key.html
	 */
	"vue/no-v-for-template-key"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow key of `<template v-for>` placed on child elements
	 *
	 * @see https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
	 */
	"vue/no-v-for-template-key-on-child"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow use of v-html to prevent XSS attack
	 *
	 * @see https://eslint.vuejs.org/rules/no-v-html.html
	 */
	"vue/no-v-html"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow adding an argument to `v-model` used in custom component
	 *
	 * @see https://eslint.vuejs.org/rules/no-v-model-argument.html
	 */
	"vue/no-v-model-argument"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow use of v-text
	 *
	 * @see https://eslint.vuejs.org/rules/no-v-text.html
	 */
	"vue/no-v-text"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow v-text / v-html on component
	 *
	 * @see https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html
	 */
	"vue/no-v-text-v-html-on-component"?: Linter.RuleEntry<VueNoVTextVHtmlOnComponent>;
	/**
	 * Disallow asynchronously registered `watch`
	 *
	 * @see https://eslint.vuejs.org/rules/no-watch-after-await.html
	 */
	"vue/no-watch-after-await"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent line breaks after opening and before closing braces in
	 * `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/object-curly-newline.html
	 */
	"vue/object-curly-newline"?: Linter.RuleEntry<VueObjectCurlyNewline>;
	/**
	 * Enforce consistent spacing inside braces in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/object-curly-spacing.html
	 */
	"vue/object-curly-spacing"?: Linter.RuleEntry<VueObjectCurlySpacing>;
	/**
	 * Enforce placing object properties on separate lines in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/object-property-newline.html
	 */
	"vue/object-property-newline"?: Linter.RuleEntry<VueObjectPropertyNewline>;
	/**
	 * Require or disallow method and property shorthand syntax for object
	 * literals in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/object-shorthand.html
	 */
	"vue/object-shorthand"?: Linter.RuleEntry<VueObjectShorthand>;
	/**
	 * Enforce that each component should be in its own file
	 *
	 * @see https://eslint.vuejs.org/rules/one-component-per-file.html
	 */
	"vue/one-component-per-file"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent linebreak style for operators in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/operator-linebreak.html
	 */
	"vue/operator-linebreak"?: Linter.RuleEntry<VueOperatorLinebreak>;
	/**
	 * Enforce order of properties in components
	 *
	 * @see https://eslint.vuejs.org/rules/order-in-components.html
	 */
	"vue/order-in-components"?: Linter.RuleEntry<VueOrderInComponents>;
	/**
	 * Require or disallow padding lines between blocks
	 *
	 * @see https://eslint.vuejs.org/rules/padding-line-between-blocks.html
	 */
	"vue/padding-line-between-blocks"?: Linter.RuleEntry<VuePaddingLineBetweenBlocks>;
	/**
	 * Require or disallow newlines between sibling tags in template
	 *
	 * @see https://eslint.vuejs.org/rules/padding-line-between-tags.html
	 */
	"vue/padding-line-between-tags"?: Linter.RuleEntry<VuePaddingLineBetweenTags>;
	/**
	 * Require or disallow padding lines in component definition
	 *
	 * @see https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html
	 */
	"vue/padding-lines-in-component-definition"?: Linter.RuleEntry<VuePaddingLinesInComponentDefinition>;
	/**
	 * Enforce use of `defineOptions` instead of default export.
	 *
	 * @see https://eslint.vuejs.org/rules/prefer-define-options.html
	 */
	"vue/prefer-define-options"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce import from 'vue' instead of import from '@vue/*'
	 *
	 * @see https://eslint.vuejs.org/rules/prefer-import-from-vue.html
	 */
	"vue/prefer-import-from-vue"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce `Boolean` comes first in component prop types
	 *
	 * @see https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html
	 */
	"vue/prefer-prop-type-boolean-first"?: Linter.RuleEntry<[]>;
	/**
	 * Require static class names in template to be in a separate `class`
	 * attribute
	 *
	 * @see https://eslint.vuejs.org/rules/prefer-separate-static-class.html
	 */
	"vue/prefer-separate-static-class"?: Linter.RuleEntry<[]>;
	/**
	 * Require template literals instead of string concatenation in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/prefer-template.html
	 */
	"vue/prefer-template"?: Linter.RuleEntry<[]>;
	/**
	 * Require shorthand form attribute when `v-bind` value is `true`
	 *
	 * @see https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
	 */
	"vue/prefer-true-attribute-shorthand"?: Linter.RuleEntry<VuePreferTrueAttributeShorthand>;
	/**
	 * Enforce specific casing for the Prop name in Vue components
	 *
	 * @see https://eslint.vuejs.org/rules/prop-name-casing.html
	 */
	"vue/prop-name-casing"?: Linter.RuleEntry<VuePropNameCasing>;
	/**
	 * Require quotes around object literal property names in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/quote-props.html
	 */
	"vue/quote-props"?: Linter.RuleEntry<VueQuoteProps>;
	/**
	 * Require `v-bind:is` of `<component>` elements
	 *
	 * @see https://eslint.vuejs.org/rules/require-component-is.html
	 */
	"vue/require-component-is"?: Linter.RuleEntry<[]>;
	/**
	 * Require default value for props
	 *
	 * @see https://eslint.vuejs.org/rules/require-default-prop.html
	 */
	"vue/require-default-prop"?: Linter.RuleEntry<[]>;
	/**
	 * Require the component to be directly exported
	 *
	 * @see https://eslint.vuejs.org/rules/require-direct-export.html
	 */
	"vue/require-direct-export"?: Linter.RuleEntry<VueRequireDirectExport>;
	/**
	 * Require type definitions in emits
	 *
	 * @see https://eslint.vuejs.org/rules/require-emit-validator.html
	 */
	"vue/require-emit-validator"?: Linter.RuleEntry<[]>;
	/**
	 * Require `emits` option with name triggered by `$emit()`
	 *
	 * @see https://eslint.vuejs.org/rules/require-explicit-emits.html
	 */
	"vue/require-explicit-emits"?: Linter.RuleEntry<VueRequireExplicitEmits>;
	/**
	 * Require slots to be explicitly defined
	 *
	 * @see https://eslint.vuejs.org/rules/require-explicit-slots.html
	 */
	"vue/require-explicit-slots"?: Linter.RuleEntry<[]>;
	/**
	 * Require declare public properties using `expose`
	 *
	 * @see https://eslint.vuejs.org/rules/require-expose.html
	 */
	"vue/require-expose"?: Linter.RuleEntry<[]>;
	/**
	 * Require a certain macro variable name
	 *
	 * @see https://eslint.vuejs.org/rules/require-macro-variable-name.html
	 */
	"vue/require-macro-variable-name"?: Linter.RuleEntry<VueRequireMacroVariableName>;
	/**
	 * Require a name property in Vue components
	 *
	 * @see https://eslint.vuejs.org/rules/require-name-property.html
	 */
	"vue/require-name-property"?: Linter.RuleEntry<[]>;
	/**
	 * Require props to have a comment
	 *
	 * @see https://eslint.vuejs.org/rules/require-prop-comment.html
	 */
	"vue/require-prop-comment"?: Linter.RuleEntry<VueRequirePropComment>;
	/**
	 * Require prop type to be a constructor
	 *
	 * @see https://eslint.vuejs.org/rules/require-prop-type-constructor.html
	 */
	"vue/require-prop-type-constructor"?: Linter.RuleEntry<[]>;
	/**
	 * Require type definitions in props
	 *
	 * @see https://eslint.vuejs.org/rules/require-prop-types.html
	 */
	"vue/require-prop-types"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce render function to always return value
	 *
	 * @see https://eslint.vuejs.org/rules/require-render-return.html
	 */
	"vue/require-render-return"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce properties of `$slots` to be used as a function
	 *
	 * @see https://eslint.vuejs.org/rules/require-slots-as-functions.html
	 */
	"vue/require-slots-as-functions"?: Linter.RuleEntry<[]>;
	/**
	 * Require control the display of the content inside `<transition>`
	 *
	 * @see https://eslint.vuejs.org/rules/require-toggle-inside-transition.html
	 */
	"vue/require-toggle-inside-transition"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce adding type declarations to object props
	 *
	 * @see https://eslint.vuejs.org/rules/require-typed-object-prop.html
	 */
	"vue/require-typed-object-prop"?: Linter.RuleEntry<[]>;
	/**
	 * Require `ref` and `shallowRef` functions to be strongly typed
	 *
	 * @see https://eslint.vuejs.org/rules/require-typed-ref.html
	 */
	"vue/require-typed-ref"?: Linter.RuleEntry<[]>;
	/**
	 * Require `v-bind:key` with `v-for` directives
	 *
	 * @see https://eslint.vuejs.org/rules/require-v-for-key.html
	 */
	"vue/require-v-for-key"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce props default values to be valid
	 *
	 * @see https://eslint.vuejs.org/rules/require-valid-default-prop.html
	 */
	"vue/require-valid-default-prop"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce that a return statement is present in computed property
	 *
	 * @see https://eslint.vuejs.org/rules/return-in-computed-property.html
	 */
	"vue/return-in-computed-property"?: Linter.RuleEntry<VueReturnInComputedProperty>;
	/**
	 * Enforce that a return statement is present in emits validator
	 *
	 * @see https://eslint.vuejs.org/rules/return-in-emits-validator.html
	 */
	"vue/return-in-emits-validator"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce consistent indentation in `<script>`
	 *
	 * @see https://eslint.vuejs.org/rules/script-indent.html
	 */
	"vue/script-indent"?: Linter.RuleEntry<VueScriptIndent>;
	/**
	 * Prevent `<script setup>` variables used in `<template>` to be marked as
	 * unused
	 *
	 * @deprecated
	 * @see https://eslint.vuejs.org/rules/script-setup-uses-vars.html
	 */
	"vue/script-setup-uses-vars"?: Linter.RuleEntry<[]>;
	/**
	 * Require a line break before and after the contents of a singleline element
	 *
	 * @see https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
	 */
	"vue/singleline-html-element-content-newline"?: Linter.RuleEntry<VueSinglelineHtmlElementContentNewline>;
	/**
	 * Enforce sort-keys in a manner that is compatible with order-in-components
	 *
	 * @see https://eslint.vuejs.org/rules/sort-keys.html
	 */
	"vue/sort-keys"?: Linter.RuleEntry<VueSortKeys>;
	/**
	 * Enforce consistent spacing inside parentheses in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/space-in-parens.html
	 */
	"vue/space-in-parens"?: Linter.RuleEntry<VueSpaceInParens>;
	/**
	 * Require spacing around infix operators in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/space-infix-ops.html
	 */
	"vue/space-infix-ops"?: Linter.RuleEntry<VueSpaceInfixOps>;
	/**
	 * Enforce consistent spacing before or after unary operators in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/space-unary-ops.html
	 */
	"vue/space-unary-ops"?: Linter.RuleEntry<VueSpaceUnaryOps>;
	/**
	 * Enforce static class names order
	 *
	 * @see https://eslint.vuejs.org/rules/static-class-names-order.html
	 */
	"vue/static-class-names-order"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow spacing around embedded expressions of template strings
	 * in `<template>`
	 *
	 * @see https://eslint.vuejs.org/rules/template-curly-spacing.html
	 */
	"vue/template-curly-spacing"?: Linter.RuleEntry<VueTemplateCurlySpacing>;
	/**
	 * Disallow usage of `this` in template
	 *
	 * @see https://eslint.vuejs.org/rules/this-in-template.html
	 */
	"vue/this-in-template"?: Linter.RuleEntry<VueThisInTemplate>;
	/**
	 * Enforce usage of `exact` modifier on `v-on`
	 *
	 * @see https://eslint.vuejs.org/rules/use-v-on-exact.html
	 */
	"vue/use-v-on-exact"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce `v-bind` directive style
	 *
	 * @see https://eslint.vuejs.org/rules/v-bind-style.html
	 */
	"vue/v-bind-style"?: Linter.RuleEntry<VueVBindStyle>;
	/**
	 * Enforce `v-for` directive's delimiter style
	 *
	 * @see https://eslint.vuejs.org/rules/v-for-delimiter-style.html
	 */
	"vue/v-for-delimiter-style"?: Linter.RuleEntry<VueVForDelimiterStyle>;
	/**
	 * Require key attribute for conditionally rendered repeated components
	 *
	 * @see https://eslint.vuejs.org/rules/v-if-else-key.html
	 */
	"vue/v-if-else-key"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce v-on event naming style on custom components in template
	 *
	 * @see https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
	 */
	"vue/v-on-event-hyphenation"?: Linter.RuleEntry<VueVOnEventHyphenation>;
	/**
	 * Enforce or forbid parentheses after method calls without arguments in
	 * `v-on` directives
	 *
	 * @deprecated
	 * @see https://eslint.vuejs.org/rules/v-on-function-call.html
	 */
	"vue/v-on-function-call"?: Linter.RuleEntry<VueVOnFunctionCall>;
	/**
	 * Enforce writing style for handlers in `v-on` directives
	 *
	 * @see https://eslint.vuejs.org/rules/v-on-handler-style.html
	 */
	"vue/v-on-handler-style"?: Linter.RuleEntry<VueVOnHandlerStyle>;
	/**
	 * Enforce `v-on` directive style
	 *
	 * @see https://eslint.vuejs.org/rules/v-on-style.html
	 */
	"vue/v-on-style"?: Linter.RuleEntry<VueVOnStyle>;
	/**
	 * Enforce `v-slot` directive style
	 *
	 * @see https://eslint.vuejs.org/rules/v-slot-style.html
	 */
	"vue/v-slot-style"?: Linter.RuleEntry<VueVSlotStyle>;
	/**
	 * Require valid attribute names
	 *
	 * @see https://eslint.vuejs.org/rules/valid-attribute-name.html
	 */
	"vue/valid-attribute-name"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `defineEmits` compiler macro
	 *
	 * @see https://eslint.vuejs.org/rules/valid-define-emits.html
	 */
	"vue/valid-define-emits"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `defineOptions` compiler macro
	 *
	 * @see https://eslint.vuejs.org/rules/valid-define-options.html
	 */
	"vue/valid-define-options"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `defineProps` compiler macro
	 *
	 * @see https://eslint.vuejs.org/rules/valid-define-props.html
	 */
	"vue/valid-define-props"?: Linter.RuleEntry<[]>;
	/**
	 * Require valid keys in model option
	 *
	 * @see https://eslint.vuejs.org/rules/valid-model-definition.html
	 */
	"vue/valid-model-definition"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `nextTick` function calls
	 *
	 * @see https://eslint.vuejs.org/rules/valid-next-tick.html
	 */
	"vue/valid-next-tick"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid template root
	 *
	 * @see https://eslint.vuejs.org/rules/valid-template-root.html
	 */
	"vue/valid-template-root"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-bind` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-bind.html
	 */
	"vue/valid-v-bind"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `.sync` modifier on `v-bind` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-bind-sync.html
	 */
	"vue/valid-v-bind-sync"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-cloak` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-cloak.html
	 */
	"vue/valid-v-cloak"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-else` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-else.html
	 */
	"vue/valid-v-else"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-else-if` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-else-if.html
	 */
	"vue/valid-v-else-if"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-for` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-for.html
	 */
	"vue/valid-v-for"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-html` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-html.html
	 */
	"vue/valid-v-html"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-if` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-if.html
	 */
	"vue/valid-v-if"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-is` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-is.html
	 */
	"vue/valid-v-is"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-memo` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-memo.html
	 */
	"vue/valid-v-memo"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-model` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-model.html
	 */
	"vue/valid-v-model"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-on` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-on.html
	 */
	"vue/valid-v-on"?: Linter.RuleEntry<VueValidVOn>;
	/**
	 * Enforce valid `v-once` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-once.html
	 */
	"vue/valid-v-once"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-pre` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-pre.html
	 */
	"vue/valid-v-pre"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-show` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-show.html
	 */
	"vue/valid-v-show"?: Linter.RuleEntry<[]>;
	/**
	 * Enforce valid `v-slot` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-slot.html
	 */
	"vue/valid-v-slot"?: Linter.RuleEntry<VueValidVSlot>;
	/**
	 * Enforce valid `v-text` directives
	 *
	 * @see https://eslint.vuejs.org/rules/valid-v-text.html
	 */
	"vue/valid-v-text"?: Linter.RuleEntry<[]>;
	/**
	 * Require parentheses around immediate `function` invocations
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/wrap-iife
	 */
	"wrap-iife"?: Linter.RuleEntry<WrapIife>;
	/**
	 * Require parenthesis around regex literals
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/wrap-regex
	 */
	"wrap-regex"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow block style mappings.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html
	 */
	"yaml/block-mapping"?: Linter.RuleEntry<YamlBlockMapping>;
	/**
	 * Enforce consistent line breaks after `:` indicator
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html
	 */
	"yaml/block-mapping-colon-indicator-newline"?: Linter.RuleEntry<YamlBlockMappingColonIndicatorNewline>;
	/**
	 * Enforce consistent line breaks after `?` indicator
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html
	 */
	"yaml/block-mapping-question-indicator-newline"?: Linter.RuleEntry<YamlBlockMappingQuestionIndicatorNewline>;
	/**
	 * Require or disallow block style sequences.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html
	 */
	"yaml/block-sequence"?: Linter.RuleEntry<YamlBlockSequence>;
	/**
	 * Enforce consistent line breaks after `-` indicator
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html
	 */
	"yaml/block-sequence-hyphen-indicator-newline"?: Linter.RuleEntry<YamlBlockSequenceHyphenIndicatorNewline>;
	/**
	 * Enforce YAML file extension
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html
	 */
	"yaml/file-extension"?: Linter.RuleEntry<YamlFileExtension>;
	/**
	 * Enforce consistent line breaks inside braces
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html
	 */
	"yaml/flow-mapping-curly-newline"?: Linter.RuleEntry<YamlFlowMappingCurlyNewline>;
	/**
	 * Enforce consistent spacing inside braces
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html
	 */
	"yaml/flow-mapping-curly-spacing"?: Linter.RuleEntry<YamlFlowMappingCurlySpacing>;
	/**
	 * Enforce linebreaks after opening and before closing flow sequence brackets
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html
	 */
	"yaml/flow-sequence-bracket-newline"?: Linter.RuleEntry<YamlFlowSequenceBracketNewline>;
	/**
	 * Enforce consistent spacing inside flow sequence brackets
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html
	 */
	"yaml/flow-sequence-bracket-spacing"?: Linter.RuleEntry<YamlFlowSequenceBracketSpacing>;
	/**
	 * Enforce consistent indentation
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html
	 */
	"yaml/indent"?: Linter.RuleEntry<YamlIndent>;
	/**
	 * Enforce naming convention to key names
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html
	 */
	"yaml/key-name-casing"?: Linter.RuleEntry<YamlKeyNameCasing>;
	/**
	 * Enforce consistent spacing between keys and values in mapping pairs
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html
	 */
	"yaml/key-spacing"?: Linter.RuleEntry<YamlKeySpacing>;
	/**
	 * Disallow empty document
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html
	 */
	"yaml/no-empty-document"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty mapping keys
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html
	 */
	"yaml/no-empty-key"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty mapping values
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html
	 */
	"yaml/no-empty-mapping-value"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow empty sequence entries
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html
	 */
	"yaml/no-empty-sequence-entry"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow irregular whitespace
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html
	 */
	"yaml/no-irregular-whitespace"?: Linter.RuleEntry<YamlNoIrregularWhitespace>;
	/**
	 * Disallow multiple empty lines
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html
	 */
	"yaml/no-multiple-empty-lines"?: Linter.RuleEntry<YamlNoMultipleEmptyLines>;
	/**
	 * Disallow tabs for indentation.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html
	 */
	"yaml/no-tab-indent"?: Linter.RuleEntry<[]>;
	/**
	 * Disallow trailing zeros for floats
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html
	 */
	"yaml/no-trailing-zeros"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow plain style scalar.
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html
	 */
	"yaml/plain-scalar"?: Linter.RuleEntry<YamlPlainScalar>;
	/**
	 * Enforce the consistent use of either double, or single quotes
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html
	 */
	"yaml/quotes"?: Linter.RuleEntry<YamlQuotes>;
	/**
	 * Disallow mapping keys other than strings
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html
	 */
	"yaml/require-string-key"?: Linter.RuleEntry<[]>;
	/**
	 * Require mapping keys to be sorted
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html
	 */
	"yaml/sort-keys"?: Linter.RuleEntry<YamlSortKeys>;
	/**
	 * Require sequence values to be sorted
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html
	 */
	"yaml/sort-sequence-values"?: Linter.RuleEntry<YamlSortSequenceValues>;
	/**
	 * Enforce consistent spacing after the `#` in a comment
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html
	 */
	"yaml/spaced-comment"?: Linter.RuleEntry<YamlSpacedComment>;
	/**
	 * Disallow parsing errors in Vue custom blocks
	 *
	 * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html
	 */
	"yaml/vue-custom-block/no-parsing-error"?: Linter.RuleEntry<[]>;
	/**
	 * Require or disallow spacing around the `*` in `yield*` expressions
	 *
	 * @deprecated
	 * @see https://eslint.org/docs/latest/rules/yield-star-spacing
	 */
	"yield-star-spacing"?: Linter.RuleEntry<YieldStarSpacing>;
	/**
	 * Require or disallow "Yoda" conditions
	 *
	 * @see https://eslint.org/docs/latest/rules/yoda
	 */
	"yoda"?: Linter.RuleEntry<Yoda>;
}

/* ======= Declarations ======= */
// ----- accessor-pairs -----
type AccessorPairs =
	| []
	| [
			{
				getWithoutSet?: boolean;
				setWithoutGet?: boolean;
				enforceForClassMembers?: boolean;
			},
	  ];
// ----- array-bracket-newline -----
type ArrayBracketNewline =
	| []
	| [
			| ("always" | "never" | "consistent")
			| {
					multiline?: boolean;
					minItems?: number | null;
			  },
	  ];
// ----- array-bracket-spacing -----
type ArrayBracketSpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				singleValue?: boolean;
				objectsInArrays?: boolean;
				arraysInArrays?: boolean;
			},
	  ];
// ----- array-callback-return -----
type ArrayCallbackReturn =
	| []
	| [
			{
				allowImplicit?: boolean;
				checkForEach?: boolean;
				allowVoid?: boolean;
			},
	  ];
// ----- array-element-newline -----
type ArrayElementNewline =
	| []
	| [
			| _ArrayElementNewlineBasicConfig
			| {
					ArrayExpression?: _ArrayElementNewlineBasicConfig;
					ArrayPattern?: _ArrayElementNewlineBasicConfig;
			  },
	  ];
type _ArrayElementNewlineBasicConfig =
	| ("always" | "never" | "consistent")
	| {
			multiline?: boolean;
			minItems?: number | null;
	  };
// ----- arrow-body-style -----
type ArrowBodyStyle =
	| []
	| ["always" | "never"]
	| []
	| ["as-needed"]
	| [
			"as-needed",
			{
				requireReturnForObjectLiteral?: boolean;
			},
	  ];
// ----- arrow-parens -----
type ArrowParens =
	| []
	| ["always" | "as-needed"]
	| [
			"always" | "as-needed",
			{
				requireForBlockBody?: boolean;
			},
	  ];
// ----- arrow-spacing -----
type ArrowSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- block-spacing -----
type BlockSpacing = [] | ["always" | "never"];
// ----- brace-style -----
type BraceStyle =
	| []
	| ["1tbs" | "stroustrup" | "allman"]
	| [
			"1tbs" | "stroustrup" | "allman",
			{
				allowSingleLine?: boolean;
			},
	  ];
// ----- callback-return -----
type CallbackReturn = [] | [string[]];
// ----- camelcase -----
type Camelcase =
	| []
	| [
			{
				ignoreDestructuring?: boolean;
				ignoreImports?: boolean;
				ignoreGlobals?: boolean;
				properties?: "always" | "never";

				allow?: string[];
			},
	  ];
// ----- capitalized-comments -----
type CapitalizedComments =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			(
				| {
						ignorePattern?: string;
						ignoreInlineComments?: boolean;
						ignoreConsecutiveComments?: boolean;
				  }
				| {
						line?: {
							ignorePattern?: string;
							ignoreInlineComments?: boolean;
							ignoreConsecutiveComments?: boolean;
						};
						block?: {
							ignorePattern?: string;
							ignoreInlineComments?: boolean;
							ignoreConsecutiveComments?: boolean;
						};
				  }
			),
	  ];
// ----- class-methods-use-this -----
type ClassMethodsUseThis =
	| []
	| [
			{
				exceptMethods?: string[];
				enforceForClassFields?: boolean;
			},
	  ];
// ----- comma-dangle -----
type CommaDangle =
	| []
	| [
			| _CommaDangleValue
			| {
					arrays?: _CommaDangleValueWithIgnore;
					objects?: _CommaDangleValueWithIgnore;
					imports?: _CommaDangleValueWithIgnore;
					exports?: _CommaDangleValueWithIgnore;
					functions?: _CommaDangleValueWithIgnore;
			  },
	  ];
type _CommaDangleValue =
	| "always-multiline"
	| "always"
	| "never"
	| "only-multiline";
type _CommaDangleValueWithIgnore =
	| "always-multiline"
	| "always"
	| "ignore"
	| "never"
	| "only-multiline";
// ----- comma-spacing -----
type CommaSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- comma-style -----
type CommaStyle =
	| []
	| ["first" | "last"]
	| [
			"first" | "last",
			{
				exceptions?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- complexity -----
type Complexity =
	| []
	| [
			| number
			| {
					maximum?: number;
					max?: number;
			  },
	  ];
// ----- computed-property-spacing -----
type ComputedPropertySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				enforceForClassMembers?: boolean;
			},
	  ];
// ----- consistent-return -----
type ConsistentReturn =
	| []
	| [
			{
				treatUndefinedAsUnspecified?: boolean;
			},
	  ];
// ----- consistent-this -----
type ConsistentThis = string[];
// ----- curly -----
type Curly =
	| []
	| ["all"]
	| []
	| ["multi" | "multi-line" | "multi-or-nest"]
	| ["multi" | "multi-line" | "multi-or-nest", "consistent"];
// ----- default-case -----
type DefaultCase =
	| []
	| [
			{
				commentPattern?: string;
			},
	  ];
// ----- dot-location -----
type DotLocation = [] | ["object" | "property"];
// ----- dot-notation -----
type DotNotation =
	| []
	| [
			{
				allowKeywords?: boolean;
				allowPattern?: string;
			},
	  ];
// ----- eol-last -----
type EolLast = [] | ["always" | "never" | "unix" | "windows"];
// ----- eqeqeq -----
type Eqeqeq =
	| []
	| ["always"]
	| [
			"always",
			{
				null?: "always" | "never" | "ignore";
			},
	  ]
	| []
	| ["smart" | "allow-null"];
// ----- eslint-comments/disable-enable-pair -----
type EslintCommentsDisableEnablePair =
	| []
	| [
			{
				allowWholeFile?: boolean;
			},
	  ];
// ----- eslint-comments/no-restricted-disable -----
type EslintCommentsNoRestrictedDisable = string[];
// ----- eslint-comments/no-use -----
type EslintCommentsNoUse =
	| []
	| [
			{
				allow?: (
					| "eslint"
					| "eslint-disable"
					| "eslint-disable-line"
					| "eslint-disable-next-line"
					| "eslint-enable"
					| "eslint-env"
					| "exported"
					| "global"
					| "globals"
				)[];
			},
	  ];
// ----- eslint-comments/require-description -----
type EslintCommentsRequireDescription =
	| []
	| [
			{
				ignore?: (
					| "eslint"
					| "eslint-disable"
					| "eslint-disable-line"
					| "eslint-disable-next-line"
					| "eslint-enable"
					| "eslint-env"
					| "exported"
					| "global"
					| "globals"
				)[];
			},
	  ];
// ----- func-call-spacing -----
type FuncCallSpacing =
	| []
	| ["never"]
	| []
	| ["always"]
	| [
			"always",
			{
				allowNewlines?: boolean;
			},
	  ];
// ----- func-name-matching -----
type FuncNameMatching =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				considerPropertyDescriptor?: boolean;
				includeCommonJSModuleExports?: boolean;
			},
	  ]
	| []
	| [
			{
				considerPropertyDescriptor?: boolean;
				includeCommonJSModuleExports?: boolean;
			},
	  ];
// ----- func-names -----
type FuncNames =
	| []
	| [_FuncNamesValue]
	| [
			_FuncNamesValue,
			{
				generators?: _FuncNamesValue;
			},
	  ];
type _FuncNamesValue = "always" | "as-needed" | "never";
// ----- func-style -----
type FuncStyle =
	| []
	| ["declaration" | "expression"]
	| [
			"declaration" | "expression",
			{
				allowArrowFunctions?: boolean;
				overrides?: {
					namedExports?: "declaration" | "expression" | "ignore";
				};
			},
	  ];
// ----- function-call-argument-newline -----
type FunctionCallArgumentNewline = [] | ["always" | "never" | "consistent"];
// ----- function-paren-newline -----
type FunctionParenNewline =
	| []
	| [
			| (
					| "always"
					| "never"
					| "consistent"
					| "multiline"
					| "multiline-arguments"
			  )
			| {
					minItems?: number;
			  },
	  ];
// ----- generator-star-spacing -----
type GeneratorStarSpacing =
	| []
	| [
			| ("before" | "after" | "both" | "neither")
			| {
					before?: boolean;
					after?: boolean;
					named?:
						| ("before" | "after" | "both" | "neither")
						| {
								before?: boolean;
								after?: boolean;
						  };
					anonymous?:
						| ("before" | "after" | "both" | "neither")
						| {
								before?: boolean;
								after?: boolean;
						  };
					method?:
						| ("before" | "after" | "both" | "neither")
						| {
								before?: boolean;
								after?: boolean;
						  };
			  },
	  ];
// ----- getter-return -----
type GetterReturn =
	| []
	| [
			{
				allowImplicit?: boolean;
			},
	  ];
// ----- grouped-accessor-pairs -----
type GroupedAccessorPairs = [] | ["anyOrder" | "getBeforeSet" | "setBeforeGet"];
// ----- handle-callback-err -----
type HandleCallbackErr = [] | [string];
// ----- html/element-newline -----
type HtmlElementNewline =
	| []
	| [
			{
				skip?: string[];
				[k: string]: unknown | undefined;
			},
	  ];
// ----- html/id-naming-convention -----
type HtmlIdNamingConvention =
	| []
	| ["camelCase" | "snake_case" | "PascalCase" | "kebab-case" | "regex"]
	| [
			"camelCase" | "snake_case" | "PascalCase" | "kebab-case" | "regex",
			{
				pattern?: string;
				flags?: string;
			},
	  ];
// ----- html/indent -----
type HtmlIndent = [] | ["tab" | number];
// ----- html/no-extra-spacing-attrs -----
type HtmlNoExtraSpacingAttrs =
	| []
	| [
			{
				disallowMissing?: boolean;
				enforceBeforeSelfClose?: boolean;
				[k: string]: unknown | undefined;
			},
	  ];
// ----- html/no-multiple-empty-lines -----
type HtmlNoMultipleEmptyLines =
	| []
	| [
			{
				max: number;
			},
	  ];
// ----- html/no-restricted-attr-values -----
type HtmlNoRestrictedAttrValues = {
	attrPatterns: string[];
	attrValuePatterns: string[];
	message?: string;
	[k: string]: unknown | undefined;
}[];
// ----- html/no-restricted-attrs -----
type HtmlNoRestrictedAttrs = {
	tagPatterns: string[];
	attrPatterns: string[];
	message?: string;
	[k: string]: unknown | undefined;
}[];
// ----- html/quotes -----
type HtmlQuotes = [] | ["single" | "double"];
// ----- html/require-attrs -----
type HtmlRequireAttrs = {
	tag: string;
	attr: string;
	value?: string;
}[];
// ----- html/require-closing-tags -----
type HtmlRequireClosingTags =
	| []
	| [
			{
				selfClosing?: "always" | "never";
				allowSelfClosingCustom?: boolean;
			},
	  ];
// ----- html/require-img-alt -----
type HtmlRequireImgAlt =
	| []
	| [
			{
				substitute?: string[];
				[k: string]: unknown | undefined;
			},
	  ];
// ----- html/require-open-graph-protocol -----
type HtmlRequireOpenGraphProtocol = [] | [string[]];
// ----- html/sort-attrs -----
type HtmlSortAttrs =
	| []
	| [
			{
				priority?: string[];
				[k: string]: unknown | undefined;
			},
	  ];
// ----- id-blacklist -----
type IdBlacklist = string[];
// ----- id-denylist -----
type IdDenylist = string[];
// ----- id-length -----
type IdLength =
	| []
	| [
			{
				min?: number;
				max?: number;
				exceptions?: string[];
				exceptionPatterns?: string[];
				properties?: "always" | "never";
			},
	  ];
// ----- id-match -----
type IdMatch =
	| []
	| [string]
	| [
			string,
			{
				properties?: boolean;
				classFields?: boolean;
				onlyDeclarations?: boolean;
				ignoreDestructuring?: boolean;
			},
	  ];
// ----- implicit-arrow-linebreak -----
type ImplicitArrowLinebreak = [] | ["beside" | "below"];
// ----- import/consistent-type-specifier-style -----
type ImportConsistentTypeSpecifierStyle =
	| []
	| ["prefer-inline" | "prefer-top-level"];
// ----- import/dynamic-import-chunkname -----
type ImportDynamicImportChunkname =
	| []
	| [
			{
				importFunctions?: string[];
				allowEmpty?: boolean;
				webpackChunknameFormat?: string;
				[k: string]: unknown | undefined;
			},
	  ];
// ----- import/extensions -----
type ImportExtensions =
	| []
	| ["always" | "ignorePackages" | "never"]
	| []
	| ["always" | "ignorePackages" | "never"]
	| [
			"always" | "ignorePackages" | "never",
			{
				pattern?: {
					[k: string]: "always" | "ignorePackages" | "never";
				};
				ignorePackages?: boolean;
				[k: string]: unknown | undefined;
			},
	  ]
	| []
	| [
			{
				pattern?: {
					[k: string]: "always" | "ignorePackages" | "never";
				};
				ignorePackages?: boolean;
				[k: string]: unknown | undefined;
			},
	  ]
	| []
	| [
			{
				[k: string]: "always" | "ignorePackages" | "never";
			},
	  ]
	| []
	| ["always" | "ignorePackages" | "never"]
	| [
			"always" | "ignorePackages" | "never",
			{
				[k: string]: "always" | "ignorePackages" | "never";
			},
	  ];
// ----- import/first -----
type ImportFirst = [] | ["absolute-first" | "disable-absolute-first"];
// ----- import/group-exports -----
interface ImportGroupExports {
	[k: string]: unknown | undefined;
}
// ----- import/imports-first -----
type ImportImportsFirst = [] | ["absolute-first" | "disable-absolute-first"];
// ----- import/max-dependencies -----
type ImportMaxDependencies =
	| []
	| [
			{
				max?: number;
				ignoreTypeImports?: boolean;
			},
	  ];
// ----- import/named -----
type ImportNamed =
	| []
	| [
			{
				commonjs?: boolean;
			},
	  ];
// ----- import/namespace -----
type ImportNamespace =
	| []
	| [
			{
				allowComputed?: boolean;
			},
	  ];
// ----- import/newline-after-import -----
type ImportNewlineAfterImport =
	| []
	| [
			{
				count?: number;
				exactCount?: boolean;
				considerComments?: boolean;
			},
	  ];
// ----- import/no-absolute-path -----
type ImportNoAbsolutePath =
	| []
	| [
			{
				commonjs?: boolean;
				amd?: boolean;
				esmodule?: boolean;

				ignore?: [string, ...string[]];
			},
	  ];
// ----- import/no-anonymous-default-export -----
type ImportNoAnonymousDefaultExport =
	| []
	| [
			{
				allowArray?: boolean;

				allowArrowFunction?: boolean;

				allowCallExpression?: boolean;

				allowAnonymousClass?: boolean;

				allowAnonymousFunction?: boolean;

				allowLiteral?: boolean;

				allowObject?: boolean;

				allowNew?: boolean;
			},
	  ];
// ----- import/no-commonjs -----
type ImportNoCommonjs =
	| []
	| ["allow-primitive-modules"]
	| []
	| [
			{
				allowPrimitiveModules?: boolean;
				allowRequire?: boolean;
				allowConditionalRequire?: boolean;
			},
	  ];
// ----- import/no-cycle -----
type ImportNoCycle =
	| []
	| [
			{
				commonjs?: boolean;
				amd?: boolean;
				esmodule?: boolean;

				ignore?: [string, ...string[]];
				maxDepth?: number | "∞";

				ignoreExternal?: boolean;

				allowUnsafeDynamicCyclicDependency?: boolean;
			},
	  ];
// ----- import/no-duplicates -----
type ImportNoDuplicates =
	| []
	| [
			{
				considerQueryString?: boolean;
				"prefer-inline"?: boolean;
			},
	  ];
// ----- import/no-dynamic-require -----
type ImportNoDynamicRequire =
	| []
	| [
			{
				esmodule?: boolean;
			},
	  ];
// ----- import/no-extraneous-dependencies -----
type ImportNoExtraneousDependencies =
	| []
	| [
			{
				devDependencies?: boolean | unknown[];
				optionalDependencies?: boolean | unknown[];
				peerDependencies?: boolean | unknown[];
				bundledDependencies?: boolean | unknown[];
				packageDir?: string | unknown[];
				includeInternal?: boolean;
				includeTypes?: boolean;
			},
	  ];
// ----- import/no-import-module-exports -----
type ImportNoImportModuleExports =
	| []
	| [
			{
				exceptions?: unknown[];
			},
	  ];
// ----- import/no-internal-modules -----
type ImportNoInternalModules =
	| []
	| [
			| {
					allow?: string[];
			  }
			| {
					forbid?: string[];
			  },
	  ];
// ----- import/no-namespace -----
type ImportNoNamespace =
	| []
	| [
			{
				ignore?: string[];
				[k: string]: unknown | undefined;
			},
	  ];
// ----- import/no-nodejs-modules -----
type ImportNoNodejsModules =
	| []
	| [
			{
				allow?: string[];
			},
	  ];
// ----- import/no-relative-packages -----
type ImportNoRelativePackages =
	| []
	| [
			{
				commonjs?: boolean;
				amd?: boolean;
				esmodule?: boolean;

				ignore?: [string, ...string[]];
			},
	  ];
// ----- import/no-relative-parent-imports -----
type ImportNoRelativeParentImports =
	| []
	| [
			{
				commonjs?: boolean;
				amd?: boolean;
				esmodule?: boolean;

				ignore?: [string, ...string[]];
			},
	  ];
// ----- import/no-restricted-paths -----
type ImportNoRestrictedPaths =
	| []
	| [
			{
				zones?: [
					{
						target?: string | string[];
						from?: string | string[];
						except?: string[];
						message?: string;
					},
					...{
						target?: string | string[];
						from?: string | string[];
						except?: string[];
						message?: string;
					}[],
				];
				basePath?: string;
			},
	  ];
// ----- import/no-unassigned-import -----
type ImportNoUnassignedImport =
	| []
	| [
			{
				devDependencies?: boolean | unknown[];
				optionalDependencies?: boolean | unknown[];
				peerDependencies?: boolean | unknown[];
				allow?: string[];
			},
	  ];
// ----- import/no-unresolved -----
type ImportNoUnresolved =
	| []
	| [
			{
				commonjs?: boolean;
				amd?: boolean;
				esmodule?: boolean;

				ignore?: [string, ...string[]];
				caseSensitive?: boolean;
				caseSensitiveStrict?: boolean;
			},
	  ];
// ----- import/no-unused-modules -----
type ImportNoUnusedModules =
	| []
	| [
			| {
					unusedExports: true;
					src?: {
						[k: string]: unknown | undefined;
					};
					[k: string]: unknown | undefined;
			  }
			| {
					missingExports: true;
					[k: string]: unknown | undefined;
			  },
	  ];
// ----- import/no-useless-path-segments -----
type ImportNoUselessPathSegments =
	| []
	| [
			{
				commonjs?: boolean;
				noUselessIndex?: boolean;
			},
	  ];
// ----- import/order -----
type ImportOrder =
	| []
	| [
			{
				groups?: unknown[];
				pathGroupsExcludedImportTypes?: unknown[];
				distinctGroup?: boolean;
				pathGroups?: {
					pattern: string;
					patternOptions?: {
						[k: string]: unknown | undefined;
					};
					group:
						| "builtin"
						| "external"
						| "internal"
						| "unknown"
						| "parent"
						| "sibling"
						| "index"
						| "object"
						| "type";
					position?: "after" | "before";
				}[];
				"newlines-between"?:
					| "ignore"
					| "always"
					| "always-and-inside-groups"
					| "never";
				alphabetize?: {
					caseInsensitive?: boolean;
					order?: "ignore" | "asc" | "desc";
					orderImportKind?: "ignore" | "asc" | "desc";
				};
				warnOnUnassignedImports?: boolean;
			},
	  ];
// ----- import/prefer-default-export -----
type ImportPreferDefaultExport =
	| []
	| [
			{
				target?: "single" | "any";
			},
	  ];
// ----- indent -----
type Indent =
	| []
	| ["tab" | number]
	| [
			"tab" | number,
			{
				SwitchCase?: number;
				VariableDeclarator?:
					| (number | ("first" | "off"))
					| {
							var?: number | ("first" | "off");
							let?: number | ("first" | "off");
							const?: number | ("first" | "off");
					  };
				outerIIFEBody?: number | "off";
				MemberExpression?: number | "off";
				FunctionDeclaration?: {
					parameters?: number | ("first" | "off");
					body?: number;
				};
				FunctionExpression?: {
					parameters?: number | ("first" | "off");
					body?: number;
				};
				StaticBlock?: {
					body?: number;
				};
				CallExpression?: {
					arguments?: number | ("first" | "off");
				};
				ArrayExpression?: number | ("first" | "off");
				ObjectExpression?: number | ("first" | "off");
				ImportDeclaration?: number | ("first" | "off");
				flatTernaryExpressions?: boolean;
				offsetTernaryExpressions?: boolean;
				ignoredNodes?: string[];
				ignoreComments?: boolean;
			},
	  ];
// ----- indent-legacy -----
type IndentLegacy =
	| []
	| ["tab" | number]
	| [
			"tab" | number,
			{
				SwitchCase?: number;
				VariableDeclarator?:
					| number
					| {
							var?: number;
							let?: number;
							const?: number;
							[k: string]: unknown | undefined;
					  };
				outerIIFEBody?: number;
				MemberExpression?: number;
				FunctionDeclaration?: {
					parameters?: number | "first";
					body?: number;
					[k: string]: unknown | undefined;
				};
				FunctionExpression?: {
					parameters?: number | "first";
					body?: number;
					[k: string]: unknown | undefined;
				};
				CallExpression?: {
					parameters?: number | "first";
					[k: string]: unknown | undefined;
				};
				ArrayExpression?: number | "first";
				ObjectExpression?: number | "first";
			},
	  ];
// ----- init-declarations -----
type InitDeclarations =
	| []
	| ["always"]
	| []
	| ["never"]
	| [
			"never",
			{
				ignoreForLoopInit?: boolean;
			},
	  ];
// ----- jsonc/array-bracket-newline -----
type JsoncArrayBracketNewline =
	| []
	| [
			| ("always" | "never" | "consistent")
			| {
					multiline?: boolean;
					minItems?: number | null;
			  },
	  ];
// ----- jsonc/array-bracket-spacing -----
type JsoncArrayBracketSpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				singleValue?: boolean;
				objectsInArrays?: boolean;
				arraysInArrays?: boolean;
			},
	  ];
// ----- jsonc/array-element-newline -----
type JsoncArrayElementNewline =
	| []
	| [
			| _JsoncArrayElementNewlineBasicConfig
			| {
					ArrayExpression?: _JsoncArrayElementNewlineBasicConfig;
					JSONArrayExpression?: _JsoncArrayElementNewlineBasicConfig;
					ArrayPattern?: _JsoncArrayElementNewlineBasicConfig;
			  },
	  ];
type _JsoncArrayElementNewlineBasicConfig =
	| ("always" | "never" | "consistent")
	| {
			multiline?: boolean;
			minItems?: number | null;
	  };
// ----- jsonc/comma-dangle -----
type JsoncCommaDangle =
	| []
	| [
			| _JsoncCommaDangleValue
			| {
					arrays?: _JsoncCommaDangleValueWithIgnore;
					objects?: _JsoncCommaDangleValueWithIgnore;
					imports?: _JsoncCommaDangleValueWithIgnore;
					exports?: _JsoncCommaDangleValueWithIgnore;
					functions?: _JsoncCommaDangleValueWithIgnore;
			  },
	  ];
type _JsoncCommaDangleValue =
	| "always-multiline"
	| "always"
	| "never"
	| "only-multiline";
type _JsoncCommaDangleValueWithIgnore =
	| "always-multiline"
	| "always"
	| "ignore"
	| "never"
	| "only-multiline";
// ----- jsonc/comma-style -----
type JsoncCommaStyle =
	| []
	| ["first" | "last"]
	| [
			"first" | "last",
			{
				exceptions?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- jsonc/indent -----
type JsoncIndent =
	| []
	| ["tab" | number]
	| [
			"tab" | number,
			{
				SwitchCase?: number;
				VariableDeclarator?:
					| (number | ("first" | "off"))
					| {
							var?: number | ("first" | "off");
							let?: number | ("first" | "off");
							const?: number | ("first" | "off");
					  };
				outerIIFEBody?: number | "off";
				MemberExpression?: number | "off";
				FunctionDeclaration?: {
					parameters?: number | ("first" | "off");
					body?: number;
				};
				FunctionExpression?: {
					parameters?: number | ("first" | "off");
					body?: number;
				};
				StaticBlock?: {
					body?: number;
				};
				CallExpression?: {
					arguments?: number | ("first" | "off");
				};
				ArrayExpression?: number | ("first" | "off");
				ObjectExpression?: number | ("first" | "off");
				ImportDeclaration?: number | ("first" | "off");
				flatTernaryExpressions?: boolean;
				offsetTernaryExpressions?: boolean;
				ignoredNodes?: string[];
				ignoreComments?: boolean;
			},
	  ];
// ----- jsonc/key-name-casing -----
type JsoncKeyNameCasing =
	| []
	| [
			{
				camelCase?: boolean;
				PascalCase?: boolean;
				SCREAMING_SNAKE_CASE?: boolean;
				"kebab-case"?: boolean;
				snake_case?: boolean;
				ignores?: string[];
			},
	  ];
// ----- jsonc/key-spacing -----
type JsoncKeySpacing =
	| []
	| [
			| {
					align?:
						| ("colon" | "value")
						| {
								mode?: "strict" | "minimum";
								on?: "colon" | "value";
								beforeColon?: boolean;
								afterColon?: boolean;
						  };
					mode?: "strict" | "minimum";
					beforeColon?: boolean;
					afterColon?: boolean;
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						align?:
							| ("colon" | "value")
							| {
									mode?: "strict" | "minimum";
									on?: "colon" | "value";
									beforeColon?: boolean;
									afterColon?: boolean;
							  };
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					align?: {
						mode?: "strict" | "minimum";
						on?: "colon" | "value";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  },
	  ];
// ----- jsonc/no-irregular-whitespace -----
type JsoncNoIrregularWhitespace =
	| []
	| [
			{
				skipComments?: boolean;
				skipStrings?: boolean;
				skipTemplates?: boolean;
				skipRegExps?: boolean;
				skipJSXText?: boolean;
			},
	  ];
// ----- jsonc/object-curly-newline -----
type JsoncObjectCurlyNewline =
	| []
	| [
			| (
					| ("always" | "never")
					| {
							multiline?: boolean;
							minProperties?: number;
							consistent?: boolean;
					  }
			  )
			| {
					ObjectExpression?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ObjectPattern?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ImportDeclaration?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ExportDeclaration?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
			  },
	  ];
// ----- jsonc/object-curly-spacing -----
type JsoncObjectCurlySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				arraysInObjects?: boolean;
				objectsInObjects?: boolean;
			},
	  ];
// ----- jsonc/object-property-newline -----
type JsoncObjectPropertyNewline =
	| []
	| [
			{
				allowAllPropertiesOnSameLine?: boolean;
				allowMultiplePropertiesPerLine?: boolean;
			},
	  ];
// ----- jsonc/quote-props -----
type JsoncQuoteProps =
	| []
	| ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
	| []
	| ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
	| [
			"always" | "as-needed" | "consistent" | "consistent-as-needed",
			{
				keywords?: boolean;
				unnecessary?: boolean;
				numbers?: boolean;
			},
	  ];
// ----- jsonc/quotes -----
type JsoncQuotes =
	| []
	| ["single" | "double" | "backtick"]
	| [
			"single" | "double" | "backtick",
			(
				| "avoid-escape"
				| {
						avoidEscape?: boolean;
						allowTemplateLiterals?: boolean;
				  }
			),
	  ];
// ----- jsonc/sort-array-values -----
type JsoncSortArrayValues = [
	{
		pathPattern: string;
		order:
			| (
					| string
					| {
							valuePattern?: string;
							order?: {
								type?: "asc" | "desc";
								caseSensitive?: boolean;
								natural?: boolean;
							};
					  }
			  )[]
			| {
					type?: "asc" | "desc";
					caseSensitive?: boolean;
					natural?: boolean;
			  };
		minValues?: number;
	},
	...{
		pathPattern: string;
		order:
			| (
					| string
					| {
							valuePattern?: string;
							order?: {
								type?: "asc" | "desc";
								caseSensitive?: boolean;
								natural?: boolean;
							};
					  }
			  )[]
			| {
					type?: "asc" | "desc";
					caseSensitive?: boolean;
					natural?: boolean;
			  };
		minValues?: number;
	}[],
];
// ----- jsonc/sort-keys -----
type JsoncSortKeys =
	| [
			{
				pathPattern: string;
				hasProperties?: string[];
				order:
					| (
							| string
							| {
									keyPattern?: string;
									order?: {
										type?: "asc" | "desc";
										caseSensitive?: boolean;
										natural?: boolean;
									};
							  }
					  )[]
					| {
							type?: "asc" | "desc";
							caseSensitive?: boolean;
							natural?: boolean;
					  };
				minKeys?: number;
				allowLineSeparatedGroups?: boolean;
			},
			...{
				pathPattern: string;
				hasProperties?: string[];
				order:
					| (
							| string
							| {
									keyPattern?: string;
									order?: {
										type?: "asc" | "desc";
										caseSensitive?: boolean;
										natural?: boolean;
									};
							  }
					  )[]
					| {
							type?: "asc" | "desc";
							caseSensitive?: boolean;
							natural?: boolean;
					  };
				minKeys?: number;
				allowLineSeparatedGroups?: boolean;
			}[],
	  ]
	| []
	| ["asc" | "desc"]
	| [
			"asc" | "desc",
			{
				caseSensitive?: boolean;
				natural?: boolean;
				minKeys?: number;
				allowLineSeparatedGroups?: boolean;
			},
	  ];
// ----- jsonc/space-unary-ops -----
type JsoncSpaceUnaryOps =
	| []
	| [
			{
				words?: boolean;
				nonwords?: boolean;
				overrides?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- jsx-quotes -----
type JsxQuotes = [] | ["prefer-single" | "prefer-double"];
// ----- key-spacing -----
type KeySpacing =
	| []
	| [
			| {
					align?:
						| ("colon" | "value")
						| {
								mode?: "strict" | "minimum";
								on?: "colon" | "value";
								beforeColon?: boolean;
								afterColon?: boolean;
						  };
					mode?: "strict" | "minimum";
					beforeColon?: boolean;
					afterColon?: boolean;
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						align?:
							| ("colon" | "value")
							| {
									mode?: "strict" | "minimum";
									on?: "colon" | "value";
									beforeColon?: boolean;
									afterColon?: boolean;
							  };
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					align?: {
						mode?: "strict" | "minimum";
						on?: "colon" | "value";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  },
	  ];
// ----- keyword-spacing -----
type KeywordSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
				overrides?: {
					abstract?: {
						before?: boolean;
						after?: boolean;
					};
					as?: {
						before?: boolean;
						after?: boolean;
					};
					async?: {
						before?: boolean;
						after?: boolean;
					};
					await?: {
						before?: boolean;
						after?: boolean;
					};
					boolean?: {
						before?: boolean;
						after?: boolean;
					};
					break?: {
						before?: boolean;
						after?: boolean;
					};
					byte?: {
						before?: boolean;
						after?: boolean;
					};
					case?: {
						before?: boolean;
						after?: boolean;
					};
					catch?: {
						before?: boolean;
						after?: boolean;
					};
					char?: {
						before?: boolean;
						after?: boolean;
					};
					class?: {
						before?: boolean;
						after?: boolean;
					};
					const?: {
						before?: boolean;
						after?: boolean;
					};
					continue?: {
						before?: boolean;
						after?: boolean;
					};
					debugger?: {
						before?: boolean;
						after?: boolean;
					};
					default?: {
						before?: boolean;
						after?: boolean;
					};
					delete?: {
						before?: boolean;
						after?: boolean;
					};
					do?: {
						before?: boolean;
						after?: boolean;
					};
					double?: {
						before?: boolean;
						after?: boolean;
					};
					else?: {
						before?: boolean;
						after?: boolean;
					};
					enum?: {
						before?: boolean;
						after?: boolean;
					};
					export?: {
						before?: boolean;
						after?: boolean;
					};
					extends?: {
						before?: boolean;
						after?: boolean;
					};
					false?: {
						before?: boolean;
						after?: boolean;
					};
					final?: {
						before?: boolean;
						after?: boolean;
					};
					finally?: {
						before?: boolean;
						after?: boolean;
					};
					float?: {
						before?: boolean;
						after?: boolean;
					};
					for?: {
						before?: boolean;
						after?: boolean;
					};
					from?: {
						before?: boolean;
						after?: boolean;
					};
					function?: {
						before?: boolean;
						after?: boolean;
					};
					get?: {
						before?: boolean;
						after?: boolean;
					};
					goto?: {
						before?: boolean;
						after?: boolean;
					};
					if?: {
						before?: boolean;
						after?: boolean;
					};
					implements?: {
						before?: boolean;
						after?: boolean;
					};
					import?: {
						before?: boolean;
						after?: boolean;
					};
					in?: {
						before?: boolean;
						after?: boolean;
					};
					instanceof?: {
						before?: boolean;
						after?: boolean;
					};
					int?: {
						before?: boolean;
						after?: boolean;
					};
					interface?: {
						before?: boolean;
						after?: boolean;
					};
					let?: {
						before?: boolean;
						after?: boolean;
					};
					long?: {
						before?: boolean;
						after?: boolean;
					};
					native?: {
						before?: boolean;
						after?: boolean;
					};
					new?: {
						before?: boolean;
						after?: boolean;
					};
					null?: {
						before?: boolean;
						after?: boolean;
					};
					of?: {
						before?: boolean;
						after?: boolean;
					};
					package?: {
						before?: boolean;
						after?: boolean;
					};
					private?: {
						before?: boolean;
						after?: boolean;
					};
					protected?: {
						before?: boolean;
						after?: boolean;
					};
					public?: {
						before?: boolean;
						after?: boolean;
					};
					return?: {
						before?: boolean;
						after?: boolean;
					};
					set?: {
						before?: boolean;
						after?: boolean;
					};
					short?: {
						before?: boolean;
						after?: boolean;
					};
					static?: {
						before?: boolean;
						after?: boolean;
					};
					super?: {
						before?: boolean;
						after?: boolean;
					};
					switch?: {
						before?: boolean;
						after?: boolean;
					};
					synchronized?: {
						before?: boolean;
						after?: boolean;
					};
					this?: {
						before?: boolean;
						after?: boolean;
					};
					throw?: {
						before?: boolean;
						after?: boolean;
					};
					throws?: {
						before?: boolean;
						after?: boolean;
					};
					transient?: {
						before?: boolean;
						after?: boolean;
					};
					true?: {
						before?: boolean;
						after?: boolean;
					};
					try?: {
						before?: boolean;
						after?: boolean;
					};
					typeof?: {
						before?: boolean;
						after?: boolean;
					};
					var?: {
						before?: boolean;
						after?: boolean;
					};
					void?: {
						before?: boolean;
						after?: boolean;
					};
					volatile?: {
						before?: boolean;
						after?: boolean;
					};
					while?: {
						before?: boolean;
						after?: boolean;
					};
					with?: {
						before?: boolean;
						after?: boolean;
					};
					yield?: {
						before?: boolean;
						after?: boolean;
					};
				};
			},
	  ];
// ----- line-comment-position -----
type LineCommentPosition =
	| []
	| [
			| ("above" | "beside")
			| {
					position?: "above" | "beside";
					ignorePattern?: string;
					applyDefaultPatterns?: boolean;
					applyDefaultIgnorePatterns?: boolean;
			  },
	  ];
// ----- linebreak-style -----
type LinebreakStyle = [] | ["unix" | "windows"];
// ----- lines-around-comment -----
type LinesAroundComment =
	| []
	| [
			{
				beforeBlockComment?: boolean;
				afterBlockComment?: boolean;
				beforeLineComment?: boolean;
				afterLineComment?: boolean;
				allowBlockStart?: boolean;
				allowBlockEnd?: boolean;
				allowClassStart?: boolean;
				allowClassEnd?: boolean;
				allowObjectStart?: boolean;
				allowObjectEnd?: boolean;
				allowArrayStart?: boolean;
				allowArrayEnd?: boolean;
				ignorePattern?: string;
				applyDefaultIgnorePatterns?: boolean;
				afterHashbangComment?: boolean;
			},
	  ];
// ----- lines-around-directive -----
type LinesAroundDirective =
	| []
	| [
			| ("always" | "never")
			| {
					before?: "always" | "never";
					after?: "always" | "never";
			  },
	  ];
// ----- lines-between-class-members -----
type LinesBetweenClassMembers =
	| []
	| [
			| {
					enforce: [
						{
							blankLine: "always" | "never";
							prev: "method" | "field" | "*";
							next: "method" | "field" | "*";
						},
						...{
							blankLine: "always" | "never";
							prev: "method" | "field" | "*";
							next: "method" | "field" | "*";
						}[],
					];
			  }
			| ("always" | "never"),
	  ]
	| [
			(
				| {
						enforce: [
							{
								blankLine: "always" | "never";
								prev: "method" | "field" | "*";
								next: "method" | "field" | "*";
							},
							...{
								blankLine: "always" | "never";
								prev: "method" | "field" | "*";
								next: "method" | "field" | "*";
							}[],
						];
				  }
				| ("always" | "never")
			),
			{
				exceptAfterSingleLine?: boolean;
			},
	  ];
// ----- logical-assignment-operators -----
type LogicalAssignmentOperators = (
	| []
	| ["always"]
	| [
			"always",
			{
				enforceForIfStatements?: boolean;
			},
	  ]
	| ["never"]
) &
	unknown[];
// ----- max-classes-per-file -----
type MaxClassesPerFile =
	| []
	| [
			| number
			| {
					ignoreExpressions?: boolean;
					max?: number;
			  },
	  ];
// ----- max-depth -----
type MaxDepth =
	| []
	| [
			| number
			| {
					maximum?: number;
					max?: number;
			  },
	  ];
// ----- max-len -----
type MaxLen =
	| []
	| [
			| {
					code?: number;
					comments?: number;
					tabWidth?: number;
					ignorePattern?: string;
					ignoreComments?: boolean;
					ignoreStrings?: boolean;
					ignoreUrls?: boolean;
					ignoreTemplateLiterals?: boolean;
					ignoreRegExpLiterals?: boolean;
					ignoreTrailingComments?: boolean;
			  }
			| number,
	  ]
	| [
			(
				| {
						code?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreStrings?: boolean;
						ignoreUrls?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreTrailingComments?: boolean;
				  }
				| number
			),
			(
				| {
						code?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreStrings?: boolean;
						ignoreUrls?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreTrailingComments?: boolean;
				  }
				| number
			),
	  ]
	| [
			(
				| {
						code?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreStrings?: boolean;
						ignoreUrls?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreTrailingComments?: boolean;
				  }
				| number
			),
			(
				| {
						code?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreStrings?: boolean;
						ignoreUrls?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreTrailingComments?: boolean;
				  }
				| number
			),
			{
				code?: number;
				comments?: number;
				tabWidth?: number;
				ignorePattern?: string;
				ignoreComments?: boolean;
				ignoreStrings?: boolean;
				ignoreUrls?: boolean;
				ignoreTemplateLiterals?: boolean;
				ignoreRegExpLiterals?: boolean;
				ignoreTrailingComments?: boolean;
			},
	  ];
// ----- max-lines -----
type MaxLines =
	| []
	| [
			| number
			| {
					max?: number;
					skipComments?: boolean;
					skipBlankLines?: boolean;
			  },
	  ];
// ----- max-lines-per-function -----
type MaxLinesPerFunction =
	| []
	| [
			| {
					max?: number;
					skipComments?: boolean;
					skipBlankLines?: boolean;
					IIFEs?: boolean;
			  }
			| number,
	  ];
// ----- max-nested-callbacks -----
type MaxNestedCallbacks =
	| []
	| [
			| number
			| {
					maximum?: number;
					max?: number;
			  },
	  ];
// ----- max-params -----
type MaxParams =
	| []
	| [
			| number
			| {
					maximum?: number;
					max?: number;
			  },
	  ];
// ----- max-statements -----
type MaxStatements =
	| []
	| [
			| number
			| {
					maximum?: number;
					max?: number;
			  },
	  ]
	| [
			(
				| number
				| {
						maximum?: number;
						max?: number;
				  }
			),
			{
				ignoreTopLevelFunctions?: boolean;
			},
	  ];
// ----- max-statements-per-line -----
type MaxStatementsPerLine =
	| []
	| [
			{
				max?: number;
			},
	  ];
// ----- multiline-comment-style -----
type MultilineCommentStyle =
	| []
	| ["starred-block" | "bare-block"]
	| []
	| ["separate-lines"]
	| [
			"separate-lines",
			{
				checkJSDoc?: boolean;
			},
	  ];
// ----- multiline-ternary -----
type MultilineTernary = [] | ["always" | "always-multiline" | "never"];
// ----- new-cap -----
type NewCap =
	| []
	| [
			{
				newIsCap?: boolean;
				capIsNew?: boolean;
				newIsCapExceptions?: string[];
				newIsCapExceptionPattern?: string;
				capIsNewExceptions?: string[];
				capIsNewExceptionPattern?: string;
				properties?: boolean;
			},
	  ];
// ----- new-parens -----
type NewParens = [] | ["always" | "never"];
// ----- newline-after-var -----
type NewlineAfterVar = [] | ["never" | "always"];
// ----- newline-per-chained-call -----
type NewlinePerChainedCall =
	| []
	| [
			{
				ignoreChainWithDepth?: number;
			},
	  ];
// ----- no-bitwise -----
type NoBitwise =
	| []
	| [
			{
				allow?: (
					| "^"
					| "|"
					| "&"
					| "<<"
					| ">>"
					| ">>>"
					| "^="
					| "|="
					| "&="
					| "<<="
					| ">>="
					| ">>>="
					| "~"
				)[];
				int32Hint?: boolean;
			},
	  ];
// ----- no-cond-assign -----
type NoCondAssign = [] | ["except-parens" | "always"];
// ----- no-confusing-arrow -----
type NoConfusingArrow =
	| []
	| [
			{
				allowParens?: boolean;
				onlyOneSimpleParam?: boolean;
			},
	  ];
// ----- no-console -----
type NoConsole =
	| []
	| [
			{
				allow?: [string, ...string[]];
			},
	  ];
// ----- no-constant-condition -----
type NoConstantCondition =
	| []
	| [
			{
				checkLoops?: "all" | "allExceptWhileTrue" | "none" | true | false;
			},
	  ];
// ----- no-duplicate-imports -----
type NoDuplicateImports =
	| []
	| [
			{
				includeExports?: boolean;
			},
	  ];
// ----- no-else-return -----
type NoElseReturn =
	| []
	| [
			{
				allowElseIf?: boolean;
			},
	  ];
// ----- no-empty -----
type NoEmpty =
	| []
	| [
			{
				allowEmptyCatch?: boolean;
			},
	  ];
// ----- no-empty-function -----
type NoEmptyFunction =
	| []
	| [
			{
				allow?: (
					| "functions"
					| "arrowFunctions"
					| "generatorFunctions"
					| "methods"
					| "generatorMethods"
					| "getters"
					| "setters"
					| "constructors"
					| "asyncFunctions"
					| "asyncMethods"
				)[];
			},
	  ];
// ----- no-empty-pattern -----
type NoEmptyPattern =
	| []
	| [
			{
				allowObjectPatternsAsParameters?: boolean;
			},
	  ];
// ----- no-eval -----
type NoEval =
	| []
	| [
			{
				allowIndirect?: boolean;
			},
	  ];
// ----- no-extend-native -----
type NoExtendNative =
	| []
	| [
			{
				exceptions?: string[];
			},
	  ];
// ----- no-extra-boolean-cast -----
type NoExtraBooleanCast =
	| []
	| [
			| {
					enforceForInnerExpressions?: boolean;
			  }
			| {
					enforceForLogicalOperands?: boolean;
			  },
	  ];
// ----- no-extra-parens -----
type NoExtraParens =
	| []
	| ["functions"]
	| []
	| ["all"]
	| [
			"all",
			{
				conditionalAssign?: boolean;
				ternaryOperandBinaryExpressions?: boolean;
				nestedBinaryExpressions?: boolean;
				returnAssign?: boolean;
				ignoreJSX?: "none" | "all" | "single-line" | "multi-line";
				enforceForArrowConditionals?: boolean;
				enforceForSequenceExpressions?: boolean;
				enforceForNewInMemberExpressions?: boolean;
				enforceForFunctionPrototypeMethods?: boolean;
				allowParensAfterCommentPattern?: string;
			},
	  ];
// ----- no-fallthrough -----
type NoFallthrough =
	| []
	| [
			{
				commentPattern?: string;
				allowEmptyCase?: boolean;
				reportUnusedFallthroughComment?: boolean;
			},
	  ];
// ----- no-global-assign -----
type NoGlobalAssign =
	| []
	| [
			{
				exceptions?: string[];
			},
	  ];
// ----- no-implicit-coercion -----
type NoImplicitCoercion =
	| []
	| [
			{
				boolean?: boolean;
				number?: boolean;
				string?: boolean;
				disallowTemplateShorthand?: boolean;
				allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[];
			},
	  ];
// ----- no-implicit-globals -----
type NoImplicitGlobals =
	| []
	| [
			{
				lexicalBindings?: boolean;
			},
	  ];
// ----- no-inline-comments -----
type NoInlineComments =
	| []
	| [
			{
				ignorePattern?: string;
			},
	  ];
// ----- no-inner-declarations -----
type NoInnerDeclarations =
	| []
	| ["functions" | "both"]
	| [
			"functions" | "both",
			{
				blockScopedFunctions?: "allow" | "disallow";
			},
	  ];
// ----- no-invalid-regexp -----
type NoInvalidRegexp =
	| []
	| [
			{
				allowConstructorFlags?: string[];
			},
	  ];
// ----- no-invalid-this -----
type NoInvalidThis =
	| []
	| [
			{
				capIsConstructor?: boolean;
			},
	  ];
// ----- no-irregular-whitespace -----
type NoIrregularWhitespace =
	| []
	| [
			{
				skipComments?: boolean;
				skipStrings?: boolean;
				skipTemplates?: boolean;
				skipRegExps?: boolean;
				skipJSXText?: boolean;
			},
	  ];
// ----- no-labels -----
type NoLabels =
	| []
	| [
			{
				allowLoop?: boolean;
				allowSwitch?: boolean;
			},
	  ];
// ----- no-magic-numbers -----
type NoMagicNumbers =
	| []
	| [
			{
				detectObjects?: boolean;
				enforceConst?: boolean;
				ignore?: (number | string)[];
				ignoreArrayIndexes?: boolean;
				ignoreDefaultValues?: boolean;
				ignoreClassFieldInitialValues?: boolean;
			},
	  ];
// ----- no-misleading-character-class -----
type NoMisleadingCharacterClass =
	| []
	| [
			{
				allowEscape?: boolean;
			},
	  ];
// ----- no-mixed-operators -----
type NoMixedOperators =
	| []
	| [
			{
				groups?: [
					(
						| "+"
						| "-"
						| "*"
						| "/"
						| "%"
						| "**"
						| "&"
						| "|"
						| "^"
						| "~"
						| "<<"
						| ">>"
						| ">>>"
						| "=="
						| "!="
						| "==="
						| "!=="
						| ">"
						| ">="
						| "<"
						| "<="
						| "&&"
						| "||"
						| "in"
						| "instanceof"
						| "?:"
						| "??"
					),
					(
						| "+"
						| "-"
						| "*"
						| "/"
						| "%"
						| "**"
						| "&"
						| "|"
						| "^"
						| "~"
						| "<<"
						| ">>"
						| ">>>"
						| "=="
						| "!="
						| "==="
						| "!=="
						| ">"
						| ">="
						| "<"
						| "<="
						| "&&"
						| "||"
						| "in"
						| "instanceof"
						| "?:"
						| "??"
					),
					...(
						| "+"
						| "-"
						| "*"
						| "/"
						| "%"
						| "**"
						| "&"
						| "|"
						| "^"
						| "~"
						| "<<"
						| ">>"
						| ">>>"
						| "=="
						| "!="
						| "==="
						| "!=="
						| ">"
						| ">="
						| "<"
						| "<="
						| "&&"
						| "||"
						| "in"
						| "instanceof"
						| "?:"
						| "??"
					)[],
				][];
				allowSamePrecedence?: boolean;
			},
	  ];
// ----- no-mixed-requires -----
type NoMixedRequires =
	| []
	| [
			| boolean
			| {
					grouping?: boolean;
					allowCall?: boolean;
			  },
	  ];
// ----- no-mixed-spaces-and-tabs -----
type NoMixedSpacesAndTabs = [] | ["smart-tabs" | true | false];
// ----- no-multi-assign -----
type NoMultiAssign =
	| []
	| [
			{
				ignoreNonDeclaration?: boolean;
			},
	  ];
// ----- no-multi-spaces -----
type NoMultiSpaces =
	| []
	| [
			{
				exceptions?: {
					[k: string]: boolean;
				};
				ignoreEOLComments?: boolean;
			},
	  ];
// ----- no-multiple-empty-lines -----
type NoMultipleEmptyLines =
	| []
	| [
			{
				max: number;
				maxEOF?: number;
				maxBOF?: number;
			},
	  ];
// ----- no-native-reassign -----
type NoNativeReassign =
	| []
	| [
			{
				exceptions?: string[];
			},
	  ];
// ----- no-only-tests/no-only-tests -----
type NoOnlyTestsNoOnlyTests =
	| []
	| [
			{
				block?: string[];
				focus?: string[];
				fix?: boolean;
			},
	  ];
// ----- no-param-reassign -----
type NoParamReassign =
	| []
	| [
			| {
					props?: false;
			  }
			| {
					props?: true;
					ignorePropertyModificationsFor?: string[];
					ignorePropertyModificationsForRegex?: string[];
			  },
	  ];
// ----- no-plusplus -----
type NoPlusplus =
	| []
	| [
			{
				allowForLoopAfterthoughts?: boolean;
			},
	  ];
// ----- no-promise-executor-return -----
type NoPromiseExecutorReturn =
	| []
	| [
			{
				allowVoid?: boolean;
			},
	  ];
// ----- no-redeclare -----
type NoRedeclare =
	| []
	| [
			{
				builtinGlobals?: boolean;
			},
	  ];
// ----- no-restricted-exports -----
type NoRestrictedExports =
	| []
	| [
			| {
					restrictedNamedExports?: string[];
					restrictedNamedExportsPattern?: string;
			  }
			| {
					restrictedNamedExports?: string[];
					restrictedNamedExportsPattern?: string;
					restrictDefaultExports?: {
						direct?: boolean;
						named?: boolean;
						defaultFrom?: boolean;
						namedFrom?: boolean;
						namespaceFrom?: boolean;
					};
			  },
	  ];
// ----- no-restricted-globals -----
type NoRestrictedGlobals = (
	| string
	| {
			name: string;
			message?: string;
	  }
)[];
// ----- no-restricted-imports -----
type NoRestrictedImports =
	| (
			| string
			| {
					name: string;
					message?: string;
					importNames?: string[];
					allowImportNames?: string[];
			  }
	  )[]
	| []
	| [
			{
				paths?: (
					| string
					| {
							name: string;
							message?: string;
							importNames?: string[];
							allowImportNames?: string[];
					  }
				)[];
				patterns?:
					| string[]
					| {
							importNames?: [string, ...string[]];

							allowImportNames?: [string, ...string[]];

							group: [string, ...string[]];
							importNamePattern?: string;
							allowImportNamePattern?: string;
							message?: string;
							caseSensitive?: boolean;
					  }[];
			},
	  ];
// ----- no-restricted-modules -----
type NoRestrictedModules =
	| (
			| string
			| {
					name: string;
					message?: string;
			  }
	  )[]
	| {
			paths?: (
				| string
				| {
						name: string;
						message?: string;
				  }
			)[];
			patterns?: string[];
	  }[];
// ----- no-restricted-properties -----
type NoRestrictedProperties = (
	| {
			object: string;
			property?: string;
			message?: string;
	  }
	| {
			object?: string;
			property: string;
			message?: string;
	  }
)[];
// ----- no-restricted-syntax -----
type NoRestrictedSyntax = (
	| string
	| {
			selector: string;
			message?: string;
	  }
)[];
// ----- no-return-assign -----
type NoReturnAssign = [] | ["except-parens" | "always"];
// ----- no-self-assign -----
type NoSelfAssign =
	| []
	| [
			{
				props?: boolean;
			},
	  ];
// ----- no-sequences -----
type NoSequences =
	| []
	| [
			{
				allowInParentheses?: boolean;
			},
	  ];
// ----- no-shadow -----
type NoShadow =
	| []
	| [
			{
				builtinGlobals?: boolean;
				hoist?: "all" | "functions" | "never";
				allow?: string[];
				ignoreOnInitialization?: boolean;
			},
	  ];
// ----- no-sync -----
type NoSync =
	| []
	| [
			{
				allowAtRootLevel?: boolean;
			},
	  ];
// ----- no-tabs -----
type NoTabs =
	| []
	| [
			{
				allowIndentationTabs?: boolean;
			},
	  ];
// ----- no-trailing-spaces -----
type NoTrailingSpaces =
	| []
	| [
			{
				skipBlankLines?: boolean;
				ignoreComments?: boolean;
			},
	  ];
// ----- no-undef -----
type NoUndef =
	| []
	| [
			{
				typeof?: boolean;
			},
	  ];
// ----- no-underscore-dangle -----
type NoUnderscoreDangle =
	| []
	| [
			{
				allow?: string[];
				allowAfterThis?: boolean;
				allowAfterSuper?: boolean;
				allowAfterThisConstructor?: boolean;
				enforceInMethodNames?: boolean;
				allowFunctionParams?: boolean;
				enforceInClassFields?: boolean;
				allowInArrayDestructuring?: boolean;
				allowInObjectDestructuring?: boolean;
			},
	  ];
// ----- no-unneeded-ternary -----
type NoUnneededTernary =
	| []
	| [
			{
				defaultAssignment?: boolean;
			},
	  ];
// ----- no-unreachable-loop -----
type NoUnreachableLoop =
	| []
	| [
			{
				ignore?: (
					| "WhileStatement"
					| "DoWhileStatement"
					| "ForStatement"
					| "ForInStatement"
					| "ForOfStatement"
				)[];
			},
	  ];
// ----- no-unsafe-negation -----
type NoUnsafeNegation =
	| []
	| [
			{
				enforceForOrderingRelations?: boolean;
			},
	  ];
// ----- no-unsafe-optional-chaining -----
type NoUnsafeOptionalChaining =
	| []
	| [
			{
				disallowArithmeticOperators?: boolean;
			},
	  ];
// ----- no-unused-expressions -----
type NoUnusedExpressions =
	| []
	| [
			{
				allowShortCircuit?: boolean;
				allowTernary?: boolean;
				allowTaggedTemplates?: boolean;
				enforceForJSX?: boolean;
			},
	  ];
// ----- no-unused-vars -----
type NoUnusedVars =
	| []
	| [
			| ("all" | "local")
			| {
					vars?: "all" | "local";
					varsIgnorePattern?: string;
					args?: "all" | "after-used" | "none";
					ignoreRestSiblings?: boolean;
					argsIgnorePattern?: string;
					caughtErrors?: "all" | "none";
					caughtErrorsIgnorePattern?: string;
					destructuredArrayIgnorePattern?: string;
					ignoreClassWithStaticInitBlock?: boolean;
					reportUsedIgnorePattern?: boolean;
			  },
	  ];
// ----- no-use-before-define -----
type NoUseBeforeDefine =
	| []
	| [
			| "nofunc"
			| {
					functions?: boolean;
					classes?: boolean;
					variables?: boolean;
					allowNamedExports?: boolean;
			  },
	  ];
// ----- no-useless-computed-key -----
type NoUselessComputedKey =
	| []
	| [
			{
				enforceForClassMembers?: boolean;
			},
	  ];
// ----- no-useless-rename -----
type NoUselessRename =
	| []
	| [
			{
				ignoreDestructuring?: boolean;
				ignoreImport?: boolean;
				ignoreExport?: boolean;
			},
	  ];
// ----- no-void -----
type NoVoid =
	| []
	| [
			{
				allowAsStatement?: boolean;
			},
	  ];
// ----- no-warning-comments -----
type NoWarningComments =
	| []
	| [
			{
				terms?: string[];
				location?: "start" | "anywhere";

				decoration?: [string, ...string[]];
			},
	  ];
// ----- node/callback-return -----
type NodeCallbackReturn = [] | [string[]];
// ----- node/exports-style -----
type NodeExportsStyle =
	| []
	| ["module.exports" | "exports"]
	| [
			"module.exports" | "exports",
			{
				allowBatchAssign?: boolean;
			},
	  ];
// ----- node/file-extension-in-import -----
type NodeFileExtensionInImport =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				[k: string]: ("always" | "never") | undefined;
			},
	  ];
// ----- node/handle-callback-err -----
type NodeHandleCallbackErr = [] | [string];
// ----- node/hashbang -----
type NodeHashbang =
	| []
	| [
			{
				convertPath?:
					| {
							[k: string]: [string, string];
					  }
					| [
							{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							},
							...{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							}[],
					  ];
				ignoreUnpublished?: boolean;
				additionalExecutables?: string[];
				executableMap?: {
					[k: string]: string;
				};
			},
	  ];
// ----- node/no-deprecated-api -----
type NodeNoDeprecatedApi =
	| []
	| [
			{
				version?: string;
				ignoreModuleItems?: (
					| "_linklist"
					| "_stream_wrap"
					| "async_hooks.currentId"
					| "async_hooks.triggerId"
					| "buffer.Buffer()"
					| "new buffer.Buffer()"
					| "buffer.SlowBuffer"
					| "constants"
					| "crypto._toBuf"
					| "crypto.Credentials"
					| "crypto.DEFAULT_ENCODING"
					| "crypto.createCipher"
					| "crypto.createCredentials"
					| "crypto.createDecipher"
					| "crypto.fips"
					| "crypto.prng"
					| "crypto.pseudoRandomBytes"
					| "crypto.rng"
					| "domain"
					| "events.EventEmitter.listenerCount"
					| "events.listenerCount"
					| "freelist"
					| "fs.SyncWriteStream"
					| "fs.exists"
					| "fs.lchmod"
					| "fs.lchmodSync"
					| "http.createClient"
					| "module.Module.createRequireFromPath"
					| "module.Module.requireRepl"
					| "module.Module._debug"
					| "module.createRequireFromPath"
					| "module.requireRepl"
					| "module._debug"
					| "net._setSimultaneousAccepts"
					| "os.getNetworkInterfaces"
					| "os.tmpDir"
					| "path._makeLong"
					| "process.EventEmitter"
					| "process.assert"
					| "process.binding"
					| "process.env.NODE_REPL_HISTORY_FILE"
					| "process.report.triggerReport"
					| "punycode"
					| "readline.codePointAt"
					| "readline.getStringWidth"
					| "readline.isFullWidthCodePoint"
					| "readline.stripVTControlCharacters"
					| "safe-buffer.Buffer()"
					| "new safe-buffer.Buffer()"
					| "safe-buffer.SlowBuffer"
					| "sys"
					| "timers.enroll"
					| "timers.unenroll"
					| "tls.CleartextStream"
					| "tls.CryptoStream"
					| "tls.SecurePair"
					| "tls.convertNPNProtocols"
					| "tls.createSecurePair"
					| "tls.parseCertString"
					| "tty.setRawMode"
					| "url.parse"
					| "url.resolve"
					| "util.debug"
					| "util.error"
					| "util.isArray"
					| "util.isBoolean"
					| "util.isBuffer"
					| "util.isDate"
					| "util.isError"
					| "util.isFunction"
					| "util.isNull"
					| "util.isNullOrUndefined"
					| "util.isNumber"
					| "util.isObject"
					| "util.isPrimitive"
					| "util.isRegExp"
					| "util.isString"
					| "util.isSymbol"
					| "util.isUndefined"
					| "util.log"
					| "util.print"
					| "util.pump"
					| "util.puts"
					| "util._extend"
					| "vm.runInDebugContext"
				)[];
				ignoreGlobalItems?: (
					| "Buffer()"
					| "new Buffer()"
					| "COUNTER_NET_SERVER_CONNECTION"
					| "COUNTER_NET_SERVER_CONNECTION_CLOSE"
					| "COUNTER_HTTP_SERVER_REQUEST"
					| "COUNTER_HTTP_SERVER_RESPONSE"
					| "COUNTER_HTTP_CLIENT_REQUEST"
					| "COUNTER_HTTP_CLIENT_RESPONSE"
					| "GLOBAL"
					| "Intl.v8BreakIterator"
					| "require.extensions"
					| "root"
					| "process.EventEmitter"
					| "process.assert"
					| "process.binding"
					| "process.env.NODE_REPL_HISTORY_FILE"
					| "process.report.triggerReport"
				)[];
				ignoreIndirectDependencies?: boolean;
			},
	  ];
// ----- node/no-extraneous-import -----
type NodeNoExtraneousImport =
	| []
	| [
			{
				allowModules?: string[];
				convertPath?:
					| {
							[k: string]: [string, string];
					  }
					| [
							{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							},
							...{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							}[],
					  ];
				resolvePaths?: string[];
			},
	  ];
// ----- node/no-extraneous-require -----
type NodeNoExtraneousRequire =
	| []
	| [
			{
				allowModules?: string[];
				convertPath?:
					| {
							[k: string]: [string, string];
					  }
					| [
							{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							},
							...{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							}[],
					  ];
				resolvePaths?: string[];
				tryExtensions?: string[];
			},
	  ];
// ----- node/no-hide-core-modules -----
type NodeNoHideCoreModules =
	| []
	| [
			{
				allow?: (
					| "assert"
					| "buffer"
					| "child_process"
					| "cluster"
					| "console"
					| "constants"
					| "crypto"
					| "dgram"
					| "dns"
					| "events"
					| "fs"
					| "http"
					| "https"
					| "module"
					| "net"
					| "os"
					| "path"
					| "querystring"
					| "readline"
					| "repl"
					| "stream"
					| "string_decoder"
					| "timers"
					| "tls"
					| "tty"
					| "url"
					| "util"
					| "vm"
					| "zlib"
				)[];
				ignoreDirectDependencies?: boolean;
				ignoreIndirectDependencies?: boolean;
			},
	  ];
// ----- node/no-missing-import -----
type NodeNoMissingImport =
	| []
	| [
			{
				allowModules?: string[];
				resolvePaths?: string[];
				tryExtensions?: string[];
				tsconfigPath?: string;
				typescriptExtensionMap?:
					| unknown[][]
					| (
							| "react"
							| "react-jsx"
							| "react-jsxdev"
							| "react-native"
							| "preserve"
					  );
			},
	  ];
// ----- node/no-missing-require -----
type NodeNoMissingRequire =
	| []
	| [
			{
				allowModules?: string[];
				tryExtensions?: string[];
				resolvePaths?: string[];
				typescriptExtensionMap?:
					| unknown[][]
					| (
							| "react"
							| "react-jsx"
							| "react-jsxdev"
							| "react-native"
							| "preserve"
					  );
				tsconfigPath?: string;
			},
	  ];
// ----- node/no-mixed-requires -----
type NodeNoMixedRequires =
	| []
	| [
			| boolean
			| {
					grouping?: boolean;
					allowCall?: boolean;
			  },
	  ];
// ----- node/no-restricted-import -----
type NodeNoRestrictedImport =
	| []
	| [
			(
				| string
				| {
						name: string | string[];
						message?: string;
				  }
			)[],
	  ];
// ----- node/no-restricted-require -----
type NodeNoRestrictedRequire =
	| []
	| [
			(
				| string
				| {
						name: string | string[];
						message?: string;
				  }
			)[],
	  ];
// ----- node/no-sync -----
type NodeNoSync =
	| []
	| [
			{
				allowAtRootLevel?: boolean;
			},
	  ];
// ----- node/no-unpublished-bin -----
type NodeNoUnpublishedBin =
	| []
	| [
			{
				convertPath?:
					| {
							[k: string]: [string, string];
					  }
					| [
							{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							},
							...{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							}[],
					  ];
				[k: string]: unknown | undefined;
			},
	  ];
// ----- node/no-unpublished-import -----
type NodeNoUnpublishedImport =
	| []
	| [
			{
				allowModules?: string[];
				convertPath?:
					| {
							[k: string]: [string, string];
					  }
					| [
							{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							},
							...{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							}[],
					  ];
				resolvePaths?: string[];
				ignoreTypeImport?: boolean;
			},
	  ];
// ----- node/no-unpublished-require -----
type NodeNoUnpublishedRequire =
	| []
	| [
			{
				allowModules?: string[];
				convertPath?:
					| {
							[k: string]: [string, string];
					  }
					| [
							{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							},
							...{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							}[],
					  ];
				resolvePaths?: string[];
				tryExtensions?: string[];
			},
	  ];
// ----- node/no-unsupported-features/es-builtins -----
type NodeNoUnsupportedFeaturesEsBuiltins =
	| []
	| [
			{
				version?: string;
				ignores?: (
					| "AggregateError"
					| "Array"
					| "Array.from"
					| "Array.isArray"
					| "Array.length"
					| "Array.of"
					| "Array.toLocaleString"
					| "ArrayBuffer"
					| "ArrayBuffer.isView"
					| "Atomics"
					| "Atomics.add"
					| "Atomics.and"
					| "Atomics.compareExchange"
					| "Atomics.exchange"
					| "Atomics.isLockFree"
					| "Atomics.load"
					| "Atomics.notify"
					| "Atomics.or"
					| "Atomics.store"
					| "Atomics.sub"
					| "Atomics.wait"
					| "Atomics.waitAsync"
					| "Atomics.xor"
					| "BigInt"
					| "BigInt.asIntN"
					| "BigInt.asUintN"
					| "BigInt64Array"
					| "BigInt64Array.BYTES_PER_ELEMENT"
					| "BigInt64Array.from"
					| "BigInt64Array.name"
					| "BigInt64Array.of"
					| "BigUint64Array"
					| "BigUint64Array.BYTES_PER_ELEMENT"
					| "BigUint64Array.from"
					| "BigUint64Array.name"
					| "BigUint64Array.of"
					| "Boolean"
					| "DataView"
					| "Date"
					| "Date.UTC"
					| "Date.now"
					| "Date.parse"
					| "Date.toLocaleDateString"
					| "Date.toLocaleString"
					| "Date.toLocaleTimeString"
					| "Error"
					| "Error.cause"
					| "EvalError"
					| "FinalizationRegistry"
					| "Float32Array"
					| "Float32Array.BYTES_PER_ELEMENT"
					| "Float32Array.from"
					| "Float32Array.name"
					| "Float32Array.of"
					| "Float64Array"
					| "Float64Array.BYTES_PER_ELEMENT"
					| "Float64Array.from"
					| "Float64Array.name"
					| "Float64Array.of"
					| "Function"
					| "Function.length"
					| "Function.name"
					| "Infinity"
					| "Int16Array"
					| "Int16Array.BYTES_PER_ELEMENT"
					| "Int16Array.from"
					| "Int16Array.name"
					| "Int16Array.of"
					| "Int32Array"
					| "Int32Array.BYTES_PER_ELEMENT"
					| "Int32Array.from"
					| "Int32Array.name"
					| "Int32Array.of"
					| "Int8Array"
					| "Int8Array.BYTES_PER_ELEMENT"
					| "Int8Array.from"
					| "Int8Array.name"
					| "Int8Array.of"
					| "Intl"
					| "Intl.Collator"
					| "Intl.DateTimeFormat"
					| "Intl.DisplayNames"
					| "Intl.ListFormat"
					| "Intl.Locale"
					| "Intl.NumberFormat"
					| "Intl.PluralRules"
					| "Intl.RelativeTimeFormat"
					| "Intl.Segmenter"
					| "Intl.Segments"
					| "Intl.getCanonicalLocales"
					| "Intl.supportedValuesOf"
					| "JSON"
					| "JSON.parse"
					| "JSON.stringify"
					| "Map"
					| "Map.groupBy"
					| "Math"
					| "Math.E"
					| "Math.LN10"
					| "Math.LN2"
					| "Math.LOG10E"
					| "Math.LOG2E"
					| "Math.PI"
					| "Math.SQRT1_2"
					| "Math.SQRT2"
					| "Math.abs"
					| "Math.acos"
					| "Math.acosh"
					| "Math.asin"
					| "Math.asinh"
					| "Math.atan"
					| "Math.atan2"
					| "Math.atanh"
					| "Math.cbrt"
					| "Math.ceil"
					| "Math.clz32"
					| "Math.cos"
					| "Math.cosh"
					| "Math.exp"
					| "Math.expm1"
					| "Math.floor"
					| "Math.fround"
					| "Math.hypot"
					| "Math.imul"
					| "Math.log"
					| "Math.log10"
					| "Math.log1p"
					| "Math.log2"
					| "Math.max"
					| "Math.min"
					| "Math.pow"
					| "Math.random"
					| "Math.round"
					| "Math.sign"
					| "Math.sin"
					| "Math.sinh"
					| "Math.sqrt"
					| "Math.tan"
					| "Math.tanh"
					| "Math.trunc"
					| "NaN"
					| "Number.EPSILON"
					| "Number.MAX_SAFE_INTEGER"
					| "Number.MAX_VALUE"
					| "Number.MIN_SAFE_INTEGER"
					| "Number.MIN_VALUE"
					| "Number.NEGATIVE_INFINITY"
					| "Number.NaN"
					| "Number.POSITIVE_INFINITY"
					| "Number.isFinite"
					| "Number.isInteger"
					| "Number.isNaN"
					| "Number.isSafeInteger"
					| "Number.parseFloat"
					| "Number.parseInt"
					| "Number.toLocaleString"
					| "Object.assign"
					| "Object.create"
					| "Object.defineGetter"
					| "Object.defineProperties"
					| "Object.defineProperty"
					| "Object.defineSetter"
					| "Object.entries"
					| "Object.freeze"
					| "Object.fromEntries"
					| "Object.getOwnPropertyDescriptor"
					| "Object.getOwnPropertyDescriptors"
					| "Object.getOwnPropertyNames"
					| "Object.getOwnPropertySymbols"
					| "Object.getPrototypeOf"
					| "Object.groupBy"
					| "Object.hasOwn"
					| "Object.is"
					| "Object.isExtensible"
					| "Object.isFrozen"
					| "Object.isSealed"
					| "Object.keys"
					| "Object.lookupGetter"
					| "Object.lookupSetter"
					| "Object.preventExtensions"
					| "Object.proto"
					| "Object.seal"
					| "Object.setPrototypeOf"
					| "Object.values"
					| "Promise"
					| "Promise.all"
					| "Promise.allSettled"
					| "Promise.any"
					| "Promise.race"
					| "Promise.reject"
					| "Promise.resolve"
					| "Proxy"
					| "Proxy.revocable"
					| "RangeError"
					| "ReferenceError"
					| "Reflect"
					| "Reflect.apply"
					| "Reflect.construct"
					| "Reflect.defineProperty"
					| "Reflect.deleteProperty"
					| "Reflect.get"
					| "Reflect.getOwnPropertyDescriptor"
					| "Reflect.getPrototypeOf"
					| "Reflect.has"
					| "Reflect.isExtensible"
					| "Reflect.ownKeys"
					| "Reflect.preventExtensions"
					| "Reflect.set"
					| "Reflect.setPrototypeOf"
					| "RegExp"
					| "RegExp.dotAll"
					| "RegExp.hasIndices"
					| "RegExp.input"
					| "RegExp.lastIndex"
					| "RegExp.lastMatch"
					| "RegExp.lastParen"
					| "RegExp.leftContext"
					| "RegExp.n"
					| "RegExp.rightContext"
					| "Set"
					| "SharedArrayBuffer"
					| "String"
					| "String.fromCharCode"
					| "String.fromCodePoint"
					| "String.length"
					| "String.localeCompare"
					| "String.raw"
					| "String.toLocaleLowerCase"
					| "String.toLocaleUpperCase"
					| "Symbol"
					| "Symbol.asyncIterator"
					| "Symbol.for"
					| "Symbol.hasInstance"
					| "Symbol.isConcatSpreadable"
					| "Symbol.iterator"
					| "Symbol.keyFor"
					| "Symbol.match"
					| "Symbol.matchAll"
					| "Symbol.replace"
					| "Symbol.search"
					| "Symbol.species"
					| "Symbol.split"
					| "Symbol.toPrimitive"
					| "Symbol.toStringTag"
					| "Symbol.unscopables"
					| "SyntaxError"
					| "TypeError"
					| "URIError"
					| "Uint16Array"
					| "Uint16Array.BYTES_PER_ELEMENT"
					| "Uint16Array.from"
					| "Uint16Array.name"
					| "Uint16Array.of"
					| "Uint32Array"
					| "Uint32Array.BYTES_PER_ELEMENT"
					| "Uint32Array.from"
					| "Uint32Array.name"
					| "Uint32Array.of"
					| "Uint8Array"
					| "Uint8Array.BYTES_PER_ELEMENT"
					| "Uint8Array.from"
					| "Uint8Array.name"
					| "Uint8Array.of"
					| "Uint8ClampedArray"
					| "Uint8ClampedArray.BYTES_PER_ELEMENT"
					| "Uint8ClampedArray.from"
					| "Uint8ClampedArray.name"
					| "Uint8ClampedArray.of"
					| "WeakMap"
					| "WeakRef"
					| "WeakSet"
					| "decodeURI"
					| "decodeURIComponent"
					| "encodeURI"
					| "encodeURIComponent"
					| "escape"
					| "eval"
					| "globalThis"
					| "isFinite"
					| "isNaN"
					| "parseFloat"
					| "parseInt"
					| "unescape"
				)[];
			},
	  ];
// ----- node/no-unsupported-features/es-syntax -----
type NodeNoUnsupportedFeaturesEsSyntax =
	| []
	| [
			{
				version?: string;
				ignores?: (
					| "no-accessor-properties"
					| "accessor-properties"
					| "accessorProperties"
					| "no-arbitrary-module-namespace-names"
					| "arbitrary-module-namespace-names"
					| "arbitraryModuleNamespaceNames"
					| "no-array-from"
					| "array-from"
					| "arrayFrom"
					| "no-array-isarray"
					| "array-isarray"
					| "arrayIsarray"
					| "no-array-of"
					| "array-of"
					| "arrayOf"
					| "no-array-prototype-copywithin"
					| "array-prototype-copywithin"
					| "arrayPrototypeCopywithin"
					| "no-array-prototype-entries"
					| "array-prototype-entries"
					| "arrayPrototypeEntries"
					| "no-array-prototype-every"
					| "array-prototype-every"
					| "arrayPrototypeEvery"
					| "no-array-prototype-fill"
					| "array-prototype-fill"
					| "arrayPrototypeFill"
					| "no-array-prototype-filter"
					| "array-prototype-filter"
					| "arrayPrototypeFilter"
					| "no-array-prototype-find"
					| "array-prototype-find"
					| "arrayPrototypeFind"
					| "no-array-prototype-findindex"
					| "array-prototype-findindex"
					| "arrayPrototypeFindindex"
					| "no-array-prototype-findlast-findlastindex"
					| "array-prototype-findlast-findlastindex"
					| "arrayPrototypeFindlastFindlastindex"
					| "no-array-prototype-flat"
					| "array-prototype-flat"
					| "arrayPrototypeFlat"
					| "no-array-prototype-foreach"
					| "array-prototype-foreach"
					| "arrayPrototypeForeach"
					| "no-array-prototype-includes"
					| "array-prototype-includes"
					| "arrayPrototypeIncludes"
					| "no-array-prototype-indexof"
					| "array-prototype-indexof"
					| "arrayPrototypeIndexof"
					| "no-array-prototype-keys"
					| "array-prototype-keys"
					| "arrayPrototypeKeys"
					| "no-array-prototype-lastindexof"
					| "array-prototype-lastindexof"
					| "arrayPrototypeLastindexof"
					| "no-array-prototype-map"
					| "array-prototype-map"
					| "arrayPrototypeMap"
					| "no-array-prototype-reduce"
					| "array-prototype-reduce"
					| "arrayPrototypeReduce"
					| "no-array-prototype-reduceright"
					| "array-prototype-reduceright"
					| "arrayPrototypeReduceright"
					| "no-array-prototype-some"
					| "array-prototype-some"
					| "arrayPrototypeSome"
					| "no-array-prototype-toreversed"
					| "array-prototype-toreversed"
					| "arrayPrototypeToreversed"
					| "no-array-prototype-tosorted"
					| "array-prototype-tosorted"
					| "arrayPrototypeTosorted"
					| "no-array-prototype-tospliced"
					| "array-prototype-tospliced"
					| "arrayPrototypeTospliced"
					| "no-array-prototype-values"
					| "array-prototype-values"
					| "arrayPrototypeValues"
					| "no-array-prototype-with"
					| "array-prototype-with"
					| "arrayPrototypeWith"
					| "no-array-string-prototype-at"
					| "array-string-prototype-at"
					| "arrayStringPrototypeAt"
					| "no-arrow-functions"
					| "arrow-functions"
					| "arrowFunctions"
					| "no-async-functions"
					| "async-functions"
					| "asyncFunctions"
					| "no-async-iteration"
					| "async-iteration"
					| "asyncIteration"
					| "no-atomics-waitasync"
					| "atomics-waitasync"
					| "atomicsWaitasync"
					| "no-atomics"
					| "atomics"
					| "no-bigint"
					| "bigint"
					| "no-binary-numeric-literals"
					| "binary-numeric-literals"
					| "binaryNumericLiterals"
					| "no-block-scoped-functions"
					| "block-scoped-functions"
					| "blockScopedFunctions"
					| "no-block-scoped-variables"
					| "block-scoped-variables"
					| "blockScopedVariables"
					| "no-class-fields"
					| "class-fields"
					| "classFields"
					| "no-class-static-block"
					| "class-static-block"
					| "classStaticBlock"
					| "no-classes"
					| "classes"
					| "no-computed-properties"
					| "computed-properties"
					| "computedProperties"
					| "no-date-now"
					| "date-now"
					| "dateNow"
					| "no-date-prototype-getyear-setyear"
					| "date-prototype-getyear-setyear"
					| "datePrototypeGetyearSetyear"
					| "no-date-prototype-togmtstring"
					| "date-prototype-togmtstring"
					| "datePrototypeTogmtstring"
					| "no-default-parameters"
					| "default-parameters"
					| "defaultParameters"
					| "no-destructuring"
					| "destructuring"
					| "no-dynamic-import"
					| "dynamic-import"
					| "dynamicImport"
					| "no-error-cause"
					| "error-cause"
					| "errorCause"
					| "no-escape-unescape"
					| "escape-unescape"
					| "escapeUnescape"
					| "no-exponential-operators"
					| "exponential-operators"
					| "exponentialOperators"
					| "no-export-ns-from"
					| "export-ns-from"
					| "exportNsFrom"
					| "no-for-of-loops"
					| "for-of-loops"
					| "forOfLoops"
					| "no-function-declarations-in-if-statement-clauses-without-block"
					| "function-declarations-in-if-statement-clauses-without-block"
					| "functionDeclarationsInIfStatementClausesWithoutBlock"
					| "no-function-prototype-bind"
					| "function-prototype-bind"
					| "functionPrototypeBind"
					| "no-generators"
					| "generators"
					| "no-global-this"
					| "global-this"
					| "globalThis"
					| "no-hashbang"
					| "hashbang"
					| "no-import-meta"
					| "import-meta"
					| "importMeta"
					| "no-initializers-in-for-in"
					| "initializers-in-for-in"
					| "initializersInForIn"
					| "no-intl-datetimeformat-prototype-formatrange"
					| "intl-datetimeformat-prototype-formatrange"
					| "intlDatetimeformatPrototypeFormatrange"
					| "no-intl-datetimeformat-prototype-formattoparts"
					| "intl-datetimeformat-prototype-formattoparts"
					| "intlDatetimeformatPrototypeFormattoparts"
					| "no-intl-displaynames"
					| "intl-displaynames"
					| "intlDisplaynames"
					| "no-intl-getcanonicallocales"
					| "intl-getcanonicallocales"
					| "intlGetcanonicallocales"
					| "no-intl-listformat"
					| "intl-listformat"
					| "intlListformat"
					| "no-intl-locale"
					| "intl-locale"
					| "intlLocale"
					| "no-intl-numberformat-prototype-formatrange"
					| "intl-numberformat-prototype-formatrange"
					| "intlNumberformatPrototypeFormatrange"
					| "no-intl-numberformat-prototype-formatrangetoparts"
					| "intl-numberformat-prototype-formatrangetoparts"
					| "intlNumberformatPrototypeFormatrangetoparts"
					| "no-intl-numberformat-prototype-formattoparts"
					| "intl-numberformat-prototype-formattoparts"
					| "intlNumberformatPrototypeFormattoparts"
					| "no-intl-pluralrules-prototype-selectrange"
					| "intl-pluralrules-prototype-selectrange"
					| "intlPluralrulesPrototypeSelectrange"
					| "no-intl-pluralrules"
					| "intl-pluralrules"
					| "intlPluralrules"
					| "no-intl-relativetimeformat"
					| "intl-relativetimeformat"
					| "intlRelativetimeformat"
					| "no-intl-segmenter"
					| "intl-segmenter"
					| "intlSegmenter"
					| "no-intl-supportedvaluesof"
					| "intl-supportedvaluesof"
					| "intlSupportedvaluesof"
					| "no-json-superset"
					| "json-superset"
					| "jsonSuperset"
					| "no-json"
					| "json"
					| "no-keyword-properties"
					| "keyword-properties"
					| "keywordProperties"
					| "no-labelled-function-declarations"
					| "labelled-function-declarations"
					| "labelledFunctionDeclarations"
					| "no-legacy-object-prototype-accessor-methods"
					| "legacy-object-prototype-accessor-methods"
					| "legacyObjectPrototypeAccessorMethods"
					| "no-logical-assignment-operators"
					| "logical-assignment-operators"
					| "logicalAssignmentOperators"
					| "no-malformed-template-literals"
					| "malformed-template-literals"
					| "malformedTemplateLiterals"
					| "no-map"
					| "map"
					| "no-math-acosh"
					| "math-acosh"
					| "mathAcosh"
					| "no-math-asinh"
					| "math-asinh"
					| "mathAsinh"
					| "no-math-atanh"
					| "math-atanh"
					| "mathAtanh"
					| "no-math-cbrt"
					| "math-cbrt"
					| "mathCbrt"
					| "no-math-clz32"
					| "math-clz32"
					| "mathClz32"
					| "no-math-cosh"
					| "math-cosh"
					| "mathCosh"
					| "no-math-expm1"
					| "math-expm1"
					| "mathExpm1"
					| "no-math-fround"
					| "math-fround"
					| "mathFround"
					| "no-math-hypot"
					| "math-hypot"
					| "mathHypot"
					| "no-math-imul"
					| "math-imul"
					| "mathImul"
					| "no-math-log10"
					| "math-log10"
					| "mathLog10"
					| "no-math-log1p"
					| "math-log1p"
					| "mathLog1p"
					| "no-math-log2"
					| "math-log2"
					| "mathLog2"
					| "no-math-sign"
					| "math-sign"
					| "mathSign"
					| "no-math-sinh"
					| "math-sinh"
					| "mathSinh"
					| "no-math-tanh"
					| "math-tanh"
					| "mathTanh"
					| "no-math-trunc"
					| "math-trunc"
					| "mathTrunc"
					| "no-modules"
					| "modules"
					| "no-new-target"
					| "new-target"
					| "newTarget"
					| "new.target"
					| "no-nullish-coalescing-operators"
					| "nullish-coalescing-operators"
					| "nullishCoalescingOperators"
					| "no-number-epsilon"
					| "number-epsilon"
					| "numberEpsilon"
					| "no-number-isfinite"
					| "number-isfinite"
					| "numberIsfinite"
					| "no-number-isinteger"
					| "number-isinteger"
					| "numberIsinteger"
					| "no-number-isnan"
					| "number-isnan"
					| "numberIsnan"
					| "no-number-issafeinteger"
					| "number-issafeinteger"
					| "numberIssafeinteger"
					| "no-number-maxsafeinteger"
					| "number-maxsafeinteger"
					| "numberMaxsafeinteger"
					| "no-number-minsafeinteger"
					| "number-minsafeinteger"
					| "numberMinsafeinteger"
					| "no-number-parsefloat"
					| "number-parsefloat"
					| "numberParsefloat"
					| "no-number-parseint"
					| "number-parseint"
					| "numberParseint"
					| "no-numeric-separators"
					| "numeric-separators"
					| "numericSeparators"
					| "no-object-assign"
					| "object-assign"
					| "objectAssign"
					| "no-object-create"
					| "object-create"
					| "objectCreate"
					| "no-object-defineproperties"
					| "object-defineproperties"
					| "objectDefineproperties"
					| "no-object-defineproperty"
					| "object-defineproperty"
					| "objectDefineproperty"
					| "no-object-entries"
					| "object-entries"
					| "objectEntries"
					| "no-object-freeze"
					| "object-freeze"
					| "objectFreeze"
					| "no-object-fromentries"
					| "object-fromentries"
					| "objectFromentries"
					| "no-object-getownpropertydescriptor"
					| "object-getownpropertydescriptor"
					| "objectGetownpropertydescriptor"
					| "no-object-getownpropertydescriptors"
					| "object-getownpropertydescriptors"
					| "objectGetownpropertydescriptors"
					| "no-object-getownpropertynames"
					| "object-getownpropertynames"
					| "objectGetownpropertynames"
					| "no-object-getownpropertysymbols"
					| "object-getownpropertysymbols"
					| "objectGetownpropertysymbols"
					| "no-object-getprototypeof"
					| "object-getprototypeof"
					| "objectGetprototypeof"
					| "no-object-hasown"
					| "object-hasown"
					| "objectHasown"
					| "no-object-is"
					| "object-is"
					| "objectIs"
					| "no-object-isextensible"
					| "object-isextensible"
					| "objectIsextensible"
					| "no-object-isfrozen"
					| "object-isfrozen"
					| "objectIsfrozen"
					| "no-object-issealed"
					| "object-issealed"
					| "objectIssealed"
					| "no-object-keys"
					| "object-keys"
					| "objectKeys"
					| "no-object-map-groupby"
					| "object-map-groupby"
					| "objectMapGroupby"
					| "no-object-preventextensions"
					| "object-preventextensions"
					| "objectPreventextensions"
					| "no-object-seal"
					| "object-seal"
					| "objectSeal"
					| "no-object-setprototypeof"
					| "object-setprototypeof"
					| "objectSetprototypeof"
					| "no-object-super-properties"
					| "object-super-properties"
					| "objectSuperProperties"
					| "no-object-values"
					| "object-values"
					| "objectValues"
					| "no-octal-numeric-literals"
					| "octal-numeric-literals"
					| "octalNumericLiterals"
					| "no-optional-catch-binding"
					| "optional-catch-binding"
					| "optionalCatchBinding"
					| "no-optional-chaining"
					| "optional-chaining"
					| "optionalChaining"
					| "no-private-in"
					| "private-in"
					| "privateIn"
					| "no-promise-all-settled"
					| "promise-all-settled"
					| "promiseAllSettled"
					| "no-promise-any"
					| "promise-any"
					| "promiseAny"
					| "no-promise-prototype-finally"
					| "promise-prototype-finally"
					| "promisePrototypeFinally"
					| "no-promise-withresolvers"
					| "promise-withresolvers"
					| "promiseWithresolvers"
					| "no-promise"
					| "promise"
					| "no-property-shorthands"
					| "property-shorthands"
					| "propertyShorthands"
					| "no-proxy"
					| "proxy"
					| "no-reflect"
					| "reflect"
					| "no-regexp-d-flag"
					| "regexp-d-flag"
					| "regexpDFlag"
					| "no-regexp-lookbehind-assertions"
					| "regexp-lookbehind-assertions"
					| "regexpLookbehindAssertions"
					| "regexpLookbehind"
					| "no-regexp-named-capture-groups"
					| "regexp-named-capture-groups"
					| "regexpNamedCaptureGroups"
					| "no-regexp-prototype-compile"
					| "regexp-prototype-compile"
					| "regexpPrototypeCompile"
					| "no-regexp-prototype-flags"
					| "regexp-prototype-flags"
					| "regexpPrototypeFlags"
					| "no-regexp-s-flag"
					| "regexp-s-flag"
					| "regexpSFlag"
					| "regexpS"
					| "no-regexp-u-flag"
					| "regexp-u-flag"
					| "regexpUFlag"
					| "regexpU"
					| "no-regexp-unicode-property-escapes-2019"
					| "regexp-unicode-property-escapes-2019"
					| "regexpUnicodePropertyEscapes2019"
					| "no-regexp-unicode-property-escapes-2020"
					| "regexp-unicode-property-escapes-2020"
					| "regexpUnicodePropertyEscapes2020"
					| "no-regexp-unicode-property-escapes-2021"
					| "regexp-unicode-property-escapes-2021"
					| "regexpUnicodePropertyEscapes2021"
					| "no-regexp-unicode-property-escapes-2022"
					| "regexp-unicode-property-escapes-2022"
					| "regexpUnicodePropertyEscapes2022"
					| "no-regexp-unicode-property-escapes-2023"
					| "regexp-unicode-property-escapes-2023"
					| "regexpUnicodePropertyEscapes2023"
					| "no-regexp-unicode-property-escapes"
					| "regexp-unicode-property-escapes"
					| "regexpUnicodePropertyEscapes"
					| "regexpUnicodeProperties"
					| "no-regexp-v-flag"
					| "regexp-v-flag"
					| "regexpVFlag"
					| "no-regexp-y-flag"
					| "regexp-y-flag"
					| "regexpYFlag"
					| "regexpY"
					| "no-resizable-and-growable-arraybuffers"
					| "resizable-and-growable-arraybuffers"
					| "resizableAndGrowableArraybuffers"
					| "no-rest-parameters"
					| "rest-parameters"
					| "restParameters"
					| "no-rest-spread-properties"
					| "rest-spread-properties"
					| "restSpreadProperties"
					| "no-set"
					| "set"
					| "no-shadow-catch-param"
					| "shadow-catch-param"
					| "shadowCatchParam"
					| "no-shared-array-buffer"
					| "shared-array-buffer"
					| "sharedArrayBuffer"
					| "no-spread-elements"
					| "spread-elements"
					| "spreadElements"
					| "no-string-create-html-methods"
					| "string-create-html-methods"
					| "stringCreateHtmlMethods"
					| "no-string-fromcodepoint"
					| "string-fromcodepoint"
					| "stringFromcodepoint"
					| "no-string-prototype-codepointat"
					| "string-prototype-codepointat"
					| "stringPrototypeCodepointat"
					| "no-string-prototype-endswith"
					| "string-prototype-endswith"
					| "stringPrototypeEndswith"
					| "no-string-prototype-includes"
					| "string-prototype-includes"
					| "stringPrototypeIncludes"
					| "no-string-prototype-iswellformed-towellformed"
					| "string-prototype-iswellformed-towellformed"
					| "stringPrototypeIswellformedTowellformed"
					| "no-string-prototype-matchall"
					| "string-prototype-matchall"
					| "stringPrototypeMatchall"
					| "no-string-prototype-normalize"
					| "string-prototype-normalize"
					| "stringPrototypeNormalize"
					| "no-string-prototype-padstart-padend"
					| "string-prototype-padstart-padend"
					| "stringPrototypePadstartPadend"
					| "no-string-prototype-repeat"
					| "string-prototype-repeat"
					| "stringPrototypeRepeat"
					| "no-string-prototype-replaceall"
					| "string-prototype-replaceall"
					| "stringPrototypeReplaceall"
					| "no-string-prototype-startswith"
					| "string-prototype-startswith"
					| "stringPrototypeStartswith"
					| "no-string-prototype-substr"
					| "string-prototype-substr"
					| "stringPrototypeSubstr"
					| "no-string-prototype-trim"
					| "string-prototype-trim"
					| "stringPrototypeTrim"
					| "no-string-prototype-trimleft-trimright"
					| "string-prototype-trimleft-trimright"
					| "stringPrototypeTrimleftTrimright"
					| "no-string-prototype-trimstart-trimend"
					| "string-prototype-trimstart-trimend"
					| "stringPrototypeTrimstartTrimend"
					| "no-string-raw"
					| "string-raw"
					| "stringRaw"
					| "no-subclassing-builtins"
					| "subclassing-builtins"
					| "subclassingBuiltins"
					| "no-symbol-prototype-description"
					| "symbol-prototype-description"
					| "symbolPrototypeDescription"
					| "no-symbol"
					| "symbol"
					| "no-template-literals"
					| "template-literals"
					| "templateLiterals"
					| "no-top-level-await"
					| "top-level-await"
					| "topLevelAwait"
					| "no-trailing-commas"
					| "trailing-commas"
					| "trailingCommas"
					| "no-trailing-function-commas"
					| "trailing-function-commas"
					| "trailingFunctionCommas"
					| "trailingCommasInFunctions"
					| "no-typed-arrays"
					| "typed-arrays"
					| "typedArrays"
					| "no-unicode-codepoint-escapes"
					| "unicode-codepoint-escapes"
					| "unicodeCodepointEscapes"
					| "unicodeCodePointEscapes"
					| "no-weak-map"
					| "weak-map"
					| "weakMap"
					| "no-weak-set"
					| "weak-set"
					| "weakSet"
					| "no-weakrefs"
					| "weakrefs"
				)[];
			},
	  ];
// ----- node/no-unsupported-features/node-builtins -----
type NodeNoUnsupportedFeaturesNodeBuiltins =
	| []
	| [
			{
				version?: string;
				allowExperimental?: boolean;
				ignores?: (
					| "__filename"
					| "__dirname"
					| "require"
					| "require.cache"
					| "require.extensions"
					| "require.main"
					| "require.resolve"
					| "require.resolve.paths"
					| "module"
					| "module.children"
					| "module.exports"
					| "module.filename"
					| "module.id"
					| "module.isPreloading"
					| "module.loaded"
					| "module.parent"
					| "module.path"
					| "module.paths"
					| "module.require"
					| "exports"
					| "AbortController"
					| "AbortSignal"
					| "AbortSignal.abort"
					| "AbortSignal.timeout"
					| "AbortSignal.any"
					| "DOMException"
					| "FormData"
					| "Headers"
					| "MessageEvent"
					| "Navigator"
					| "Request"
					| "Response"
					| "WebAssembly"
					| "WebSocket"
					| "fetch"
					| "global"
					| "queueMicrotask"
					| "navigator"
					| "navigator.hardwareConcurrency"
					| "navigator.language"
					| "navigator.languages"
					| "navigator.platform"
					| "navigator.userAgent"
					| "structuredClone"
					| "Blob"
					| "new Buffer()"
					| "Buffer"
					| "Buffer.alloc"
					| "Buffer.allocUnsafe"
					| "Buffer.allocUnsafeSlow"
					| "Buffer.byteLength"
					| "Buffer.compare"
					| "Buffer.concat"
					| "Buffer.copyBytesFrom"
					| "Buffer.from"
					| "Buffer.isBuffer"
					| "Buffer.isEncoding"
					| "File"
					| "atob"
					| "btoa"
					| "console"
					| "console.profile"
					| "console.profileEnd"
					| "console.timeStamp"
					| "console.Console"
					| "console.assert"
					| "console.clear"
					| "console.count"
					| "console.countReset"
					| "console.debug"
					| "console.dir"
					| "console.dirxml"
					| "console.error"
					| "console.group"
					| "console.groupCollapsed"
					| "console.groupEnd"
					| "console.info"
					| "console.log"
					| "console.table"
					| "console.time"
					| "console.timeEnd"
					| "console.timeLog"
					| "console.trace"
					| "console.warn"
					| "crypto"
					| "crypto.subtle"
					| "crypto.subtle.decrypt"
					| "crypto.subtle.deriveBits"
					| "crypto.subtle.deriveKey"
					| "crypto.subtle.digest"
					| "crypto.subtle.encrypt"
					| "crypto.subtle.exportKey"
					| "crypto.subtle.generateKey"
					| "crypto.subtle.importKey"
					| "crypto.subtle.sign"
					| "crypto.subtle.unwrapKey"
					| "crypto.subtle.verify"
					| "crypto.subtle.wrapKey"
					| "crypto.getRandomValues"
					| "crypto.randomUUID"
					| "Crypto"
					| "CryptoKey"
					| "SubtleCrypto"
					| "CustomEvent"
					| "Event"
					| "EventTarget"
					| "PerformanceEntry"
					| "PerformanceMark"
					| "PerformanceMeasure"
					| "PerformanceObserver"
					| "PerformanceObserverEntryList"
					| "PerformanceResourceTiming"
					| "performance"
					| "process"
					| "process.allowedNodeEnvironmentFlags"
					| "process.availableMemory"
					| "process.arch"
					| "process.argv"
					| "process.argv0"
					| "process.channel"
					| "process.config"
					| "process.connected"
					| "process.debugPort"
					| "process.env"
					| "process.execArgv"
					| "process.execPath"
					| "process.exitCode"
					| "process.mainModule"
					| "process.noDeprecation"
					| "process.permission"
					| "process.pid"
					| "process.platform"
					| "process.ppid"
					| "process.release"
					| "process.report"
					| "process.sourceMapsEnabled"
					| "process.stdin"
					| "process.stdin.isRaw"
					| "process.stdin.isTTY"
					| "process.stdin.setRawMode"
					| "process.stdout"
					| "process.stdout.clearLine"
					| "process.stdout.clearScreenDown"
					| "process.stdout.columns"
					| "process.stdout.cursorTo"
					| "process.stdout.getColorDepth"
					| "process.stdout.getWindowSize"
					| "process.stdout.hasColors"
					| "process.stdout.isTTY"
					| "process.stdout.moveCursor"
					| "process.stdout.rows"
					| "process.stderr"
					| "process.stderr.clearLine"
					| "process.stderr.clearScreenDown"
					| "process.stderr.columns"
					| "process.stderr.cursorTo"
					| "process.stderr.getColorDepth"
					| "process.stderr.getWindowSize"
					| "process.stderr.hasColors"
					| "process.stderr.isTTY"
					| "process.stderr.moveCursor"
					| "process.stderr.rows"
					| "process.throwDeprecation"
					| "process.title"
					| "process.traceDeprecation"
					| "process.version"
					| "process.versions"
					| "process.abort"
					| "process.chdir"
					| "process.constrainedMemory"
					| "process.cpuUsage"
					| "process.cwd"
					| "process.disconnect"
					| "process.dlopen"
					| "process.emitWarning"
					| "process.exit"
					| "process.getActiveResourcesInfo"
					| "process.getegid"
					| "process.geteuid"
					| "process.getgid"
					| "process.getgroups"
					| "process.getuid"
					| "process.hasUncaughtExceptionCaptureCallback"
					| "process.hrtime"
					| "process.hrtime.bigint"
					| "process.initgroups"
					| "process.kill"
					| "process.loadEnvFile"
					| "process.memoryUsage"
					| "process.rss"
					| "process.nextTick"
					| "process.resourceUsage"
					| "process.send"
					| "process.setegid"
					| "process.seteuid"
					| "process.setgid"
					| "process.setgroups"
					| "process.setuid"
					| "process.setSourceMapsEnabled"
					| "process.setUncaughtExceptionCaptureCallback"
					| "process.umask"
					| "process.uptime"
					| "ReadableStream"
					| "ReadableStream.from"
					| "ReadableStreamDefaultReader"
					| "ReadableStreamBYOBReader"
					| "ReadableStreamDefaultController"
					| "ReadableByteStreamController"
					| "ReadableStreamBYOBRequest"
					| "WritableStream"
					| "WritableStreamDefaultWriter"
					| "WritableStreamDefaultController"
					| "TransformStream"
					| "TransformStreamDefaultController"
					| "ByteLengthQueuingStrategy"
					| "CountQueuingStrategy"
					| "TextEncoderStream"
					| "TextDecoderStream"
					| "CompressionStream"
					| "DecompressionStream"
					| "setInterval"
					| "clearInterval"
					| "setTimeout"
					| "clearTimeout"
					| "setImmediate"
					| "clearImmediate"
					| "URL"
					| "URL.canParse"
					| "URL.createObjectURL"
					| "URL.revokeObjectURL"
					| "URLSearchParams"
					| "TextDecoder"
					| "TextEncoder"
					| "BroadcastChannel"
					| "MessageChannel"
					| "MessagePort"
					| "assert"
					| "assert.assert"
					| "assert.deepEqual"
					| "assert.deepStrictEqual"
					| "assert.doesNotMatch"
					| "assert.doesNotReject"
					| "assert.doesNotThrow"
					| "assert.equal"
					| "assert.fail"
					| "assert.ifError"
					| "assert.match"
					| "assert.notDeepEqual"
					| "assert.notDeepStrictEqual"
					| "assert.notEqual"
					| "assert.notStrictEqual"
					| "assert.ok"
					| "assert.rejects"
					| "assert.strictEqual"
					| "assert.throws"
					| "assert.CallTracker"
					| "assert.strict"
					| "assert.strict.assert"
					| "assert.strict.deepEqual"
					| "assert.strict.deepStrictEqual"
					| "assert.strict.doesNotMatch"
					| "assert.strict.doesNotReject"
					| "assert.strict.doesNotThrow"
					| "assert.strict.equal"
					| "assert.strict.fail"
					| "assert.strict.ifError"
					| "assert.strict.match"
					| "assert.strict.notDeepEqual"
					| "assert.strict.notDeepStrictEqual"
					| "assert.strict.notEqual"
					| "assert.strict.notStrictEqual"
					| "assert.strict.ok"
					| "assert.strict.rejects"
					| "assert.strict.strictEqual"
					| "assert.strict.throws"
					| "assert.strict.CallTracker"
					| "assert/strict"
					| "assert/strict.assert"
					| "assert/strict.deepEqual"
					| "assert/strict.deepStrictEqual"
					| "assert/strict.doesNotMatch"
					| "assert/strict.doesNotReject"
					| "assert/strict.doesNotThrow"
					| "assert/strict.equal"
					| "assert/strict.fail"
					| "assert/strict.ifError"
					| "assert/strict.match"
					| "assert/strict.notDeepEqual"
					| "assert/strict.notDeepStrictEqual"
					| "assert/strict.notEqual"
					| "assert/strict.notStrictEqual"
					| "assert/strict.ok"
					| "assert/strict.rejects"
					| "assert/strict.strictEqual"
					| "assert/strict.throws"
					| "assert/strict.CallTracker"
					| "async_hooks"
					| "async_hooks.createHook"
					| "async_hooks.executionAsyncResource"
					| "async_hooks.executionAsyncId"
					| "async_hooks.triggerAsyncId"
					| "async_hooks.AsyncLocalStorage"
					| "async_hooks.AsyncLocalStorage.bind"
					| "async_hooks.AsyncLocalStorage.snapshot"
					| "async_hooks.AsyncResource"
					| "async_hooks.AsyncResource.bind"
					| "buffer"
					| "buffer.constants"
					| "buffer.INSPECT_MAX_BYTES"
					| "buffer.kMaxLength"
					| "buffer.kStringMaxLength"
					| "buffer.atob"
					| "buffer.btoa"
					| "buffer.isAscii"
					| "buffer.isUtf8"
					| "buffer.resolveObjectURL"
					| "buffer.transcode"
					| "buffer.SlowBuffer"
					| "buffer.Blob"
					| "new buffer.Buffer()"
					| "buffer.Buffer"
					| "buffer.Buffer.alloc"
					| "buffer.Buffer.allocUnsafe"
					| "buffer.Buffer.allocUnsafeSlow"
					| "buffer.Buffer.byteLength"
					| "buffer.Buffer.compare"
					| "buffer.Buffer.concat"
					| "buffer.Buffer.copyBytesFrom"
					| "buffer.Buffer.from"
					| "buffer.Buffer.isBuffer"
					| "buffer.Buffer.isEncoding"
					| "buffer.File"
					| "child_process"
					| "child_process.exec"
					| "child_process.execFile"
					| "child_process.fork"
					| "child_process.spawn"
					| "child_process.execFileSync"
					| "child_process.execSync"
					| "child_process.spawnSync"
					| "child_process.ChildProcess"
					| "cluster"
					| "cluster.isMaster"
					| "cluster.isPrimary"
					| "cluster.isWorker"
					| "cluster.schedulingPolicy"
					| "cluster.settings"
					| "cluster.worker"
					| "cluster.workers"
					| "cluster.disconnect"
					| "cluster.fork"
					| "cluster.setupMaster"
					| "cluster.setupPrimary"
					| "cluster.Worker"
					| "crypto.constants"
					| "crypto.fips"
					| "crypto.webcrypto"
					| "crypto.webcrypto.subtle"
					| "crypto.webcrypto.subtle.decrypt"
					| "crypto.webcrypto.subtle.deriveBits"
					| "crypto.webcrypto.subtle.deriveKey"
					| "crypto.webcrypto.subtle.digest"
					| "crypto.webcrypto.subtle.encrypt"
					| "crypto.webcrypto.subtle.exportKey"
					| "crypto.webcrypto.subtle.generateKey"
					| "crypto.webcrypto.subtle.importKey"
					| "crypto.webcrypto.subtle.sign"
					| "crypto.webcrypto.subtle.unwrapKey"
					| "crypto.webcrypto.subtle.verify"
					| "crypto.webcrypto.subtle.wrapKey"
					| "crypto.webcrypto.getRandomValues"
					| "crypto.webcrypto.randomUUID"
					| "crypto.checkPrime"
					| "crypto.checkPrimeSync"
					| "crypto.createCipher"
					| "crypto.createCipheriv"
					| "crypto.createDecipher"
					| "crypto.createDecipheriv"
					| "crypto.createDiffieHellman"
					| "crypto.createDiffieHellmanGroup"
					| "crypto.createECDH"
					| "crypto.createHash"
					| "crypto.createHmac"
					| "crypto.createPrivateKey"
					| "crypto.createPublicKey"
					| "crypto.createSecretKey"
					| "crypto.createSign"
					| "crypto.createVerify"
					| "crypto.diffieHellman"
					| "crypto.generateKey"
					| "crypto.generateKeyPair"
					| "crypto.generateKeyPairSync"
					| "crypto.generateKeySync"
					| "crypto.generatePrime"
					| "crypto.generatePrimeSync"
					| "crypto.getCipherInfo"
					| "crypto.getCiphers"
					| "crypto.getCurves"
					| "crypto.getDiffieHellman"
					| "crypto.getFips"
					| "crypto.getHashes"
					| "crypto.hash"
					| "crypto.hkdf"
					| "crypto.hkdfSync"
					| "crypto.pbkdf2"
					| "crypto.pbkdf2Sync"
					| "crypto.privateDecrypt"
					| "crypto.privateEncrypt"
					| "crypto.publicDecrypt"
					| "crypto.publicEncrypt"
					| "crypto.randomBytes"
					| "crypto.randomFillSync"
					| "crypto.randomFill"
					| "crypto.randomInt"
					| "crypto.scrypt"
					| "crypto.scryptSync"
					| "crypto.secureHeapUsed"
					| "crypto.setEngine"
					| "crypto.setFips"
					| "crypto.sign"
					| "crypto.timingSafeEqual"
					| "crypto.verify"
					| "crypto.Certificate"
					| "crypto.Certificate.exportChallenge"
					| "crypto.Certificate.exportPublicKey"
					| "crypto.Certificate.verifySpkac"
					| "crypto.Cipher"
					| "crypto.Decipher"
					| "crypto.DiffieHellman"
					| "crypto.DiffieHellmanGroup"
					| "crypto.ECDH"
					| "crypto.ECDH.convertKey"
					| "crypto.Hash()"
					| "new crypto.Hash()"
					| "crypto.Hash"
					| "crypto.Hmac()"
					| "new crypto.Hmac()"
					| "crypto.Hmac"
					| "crypto.KeyObject"
					| "crypto.KeyObject.from"
					| "crypto.Sign"
					| "crypto.Verify"
					| "crypto.X509Certificate"
					| "dgram"
					| "dgram.createSocket"
					| "dgram.Socket"
					| "diagnostics_channel"
					| "diagnostics_channel.hasSubscribers"
					| "diagnostics_channel.channel"
					| "diagnostics_channel.subscribe"
					| "diagnostics_channel.unsubscribe"
					| "diagnostics_channel.tracingChannel"
					| "diagnostics_channel.Channel"
					| "diagnostics_channel.TracingChannel"
					| "dns"
					| "dns.Resolver"
					| "dns.getServers"
					| "dns.lookup"
					| "dns.lookupService"
					| "dns.resolve"
					| "dns.resolve4"
					| "dns.resolve6"
					| "dns.resolveAny"
					| "dns.resolveCname"
					| "dns.resolveCaa"
					| "dns.resolveMx"
					| "dns.resolveNaptr"
					| "dns.resolveNs"
					| "dns.resolvePtr"
					| "dns.resolveSoa"
					| "dns.resolveSrv"
					| "dns.resolveTxt"
					| "dns.reverse"
					| "dns.setDefaultResultOrder"
					| "dns.getDefaultResultOrder"
					| "dns.setServers"
					| "dns.promises"
					| "dns.promises.Resolver"
					| "dns.promises.cancel"
					| "dns.promises.getServers"
					| "dns.promises.lookup"
					| "dns.promises.lookupService"
					| "dns.promises.resolve"
					| "dns.promises.resolve4"
					| "dns.promises.resolve6"
					| "dns.promises.resolveAny"
					| "dns.promises.resolveCaa"
					| "dns.promises.resolveCname"
					| "dns.promises.resolveMx"
					| "dns.promises.resolveNaptr"
					| "dns.promises.resolveNs"
					| "dns.promises.resolvePtr"
					| "dns.promises.resolveSoa"
					| "dns.promises.resolveSrv"
					| "dns.promises.resolveTxt"
					| "dns.promises.reverse"
					| "dns.promises.setDefaultResultOrder"
					| "dns.promises.getDefaultResultOrder"
					| "dns.promises.setServers"
					| "dns/promises"
					| "dns/promises.Resolver"
					| "dns/promises.cancel"
					| "dns/promises.getServers"
					| "dns/promises.lookup"
					| "dns/promises.lookupService"
					| "dns/promises.resolve"
					| "dns/promises.resolve4"
					| "dns/promises.resolve6"
					| "dns/promises.resolveAny"
					| "dns/promises.resolveCaa"
					| "dns/promises.resolveCname"
					| "dns/promises.resolveMx"
					| "dns/promises.resolveNaptr"
					| "dns/promises.resolveNs"
					| "dns/promises.resolvePtr"
					| "dns/promises.resolveSoa"
					| "dns/promises.resolveSrv"
					| "dns/promises.resolveTxt"
					| "dns/promises.reverse"
					| "dns/promises.setDefaultResultOrder"
					| "dns/promises.getDefaultResultOrder"
					| "dns/promises.setServers"
					| "domain"
					| "domain.create"
					| "domain.Domain"
					| "events"
					| "events.Event"
					| "events.EventTarget"
					| "events.CustomEvent"
					| "events.NodeEventTarget"
					| "events.EventEmitter"
					| "events.EventEmitter.defaultMaxListeners"
					| "events.EventEmitter.errorMonitor"
					| "events.EventEmitter.captureRejections"
					| "events.EventEmitter.captureRejectionSymbol"
					| "events.EventEmitter.getEventListeners"
					| "events.EventEmitter.getMaxListeners"
					| "events.EventEmitter.once"
					| "events.EventEmitter.listenerCount"
					| "events.EventEmitter.on"
					| "events.EventEmitter.setMaxListeners"
					| "events.EventEmitter.addAbortListener"
					| "events.EventEmitterAsyncResource"
					| "events.EventEmitterAsyncResource.defaultMaxListeners"
					| "events.EventEmitterAsyncResource.errorMonitor"
					| "events.EventEmitterAsyncResource.captureRejections"
					| "events.EventEmitterAsyncResource.captureRejectionSymbol"
					| "events.EventEmitterAsyncResource.getEventListeners"
					| "events.EventEmitterAsyncResource.getMaxListeners"
					| "events.EventEmitterAsyncResource.once"
					| "events.EventEmitterAsyncResource.listenerCount"
					| "events.EventEmitterAsyncResource.on"
					| "events.EventEmitterAsyncResource.setMaxListeners"
					| "events.EventEmitterAsyncResource.addAbortListener"
					| "events.defaultMaxListeners"
					| "events.errorMonitor"
					| "events.captureRejections"
					| "events.captureRejectionSymbol"
					| "events.getEventListeners"
					| "events.getMaxListeners"
					| "events.once"
					| "events.listenerCount"
					| "events.on"
					| "events.setMaxListeners"
					| "events.addAbortListener"
					| "fs"
					| "fs.promises"
					| "fs.promises.FileHandle"
					| "fs.promises.access"
					| "fs.promises.appendFile"
					| "fs.promises.chmod"
					| "fs.promises.chown"
					| "fs.promises.constants"
					| "fs.promises.copyFile"
					| "fs.promises.cp"
					| "fs.promises.glob"
					| "fs.promises.lchmod"
					| "fs.promises.lchown"
					| "fs.promises.link"
					| "fs.promises.lstat"
					| "fs.promises.lutimes"
					| "fs.promises.mkdir"
					| "fs.promises.mkdtemp"
					| "fs.promises.open"
					| "fs.promises.opendir"
					| "fs.promises.readFile"
					| "fs.promises.readdir"
					| "fs.promises.readlink"
					| "fs.promises.realpath"
					| "fs.promises.rename"
					| "fs.promises.rm"
					| "fs.promises.rmdir"
					| "fs.promises.stat"
					| "fs.promises.statfs"
					| "fs.promises.symlink"
					| "fs.promises.truncate"
					| "fs.promises.unlink"
					| "fs.promises.utimes"
					| "fs.promises.watch"
					| "fs.promises.writeFile"
					| "fs.access"
					| "fs.appendFile"
					| "fs.chmod"
					| "fs.chown"
					| "fs.close"
					| "fs.copyFile"
					| "fs.cp"
					| "fs.createReadStream"
					| "fs.createWriteStream"
					| "fs.exists"
					| "fs.fchmod"
					| "fs.fchown"
					| "fs.fdatasync"
					| "fs.fstat"
					| "fs.fsync"
					| "fs.ftruncate"
					| "fs.futimes"
					| "fs.glob"
					| "fs.lchmod"
					| "fs.lchown"
					| "fs.link"
					| "fs.lstat"
					| "fs.lutimes"
					| "fs.mkdir"
					| "fs.mkdtemp"
					| "fs.native"
					| "fs.open"
					| "fs.openAsBlob"
					| "fs.opendir"
					| "fs.read"
					| "fs.readdir"
					| "fs.readFile"
					| "fs.readlink"
					| "fs.readv"
					| "fs.realpath"
					| "fs.realpath.native"
					| "fs.rename"
					| "fs.rm"
					| "fs.rmdir"
					| "fs.stat"
					| "fs.statfs"
					| "fs.symlink"
					| "fs.truncate"
					| "fs.unlink"
					| "fs.unwatchFile"
					| "fs.utimes"
					| "fs.watch"
					| "fs.watchFile"
					| "fs.write"
					| "fs.writeFile"
					| "fs.writev"
					| "fs.accessSync"
					| "fs.appendFileSync"
					| "fs.chmodSync"
					| "fs.chownSync"
					| "fs.closeSync"
					| "fs.copyFileSync"
					| "fs.cpSync"
					| "fs.existsSync"
					| "fs.fchmodSync"
					| "fs.fchownSync"
					| "fs.fdatasyncSync"
					| "fs.fstatSync"
					| "fs.fsyncSync"
					| "fs.ftruncateSync"
					| "fs.futimesSync"
					| "fs.globSync"
					| "fs.lchmodSync"
					| "fs.lchownSync"
					| "fs.linkSync"
					| "fs.lstatSync"
					| "fs.lutimesSync"
					| "fs.mkdirSync"
					| "fs.mkdtempSync"
					| "fs.opendirSync"
					| "fs.openSync"
					| "fs.readdirSync"
					| "fs.readFileSync"
					| "fs.readlinkSync"
					| "fs.readSync"
					| "fs.readvSync"
					| "fs.realpathSync"
					| "fs.realpathSync.native"
					| "fs.renameSync"
					| "fs.rmdirSync"
					| "fs.rmSync"
					| "fs.statfsSync"
					| "fs.statSync"
					| "fs.symlinkSync"
					| "fs.truncateSync"
					| "fs.unlinkSync"
					| "fs.utimesSync"
					| "fs.writeFileSync"
					| "fs.writeSync"
					| "fs.writevSync"
					| "fs.constants"
					| "fs.Dir"
					| "fs.Dirent"
					| "fs.FSWatcher"
					| "fs.StatWatcher"
					| "fs.ReadStream"
					| "fs.Stats()"
					| "new fs.Stats()"
					| "fs.Stats"
					| "fs.StatFs"
					| "fs.WriteStream"
					| "fs.common_objects"
					| "fs/promises"
					| "fs/promises.FileHandle"
					| "fs/promises.access"
					| "fs/promises.appendFile"
					| "fs/promises.chmod"
					| "fs/promises.chown"
					| "fs/promises.constants"
					| "fs/promises.copyFile"
					| "fs/promises.cp"
					| "fs/promises.glob"
					| "fs/promises.lchmod"
					| "fs/promises.lchown"
					| "fs/promises.link"
					| "fs/promises.lstat"
					| "fs/promises.lutimes"
					| "fs/promises.mkdir"
					| "fs/promises.mkdtemp"
					| "fs/promises.open"
					| "fs/promises.opendir"
					| "fs/promises.readFile"
					| "fs/promises.readdir"
					| "fs/promises.readlink"
					| "fs/promises.realpath"
					| "fs/promises.rename"
					| "fs/promises.rm"
					| "fs/promises.rmdir"
					| "fs/promises.stat"
					| "fs/promises.statfs"
					| "fs/promises.symlink"
					| "fs/promises.truncate"
					| "fs/promises.unlink"
					| "fs/promises.utimes"
					| "fs/promises.watch"
					| "fs/promises.writeFile"
					| "http2"
					| "http2.constants"
					| "http2.sensitiveHeaders"
					| "http2.createServer"
					| "http2.createSecureServer"
					| "http2.connect"
					| "http2.getDefaultSettings"
					| "http2.getPackedSettings"
					| "http2.getUnpackedSettings"
					| "http2.performServerHandshake"
					| "http2.Http2Session"
					| "http2.ServerHttp2Session"
					| "http2.ClientHttp2Session"
					| "http2.Http2Stream"
					| "http2.ClientHttp2Stream"
					| "http2.ServerHttp2Stream"
					| "http2.Http2Server"
					| "http2.Http2SecureServer"
					| "http2.Http2ServerRequest"
					| "http2.Http2ServerResponse"
					| "http"
					| "http.globalAgent"
					| "http.createServer"
					| "http.get"
					| "http.request"
					| "http.Agent"
					| "http.Server"
					| "inspector"
					| "inspector.Session"
					| "inspector.console"
					| "inspector.close"
					| "inspector.open"
					| "inspector.url"
					| "inspector.waitForDebugger"
					| "inspector/promises"
					| "inspector/promises.Session"
					| "inspector/promises.console"
					| "inspector/promises.close"
					| "inspector/promises.open"
					| "inspector/promises.url"
					| "inspector/promises.waitForDebugger"
					| "module.builtinModules"
					| "module.createRequire"
					| "module.createRequireFromPath"
					| "module.isBuiltin"
					| "module.register"
					| "module.syncBuiltinESMExports"
					| "module.findSourceMap"
					| "module.SourceMap"
					| "module.Module.builtinModules"
					| "module.Module.createRequire"
					| "module.Module.createRequireFromPath"
					| "module.Module.isBuiltin"
					| "module.Module.register"
					| "module.Module.syncBuiltinESMExports"
					| "module.Module.findSourceMap"
					| "module.Module.SourceMap"
					| "net"
					| "net.connect"
					| "net.createConnection"
					| "net.createServer"
					| "net.getDefaultAutoSelectFamily"
					| "net.setDefaultAutoSelectFamily"
					| "net.getDefaultAutoSelectFamilyAttemptTimeout"
					| "net.setDefaultAutoSelectFamilyAttemptTimeout"
					| "net.isIP"
					| "net.isIPv4"
					| "net.isIPv6"
					| "net.BlockList"
					| "net.SocketAddress"
					| "net.Server"
					| "net.Socket"
					| "os"
					| "os.EOL"
					| "os.constants"
					| "os.constants.priority"
					| "os.devNull"
					| "os.availableParallelism"
					| "os.arch"
					| "os.cpus"
					| "os.endianness"
					| "os.freemem"
					| "os.getPriority"
					| "os.homedir"
					| "os.hostname"
					| "os.loadavg"
					| "os.machine"
					| "os.networkInterfaces"
					| "os.platform"
					| "os.release"
					| "os.setPriority"
					| "os.tmpdir"
					| "os.totalmem"
					| "os.type"
					| "os.uptime"
					| "os.userInfo"
					| "os.version"
					| "path"
					| "path.posix"
					| "path.posix.delimiter"
					| "path.posix.sep"
					| "path.posix.basename"
					| "path.posix.dirname"
					| "path.posix.extname"
					| "path.posix.format"
					| "path.posix.isAbsolute"
					| "path.posix.join"
					| "path.posix.normalize"
					| "path.posix.parse"
					| "path.posix.relative"
					| "path.posix.resolve"
					| "path.posix.toNamespacedPath"
					| "path.win32"
					| "path.win32.delimiter"
					| "path.win32.sep"
					| "path.win32.basename"
					| "path.win32.dirname"
					| "path.win32.extname"
					| "path.win32.format"
					| "path.win32.isAbsolute"
					| "path.win32.join"
					| "path.win32.normalize"
					| "path.win32.parse"
					| "path.win32.relative"
					| "path.win32.resolve"
					| "path.win32.toNamespacedPath"
					| "path.delimiter"
					| "path.sep"
					| "path.basename"
					| "path.dirname"
					| "path.extname"
					| "path.format"
					| "path.isAbsolute"
					| "path.join"
					| "path.normalize"
					| "path.parse"
					| "path.relative"
					| "path.resolve"
					| "path.toNamespacedPath"
					| "path/posix"
					| "path/posix.delimiter"
					| "path/posix.sep"
					| "path/posix.basename"
					| "path/posix.dirname"
					| "path/posix.extname"
					| "path/posix.format"
					| "path/posix.isAbsolute"
					| "path/posix.join"
					| "path/posix.normalize"
					| "path/posix.parse"
					| "path/posix.relative"
					| "path/posix.resolve"
					| "path/posix.toNamespacedPath"
					| "path/win32"
					| "path/win32.delimiter"
					| "path/win32.sep"
					| "path/win32.basename"
					| "path/win32.dirname"
					| "path/win32.extname"
					| "path/win32.format"
					| "path/win32.isAbsolute"
					| "path/win32.join"
					| "path/win32.normalize"
					| "path/win32.parse"
					| "path/win32.relative"
					| "path/win32.resolve"
					| "path/win32.toNamespacedPath"
					| "perf_hooks"
					| "perf_hooks.performance"
					| "perf_hooks.createHistogram"
					| "perf_hooks.monitorEventLoopDelay"
					| "perf_hooks.PerformanceEntry"
					| "perf_hooks.PerformanceMark"
					| "perf_hooks.PerformanceMeasure"
					| "perf_hooks.PerformanceNodeEntry"
					| "perf_hooks.PerformanceNodeTiming"
					| "perf_hooks.PerformanceResourceTiming"
					| "perf_hooks.PerformanceObserver"
					| "perf_hooks.PerformanceObserverEntryList"
					| "perf_hooks.Histogram"
					| "perf_hooks.IntervalHistogram"
					| "perf_hooks.RecordableHistogram"
					| "punycode"
					| "punycode.ucs2"
					| "punycode.version"
					| "punycode.decode"
					| "punycode.encode"
					| "punycode.toASCII"
					| "punycode.toUnicode"
					| "querystring"
					| "querystring.decode"
					| "querystring.encode"
					| "querystring.escape"
					| "querystring.parse"
					| "querystring.stringify"
					| "querystring.unescape"
					| "readline"
					| "readline.promises"
					| "readline.promises.createInterface"
					| "readline.promises.Interface"
					| "readline.promises.Readline"
					| "readline.clearLine"
					| "readline.clearScreenDown"
					| "readline.createInterface"
					| "readline.cursorTo"
					| "readline.moveCursor"
					| "readline.Interface"
					| "readline.emitKeypressEvents"
					| "readline.InterfaceConstructor"
					| "readline/promises"
					| "readline/promises.createInterface"
					| "readline/promises.Interface"
					| "readline/promises.Readline"
					| "sea"
					| "sea.isSea"
					| "sea.getAsset"
					| "sea.getAssetAsBlob"
					| "sea.getRawAsset"
					| "sea.test.isSea"
					| "sea.test.getAsset"
					| "sea.test.getAssetAsBlob"
					| "sea.test.getRawAsset"
					| "stream"
					| "stream.promises"
					| "stream.promises.pipeline"
					| "stream.promises.finished"
					| "stream.finished"
					| "stream.pipeline"
					| "stream.compose"
					| "stream.Readable"
					| "stream.Readable.from"
					| "stream.Readable.isDisturbed"
					| "stream.Readable.fromWeb"
					| "stream.Readable.toWeb"
					| "stream.Writable"
					| "stream.Writable.fromWeb"
					| "stream.Writable.toWeb"
					| "stream.Duplex"
					| "stream.Duplex.from"
					| "stream.Duplex.fromWeb"
					| "stream.Duplex.toWeb"
					| "stream.Transform"
					| "stream.isErrored"
					| "stream.isReadable"
					| "stream.addAbortSignal"
					| "stream.getDefaultHighWaterMark"
					| "stream.setDefaultHighWaterMark"
					| "stream/promises.pipeline"
					| "stream/promises.finished"
					| "stream/web"
					| "stream/web.ReadableStream"
					| "stream/web.ReadableStream.from"
					| "stream/web.ReadableStreamDefaultReader"
					| "stream/web.ReadableStreamBYOBReader"
					| "stream/web.ReadableStreamDefaultController"
					| "stream/web.ReadableByteStreamController"
					| "stream/web.ReadableStreamBYOBRequest"
					| "stream/web.WritableStream"
					| "stream/web.WritableStreamDefaultWriter"
					| "stream/web.WritableStreamDefaultController"
					| "stream/web.TransformStream"
					| "stream/web.TransformStreamDefaultController"
					| "stream/web.ByteLengthQueuingStrategy"
					| "stream/web.CountQueuingStrategy"
					| "stream/web.TextEncoderStream"
					| "stream/web.TextDecoderStream"
					| "stream/web.CompressionStream"
					| "stream/web.DecompressionStream"
					| "stream/consumers"
					| "stream/consumers.arrayBuffer"
					| "stream/consumers.blob"
					| "stream/consumers.buffer"
					| "stream/consumers.json"
					| "stream/consumers.text"
					| "string_decoder"
					| "string_decoder.StringDecoder"
					| "test"
					| "test.run"
					| "test.skip"
					| "test.todo"
					| "test.only"
					| "test.describe"
					| "test.describe.skip"
					| "test.describe.todo"
					| "test.describe.only"
					| "test.it"
					| "test.it.skip"
					| "test.it.todo"
					| "test.it.only"
					| "test.suite"
					| "test.suite.skip"
					| "test.suite.todo"
					| "test.suite.only"
					| "test.before"
					| "test.after"
					| "test.beforeEach"
					| "test.afterEach"
					| "test.MockFunctionContext"
					| "test.MockTracker"
					| "test.MockTimers"
					| "test.TestsStream"
					| "test.TestContext"
					| "test.SuiteContext"
					| "test.test.run"
					| "test.test.skip"
					| "test.test.todo"
					| "test.test.only"
					| "test.test.describe"
					| "test.test.it"
					| "test.test.suite"
					| "test.test.before"
					| "test.test.after"
					| "test.test.beforeEach"
					| "test.test.afterEach"
					| "test.test.MockFunctionContext"
					| "test.test.MockTracker"
					| "test.test.MockTimers"
					| "test.test.TestsStream"
					| "test.test.TestContext"
					| "test.test.SuiteContext"
					| "timers"
					| "timers.Immediate"
					| "timers.Timeout"
					| "timers.setImmediate"
					| "timers.clearImmediate"
					| "timers.setInterval"
					| "timers.clearInterval"
					| "timers.setTimeout"
					| "timers.clearTimeout"
					| "timers.promises"
					| "timers.promises.setTimeout"
					| "timers.promises.setImmediate"
					| "timers.promises.setInterval"
					| "timers.promises.scheduler.wait"
					| "timers.promises.scheduler.yield"
					| "timers/promises"
					| "timers/promises.setTimeout"
					| "timers/promises.setImmediate"
					| "timers/promises.setInterval"
					| "tls"
					| "tls.rootCertificates"
					| "tls.DEFAULT_ECDH_CURVE"
					| "tls.DEFAULT_MAX_VERSION"
					| "tls.DEFAULT_MIN_VERSION"
					| "tls.DEFAULT_CIPHERS"
					| "tls.checkServerIdentity"
					| "tls.connect"
					| "tls.createSecureContext"
					| "tls.createSecurePair"
					| "tls.createServer"
					| "tls.getCiphers"
					| "tls.SecureContext"
					| "tls.CryptoStream"
					| "tls.SecurePair"
					| "tls.Server"
					| "tls.TLSSocket"
					| "trace_events"
					| "trace_events.createTracing"
					| "trace_events.getEnabledCategories"
					| "tty"
					| "tty.isatty"
					| "tty.ReadStream"
					| "tty.WriteStream"
					| "url"
					| "url.domainToASCII"
					| "url.domainToUnicode"
					| "url.fileURLToPath"
					| "url.format"
					| "url.pathToFileURL"
					| "url.urlToHttpOptions"
					| "url.URL"
					| "url.URL.canParse"
					| "url.URL.createObjectURL"
					| "url.URL.revokeObjectURL"
					| "url.URLSearchParams"
					| "url.Url"
					| "util.promisify"
					| "util.promisify.custom"
					| "util.callbackify"
					| "util.debuglog"
					| "util.debug"
					| "util.deprecate"
					| "util.format"
					| "util.formatWithOptions"
					| "util.getSystemErrorName"
					| "util.getSystemErrorMap"
					| "util.inherits"
					| "util.inspect"
					| "util.inspect.custom"
					| "util.inspect.defaultOptions"
					| "util.inspect.replDefaults"
					| "util.isDeepStrictEqual"
					| "util.parseArgs"
					| "util.parseEnv"
					| "util.stripVTControlCharacters"
					| "util.styleText"
					| "util.toUSVString"
					| "util.transferableAbortController"
					| "util.transferableAbortSignal"
					| "util.aborted"
					| "util.MIMEType"
					| "util.MIMEParams"
					| "util.TextDecoder"
					| "util.TextEncoder"
					| "util.types"
					| "util.types.isExternal"
					| "util.types.isDate"
					| "util.types.isArgumentsObject"
					| "util.types.isBigIntObject"
					| "util.types.isBooleanObject"
					| "util.types.isNumberObject"
					| "util.types.isStringObject"
					| "util.types.isSymbolObject"
					| "util.types.isNativeError"
					| "util.types.isRegExp"
					| "util.types.isAsyncFunction"
					| "util.types.isGeneratorFunction"
					| "util.types.isGeneratorObject"
					| "util.types.isPromise"
					| "util.types.isMap"
					| "util.types.isSet"
					| "util.types.isMapIterator"
					| "util.types.isSetIterator"
					| "util.types.isWeakMap"
					| "util.types.isWeakSet"
					| "util.types.isArrayBuffer"
					| "util.types.isDataView"
					| "util.types.isSharedArrayBuffer"
					| "util.types.isProxy"
					| "util.types.isModuleNamespaceObject"
					| "util.types.isAnyArrayBuffer"
					| "util.types.isBoxedPrimitive"
					| "util.types.isArrayBufferView"
					| "util.types.isTypedArray"
					| "util.types.isUint8Array"
					| "util.types.isUint8ClampedArray"
					| "util.types.isUint16Array"
					| "util.types.isUint32Array"
					| "util.types.isInt8Array"
					| "util.types.isInt16Array"
					| "util.types.isInt32Array"
					| "util.types.isFloat32Array"
					| "util.types.isFloat64Array"
					| "util.types.isBigInt64Array"
					| "util.types.isBigUint64Array"
					| "util.types.isKeyObject"
					| "util.types.isCryptoKey"
					| "util.types.isWebAssemblyCompiledModule"
					| "util._extend"
					| "util.isArray"
					| "util.isBoolean"
					| "util.isBuffer"
					| "util.isDate"
					| "util.isError"
					| "util.isFunction"
					| "util.isNull"
					| "util.isNullOrUndefined"
					| "util.isNumber"
					| "util.isObject"
					| "util.isPrimitive"
					| "util.isRegExp"
					| "util.isString"
					| "util.isSymbol"
					| "util.isUndefined"
					| "util.log"
					| "util"
					| "util/types"
					| "util/types.isExternal"
					| "util/types.isDate"
					| "util/types.isArgumentsObject"
					| "util/types.isBigIntObject"
					| "util/types.isBooleanObject"
					| "util/types.isNumberObject"
					| "util/types.isStringObject"
					| "util/types.isSymbolObject"
					| "util/types.isNativeError"
					| "util/types.isRegExp"
					| "util/types.isAsyncFunction"
					| "util/types.isGeneratorFunction"
					| "util/types.isGeneratorObject"
					| "util/types.isPromise"
					| "util/types.isMap"
					| "util/types.isSet"
					| "util/types.isMapIterator"
					| "util/types.isSetIterator"
					| "util/types.isWeakMap"
					| "util/types.isWeakSet"
					| "util/types.isArrayBuffer"
					| "util/types.isDataView"
					| "util/types.isSharedArrayBuffer"
					| "util/types.isProxy"
					| "util/types.isModuleNamespaceObject"
					| "util/types.isAnyArrayBuffer"
					| "util/types.isBoxedPrimitive"
					| "util/types.isArrayBufferView"
					| "util/types.isTypedArray"
					| "util/types.isUint8Array"
					| "util/types.isUint8ClampedArray"
					| "util/types.isUint16Array"
					| "util/types.isUint32Array"
					| "util/types.isInt8Array"
					| "util/types.isInt16Array"
					| "util/types.isInt32Array"
					| "util/types.isFloat32Array"
					| "util/types.isFloat64Array"
					| "util/types.isBigInt64Array"
					| "util/types.isBigUint64Array"
					| "util/types.isKeyObject"
					| "util/types.isCryptoKey"
					| "util/types.isWebAssemblyCompiledModule"
					| "v8"
					| "v8.serialize"
					| "v8.deserialize"
					| "v8.Serializer"
					| "v8.Deserializer"
					| "v8.DefaultSerializer"
					| "v8.DefaultDeserializer"
					| "v8.promiseHooks"
					| "v8.promiseHooks.onInit"
					| "v8.promiseHooks.onSettled"
					| "v8.promiseHooks.onBefore"
					| "v8.promiseHooks.onAfter"
					| "v8.promiseHooks.createHook"
					| "v8.startupSnapshot"
					| "v8.startupSnapshot.addSerializeCallback"
					| "v8.startupSnapshot.addDeserializeCallback"
					| "v8.startupSnapshot.setDeserializeMainFunction"
					| "v8.startupSnapshot.isBuildingSnapshot"
					| "v8.cachedDataVersionTag"
					| "v8.getHeapCodeStatistics"
					| "v8.getHeapSnapshot"
					| "v8.getHeapSpaceStatistics"
					| "v8.getHeapStatistics"
					| "v8.queryObjects"
					| "v8.setFlagsFromString"
					| "v8.stopCoverage"
					| "v8.takeCoverage"
					| "v8.writeHeapSnapshot"
					| "v8.setHeapSnapshotNearHeapLimit"
					| "v8.GCProfiler"
					| "vm.constants"
					| "vm.compileFunction"
					| "vm.createContext"
					| "vm.isContext"
					| "vm.measureMemory"
					| "vm.runInContext"
					| "vm.runInNewContext"
					| "vm.runInThisContext"
					| "vm.Script"
					| "vm.Module"
					| "vm.SourceTextModule"
					| "vm.SyntheticModule"
					| "vm"
					| "wasi.WASI"
					| "wasi"
					| "worker_threads"
					| "worker_threads.isMainThread"
					| "worker_threads.parentPort"
					| "worker_threads.resourceLimits"
					| "worker_threads.SHARE_ENV"
					| "worker_threads.threadId"
					| "worker_threads.workerData"
					| "worker_threads.getEnvironmentData"
					| "worker_threads.markAsUntransferable"
					| "worker_threads.isMarkedAsUntransferable"
					| "worker_threads.moveMessagePortToContext"
					| "worker_threads.receiveMessageOnPort"
					| "worker_threads.setEnvironmentData"
					| "worker_threads.BroadcastChannel"
					| "worker_threads.MessageChannel"
					| "worker_threads.MessagePort"
					| "worker_threads.Worker"
					| "zlib.constants"
					| "zlib.crc32"
					| "zlib.createBrotliCompress"
					| "zlib.createBrotliDecompress"
					| "zlib.createDeflate"
					| "zlib.createDeflateRaw"
					| "zlib.createGunzip"
					| "zlib.createGzip"
					| "zlib.createInflate"
					| "zlib.createInflateRaw"
					| "zlib.createUnzip"
					| "zlib.brotliCompress"
					| "zlib.brotliCompressSync"
					| "zlib.brotliDecompress"
					| "zlib.brotliDecompressSync"
					| "zlib.deflate"
					| "zlib.deflateSync"
					| "zlib.deflateRaw"
					| "zlib.deflateRawSync"
					| "zlib.gunzip"
					| "zlib.gunzipSync"
					| "zlib.gzip"
					| "zlib.gzipSync"
					| "zlib.inflate"
					| "zlib.inflateSync"
					| "zlib.inflateRaw"
					| "zlib.inflateRawSync"
					| "zlib.unzip"
					| "zlib.unzipSync"
					| "zlib.BrotliCompress"
					| "zlib.BrotliDecompress"
					| "zlib.Deflate"
					| "zlib.DeflateRaw"
					| "zlib.Gunzip"
					| "zlib.Gzip"
					| "zlib.Inflate"
					| "zlib.InflateRaw"
					| "zlib.Unzip"
					| "zlib"
				)[];
			},
	  ];
// ----- node/prefer-global/buffer -----
type NodePreferGlobalBuffer = [] | ["always" | "never"];
// ----- node/prefer-global/console -----
type NodePreferGlobalConsole = [] | ["always" | "never"];
// ----- node/prefer-global/process -----
type NodePreferGlobalProcess = [] | ["always" | "never"];
// ----- node/prefer-global/text-decoder -----
type NodePreferGlobalTextDecoder = [] | ["always" | "never"];
// ----- node/prefer-global/text-encoder -----
type NodePreferGlobalTextEncoder = [] | ["always" | "never"];
// ----- node/prefer-global/url -----
type NodePreferGlobalUrl = [] | ["always" | "never"];
// ----- node/prefer-global/url-search-params -----
type NodePreferGlobalUrlSearchParams = [] | ["always" | "never"];
// ----- node/prefer-node-protocol -----
type NodePreferNodeProtocol =
	| []
	| [
			{
				version?: string;
			},
	  ];
// ----- node/shebang -----
type NodeShebang =
	| []
	| [
			{
				convertPath?:
					| {
							[k: string]: [string, string];
					  }
					| [
							{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							},
							...{
								include: [string, ...string[]];
								exclude?: string[];

								replace: [string, string];
							}[],
					  ];
				ignoreUnpublished?: boolean;
				additionalExecutables?: string[];
				executableMap?: {
					[k: string]: string;
				};
			},
	  ];
// ----- nonblock-statement-body-position -----
type NonblockStatementBodyPosition =
	| []
	| ["beside" | "below" | "any"]
	| [
			"beside" | "below" | "any",
			{
				overrides?: {
					if?: "beside" | "below" | "any";
					else?: "beside" | "below" | "any";
					while?: "beside" | "below" | "any";
					do?: "beside" | "below" | "any";
					for?: "beside" | "below" | "any";
				};
			},
	  ];
// ----- object-curly-newline -----
type ObjectCurlyNewline =
	| []
	| [
			| (
					| ("always" | "never")
					| {
							multiline?: boolean;
							minProperties?: number;
							consistent?: boolean;
					  }
			  )
			| {
					ObjectExpression?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ObjectPattern?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ImportDeclaration?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ExportDeclaration?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
			  },
	  ];
// ----- object-curly-spacing -----
type ObjectCurlySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				arraysInObjects?: boolean;
				objectsInObjects?: boolean;
			},
	  ];
// ----- object-property-newline -----
type ObjectPropertyNewline =
	| []
	| [
			{
				allowAllPropertiesOnSameLine?: boolean;
				allowMultiplePropertiesPerLine?: boolean;
			},
	  ];
// ----- object-shorthand -----
type ObjectShorthand =
	| []
	| [
			| "always"
			| "methods"
			| "properties"
			| "never"
			| "consistent"
			| "consistent-as-needed",
	  ]
	| []
	| ["always" | "methods" | "properties"]
	| [
			"always" | "methods" | "properties",
			{
				avoidQuotes?: boolean;
			},
	  ]
	| []
	| ["always" | "methods"]
	| [
			"always" | "methods",
			{
				ignoreConstructors?: boolean;
				methodsIgnorePattern?: string;
				avoidQuotes?: boolean;
				avoidExplicitReturnArrows?: boolean;
			},
	  ];
// ----- one-var -----
type OneVar =
	| []
	| [
			| ("always" | "never" | "consecutive")
			| {
					separateRequires?: boolean;
					var?: "always" | "never" | "consecutive";
					let?: "always" | "never" | "consecutive";
					const?: "always" | "never" | "consecutive";
			  }
			| {
					initialized?: "always" | "never" | "consecutive";
					uninitialized?: "always" | "never" | "consecutive";
			  },
	  ];
// ----- one-var-declaration-per-line -----
type OneVarDeclarationPerLine = [] | ["always" | "initializations"];
// ----- operator-assignment -----
type OperatorAssignment = [] | ["always" | "never"];
// ----- operator-linebreak -----
type OperatorLinebreak =
	| []
	| ["after" | "before" | "none" | null]
	| [
			"after" | "before" | "none" | null,
			{
				overrides?: {
					[k: string]: ("after" | "before" | "none" | "ignore") | undefined;
				};
			},
	  ];
// ----- padded-blocks -----
type PaddedBlocks =
	| []
	| [
			| ("always" | "never")
			| {
					blocks?: "always" | "never";
					switches?: "always" | "never";
					classes?: "always" | "never";
			  },
	  ]
	| [
			(
				| ("always" | "never")
				| {
						blocks?: "always" | "never";
						switches?: "always" | "never";
						classes?: "always" | "never";
				  }
			),
			{
				allowSingleLineBlocks?: boolean;
			},
	  ];
// ----- padding-line-between-statements -----
type _PaddingLineBetweenStatementsPaddingType = "any" | "never" | "always";
type _PaddingLineBetweenStatementsStatementType =
	| (
			| "*"
			| "block-like"
			| "cjs-export"
			| "cjs-import"
			| "directive"
			| "expression"
			| "iife"
			| "multiline-block-like"
			| "multiline-expression"
			| "multiline-const"
			| "multiline-let"
			| "multiline-var"
			| "singleline-const"
			| "singleline-let"
			| "singleline-var"
			| "block"
			| "empty"
			| "function"
			| "break"
			| "case"
			| "class"
			| "const"
			| "continue"
			| "debugger"
			| "default"
			| "do"
			| "export"
			| "for"
			| "if"
			| "import"
			| "let"
			| "return"
			| "switch"
			| "throw"
			| "try"
			| "var"
			| "while"
			| "with"
	  )
	| [
			(
				| "*"
				| "block-like"
				| "cjs-export"
				| "cjs-import"
				| "directive"
				| "expression"
				| "iife"
				| "multiline-block-like"
				| "multiline-expression"
				| "multiline-const"
				| "multiline-let"
				| "multiline-var"
				| "singleline-const"
				| "singleline-let"
				| "singleline-var"
				| "block"
				| "empty"
				| "function"
				| "break"
				| "case"
				| "class"
				| "const"
				| "continue"
				| "debugger"
				| "default"
				| "do"
				| "export"
				| "for"
				| "if"
				| "import"
				| "let"
				| "return"
				| "switch"
				| "throw"
				| "try"
				| "var"
				| "while"
				| "with"
			),
			...(
				| "*"
				| "block-like"
				| "cjs-export"
				| "cjs-import"
				| "directive"
				| "expression"
				| "iife"
				| "multiline-block-like"
				| "multiline-expression"
				| "multiline-const"
				| "multiline-let"
				| "multiline-var"
				| "singleline-const"
				| "singleline-let"
				| "singleline-var"
				| "block"
				| "empty"
				| "function"
				| "break"
				| "case"
				| "class"
				| "const"
				| "continue"
				| "debugger"
				| "default"
				| "do"
				| "export"
				| "for"
				| "if"
				| "import"
				| "let"
				| "return"
				| "switch"
				| "throw"
				| "try"
				| "var"
				| "while"
				| "with"
			)[],
	  ];
type PaddingLineBetweenStatements = {
	blankLine: _PaddingLineBetweenStatementsPaddingType;
	prev: _PaddingLineBetweenStatementsStatementType;
	next: _PaddingLineBetweenStatementsStatementType;
}[];
// ----- prefer-arrow-callback -----
type PreferArrowCallback =
	| []
	| [
			{
				allowNamedFunctions?: boolean;
				allowUnboundThis?: boolean;
			},
	  ];
// ----- prefer-const -----
type PreferConst =
	| []
	| [
			{
				destructuring?: "any" | "all";
				ignoreReadBeforeAssign?: boolean;
			},
	  ];
// ----- prefer-destructuring -----
type PreferDestructuring =
	| []
	| [
			| {
					VariableDeclarator?: {
						array?: boolean;
						object?: boolean;
					};
					AssignmentExpression?: {
						array?: boolean;
						object?: boolean;
					};
			  }
			| {
					array?: boolean;
					object?: boolean;
			  },
	  ]
	| [
			(
				| {
						VariableDeclarator?: {
							array?: boolean;
							object?: boolean;
						};
						AssignmentExpression?: {
							array?: boolean;
							object?: boolean;
						};
				  }
				| {
						array?: boolean;
						object?: boolean;
				  }
			),
			{
				enforceForRenamedProperties?: boolean;
			},
	  ];
// ----- prefer-promise-reject-errors -----
type PreferPromiseRejectErrors =
	| []
	| [
			{
				allowEmptyReject?: boolean;
			},
	  ];
// ----- prefer-reflect -----
type PreferReflect =
	| []
	| [
			{
				exceptions?: (
					| "apply"
					| "call"
					| "delete"
					| "defineProperty"
					| "getOwnPropertyDescriptor"
					| "getPrototypeOf"
					| "setPrototypeOf"
					| "isExtensible"
					| "getOwnPropertyNames"
					| "preventExtensions"
				)[];
			},
	  ];
// ----- prefer-regex-literals -----
type PreferRegexLiterals =
	| []
	| [
			{
				disallowRedundantWrapping?: boolean;
			},
	  ];
// ----- promise/always-return -----
type PromiseAlwaysReturn =
	| []
	| [
			{
				ignoreLastCallback?: boolean;
			},
	  ];
// ----- promise/catch-or-return -----
type PromiseCatchOrReturn =
	| []
	| [
			{
				allowFinally?: boolean;
				allowThen?: boolean;
				terminationMethod?: string | string[];
			},
	  ];
// ----- promise/no-callback-in-promise -----
type PromiseNoCallbackInPromise =
	| []
	| [
			{
				exceptions?: string[];
			},
	  ];
// ----- promise/no-return-wrap -----
type PromiseNoReturnWrap =
	| []
	| [
			{
				allowReject?: boolean;
			},
	  ];
// ----- promise/param-names -----
type PromiseParamNames =
	| []
	| [
			{
				resolvePattern?: string;
				rejectPattern?: string;
			},
	  ];
// ----- quote-props -----
type QuoteProps =
	| []
	| ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
	| []
	| ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
	| [
			"always" | "as-needed" | "consistent" | "consistent-as-needed",
			{
				keywords?: boolean;
				unnecessary?: boolean;
				numbers?: boolean;
			},
	  ];
// ----- quotes -----
type Quotes =
	| []
	| ["single" | "double" | "backtick"]
	| [
			"single" | "double" | "backtick",
			(
				| "avoid-escape"
				| {
						avoidEscape?: boolean;
						allowTemplateLiterals?: boolean;
				  }
			),
	  ];
// ----- radix -----
type Radix = [] | ["always" | "as-needed"];
// ----- regexp/hexadecimal-escape -----
type RegexpHexadecimalEscape = [] | ["always" | "never"];
// ----- regexp/letter-case -----
type RegexpLetterCase =
	| []
	| [
			{
				caseInsensitive?: "lowercase" | "uppercase" | "ignore";
				unicodeEscape?: "lowercase" | "uppercase" | "ignore";
				hexadecimalEscape?: "lowercase" | "uppercase" | "ignore";
				controlEscape?: "lowercase" | "uppercase" | "ignore";
			},
	  ];
// ----- regexp/match-any -----
type RegexpMatchAny =
	| []
	| [
			{
				allows?: [
					"[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll",
					...("[\\s\\S]" | "[\\S\\s]" | "[^]" | "dotAll")[],
				];
			},
	  ];
// ----- regexp/no-dupe-disjunctions -----
type RegexpNoDupeDisjunctions =
	| []
	| [
			{
				report?: "all" | "trivial" | "interesting";
				reportExponentialBacktracking?: "none" | "certain" | "potential";
				reportUnreachable?: "certain" | "potential";
			},
	  ];
// ----- regexp/no-lazy-ends -----
type RegexpNoLazyEnds =
	| []
	| [
			{
				ignorePartial?: boolean;
			},
	  ];
// ----- regexp/no-legacy-features -----
type RegexpNoLegacyFeatures =
	| []
	| [
			{
				staticProperties?: (
					| "input"
					| "$_"
					| "lastMatch"
					| "$&"
					| "lastParen"
					| "$+"
					| "leftContext"
					| "$`"
					| "rightContext"
					| "$'"
					| "$1"
					| "$2"
					| "$3"
					| "$4"
					| "$5"
					| "$6"
					| "$7"
					| "$8"
					| "$9"
				)[];
				prototypeMethods?: "compile"[];
			},
	  ];
// ----- regexp/no-misleading-capturing-group -----
type RegexpNoMisleadingCapturingGroup =
	| []
	| [
			{
				reportBacktrackingEnds?: boolean;
			},
	  ];
// ----- regexp/no-misleading-unicode-character -----
type RegexpNoMisleadingUnicodeCharacter =
	| []
	| [
			{
				fixable?: boolean;
			},
	  ];
// ----- regexp/no-missing-g-flag -----
type RegexpNoMissingGFlag =
	| []
	| [
			{
				strictTypes?: boolean;
			},
	  ];
// ----- regexp/no-obscure-range -----
type RegexpNoObscureRange =
	| []
	| [
			{
				allowed?:
					| ("all" | "alphanumeric")
					| ["all" | "alphanumeric"]
					| ["alphanumeric" | string, ...("alphanumeric" | string)[]];
			},
	  ];
// ----- regexp/no-super-linear-backtracking -----
type RegexpNoSuperLinearBacktracking =
	| []
	| [
			{
				report?: "certain" | "potential";
			},
	  ];
// ----- regexp/no-super-linear-move -----
type RegexpNoSuperLinearMove =
	| []
	| [
			{
				report?: "certain" | "potential";
				ignoreSticky?: boolean;
				ignorePartial?: boolean;
			},
	  ];
// ----- regexp/no-unused-capturing-group -----
type RegexpNoUnusedCapturingGroup =
	| []
	| [
			{
				fixable?: boolean;
				allowNamed?: boolean;
			},
	  ];
// ----- regexp/no-useless-character-class -----
type RegexpNoUselessCharacterClass =
	| []
	| [
			{
				ignores?: string[];
			},
	  ];
// ----- regexp/no-useless-flag -----
type RegexpNoUselessFlag =
	| []
	| [
			{
				ignore?: ("i" | "m" | "s" | "g" | "y")[];
				strictTypes?: boolean;
			},
	  ];
// ----- regexp/no-useless-non-capturing-group -----
type RegexpNoUselessNonCapturingGroup =
	| []
	| [
			{
				allowTop?: boolean | ("always" | "never" | "partial");
			},
	  ];
// ----- regexp/optimal-quantifier-concatenation -----
type RegexpOptimalQuantifierConcatenation =
	| []
	| [
			{
				capturingGroups?: "ignore" | "report";
			},
	  ];
// ----- regexp/prefer-character-class -----
type RegexpPreferCharacterClass =
	| []
	| [
			{
				minAlternatives?: number;
			},
	  ];
// ----- regexp/prefer-d -----
type RegexpPreferD =
	| []
	| [
			{
				insideCharacterClass?: "ignore" | "range" | "d";
			},
	  ];
// ----- regexp/prefer-lookaround -----
type RegexpPreferLookaround =
	| []
	| [
			{
				lookbehind?: boolean;
				strictTypes?: boolean;
			},
	  ];
// ----- regexp/prefer-named-replacement -----
type RegexpPreferNamedReplacement =
	| []
	| [
			{
				strictTypes?: boolean;
			},
	  ];
// ----- regexp/prefer-range -----
type RegexpPreferRange =
	| []
	| [
			{
				target?:
					| ("all" | "alphanumeric")
					| ["all" | "alphanumeric"]
					| ["alphanumeric" | string, ...("alphanumeric" | string)[]];
			},
	  ];
// ----- regexp/prefer-result-array-groups -----
type RegexpPreferResultArrayGroups =
	| []
	| [
			{
				strictTypes?: boolean;
			},
	  ];
// ----- regexp/sort-character-class-elements -----
type RegexpSortCharacterClassElements =
	| []
	| [
			{
				order?: ("\\s" | "\\w" | "\\d" | "\\p" | "*" | "\\q" | "[]")[];
			},
	  ];
// ----- regexp/unicode-escape -----
type RegexpUnicodeEscape = [] | ["unicodeCodePointEscape" | "unicodeEscape"];
// ----- regexp/unicode-property -----
type RegexpUnicodeProperty =
	| []
	| [
			{
				generalCategory?: "always" | "never" | "ignore";
				key?: "short" | "long" | "ignore";
				property?:
					| ("short" | "long" | "ignore")
					| {
							binary?: "short" | "long" | "ignore";
							generalCategory?: "short" | "long" | "ignore";
							script?: "short" | "long" | "ignore";
					  };
			},
	  ];
// ----- require-atomic-updates -----
type RequireAtomicUpdates =
	| []
	| [
			{
				allowProperties?: boolean;
			},
	  ];
// ----- rest-spread-spacing -----
type RestSpreadSpacing = [] | ["always" | "never"];
// ----- semi -----
type Semi =
	| []
	| ["never"]
	| [
			"never",
			{
				beforeStatementContinuationChars?: "always" | "any" | "never";
			},
	  ]
	| []
	| ["always"]
	| [
			"always",
			{
				omitLastInOneLineBlock?: boolean;
				omitLastInOneLineClassBody?: boolean;
			},
	  ];
// ----- semi-spacing -----
type SemiSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- semi-style -----
type SemiStyle = [] | ["last" | "first"];
// ----- solid/event-handlers -----
type SolidEventHandlers =
	| []
	| [
			{
				ignoreCase?: boolean;

				warnOnSpread?: boolean;
			},
	  ];
// ----- solid/jsx-no-duplicate-props -----
type SolidJsxNoDuplicateProps =
	| []
	| [
			{
				ignoreCase?: boolean;
				[k: string]: unknown | undefined;
			},
	  ];
// ----- solid/jsx-no-undef -----
type SolidJsxNoUndef =
	| []
	| [
			{
				allowGlobals?: boolean;

				autoImport?: boolean;

				typescriptEnabled?: boolean;
			},
	  ];
// ----- solid/no-innerhtml -----
type SolidNoInnerhtml =
	| []
	| [
			{
				allowStatic?: boolean;
			},
	  ];
// ----- solid/no-unknown-namespaces -----
type SolidNoUnknownNamespaces =
	| []
	| [
			{
				allowedNamespaces?: [string, ...string[]];
			},
	  ];
// ----- solid/prefer-classlist -----
type SolidPreferClasslist =
	| []
	| [
			{
				classnames?: [string, ...string[]];
			},
	  ];
// ----- solid/reactivity -----
type SolidReactivity =
	| []
	| [
			{
				customReactiveFunctions?: string[];
			},
	  ];
// ----- solid/self-closing-comp -----
type SolidSelfClosingComp =
	| []
	| [
			{
				component?: "all" | "none";

				html?: "all" | "void" | "none";
			},
	  ];
// ----- solid/style-prop -----
type SolidStyleProp =
	| []
	| [
			{
				styleProps?: [string, ...string[]];

				allowString?: boolean;
			},
	  ];
// ----- sort-imports -----
type SortImports =
	| []
	| [
			{
				ignoreCase?: boolean;

				memberSyntaxSortOrder?: [
					"none" | "all" | "multiple" | "single",
					"none" | "all" | "multiple" | "single",
					"none" | "all" | "multiple" | "single",
					"none" | "all" | "multiple" | "single",
				];
				ignoreDeclarationSort?: boolean;
				ignoreMemberSort?: boolean;
				allowSeparatedGroups?: boolean;
			},
	  ];
// ----- sort-imports/imports -----
type SortImportsImports =
	| []
	| [
			{
				groups?: string[][];
			},
	  ];
// ----- sort-keys -----
type SortKeys =
	| []
	| ["asc" | "desc"]
	| [
			"asc" | "desc",
			{
				caseSensitive?: boolean;
				natural?: boolean;
				minKeys?: number;
				allowLineSeparatedGroups?: boolean;
			},
	  ];
// ----- sort-vars -----
type SortVars =
	| []
	| [
			{
				ignoreCase?: boolean;
			},
	  ];
// ----- space-before-blocks -----
type SpaceBeforeBlocks =
	| []
	| [
			| ("always" | "never")
			| {
					keywords?: "always" | "never" | "off";
					functions?: "always" | "never" | "off";
					classes?: "always" | "never" | "off";
			  },
	  ];
// ----- space-before-function-paren -----
type SpaceBeforeFunctionParen =
	| []
	| [
			| ("always" | "never")
			| {
					anonymous?: "always" | "never" | "ignore";
					named?: "always" | "never" | "ignore";
					asyncArrow?: "always" | "never" | "ignore";
			  },
	  ];
// ----- space-in-parens -----
type SpaceInParens =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptions?: ("{}" | "[]" | "()" | "empty")[];
			},
	  ];
// ----- space-infix-ops -----
type SpaceInfixOps =
	| []
	| [
			{
				int32Hint?: boolean;
			},
	  ];
// ----- space-unary-ops -----
type SpaceUnaryOps =
	| []
	| [
			{
				words?: boolean;
				nonwords?: boolean;
				overrides?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- spaced-comment -----
type SpacedComment =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptions?: string[];
				markers?: string[];
				line?: {
					exceptions?: string[];
					markers?: string[];
				};
				block?: {
					exceptions?: string[];
					markers?: string[];
					balanced?: boolean;
				};
			},
	  ];
// ----- strict -----
type Strict = [] | ["never" | "global" | "function" | "safe"];
// ----- style/array-bracket-newline -----
type StyleArrayBracketNewline =
	| []
	| [
			| ("always" | "never" | "consistent")
			| {
					multiline?: boolean;
					minItems?: number | null;
			  },
	  ];
// ----- style/array-bracket-spacing -----
type StyleArrayBracketSpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				singleValue?: boolean;
				objectsInArrays?: boolean;
				arraysInArrays?: boolean;
			},
	  ];
// ----- style/array-element-newline -----
type StyleArrayElementNewline =
	| []
	| [
			| _StyleArrayElementNewlineBasicConfig
			| {
					ArrayExpression?: _StyleArrayElementNewlineBasicConfig;
					ArrayPattern?: _StyleArrayElementNewlineBasicConfig;
			  },
	  ];
type _StyleArrayElementNewlineBasicConfig =
	| ("always" | "never" | "consistent")
	| {
			multiline?: boolean;
			minItems?: number | null;
	  };
// ----- style/arrow-parens -----
type StyleArrowParens =
	| []
	| ["always" | "as-needed"]
	| [
			"always" | "as-needed",
			{
				requireForBlockBody?: boolean;
			},
	  ];
// ----- style/arrow-spacing -----
type StyleArrowSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- style/block-spacing -----
type StyleBlockSpacing = [] | ["always" | "never"];
// ----- style/brace-style -----
type StyleBraceStyle =
	| []
	| ["1tbs" | "stroustrup" | "allman"]
	| [
			"1tbs" | "stroustrup" | "allman",
			{
				allowSingleLine?: boolean;
			},
	  ];
// ----- style/comma-dangle -----
type StyleCommaDangle =
	| []
	| [
			| _StyleCommaDangleValue
			| {
					arrays?: _StyleCommaDangleValueWithIgnore;
					objects?: _StyleCommaDangleValueWithIgnore;
					imports?: _StyleCommaDangleValueWithIgnore;
					exports?: _StyleCommaDangleValueWithIgnore;
					functions?: _StyleCommaDangleValueWithIgnore;
					enums?: _StyleCommaDangleValueWithIgnore;
					generics?: _StyleCommaDangleValueWithIgnore;
					tuples?: _StyleCommaDangleValueWithIgnore;
			  },
	  ];
type _StyleCommaDangleValue =
	| "always-multiline"
	| "always"
	| "never"
	| "only-multiline";
type _StyleCommaDangleValueWithIgnore =
	| "always-multiline"
	| "always"
	| "never"
	| "only-multiline"
	| "ignore";
// ----- style/comma-spacing -----
type StyleCommaSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- style/comma-style -----
type StyleCommaStyle =
	| []
	| ["first" | "last"]
	| [
			"first" | "last",
			{
				exceptions?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- style/computed-property-spacing -----
type StyleComputedPropertySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				enforceForClassMembers?: boolean;
			},
	  ];
// ----- style/dot-location -----
type StyleDotLocation = [] | ["object" | "property"];
// ----- style/eol-last -----
type StyleEolLast = [] | ["always" | "never" | "unix" | "windows"];
// ----- style/func-call-spacing -----
type StyleFuncCallSpacing =
	| []
	| ["never"]
	| []
	| ["always"]
	| [
			"always",
			{
				allowNewlines?: boolean;
			},
	  ];
// ----- style/function-call-argument-newline -----
type StyleFunctionCallArgumentNewline =
	| []
	| ["always" | "never" | "consistent"];
// ----- style/function-call-spacing -----
type StyleFunctionCallSpacing =
	| []
	| ["never"]
	| []
	| ["always"]
	| [
			"always",
			{
				allowNewlines?: boolean;
			},
	  ];
// ----- style/function-paren-newline -----
type StyleFunctionParenNewline =
	| []
	| [
			| (
					| "always"
					| "never"
					| "consistent"
					| "multiline"
					| "multiline-arguments"
			  )
			| {
					minItems?: number;
			  },
	  ];
// ----- style/generator-star-spacing -----
type StyleGeneratorStarSpacing =
	| []
	| [
			| ("before" | "after" | "both" | "neither")
			| {
					before?: boolean;
					after?: boolean;
					named?:
						| ("before" | "after" | "both" | "neither")
						| {
								before?: boolean;
								after?: boolean;
						  };
					anonymous?:
						| ("before" | "after" | "both" | "neither")
						| {
								before?: boolean;
								after?: boolean;
						  };
					method?:
						| ("before" | "after" | "both" | "neither")
						| {
								before?: boolean;
								after?: boolean;
						  };
			  },
	  ];
// ----- style/implicit-arrow-linebreak -----
type StyleImplicitArrowLinebreak = [] | ["beside" | "below"];
// ----- style/indent -----
type StyleIndent =
	| []
	| ["tab" | number]
	| [
			"tab" | number,
			{
				SwitchCase?: number;
				VariableDeclarator?:
					| (number | ("first" | "off"))
					| {
							var?: number | ("first" | "off");
							let?: number | ("first" | "off");
							const?: number | ("first" | "off");
					  };
				outerIIFEBody?: number | "off";
				MemberExpression?: number | "off";
				FunctionDeclaration?: {
					parameters?: number | ("first" | "off");
					body?: number;
				};
				FunctionExpression?: {
					parameters?: number | ("first" | "off");
					body?: number;
				};
				StaticBlock?: {
					body?: number;
				};
				CallExpression?: {
					arguments?: number | ("first" | "off");
				};
				ArrayExpression?: number | ("first" | "off");
				ObjectExpression?: number | ("first" | "off");
				ImportDeclaration?: number | ("first" | "off");
				flatTernaryExpressions?: boolean;
				offsetTernaryExpressions?: boolean;
				ignoredNodes?: string[];
				ignoreComments?: boolean;
			},
	  ];
// ----- style/indent-binary-ops -----
type StyleIndentBinaryOps = [] | [number | "tab"];
// ----- style/jsx-closing-bracket-location -----
type StyleJsxClosingBracketLocation =
	| []
	| [
			| ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
			| {
					location?:
						| "after-props"
						| "props-aligned"
						| "tag-aligned"
						| "line-aligned";
			  }
			| {
					nonEmpty?:
						| ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
						| false;
					selfClosing?:
						| ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
						| false;
			  },
	  ];
// ----- style/jsx-curly-brace-presence -----
type StyleJsxCurlyBracePresence =
	| []
	| [
			| {
					props?: "always" | "never" | "ignore";
					children?: "always" | "never" | "ignore";
					propElementValues?: "always" | "never" | "ignore";
			  }
			| ("always" | "never" | "ignore"),
	  ];
// ----- style/jsx-curly-newline -----
type StyleJsxCurlyNewline =
	| []
	| [
			| ("consistent" | "never")
			| {
					singleline?: "consistent" | "require" | "forbid";
					multiline?: "consistent" | "require" | "forbid";
			  },
	  ];
// ----- style/jsx-curly-spacing -----
type StyleJsxCurlySpacing =
	| []
	| [
			| (_StyleJsxCurlySpacing_BasicConfig & {
					attributes?: _StyleJsxCurlySpacingBasicConfigOrBoolean;
					children?: _StyleJsxCurlySpacingBasicConfigOrBoolean;
					[k: string]: unknown | undefined;
			  })
			| ("always" | "never"),
	  ]
	| [
			(
				| (_StyleJsxCurlySpacing_BasicConfig & {
						attributes?: _StyleJsxCurlySpacingBasicConfigOrBoolean;
						children?: _StyleJsxCurlySpacingBasicConfigOrBoolean;
						[k: string]: unknown | undefined;
				  })
				| ("always" | "never")
			),
			{
				allowMultiline?: boolean;
				spacing?: {
					objectLiterals?: "always" | "never";
					[k: string]: unknown | undefined;
				};
			},
	  ];
type _StyleJsxCurlySpacingBasicConfigOrBoolean =
	| _StyleJsxCurlySpacing_BasicConfig
	| boolean;
interface _StyleJsxCurlySpacing_BasicConfig {
	when?: "always" | "never";
	allowMultiline?: boolean;
	spacing?: {
		objectLiterals?: "always" | "never";
		[k: string]: unknown | undefined;
	};
	[k: string]: unknown | undefined;
}
// ----- style/jsx-equals-spacing -----
type StyleJsxEqualsSpacing = [] | ["always" | "never"];
// ----- style/jsx-first-prop-new-line -----
type StyleJsxFirstPropNewLine =
	| []
	| ["always" | "never" | "multiline" | "multiline-multiprop" | "multiprop"];
// ----- style/jsx-function-call-newline -----
type StyleJsxFunctionCallNewline = [] | ["always" | "multiline"];
// ----- style/jsx-indent -----
type StyleJsxIndent =
	| []
	| ["tab" | number]
	| [
			"tab" | number,
			{
				checkAttributes?: boolean;
				indentLogicalExpressions?: boolean;
			},
	  ];
// ----- style/jsx-indent-props -----
type StyleJsxIndentProps =
	| []
	| [
			| ("tab" | "first")
			| number
			| {
					indentMode?: ("tab" | "first") | number;
					ignoreTernaryOperator?: boolean;
					[k: string]: unknown | undefined;
			  },
	  ];
// ----- style/jsx-max-props-per-line -----
type StyleJsxMaxPropsPerLine =
	| []
	| [
			| {
					maximum?: {
						single?: number;
						multi?: number;
						[k: string]: unknown | undefined;
					};
			  }
			| {
					maximum?: number;
					when?: "always" | "multiline";
			  },
	  ];
// ----- style/jsx-newline -----
type StyleJsxNewline =
	| []
	| [
			{
				prevent?: boolean;
				allowMultilines?: boolean;
			},
	  ];
// ----- style/jsx-one-expression-per-line -----
type StyleJsxOneExpressionPerLine =
	| []
	| [
			{
				allow?: "none" | "literal" | "single-child" | "single-line";
			},
	  ];
// ----- style/jsx-pascal-case -----
type StyleJsxPascalCase =
	| []
	| [
			{
				allowAllCaps?: boolean;
				allowLeadingUnderscore?: boolean;
				allowNamespace?: boolean;
				ignore?: string[];
			},
	  ];
// ----- style/jsx-quotes -----
type StyleJsxQuotes = [] | ["prefer-single" | "prefer-double"];
// ----- style/jsx-self-closing-comp -----
type StyleJsxSelfClosingComp =
	| []
	| [
			{
				component?: boolean;
				html?: boolean;
			},
	  ];
// ----- style/jsx-sort-props -----
type StyleJsxSortProps =
	| []
	| [
			{
				callbacksLast?: boolean;
				shorthandFirst?: boolean;
				shorthandLast?: boolean;
				multiline?: "ignore" | "first" | "last";
				ignoreCase?: boolean;
				noSortAlphabetically?: boolean;
				reservedFirst?: unknown[] | boolean;
				locale?: string;
			},
	  ];
// ----- style/jsx-tag-spacing -----
type StyleJsxTagSpacing =
	| []
	| [
			{
				closingSlash?: "always" | "never" | "allow";
				beforeSelfClosing?:
					| "always"
					| "proportional-always"
					| "never"
					| "allow";
				afterOpening?: "always" | "allow-multiline" | "never" | "allow";
				beforeClosing?: "always" | "proportional-always" | "never" | "allow";
			},
	  ];
// ----- style/jsx-wrap-multilines -----
type StyleJsxWrapMultilines =
	| []
	| [
			{
				declaration?:
					| (true | false | "ignore" | "parens" | "parens-new-line")
					| (true | false | "ignore" | "parens" | "parens-new-line");
				assignment?:
					| (true | false | "ignore" | "parens" | "parens-new-line")
					| (true | false | "ignore" | "parens" | "parens-new-line");
				return?:
					| (true | false | "ignore" | "parens" | "parens-new-line")
					| (true | false | "ignore" | "parens" | "parens-new-line");
				arrow?:
					| (true | false | "ignore" | "parens" | "parens-new-line")
					| (true | false | "ignore" | "parens" | "parens-new-line");
				condition?:
					| (true | false | "ignore" | "parens" | "parens-new-line")
					| (true | false | "ignore" | "parens" | "parens-new-line");
				logical?:
					| (true | false | "ignore" | "parens" | "parens-new-line")
					| (true | false | "ignore" | "parens" | "parens-new-line");
				prop?:
					| (true | false | "ignore" | "parens" | "parens-new-line")
					| (true | false | "ignore" | "parens" | "parens-new-line");
				propertyValue?:
					| (true | false | "ignore" | "parens" | "parens-new-line")
					| (true | false | "ignore" | "parens" | "parens-new-line");
			},
	  ];
// ----- style/key-spacing -----
type StyleKeySpacing =
	| []
	| [
			| {
					align?:
						| ("colon" | "value")
						| {
								mode?: "strict" | "minimum";
								on?: "colon" | "value";
								beforeColon?: boolean;
								afterColon?: boolean;
						  };
					mode?: "strict" | "minimum";
					beforeColon?: boolean;
					afterColon?: boolean;
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						align?:
							| ("colon" | "value")
							| {
									mode?: "strict" | "minimum";
									on?: "colon" | "value";
									beforeColon?: boolean;
									afterColon?: boolean;
							  };
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					align?: {
						mode?: "strict" | "minimum";
						on?: "colon" | "value";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  },
	  ];
// ----- style/keyword-spacing -----
type StyleKeywordSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
				overrides?: {
					abstract?: {
						before?: boolean;
						after?: boolean;
					};
					as?: {
						before?: boolean;
						after?: boolean;
					};
					async?: {
						before?: boolean;
						after?: boolean;
					};
					await?: {
						before?: boolean;
						after?: boolean;
					};
					boolean?: {
						before?: boolean;
						after?: boolean;
					};
					break?: {
						before?: boolean;
						after?: boolean;
					};
					byte?: {
						before?: boolean;
						after?: boolean;
					};
					case?: {
						before?: boolean;
						after?: boolean;
					};
					catch?: {
						before?: boolean;
						after?: boolean;
					};
					char?: {
						before?: boolean;
						after?: boolean;
					};
					class?: {
						before?: boolean;
						after?: boolean;
					};
					const?: {
						before?: boolean;
						after?: boolean;
					};
					continue?: {
						before?: boolean;
						after?: boolean;
					};
					debugger?: {
						before?: boolean;
						after?: boolean;
					};
					default?: {
						before?: boolean;
						after?: boolean;
					};
					delete?: {
						before?: boolean;
						after?: boolean;
					};
					do?: {
						before?: boolean;
						after?: boolean;
					};
					double?: {
						before?: boolean;
						after?: boolean;
					};
					else?: {
						before?: boolean;
						after?: boolean;
					};
					enum?: {
						before?: boolean;
						after?: boolean;
					};
					export?: {
						before?: boolean;
						after?: boolean;
					};
					extends?: {
						before?: boolean;
						after?: boolean;
					};
					false?: {
						before?: boolean;
						after?: boolean;
					};
					final?: {
						before?: boolean;
						after?: boolean;
					};
					finally?: {
						before?: boolean;
						after?: boolean;
					};
					float?: {
						before?: boolean;
						after?: boolean;
					};
					for?: {
						before?: boolean;
						after?: boolean;
					};
					from?: {
						before?: boolean;
						after?: boolean;
					};
					function?: {
						before?: boolean;
						after?: boolean;
					};
					get?: {
						before?: boolean;
						after?: boolean;
					};
					goto?: {
						before?: boolean;
						after?: boolean;
					};
					if?: {
						before?: boolean;
						after?: boolean;
					};
					implements?: {
						before?: boolean;
						after?: boolean;
					};
					import?: {
						before?: boolean;
						after?: boolean;
					};
					in?: {
						before?: boolean;
						after?: boolean;
					};
					instanceof?: {
						before?: boolean;
						after?: boolean;
					};
					int?: {
						before?: boolean;
						after?: boolean;
					};
					interface?: {
						before?: boolean;
						after?: boolean;
					};
					let?: {
						before?: boolean;
						after?: boolean;
					};
					long?: {
						before?: boolean;
						after?: boolean;
					};
					native?: {
						before?: boolean;
						after?: boolean;
					};
					new?: {
						before?: boolean;
						after?: boolean;
					};
					null?: {
						before?: boolean;
						after?: boolean;
					};
					of?: {
						before?: boolean;
						after?: boolean;
					};
					package?: {
						before?: boolean;
						after?: boolean;
					};
					private?: {
						before?: boolean;
						after?: boolean;
					};
					protected?: {
						before?: boolean;
						after?: boolean;
					};
					public?: {
						before?: boolean;
						after?: boolean;
					};
					return?: {
						before?: boolean;
						after?: boolean;
					};
					set?: {
						before?: boolean;
						after?: boolean;
					};
					short?: {
						before?: boolean;
						after?: boolean;
					};
					static?: {
						before?: boolean;
						after?: boolean;
					};
					super?: {
						before?: boolean;
						after?: boolean;
					};
					switch?: {
						before?: boolean;
						after?: boolean;
					};
					synchronized?: {
						before?: boolean;
						after?: boolean;
					};
					this?: {
						before?: boolean;
						after?: boolean;
					};
					throw?: {
						before?: boolean;
						after?: boolean;
					};
					throws?: {
						before?: boolean;
						after?: boolean;
					};
					transient?: {
						before?: boolean;
						after?: boolean;
					};
					true?: {
						before?: boolean;
						after?: boolean;
					};
					try?: {
						before?: boolean;
						after?: boolean;
					};
					typeof?: {
						before?: boolean;
						after?: boolean;
					};
					var?: {
						before?: boolean;
						after?: boolean;
					};
					void?: {
						before?: boolean;
						after?: boolean;
					};
					volatile?: {
						before?: boolean;
						after?: boolean;
					};
					while?: {
						before?: boolean;
						after?: boolean;
					};
					with?: {
						before?: boolean;
						after?: boolean;
					};
					yield?: {
						before?: boolean;
						after?: boolean;
					};
					type?: {
						before?: boolean;
						after?: boolean;
					};
				};
			},
	  ];
// ----- style/line-comment-position -----
type StyleLineCommentPosition =
	| []
	| [
			| ("above" | "beside")
			| {
					position?: "above" | "beside";
					ignorePattern?: string;
					applyDefaultPatterns?: boolean;
					applyDefaultIgnorePatterns?: boolean;
			  },
	  ];
// ----- style/linebreak-style -----
type StyleLinebreakStyle = [] | ["unix" | "windows"];
// ----- style/lines-around-comment -----
type StyleLinesAroundComment =
	| []
	| [
			{
				beforeBlockComment?: boolean;
				afterBlockComment?: boolean;
				beforeLineComment?: boolean;
				afterLineComment?: boolean;
				allowBlockStart?: boolean;
				allowBlockEnd?: boolean;
				allowClassStart?: boolean;
				allowClassEnd?: boolean;
				allowObjectStart?: boolean;
				allowObjectEnd?: boolean;
				allowArrayStart?: boolean;
				allowArrayEnd?: boolean;
				allowInterfaceStart?: boolean;
				allowInterfaceEnd?: boolean;
				allowTypeStart?: boolean;
				allowTypeEnd?: boolean;
				allowEnumStart?: boolean;
				allowEnumEnd?: boolean;
				allowModuleStart?: boolean;
				allowModuleEnd?: boolean;
				ignorePattern?: string;
				applyDefaultIgnorePatterns?: boolean;
				afterHashbangComment?: boolean;
			},
	  ];
// ----- style/lines-between-class-members -----
type StyleLinesBetweenClassMembers =
	| []
	| [
			| {
					enforce: [
						{
							blankLine: "always" | "never";
							prev: "method" | "field" | "*";
							next: "method" | "field" | "*";
						},
						...{
							blankLine: "always" | "never";
							prev: "method" | "field" | "*";
							next: "method" | "field" | "*";
						}[],
					];
			  }
			| ("always" | "never"),
	  ]
	| [
			(
				| {
						enforce: [
							{
								blankLine: "always" | "never";
								prev: "method" | "field" | "*";
								next: "method" | "field" | "*";
							},
							...{
								blankLine: "always" | "never";
								prev: "method" | "field" | "*";
								next: "method" | "field" | "*";
							}[],
						];
				  }
				| ("always" | "never")
			),
			{
				exceptAfterSingleLine?: boolean;
				exceptAfterOverload?: boolean;
			},
	  ];
// ----- style/max-len -----
type StyleMaxLen =
	| []
	| [
			| {
					code?: number;
					comments?: number;
					tabWidth?: number;
					ignorePattern?: string;
					ignoreComments?: boolean;
					ignoreStrings?: boolean;
					ignoreUrls?: boolean;
					ignoreTemplateLiterals?: boolean;
					ignoreRegExpLiterals?: boolean;
					ignoreTrailingComments?: boolean;
			  }
			| number,
	  ]
	| [
			(
				| {
						code?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreStrings?: boolean;
						ignoreUrls?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreTrailingComments?: boolean;
				  }
				| number
			),
			(
				| {
						code?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreStrings?: boolean;
						ignoreUrls?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreTrailingComments?: boolean;
				  }
				| number
			),
	  ]
	| [
			(
				| {
						code?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreStrings?: boolean;
						ignoreUrls?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreTrailingComments?: boolean;
				  }
				| number
			),
			(
				| {
						code?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreStrings?: boolean;
						ignoreUrls?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreTrailingComments?: boolean;
				  }
				| number
			),
			{
				code?: number;
				comments?: number;
				tabWidth?: number;
				ignorePattern?: string;
				ignoreComments?: boolean;
				ignoreStrings?: boolean;
				ignoreUrls?: boolean;
				ignoreTemplateLiterals?: boolean;
				ignoreRegExpLiterals?: boolean;
				ignoreTrailingComments?: boolean;
			},
	  ];
// ----- style/max-statements-per-line -----
type StyleMaxStatementsPerLine =
	| []
	| [
			{
				max?: number;
			},
	  ];
// ----- style/member-delimiter-style -----
type StyleMemberDelimiterStyle =
	| []
	| [
			{
				multiline?: {
					delimiter?: "none" | "semi" | "comma";
					requireLast?: boolean;
				};
				singleline?: {
					delimiter?: "semi" | "comma";
					requireLast?: boolean;
				};
				overrides?: {
					interface?: _StyleMemberDelimiterStyle_DelimiterConfig;
					typeLiteral?: _StyleMemberDelimiterStyle_DelimiterConfig;
				};
				multilineDetection?: "brackets" | "last-member";
			},
	  ];
interface _StyleMemberDelimiterStyle_DelimiterConfig {
	multiline?: {
		delimiter?: "none" | "semi" | "comma";
		requireLast?: boolean;
	};
	singleline?: {
		delimiter?: "semi" | "comma";
		requireLast?: boolean;
	};
}
// ----- style/multiline-comment-style -----
type StyleMultilineCommentStyle =
	| []
	| ["starred-block" | "bare-block"]
	| []
	| ["separate-lines"]
	| [
			"separate-lines",
			{
				checkJSDoc?: boolean;
			},
	  ];
// ----- style/multiline-ternary -----
type StyleMultilineTernary =
	| []
	| ["always" | "always-multiline" | "never"]
	| [
			"always" | "always-multiline" | "never",
			{
				ignoreJSX?: boolean;
				[k: string]: unknown | undefined;
			},
	  ];
// ----- style/new-parens -----
type StyleNewParens = [] | ["always" | "never"];
// ----- style/newline-per-chained-call -----
type StyleNewlinePerChainedCall =
	| []
	| [
			{
				ignoreChainWithDepth?: number;
			},
	  ];
// ----- style/no-confusing-arrow -----
type StyleNoConfusingArrow =
	| []
	| [
			{
				allowParens?: boolean;
				onlyOneSimpleParam?: boolean;
			},
	  ];
// ----- style/no-extra-parens -----
type StyleNoExtraParens =
	| []
	| ["functions"]
	| []
	| ["all"]
	| [
			"all",
			{
				conditionalAssign?: boolean;
				ternaryOperandBinaryExpressions?: boolean;
				nestedBinaryExpressions?: boolean;
				returnAssign?: boolean;
				ignoreJSX?: "none" | "all" | "single-line" | "multi-line";
				enforceForArrowConditionals?: boolean;
				enforceForSequenceExpressions?: boolean;
				enforceForNewInMemberExpressions?: boolean;
				enforceForFunctionPrototypeMethods?: boolean;
				allowParensAfterCommentPattern?: string;
			},
	  ];
// ----- style/no-mixed-operators -----
type StyleNoMixedOperators =
	| []
	| [
			{
				groups?: [
					(
						| "+"
						| "-"
						| "*"
						| "/"
						| "%"
						| "**"
						| "&"
						| "|"
						| "^"
						| "~"
						| "<<"
						| ">>"
						| ">>>"
						| "=="
						| "!="
						| "==="
						| "!=="
						| ">"
						| ">="
						| "<"
						| "<="
						| "&&"
						| "||"
						| "in"
						| "instanceof"
						| "?:"
						| "??"
					),
					(
						| "+"
						| "-"
						| "*"
						| "/"
						| "%"
						| "**"
						| "&"
						| "|"
						| "^"
						| "~"
						| "<<"
						| ">>"
						| ">>>"
						| "=="
						| "!="
						| "==="
						| "!=="
						| ">"
						| ">="
						| "<"
						| "<="
						| "&&"
						| "||"
						| "in"
						| "instanceof"
						| "?:"
						| "??"
					),
					...(
						| "+"
						| "-"
						| "*"
						| "/"
						| "%"
						| "**"
						| "&"
						| "|"
						| "^"
						| "~"
						| "<<"
						| ">>"
						| ">>>"
						| "=="
						| "!="
						| "==="
						| "!=="
						| ">"
						| ">="
						| "<"
						| "<="
						| "&&"
						| "||"
						| "in"
						| "instanceof"
						| "?:"
						| "??"
					)[],
				][];
				allowSamePrecedence?: boolean;
			},
	  ];
// ----- style/no-mixed-spaces-and-tabs -----
type StyleNoMixedSpacesAndTabs = [] | ["smart-tabs" | boolean];
// ----- style/no-multi-spaces -----
type StyleNoMultiSpaces =
	| []
	| [
			{
				exceptions?: {
					[k: string]: boolean;
				};
				ignoreEOLComments?: boolean;
				includeTabs?: boolean;
			},
	  ];
// ----- style/no-multiple-empty-lines -----
type StyleNoMultipleEmptyLines =
	| []
	| [
			{
				max: number;
				maxEOF?: number;
				maxBOF?: number;
			},
	  ];
// ----- style/no-tabs -----
type StyleNoTabs =
	| []
	| [
			{
				allowIndentationTabs?: boolean;
			},
	  ];
// ----- style/no-trailing-spaces -----
type StyleNoTrailingSpaces =
	| []
	| [
			{
				skipBlankLines?: boolean;
				ignoreComments?: boolean;
			},
	  ];
// ----- style/nonblock-statement-body-position -----
type StyleNonblockStatementBodyPosition =
	| []
	| ["beside" | "below" | "any"]
	| [
			"beside" | "below" | "any",
			{
				overrides?: {
					if?: "beside" | "below" | "any";
					else?: "beside" | "below" | "any";
					while?: "beside" | "below" | "any";
					do?: "beside" | "below" | "any";
					for?: "beside" | "below" | "any";
				};
			},
	  ];
// ----- style/object-curly-newline -----
type StyleObjectCurlyNewline =
	| []
	| [
			| (
					| ("always" | "never")
					| {
							multiline?: boolean;
							minProperties?: number;
							consistent?: boolean;
					  }
			  )
			| {
					ObjectExpression?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ObjectPattern?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ImportDeclaration?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ExportDeclaration?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
			  },
	  ];
// ----- style/object-curly-spacing -----
type StyleObjectCurlySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				arraysInObjects?: boolean;
				objectsInObjects?: boolean;
			},
	  ];
// ----- style/object-property-newline -----
type StyleObjectPropertyNewline =
	| []
	| [
			{
				allowAllPropertiesOnSameLine?: boolean;
				allowMultiplePropertiesPerLine?: boolean;
			},
	  ];
// ----- style/one-var-declaration-per-line -----
type StyleOneVarDeclarationPerLine = [] | ["always" | "initializations"];
// ----- style/operator-linebreak -----
type StyleOperatorLinebreak =
	| []
	| [("after" | "before" | "none") | null]
	| [
			("after" | "before" | "none") | null,
			{
				overrides?: {
					[k: string]: ("after" | "before" | "none" | "ignore") | undefined;
				};
			},
	  ];
// ----- style/padded-blocks -----
type StylePaddedBlocks =
	| []
	| [
			| ("always" | "never")
			| {
					blocks?: "always" | "never";
					switches?: "always" | "never";
					classes?: "always" | "never";
			  },
	  ]
	| [
			(
				| ("always" | "never")
				| {
						blocks?: "always" | "never";
						switches?: "always" | "never";
						classes?: "always" | "never";
				  }
			),
			{
				allowSingleLineBlocks?: boolean;
			},
	  ];
// ----- style/padding-line-between-statements -----
type _StylePaddingLineBetweenStatementsPaddingType = "any" | "never" | "always";
type _StylePaddingLineBetweenStatementsStatementType =
	| (
			| "*"
			| "block-like"
			| "exports"
			| "require"
			| "directive"
			| "expression"
			| "iife"
			| "multiline-block-like"
			| "multiline-expression"
			| "multiline-const"
			| "multiline-let"
			| "multiline-var"
			| "singleline-const"
			| "singleline-let"
			| "singleline-var"
			| "block"
			| "empty"
			| "function"
			| "break"
			| "case"
			| "class"
			| "const"
			| "continue"
			| "debugger"
			| "default"
			| "do"
			| "export"
			| "for"
			| "if"
			| "import"
			| "let"
			| "return"
			| "switch"
			| "throw"
			| "try"
			| "var"
			| "while"
			| "with"
			| "cjs-export"
			| "cjs-import"
			| "interface"
			| "type"
			| "function-overload"
	  )
	| [
			(
				| "*"
				| "block-like"
				| "exports"
				| "require"
				| "directive"
				| "expression"
				| "iife"
				| "multiline-block-like"
				| "multiline-expression"
				| "multiline-const"
				| "multiline-let"
				| "multiline-var"
				| "singleline-const"
				| "singleline-let"
				| "singleline-var"
				| "block"
				| "empty"
				| "function"
				| "break"
				| "case"
				| "class"
				| "const"
				| "continue"
				| "debugger"
				| "default"
				| "do"
				| "export"
				| "for"
				| "if"
				| "import"
				| "let"
				| "return"
				| "switch"
				| "throw"
				| "try"
				| "var"
				| "while"
				| "with"
				| "cjs-export"
				| "cjs-import"
				| "interface"
				| "type"
				| "function-overload"
			),
			...(
				| "*"
				| "block-like"
				| "exports"
				| "require"
				| "directive"
				| "expression"
				| "iife"
				| "multiline-block-like"
				| "multiline-expression"
				| "multiline-const"
				| "multiline-let"
				| "multiline-var"
				| "singleline-const"
				| "singleline-let"
				| "singleline-var"
				| "block"
				| "empty"
				| "function"
				| "break"
				| "case"
				| "class"
				| "const"
				| "continue"
				| "debugger"
				| "default"
				| "do"
				| "export"
				| "for"
				| "if"
				| "import"
				| "let"
				| "return"
				| "switch"
				| "throw"
				| "try"
				| "var"
				| "while"
				| "with"
				| "cjs-export"
				| "cjs-import"
				| "interface"
				| "type"
				| "function-overload"
			)[],
	  ];
type StylePaddingLineBetweenStatements = {
	blankLine: _StylePaddingLineBetweenStatementsPaddingType;
	prev: _StylePaddingLineBetweenStatementsStatementType;
	next: _StylePaddingLineBetweenStatementsStatementType;
}[];
// ----- style/quote-props -----
type StyleQuoteProps =
	| []
	| ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
	| []
	| ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
	| [
			"always" | "as-needed" | "consistent" | "consistent-as-needed",
			{
				keywords?: boolean;
				unnecessary?: boolean;
				numbers?: boolean;
			},
	  ];
// ----- style/quotes -----
type StyleQuotes =
	| []
	| ["single" | "double" | "backtick"]
	| [
			"single" | "double" | "backtick",
			(
				| "avoid-escape"
				| {
						avoidEscape?: boolean;
						allowTemplateLiterals?: boolean;
				  }
			),
	  ];
// ----- style/rest-spread-spacing -----
type StyleRestSpreadSpacing = [] | ["always" | "never"];
// ----- style/semi -----
type StyleSemi =
	| []
	| ["never"]
	| [
			"never",
			{
				beforeStatementContinuationChars?: "always" | "any" | "never";
			},
	  ]
	| []
	| ["always"]
	| [
			"always",
			{
				omitLastInOneLineBlock?: boolean;
				omitLastInOneLineClassBody?: boolean;
			},
	  ];
// ----- style/semi-spacing -----
type StyleSemiSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- style/semi-style -----
type StyleSemiStyle = [] | ["last" | "first"];
// ----- style/space-before-blocks -----
type StyleSpaceBeforeBlocks =
	| []
	| [
			| ("always" | "never")
			| {
					keywords?: "always" | "never" | "off";
					functions?: "always" | "never" | "off";
					classes?: "always" | "never" | "off";
			  },
	  ];
// ----- style/space-before-function-paren -----
type StyleSpaceBeforeFunctionParen =
	| []
	| [
			| ("always" | "never")
			| {
					anonymous?: "always" | "never" | "ignore";
					named?: "always" | "never" | "ignore";
					asyncArrow?: "always" | "never" | "ignore";
			  },
	  ];
// ----- style/space-in-parens -----
type StyleSpaceInParens =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptions?: ("{}" | "[]" | "()" | "empty")[];
			},
	  ];
// ----- style/space-infix-ops -----
type StyleSpaceInfixOps =
	| []
	| [
			{
				int32Hint?: boolean;
			},
	  ];
// ----- style/space-unary-ops -----
type StyleSpaceUnaryOps =
	| []
	| [
			{
				words?: boolean;
				nonwords?: boolean;
				overrides?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- style/spaced-comment -----
type StyleSpacedComment =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptions?: string[];
				markers?: string[];
				line?: {
					exceptions?: string[];
					markers?: string[];
				};
				block?: {
					exceptions?: string[];
					markers?: string[];
					balanced?: boolean;
				};
			},
	  ];
// ----- style/switch-colon-spacing -----
type StyleSwitchColonSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- style/template-curly-spacing -----
type StyleTemplateCurlySpacing = [] | ["always" | "never"];
// ----- style/template-tag-spacing -----
type StyleTemplateTagSpacing = [] | ["always" | "never"];
// ----- style/type-annotation-spacing -----
type StyleTypeAnnotationSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
				overrides?: {
					colon?: _StyleTypeAnnotationSpacing_SpacingConfig;
					arrow?: _StyleTypeAnnotationSpacing_SpacingConfig;
					variable?: _StyleTypeAnnotationSpacing_SpacingConfig;
					parameter?: _StyleTypeAnnotationSpacing_SpacingConfig;
					property?: _StyleTypeAnnotationSpacing_SpacingConfig;
					returnType?: _StyleTypeAnnotationSpacing_SpacingConfig;
				};
			},
	  ];
interface _StyleTypeAnnotationSpacing_SpacingConfig {
	before?: boolean;
	after?: boolean;
}
// ----- style/wrap-iife -----
type StyleWrapIife =
	| []
	| ["outside" | "inside" | "any"]
	| [
			"outside" | "inside" | "any",
			{
				functionPrototypeMethods?: boolean;
			},
	  ];
// ----- style/yield-star-spacing -----
type StyleYieldStarSpacing =
	| []
	| [
			| ("before" | "after" | "both" | "neither")
			| {
					before?: boolean;
					after?: boolean;
			  },
	  ];
// ----- switch-colon-spacing -----
type SwitchColonSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- template-curly-spacing -----
type TemplateCurlySpacing = [] | ["always" | "never"];
// ----- template-tag-spacing -----
type TemplateTagSpacing = [] | ["always" | "never"];
// ----- toml/array-bracket-newline -----
type TomlArrayBracketNewline =
	| []
	| [
			| ("always" | "never" | "consistent")
			| {
					multiline?: boolean;
					minItems?: number | null;
			  },
	  ];
// ----- toml/array-bracket-spacing -----
type TomlArrayBracketSpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				singleValue?: boolean;
				objectsInArrays?: boolean;
				arraysInArrays?: boolean;
			},
	  ];
// ----- toml/array-element-newline -----
type TomlArrayElementNewline =
	| []
	| [
			| _TomlArrayElementNewlineBasicConfig
			| {
					ArrayExpression?: _TomlArrayElementNewlineBasicConfig;
					ArrayPattern?: _TomlArrayElementNewlineBasicConfig;
					TOMLArray?: _TomlArrayElementNewlineBasicConfig;
			  },
	  ];
type _TomlArrayElementNewlineBasicConfig =
	| ("always" | "never" | "consistent")
	| {
			multiline?: boolean;
			minItems?: number | null;
	  };
// ----- toml/comma-style -----
type TomlCommaStyle =
	| []
	| ["first" | "last"]
	| [
			"first" | "last",
			{
				exceptions?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- toml/indent -----
type TomlIndent =
	| []
	| ["tab" | number]
	| [
			"tab" | number,
			{
				subTables?: number;
				keyValuePairs?: number;
			},
	  ];
// ----- toml/inline-table-curly-spacing -----
type TomlInlineTableCurlySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				arraysInObjects?: boolean;
				objectsInObjects?: boolean;
			},
	  ];
// ----- toml/key-spacing -----
type TomlKeySpacing =
	| []
	| [
			| {
					align?:
						| ("equal" | "value")
						| {
								on?: "equal" | "value";
								mode?: "strict" | "minimum";
								beforeEqual?: boolean;
								afterEqual?: boolean;
						  };
					mode?: "strict" | "minimum";
					beforeEqual?: boolean;
					afterEqual?: boolean;
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeEqual?: boolean;
						afterEqual?: boolean;
					};
					multiLine?: {
						align?:
							| ("equal" | "value")
							| {
									on?: "equal" | "value";
									mode?: "strict" | "minimum";
									beforeEqual?: boolean;
									afterEqual?: boolean;
							  };
						mode?: "strict" | "minimum";
						beforeEqual?: boolean;
						afterEqual?: boolean;
					};
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeEqual?: boolean;
						afterEqual?: boolean;
					};
					multiLine?: {
						mode?: "strict" | "minimum";
						beforeEqual?: boolean;
						afterEqual?: boolean;
					};
					align?: {
						on?: "equal" | "value";
						mode?: "strict" | "minimum";
						beforeEqual?: boolean;
						afterEqual?: boolean;
					};
			  },
	  ];
// ----- toml/no-mixed-type-in-array -----
type TomlNoMixedTypeInArray =
	| []
	| [
			{
				typeMap?: {
					string?: string;
					boolean?: string;
					integer?: string;
					float?: string;
					offsetDateTime?: string;
					localDateTime?: string;
					localDate?: string;
					localTime?: string;
					array?: string;
					inlineTable?: string;
				};
			},
	  ];
// ----- toml/no-non-decimal-integer -----
type TomlNoNonDecimalInteger =
	| []
	| [
			{
				allowHexadecimal?: boolean;
				allowOctal?: boolean;
				allowBinary?: boolean;
			},
	  ];
// ----- toml/precision-of-fractional-seconds -----
type TomlPrecisionOfFractionalSeconds =
	| []
	| [
			{
				max?: number;
			},
	  ];
// ----- toml/precision-of-integer -----
type TomlPrecisionOfInteger =
	| []
	| [
			{
				maxBit?: number;
			},
	  ];
// ----- toml/quoted-keys -----
type TomlQuotedKeys =
	| []
	| [
			{
				prefer?: "as-needed" | "always";
				numbers?: boolean;
			},
	  ];
// ----- toml/spaced-comment -----
type TomlSpacedComment =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptions?: string[];
				markers?: string[];
			},
	  ];
// ----- toml/table-bracket-spacing -----
type TomlTableBracketSpacing = [] | ["always" | "never"];
// ----- ts/array-type -----
type TsArrayType =
	| []
	| [
			{
				default?: "array" | "generic" | "array-simple";

				readonly?: "array" | "generic" | "array-simple";
			},
	  ];
// ----- ts/ban-ts-comment -----
type TsBanTsComment =
	| []
	| [
			{
				"ts-expect-error"?:
					| boolean
					| "allow-with-description"
					| {
							descriptionFormat?: string;
					  };
				"ts-ignore"?:
					| boolean
					| "allow-with-description"
					| {
							descriptionFormat?: string;
					  };
				"ts-nocheck"?:
					| boolean
					| "allow-with-description"
					| {
							descriptionFormat?: string;
					  };
				"ts-check"?:
					| boolean
					| "allow-with-description"
					| {
							descriptionFormat?: string;
					  };
				minimumDescriptionLength?: number;
			},
	  ];
// ----- ts/ban-types -----
type TsBanTypes =
	| []
	| [
			{
				types?: {
					[k: string]:
						| (
								| null
								| false
								| true
								| string
								| {
										message?: string;

										fixWith?: string;

										suggest?: string[];
								  }
						  )
						| undefined;
				};
				extendDefaults?: boolean;
			},
	  ];
// ----- ts/block-spacing -----
type TsBlockSpacing = [] | ["always" | "never"];
// ----- ts/brace-style -----
type TsBraceStyle =
	| []
	| ["1tbs" | "stroustrup" | "allman"]
	| [
			"1tbs" | "stroustrup" | "allman",
			{
				allowSingleLine?: boolean;
			},
	  ];
// ----- ts/class-literal-property-style -----
type TsClassLiteralPropertyStyle = [] | ["fields" | "getters"];
// ----- ts/class-methods-use-this -----
type TsClassMethodsUseThis =
	| []
	| [
			{
				exceptMethods?: string[];

				enforceForClassFields?: boolean;

				ignoreOverrideMethods?: boolean;

				ignoreClassesThatImplementAnInterface?: boolean | "public-fields";
			},
	  ];
// ----- ts/comma-dangle -----
type TsCommaDangle =
	| []
	| [
			| _TsCommaDangleValue
			| {
					arrays?: _TsCommaDangleValueWithIgnore;
					objects?: _TsCommaDangleValueWithIgnore;
					imports?: _TsCommaDangleValueWithIgnore;
					exports?: _TsCommaDangleValueWithIgnore;
					functions?: _TsCommaDangleValueWithIgnore;
					enums?: _TsCommaDangleValueWithIgnore;
					generics?: _TsCommaDangleValueWithIgnore;
					tuples?: _TsCommaDangleValueWithIgnore;
			  },
	  ];
type _TsCommaDangleValue =
	| "always-multiline"
	| "always"
	| "never"
	| "only-multiline";
type _TsCommaDangleValueWithIgnore =
	| "always-multiline"
	| "always"
	| "never"
	| "only-multiline"
	| "ignore";
// ----- ts/comma-spacing -----
type TsCommaSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- ts/consistent-generic-constructors -----
type TsConsistentGenericConstructors = [] | ["type-annotation" | "constructor"];
// ----- ts/consistent-indexed-object-style -----
type TsConsistentIndexedObjectStyle = [] | ["record" | "index-signature"];
// ----- ts/consistent-return -----
type TsConsistentReturn =
	| []
	| [
			{
				treatUndefinedAsUnspecified?: boolean;
			},
	  ];
// ----- ts/consistent-type-assertions -----
type TsConsistentTypeAssertions =
	| []
	| [
			| {
					assertionStyle: "never";
			  }
			| {
					assertionStyle: "as" | "angle-bracket";
					objectLiteralTypeAssertions?:
						| "allow"
						| "allow-as-parameter"
						| "never";
			  },
	  ];
// ----- ts/consistent-type-definitions -----
type TsConsistentTypeDefinitions = [] | ["interface" | "type"];
// ----- ts/consistent-type-exports -----
type TsConsistentTypeExports =
	| []
	| [
			{
				fixMixedExportsWithInlineTypeSpecifier?: boolean;
			},
	  ];
// ----- ts/consistent-type-imports -----
type TsConsistentTypeImports =
	| []
	| [
			{
				disallowTypeAnnotations?: boolean;
				fixStyle?: "separate-type-imports" | "inline-type-imports";
				prefer?: "type-imports" | "no-type-imports";
			},
	  ];
// ----- ts/dot-notation -----
type TsDotNotation =
	| []
	| [
			{
				allowKeywords?: boolean;
				allowPattern?: string;
				allowPrivateClassPropertyAccess?: boolean;
				allowProtectedClassPropertyAccess?: boolean;
				allowIndexSignaturePropertyAccess?: boolean;
			},
	  ];
// ----- ts/explicit-function-return-type -----
type TsExplicitFunctionReturnType =
	| []
	| [
			{
				allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;

				allowExpressions?: boolean;

				allowHigherOrderFunctions?: boolean;

				allowTypedFunctionExpressions?: boolean;

				allowDirectConstAssertionInArrowFunctions?: boolean;

				allowFunctionsWithoutTypeParameters?: boolean;

				allowedNames?: string[];

				allowIIFEs?: boolean;
			},
	  ];
// ----- ts/explicit-member-accessibility -----
type TsExplicitMemberAccessibility =
	| []
	| [
			{
				accessibility?: "explicit" | "no-public" | "off";
				overrides?: {
					accessors?: "explicit" | "no-public" | "off";
					constructors?: "explicit" | "no-public" | "off";
					methods?: "explicit" | "no-public" | "off";
					properties?: "explicit" | "no-public" | "off";
					parameterProperties?: "explicit" | "no-public" | "off";
				};
				ignoredMethodNames?: string[];
			},
	  ];
// ----- ts/explicit-module-boundary-types -----
type TsExplicitModuleBoundaryTypes =
	| []
	| [
			{
				allowArgumentsExplicitlyTypedAsAny?: boolean;

				allowDirectConstAssertionInArrowFunctions?: boolean;

				allowedNames?: string[];

				allowHigherOrderFunctions?: boolean;

				allowTypedFunctionExpressions?: boolean;
			},
	  ];
// ----- ts/func-call-spacing -----
type TsFuncCallSpacing =
	| []
	| ["never"]
	| []
	| ["always"]
	| [
			"always",
			{
				allowNewlines?: boolean;
			},
	  ];
// ----- ts/indent -----
type TsIndent =
	| []
	| ["tab" | number]
	| [
			"tab" | number,
			{
				SwitchCase?: number;
				VariableDeclarator?:
					| (number | ("first" | "off"))
					| {
							var?: number | ("first" | "off");
							let?: number | ("first" | "off");
							const?: number | ("first" | "off");
					  };
				outerIIFEBody?: number | "off";
				MemberExpression?: number | "off";
				FunctionDeclaration?: {
					parameters?: number | ("first" | "off");
					body?: number;
				};
				FunctionExpression?: {
					parameters?: number | ("first" | "off");
					body?: number;
				};
				StaticBlock?: {
					body?: number;
				};
				CallExpression?: {
					arguments?: number | ("first" | "off");
				};
				ArrayExpression?: number | ("first" | "off");
				ObjectExpression?: number | ("first" | "off");
				ImportDeclaration?: number | ("first" | "off");
				flatTernaryExpressions?: boolean;
				offsetTernaryExpressions?: boolean;
				ignoredNodes?: string[];
				ignoreComments?: boolean;
			},
	  ];
// ----- ts/init-declarations -----
type TsInitDeclarations =
	| []
	| ["always"]
	| []
	| ["never"]
	| [
			"never",
			{
				ignoreForLoopInit?: boolean;
			},
	  ];
// ----- ts/key-spacing -----
type TsKeySpacing =
	| []
	| [
			| {
					align?:
						| ("colon" | "value")
						| {
								mode?: "strict" | "minimum";
								on?: "colon" | "value";
								beforeColon?: boolean;
								afterColon?: boolean;
						  };
					mode?: "strict" | "minimum";
					beforeColon?: boolean;
					afterColon?: boolean;
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						align?:
							| ("colon" | "value")
							| {
									mode?: "strict" | "minimum";
									on?: "colon" | "value";
									beforeColon?: boolean;
									afterColon?: boolean;
							  };
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					align?: {
						mode?: "strict" | "minimum";
						on?: "colon" | "value";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  },
	  ];
// ----- ts/keyword-spacing -----
type TsKeywordSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
				overrides?: {
					abstract?: {
						before?: boolean;
						after?: boolean;
					};
					as?: {
						before?: boolean;
						after?: boolean;
					};
					async?: {
						before?: boolean;
						after?: boolean;
					};
					await?: {
						before?: boolean;
						after?: boolean;
					};
					boolean?: {
						before?: boolean;
						after?: boolean;
					};
					break?: {
						before?: boolean;
						after?: boolean;
					};
					byte?: {
						before?: boolean;
						after?: boolean;
					};
					case?: {
						before?: boolean;
						after?: boolean;
					};
					catch?: {
						before?: boolean;
						after?: boolean;
					};
					char?: {
						before?: boolean;
						after?: boolean;
					};
					class?: {
						before?: boolean;
						after?: boolean;
					};
					const?: {
						before?: boolean;
						after?: boolean;
					};
					continue?: {
						before?: boolean;
						after?: boolean;
					};
					debugger?: {
						before?: boolean;
						after?: boolean;
					};
					default?: {
						before?: boolean;
						after?: boolean;
					};
					delete?: {
						before?: boolean;
						after?: boolean;
					};
					do?: {
						before?: boolean;
						after?: boolean;
					};
					double?: {
						before?: boolean;
						after?: boolean;
					};
					else?: {
						before?: boolean;
						after?: boolean;
					};
					enum?: {
						before?: boolean;
						after?: boolean;
					};
					export?: {
						before?: boolean;
						after?: boolean;
					};
					extends?: {
						before?: boolean;
						after?: boolean;
					};
					false?: {
						before?: boolean;
						after?: boolean;
					};
					final?: {
						before?: boolean;
						after?: boolean;
					};
					finally?: {
						before?: boolean;
						after?: boolean;
					};
					float?: {
						before?: boolean;
						after?: boolean;
					};
					for?: {
						before?: boolean;
						after?: boolean;
					};
					from?: {
						before?: boolean;
						after?: boolean;
					};
					function?: {
						before?: boolean;
						after?: boolean;
					};
					get?: {
						before?: boolean;
						after?: boolean;
					};
					goto?: {
						before?: boolean;
						after?: boolean;
					};
					if?: {
						before?: boolean;
						after?: boolean;
					};
					implements?: {
						before?: boolean;
						after?: boolean;
					};
					import?: {
						before?: boolean;
						after?: boolean;
					};
					in?: {
						before?: boolean;
						after?: boolean;
					};
					instanceof?: {
						before?: boolean;
						after?: boolean;
					};
					int?: {
						before?: boolean;
						after?: boolean;
					};
					interface?: {
						before?: boolean;
						after?: boolean;
					};
					let?: {
						before?: boolean;
						after?: boolean;
					};
					long?: {
						before?: boolean;
						after?: boolean;
					};
					native?: {
						before?: boolean;
						after?: boolean;
					};
					new?: {
						before?: boolean;
						after?: boolean;
					};
					null?: {
						before?: boolean;
						after?: boolean;
					};
					of?: {
						before?: boolean;
						after?: boolean;
					};
					package?: {
						before?: boolean;
						after?: boolean;
					};
					private?: {
						before?: boolean;
						after?: boolean;
					};
					protected?: {
						before?: boolean;
						after?: boolean;
					};
					public?: {
						before?: boolean;
						after?: boolean;
					};
					return?: {
						before?: boolean;
						after?: boolean;
					};
					set?: {
						before?: boolean;
						after?: boolean;
					};
					short?: {
						before?: boolean;
						after?: boolean;
					};
					static?: {
						before?: boolean;
						after?: boolean;
					};
					super?: {
						before?: boolean;
						after?: boolean;
					};
					switch?: {
						before?: boolean;
						after?: boolean;
					};
					synchronized?: {
						before?: boolean;
						after?: boolean;
					};
					this?: {
						before?: boolean;
						after?: boolean;
					};
					throw?: {
						before?: boolean;
						after?: boolean;
					};
					throws?: {
						before?: boolean;
						after?: boolean;
					};
					transient?: {
						before?: boolean;
						after?: boolean;
					};
					true?: {
						before?: boolean;
						after?: boolean;
					};
					try?: {
						before?: boolean;
						after?: boolean;
					};
					typeof?: {
						before?: boolean;
						after?: boolean;
					};
					var?: {
						before?: boolean;
						after?: boolean;
					};
					void?: {
						before?: boolean;
						after?: boolean;
					};
					volatile?: {
						before?: boolean;
						after?: boolean;
					};
					while?: {
						before?: boolean;
						after?: boolean;
					};
					with?: {
						before?: boolean;
						after?: boolean;
					};
					yield?: {
						before?: boolean;
						after?: boolean;
					};
					type?: {
						before?: boolean;
						after?: boolean;
					};
				};
			},
	  ];
// ----- ts/lines-around-comment -----
type TsLinesAroundComment =
	| []
	| [
			{
				beforeBlockComment?: boolean;
				afterBlockComment?: boolean;
				beforeLineComment?: boolean;
				afterLineComment?: boolean;
				allowBlockStart?: boolean;
				allowBlockEnd?: boolean;
				allowClassStart?: boolean;
				allowClassEnd?: boolean;
				allowObjectStart?: boolean;
				allowObjectEnd?: boolean;
				allowArrayStart?: boolean;
				allowArrayEnd?: boolean;
				allowInterfaceStart?: boolean;
				allowInterfaceEnd?: boolean;
				allowTypeStart?: boolean;
				allowTypeEnd?: boolean;
				allowEnumStart?: boolean;
				allowEnumEnd?: boolean;
				allowModuleStart?: boolean;
				allowModuleEnd?: boolean;
				ignorePattern?: string;
				applyDefaultIgnorePatterns?: boolean;
			},
	  ];
// ----- ts/lines-between-class-members -----
type TsLinesBetweenClassMembers =
	| []
	| [
			| {
					enforce: [
						{
							blankLine: "always" | "never";
							prev: "method" | "field" | "*";
							next: "method" | "field" | "*";
						},
						...{
							blankLine: "always" | "never";
							prev: "method" | "field" | "*";
							next: "method" | "field" | "*";
						}[],
					];
			  }
			| ("always" | "never"),
	  ]
	| [
			(
				| {
						enforce: [
							{
								blankLine: "always" | "never";
								prev: "method" | "field" | "*";
								next: "method" | "field" | "*";
							},
							...{
								blankLine: "always" | "never";
								prev: "method" | "field" | "*";
								next: "method" | "field" | "*";
							}[],
						];
				  }
				| ("always" | "never")
			),
			{
				exceptAfterSingleLine?: boolean;
				exceptAfterOverload?: boolean;
			},
	  ];
// ----- ts/max-params -----
type TsMaxParams =
	| []
	| [
			{
				maximum?: number;
				max?: number;
				countVoidThis?: boolean;
			},
	  ];
// ----- ts/member-delimiter-style -----
type TsMemberDelimiterStyle =
	| []
	| [
			{
				multiline?: {
					delimiter?: "none" | "semi" | "comma";
					requireLast?: boolean;
				};
				singleline?: {
					delimiter?: "semi" | "comma";
					requireLast?: boolean;
				};
				overrides?: {
					interface?: _TsMemberDelimiterStyle_DelimiterConfig;
					typeLiteral?: _TsMemberDelimiterStyle_DelimiterConfig;
				};
				multilineDetection?: "brackets" | "last-member";
			},
	  ];
interface _TsMemberDelimiterStyle_DelimiterConfig {
	multiline?: {
		delimiter?: "none" | "semi" | "comma";
		requireLast?: boolean;
	};
	singleline?: {
		delimiter?: "semi" | "comma";
		requireLast?: boolean;
	};
}
// ----- ts/member-ordering -----
type TsMemberOrdering =
	| []
	| [
			{
				default?:
					| "never"
					| (
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "public-readonly-field"
									| "public-decorated-readonly-field"
									| "decorated-readonly-field"
									| "static-readonly-field"
									| "public-static-readonly-field"
									| "instance-readonly-field"
									| "public-instance-readonly-field"
									| "abstract-readonly-field"
									| "public-abstract-readonly-field"
									| "protected-readonly-field"
									| "protected-decorated-readonly-field"
									| "protected-static-readonly-field"
									| "protected-instance-readonly-field"
									| "protected-abstract-readonly-field"
									| "private-readonly-field"
									| "private-decorated-readonly-field"
									| "private-static-readonly-field"
									| "private-instance-readonly-field"
									| "#private-readonly-field"
									| "#private-static-readonly-field"
									| "#private-instance-readonly-field"
									| "field"
									| "public-field"
									| "public-decorated-field"
									| "decorated-field"
									| "static-field"
									| "public-static-field"
									| "instance-field"
									| "public-instance-field"
									| "abstract-field"
									| "public-abstract-field"
									| "protected-field"
									| "protected-decorated-field"
									| "protected-static-field"
									| "protected-instance-field"
									| "protected-abstract-field"
									| "private-field"
									| "private-decorated-field"
									| "private-static-field"
									| "private-instance-field"
									| "#private-field"
									| "#private-static-field"
									| "#private-instance-field"
									| "method"
									| "public-method"
									| "public-decorated-method"
									| "decorated-method"
									| "static-method"
									| "public-static-method"
									| "instance-method"
									| "public-instance-method"
									| "abstract-method"
									| "public-abstract-method"
									| "protected-method"
									| "protected-decorated-method"
									| "protected-static-method"
									| "protected-instance-method"
									| "protected-abstract-method"
									| "private-method"
									| "private-decorated-method"
									| "private-static-method"
									| "private-instance-method"
									| "#private-method"
									| "#private-static-method"
									| "#private-instance-method"
									| "call-signature"
									| "constructor"
									| "public-constructor"
									| "protected-constructor"
									| "private-constructor"
									| "accessor"
									| "public-accessor"
									| "public-decorated-accessor"
									| "decorated-accessor"
									| "static-accessor"
									| "public-static-accessor"
									| "instance-accessor"
									| "public-instance-accessor"
									| "abstract-accessor"
									| "public-abstract-accessor"
									| "protected-accessor"
									| "protected-decorated-accessor"
									| "protected-static-accessor"
									| "protected-instance-accessor"
									| "protected-abstract-accessor"
									| "private-accessor"
									| "private-decorated-accessor"
									| "private-static-accessor"
									| "private-instance-accessor"
									| "#private-accessor"
									| "#private-static-accessor"
									| "#private-instance-accessor"
									| "get"
									| "public-get"
									| "public-decorated-get"
									| "decorated-get"
									| "static-get"
									| "public-static-get"
									| "instance-get"
									| "public-instance-get"
									| "abstract-get"
									| "public-abstract-get"
									| "protected-get"
									| "protected-decorated-get"
									| "protected-static-get"
									| "protected-instance-get"
									| "protected-abstract-get"
									| "private-get"
									| "private-decorated-get"
									| "private-static-get"
									| "private-instance-get"
									| "#private-get"
									| "#private-static-get"
									| "#private-instance-get"
									| "set"
									| "public-set"
									| "public-decorated-set"
									| "decorated-set"
									| "static-set"
									| "public-static-set"
									| "instance-set"
									| "public-instance-set"
									| "abstract-set"
									| "public-abstract-set"
									| "protected-set"
									| "protected-decorated-set"
									| "protected-static-set"
									| "protected-instance-set"
									| "protected-abstract-set"
									| "private-set"
									| "private-decorated-set"
									| "private-static-set"
									| "private-instance-set"
									| "#private-set"
									| "#private-static-set"
									| "#private-instance-set"
									| "static-initialization"
									| "static-static-initialization"
									| "public-static-static-initialization"
									| "instance-static-initialization"
									| "public-instance-static-initialization"
									| "abstract-static-initialization"
									| "public-abstract-static-initialization"
									| "protected-static-static-initialization"
									| "protected-instance-static-initialization"
									| "protected-abstract-static-initialization"
									| "private-static-static-initialization"
									| "private-instance-static-initialization"
									| "#private-static-static-initialization"
									| "#private-instance-static-initialization"
							  )
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "public-readonly-field"
									| "public-decorated-readonly-field"
									| "decorated-readonly-field"
									| "static-readonly-field"
									| "public-static-readonly-field"
									| "instance-readonly-field"
									| "public-instance-readonly-field"
									| "abstract-readonly-field"
									| "public-abstract-readonly-field"
									| "protected-readonly-field"
									| "protected-decorated-readonly-field"
									| "protected-static-readonly-field"
									| "protected-instance-readonly-field"
									| "protected-abstract-readonly-field"
									| "private-readonly-field"
									| "private-decorated-readonly-field"
									| "private-static-readonly-field"
									| "private-instance-readonly-field"
									| "#private-readonly-field"
									| "#private-static-readonly-field"
									| "#private-instance-readonly-field"
									| "field"
									| "public-field"
									| "public-decorated-field"
									| "decorated-field"
									| "static-field"
									| "public-static-field"
									| "instance-field"
									| "public-instance-field"
									| "abstract-field"
									| "public-abstract-field"
									| "protected-field"
									| "protected-decorated-field"
									| "protected-static-field"
									| "protected-instance-field"
									| "protected-abstract-field"
									| "private-field"
									| "private-decorated-field"
									| "private-static-field"
									| "private-instance-field"
									| "#private-field"
									| "#private-static-field"
									| "#private-instance-field"
									| "method"
									| "public-method"
									| "public-decorated-method"
									| "decorated-method"
									| "static-method"
									| "public-static-method"
									| "instance-method"
									| "public-instance-method"
									| "abstract-method"
									| "public-abstract-method"
									| "protected-method"
									| "protected-decorated-method"
									| "protected-static-method"
									| "protected-instance-method"
									| "protected-abstract-method"
									| "private-method"
									| "private-decorated-method"
									| "private-static-method"
									| "private-instance-method"
									| "#private-method"
									| "#private-static-method"
									| "#private-instance-method"
									| "call-signature"
									| "constructor"
									| "public-constructor"
									| "protected-constructor"
									| "private-constructor"
									| "accessor"
									| "public-accessor"
									| "public-decorated-accessor"
									| "decorated-accessor"
									| "static-accessor"
									| "public-static-accessor"
									| "instance-accessor"
									| "public-instance-accessor"
									| "abstract-accessor"
									| "public-abstract-accessor"
									| "protected-accessor"
									| "protected-decorated-accessor"
									| "protected-static-accessor"
									| "protected-instance-accessor"
									| "protected-abstract-accessor"
									| "private-accessor"
									| "private-decorated-accessor"
									| "private-static-accessor"
									| "private-instance-accessor"
									| "#private-accessor"
									| "#private-static-accessor"
									| "#private-instance-accessor"
									| "get"
									| "public-get"
									| "public-decorated-get"
									| "decorated-get"
									| "static-get"
									| "public-static-get"
									| "instance-get"
									| "public-instance-get"
									| "abstract-get"
									| "public-abstract-get"
									| "protected-get"
									| "protected-decorated-get"
									| "protected-static-get"
									| "protected-instance-get"
									| "protected-abstract-get"
									| "private-get"
									| "private-decorated-get"
									| "private-static-get"
									| "private-instance-get"
									| "#private-get"
									| "#private-static-get"
									| "#private-instance-get"
									| "set"
									| "public-set"
									| "public-decorated-set"
									| "decorated-set"
									| "static-set"
									| "public-static-set"
									| "instance-set"
									| "public-instance-set"
									| "abstract-set"
									| "public-abstract-set"
									| "protected-set"
									| "protected-decorated-set"
									| "protected-static-set"
									| "protected-instance-set"
									| "protected-abstract-set"
									| "private-set"
									| "private-decorated-set"
									| "private-static-set"
									| "private-instance-set"
									| "#private-set"
									| "#private-static-set"
									| "#private-instance-set"
									| "static-initialization"
									| "static-static-initialization"
									| "public-static-static-initialization"
									| "instance-static-initialization"
									| "public-instance-static-initialization"
									| "abstract-static-initialization"
									| "public-abstract-static-initialization"
									| "protected-static-static-initialization"
									| "protected-instance-static-initialization"
									| "protected-abstract-static-initialization"
									| "private-static-static-initialization"
									| "private-instance-static-initialization"
									| "#private-static-static-initialization"
									| "#private-instance-static-initialization"
							  )[]
					  )[]
					| {
							memberTypes?:
								| (
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "public-readonly-field"
												| "public-decorated-readonly-field"
												| "decorated-readonly-field"
												| "static-readonly-field"
												| "public-static-readonly-field"
												| "instance-readonly-field"
												| "public-instance-readonly-field"
												| "abstract-readonly-field"
												| "public-abstract-readonly-field"
												| "protected-readonly-field"
												| "protected-decorated-readonly-field"
												| "protected-static-readonly-field"
												| "protected-instance-readonly-field"
												| "protected-abstract-readonly-field"
												| "private-readonly-field"
												| "private-decorated-readonly-field"
												| "private-static-readonly-field"
												| "private-instance-readonly-field"
												| "#private-readonly-field"
												| "#private-static-readonly-field"
												| "#private-instance-readonly-field"
												| "field"
												| "public-field"
												| "public-decorated-field"
												| "decorated-field"
												| "static-field"
												| "public-static-field"
												| "instance-field"
												| "public-instance-field"
												| "abstract-field"
												| "public-abstract-field"
												| "protected-field"
												| "protected-decorated-field"
												| "protected-static-field"
												| "protected-instance-field"
												| "protected-abstract-field"
												| "private-field"
												| "private-decorated-field"
												| "private-static-field"
												| "private-instance-field"
												| "#private-field"
												| "#private-static-field"
												| "#private-instance-field"
												| "method"
												| "public-method"
												| "public-decorated-method"
												| "decorated-method"
												| "static-method"
												| "public-static-method"
												| "instance-method"
												| "public-instance-method"
												| "abstract-method"
												| "public-abstract-method"
												| "protected-method"
												| "protected-decorated-method"
												| "protected-static-method"
												| "protected-instance-method"
												| "protected-abstract-method"
												| "private-method"
												| "private-decorated-method"
												| "private-static-method"
												| "private-instance-method"
												| "#private-method"
												| "#private-static-method"
												| "#private-instance-method"
												| "call-signature"
												| "constructor"
												| "public-constructor"
												| "protected-constructor"
												| "private-constructor"
												| "accessor"
												| "public-accessor"
												| "public-decorated-accessor"
												| "decorated-accessor"
												| "static-accessor"
												| "public-static-accessor"
												| "instance-accessor"
												| "public-instance-accessor"
												| "abstract-accessor"
												| "public-abstract-accessor"
												| "protected-accessor"
												| "protected-decorated-accessor"
												| "protected-static-accessor"
												| "protected-instance-accessor"
												| "protected-abstract-accessor"
												| "private-accessor"
												| "private-decorated-accessor"
												| "private-static-accessor"
												| "private-instance-accessor"
												| "#private-accessor"
												| "#private-static-accessor"
												| "#private-instance-accessor"
												| "get"
												| "public-get"
												| "public-decorated-get"
												| "decorated-get"
												| "static-get"
												| "public-static-get"
												| "instance-get"
												| "public-instance-get"
												| "abstract-get"
												| "public-abstract-get"
												| "protected-get"
												| "protected-decorated-get"
												| "protected-static-get"
												| "protected-instance-get"
												| "protected-abstract-get"
												| "private-get"
												| "private-decorated-get"
												| "private-static-get"
												| "private-instance-get"
												| "#private-get"
												| "#private-static-get"
												| "#private-instance-get"
												| "set"
												| "public-set"
												| "public-decorated-set"
												| "decorated-set"
												| "static-set"
												| "public-static-set"
												| "instance-set"
												| "public-instance-set"
												| "abstract-set"
												| "public-abstract-set"
												| "protected-set"
												| "protected-decorated-set"
												| "protected-static-set"
												| "protected-instance-set"
												| "protected-abstract-set"
												| "private-set"
												| "private-decorated-set"
												| "private-static-set"
												| "private-instance-set"
												| "#private-set"
												| "#private-static-set"
												| "#private-instance-set"
												| "static-initialization"
												| "static-static-initialization"
												| "public-static-static-initialization"
												| "instance-static-initialization"
												| "public-instance-static-initialization"
												| "abstract-static-initialization"
												| "public-abstract-static-initialization"
												| "protected-static-static-initialization"
												| "protected-instance-static-initialization"
												| "protected-abstract-static-initialization"
												| "private-static-static-initialization"
												| "private-instance-static-initialization"
												| "#private-static-static-initialization"
												| "#private-instance-static-initialization"
										  )
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "public-readonly-field"
												| "public-decorated-readonly-field"
												| "decorated-readonly-field"
												| "static-readonly-field"
												| "public-static-readonly-field"
												| "instance-readonly-field"
												| "public-instance-readonly-field"
												| "abstract-readonly-field"
												| "public-abstract-readonly-field"
												| "protected-readonly-field"
												| "protected-decorated-readonly-field"
												| "protected-static-readonly-field"
												| "protected-instance-readonly-field"
												| "protected-abstract-readonly-field"
												| "private-readonly-field"
												| "private-decorated-readonly-field"
												| "private-static-readonly-field"
												| "private-instance-readonly-field"
												| "#private-readonly-field"
												| "#private-static-readonly-field"
												| "#private-instance-readonly-field"
												| "field"
												| "public-field"
												| "public-decorated-field"
												| "decorated-field"
												| "static-field"
												| "public-static-field"
												| "instance-field"
												| "public-instance-field"
												| "abstract-field"
												| "public-abstract-field"
												| "protected-field"
												| "protected-decorated-field"
												| "protected-static-field"
												| "protected-instance-field"
												| "protected-abstract-field"
												| "private-field"
												| "private-decorated-field"
												| "private-static-field"
												| "private-instance-field"
												| "#private-field"
												| "#private-static-field"
												| "#private-instance-field"
												| "method"
												| "public-method"
												| "public-decorated-method"
												| "decorated-method"
												| "static-method"
												| "public-static-method"
												| "instance-method"
												| "public-instance-method"
												| "abstract-method"
												| "public-abstract-method"
												| "protected-method"
												| "protected-decorated-method"
												| "protected-static-method"
												| "protected-instance-method"
												| "protected-abstract-method"
												| "private-method"
												| "private-decorated-method"
												| "private-static-method"
												| "private-instance-method"
												| "#private-method"
												| "#private-static-method"
												| "#private-instance-method"
												| "call-signature"
												| "constructor"
												| "public-constructor"
												| "protected-constructor"
												| "private-constructor"
												| "accessor"
												| "public-accessor"
												| "public-decorated-accessor"
												| "decorated-accessor"
												| "static-accessor"
												| "public-static-accessor"
												| "instance-accessor"
												| "public-instance-accessor"
												| "abstract-accessor"
												| "public-abstract-accessor"
												| "protected-accessor"
												| "protected-decorated-accessor"
												| "protected-static-accessor"
												| "protected-instance-accessor"
												| "protected-abstract-accessor"
												| "private-accessor"
												| "private-decorated-accessor"
												| "private-static-accessor"
												| "private-instance-accessor"
												| "#private-accessor"
												| "#private-static-accessor"
												| "#private-instance-accessor"
												| "get"
												| "public-get"
												| "public-decorated-get"
												| "decorated-get"
												| "static-get"
												| "public-static-get"
												| "instance-get"
												| "public-instance-get"
												| "abstract-get"
												| "public-abstract-get"
												| "protected-get"
												| "protected-decorated-get"
												| "protected-static-get"
												| "protected-instance-get"
												| "protected-abstract-get"
												| "private-get"
												| "private-decorated-get"
												| "private-static-get"
												| "private-instance-get"
												| "#private-get"
												| "#private-static-get"
												| "#private-instance-get"
												| "set"
												| "public-set"
												| "public-decorated-set"
												| "decorated-set"
												| "static-set"
												| "public-static-set"
												| "instance-set"
												| "public-instance-set"
												| "abstract-set"
												| "public-abstract-set"
												| "protected-set"
												| "protected-decorated-set"
												| "protected-static-set"
												| "protected-instance-set"
												| "protected-abstract-set"
												| "private-set"
												| "private-decorated-set"
												| "private-static-set"
												| "private-instance-set"
												| "#private-set"
												| "#private-static-set"
												| "#private-instance-set"
												| "static-initialization"
												| "static-static-initialization"
												| "public-static-static-initialization"
												| "instance-static-initialization"
												| "public-instance-static-initialization"
												| "abstract-static-initialization"
												| "public-abstract-static-initialization"
												| "protected-static-static-initialization"
												| "protected-instance-static-initialization"
												| "protected-abstract-static-initialization"
												| "private-static-static-initialization"
												| "private-instance-static-initialization"
												| "#private-static-static-initialization"
												| "#private-instance-static-initialization"
										  )[]
								  )[]
								| "never";
							order?:
								| "alphabetically"
								| "alphabetically-case-insensitive"
								| "as-written"
								| "natural"
								| "natural-case-insensitive";
							optionalityOrder?: "optional-first" | "required-first";
					  };
				classes?:
					| "never"
					| (
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "public-readonly-field"
									| "public-decorated-readonly-field"
									| "decorated-readonly-field"
									| "static-readonly-field"
									| "public-static-readonly-field"
									| "instance-readonly-field"
									| "public-instance-readonly-field"
									| "abstract-readonly-field"
									| "public-abstract-readonly-field"
									| "protected-readonly-field"
									| "protected-decorated-readonly-field"
									| "protected-static-readonly-field"
									| "protected-instance-readonly-field"
									| "protected-abstract-readonly-field"
									| "private-readonly-field"
									| "private-decorated-readonly-field"
									| "private-static-readonly-field"
									| "private-instance-readonly-field"
									| "#private-readonly-field"
									| "#private-static-readonly-field"
									| "#private-instance-readonly-field"
									| "field"
									| "public-field"
									| "public-decorated-field"
									| "decorated-field"
									| "static-field"
									| "public-static-field"
									| "instance-field"
									| "public-instance-field"
									| "abstract-field"
									| "public-abstract-field"
									| "protected-field"
									| "protected-decorated-field"
									| "protected-static-field"
									| "protected-instance-field"
									| "protected-abstract-field"
									| "private-field"
									| "private-decorated-field"
									| "private-static-field"
									| "private-instance-field"
									| "#private-field"
									| "#private-static-field"
									| "#private-instance-field"
									| "method"
									| "public-method"
									| "public-decorated-method"
									| "decorated-method"
									| "static-method"
									| "public-static-method"
									| "instance-method"
									| "public-instance-method"
									| "abstract-method"
									| "public-abstract-method"
									| "protected-method"
									| "protected-decorated-method"
									| "protected-static-method"
									| "protected-instance-method"
									| "protected-abstract-method"
									| "private-method"
									| "private-decorated-method"
									| "private-static-method"
									| "private-instance-method"
									| "#private-method"
									| "#private-static-method"
									| "#private-instance-method"
									| "call-signature"
									| "constructor"
									| "public-constructor"
									| "protected-constructor"
									| "private-constructor"
									| "accessor"
									| "public-accessor"
									| "public-decorated-accessor"
									| "decorated-accessor"
									| "static-accessor"
									| "public-static-accessor"
									| "instance-accessor"
									| "public-instance-accessor"
									| "abstract-accessor"
									| "public-abstract-accessor"
									| "protected-accessor"
									| "protected-decorated-accessor"
									| "protected-static-accessor"
									| "protected-instance-accessor"
									| "protected-abstract-accessor"
									| "private-accessor"
									| "private-decorated-accessor"
									| "private-static-accessor"
									| "private-instance-accessor"
									| "#private-accessor"
									| "#private-static-accessor"
									| "#private-instance-accessor"
									| "get"
									| "public-get"
									| "public-decorated-get"
									| "decorated-get"
									| "static-get"
									| "public-static-get"
									| "instance-get"
									| "public-instance-get"
									| "abstract-get"
									| "public-abstract-get"
									| "protected-get"
									| "protected-decorated-get"
									| "protected-static-get"
									| "protected-instance-get"
									| "protected-abstract-get"
									| "private-get"
									| "private-decorated-get"
									| "private-static-get"
									| "private-instance-get"
									| "#private-get"
									| "#private-static-get"
									| "#private-instance-get"
									| "set"
									| "public-set"
									| "public-decorated-set"
									| "decorated-set"
									| "static-set"
									| "public-static-set"
									| "instance-set"
									| "public-instance-set"
									| "abstract-set"
									| "public-abstract-set"
									| "protected-set"
									| "protected-decorated-set"
									| "protected-static-set"
									| "protected-instance-set"
									| "protected-abstract-set"
									| "private-set"
									| "private-decorated-set"
									| "private-static-set"
									| "private-instance-set"
									| "#private-set"
									| "#private-static-set"
									| "#private-instance-set"
									| "static-initialization"
									| "static-static-initialization"
									| "public-static-static-initialization"
									| "instance-static-initialization"
									| "public-instance-static-initialization"
									| "abstract-static-initialization"
									| "public-abstract-static-initialization"
									| "protected-static-static-initialization"
									| "protected-instance-static-initialization"
									| "protected-abstract-static-initialization"
									| "private-static-static-initialization"
									| "private-instance-static-initialization"
									| "#private-static-static-initialization"
									| "#private-instance-static-initialization"
							  )
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "public-readonly-field"
									| "public-decorated-readonly-field"
									| "decorated-readonly-field"
									| "static-readonly-field"
									| "public-static-readonly-field"
									| "instance-readonly-field"
									| "public-instance-readonly-field"
									| "abstract-readonly-field"
									| "public-abstract-readonly-field"
									| "protected-readonly-field"
									| "protected-decorated-readonly-field"
									| "protected-static-readonly-field"
									| "protected-instance-readonly-field"
									| "protected-abstract-readonly-field"
									| "private-readonly-field"
									| "private-decorated-readonly-field"
									| "private-static-readonly-field"
									| "private-instance-readonly-field"
									| "#private-readonly-field"
									| "#private-static-readonly-field"
									| "#private-instance-readonly-field"
									| "field"
									| "public-field"
									| "public-decorated-field"
									| "decorated-field"
									| "static-field"
									| "public-static-field"
									| "instance-field"
									| "public-instance-field"
									| "abstract-field"
									| "public-abstract-field"
									| "protected-field"
									| "protected-decorated-field"
									| "protected-static-field"
									| "protected-instance-field"
									| "protected-abstract-field"
									| "private-field"
									| "private-decorated-field"
									| "private-static-field"
									| "private-instance-field"
									| "#private-field"
									| "#private-static-field"
									| "#private-instance-field"
									| "method"
									| "public-method"
									| "public-decorated-method"
									| "decorated-method"
									| "static-method"
									| "public-static-method"
									| "instance-method"
									| "public-instance-method"
									| "abstract-method"
									| "public-abstract-method"
									| "protected-method"
									| "protected-decorated-method"
									| "protected-static-method"
									| "protected-instance-method"
									| "protected-abstract-method"
									| "private-method"
									| "private-decorated-method"
									| "private-static-method"
									| "private-instance-method"
									| "#private-method"
									| "#private-static-method"
									| "#private-instance-method"
									| "call-signature"
									| "constructor"
									| "public-constructor"
									| "protected-constructor"
									| "private-constructor"
									| "accessor"
									| "public-accessor"
									| "public-decorated-accessor"
									| "decorated-accessor"
									| "static-accessor"
									| "public-static-accessor"
									| "instance-accessor"
									| "public-instance-accessor"
									| "abstract-accessor"
									| "public-abstract-accessor"
									| "protected-accessor"
									| "protected-decorated-accessor"
									| "protected-static-accessor"
									| "protected-instance-accessor"
									| "protected-abstract-accessor"
									| "private-accessor"
									| "private-decorated-accessor"
									| "private-static-accessor"
									| "private-instance-accessor"
									| "#private-accessor"
									| "#private-static-accessor"
									| "#private-instance-accessor"
									| "get"
									| "public-get"
									| "public-decorated-get"
									| "decorated-get"
									| "static-get"
									| "public-static-get"
									| "instance-get"
									| "public-instance-get"
									| "abstract-get"
									| "public-abstract-get"
									| "protected-get"
									| "protected-decorated-get"
									| "protected-static-get"
									| "protected-instance-get"
									| "protected-abstract-get"
									| "private-get"
									| "private-decorated-get"
									| "private-static-get"
									| "private-instance-get"
									| "#private-get"
									| "#private-static-get"
									| "#private-instance-get"
									| "set"
									| "public-set"
									| "public-decorated-set"
									| "decorated-set"
									| "static-set"
									| "public-static-set"
									| "instance-set"
									| "public-instance-set"
									| "abstract-set"
									| "public-abstract-set"
									| "protected-set"
									| "protected-decorated-set"
									| "protected-static-set"
									| "protected-instance-set"
									| "protected-abstract-set"
									| "private-set"
									| "private-decorated-set"
									| "private-static-set"
									| "private-instance-set"
									| "#private-set"
									| "#private-static-set"
									| "#private-instance-set"
									| "static-initialization"
									| "static-static-initialization"
									| "public-static-static-initialization"
									| "instance-static-initialization"
									| "public-instance-static-initialization"
									| "abstract-static-initialization"
									| "public-abstract-static-initialization"
									| "protected-static-static-initialization"
									| "protected-instance-static-initialization"
									| "protected-abstract-static-initialization"
									| "private-static-static-initialization"
									| "private-instance-static-initialization"
									| "#private-static-static-initialization"
									| "#private-instance-static-initialization"
							  )[]
					  )[]
					| {
							memberTypes?:
								| (
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "public-readonly-field"
												| "public-decorated-readonly-field"
												| "decorated-readonly-field"
												| "static-readonly-field"
												| "public-static-readonly-field"
												| "instance-readonly-field"
												| "public-instance-readonly-field"
												| "abstract-readonly-field"
												| "public-abstract-readonly-field"
												| "protected-readonly-field"
												| "protected-decorated-readonly-field"
												| "protected-static-readonly-field"
												| "protected-instance-readonly-field"
												| "protected-abstract-readonly-field"
												| "private-readonly-field"
												| "private-decorated-readonly-field"
												| "private-static-readonly-field"
												| "private-instance-readonly-field"
												| "#private-readonly-field"
												| "#private-static-readonly-field"
												| "#private-instance-readonly-field"
												| "field"
												| "public-field"
												| "public-decorated-field"
												| "decorated-field"
												| "static-field"
												| "public-static-field"
												| "instance-field"
												| "public-instance-field"
												| "abstract-field"
												| "public-abstract-field"
												| "protected-field"
												| "protected-decorated-field"
												| "protected-static-field"
												| "protected-instance-field"
												| "protected-abstract-field"
												| "private-field"
												| "private-decorated-field"
												| "private-static-field"
												| "private-instance-field"
												| "#private-field"
												| "#private-static-field"
												| "#private-instance-field"
												| "method"
												| "public-method"
												| "public-decorated-method"
												| "decorated-method"
												| "static-method"
												| "public-static-method"
												| "instance-method"
												| "public-instance-method"
												| "abstract-method"
												| "public-abstract-method"
												| "protected-method"
												| "protected-decorated-method"
												| "protected-static-method"
												| "protected-instance-method"
												| "protected-abstract-method"
												| "private-method"
												| "private-decorated-method"
												| "private-static-method"
												| "private-instance-method"
												| "#private-method"
												| "#private-static-method"
												| "#private-instance-method"
												| "call-signature"
												| "constructor"
												| "public-constructor"
												| "protected-constructor"
												| "private-constructor"
												| "accessor"
												| "public-accessor"
												| "public-decorated-accessor"
												| "decorated-accessor"
												| "static-accessor"
												| "public-static-accessor"
												| "instance-accessor"
												| "public-instance-accessor"
												| "abstract-accessor"
												| "public-abstract-accessor"
												| "protected-accessor"
												| "protected-decorated-accessor"
												| "protected-static-accessor"
												| "protected-instance-accessor"
												| "protected-abstract-accessor"
												| "private-accessor"
												| "private-decorated-accessor"
												| "private-static-accessor"
												| "private-instance-accessor"
												| "#private-accessor"
												| "#private-static-accessor"
												| "#private-instance-accessor"
												| "get"
												| "public-get"
												| "public-decorated-get"
												| "decorated-get"
												| "static-get"
												| "public-static-get"
												| "instance-get"
												| "public-instance-get"
												| "abstract-get"
												| "public-abstract-get"
												| "protected-get"
												| "protected-decorated-get"
												| "protected-static-get"
												| "protected-instance-get"
												| "protected-abstract-get"
												| "private-get"
												| "private-decorated-get"
												| "private-static-get"
												| "private-instance-get"
												| "#private-get"
												| "#private-static-get"
												| "#private-instance-get"
												| "set"
												| "public-set"
												| "public-decorated-set"
												| "decorated-set"
												| "static-set"
												| "public-static-set"
												| "instance-set"
												| "public-instance-set"
												| "abstract-set"
												| "public-abstract-set"
												| "protected-set"
												| "protected-decorated-set"
												| "protected-static-set"
												| "protected-instance-set"
												| "protected-abstract-set"
												| "private-set"
												| "private-decorated-set"
												| "private-static-set"
												| "private-instance-set"
												| "#private-set"
												| "#private-static-set"
												| "#private-instance-set"
												| "static-initialization"
												| "static-static-initialization"
												| "public-static-static-initialization"
												| "instance-static-initialization"
												| "public-instance-static-initialization"
												| "abstract-static-initialization"
												| "public-abstract-static-initialization"
												| "protected-static-static-initialization"
												| "protected-instance-static-initialization"
												| "protected-abstract-static-initialization"
												| "private-static-static-initialization"
												| "private-instance-static-initialization"
												| "#private-static-static-initialization"
												| "#private-instance-static-initialization"
										  )
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "public-readonly-field"
												| "public-decorated-readonly-field"
												| "decorated-readonly-field"
												| "static-readonly-field"
												| "public-static-readonly-field"
												| "instance-readonly-field"
												| "public-instance-readonly-field"
												| "abstract-readonly-field"
												| "public-abstract-readonly-field"
												| "protected-readonly-field"
												| "protected-decorated-readonly-field"
												| "protected-static-readonly-field"
												| "protected-instance-readonly-field"
												| "protected-abstract-readonly-field"
												| "private-readonly-field"
												| "private-decorated-readonly-field"
												| "private-static-readonly-field"
												| "private-instance-readonly-field"
												| "#private-readonly-field"
												| "#private-static-readonly-field"
												| "#private-instance-readonly-field"
												| "field"
												| "public-field"
												| "public-decorated-field"
												| "decorated-field"
												| "static-field"
												| "public-static-field"
												| "instance-field"
												| "public-instance-field"
												| "abstract-field"
												| "public-abstract-field"
												| "protected-field"
												| "protected-decorated-field"
												| "protected-static-field"
												| "protected-instance-field"
												| "protected-abstract-field"
												| "private-field"
												| "private-decorated-field"
												| "private-static-field"
												| "private-instance-field"
												| "#private-field"
												| "#private-static-field"
												| "#private-instance-field"
												| "method"
												| "public-method"
												| "public-decorated-method"
												| "decorated-method"
												| "static-method"
												| "public-static-method"
												| "instance-method"
												| "public-instance-method"
												| "abstract-method"
												| "public-abstract-method"
												| "protected-method"
												| "protected-decorated-method"
												| "protected-static-method"
												| "protected-instance-method"
												| "protected-abstract-method"
												| "private-method"
												| "private-decorated-method"
												| "private-static-method"
												| "private-instance-method"
												| "#private-method"
												| "#private-static-method"
												| "#private-instance-method"
												| "call-signature"
												| "constructor"
												| "public-constructor"
												| "protected-constructor"
												| "private-constructor"
												| "accessor"
												| "public-accessor"
												| "public-decorated-accessor"
												| "decorated-accessor"
												| "static-accessor"
												| "public-static-accessor"
												| "instance-accessor"
												| "public-instance-accessor"
												| "abstract-accessor"
												| "public-abstract-accessor"
												| "protected-accessor"
												| "protected-decorated-accessor"
												| "protected-static-accessor"
												| "protected-instance-accessor"
												| "protected-abstract-accessor"
												| "private-accessor"
												| "private-decorated-accessor"
												| "private-static-accessor"
												| "private-instance-accessor"
												| "#private-accessor"
												| "#private-static-accessor"
												| "#private-instance-accessor"
												| "get"
												| "public-get"
												| "public-decorated-get"
												| "decorated-get"
												| "static-get"
												| "public-static-get"
												| "instance-get"
												| "public-instance-get"
												| "abstract-get"
												| "public-abstract-get"
												| "protected-get"
												| "protected-decorated-get"
												| "protected-static-get"
												| "protected-instance-get"
												| "protected-abstract-get"
												| "private-get"
												| "private-decorated-get"
												| "private-static-get"
												| "private-instance-get"
												| "#private-get"
												| "#private-static-get"
												| "#private-instance-get"
												| "set"
												| "public-set"
												| "public-decorated-set"
												| "decorated-set"
												| "static-set"
												| "public-static-set"
												| "instance-set"
												| "public-instance-set"
												| "abstract-set"
												| "public-abstract-set"
												| "protected-set"
												| "protected-decorated-set"
												| "protected-static-set"
												| "protected-instance-set"
												| "protected-abstract-set"
												| "private-set"
												| "private-decorated-set"
												| "private-static-set"
												| "private-instance-set"
												| "#private-set"
												| "#private-static-set"
												| "#private-instance-set"
												| "static-initialization"
												| "static-static-initialization"
												| "public-static-static-initialization"
												| "instance-static-initialization"
												| "public-instance-static-initialization"
												| "abstract-static-initialization"
												| "public-abstract-static-initialization"
												| "protected-static-static-initialization"
												| "protected-instance-static-initialization"
												| "protected-abstract-static-initialization"
												| "private-static-static-initialization"
												| "private-instance-static-initialization"
												| "#private-static-static-initialization"
												| "#private-instance-static-initialization"
										  )[]
								  )[]
								| "never";
							order?:
								| "alphabetically"
								| "alphabetically-case-insensitive"
								| "as-written"
								| "natural"
								| "natural-case-insensitive";
							optionalityOrder?: "optional-first" | "required-first";
					  };
				classExpressions?:
					| "never"
					| (
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "public-readonly-field"
									| "public-decorated-readonly-field"
									| "decorated-readonly-field"
									| "static-readonly-field"
									| "public-static-readonly-field"
									| "instance-readonly-field"
									| "public-instance-readonly-field"
									| "abstract-readonly-field"
									| "public-abstract-readonly-field"
									| "protected-readonly-field"
									| "protected-decorated-readonly-field"
									| "protected-static-readonly-field"
									| "protected-instance-readonly-field"
									| "protected-abstract-readonly-field"
									| "private-readonly-field"
									| "private-decorated-readonly-field"
									| "private-static-readonly-field"
									| "private-instance-readonly-field"
									| "#private-readonly-field"
									| "#private-static-readonly-field"
									| "#private-instance-readonly-field"
									| "field"
									| "public-field"
									| "public-decorated-field"
									| "decorated-field"
									| "static-field"
									| "public-static-field"
									| "instance-field"
									| "public-instance-field"
									| "abstract-field"
									| "public-abstract-field"
									| "protected-field"
									| "protected-decorated-field"
									| "protected-static-field"
									| "protected-instance-field"
									| "protected-abstract-field"
									| "private-field"
									| "private-decorated-field"
									| "private-static-field"
									| "private-instance-field"
									| "#private-field"
									| "#private-static-field"
									| "#private-instance-field"
									| "method"
									| "public-method"
									| "public-decorated-method"
									| "decorated-method"
									| "static-method"
									| "public-static-method"
									| "instance-method"
									| "public-instance-method"
									| "abstract-method"
									| "public-abstract-method"
									| "protected-method"
									| "protected-decorated-method"
									| "protected-static-method"
									| "protected-instance-method"
									| "protected-abstract-method"
									| "private-method"
									| "private-decorated-method"
									| "private-static-method"
									| "private-instance-method"
									| "#private-method"
									| "#private-static-method"
									| "#private-instance-method"
									| "call-signature"
									| "constructor"
									| "public-constructor"
									| "protected-constructor"
									| "private-constructor"
									| "accessor"
									| "public-accessor"
									| "public-decorated-accessor"
									| "decorated-accessor"
									| "static-accessor"
									| "public-static-accessor"
									| "instance-accessor"
									| "public-instance-accessor"
									| "abstract-accessor"
									| "public-abstract-accessor"
									| "protected-accessor"
									| "protected-decorated-accessor"
									| "protected-static-accessor"
									| "protected-instance-accessor"
									| "protected-abstract-accessor"
									| "private-accessor"
									| "private-decorated-accessor"
									| "private-static-accessor"
									| "private-instance-accessor"
									| "#private-accessor"
									| "#private-static-accessor"
									| "#private-instance-accessor"
									| "get"
									| "public-get"
									| "public-decorated-get"
									| "decorated-get"
									| "static-get"
									| "public-static-get"
									| "instance-get"
									| "public-instance-get"
									| "abstract-get"
									| "public-abstract-get"
									| "protected-get"
									| "protected-decorated-get"
									| "protected-static-get"
									| "protected-instance-get"
									| "protected-abstract-get"
									| "private-get"
									| "private-decorated-get"
									| "private-static-get"
									| "private-instance-get"
									| "#private-get"
									| "#private-static-get"
									| "#private-instance-get"
									| "set"
									| "public-set"
									| "public-decorated-set"
									| "decorated-set"
									| "static-set"
									| "public-static-set"
									| "instance-set"
									| "public-instance-set"
									| "abstract-set"
									| "public-abstract-set"
									| "protected-set"
									| "protected-decorated-set"
									| "protected-static-set"
									| "protected-instance-set"
									| "protected-abstract-set"
									| "private-set"
									| "private-decorated-set"
									| "private-static-set"
									| "private-instance-set"
									| "#private-set"
									| "#private-static-set"
									| "#private-instance-set"
									| "static-initialization"
									| "static-static-initialization"
									| "public-static-static-initialization"
									| "instance-static-initialization"
									| "public-instance-static-initialization"
									| "abstract-static-initialization"
									| "public-abstract-static-initialization"
									| "protected-static-static-initialization"
									| "protected-instance-static-initialization"
									| "protected-abstract-static-initialization"
									| "private-static-static-initialization"
									| "private-instance-static-initialization"
									| "#private-static-static-initialization"
									| "#private-instance-static-initialization"
							  )
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "public-readonly-field"
									| "public-decorated-readonly-field"
									| "decorated-readonly-field"
									| "static-readonly-field"
									| "public-static-readonly-field"
									| "instance-readonly-field"
									| "public-instance-readonly-field"
									| "abstract-readonly-field"
									| "public-abstract-readonly-field"
									| "protected-readonly-field"
									| "protected-decorated-readonly-field"
									| "protected-static-readonly-field"
									| "protected-instance-readonly-field"
									| "protected-abstract-readonly-field"
									| "private-readonly-field"
									| "private-decorated-readonly-field"
									| "private-static-readonly-field"
									| "private-instance-readonly-field"
									| "#private-readonly-field"
									| "#private-static-readonly-field"
									| "#private-instance-readonly-field"
									| "field"
									| "public-field"
									| "public-decorated-field"
									| "decorated-field"
									| "static-field"
									| "public-static-field"
									| "instance-field"
									| "public-instance-field"
									| "abstract-field"
									| "public-abstract-field"
									| "protected-field"
									| "protected-decorated-field"
									| "protected-static-field"
									| "protected-instance-field"
									| "protected-abstract-field"
									| "private-field"
									| "private-decorated-field"
									| "private-static-field"
									| "private-instance-field"
									| "#private-field"
									| "#private-static-field"
									| "#private-instance-field"
									| "method"
									| "public-method"
									| "public-decorated-method"
									| "decorated-method"
									| "static-method"
									| "public-static-method"
									| "instance-method"
									| "public-instance-method"
									| "abstract-method"
									| "public-abstract-method"
									| "protected-method"
									| "protected-decorated-method"
									| "protected-static-method"
									| "protected-instance-method"
									| "protected-abstract-method"
									| "private-method"
									| "private-decorated-method"
									| "private-static-method"
									| "private-instance-method"
									| "#private-method"
									| "#private-static-method"
									| "#private-instance-method"
									| "call-signature"
									| "constructor"
									| "public-constructor"
									| "protected-constructor"
									| "private-constructor"
									| "accessor"
									| "public-accessor"
									| "public-decorated-accessor"
									| "decorated-accessor"
									| "static-accessor"
									| "public-static-accessor"
									| "instance-accessor"
									| "public-instance-accessor"
									| "abstract-accessor"
									| "public-abstract-accessor"
									| "protected-accessor"
									| "protected-decorated-accessor"
									| "protected-static-accessor"
									| "protected-instance-accessor"
									| "protected-abstract-accessor"
									| "private-accessor"
									| "private-decorated-accessor"
									| "private-static-accessor"
									| "private-instance-accessor"
									| "#private-accessor"
									| "#private-static-accessor"
									| "#private-instance-accessor"
									| "get"
									| "public-get"
									| "public-decorated-get"
									| "decorated-get"
									| "static-get"
									| "public-static-get"
									| "instance-get"
									| "public-instance-get"
									| "abstract-get"
									| "public-abstract-get"
									| "protected-get"
									| "protected-decorated-get"
									| "protected-static-get"
									| "protected-instance-get"
									| "protected-abstract-get"
									| "private-get"
									| "private-decorated-get"
									| "private-static-get"
									| "private-instance-get"
									| "#private-get"
									| "#private-static-get"
									| "#private-instance-get"
									| "set"
									| "public-set"
									| "public-decorated-set"
									| "decorated-set"
									| "static-set"
									| "public-static-set"
									| "instance-set"
									| "public-instance-set"
									| "abstract-set"
									| "public-abstract-set"
									| "protected-set"
									| "protected-decorated-set"
									| "protected-static-set"
									| "protected-instance-set"
									| "protected-abstract-set"
									| "private-set"
									| "private-decorated-set"
									| "private-static-set"
									| "private-instance-set"
									| "#private-set"
									| "#private-static-set"
									| "#private-instance-set"
									| "static-initialization"
									| "static-static-initialization"
									| "public-static-static-initialization"
									| "instance-static-initialization"
									| "public-instance-static-initialization"
									| "abstract-static-initialization"
									| "public-abstract-static-initialization"
									| "protected-static-static-initialization"
									| "protected-instance-static-initialization"
									| "protected-abstract-static-initialization"
									| "private-static-static-initialization"
									| "private-instance-static-initialization"
									| "#private-static-static-initialization"
									| "#private-instance-static-initialization"
							  )[]
					  )[]
					| {
							memberTypes?:
								| (
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "public-readonly-field"
												| "public-decorated-readonly-field"
												| "decorated-readonly-field"
												| "static-readonly-field"
												| "public-static-readonly-field"
												| "instance-readonly-field"
												| "public-instance-readonly-field"
												| "abstract-readonly-field"
												| "public-abstract-readonly-field"
												| "protected-readonly-field"
												| "protected-decorated-readonly-field"
												| "protected-static-readonly-field"
												| "protected-instance-readonly-field"
												| "protected-abstract-readonly-field"
												| "private-readonly-field"
												| "private-decorated-readonly-field"
												| "private-static-readonly-field"
												| "private-instance-readonly-field"
												| "#private-readonly-field"
												| "#private-static-readonly-field"
												| "#private-instance-readonly-field"
												| "field"
												| "public-field"
												| "public-decorated-field"
												| "decorated-field"
												| "static-field"
												| "public-static-field"
												| "instance-field"
												| "public-instance-field"
												| "abstract-field"
												| "public-abstract-field"
												| "protected-field"
												| "protected-decorated-field"
												| "protected-static-field"
												| "protected-instance-field"
												| "protected-abstract-field"
												| "private-field"
												| "private-decorated-field"
												| "private-static-field"
												| "private-instance-field"
												| "#private-field"
												| "#private-static-field"
												| "#private-instance-field"
												| "method"
												| "public-method"
												| "public-decorated-method"
												| "decorated-method"
												| "static-method"
												| "public-static-method"
												| "instance-method"
												| "public-instance-method"
												| "abstract-method"
												| "public-abstract-method"
												| "protected-method"
												| "protected-decorated-method"
												| "protected-static-method"
												| "protected-instance-method"
												| "protected-abstract-method"
												| "private-method"
												| "private-decorated-method"
												| "private-static-method"
												| "private-instance-method"
												| "#private-method"
												| "#private-static-method"
												| "#private-instance-method"
												| "call-signature"
												| "constructor"
												| "public-constructor"
												| "protected-constructor"
												| "private-constructor"
												| "accessor"
												| "public-accessor"
												| "public-decorated-accessor"
												| "decorated-accessor"
												| "static-accessor"
												| "public-static-accessor"
												| "instance-accessor"
												| "public-instance-accessor"
												| "abstract-accessor"
												| "public-abstract-accessor"
												| "protected-accessor"
												| "protected-decorated-accessor"
												| "protected-static-accessor"
												| "protected-instance-accessor"
												| "protected-abstract-accessor"
												| "private-accessor"
												| "private-decorated-accessor"
												| "private-static-accessor"
												| "private-instance-accessor"
												| "#private-accessor"
												| "#private-static-accessor"
												| "#private-instance-accessor"
												| "get"
												| "public-get"
												| "public-decorated-get"
												| "decorated-get"
												| "static-get"
												| "public-static-get"
												| "instance-get"
												| "public-instance-get"
												| "abstract-get"
												| "public-abstract-get"
												| "protected-get"
												| "protected-decorated-get"
												| "protected-static-get"
												| "protected-instance-get"
												| "protected-abstract-get"
												| "private-get"
												| "private-decorated-get"
												| "private-static-get"
												| "private-instance-get"
												| "#private-get"
												| "#private-static-get"
												| "#private-instance-get"
												| "set"
												| "public-set"
												| "public-decorated-set"
												| "decorated-set"
												| "static-set"
												| "public-static-set"
												| "instance-set"
												| "public-instance-set"
												| "abstract-set"
												| "public-abstract-set"
												| "protected-set"
												| "protected-decorated-set"
												| "protected-static-set"
												| "protected-instance-set"
												| "protected-abstract-set"
												| "private-set"
												| "private-decorated-set"
												| "private-static-set"
												| "private-instance-set"
												| "#private-set"
												| "#private-static-set"
												| "#private-instance-set"
												| "static-initialization"
												| "static-static-initialization"
												| "public-static-static-initialization"
												| "instance-static-initialization"
												| "public-instance-static-initialization"
												| "abstract-static-initialization"
												| "public-abstract-static-initialization"
												| "protected-static-static-initialization"
												| "protected-instance-static-initialization"
												| "protected-abstract-static-initialization"
												| "private-static-static-initialization"
												| "private-instance-static-initialization"
												| "#private-static-static-initialization"
												| "#private-instance-static-initialization"
										  )
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "public-readonly-field"
												| "public-decorated-readonly-field"
												| "decorated-readonly-field"
												| "static-readonly-field"
												| "public-static-readonly-field"
												| "instance-readonly-field"
												| "public-instance-readonly-field"
												| "abstract-readonly-field"
												| "public-abstract-readonly-field"
												| "protected-readonly-field"
												| "protected-decorated-readonly-field"
												| "protected-static-readonly-field"
												| "protected-instance-readonly-field"
												| "protected-abstract-readonly-field"
												| "private-readonly-field"
												| "private-decorated-readonly-field"
												| "private-static-readonly-field"
												| "private-instance-readonly-field"
												| "#private-readonly-field"
												| "#private-static-readonly-field"
												| "#private-instance-readonly-field"
												| "field"
												| "public-field"
												| "public-decorated-field"
												| "decorated-field"
												| "static-field"
												| "public-static-field"
												| "instance-field"
												| "public-instance-field"
												| "abstract-field"
												| "public-abstract-field"
												| "protected-field"
												| "protected-decorated-field"
												| "protected-static-field"
												| "protected-instance-field"
												| "protected-abstract-field"
												| "private-field"
												| "private-decorated-field"
												| "private-static-field"
												| "private-instance-field"
												| "#private-field"
												| "#private-static-field"
												| "#private-instance-field"
												| "method"
												| "public-method"
												| "public-decorated-method"
												| "decorated-method"
												| "static-method"
												| "public-static-method"
												| "instance-method"
												| "public-instance-method"
												| "abstract-method"
												| "public-abstract-method"
												| "protected-method"
												| "protected-decorated-method"
												| "protected-static-method"
												| "protected-instance-method"
												| "protected-abstract-method"
												| "private-method"
												| "private-decorated-method"
												| "private-static-method"
												| "private-instance-method"
												| "#private-method"
												| "#private-static-method"
												| "#private-instance-method"
												| "call-signature"
												| "constructor"
												| "public-constructor"
												| "protected-constructor"
												| "private-constructor"
												| "accessor"
												| "public-accessor"
												| "public-decorated-accessor"
												| "decorated-accessor"
												| "static-accessor"
												| "public-static-accessor"
												| "instance-accessor"
												| "public-instance-accessor"
												| "abstract-accessor"
												| "public-abstract-accessor"
												| "protected-accessor"
												| "protected-decorated-accessor"
												| "protected-static-accessor"
												| "protected-instance-accessor"
												| "protected-abstract-accessor"
												| "private-accessor"
												| "private-decorated-accessor"
												| "private-static-accessor"
												| "private-instance-accessor"
												| "#private-accessor"
												| "#private-static-accessor"
												| "#private-instance-accessor"
												| "get"
												| "public-get"
												| "public-decorated-get"
												| "decorated-get"
												| "static-get"
												| "public-static-get"
												| "instance-get"
												| "public-instance-get"
												| "abstract-get"
												| "public-abstract-get"
												| "protected-get"
												| "protected-decorated-get"
												| "protected-static-get"
												| "protected-instance-get"
												| "protected-abstract-get"
												| "private-get"
												| "private-decorated-get"
												| "private-static-get"
												| "private-instance-get"
												| "#private-get"
												| "#private-static-get"
												| "#private-instance-get"
												| "set"
												| "public-set"
												| "public-decorated-set"
												| "decorated-set"
												| "static-set"
												| "public-static-set"
												| "instance-set"
												| "public-instance-set"
												| "abstract-set"
												| "public-abstract-set"
												| "protected-set"
												| "protected-decorated-set"
												| "protected-static-set"
												| "protected-instance-set"
												| "protected-abstract-set"
												| "private-set"
												| "private-decorated-set"
												| "private-static-set"
												| "private-instance-set"
												| "#private-set"
												| "#private-static-set"
												| "#private-instance-set"
												| "static-initialization"
												| "static-static-initialization"
												| "public-static-static-initialization"
												| "instance-static-initialization"
												| "public-instance-static-initialization"
												| "abstract-static-initialization"
												| "public-abstract-static-initialization"
												| "protected-static-static-initialization"
												| "protected-instance-static-initialization"
												| "protected-abstract-static-initialization"
												| "private-static-static-initialization"
												| "private-instance-static-initialization"
												| "#private-static-static-initialization"
												| "#private-instance-static-initialization"
										  )[]
								  )[]
								| "never";
							order?:
								| "alphabetically"
								| "alphabetically-case-insensitive"
								| "as-written"
								| "natural"
								| "natural-case-insensitive";
							optionalityOrder?: "optional-first" | "required-first";
					  };
				interfaces?:
					| "never"
					| (
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "field"
									| "method"
									| "constructor"
							  )
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "field"
									| "method"
									| "constructor"
							  )[]
					  )[]
					| {
							memberTypes?:
								| (
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "field"
												| "method"
												| "constructor"
										  )
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "field"
												| "method"
												| "constructor"
										  )[]
								  )[]
								| "never";
							order?:
								| "alphabetically"
								| "alphabetically-case-insensitive"
								| "as-written"
								| "natural"
								| "natural-case-insensitive";
							optionalityOrder?: "optional-first" | "required-first";
					  };
				typeLiterals?:
					| "never"
					| (
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "field"
									| "method"
									| "constructor"
							  )
							| (
									| "readonly-signature"
									| "signature"
									| "readonly-field"
									| "field"
									| "method"
									| "constructor"
							  )[]
					  )[]
					| {
							memberTypes?:
								| (
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "field"
												| "method"
												| "constructor"
										  )
										| (
												| "readonly-signature"
												| "signature"
												| "readonly-field"
												| "field"
												| "method"
												| "constructor"
										  )[]
								  )[]
								| "never";
							order?:
								| "alphabetically"
								| "alphabetically-case-insensitive"
								| "as-written"
								| "natural"
								| "natural-case-insensitive";
							optionalityOrder?: "optional-first" | "required-first";
					  };
			},
	  ];
// ----- ts/method-signature-style -----
type TsMethodSignatureStyle = [] | ["property" | "method"];
// ----- ts/naming-convention -----
type _TsNamingConventionFormatOptionsConfig =
	| _TsNamingConventionPredefinedFormats[]
	| null;
type _TsNamingConventionPredefinedFormats =
	| "camelCase"
	| "strictCamelCase"
	| "PascalCase"
	| "StrictPascalCase"
	| "snake_case"
	| "UPPER_CASE";
type _TsNamingConventionUnderscoreOptions =
	| "forbid"
	| "allow"
	| "require"
	| "requireDouble"
	| "allowDouble"
	| "allowSingleOrDouble";
type _TsNamingConvention_PrefixSuffixConfig = string[];
type _TsNamingConventionTypeModifiers =
	| "boolean"
	| "string"
	| "number"
	| "function"
	| "array";
type TsNamingConvention = (
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: (
				| "default"
				| "variableLike"
				| "memberLike"
				| "typeLike"
				| "method"
				| "property"
				| "accessor"
				| "variable"
				| "function"
				| "parameter"
				| "parameterProperty"
				| "classicAccessor"
				| "enumMember"
				| "classMethod"
				| "objectLiteralMethod"
				| "typeMethod"
				| "classProperty"
				| "objectLiteralProperty"
				| "typeProperty"
				| "autoAccessor"
				| "class"
				| "interface"
				| "typeAlias"
				| "enum"
				| "typeParameter"
				| "import"
			)[];
			modifiers?: (
				| "const"
				| "readonly"
				| "static"
				| "public"
				| "protected"
				| "private"
				| "#private"
				| "abstract"
				| "destructured"
				| "global"
				| "exported"
				| "unused"
				| "requiresQuotes"
				| "override"
				| "async"
				| "default"
				| "namespace"
			)[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "default";
			modifiers?: (
				| "const"
				| "readonly"
				| "static"
				| "public"
				| "protected"
				| "private"
				| "#private"
				| "abstract"
				| "destructured"
				| "global"
				| "exported"
				| "unused"
				| "requiresQuotes"
				| "override"
				| "async"
				| "default"
				| "namespace"
			)[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "variableLike";
			modifiers?: ("unused" | "async")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "variable";
			modifiers?: (
				| "const"
				| "destructured"
				| "exported"
				| "global"
				| "unused"
				| "async"
			)[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "function";
			modifiers?: ("exported" | "global" | "unused" | "async")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "parameter";
			modifiers?: ("destructured" | "unused")[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "memberLike";
			modifiers?: (
				| "abstract"
				| "private"
				| "#private"
				| "protected"
				| "public"
				| "readonly"
				| "requiresQuotes"
				| "static"
				| "override"
				| "async"
			)[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "classProperty";
			modifiers?: (
				| "abstract"
				| "private"
				| "#private"
				| "protected"
				| "public"
				| "readonly"
				| "requiresQuotes"
				| "static"
				| "override"
			)[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "objectLiteralProperty";
			modifiers?: ("public" | "requiresQuotes")[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "typeProperty";
			modifiers?: ("public" | "readonly" | "requiresQuotes")[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "parameterProperty";
			modifiers?: ("private" | "protected" | "public" | "readonly")[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "property";
			modifiers?: (
				| "abstract"
				| "private"
				| "#private"
				| "protected"
				| "public"
				| "readonly"
				| "requiresQuotes"
				| "static"
				| "override"
				| "async"
			)[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "classMethod";
			modifiers?: (
				| "abstract"
				| "private"
				| "#private"
				| "protected"
				| "public"
				| "requiresQuotes"
				| "static"
				| "override"
				| "async"
			)[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "objectLiteralMethod";
			modifiers?: ("public" | "requiresQuotes" | "async")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "typeMethod";
			modifiers?: ("public" | "requiresQuotes")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "method";
			modifiers?: (
				| "abstract"
				| "private"
				| "#private"
				| "protected"
				| "public"
				| "requiresQuotes"
				| "static"
				| "override"
				| "async"
			)[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "classicAccessor";
			modifiers?: (
				| "abstract"
				| "private"
				| "protected"
				| "public"
				| "requiresQuotes"
				| "static"
				| "override"
			)[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "autoAccessor";
			modifiers?: (
				| "abstract"
				| "private"
				| "protected"
				| "public"
				| "requiresQuotes"
				| "static"
				| "override"
			)[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "accessor";
			modifiers?: (
				| "abstract"
				| "private"
				| "protected"
				| "public"
				| "requiresQuotes"
				| "static"
				| "override"
			)[];
			types?: _TsNamingConventionTypeModifiers[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "enumMember";
			modifiers?: "requiresQuotes"[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "typeLike";
			modifiers?: ("abstract" | "exported" | "unused")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "class";
			modifiers?: ("abstract" | "exported" | "unused")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "interface";
			modifiers?: ("exported" | "unused")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "typeAlias";
			modifiers?: ("exported" | "unused")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "enum";
			modifiers?: ("exported" | "unused")[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "typeParameter";
			modifiers?: "unused"[];
	  }
	| {
			format: _TsNamingConventionFormatOptionsConfig;
			custom?: _TsNamingConvention_MatchRegexConfig;
			leadingUnderscore?: _TsNamingConventionUnderscoreOptions;
			trailingUnderscore?: _TsNamingConventionUnderscoreOptions;
			prefix?: _TsNamingConvention_PrefixSuffixConfig;
			suffix?: _TsNamingConvention_PrefixSuffixConfig;
			failureMessage?: string;
			filter?: string | _TsNamingConvention_MatchRegexConfig;
			selector: "import";
			modifiers?: ("default" | "namespace")[];
	  }
)[];
interface _TsNamingConvention_MatchRegexConfig {
	match: boolean;
	regex: string;
}
// ----- ts/no-base-to-string -----
type TsNoBaseToString =
	| []
	| [
			{
				ignoredTypeNames?: string[];
			},
	  ];
// ----- ts/no-confusing-void-expression -----
type TsNoConfusingVoidExpression =
	| []
	| [
			{
				ignoreArrowShorthand?: boolean;
				ignoreVoidOperator?: boolean;
			},
	  ];
// ----- ts/no-duplicate-type-constituents -----
type TsNoDuplicateTypeConstituents =
	| []
	| [
			{
				ignoreIntersections?: boolean;
				ignoreUnions?: boolean;
			},
	  ];
// ----- ts/no-empty-function -----
type TsNoEmptyFunction =
	| []
	| [
			{
				allow?: (
					| "functions"
					| "arrowFunctions"
					| "generatorFunctions"
					| "methods"
					| "generatorMethods"
					| "getters"
					| "setters"
					| "constructors"
					| "private-constructors"
					| "protected-constructors"
					| "asyncFunctions"
					| "asyncMethods"
					| "decoratedFunctions"
					| "overrideMethods"
				)[];
			},
	  ];
// ----- ts/no-empty-interface -----
type TsNoEmptyInterface =
	| []
	| [
			{
				allowSingleExtends?: boolean;
			},
	  ];
// ----- ts/no-explicit-any -----
type TsNoExplicitAny =
	| []
	| [
			{
				fixToUnknown?: boolean;

				ignoreRestArgs?: boolean;
			},
	  ];
// ----- ts/no-extra-parens -----
type TsNoExtraParens =
	| []
	| ["functions"]
	| []
	| ["all"]
	| [
			"all",
			{
				conditionalAssign?: boolean;
				ternaryOperandBinaryExpressions?: boolean;
				nestedBinaryExpressions?: boolean;
				returnAssign?: boolean;
				ignoreJSX?: "none" | "all" | "single-line" | "multi-line";
				enforceForArrowConditionals?: boolean;
				enforceForSequenceExpressions?: boolean;
				enforceForNewInMemberExpressions?: boolean;
				enforceForFunctionPrototypeMethods?: boolean;
				allowParensAfterCommentPattern?: string;
			},
	  ];
// ----- ts/no-extraneous-class -----
type TsNoExtraneousClass =
	| []
	| [
			{
				allowConstructorOnly?: boolean;

				allowEmpty?: boolean;

				allowStaticOnly?: boolean;

				allowWithDecorator?: boolean;
			},
	  ];
// ----- ts/no-floating-promises -----
type TsNoFloatingPromises =
	| []
	| [
			{
				ignoreVoid?: boolean;

				ignoreIIFE?: boolean;
				allowForKnownSafePromises?: (
					| string
					| {
							from: "file";
							name: string | [string, ...string[]];
							path?: string;
					  }
					| {
							from: "lib";
							name: string | [string, ...string[]];
					  }
					| {
							from: "package";
							name: string | [string, ...string[]];
							package: string;
					  }
				)[];
			},
	  ];
// ----- ts/no-inferrable-types -----
type TsNoInferrableTypes =
	| []
	| [
			{
				ignoreParameters?: boolean;
				ignoreProperties?: boolean;
			},
	  ];
// ----- ts/no-invalid-this -----
type TsNoInvalidThis =
	| []
	| [
			{
				capIsConstructor?: boolean;
			},
	  ];
// ----- ts/no-invalid-void-type -----
type TsNoInvalidVoidType =
	| []
	| [
			{
				allowInGenericTypeArguments?: boolean | [string, ...string[]];
				allowAsThisParameter?: boolean;
			},
	  ];
// ----- ts/no-magic-numbers -----
type TsNoMagicNumbers =
	| []
	| [
			{
				detectObjects?: boolean;
				enforceConst?: boolean;
				ignore?: (number | string)[];
				ignoreArrayIndexes?: boolean;
				ignoreDefaultValues?: boolean;
				ignoreClassFieldInitialValues?: boolean;
				ignoreNumericLiteralTypes?: boolean;
				ignoreEnums?: boolean;
				ignoreReadonlyClassProperties?: boolean;
				ignoreTypeIndexes?: boolean;
			},
	  ];
// ----- ts/no-meaningless-void-operator -----
type TsNoMeaninglessVoidOperator =
	| []
	| [
			{
				checkNever?: boolean;
			},
	  ];
// ----- ts/no-misused-promises -----
type TsNoMisusedPromises =
	| []
	| [
			{
				checksConditionals?: boolean;
				checksVoidReturn?:
					| boolean
					| {
							arguments?: boolean;
							attributes?: boolean;
							properties?: boolean;
							returns?: boolean;
							variables?: boolean;
					  };
				checksSpreads?: boolean;
			},
	  ];
// ----- ts/no-namespace -----
type TsNoNamespace =
	| []
	| [
			{
				allowDeclarations?: boolean;

				allowDefinitionFiles?: boolean;
			},
	  ];
// ----- ts/no-redeclare -----
type TsNoRedeclare =
	| []
	| [
			{
				builtinGlobals?: boolean;
				ignoreDeclarationMerge?: boolean;
			},
	  ];
// ----- ts/no-require-imports -----
type TsNoRequireImports =
	| []
	| [
			{
				allow?: string[];
			},
	  ];
// ----- ts/no-restricted-imports -----
type TsNoRestrictedImports =
	| (
			| string
			| {
					name: string;
					message?: string;
					importNames?: string[];
					allowImportNames?: string[];

					allowTypeImports?: boolean;
			  }
	  )[]
	| []
	| [
			{
				paths?: (
					| string
					| {
							name: string;
							message?: string;
							importNames?: string[];
							allowImportNames?: string[];

							allowTypeImports?: boolean;
					  }
				)[];
				patterns?:
					| string[]
					| {
							importNames?: [string, ...string[]];

							allowImportNames?: [string, ...string[]];

							group: [string, ...string[]];
							importNamePattern?: string;
							allowImportNamePattern?: string;
							message?: string;
							caseSensitive?: boolean;

							allowTypeImports?: boolean;
					  }[];
			},
	  ];
// ----- ts/no-shadow -----
type TsNoShadow =
	| []
	| [
			{
				builtinGlobals?: boolean;
				hoist?: "all" | "functions" | "never";
				allow?: string[];
				ignoreOnInitialization?: boolean;
				ignoreTypeValueShadow?: boolean;
				ignoreFunctionTypeParameterNameValueShadow?: boolean;
			},
	  ];
// ----- ts/no-this-alias -----
type TsNoThisAlias =
	| []
	| [
			{
				allowDestructuring?: boolean;

				allowedNames?: string[];
			},
	  ];
// ----- ts/no-throw-literal -----
type TsNoThrowLiteral =
	| []
	| [
			{
				allowThrowingAny?: boolean;
				allowThrowingUnknown?: boolean;
			},
	  ];
// ----- ts/no-type-alias -----
type TsNoTypeAlias =
	| []
	| [
			{
				allowAliases?:
					| "always"
					| "never"
					| "in-unions"
					| "in-intersections"
					| "in-unions-and-intersections";

				allowCallbacks?: "always" | "never";

				allowConditionalTypes?: "always" | "never";

				allowConstructors?: "always" | "never";

				allowLiterals?:
					| "always"
					| "never"
					| "in-unions"
					| "in-intersections"
					| "in-unions-and-intersections";

				allowMappedTypes?:
					| "always"
					| "never"
					| "in-unions"
					| "in-intersections"
					| "in-unions-and-intersections";

				allowTupleTypes?:
					| "always"
					| "never"
					| "in-unions"
					| "in-intersections"
					| "in-unions-and-intersections";

				allowGenerics?: "always" | "never";
			},
	  ];
// ----- ts/no-unnecessary-boolean-literal-compare -----
type TsNoUnnecessaryBooleanLiteralCompare =
	| []
	| [
			{
				allowComparingNullableBooleansToTrue?: boolean;

				allowComparingNullableBooleansToFalse?: boolean;
			},
	  ];
// ----- ts/no-unnecessary-condition -----
type TsNoUnnecessaryCondition =
	| []
	| [
			{
				allowConstantLoopConditions?: boolean;

				allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
			},
	  ];
// ----- ts/no-unnecessary-type-assertion -----
type TsNoUnnecessaryTypeAssertion =
	| []
	| [
			{
				typesToIgnore?: string[];
			},
	  ];
// ----- ts/no-unused-expressions -----
type TsNoUnusedExpressions =
	| []
	| [
			{
				allowShortCircuit?: boolean;
				allowTernary?: boolean;
				allowTaggedTemplates?: boolean;
				enforceForJSX?: boolean;
			},
	  ];
// ----- ts/no-unused-vars -----
type TsNoUnusedVars =
	| []
	| [
			| ("all" | "local")
			| {
					vars?: "all" | "local";
					varsIgnorePattern?: string;
					args?: "all" | "after-used" | "none";
					ignoreRestSiblings?: boolean;
					argsIgnorePattern?: string;
					caughtErrors?: "all" | "none";
					caughtErrorsIgnorePattern?: string;
					destructuredArrayIgnorePattern?: string;
			  },
	  ];
// ----- ts/no-use-before-define -----
type TsNoUseBeforeDefine =
	| []
	| [
			| "nofunc"
			| {
					functions?: boolean;
					classes?: boolean;
					enums?: boolean;
					variables?: boolean;
					typedefs?: boolean;
					ignoreTypeReferences?: boolean;
					allowNamedExports?: boolean;
			  },
	  ];
// ----- ts/no-var-requires -----
type TsNoVarRequires =
	| []
	| [
			{
				allow?: string[];
			},
	  ];
// ----- ts/object-curly-spacing -----
type TsObjectCurlySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				arraysInObjects?: boolean;
				objectsInObjects?: boolean;
			},
	  ];
// ----- ts/only-throw-error -----
type TsOnlyThrowError =
	| []
	| [
			{
				allowThrowingAny?: boolean;
				allowThrowingUnknown?: boolean;
			},
	  ];
// ----- ts/padding-line-between-statements -----
type _TsPaddingLineBetweenStatementsPaddingType = "any" | "never" | "always";
type _TsPaddingLineBetweenStatementsStatementType =
	| (
			| "*"
			| "block-like"
			| "exports"
			| "require"
			| "directive"
			| "expression"
			| "iife"
			| "multiline-block-like"
			| "multiline-expression"
			| "multiline-const"
			| "multiline-let"
			| "multiline-var"
			| "singleline-const"
			| "singleline-let"
			| "singleline-var"
			| "block"
			| "empty"
			| "function"
			| "break"
			| "case"
			| "class"
			| "const"
			| "continue"
			| "debugger"
			| "default"
			| "do"
			| "export"
			| "for"
			| "if"
			| "import"
			| "let"
			| "return"
			| "switch"
			| "throw"
			| "try"
			| "var"
			| "while"
			| "with"
			| "interface"
			| "type"
	  )
	| [
			(
				| "*"
				| "block-like"
				| "exports"
				| "require"
				| "directive"
				| "expression"
				| "iife"
				| "multiline-block-like"
				| "multiline-expression"
				| "multiline-const"
				| "multiline-let"
				| "multiline-var"
				| "singleline-const"
				| "singleline-let"
				| "singleline-var"
				| "block"
				| "empty"
				| "function"
				| "break"
				| "case"
				| "class"
				| "const"
				| "continue"
				| "debugger"
				| "default"
				| "do"
				| "export"
				| "for"
				| "if"
				| "import"
				| "let"
				| "return"
				| "switch"
				| "throw"
				| "try"
				| "var"
				| "while"
				| "with"
				| "interface"
				| "type"
			),
			...(
				| "*"
				| "block-like"
				| "exports"
				| "require"
				| "directive"
				| "expression"
				| "iife"
				| "multiline-block-like"
				| "multiline-expression"
				| "multiline-const"
				| "multiline-let"
				| "multiline-var"
				| "singleline-const"
				| "singleline-let"
				| "singleline-var"
				| "block"
				| "empty"
				| "function"
				| "break"
				| "case"
				| "class"
				| "const"
				| "continue"
				| "debugger"
				| "default"
				| "do"
				| "export"
				| "for"
				| "if"
				| "import"
				| "let"
				| "return"
				| "switch"
				| "throw"
				| "try"
				| "var"
				| "while"
				| "with"
				| "interface"
				| "type"
			)[],
	  ];
type TsPaddingLineBetweenStatements = {
	blankLine: _TsPaddingLineBetweenStatementsPaddingType;
	prev: _TsPaddingLineBetweenStatementsStatementType;
	next: _TsPaddingLineBetweenStatementsStatementType;
}[];
// ----- ts/parameter-properties -----
type TsParameterProperties =
	| []
	| [
			{
				allow?: (
					| "readonly"
					| "private"
					| "protected"
					| "public"
					| "private readonly"
					| "protected readonly"
					| "public readonly"
				)[];
				prefer?: "class-property" | "parameter-property";
			},
	  ];
// ----- ts/prefer-destructuring -----
type TsPreferDestructuring =
	| []
	| [
			| {
					VariableDeclarator?: {
						array?: boolean;
						object?: boolean;
					};
					AssignmentExpression?: {
						array?: boolean;
						object?: boolean;
					};
			  }
			| {
					array?: boolean;
					object?: boolean;
			  },
	  ]
	| [
			(
				| {
						VariableDeclarator?: {
							array?: boolean;
							object?: boolean;
						};
						AssignmentExpression?: {
							array?: boolean;
							object?: boolean;
						};
				  }
				| {
						array?: boolean;
						object?: boolean;
				  }
			),
			{
				enforceForRenamedProperties?: boolean;
				enforceForDeclarationWithTypeAnnotation?: boolean;
				[k: string]: unknown | undefined;
			},
	  ];
// ----- ts/prefer-literal-enum-member -----
type TsPreferLiteralEnumMember =
	| []
	| [
			{
				allowBitwiseExpressions?: boolean;
			},
	  ];
// ----- ts/prefer-nullish-coalescing -----
type TsPreferNullishCoalescing =
	| []
	| [
			{
				allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
				ignoreConditionalTests?: boolean;
				ignoreMixedLogicalExpressions?: boolean;
				ignorePrimitives?:
					| {
							bigint?: boolean;
							boolean?: boolean;
							number?: boolean;
							string?: boolean;
							[k: string]: unknown | undefined;
					  }
					| true;
				ignoreTernaryTests?: boolean;
			},
	  ];
// ----- ts/prefer-optional-chain -----
type TsPreferOptionalChain =
	| []
	| [
			{
				checkAny?: boolean;

				checkUnknown?: boolean;

				checkString?: boolean;

				checkNumber?: boolean;

				checkBoolean?: boolean;

				checkBigInt?: boolean;

				requireNullish?: boolean;

				allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean;
			},
	  ];
// ----- ts/prefer-promise-reject-errors -----
type TsPreferPromiseRejectErrors =
	| []
	| [
			{
				allowEmptyReject?: boolean;
			},
	  ];
// ----- ts/prefer-readonly -----
type TsPreferReadonly =
	| []
	| [
			{
				onlyInlineLambdas?: boolean;
			},
	  ];
// ----- ts/prefer-readonly-parameter-types -----
type TsPreferReadonlyParameterTypes =
	| []
	| [
			{
				allow?: (
					| string
					| {
							from: "file";
							name: string | [string, ...string[]];
							path?: string;
					  }
					| {
							from: "lib";
							name: string | [string, ...string[]];
					  }
					| {
							from: "package";
							name: string | [string, ...string[]];
							package: string;
					  }
				)[];
				checkParameterProperties?: boolean;
				ignoreInferredTypes?: boolean;
				treatMethodsAsReadonly?: boolean;
			},
	  ];
// ----- ts/prefer-string-starts-ends-with -----
type TsPreferStringStartsEndsWith =
	| []
	| [
			{
				allowSingleElementEquality?: "always" | "never";
			},
	  ];
// ----- ts/promise-function-async -----
type TsPromiseFunctionAsync =
	| []
	| [
			{
				allowAny?: boolean;

				allowedPromiseNames?: string[];
				checkArrowFunctions?: boolean;
				checkFunctionDeclarations?: boolean;
				checkFunctionExpressions?: boolean;
				checkMethodDeclarations?: boolean;
			},
	  ];
// ----- ts/quotes -----
type TsQuotes =
	| []
	| ["single" | "double" | "backtick"]
	| [
			"single" | "double" | "backtick",
			(
				| "avoid-escape"
				| {
						avoidEscape?: boolean;
						allowTemplateLiterals?: boolean;
				  }
			),
	  ];
// ----- ts/require-array-sort-compare -----
type TsRequireArraySortCompare =
	| []
	| [
			{
				ignoreStringArrays?: boolean;
			},
	  ];
// ----- ts/restrict-plus-operands -----
type TsRestrictPlusOperands =
	| []
	| [
			{
				allowAny?: boolean;

				allowBoolean?: boolean;

				allowNullish?: boolean;

				allowNumberAndString?: boolean;

				allowRegExp?: boolean;

				skipCompoundAssignments?: boolean;
			},
	  ];
// ----- ts/restrict-template-expressions -----
type TsRestrictTemplateExpressions =
	| []
	| [
			{
				allowAny?: boolean;

				allowArray?: boolean;

				allowBoolean?: boolean;

				allowNullish?: boolean;

				allowNumber?: boolean;

				allowRegExp?: boolean;

				allowNever?: boolean;
			},
	  ];
// ----- ts/return-await -----
type TsReturnAwait = [] | ["in-try-catch" | "always" | "never"];
// ----- ts/semi -----
type TsSemi =
	| []
	| ["never"]
	| [
			"never",
			{
				beforeStatementContinuationChars?: "always" | "any" | "never";
			},
	  ]
	| []
	| ["always"]
	| [
			"always",
			{
				omitLastInOneLineBlock?: boolean;
				omitLastInOneLineClassBody?: boolean;
			},
	  ];
// ----- ts/sort-type-constituents -----
type TsSortTypeConstituents =
	| []
	| [
			{
				checkIntersections?: boolean;

				checkUnions?: boolean;

				caseSensitive?: boolean;

				groupOrder?: (
					| "conditional"
					| "function"
					| "import"
					| "intersection"
					| "keyword"
					| "nullish"
					| "literal"
					| "named"
					| "object"
					| "operator"
					| "tuple"
					| "union"
				)[];
			},
	  ];
// ----- ts/space-before-blocks -----
type TsSpaceBeforeBlocks =
	| []
	| [
			| ("always" | "never")
			| {
					keywords?: "always" | "never" | "off";
					functions?: "always" | "never" | "off";
					classes?: "always" | "never" | "off";
			  },
	  ];
// ----- ts/space-before-function-paren -----
type TsSpaceBeforeFunctionParen =
	| []
	| [
			| ("always" | "never")
			| {
					anonymous?: "always" | "never" | "ignore";
					named?: "always" | "never" | "ignore";
					asyncArrow?: "always" | "never" | "ignore";
			  },
	  ];
// ----- ts/space-infix-ops -----
type TsSpaceInfixOps =
	| []
	| [
			{
				int32Hint?: boolean;
			},
	  ];
// ----- ts/strict-boolean-expressions -----
type TsStrictBooleanExpressions =
	| []
	| [
			{
				allowString?: boolean;
				allowNumber?: boolean;
				allowNullableObject?: boolean;
				allowNullableBoolean?: boolean;
				allowNullableString?: boolean;
				allowNullableNumber?: boolean;
				allowNullableEnum?: boolean;
				allowAny?: boolean;
				allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
			},
	  ];
// ----- ts/switch-exhaustiveness-check -----
type TsSwitchExhaustivenessCheck =
	| []
	| [
			{
				allowDefaultCaseForExhaustiveSwitch?: boolean;

				requireDefaultForNonUnion?: boolean;
			},
	  ];
// ----- ts/triple-slash-reference -----
type TsTripleSlashReference =
	| []
	| [
			{
				lib?: "always" | "never";
				path?: "always" | "never";
				types?: "always" | "never" | "prefer-import";
			},
	  ];
// ----- ts/type-annotation-spacing -----
type TsTypeAnnotationSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
				overrides?: {
					colon?: _TsTypeAnnotationSpacing_SpacingConfig;
					arrow?: _TsTypeAnnotationSpacing_SpacingConfig;
					variable?: _TsTypeAnnotationSpacing_SpacingConfig;
					parameter?: _TsTypeAnnotationSpacing_SpacingConfig;
					property?: _TsTypeAnnotationSpacing_SpacingConfig;
					returnType?: _TsTypeAnnotationSpacing_SpacingConfig;
				};
			},
	  ];
interface _TsTypeAnnotationSpacing_SpacingConfig {
	before?: boolean;
	after?: boolean;
}
// ----- ts/typedef -----
type TsTypedef =
	| []
	| [
			{
				arrayDestructuring?: boolean;
				arrowParameter?: boolean;
				memberVariableDeclaration?: boolean;
				objectDestructuring?: boolean;
				parameter?: boolean;
				propertyDeclaration?: boolean;
				variableDeclaration?: boolean;
				variableDeclarationIgnoreFunction?: boolean;
			},
	  ];
// ----- ts/unbound-method -----
type TsUnboundMethod =
	| []
	| [
			{
				ignoreStatic?: boolean;
			},
	  ];
// ----- ts/unified-signatures -----
type TsUnifiedSignatures =
	| []
	| [
			{
				ignoreDifferentlyNamedParameters?: boolean;
			},
	  ];
// ----- unicode-bom -----
type UnicodeBom = [] | ["always" | "never"];
// ----- unicorn/better-regex -----
type UnicornBetterRegex =
	| []
	| [
			{
				sortCharacterClasses?: boolean;
			},
	  ];
// ----- unicorn/catch-error-name -----
type UnicornCatchErrorName =
	| []
	| [
			{
				name?: string;
				ignore?: unknown[];
			},
	  ];
// ----- unicorn/consistent-function-scoping -----
type UnicornConsistentFunctionScoping =
	| []
	| [
			{
				checkArrowFunctions?: boolean;
			},
	  ];
// ----- unicorn/expiring-todo-comments -----
type UnicornExpiringTodoComments =
	| []
	| [
			{
				terms?: string[];
				ignore?: unknown[];
				ignoreDatesOnPullRequests?: boolean;
				allowWarningComments?: boolean;
				date?: string;
			},
	  ];
// ----- unicorn/explicit-length-check -----
type UnicornExplicitLengthCheck =
	| []
	| [
			{
				"non-zero"?: "greater-than" | "not-equal";
			},
	  ];
// ----- unicorn/filename-case -----
type UnicornFilenameCase =
	| []
	| [
			| {
					case?: "camelCase" | "snakeCase" | "kebabCase" | "pascalCase";
					ignore?: unknown[];
					multipleFileExtensions?: boolean;
			  }
			| {
					cases?: {
						camelCase?: boolean;
						snakeCase?: boolean;
						kebabCase?: boolean;
						pascalCase?: boolean;
					};
					ignore?: unknown[];
					multipleFileExtensions?: boolean;
			  },
	  ];
// ----- unicorn/import-style -----
type UnicornImportStyle =
	| []
	| [
			{
				checkImport?: boolean;
				checkDynamicImport?: boolean;
				checkExportFrom?: boolean;
				checkRequire?: boolean;
				extendDefaultStyles?: boolean;
				styles?: _UnicornImportStyle_ModuleStyles;
			},
	  ];
type _UnicornImportStyleStyles =
	| (false | _UnicornImportStyle_BooleanObject)
	| undefined;
interface _UnicornImportStyle_ModuleStyles {
	[k: string]: _UnicornImportStyleStyles | undefined;
}
interface _UnicornImportStyle_BooleanObject {
	[k: string]: boolean | undefined;
}
// ----- unicorn/no-array-push-push -----
type UnicornNoArrayPushPush =
	| []
	| [
			{
				ignore?: unknown[];
			},
	  ];
// ----- unicorn/no-array-reduce -----
type UnicornNoArrayReduce =
	| []
	| [
			{
				allowSimpleOperations?: boolean;
			},
	  ];
// ----- unicorn/no-keyword-prefix -----
type UnicornNoKeywordPrefix =
	| []
	| [
			{
				disallowedPrefixes?: [] | [string];
				checkProperties?: boolean;
				onlyCamelCase?: boolean;
			},
	  ];
// ----- unicorn/no-null -----
type UnicornNoNull =
	| []
	| [
			{
				checkStrictEquality?: boolean;
			},
	  ];
// ----- unicorn/no-typeof-undefined -----
type UnicornNoTypeofUndefined =
	| []
	| [
			{
				checkGlobalVariables?: boolean;
			},
	  ];
// ----- unicorn/no-unnecessary-polyfills -----
type UnicornNoUnnecessaryPolyfills =
	| []
	| [
			{
				targets:
					| string
					| unknown[]
					| {
							[k: string]: unknown | undefined;
					  };
			},
	  ];
// ----- unicorn/no-useless-undefined -----
type UnicornNoUselessUndefined =
	| []
	| [
			{
				checkArguments?: boolean;
				checkArrowFunctionBody?: boolean;
			},
	  ];
// ----- unicorn/numeric-separators-style -----
type UnicornNumericSeparatorsStyle =
	| []
	| [
			{
				binary?: {
					onlyIfContainsSeparator?: boolean;
					minimumDigits?: number;
					groupLength?: number;
				};
				octal?: {
					onlyIfContainsSeparator?: boolean;
					minimumDigits?: number;
					groupLength?: number;
				};
				hexadecimal?: {
					onlyIfContainsSeparator?: boolean;
					minimumDigits?: number;
					groupLength?: number;
				};
				number?: {
					onlyIfContainsSeparator?: boolean;
					minimumDigits?: number;
					groupLength?: number;
				};
				onlyIfContainsSeparator?: boolean;
			},
	  ];
// ----- unicorn/prefer-add-event-listener -----
type UnicornPreferAddEventListener =
	| []
	| [
			{
				excludedPackages?: string[];
			},
	  ];
// ----- unicorn/prefer-array-find -----
type UnicornPreferArrayFind =
	| []
	| [
			{
				checkFromLast?: boolean;
			},
	  ];
// ----- unicorn/prefer-array-flat -----
type UnicornPreferArrayFlat =
	| []
	| [
			{
				functions?: unknown[];
			},
	  ];
// ----- unicorn/prefer-at -----
type UnicornPreferAt =
	| []
	| [
			{
				getLastElementFunctions?: unknown[];
				checkAllIndexAccess?: boolean;
			},
	  ];
// ----- unicorn/prefer-export-from -----
type UnicornPreferExportFrom =
	| []
	| [
			{
				ignoreUsedVariables?: boolean;
			},
	  ];
// ----- unicorn/prefer-number-properties -----
type UnicornPreferNumberProperties =
	| []
	| [
			{
				checkInfinity?: boolean;
				checkNaN?: boolean;
			},
	  ];
// ----- unicorn/prefer-object-from-entries -----
type UnicornPreferObjectFromEntries =
	| []
	| [
			{
				functions?: unknown[];
			},
	  ];
// ----- unicorn/prefer-structured-clone -----
type UnicornPreferStructuredClone =
	| []
	| [
			{
				functions?: unknown[];
			},
	  ];
// ----- unicorn/prefer-switch -----
type UnicornPreferSwitch =
	| []
	| [
			{
				minimumCases?: number;
				emptyDefaultCase?:
					| "no-default-comment"
					| "do-nothing-comment"
					| "no-default-case";
			},
	  ];
// ----- unicorn/prefer-ternary -----
type UnicornPreferTernary = [] | ["always" | "only-single-line"];
// ----- unicorn/prevent-abbreviations -----
type UnicornPreventAbbreviations =
	| []
	| [
			{
				checkProperties?: boolean;
				checkVariables?: boolean;
				checkDefaultAndNamespaceImports?: boolean | string;
				checkShorthandImports?: boolean | string;
				checkShorthandProperties?: boolean;
				checkFilenames?: boolean;
				extendDefaultReplacements?: boolean;
				replacements?: _UnicornPreventAbbreviations_Abbreviations;
				extendDefaultAllowList?: boolean;
				allowList?: _UnicornPreventAbbreviations_BooleanObject;
				ignore?: unknown[];
			},
	  ];
type _UnicornPreventAbbreviationsReplacements =
	| (false | _UnicornPreventAbbreviations_BooleanObject)
	| undefined;
interface _UnicornPreventAbbreviations_Abbreviations {
	[k: string]: _UnicornPreventAbbreviationsReplacements | undefined;
}
interface _UnicornPreventAbbreviations_BooleanObject {
	[k: string]: boolean | undefined;
}
// ----- unicorn/relative-url-style -----
type UnicornRelativeUrlStyle = [] | ["never" | "always"];
// ----- unicorn/string-content -----
type UnicornStringContent =
	| []
	| [
			{
				patterns?: {
					[k: string]:
						| (
								| string
								| {
										suggest: string;
										fix?: boolean;
										message?: string;
								  }
						  )
						| undefined;
				};
			},
	  ];
// ----- unicorn/switch-case-braces -----
type UnicornSwitchCaseBraces = [] | ["always" | "avoid"];
// ----- unicorn/template-indent -----
type UnicornTemplateIndent =
	| []
	| [
			{
				indent?: string | number;
				tags?: string[];
				functions?: string[];
				selectors?: string[];
				comments?: string[];
			},
	  ];
// ----- unused-imports/no-unused-imports -----
type UnusedImportsNoUnusedImports =
	| []
	| [
			| ("all" | "local")
			| {
					vars?: "all" | "local";
					varsIgnorePattern?: string;
					args?: "all" | "after-used" | "none";
					ignoreRestSiblings?: boolean;
					argsIgnorePattern?: string;
					caughtErrors?: "all" | "none";
					caughtErrorsIgnorePattern?: string;
					destructuredArrayIgnorePattern?: string;
			  },
	  ];
// ----- unused-imports/no-unused-vars -----
type UnusedImportsNoUnusedVars =
	| []
	| [
			| ("all" | "local")
			| {
					vars?: "all" | "local";
					varsIgnorePattern?: string;
					args?: "all" | "after-used" | "none";
					ignoreRestSiblings?: boolean;
					argsIgnorePattern?: string;
					caughtErrors?: "all" | "none";
					caughtErrorsIgnorePattern?: string;
					destructuredArrayIgnorePattern?: string;
			  },
	  ];
// ----- use-isnan -----
type UseIsnan =
	| []
	| [
			{
				enforceForSwitchCase?: boolean;
				enforceForIndexOf?: boolean;
			},
	  ];
// ----- valid-typeof -----
type ValidTypeof =
	| []
	| [
			{
				requireStringLiterals?: boolean;
			},
	  ];
// ----- vitest/consistent-test-filename -----
type VitestConsistentTestFilename =
	| []
	| [
			{
				pattern?: string;
				allTestPattern?: string;
			},
	  ];
// ----- vitest/consistent-test-it -----
type VitestConsistentTestIt =
	| []
	| [
			{
				fn?: "test" | "it";
				withinDescribe?: "test" | "it";
			},
	  ];
// ----- vitest/expect-expect -----
type VitestExpectExpect =
	| []
	| [
			{
				assertFunctionNames?: [] | [string];
				additionalTestBlockFunctions?: string[];
			},
	  ];
// ----- vitest/max-expects -----
type VitestMaxExpects =
	| []
	| [
			{
				max?: number;
			},
	  ];
// ----- vitest/max-nested-describe -----
type VitestMaxNestedDescribe =
	| []
	| [
			{
				max?: number;
			},
	  ];
// ----- vitest/no-focused-tests -----
type VitestNoFocusedTests =
	| []
	| [
			{
				fixable?: boolean;
			},
	  ];
// ----- vitest/no-hooks -----
type VitestNoHooks =
	| []
	| [
			{
				allow?: unknown[];
			},
	  ];
// ----- vitest/no-large-snapshots -----
type VitestNoLargeSnapshots =
	| []
	| [
			{
				maxSize?: number;
				inlineMaxSize?: number;
				allowedSnapshots?: {
					[k: string]: unknown[] | undefined;
				};
			},
	  ];
// ----- vitest/no-restricted-matchers -----
type VitestNoRestrictedMatchers =
	| []
	| [
			{
				[k: string]: (string | null) | undefined;
			},
	  ];
// ----- vitest/no-restricted-vi-methods -----
type VitestNoRestrictedViMethods =
	| []
	| [
			{
				[k: string]: (string | null) | undefined;
			},
	  ];
// ----- vitest/no-standalone-expect -----
type VitestNoStandaloneExpect =
	| []
	| [
			{
				additionalTestBlockFunctions?: string[];
			},
	  ];
// ----- vitest/prefer-expect-assertions -----
type VitestPreferExpectAssertions =
	| []
	| [
			{
				onlyFunctionsWithAsyncKeyword?: boolean;
				onlyFunctionsWithExpectInLoop?: boolean;
				onlyFunctionsWithExpectInCallback?: boolean;
			},
	  ];
// ----- vitest/prefer-lowercase-title -----
type VitestPreferLowercaseTitle =
	| []
	| [
			{
				ignore?: ("describe" | "test" | "it")[];
				allowedPrefixes?: string[];
				ignoreTopLevelDescribe?: boolean;
				lowercaseFirstCharacterOnly?: boolean;
			},
	  ];
// ----- vitest/prefer-snapshot-hint -----
type VitestPreferSnapshotHint = [] | ["always" | "multi"];
// ----- vitest/require-hook -----
type VitestRequireHook =
	| []
	| [
			{
				allowedFunctionCalls?: string[];
			},
	  ];
// ----- vitest/require-top-level-describe -----
type VitestRequireTopLevelDescribe =
	| []
	| [
			{
				maxNumberOfTopLevelDescribes?: number;
			},
	  ];
// ----- vitest/valid-expect -----
type VitestValidExpect =
	| []
	| [
			{
				alwaysAwait?: boolean;
				asyncMatchers?: string[];
				minArgs?: number;
				maxArgs?: number;
			},
	  ];
// ----- vitest/valid-title -----
type VitestValidTitle =
	| []
	| [
			{
				ignoreTypeOfDescribeName?: boolean;
				allowArguments?: boolean;
				disallowedWords?: string[];
				[k: string]:
					| string
					| [string]
					| [string, string]
					| {
							[k: string]: (string | [string] | [string, string]) | undefined;
					  };
			},
	  ];
// ----- vue/array-bracket-newline -----
type VueArrayBracketNewline =
	| []
	| [
			| ("always" | "never" | "consistent")
			| {
					multiline?: boolean;
					minItems?: number | null;
			  },
	  ];
// ----- vue/array-bracket-spacing -----
type VueArrayBracketSpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				singleValue?: boolean;
				objectsInArrays?: boolean;
				arraysInArrays?: boolean;
			},
	  ];
// ----- vue/array-element-newline -----
type VueArrayElementNewline =
	| []
	| [
			| _VueArrayElementNewlineBasicConfig
			| {
					ArrayExpression?: _VueArrayElementNewlineBasicConfig;
					ArrayPattern?: _VueArrayElementNewlineBasicConfig;
			  },
	  ];
type _VueArrayElementNewlineBasicConfig =
	| ("always" | "never" | "consistent")
	| {
			multiline?: boolean;
			minItems?: number | null;
	  };
// ----- vue/arrow-spacing -----
type VueArrowSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- vue/attribute-hyphenation -----
type VueAttributeHyphenation =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				ignore?: (string & {
					[k: string]: unknown | undefined;
				} & {
					[k: string]: unknown | undefined;
				})[];
			},
	  ];
// ----- vue/attributes-order -----
type VueAttributesOrder =
	| []
	| [
			{
				order?: (
					| (
							| "DEFINITION"
							| "LIST_RENDERING"
							| "CONDITIONALS"
							| "RENDER_MODIFIERS"
							| "GLOBAL"
							| "UNIQUE"
							| "SLOT"
							| "TWO_WAY_BINDING"
							| "OTHER_DIRECTIVES"
							| "OTHER_ATTR"
							| "ATTR_STATIC"
							| "ATTR_DYNAMIC"
							| "ATTR_SHORTHAND_BOOL"
							| "EVENTS"
							| "CONTENT"
					  )
					| (
							| "DEFINITION"
							| "LIST_RENDERING"
							| "CONDITIONALS"
							| "RENDER_MODIFIERS"
							| "GLOBAL"
							| "UNIQUE"
							| "SLOT"
							| "TWO_WAY_BINDING"
							| "OTHER_DIRECTIVES"
							| "OTHER_ATTR"
							| "ATTR_STATIC"
							| "ATTR_DYNAMIC"
							| "ATTR_SHORTHAND_BOOL"
							| "EVENTS"
							| "CONTENT"
					  )[]
				)[];
				alphabetical?: boolean;
			},
	  ];
// ----- vue/block-lang -----
type VueBlockLang =
	| []
	| [
			{
				[k: string]: {
					lang?: string | string[];
					allowNoLang?: boolean;
				};
			},
	  ];
// ----- vue/block-order -----
type VueBlockOrder =
	| []
	| [
			{
				order?: (string | string[])[];
			},
	  ];
// ----- vue/block-spacing -----
type VueBlockSpacing = [] | ["always" | "never"];
// ----- vue/block-tag-newline -----
type VueBlockTagNewline =
	| []
	| [
			{
				singleline?: "always" | "never" | "consistent" | "ignore";
				multiline?: "always" | "never" | "consistent" | "ignore";
				maxEmptyLines?: number;
				blocks?: {
					[k: string]: {
						singleline?: "always" | "never" | "consistent" | "ignore";
						multiline?: "always" | "never" | "consistent" | "ignore";
						maxEmptyLines?: number;
					};
				};
			},
	  ];
// ----- vue/brace-style -----
type VueBraceStyle =
	| []
	| ["1tbs" | "stroustrup" | "allman"]
	| [
			"1tbs" | "stroustrup" | "allman",
			{
				allowSingleLine?: boolean;
			},
	  ];
// ----- vue/camelcase -----
type VueCamelcase =
	| []
	| [
			{
				ignoreDestructuring?: boolean;
				ignoreImports?: boolean;
				ignoreGlobals?: boolean;
				properties?: "always" | "never";

				allow?: string[];
			},
	  ];
// ----- vue/comma-dangle -----
type VueCommaDangle =
	| []
	| [
			| _VueCommaDangleValue
			| {
					arrays?: _VueCommaDangleValueWithIgnore;
					objects?: _VueCommaDangleValueWithIgnore;
					imports?: _VueCommaDangleValueWithIgnore;
					exports?: _VueCommaDangleValueWithIgnore;
					functions?: _VueCommaDangleValueWithIgnore;
					enums?: _VueCommaDangleValueWithIgnore;
					generics?: _VueCommaDangleValueWithIgnore;
					tuples?: _VueCommaDangleValueWithIgnore;
			  },
	  ];
type _VueCommaDangleValue =
	| "always-multiline"
	| "always"
	| "never"
	| "only-multiline";
type _VueCommaDangleValueWithIgnore =
	| "always-multiline"
	| "always"
	| "never"
	| "only-multiline"
	| "ignore";
// ----- vue/comma-spacing -----
type VueCommaSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
			},
	  ];
// ----- vue/comma-style -----
type VueCommaStyle =
	| []
	| ["first" | "last"]
	| [
			"first" | "last",
			{
				exceptions?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- vue/comment-directive -----
type VueCommentDirective =
	| []
	| [
			{
				reportUnusedDisableDirectives?: boolean;
			},
	  ];
// ----- vue/component-api-style -----
type VueComponentApiStyle =
	| []
	| [
			[
				"script-setup" | "composition" | "composition-vue2" | "options",
				...("script-setup" | "composition" | "composition-vue2" | "options")[],
			],
	  ];
// ----- vue/component-definition-name-casing -----
type VueComponentDefinitionNameCasing = [] | ["PascalCase" | "kebab-case"];
// ----- vue/component-name-in-template-casing -----
type VueComponentNameInTemplateCasing =
	| []
	| ["PascalCase" | "kebab-case"]
	| [
			"PascalCase" | "kebab-case",
			{
				globals?: string[];
				ignores?: string[];
				registeredComponentsOnly?: boolean;
			},
	  ];
// ----- vue/component-options-name-casing -----
type VueComponentOptionsNameCasing =
	| []
	| ["camelCase" | "kebab-case" | "PascalCase"];
// ----- vue/component-tags-order -----
type VueComponentTagsOrder =
	| []
	| [
			{
				order?: (string | string[])[];
			},
	  ];
// ----- vue/custom-event-name-casing -----
type VueCustomEventNameCasing =
	| []
	| ["kebab-case" | "camelCase"]
	| [
			"kebab-case" | "camelCase",
			{
				ignores?: string[];
			},
	  ]
	| []
	| [
			{
				ignores?: string[];
			},
	  ];
// ----- vue/define-emits-declaration -----
type VueDefineEmitsDeclaration =
	| []
	| ["type-based" | "type-literal" | "runtime"];
// ----- vue/define-macros-order -----
type VueDefineMacrosOrder =
	| []
	| [
			{
				order?: (
					| "defineEmits"
					| "defineProps"
					| "defineOptions"
					| "defineSlots"
					| "defineModel"
				)[];
				defineExposeLast?: boolean;
			},
	  ];
// ----- vue/define-props-declaration -----
type VueDefinePropsDeclaration = [] | ["type-based" | "runtime"];
// ----- vue/dot-location -----
type VueDotLocation = [] | ["object" | "property"];
// ----- vue/dot-notation -----
type VueDotNotation =
	| []
	| [
			{
				allowKeywords?: boolean;
				allowPattern?: string;
			},
	  ];
// ----- vue/enforce-style-attribute -----
type VueEnforceStyleAttribute =
	| []
	| [
			{
				allow?: [
					"plain" | "scoped" | "module",
					...("plain" | "scoped" | "module")[],
				];
			},
	  ];
// ----- vue/eqeqeq -----
type VueEqeqeq =
	| []
	| ["always"]
	| [
			"always",
			{
				null?: "always" | "never" | "ignore";
			},
	  ]
	| []
	| ["smart" | "allow-null"];
// ----- vue/first-attribute-linebreak -----
type VueFirstAttributeLinebreak =
	| []
	| [
			{
				multiline?: "below" | "beside" | "ignore";
				singleline?: "below" | "beside" | "ignore";
			},
	  ];
// ----- vue/func-call-spacing -----
type VueFuncCallSpacing =
	| []
	| ["never"]
	| []
	| ["always"]
	| [
			"always",
			{
				allowNewlines?: boolean;
			},
	  ];
// ----- vue/html-button-has-type -----
type VueHtmlButtonHasType =
	| []
	| [
			{
				button?: boolean;
				submit?: boolean;
				reset?: boolean;
			},
	  ];
// ----- vue/html-closing-bracket-newline -----
type VueHtmlClosingBracketNewline =
	| []
	| [
			{
				singleline?: "always" | "never";
				multiline?: "always" | "never";
				selfClosingTag?: {
					singleline?: "always" | "never";
					multiline?: "always" | "never";
				};
			},
	  ];
// ----- vue/html-closing-bracket-spacing -----
type VueHtmlClosingBracketSpacing =
	| []
	| [
			{
				startTag?: "always" | "never";
				endTag?: "always" | "never";
				selfClosingTag?: "always" | "never";
			},
	  ];
// ----- vue/html-comment-content-newline -----
type VueHtmlCommentContentNewline =
	| []
	| [
			| ("always" | "never")
			| {
					singleline?: "always" | "never" | "ignore";
					multiline?: "always" | "never" | "ignore";
			  },
	  ]
	| [
			(
				| ("always" | "never")
				| {
						singleline?: "always" | "never" | "ignore";
						multiline?: "always" | "never" | "ignore";
				  }
			),
			{
				exceptions?: string[];
			},
	  ];
// ----- vue/html-comment-content-spacing -----
type VueHtmlCommentContentSpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptions?: string[];
			},
	  ];
// ----- vue/html-comment-indent -----
type VueHtmlCommentIndent = [] | [number | "tab"];
// ----- vue/html-indent -----
type VueHtmlIndent =
	| []
	| [number | "tab"]
	| [
			number | "tab",
			{
				attribute?: number;
				baseIndent?: number;
				closeBracket?:
					| number
					| {
							startTag?: number;
							endTag?: number;
							selfClosingTag?: number;
					  };
				switchCase?: number;
				alignAttributesVertically?: boolean;
				ignores?: (string & {
					[k: string]: unknown | undefined;
				} & {
					[k: string]: unknown | undefined;
				})[];
			},
	  ];
// ----- vue/html-quotes -----
type VueHtmlQuotes =
	| []
	| ["double" | "single"]
	| [
			"double" | "single",
			{
				avoidEscape?: boolean;
			},
	  ];
// ----- vue/html-self-closing -----
type VueHtmlSelfClosing =
	| []
	| [
			{
				html?: {
					normal?: _VueHtmlSelfClosingOptionValue;
					void?: _VueHtmlSelfClosingOptionValue;
					component?: _VueHtmlSelfClosingOptionValue;
				};
				svg?: _VueHtmlSelfClosingOptionValue;
				math?: _VueHtmlSelfClosingOptionValue;
			},
	  ];
type _VueHtmlSelfClosingOptionValue = "always" | "never" | "any";
// ----- vue/key-spacing -----
type VueKeySpacing =
	| []
	| [
			| {
					align?:
						| ("colon" | "value")
						| {
								mode?: "strict" | "minimum";
								on?: "colon" | "value";
								beforeColon?: boolean;
								afterColon?: boolean;
						  };
					mode?: "strict" | "minimum";
					beforeColon?: boolean;
					afterColon?: boolean;
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						align?:
							| ("colon" | "value")
							| {
									mode?: "strict" | "minimum";
									on?: "colon" | "value";
									beforeColon?: boolean;
									afterColon?: boolean;
							  };
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					align?: {
						mode?: "strict" | "minimum";
						on?: "colon" | "value";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  },
	  ];
// ----- vue/keyword-spacing -----
type VueKeywordSpacing =
	| []
	| [
			{
				before?: boolean;
				after?: boolean;
				overrides?: {
					abstract?: {
						before?: boolean;
						after?: boolean;
					};
					as?: {
						before?: boolean;
						after?: boolean;
					};
					async?: {
						before?: boolean;
						after?: boolean;
					};
					await?: {
						before?: boolean;
						after?: boolean;
					};
					boolean?: {
						before?: boolean;
						after?: boolean;
					};
					break?: {
						before?: boolean;
						after?: boolean;
					};
					byte?: {
						before?: boolean;
						after?: boolean;
					};
					case?: {
						before?: boolean;
						after?: boolean;
					};
					catch?: {
						before?: boolean;
						after?: boolean;
					};
					char?: {
						before?: boolean;
						after?: boolean;
					};
					class?: {
						before?: boolean;
						after?: boolean;
					};
					const?: {
						before?: boolean;
						after?: boolean;
					};
					continue?: {
						before?: boolean;
						after?: boolean;
					};
					debugger?: {
						before?: boolean;
						after?: boolean;
					};
					default?: {
						before?: boolean;
						after?: boolean;
					};
					delete?: {
						before?: boolean;
						after?: boolean;
					};
					do?: {
						before?: boolean;
						after?: boolean;
					};
					double?: {
						before?: boolean;
						after?: boolean;
					};
					else?: {
						before?: boolean;
						after?: boolean;
					};
					enum?: {
						before?: boolean;
						after?: boolean;
					};
					export?: {
						before?: boolean;
						after?: boolean;
					};
					extends?: {
						before?: boolean;
						after?: boolean;
					};
					false?: {
						before?: boolean;
						after?: boolean;
					};
					final?: {
						before?: boolean;
						after?: boolean;
					};
					finally?: {
						before?: boolean;
						after?: boolean;
					};
					float?: {
						before?: boolean;
						after?: boolean;
					};
					for?: {
						before?: boolean;
						after?: boolean;
					};
					from?: {
						before?: boolean;
						after?: boolean;
					};
					function?: {
						before?: boolean;
						after?: boolean;
					};
					get?: {
						before?: boolean;
						after?: boolean;
					};
					goto?: {
						before?: boolean;
						after?: boolean;
					};
					if?: {
						before?: boolean;
						after?: boolean;
					};
					implements?: {
						before?: boolean;
						after?: boolean;
					};
					import?: {
						before?: boolean;
						after?: boolean;
					};
					in?: {
						before?: boolean;
						after?: boolean;
					};
					instanceof?: {
						before?: boolean;
						after?: boolean;
					};
					int?: {
						before?: boolean;
						after?: boolean;
					};
					interface?: {
						before?: boolean;
						after?: boolean;
					};
					let?: {
						before?: boolean;
						after?: boolean;
					};
					long?: {
						before?: boolean;
						after?: boolean;
					};
					native?: {
						before?: boolean;
						after?: boolean;
					};
					new?: {
						before?: boolean;
						after?: boolean;
					};
					null?: {
						before?: boolean;
						after?: boolean;
					};
					of?: {
						before?: boolean;
						after?: boolean;
					};
					package?: {
						before?: boolean;
						after?: boolean;
					};
					private?: {
						before?: boolean;
						after?: boolean;
					};
					protected?: {
						before?: boolean;
						after?: boolean;
					};
					public?: {
						before?: boolean;
						after?: boolean;
					};
					return?: {
						before?: boolean;
						after?: boolean;
					};
					set?: {
						before?: boolean;
						after?: boolean;
					};
					short?: {
						before?: boolean;
						after?: boolean;
					};
					static?: {
						before?: boolean;
						after?: boolean;
					};
					super?: {
						before?: boolean;
						after?: boolean;
					};
					switch?: {
						before?: boolean;
						after?: boolean;
					};
					synchronized?: {
						before?: boolean;
						after?: boolean;
					};
					this?: {
						before?: boolean;
						after?: boolean;
					};
					throw?: {
						before?: boolean;
						after?: boolean;
					};
					throws?: {
						before?: boolean;
						after?: boolean;
					};
					transient?: {
						before?: boolean;
						after?: boolean;
					};
					true?: {
						before?: boolean;
						after?: boolean;
					};
					try?: {
						before?: boolean;
						after?: boolean;
					};
					typeof?: {
						before?: boolean;
						after?: boolean;
					};
					var?: {
						before?: boolean;
						after?: boolean;
					};
					void?: {
						before?: boolean;
						after?: boolean;
					};
					volatile?: {
						before?: boolean;
						after?: boolean;
					};
					while?: {
						before?: boolean;
						after?: boolean;
					};
					with?: {
						before?: boolean;
						after?: boolean;
					};
					yield?: {
						before?: boolean;
						after?: boolean;
					};
					type?: {
						before?: boolean;
						after?: boolean;
					};
				};
			},
	  ];
// ----- vue/match-component-file-name -----
type VueMatchComponentFileName =
	| []
	| [
			{
				extensions?: string[];
				shouldMatchCase?: boolean;
			},
	  ];
// ----- vue/max-attributes-per-line -----
type VueMaxAttributesPerLine =
	| []
	| [
			{
				singleline?:
					| number
					| {
							max?: number;
					  };
				multiline?:
					| number
					| {
							max?: number;
					  };
			},
	  ];
// ----- vue/max-len -----
type VueMaxLen =
	| []
	| [
			| {
					code?: number;
					template?: number;
					comments?: number;
					tabWidth?: number;
					ignorePattern?: string;
					ignoreComments?: boolean;
					ignoreTrailingComments?: boolean;
					ignoreUrls?: boolean;
					ignoreStrings?: boolean;
					ignoreTemplateLiterals?: boolean;
					ignoreRegExpLiterals?: boolean;
					ignoreHTMLAttributeValues?: boolean;
					ignoreHTMLTextContents?: boolean;
			  }
			| number,
	  ]
	| [
			(
				| {
						code?: number;
						template?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreTrailingComments?: boolean;
						ignoreUrls?: boolean;
						ignoreStrings?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreHTMLAttributeValues?: boolean;
						ignoreHTMLTextContents?: boolean;
				  }
				| number
			),
			(
				| {
						code?: number;
						template?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreTrailingComments?: boolean;
						ignoreUrls?: boolean;
						ignoreStrings?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreHTMLAttributeValues?: boolean;
						ignoreHTMLTextContents?: boolean;
				  }
				| number
			),
	  ]
	| [
			(
				| {
						code?: number;
						template?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreTrailingComments?: boolean;
						ignoreUrls?: boolean;
						ignoreStrings?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreHTMLAttributeValues?: boolean;
						ignoreHTMLTextContents?: boolean;
				  }
				| number
			),
			(
				| {
						code?: number;
						template?: number;
						comments?: number;
						tabWidth?: number;
						ignorePattern?: string;
						ignoreComments?: boolean;
						ignoreTrailingComments?: boolean;
						ignoreUrls?: boolean;
						ignoreStrings?: boolean;
						ignoreTemplateLiterals?: boolean;
						ignoreRegExpLiterals?: boolean;
						ignoreHTMLAttributeValues?: boolean;
						ignoreHTMLTextContents?: boolean;
				  }
				| number
			),
			{
				code?: number;
				template?: number;
				comments?: number;
				tabWidth?: number;
				ignorePattern?: string;
				ignoreComments?: boolean;
				ignoreTrailingComments?: boolean;
				ignoreUrls?: boolean;
				ignoreStrings?: boolean;
				ignoreTemplateLiterals?: boolean;
				ignoreRegExpLiterals?: boolean;
				ignoreHTMLAttributeValues?: boolean;
				ignoreHTMLTextContents?: boolean;
			},
	  ];
// ----- vue/max-lines-per-block -----
type VueMaxLinesPerBlock =
	| []
	| [
			{
				style?: number;
				template?: number;
				script?: number;
				skipBlankLines?: boolean;
			},
	  ];
// ----- vue/multi-word-component-names -----
type VueMultiWordComponentNames =
	| []
	| [
			{
				ignores?: string[];
			},
	  ];
// ----- vue/multiline-html-element-content-newline -----
type VueMultilineHtmlElementContentNewline =
	| []
	| [
			{
				ignoreWhenEmpty?: boolean;
				ignores?: string[];
				allowEmptyLines?: boolean;
			},
	  ];
// ----- vue/multiline-ternary -----
type VueMultilineTernary =
	| []
	| ["always" | "always-multiline" | "never"]
	| [
			"always" | "always-multiline" | "never",
			{
				ignoreJSX?: boolean;
				[k: string]: unknown | undefined;
			},
	  ];
// ----- vue/mustache-interpolation-spacing -----
type VueMustacheInterpolationSpacing = [] | ["always" | "never"];
// ----- vue/new-line-between-multi-line-property -----
type VueNewLineBetweenMultiLineProperty =
	| []
	| [
			{
				minLineOfMultilineProperty?: number;
			},
	  ];
// ----- vue/next-tick-style -----
type VueNextTickStyle = [] | ["promise" | "callback"];
// ----- vue/no-bare-strings-in-template -----
type VueNoBareStringsInTemplate =
	| []
	| [
			{
				allowlist?: string[];
				attributes?: {
					[k: string]: string[];
				};
				directives?: string[];
			},
	  ];
// ----- vue/no-boolean-default -----
type VueNoBooleanDefault = [] | ["default-false" | "no-default"];
// ----- vue/no-child-content -----
type VueNoChildContent =
	| []
	| [
			{
				additionalDirectives: [string, ...string[]];
			},
	  ];
// ----- vue/no-console -----
type VueNoConsole =
	| []
	| [
			{
				allow?: [string, ...string[]];
			},
	  ];
// ----- vue/no-constant-condition -----
type VueNoConstantCondition =
	| []
	| [
			{
				checkLoops?: "all" | "allExceptWhileTrue" | "none" | true | false;
			},
	  ];
// ----- vue/no-deprecated-model-definition -----
type VueNoDeprecatedModelDefinition =
	| []
	| [
			{
				allowVue3Compat?: boolean;
			},
	  ];
// ----- vue/no-deprecated-router-link-tag-prop -----
type VueNoDeprecatedRouterLinkTagProp =
	| []
	| [
			{
				components?: [string, ...string[]];
			},
	  ];
// ----- vue/no-deprecated-slot-attribute -----
type VueNoDeprecatedSlotAttribute =
	| []
	| [
			{
				ignore?: string[];
			},
	  ];
// ----- vue/no-dupe-keys -----
type VueNoDupeKeys =
	| []
	| [
			{
				groups?: unknown[];
			},
	  ];
// ----- vue/no-duplicate-attributes -----
type VueNoDuplicateAttributes =
	| []
	| [
			{
				allowCoexistClass?: boolean;
				allowCoexistStyle?: boolean;
			},
	  ];
// ----- vue/no-empty-pattern -----
type VueNoEmptyPattern =
	| []
	| [
			{
				allowObjectPatternsAsParameters?: boolean;
			},
	  ];
// ----- vue/no-extra-parens -----
type VueNoExtraParens =
	| []
	| ["functions"]
	| []
	| ["all"]
	| [
			"all",
			{
				conditionalAssign?: boolean;
				ternaryOperandBinaryExpressions?: boolean;
				nestedBinaryExpressions?: boolean;
				returnAssign?: boolean;
				ignoreJSX?: "none" | "all" | "single-line" | "multi-line";
				enforceForArrowConditionals?: boolean;
				enforceForSequenceExpressions?: boolean;
				enforceForNewInMemberExpressions?: boolean;
				enforceForFunctionPrototypeMethods?: boolean;
				allowParensAfterCommentPattern?: string;
			},
	  ];
// ----- vue/no-irregular-whitespace -----
type VueNoIrregularWhitespace =
	| []
	| [
			{
				skipComments?: boolean;
				skipStrings?: boolean;
				skipTemplates?: boolean;
				skipRegExps?: boolean;
				skipHTMLAttributeValues?: boolean;
				skipHTMLTextContents?: boolean;
			},
	  ];
// ----- vue/no-lone-template -----
type VueNoLoneTemplate =
	| []
	| [
			{
				ignoreAccessible?: boolean;
			},
	  ];
// ----- vue/no-multi-spaces -----
type VueNoMultiSpaces =
	| []
	| [
			{
				ignoreProperties?: boolean;
			},
	  ];
// ----- vue/no-mutating-props -----
type VueNoMutatingProps =
	| []
	| [
			{
				shallowOnly?: boolean;
			},
	  ];
// ----- vue/no-parsing-error -----
type VueNoParsingError =
	| []
	| [
			{
				"abrupt-closing-of-empty-comment"?: boolean;
				"absence-of-digits-in-numeric-character-reference"?: boolean;
				"cdata-in-html-content"?: boolean;
				"character-reference-outside-unicode-range"?: boolean;
				"control-character-in-input-stream"?: boolean;
				"control-character-reference"?: boolean;
				"eof-before-tag-name"?: boolean;
				"eof-in-cdata"?: boolean;
				"eof-in-comment"?: boolean;
				"eof-in-tag"?: boolean;
				"incorrectly-closed-comment"?: boolean;
				"incorrectly-opened-comment"?: boolean;
				"invalid-first-character-of-tag-name"?: boolean;
				"missing-attribute-value"?: boolean;
				"missing-end-tag-name"?: boolean;
				"missing-semicolon-after-character-reference"?: boolean;
				"missing-whitespace-between-attributes"?: boolean;
				"nested-comment"?: boolean;
				"noncharacter-character-reference"?: boolean;
				"noncharacter-in-input-stream"?: boolean;
				"null-character-reference"?: boolean;
				"surrogate-character-reference"?: boolean;
				"surrogate-in-input-stream"?: boolean;
				"unexpected-character-in-attribute-name"?: boolean;
				"unexpected-character-in-unquoted-attribute-value"?: boolean;
				"unexpected-equals-sign-before-attribute-name"?: boolean;
				"unexpected-null-character"?: boolean;
				"unexpected-question-mark-instead-of-tag-name"?: boolean;
				"unexpected-solidus-in-tag"?: boolean;
				"unknown-named-character-reference"?: boolean;
				"end-tag-with-attributes"?: boolean;
				"duplicate-attribute"?: boolean;
				"end-tag-with-trailing-solidus"?: boolean;
				"non-void-html-element-start-tag-with-trailing-solidus"?: boolean;
				"x-invalid-end-tag"?: boolean;
				"x-invalid-namespace"?: boolean;
			},
	  ];
// ----- vue/no-potential-component-option-typo -----
type VueNoPotentialComponentOptionTypo =
	| []
	| [
			{
				presets?: ("all" | "vue" | "vue-router" | "nuxt")[];

				custom?: string[];
				threshold?: number;
			},
	  ];
// ----- vue/no-required-prop-with-default -----
type VueNoRequiredPropWithDefault =
	| []
	| [
			{
				autofix?: boolean;
			},
	  ];
// ----- vue/no-reserved-component-names -----
type VueNoReservedComponentNames =
	| []
	| [
			{
				disallowVueBuiltInComponents?: boolean;
				disallowVue3BuiltInComponents?: boolean;
			},
	  ];
// ----- vue/no-reserved-keys -----
type VueNoReservedKeys =
	| []
	| [
			{
				reserved?: unknown[];
				groups?: unknown[];
			},
	  ];
// ----- vue/no-reserved-props -----
type VueNoReservedProps =
	| []
	| [
			{
				vueVersion?: 2 | 3;
			},
	  ];
// ----- vue/no-restricted-block -----
type VueNoRestrictedBlock = (
	| string
	| {
			element: string;
			message?: string;
	  }
)[];
// ----- vue/no-restricted-call-after-await -----
type VueNoRestrictedCallAfterAwait = {
	module: string;
	path?: string | string[];
	message?: string;
}[];
// ----- vue/no-restricted-class -----
type VueNoRestrictedClass = string[];
// ----- vue/no-restricted-component-names -----
type VueNoRestrictedComponentNames = (
	| string
	| {
			name: string;
			message?: string;
			suggest?: string;
	  }
)[];
// ----- vue/no-restricted-component-options -----
type VueNoRestrictedComponentOptions = (
	| string
	| string[]
	| {
			name: string | string[];
			message?: string;
	  }
)[];
// ----- vue/no-restricted-custom-event -----
type VueNoRestrictedCustomEvent = (
	| string
	| {
			event: string;
			message?: string;
			suggest?: string;
	  }
)[];
// ----- vue/no-restricted-html-elements -----
type VueNoRestrictedHtmlElements = (
	| string
	| {
			element: string;
			message?: string;
	  }
)[];
// ----- vue/no-restricted-props -----
type VueNoRestrictedProps = (
	| string
	| {
			name: string;
			message?: string;
			suggest?: string;
	  }
)[];
// ----- vue/no-restricted-static-attribute -----
type VueNoRestrictedStaticAttribute = (
	| string
	| {
			key: string;
			value?: string | true;
			element?: string;
			message?: string;
	  }
)[];
// ----- vue/no-restricted-syntax -----
type VueNoRestrictedSyntax = (
	| string
	| {
			selector: string;
			message?: string;
	  }
)[];
// ----- vue/no-restricted-v-bind -----
type VueNoRestrictedVBind = (
	| (string | null)
	| {
			argument: string | null;
			modifiers?: ("prop" | "camel" | "sync" | "attr")[];
			element?: string;
			message?: string;
	  }
)[];
// ----- vue/no-restricted-v-on -----
type VueNoRestrictedVOn = (
	| (string | null)
	| {
			argument: string | null;
			element?: string;
			message?: string;

			modifiers?: [
				"prevent" | "stop" | "capture" | "self" | "once" | "passive",
				...("prevent" | "stop" | "capture" | "self" | "once" | "passive")[],
			];
	  }
)[];
// ----- vue/no-static-inline-styles -----
type VueNoStaticInlineStyles =
	| []
	| [
			{
				allowBinding?: boolean;
			},
	  ];
// ----- vue/no-template-shadow -----
type VueNoTemplateShadow =
	| []
	| [
			{
				allow?: string[];
			},
	  ];
// ----- vue/no-template-target-blank -----
type VueNoTemplateTargetBlank =
	| []
	| [
			{
				allowReferrer?: boolean;
				enforceDynamicLinks?: "always" | "never";
			},
	  ];
// ----- vue/no-undef-components -----
type VueNoUndefComponents =
	| []
	| [
			{
				ignorePatterns?: unknown[];
			},
	  ];
// ----- vue/no-undef-properties -----
type VueNoUndefProperties =
	| []
	| [
			{
				ignores?: string[];
			},
	  ];
// ----- vue/no-unsupported-features -----
type VueNoUnsupportedFeatures =
	| []
	| [
			{
				version?: string;
				ignores?: (
					| "slot-scope-attribute"
					| "dynamic-directive-arguments"
					| "v-slot"
					| "script-setup"
					| "style-css-vars-injection"
					| "v-model-argument"
					| "v-model-custom-modifiers"
					| "v-is"
					| "is-attribute-with-vue-prefix"
					| "v-memo"
					| "v-bind-prop-modifier-shorthand"
					| "v-bind-attr-modifier"
					| "define-options"
					| "define-slots"
					| "define-model"
					| "v-bind-same-name-shorthand"
				)[];
			},
	  ];
// ----- vue/no-unused-components -----
type VueNoUnusedComponents =
	| []
	| [
			{
				ignoreWhenBindingPresent?: boolean;
			},
	  ];
// ----- vue/no-unused-properties -----
type VueNoUnusedProperties =
	| []
	| [
			{
				groups?: (
					| "props"
					| "data"
					| "asyncData"
					| "computed"
					| "methods"
					| "setup"
				)[];
				deepData?: boolean;
				ignorePublicMembers?: boolean;
				unreferencedOptions?: (
					| "unknownMemberAsUnreferenced"
					| "returnAsUnreferenced"
				)[];
			},
	  ];
// ----- vue/no-unused-vars -----
type VueNoUnusedVars =
	| []
	| [
			{
				ignorePattern?: string;
			},
	  ];
// ----- vue/no-use-v-if-with-v-for -----
type VueNoUseVIfWithVFor =
	| []
	| [
			{
				allowUsingIterationVar?: boolean;
			},
	  ];
// ----- vue/no-useless-mustaches -----
type VueNoUselessMustaches =
	| []
	| [
			{
				ignoreIncludesComment?: boolean;
				ignoreStringEscape?: boolean;
			},
	  ];
// ----- vue/no-useless-v-bind -----
type VueNoUselessVBind =
	| []
	| [
			{
				ignoreIncludesComment?: boolean;
				ignoreStringEscape?: boolean;
			},
	  ];
// ----- vue/no-v-text-v-html-on-component -----
type VueNoVTextVHtmlOnComponent =
	| []
	| [
			{
				allow?: string[];
			},
	  ];
// ----- vue/object-curly-newline -----
type VueObjectCurlyNewline =
	| []
	| [
			| (
					| ("always" | "never")
					| {
							multiline?: boolean;
							minProperties?: number;
							consistent?: boolean;
					  }
			  )
			| {
					ObjectExpression?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ObjectPattern?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ImportDeclaration?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
					ExportDeclaration?:
						| ("always" | "never")
						| {
								multiline?: boolean;
								minProperties?: number;
								consistent?: boolean;
						  };
			  },
	  ];
// ----- vue/object-curly-spacing -----
type VueObjectCurlySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				arraysInObjects?: boolean;
				objectsInObjects?: boolean;
			},
	  ];
// ----- vue/object-property-newline -----
type VueObjectPropertyNewline =
	| []
	| [
			{
				allowAllPropertiesOnSameLine?: boolean;
				allowMultiplePropertiesPerLine?: boolean;
			},
	  ];
// ----- vue/object-shorthand -----
type VueObjectShorthand =
	| []
	| [
			| "always"
			| "methods"
			| "properties"
			| "never"
			| "consistent"
			| "consistent-as-needed",
	  ]
	| []
	| ["always" | "methods" | "properties"]
	| [
			"always" | "methods" | "properties",
			{
				avoidQuotes?: boolean;
			},
	  ]
	| []
	| ["always" | "methods"]
	| [
			"always" | "methods",
			{
				ignoreConstructors?: boolean;
				methodsIgnorePattern?: string;
				avoidQuotes?: boolean;
				avoidExplicitReturnArrows?: boolean;
			},
	  ];
// ----- vue/operator-linebreak -----
type VueOperatorLinebreak =
	| []
	| [("after" | "before" | "none") | null]
	| [
			("after" | "before" | "none") | null,
			{
				overrides?: {
					[k: string]: ("after" | "before" | "none" | "ignore") | undefined;
				};
			},
	  ];
// ----- vue/order-in-components -----
type VueOrderInComponents =
	| []
	| [
			{
				order?: unknown[];
			},
	  ];
// ----- vue/padding-line-between-blocks -----
type VuePaddingLineBetweenBlocks = [] | ["never" | "always"];
// ----- vue/padding-line-between-tags -----
type VuePaddingLineBetweenTags =
	| []
	| [
			{
				blankLine: "always" | "never" | "consistent";
				prev: string;
				next: string;
			}[],
	  ];
// ----- vue/padding-lines-in-component-definition -----
type VuePaddingLinesInComponentDefinition =
	| []
	| [
			| ("always" | "never")
			| {
					betweenOptions?: "never" | "always" | "ignore";
					withinOption?:
						| ("never" | "always" | "ignore")
						| {
								[k: string]:
									| ("never" | "always" | "ignore")
									| {
											betweenItems?: "never" | "always" | "ignore";
											withinEach?: "never" | "always" | "ignore";
									  };
						  };
					groupSingleLineProperties?: boolean;
			  },
	  ];
// ----- vue/prefer-true-attribute-shorthand -----
type VuePreferTrueAttributeShorthand = [] | ["always" | "never"];
// ----- vue/prop-name-casing -----
type VuePropNameCasing = [] | ["camelCase" | "snake_case"];
// ----- vue/quote-props -----
type VueQuoteProps =
	| []
	| ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
	| []
	| ["always" | "as-needed" | "consistent" | "consistent-as-needed"]
	| [
			"always" | "as-needed" | "consistent" | "consistent-as-needed",
			{
				keywords?: boolean;
				unnecessary?: boolean;
				numbers?: boolean;
			},
	  ];
// ----- vue/require-direct-export -----
type VueRequireDirectExport =
	| []
	| [
			{
				disallowFunctionalComponentFunction?: boolean;
			},
	  ];
// ----- vue/require-explicit-emits -----
type VueRequireExplicitEmits =
	| []
	| [
			{
				allowProps?: boolean;
			},
	  ];
// ----- vue/require-macro-variable-name -----
type VueRequireMacroVariableName =
	| []
	| [
			{
				defineProps?: string;
				defineEmits?: string;
				defineSlots?: string;
				useSlots?: string;
				useAttrs?: string;
			},
	  ];
// ----- vue/require-prop-comment -----
type VueRequirePropComment =
	| []
	| [
			{
				type?: "JSDoc" | "line" | "block" | "any";
			},
	  ];
// ----- vue/return-in-computed-property -----
type VueReturnInComputedProperty =
	| []
	| [
			{
				treatUndefinedAsUnspecified?: boolean;
			},
	  ];
// ----- vue/script-indent -----
type VueScriptIndent =
	| []
	| [number | "tab"]
	| [
			number | "tab",
			{
				baseIndent?: number;
				switchCase?: number;
				ignores?: (string & {
					[k: string]: unknown | undefined;
				} & {
					[k: string]: unknown | undefined;
				})[];
			},
	  ];
// ----- vue/singleline-html-element-content-newline -----
type VueSinglelineHtmlElementContentNewline =
	| []
	| [
			{
				ignoreWhenNoAttributes?: boolean;
				ignoreWhenEmpty?: boolean;
				ignores?: string[];
				externalIgnores?: string[];
			},
	  ];
// ----- vue/sort-keys -----
type VueSortKeys =
	| []
	| ["asc" | "desc"]
	| [
			"asc" | "desc",
			{
				caseSensitive?: boolean;
				ignoreChildrenOf?: unknown[];
				ignoreGrandchildrenOf?: unknown[];
				minKeys?: number;
				natural?: boolean;
				runOutsideVue?: boolean;
			},
	  ];
// ----- vue/space-in-parens -----
type VueSpaceInParens =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptions?: ("{}" | "[]" | "()" | "empty")[];
			},
	  ];
// ----- vue/space-infix-ops -----
type VueSpaceInfixOps =
	| []
	| [
			{
				int32Hint?: boolean;
			},
	  ];
// ----- vue/space-unary-ops -----
type VueSpaceUnaryOps =
	| []
	| [
			{
				words?: boolean;
				nonwords?: boolean;
				overrides?: {
					[k: string]: boolean | undefined;
				};
			},
	  ];
// ----- vue/template-curly-spacing -----
type VueTemplateCurlySpacing = [] | ["always" | "never"];
// ----- vue/this-in-template -----
type VueThisInTemplate = [] | ["always" | "never"];
// ----- vue/v-bind-style -----
type VueVBindStyle =
	| []
	| ["shorthand" | "longform"]
	| [
			"shorthand" | "longform",
			{
				sameNameShorthand?: "always" | "never" | "ignore";
			},
	  ];
// ----- vue/v-for-delimiter-style -----
type VueVForDelimiterStyle = [] | ["in" | "of"];
// ----- vue/v-on-event-hyphenation -----
type VueVOnEventHyphenation =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				autofix?: boolean;
				ignore?: (string & {
					[k: string]: unknown | undefined;
				} & {
					[k: string]: unknown | undefined;
				})[];
			},
	  ];
// ----- vue/v-on-function-call -----
type VueVOnFunctionCall =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				ignoreIncludesComment?: boolean;
			},
	  ];
// ----- vue/v-on-handler-style -----
type VueVOnHandlerStyle =
	| []
	| [("inline" | "inline-function") | ["method", "inline" | "inline-function"]]
	| [
			("inline" | "inline-function") | ["method", "inline" | "inline-function"],
			{
				ignoreIncludesComment?: boolean;
			},
	  ];
// ----- vue/v-on-style -----
type VueVOnStyle = [] | ["shorthand" | "longform"];
// ----- vue/v-slot-style -----
type VueVSlotStyle =
	| []
	| [
			| ("shorthand" | "longform")
			| {
					atComponent?: "shorthand" | "longform" | "v-slot";
					default?: "shorthand" | "longform" | "v-slot";
					named?: "shorthand" | "longform";
			  },
	  ];
// ----- vue/valid-v-on -----
type VueValidVOn =
	| []
	| [
			{
				modifiers?: unknown[];
			},
	  ];
// ----- vue/valid-v-slot -----
type VueValidVSlot =
	| []
	| [
			{
				allowModifiers?: boolean;
			},
	  ];
// ----- wrap-iife -----
type WrapIife =
	| []
	| ["outside" | "inside" | "any"]
	| [
			"outside" | "inside" | "any",
			{
				functionPrototypeMethods?: boolean;
			},
	  ];
// ----- yaml/block-mapping -----
type YamlBlockMapping =
	| []
	| [
			| ("always" | "never")
			| {
					singleline?: "always" | "never" | "ignore";
					multiline?: "always" | "never" | "ignore";
			  },
	  ];
// ----- yaml/block-mapping-colon-indicator-newline -----
type YamlBlockMappingColonIndicatorNewline = [] | ["always" | "never"];
// ----- yaml/block-mapping-question-indicator-newline -----
type YamlBlockMappingQuestionIndicatorNewline = [] | ["always" | "never"];
// ----- yaml/block-sequence -----
type YamlBlockSequence =
	| []
	| [
			| ("always" | "never")
			| {
					singleline?: "always" | "never" | "ignore";
					multiline?: "always" | "never" | "ignore";
			  },
	  ];
// ----- yaml/block-sequence-hyphen-indicator-newline -----
type YamlBlockSequenceHyphenIndicatorNewline =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				nestedHyphen?: "always" | "never";
				blockMapping?: "always" | "never";
			},
	  ];
// ----- yaml/file-extension -----
type YamlFileExtension =
	| []
	| [
			{
				extension?: "yaml" | "yml";
				caseSensitive?: boolean;
			},
	  ];
// ----- yaml/flow-mapping-curly-newline -----
type YamlFlowMappingCurlyNewline =
	| []
	| [
			| ("always" | "never")
			| {
					multiline?: boolean;
					minProperties?: number;
					consistent?: boolean;
			  },
	  ];
// ----- yaml/flow-mapping-curly-spacing -----
type YamlFlowMappingCurlySpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				arraysInObjects?: boolean;
				objectsInObjects?: boolean;
			},
	  ];
// ----- yaml/flow-sequence-bracket-newline -----
type YamlFlowSequenceBracketNewline =
	| []
	| [
			| ("always" | "never" | "consistent")
			| {
					multiline?: boolean;
					minItems?: number | null;
			  },
	  ];
// ----- yaml/flow-sequence-bracket-spacing -----
type YamlFlowSequenceBracketSpacing =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				singleValue?: boolean;
				objectsInArrays?: boolean;
				arraysInArrays?: boolean;
			},
	  ];
// ----- yaml/indent -----
type YamlIndent =
	| []
	| [number]
	| [
			number,
			{
				indentBlockSequences?: boolean;
				indicatorValueIndent?: number;
			},
	  ];
// ----- yaml/key-name-casing -----
type YamlKeyNameCasing =
	| []
	| [
			{
				camelCase?: boolean;
				PascalCase?: boolean;
				SCREAMING_SNAKE_CASE?: boolean;
				"kebab-case"?: boolean;
				snake_case?: boolean;
				ignores?: string[];
			},
	  ];
// ----- yaml/key-spacing -----
type YamlKeySpacing =
	| []
	| [
			| {
					align?:
						| ("colon" | "value")
						| {
								on?: "colon" | "value";
								mode?: "strict" | "minimum";
								beforeColon?: boolean;
								afterColon?: boolean;
						  };
					mode?: "strict" | "minimum";
					beforeColon?: boolean;
					afterColon?: boolean;
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						align?:
							| ("colon" | "value")
							| {
									on?: "colon" | "value";
									mode?: "strict" | "minimum";
									beforeColon?: boolean;
									afterColon?: boolean;
							  };
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  }
			| {
					singleLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					multiLine?: {
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
					align?: {
						on?: "colon" | "value";
						mode?: "strict" | "minimum";
						beforeColon?: boolean;
						afterColon?: boolean;
					};
			  },
	  ];
// ----- yaml/no-irregular-whitespace -----
type YamlNoIrregularWhitespace =
	| []
	| [
			{
				skipComments?: boolean;
				skipQuotedScalars?: boolean;
			},
	  ];
// ----- yaml/no-multiple-empty-lines -----
type YamlNoMultipleEmptyLines =
	| []
	| [
			{
				max: number;
				maxEOF?: number;
				maxBOF?: number;
			},
	  ];
// ----- yaml/plain-scalar -----
type YamlPlainScalar =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				ignorePatterns?: string[];
			},
	  ];
// ----- yaml/quotes -----
type YamlQuotes =
	| []
	| [
			{
				prefer?: "double" | "single";
				avoidEscape?: boolean;
			},
	  ];
// ----- yaml/sort-keys -----
type YamlSortKeys =
	| [
			{
				pathPattern: string;
				hasProperties?: string[];
				order:
					| (
							| string
							| {
									keyPattern?: string;
									order?: {
										type?: "asc" | "desc";
										caseSensitive?: boolean;
										natural?: boolean;
									};
							  }
					  )[]
					| {
							type?: "asc" | "desc";
							caseSensitive?: boolean;
							natural?: boolean;
					  };
				minKeys?: number;
				allowLineSeparatedGroups?: boolean;
			},
			...{
				pathPattern: string;
				hasProperties?: string[];
				order:
					| (
							| string
							| {
									keyPattern?: string;
									order?: {
										type?: "asc" | "desc";
										caseSensitive?: boolean;
										natural?: boolean;
									};
							  }
					  )[]
					| {
							type?: "asc" | "desc";
							caseSensitive?: boolean;
							natural?: boolean;
					  };
				minKeys?: number;
				allowLineSeparatedGroups?: boolean;
			}[],
	  ]
	| []
	| ["asc" | "desc"]
	| [
			"asc" | "desc",
			{
				caseSensitive?: boolean;
				natural?: boolean;
				minKeys?: number;
				allowLineSeparatedGroups?: boolean;
			},
	  ];
// ----- yaml/sort-sequence-values -----
type YamlSortSequenceValues = [
	{
		pathPattern: string;
		order:
			| (
					| string
					| {
							valuePattern?: string;
							order?: {
								type?: "asc" | "desc";
								caseSensitive?: boolean;
								natural?: boolean;
							};
					  }
			  )[]
			| {
					type?: "asc" | "desc";
					caseSensitive?: boolean;
					natural?: boolean;
			  };
		minValues?: number;
	},
	...{
		pathPattern: string;
		order:
			| (
					| string
					| {
							valuePattern?: string;
							order?: {
								type?: "asc" | "desc";
								caseSensitive?: boolean;
								natural?: boolean;
							};
					  }
			  )[]
			| {
					type?: "asc" | "desc";
					caseSensitive?: boolean;
					natural?: boolean;
			  };
		minValues?: number;
	}[],
];
// ----- yaml/spaced-comment -----
type YamlSpacedComment =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptions?: string[];
				markers?: string[];
			},
	  ];
// ----- yield-star-spacing -----
type YieldStarSpacing =
	| []
	| [
			| ("before" | "after" | "both" | "neither")
			| {
					before?: boolean;
					after?: boolean;
			  },
	  ];
// ----- yoda -----
type Yoda =
	| []
	| ["always" | "never"]
	| [
			"always" | "never",
			{
				exceptRange?: boolean;
				onlyEquality?: boolean;
			},
	  ];
// Names of all the configs
export type ConfigNames =
	| "so1ve/comments/setup"
	| "so1ve/comments/rules"
	| "so1ve/formatting/setup"
	| "so1ve/formatting/rules"
	| "so1ve/formatting/rules/sort-package-json"
	| "so1ve/formatting/rules/sort-tsconfig"
	| "so1ve/formatting/rules/test"
	| "so1ve/html/setup"
	| "so1ve/html/rules"
	| "so1ve/imports/setup"
	| "so1ve/imports/rules"
	| "so1ve/imports/rules/dts"
	| "so1ve/javascript/setup"
	| "so1ve/javascript/rules"
	| "so1ve/javascript/regexp"
	| "so1ve/javascript/cli"
	| "so1ve/jsonc/setup"
	| "so1ve/jsonc/rules"
	| "so1ve/mdx/setup"
	| "so1ve/mdx/rules"
	| "so1ve/node/setup"
	| "so1ve/node/rules"
	| "so1ve/only-error"
	| "so1ve/promise/setup"
	| "so1ve/promise/rules"
	| "so1ve/solid/setup"
	| "so1ve/solid/rules"
	| "so1ve/sort-imports/setup"
	| "so1ve/sort-imports/rules"
	| "so1ve/test/setup"
	| "so1ve/test/rules"
	| "so1ve/toml/setup"
	| "so1ve/toml/rules"
	| "so1ve/typescript/setup"
	| "so1ve/typescript/rules"
	| "so1ve/typescript/rules/markdown-codeblocks"
	| "so1ve/typescript/rules/dts"
	| "so1ve/typescript/rules/js"
	| "so1ve/unicorn/setup"
	| "so1ve/unicorn/rules"
	| "so1ve/vue/setup"
	| "so1ve/vue/rules"
	| "so1ve/yaml/setup"
	| "so1ve/yaml/rules";
