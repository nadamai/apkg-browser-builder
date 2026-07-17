import initSqlJs, { Database as SqlJsDatabase, SqlJsConfig, SqlJsStatic } from 'sql.js';
import { QueryBuilder } from './query-builder';

export class Database {
	private config?: SqlJsConfig;
	private db: SqlJsDatabase | null = null;

	constructor(config?: SqlJsConfig) {
		this.config = config;
	}

	public async init(): Promise<void> {
		try {
			const SQL: SqlJsStatic = await initSqlJs({
				locateFile: () => new URL('sql.js/dist/sql-wasm-browser.wasm', import.meta.url).href,
				...this.config
			});

			const AnkiSqliteSchemaScript = require('./../anki.sqlite');

			this.db = new SQL.Database();
			this.db.exec(AnkiSqliteSchemaScript);
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

	public close(): void {
		if (!this.db) {
			return;
		}

		this.db.close();
		this.db = null;
	}
}
