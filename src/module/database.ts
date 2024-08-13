import initSqlJs, { Database as SqlJsDatabase, SqlJsConfig, SqlJsStatic } from 'sql.js';

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
				const { default: AnkiSqliteSchemaScriptUrl } = require('./../db/anki.sqlite');

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

	dump(): Uint8Array {
		if (!this.db) {
			throw new Error('The Anki sqlite database is not initialized');
		}

		return this.db.export();
	}
}
