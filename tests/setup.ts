import { readFileSync } from 'node:fs';
import Module from 'node:module';

/**
 * database.ts loads the anki.sqlite schema via require(), which webpack inlines as the
 * file's text content (asset/source) at build time. Node has no loader for the extension,
 * so it falls through to the default .js handler and tries to parse the raw file as
 * JavaScript. Registering a handler here mirrors what webpack does — the schema resolves
 * to its own text content — so production code works the same way it does in the browser
 * bundle, without any test-only override.
 */
const extensions = (Module as unknown as { _extensions: Record<string, (module: Module, filename: string) => void> })._extensions;

extensions['.sqlite'] = (module: Module, filename: string) => {
	module.exports = readFileSync(filename, 'utf8');
};
