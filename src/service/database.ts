import initSqlJs, { Database as SqlJsDatabase, SqlJsConfig, SqlJsStatic } from 'sql.js';
import { QueryBuilder } from './query-builder';

export const SQL_WASM_CDN_URL: string = 'https://cdn.jsdelivr.net/npm/sql.js@1.14.0/dist/';

export class Database {
	private config?: SqlJsConfig;
	private db: SqlJsDatabase | null = null;

	constructor(config?: SqlJsConfig) {
		this.config = config;
	}

	public async init(): Promise<void> {
		try {
			const SQL: SqlJsStatic = await initSqlJs({
				locateFile: (file: string) => `${SQL_WASM_CDN_URL}${file}`,
				...this.config
			});

			const { default: AnkiSqliteSchemaScriptUrl } = require('./../anki.sqlite');

			const response = await fetch(AnkiSqliteSchemaScriptUrl);
			const script = await response.text();

			this.db = new SQL.Database();
			this.db.exec(script);
		} catch (error) {
			console.error('Error on initializing sql.js or setting up the database', error);

			throw error;
		}
	}

	public insert(table: string, data: Record<string, any>): void {
		if (!this.db) {
			throw new Error('The Anki sqlite database is not initialized');
		}

		const { query, params } = QueryBuilder.insert(table, data);
		const statement = this.db.prepare(query);
		console.log(query, data);

		statement.bind(params);
		statement.step();
		statement.free();
	}

	public dump(): Uint8Array {
		if (!this.db) {
			throw new Error('The Anki sqlite database is not initialized');
		}

		return this.db.export();
	}
}
