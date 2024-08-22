import * as FileSaver from 'file-saver';
import { SqlJsConfig } from 'sql.js';
import { Database } from './service/database';
import JSZip from 'jszip';
import { Deck } from './entity';
import { QueryBuilder } from './service/query-builder';
import { Card, Collection, Note } from './model';

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

	save(deck: Deck, filename: string): void {
		const zip = new JSZip();

		const card: Card = {
			id: 1,
			nid: 1,
			did: 1,
			ord: 1,
			mod: 1,
			usn: 1,
			type: 1,
			queue: 1,
			due: 1,
			ivl: 1,
			factor: 1,
			reps: 1,
			lapses: 1,
			left: 1,
			odue: 1,
			odid: 1,
			flags: 1,
			data: ''
		};

		const collection: Collection = {
			id: 1,
			crt: 1,
			mod: 1,
			scm: 1,
			ver: 11,
			dty: 0,
			usn: 1,
			ls: 1,
			conf: '',
			models: '',
			decks: '',
			dconf: '',
			tags: ''
		};

		const note: Note = {
			id: 1,
			guid: 1,
			mid: 1,
			mod: 1,
			usn: 1,
			tags: '',
			flds: '',
			sfld: 1,
			csum: 1,
			flags: 1,
			data: ''
		};

		this.db.insert('cards', card);
		this.db.insert('col', collection);
		this.db.insert('notes', note);

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
