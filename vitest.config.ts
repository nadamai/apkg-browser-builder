import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: [
			{ find: /^sql\.js$/, replacement: fileURLToPath(new URL('./tests/shims/sqljs.ts', import.meta.url)) },
			{ find: /^.*\/anki\.sqlite$/, replacement: fileURLToPath(new URL('./tests/shims/anki-sqlite.ts', import.meta.url)) }
		]
	},
	test: {
		environment: 'node'
	}
});
