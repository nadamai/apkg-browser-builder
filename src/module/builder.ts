import * as FileSaver from 'file-saver';
import { SqlJsConfig, Database } from 'sql.js';
import { Schema } from './schema';
import JSZip from 'jszip';

export type ApkgBuilderConfig = Partial<{
	filename: string;
	sqljs: SqlJsConfig;
}>;

export default class ApkgBuilder {
	private config?: ApkgBuilderConfig;
	private schema: Schema;

	constructor(config?: ApkgBuilderConfig) {
		this.schema = new Schema(config?.sqljs);
	}

	init(): void {
		this.schema.init();
	}

	save(): void {
		const zip = new JSZip();

		try {
			const sqlite = this.schema.dump();

			zip.file('collection.anki2', sqlite);

			zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
				FileSaver.saveAs(content, `${this.config?.filename ?? 'anki'}.apkg`);
			});
		} catch (error) {
			console.error(error);
		}
	}
}
