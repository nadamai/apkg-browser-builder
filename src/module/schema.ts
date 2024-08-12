import initSqlJs, { Database, SqlJsConfig, SqlJsStatic } from 'sql.js';

export const Schema = {
	async init(config?: SqlJsConfig): Promise<Database | null> {
		const db = await initSqlJs({
			locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
			...config
		})
			.then(async (SQL: SqlJsStatic): Promise<Database | null> => {
				const { default: AnkiSqliteSchemaScriptUrl } = require('./../db/anki.sqlite');

				const db = await fetch(AnkiSqliteSchemaScriptUrl)
					.then((response: Response) => {
						return response.text();
					})
					.then((script: string): Database => {
						const db = new SQL.Database();

						db.exec(script);

						return db;
					})
					.catch((error: Error) => {
						console.error('Error on reading Anki sqlite schema script', error);
					});
				if (!db) return null;

				return db;
			})
			.catch((error: Error) => {
				console.error('Error on initializing sql.js with the given .wasm file', error);
			});

		if (!db) return null;

		return db;
	}
};
