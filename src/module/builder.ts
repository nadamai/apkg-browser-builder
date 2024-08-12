import * as FileSaver from 'file-saver';
import { SqlJsConfig, Database } from 'sql.js';
import { Schema } from './schema';
import JSZip from 'jszip';

export type ApkgBuilderConfig = Partial<{
	filename: string;
	sqljs: SqlJsConfig;
}>;

export default class ApkgBuilder {
	private config: ApkgBuilderConfig = {};
	private db: Database | null = null;

	constructor(config?: ApkgBuilderConfig) {
		this.config = config || {};
	}

	async init(): Promise<Database | null> {
		return Schema.init(this.config.sqljs);
	}

	save(): void {
		const zip = new JSZip();

		zip.file('test.txt', 'test');

		zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
			FileSaver.saveAs(content, `${this.config.filename ?? 'anki'}.apkg`);
		});
	}
}
