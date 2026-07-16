import * as FileSaver from 'file-saver';
import { Database } from './service/database';
import JSZip from 'jszip';
import { Card, Collection, Note, ReviewLog } from './entity';
import { Configuration, Deck, DeckConfiguration, Model } from './object';
import { Entity } from './abstract';
import { Media } from './builder';
import { ApkgBuilderConfig } from './type/apkg-builder-config';
import { NewCardConfig } from './object/new-card-config';
import { ReviewCardConfig } from './object/review-card-config';
import { LapseCardConfig } from './object/lapse-card-config';
import { Field } from './object/field';
import { CardTemplate } from './object/card-template';
import { ModelRequirement, ModelRequirementType } from './type/model-requirement';

/**
 * The main (`export default`) class used for generating `.apkg` packages.
 */
class ApkgBuilder {
	private collection: Collection;
	private config?: Partial<ApkgBuilderConfig>;

	private media: Media[] = [];
	private reviewLogs: ReviewLog[] = [];

	/**
	 * @param collection The {@link Collection} to be exported.
	 * @param config Optional builder configuration.
	 */
	constructor(collection: Collection, config?: Partial<ApkgBuilderConfig>) {
		this.collection = collection;
		this.config = config;
	}

	public getCollection(): Collection {
		return this.collection;
	}

	/**
	 * @param collection The {@link Collection} to be exported.
	 */
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

		return [this.collection, ...cards, ...notes, ...this.reviewLogs];
	}

	public getMedia(): Media[] {
		return this.media;
	}

	/**
	 * Adds a media file to be used in the {@link Note} contents.
	 *
	 * @param filename The unique name under which the file is stored in the package.
	 * {@link Note} contents reference media by this exact name, e.g. `<img src="photo.jpg">`.
	 * @param file The file as a `Blob`.
	 */
	public addMedia(filename: string, file: Blob): ApkgBuilder {
		const index = this.media.length;

		this.media[index] = new Media(filename, file);

		return this;
	}

	/**
	 * @param media A {@link Media} file to be removed from the package.
	 */
	public removeMedia(media: Media): ApkgBuilder {
		const index = this.media.indexOf(media);

		if (index > -1) {
			this.media.splice(index, 1);
		}

		return this;
	}

	public getReviewLogs(): ReviewLog[] {
		return this.reviewLogs;
	}

	/**
	 * Adds a review history entry, exported into the collection's `revlog` table.
	 *
	 * @param reviewLog A {@link ReviewLog} to be added. Duplicates are skipped.
	 */
	public addReviewLog(reviewLog: ReviewLog): ApkgBuilder {
		if (this.reviewLogs.indexOf(reviewLog) > -1) {
			return this;
		}

		this.reviewLogs.push(reviewLog);

		return this;
	}

	/**
	 * @param reviewLog A {@link ReviewLog} to be removed.
	 */
	public removeReviewLog(reviewLog: ReviewLog): ApkgBuilder {
		const index = this.reviewLogs.indexOf(reviewLog);

		if (index > -1) {
			this.reviewLogs.splice(index, 1);
		}

		return this;
	}

	/**
	 * Returns the generated `.apkg` package as a `Blob`.
	 */
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

	/**
	 * Triggers the generated `.apkg` package download.
	 *
	 * @param filename The downloaded package filename, including extension — e.g. "my-deck.apkg".
	 */
	public async save(filename: string): Promise<void> {
		FileSaver.saveAs(await this.build(), filename);
	}
}

export default ApkgBuilder;

export {
	ApkgBuilder,
	Collection,
	Deck,
	Card,
	Note,
	ReviewLog,
	Model,
	Field,
	CardTemplate,
	Configuration,
	DeckConfiguration,
	NewCardConfig,
	ReviewCardConfig,
	LapseCardConfig,
	Media
};

export type { ApkgBuilderConfig };
