import { readFileSync } from 'node:fs';
import Module from 'node:module';

/**
 * database.ts loads the anki.sqlite schema and the sql.js wasm binary via require().
 * At build time webpack resolves those imports — the schema to its inlined text content
 * (asset/source) and the wasm to an asset URL (file-loader). Node has no loader for
 * either extension, so it falls through to the default .js handler and tries to parse
 * the raw file as JavaScript. Registering handlers here mirrors what webpack does: the
 * schema resolves to its own text content, and the wasm to the file's absolute path
 * (which sql.js reads from disk in Node), so production code works the same way it
 * does in the browser bundle, without any test-only override.
 */
const extensions = (Module as unknown as { _extensions: Record<string, (module: Module, filename: string) => void> })._extensions;

extensions['.sqlite'] = (module: Module, filename: string) => {
	module.exports = readFileSync(filename, 'utf8');
};

extensions['.wasm'] = (module: Module, filename: string) => {
	module.exports = { default: filename };
};
