import * as FileSaver from 'file-saver';
import { Database } from './service/database';
import JSZip from 'jszip';
import { Card, Collection, Note } from './entity';
import { Configuration, Deck, DeckConfiguration, Model } from './object';
import { Entity } from './abstract';
import { Media } from './service';
import { ApkgBuilderConfig } from './type/apkg-builder-config';

/**
 * The main (`export default`) class used for generating `.apkg` package.
 */
class ApkgBuilder {
	private collection: Collection;
	private config?: Partial<ApkgBuilderConfig>;

	private media: Media[] = [];

	/**
	 * @group Methods
	 *
	 * @param collection The {@link Collection} object.
	 * @param config Optional builder configuration.
	 */
	constructor(collection: Collection, config?: Partial<ApkgBuilderConfig>) {
		this.collection = collection;
		this.config = config;
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
		const db = new Database(this.config?.sqljs);

		const entities = this.getCollectionEntities();

		try {
			await db.init();

			for (let entity of entities) {
				db.insert(entity.getTable(), entity.getEntity());
			}

			zip.file('collection.anki2', db.dump());
		} finally {
			db.close();
		}

		const manifest: Record<number, string> = {};

		for (let i = 0; i < this.media.length; i++) {
			const media = this.media[i];

			manifest[i] = media.getFilename();

			zip.file(i.toString(), media.getFile().arrayBuffer());
		}

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

export default ApkgBuilder;

export { ApkgBuilder };

export type { ApkgBuilderConfig };

/** @hidden */
export { Card, Collection, Note, Configuration, Deck, DeckConfiguration, Model, Media };
