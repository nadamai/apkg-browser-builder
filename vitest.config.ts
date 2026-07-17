import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			'sql.js': fileURLToPath(new URL('./tests/sqljs.ts', import.meta.url))
		}
	},
	test: {
		environment: 'node',
		setupFiles: ['./tests/setup.ts']
	}
});
