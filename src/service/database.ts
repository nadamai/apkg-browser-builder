import initSqlJs, { Database as SqlJsDatabase, SqlJsConfig, SqlJsStatic } from 'sql.js';
import { QueryBuilder } from './query-builder';

export class Database {
	private config?: SqlJsConfig;
	private db: SqlJsDatabase | null = null;

	constructor(config?: SqlJsConfig) {
		this.config = config;

		this.init();
	}

	init(): void {
		initSqlJs({
			locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
			...this.config
		})
			.then((SQL: SqlJsStatic) => {
				const { default: AnkiSqliteSchemaScriptUrl } = require('./../anki.sqlite');

				fetch(AnkiSqliteSchemaScriptUrl)
					.then((response: Response) => {
						return response.text();
					})
					.then((script: string) => {
						this.db = new SQL.Database();
						this.db.exec(script);
					})
					.catch((error: Error) => {
						console.error('Error on reading Anki sqlite schema script', error);
					});
			})
			.catch((error: Error) => {
				console.error('Error on initializing sql.js with the given .wasm file', error);
			});
	}

	insert(table: string, data: Record<string, any>): void {
		if (!this.db) {
			throw new Error('The Anki sqlite database is not initialized');
		}

		const { query, params } = QueryBuilder.insert(table, data);
		const statement = this.db.prepare(query);

		console.log(query, params);

		statement.bind(params);
		statement.step();
		statement.free();
	}

	dump(): Uint8Array {
		if (!this.db) {
			throw new Error('The Anki sqlite database is not initialized');
		}

		return this.db.export();
	}
}
