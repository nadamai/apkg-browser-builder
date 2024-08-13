import * as FileSaver from 'file-saver';
import { SqlJsConfig } from 'sql.js';
import { Schema } from './schema';
import JSZip from 'jszip';

export type ApkgBuilderConfig = Partial<{
	sqljs: SqlJsConfig;
}>;

export default class ApkgBuilder {
	private schema: Schema;

	constructor(config?: ApkgBuilderConfig) {
		this.schema = new Schema(config?.sqljs);
	}

	init(): void {
		this.schema.init();
	}

	save(filename: string): void {
		const zip = new JSZip();

		try {
			const sqlite = this.schema.dump();

			zip.file('collection.anki2', sqlite);

			zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
				FileSaver.saveAs(content, filename);
			});
		} catch (error) {
			console.error(error);
		}
	}
}
