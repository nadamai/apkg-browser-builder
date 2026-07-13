import * as FileSaver from 'file-saver';
import { SqlJsConfig } from 'sql.js';
import { Database } from './service/database';
import JSZip from 'jszip';
import { Card, Collection, Note } from './entity';
import { Configuration, Deck, DeckConfiguration, Model } from './object';
import { Entity } from './abstract';
import { Media } from './service';

export type ApkgBuilderConfig = Partial<{
	sqljs: SqlJsConfig;
}>;

export default class ApkgBuilder {
	private db: Database;
	private collection: Collection;
	private media: Media[];

	constructor(collection?: Collection, config?: ApkgBuilderConfig) {
		this.db = new Database(config?.sqljs);
		this.collection = collection ?? new Collection();
		this.media = [];
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

	public addMedia(filename: string, file: Blob): ApkgBuilder {
		const index = this.media.length;

		this.media[index] = new Media(filename, file);

		return this;
	}

	public getMedia(): Media[] {
		return this.media;
	}

	public async build(): Promise<Blob> {
		const zip = new JSZip();
		const entities = this.getCollectionEntities();

		for (let entity of entities) {
			this.db.insert(entity.getTable(), entity.getEntity());
		}

		const sqlite = this.db.dump();
		const manifest: Record<number, string> = {};

		for (let i = 0; i < this.media.length; i++) {
			const media = this.media[i];

			manifest[i] = media.getFilename();

			zip.file(i.toString(), media.getFile());
		}

		zip.file('collection.anki2', sqlite);
		zip.file('media', JSON.stringify(manifest));

		return await zip.generateAsync({
			type: 'blob',
			compression: 'DEFLATE'
		});
	}

	public async save(filename: string): Promise<void> {
		FileSaver.saveAs(await this.build(), filename);
	}
}

export { Card, Collection, Note, Configuration, Deck, DeckConfiguration, Model };
