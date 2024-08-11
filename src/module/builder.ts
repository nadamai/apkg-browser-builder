import * as FileSaver from 'file-saver';
import initSqlJs from 'sql.js';

const ApkgBuilder = {
	init(): void {
		// const uri = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

		initSqlJs().then((SQL) => {
			const db = new SQL.Database();

			console.log(db);
		});

		// FileSaver.saveAs(uri, 'apkg.gif');
	}
};

export default ApkgBuilder;
