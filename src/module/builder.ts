import * as FileSaver from 'file-saver';
import { SqlJsConfig } from 'sql.js';
import { Database } from './database';
import JSZip from 'jszip';

export type ApkgBuilderConfig = Partial<{
	sqljs: SqlJsConfig;
}>;

export default class ApkgBuilder {
	private db: Database;

	constructor(config?: ApkgBuilderConfig) {
		this.db = new Database(config?.sqljs);
	}

	init(): void {
		this.db.init();
	}

	save(filename: string): void {
		const zip = new JSZip();

		try {
			const sqlite = this.db.dump();

			zip.file('collection.anki2', sqlite);

			zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
				FileSaver.saveAs(content, filename);
			});
		} catch (error) {
			console.error(error);
		}
	}
}
