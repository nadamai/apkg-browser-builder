import { createRequire } from 'node:module';
import type { SqlJsConfig, SqlJsStatic } from 'sql.js';

/**
 * Test-only stand-in for the 'sql.js' module, wired up via the `resolve.alias` entry in
 * vitest.config.ts. database.ts defaults `locateFile` to a browser asset URL that only
 * a bundler can serve; in Node, sql.js instead locates the wasm binary next to its own
 * glue code inside node_modules. This wrapper drops `locateFile` so tests exercise that
 * Node path while production code stays free of any environment checks.
 */
const initSqlJs = createRequire(import.meta.url)('sql.js') as (config?: SqlJsConfig) => Promise<SqlJsStatic>;

export default (config: SqlJsConfig = {}): Promise<SqlJsStatic> => {
	const { locateFile, ...rest } = config;

	return initSqlJs(rest);
};
