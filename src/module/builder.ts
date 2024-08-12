import * as FileSaver from 'file-saver';
import { SqlJsConfig, Database } from 'sql.js';
import { Schema } from './schema';

export type ApkgBuilderConfig = {
	sqljs?: SqlJsConfig;
};

export default class ApkgBuilder {
	private config: ApkgBuilderConfig = {};
	private db: Database | null = null;

	constructor(config?: ApkgBuilderConfig) {
		this.config = config || {};
	}

	async init(): Promise<Database | null> {
		// const uri = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
		// FileSaver.saveAs(uri, 'apkg.gif');

		return Schema.init(this.config.sqljs);
	}
}
