import * as FileSaver from 'file-saver';
import { SqlJsConfig } from 'sql.js';
import { Database } from './service/database';
import JSZip from 'jszip';
import { Entity } from './abstract/entity';

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

	save(entities: Entity[], filename: string): void {
		const zip = new JSZip();

		for (let entity of entities) {
			this.db.insert(entity.getTable(), entity.getEntity());
		}

		try {
			const sqlite = this.db.dump();

			zip.file('collection.anki2', sqlite);
			zip.folder('media');

			zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
				FileSaver.saveAs(content, filename);
			});
		} catch (error) {
			console.error(error);
		}
	}
}
