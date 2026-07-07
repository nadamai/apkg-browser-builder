import { readFileSync } from 'node:fs';
import Module from 'node:module';

const extensions = (Module as unknown as { _extensions: Record<string, (module: Module, filename: string) => void> })
	._extensions;

const defaultHandler = (module: Module, filename: string) => {
	module.exports = { default: filename };
};

extensions['.sqlite'] = defaultHandler;
extensions['.wasm'] = defaultHandler;

const browserFetch = global.fetch;

global.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
	const url = typeof input === 'string' ? input : input.toString();

	if (!url.startsWith('http://') && !url.startsWith('https://')) {
		return new Response(readFileSync(url));
	}

	return browserFetch(input, init);
};
