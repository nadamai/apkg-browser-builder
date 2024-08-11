import * as FileSaver from 'file-saver';
import initSqlJs, { SqlJsStatic, Database } from 'sql.js';

export default class ApkgBuilder {
	private db: Database | null = null;

	constructor() {
		initSqlJs({
			locateFile: (file: string) => `https://sql.js.org/dist/${file}`
		})
			.then((SQL: SqlJsStatic) => {
				this.db = new SQL.Database();

				console.log(this.db);
			})
			.catch((error: Error) => {
				console.error(error);
			});

		// const uri = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
		// FileSaver.saveAs(uri, 'apkg.gif');
	}
}
