import * as FileSaver from 'file-saver';
import { SqlJsConfig } from 'sql.js';
import { Database } from './service/database';
import JSZip from 'jszip';
import { Card, Collection, Note } from './entity';
import { Deck } from './object/deck';
import { Entity } from './abstract';

export type ApkgBuilderConfig = Partial<{
	sqljs: SqlJsConfig;
}>;

export default class ApkgBuilder {
	private db: Database;

	private collection: Collection;
	public cards: Card[] = []; // TODO: tmp
	public notes: Note[] = []; // TODO: tmp

	constructor(config?: ApkgBuilderConfig) {
		this.db = new Database(config?.sqljs);

		this.collection = new Collection();
	}

	public init(): void {
		this.db.init();
	}

	public getCollection(): Collection {
		return this.collection;
	}

	public setCollection(collection: Collection): ApkgBuilder {
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

	public addDeck(deck: Deck): ApkgBuilder {
		this.collection.addDeck(deck);

		return this;
	}

	public removeDeck(deck: Deck): ApkgBuilder {
		this.collection.removeDeck(deck);

		return this;
	}

	public save(filename: string): void {
		const zip = new JSZip();

		const entities: Entity[] = [this.collection, ...this.notes, ...this.cards];

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
