import { Entity } from '../abstract';
import {
	Collection as CollectionModel,
	Deck as DeckModel,
	DeckConfiguration as DeckConfigurationModel,
	Model as ModelModel
} from '../model';
import { Deck, DeckConfiguration, Model } from '../object';
import { Configuration } from '../object/configuration';
import { Generator } from '../service/generator';

/**
 * The root Anki database entity containing decks, cards and all the other information.
 *
 * @group Collection
 */
export class Collection extends Entity<CollectionModel> {
	protected table: string = 'col';

	protected entity: CollectionModel = {
		id: Generator.id(),
		crt: Generator.now(),
		mod: Date.now(),
		scm: 0,
		ver: 11,
		dty: 0,
		usn: -1,
		ls: 0,
		conf: '{}',
		models: '{}',
		decks: '{}',
		dconf: '{}',
		tags: '{}'
	};

	protected configuration: Configuration | null = null;
	protected models: Model[] = [];
	protected decks: Deck[] = [];
	protected deckConfigurations: DeckConfiguration[] = [];

	public getId(): number {
		return this.entity.id;
	}

	/**
	 * @param id The ID of the collection (it can be some arbitrary number as there's only one collection).
	 */
	public setId(id: number): Collection {
		this.entity.id = id;

		return this;
	}

	public getCreationTime(): number {
		return this.entity.crt;
	}

	/**
	 * @param time The timestamp of the creation date in seconds.
	 */
	public setCreationTime(time: number): Collection {
		this.entity.crt = time;

		return this;
	}

	public getModificationTime(): number {
		return this.entity.mod;
	}

	/**
	 * @param time The last modification time in milliseconds.
	 */
	public setModificationTime(time: number): Collection {
		this.entity.mod = time;

		return this;
	}

	public getSchemaModificationTime(): number {
		return this.entity.scm;
	}

	/**
	 * @param time The last schema modification time in milliseconds.
	 */
	public setSchemaModificationTime(time: number): Collection {
		this.entity.scm = time;

		return this;
	}

	public getVersion(): number {
		return this.entity.ver;
	}

	/**
	 * @param version The Anki schema version number.
	 */
	public setVersion(version: number): Collection {
		this.entity.ver = version;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): Collection {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getLastSyncTime(): number {
		return this.entity.ls;
	}

	/**
	 * @param time The last synchronisation time in milliseconds.
	 */
	public setLastSyncTime(time: number): Collection {
		this.entity.ls = time;

		return this;
	}

	public getConfiguration(): Configuration | null {
		return this.configuration;
	}

	/**
	 * @param configuration A collection {@link Configuration}.
	 */
	public setConfiguration(configuration: Configuration): Collection {
		this.configuration = configuration;
		this.entity.conf = JSON.stringify(configuration.getObject());

		return this;
	}

	public getModels(): Model[] {
		return this.models;
	}

	/**
	 * @param models An array of possible {@link Model}s.
	 */
	public setModels(models: Model[]): Collection {
		this.models = models;

		const value = this.models.reduce((acc: Record<number, ModelModel>, model: Model) => {
			acc[model.getId()] = model.getObject();

			return acc;
		}, {});

		this.entity.models = JSON.stringify(value);

		return this;
	}

	private updateModels(): void {
		this.setModels(this.models);
	}

	/**
	 * @param model A {@link Model} to be added.
	 */
	public addModel(model: Model): Collection {
		if (this.models.indexOf(model) > -1) {
			return this;
		}

		this.models.push(model);
		this.updateModels();

		return this;
	}

	/**
	 * @param model A {@link Model} to be removed.
	 */
	public removeModel(model: Model): Collection {
		const index = this.models.indexOf(model);

		if (index > -1) {
			this.models.splice(index, 1);
			this.updateModels();
		}

		return this;
	}

	public getDecks(): Deck[] {
		return this.decks;
	}

	/**
	 * @param decks An array of {@link Deck}s to be set.
	 */
	public setDecks(decks: Deck[]): Collection {
		this.decks = [];

		for (const deck of decks) {
			this.addDeck(deck);
		}

		this.updateEntityDecks();

		return this;
	}

	private updateEntityDecks(): void {
		const value = this.decks.reduce((acc: Record<number, DeckModel>, deck: Deck) => {
			acc[deck.getId()] = deck.getObject();

			return acc;
		}, {});

		this.entity.decks = JSON.stringify(value);
	}

	/**
	 * @param deck A {@link Deck} to be added.
	 */
	public addDeck(deck: Deck): Collection {
		if (this.decks.indexOf(deck) > -1) {
			return this;
		}

		deck.setCollection(this);

		this.decks.push(deck);
		this.updateEntityDecks();

		const model = deck.getModel();
		const deckConfiguration = deck.getConfiguration();

		if (model) {
			this.addModel(model);
		}

		if (deckConfiguration) {
			this.addDeckConfiguration(deckConfiguration);
		}

		for (const card of deck.getCards()) {
			const note = card.getNote();

			if (!note) {
				continue;
			}

			const model = note.getModel();

			if (!model) {
				continue;
			}

			this.addModel(model);
		}

		return this;
	}

	/**
	 * @param deck A {@link Deck} to be removed.
	 */
	public removeDeck(deck: Deck): Collection {
		const index = this.decks.indexOf(deck);

		if (index > -1) {
			this.decks.splice(index, 1);
			this.updateEntityDecks();
		}

		return this;
	}

	public getDeckConfigurations(): DeckConfiguration[] {
		return this.deckConfigurations;
	}

	/**
	 * @param configs An array of {@link DeckConfiguration}s.
	 */
	public setDeckConfigurations(configs: DeckConfiguration[]): Collection {
		this.deckConfigurations = configs;

		const value = this.deckConfigurations.reduce((acc: Record<number, DeckConfigurationModel>, config: DeckConfiguration) => {
			acc[config.getId()] = config.getObject();

			return acc;
		}, {});

		this.entity.dconf = JSON.stringify(value);

		return this;
	}

	private updateDeckConfigurations(): void {
		this.setDeckConfigurations(this.deckConfigurations);
	}

	/**
	 * @param config A {@link DeckConfiguration}.
	 */
	public addDeckConfiguration(config: DeckConfiguration): Collection {
		if (this.deckConfigurations.indexOf(config) > -1) {
			return this;
		}

		this.deckConfigurations.push(config);
		this.updateDeckConfigurations();
		this.updateEntityDecks();

		return this;
	}

	/**
	 * @param config A {@link DeckConfiguration}.
	 */
	public removeDeckConfiguration(config: DeckConfiguration): Collection {
		const index = this.deckConfigurations.indexOf(config);

		if (index > -1) {
			this.deckConfigurations.splice(index, 1);
			this.updateDeckConfigurations();
			this.updateEntityDecks();
		}

		return this;
	}

	public getTags(): string[] {
		return JSON.parse(this.entity.tags);
	}

	/**
	 * @param tags An array of collection tags.
	 */
	public setTags(tags: string[]): Collection {
		this.entity.tags = JSON.stringify(tags);

		return this;
	}
}
