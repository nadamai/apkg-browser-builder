import * as FileSaver from 'file-saver';
import initSqlJs, { SqlJsStatic, Database } from 'sql.js';

export default class ApkgBuilder {
	private db: Database | null = null;

	constructor() {
		initSqlJs({
			locateFile: (file: string) => `https://sql.js.org/dist/${file}`
		})
			.then((SQL: SqlJsStatic) => {
				const { default: AnkiSqliteSchemaUrl } = require('./../db/anki.sqlite');

				fetch(AnkiSqliteSchemaUrl)
					.then((response: Response) => {
						return response.text();
					})
					.then((script: string) => {
						this.db = new SQL.Database();

						this.db.exec(script);

						const stmt = this.db.prepare('SELECT * FROM notes');
						const result = stmt.getAsObject();

						console.log(result);
					})
					.catch((error: Error) => {
						console.error('Error on reading Anki sqlite schema script', error);
					});
			})
			.catch((error: Error) => {
				console.error('Error on initializing sql.js with the given .wasm file', error);
			});

		// const uri = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
		// FileSaver.saveAs(uri, 'apkg.gif');
	}
}
