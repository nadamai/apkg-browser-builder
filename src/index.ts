import * as FileSaver from 'file-saver';
import { SqlJsConfig } from 'sql.js';
import { Database } from './service/database';
import JSZip from 'jszip';
import { Card, Collection, Note } from './entity';
import { Deck } from './object/deck';
import { Entity } from './abstract';

export { Card, Collection, Note };

export type ApkgBuilderConfig = Partial<{
	sqljs: SqlJsConfig;
}>;

export default class ApkgBuilder {
	private db: Database;
	private collection: Collection;

	constructor(collection?: Collection, config?: ApkgBuilderConfig) {
		this.db = new Database(config?.sqljs);
		this.collection = collection ?? new Collection();
	}

	public async init(): Promise<void> {
		await this.db.init();
	}

	public getCollection(): Collection {
		return this.collection;
	}

	public setCollection(collection: Collection): ApkgBuilder {
		this.collection = collection;

		return this;
	}

	private getCollectionEntities(): Entity[] {
		const decks = this.collection.getDecks();

		const cards = decks.flatMap((deck: Deck) => {
			return deck.getCards();
		});

		const notes = cards.flatMap((card: Card) => {
			const note = card.getNote();

			if (!note) {
				return [];
			}

			return [note];
		});

		return [this.collection, ...cards, ...notes];
	}

	public save(filename: string): void {
		const zip = new JSZip();
		const entities = this.getCollectionEntities();

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
