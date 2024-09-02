import * as FileSaver from 'file-saver';
import { SqlJsConfig } from 'sql.js';
import { Database } from './service/database';
import JSZip from 'jszip';
import { Collection } from './entity';
import { Deck } from './object/deck';

export type ApkgBuilderConfig = Partial<{
	sqljs: SqlJsConfig;
}>;

export default class ApkgBuilder {
	private db: Database;
	private collection: Collection;

	constructor(config?: ApkgBuilderConfig) {
		this.db = new Database(config?.sqljs);
		this.collection = new Collection();
	}

	init(): void {
		this.db.init();
	}

	getCollection(): Collection {
		return this.collection;
	}

	setCollection(collection: Collection): ApkgBuilder {
		this.collection = collection;

		return this;
	}

	public getDecks(): Deck[] {
		return this.collection.getDecks();
	}

	public setDecks(decks: Deck[]): ApkgBuilder {
		this.collection.setDecks(decks);

		return this;
	}

	addDeck(deck: Deck): ApkgBuilder {
		this.collection.addDeck(deck);

		return this;
	}

	removeDeck(deck: Deck): ApkgBuilder {
		this.collection.removeDeck(deck);

		return this;
	}

	save(filename: string): void {
		const zip = new JSZip();

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
