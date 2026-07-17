/**
 * Strips `--` comments, trailing whitespace and blank lines from SQL sources, so only
 * the functional DDL is inlined into the bundle while the source file keeps its full
 * documentation. Blind end-of-line stripping is safe here because the Anki schema
 * contains no string literals — the only quotes appear inside the comments themselves.
 */
module.exports = function (source) {
	return source
		.replace(/--[^\n]*/g, '')
		.replace(/[ \t]+$/gm, '')
		.replace(/\n{2,}/g, '\n')
		.trim();
};
