import { readFileSync } from 'node:fs';
import Module from 'node:module';

/**
 * database.ts loads the anki.sqlite schema and the sql.js wasm binary via `require()`,
 * which webpack's file-loader turns into a URL import at build time. Node has no loader
 * for either extension, so it falls through to the default `.js` handler and tries to
 * parse the raw file as JavaScript. Registering handlers here mirrors what file-loader
 * does: resolve the import to the file's own absolute path, so production code resolves
 * both files the same way it does in the browser bundle, without any test-only override.
 */
const extensions = (Module as unknown as { _extensions: Record<string, (module: Module, filename: string) => void> })
	._extensions;

for (const extension of ['.sqlite', '.wasm']) {
	extensions[extension] = (module, filename) => {
		module.exports = { default: filename };
	};
}

const browserFetch = global.fetch;

global.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
	const url = typeof input === 'string' ? input : input.toString();

	if (!url.startsWith('http://') && !url.startsWith('https://')) {
		return new Response(readFileSync(url));
	}

	return browserFetch(input, init);
});
