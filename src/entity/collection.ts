import { Entity } from '../abstract';
import {
	Collection as CollectionModel,
	Deck as DeckModel,
	DeckConfiguration as DeckConfigurationModel,
	Configuration as ConfigurationModel,
	Model as ModelModel,
	Configuration
} from '../model';
import { Deck, DeckConfiguration, Model } from '../object';

export class Collection extends Entity<CollectionModel> {
	protected table: string = 'col';

	protected entity: CollectionModel = {
		id: 0,
		crt: 0,
		mod: Math.floor(Date.now() / 1000),
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

	protected conf: Configuration = {};
	protected models: Model[] = [];
	protected decks: Deck[] = [];
	protected deckConfigurations: DeckConfiguration[] = [];

	public getId(): number {
		return this.entity.id;
	}

	public setId(id: number): Collection {
		this.entity.id = id;

		return this;
	}

	public getCreationTime(): number {
		return this.entity.crt;
	}

	public setCreationTime(time: number): Collection {
		this.entity.crt = time;

		return this;
	}

	public getModificationTime(): number {
		return this.entity.mod;
	}

	public setModificationTime(time: number): Collection {
		this.entity.mod = time;

		return this;
	}

	public getSchemaModificationTime(): number {
		return this.entity.scm;
	}

	public setSchemaModificationTime(time: number): Collection {
		this.entity.scm = time;

		return this;
	}

	public getVersion(): number {
		return this.entity.ver;
	}

	public setVersion(version: number): Collection {
		this.entity.ver = version;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): Collection {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getLastSyncTime(): number {
		return this.entity.ls;
	}

	public setLastSyncTime(time: number): Collection {
		this.entity.ls = time;

		return this;
	}

	public getConfiguration(): ConfigurationModel {
		return JSON.parse(this.entity.conf);
	}

	public setConfiguration(configuration: ConfigurationModel): Collection {
		this.entity.conf = JSON.stringify(configuration);

		return this;
	}

	public getModels(): Model[] {
		return this.models;
	}

	public setModels(models: Model[]): Collection {
		this.models = models;

		const value = this.models.reduce((acc: Record<number, ModelModel>, model: Model) => {
			acc[model.getId()] = model.getObject();

			return acc;
		}, {});

		this.entity.models = JSON.stringify(value);

		return this;
	}

	public updateModels(): Collection {
		this.setModels(this.models);

		return this;
	}

	public addModel(model: Model): Collection {
		this.models.push(model);

		this.updateModels();

		return this;
	}

	public removeModel(model: Model): Collection {
		this.models.splice(this.models.indexOf(model), 1);

		this.updateModels();

		return this;
	}

	public getDecks(): Deck[] {
		return this.decks;
	}

	public setDecks(decks: Deck[]): Collection {
		this.decks = decks;

		const value = this.decks.reduce((acc: Record<number, DeckModel>, deck: Deck) => {
			acc[deck.getId()] = deck.getObject();

			return acc;
		}, {});

		this.entity.decks = JSON.stringify(value);

		return this;
	}

	public updateDecks(): Collection {
		this.setDecks(this.decks);

		return this;
	}

	public addDeck(deck: Deck): Collection {
		this.decks.push(deck);

		this.updateDecks();
		return this;
	}

	public removeDeck(deck: Deck): Collection {
		this.decks.splice(this.decks.indexOf(deck), 1);

		this.updateDecks();

		return this;
	}

	public getDeckConfigurations(): DeckConfiguration[] {
		return this.deckConfigurations;
	}

	public setDeckConfigurations(configs: DeckConfiguration[]): Collection {
		this.deckConfigurations = configs;

		const value = this.deckConfigurations.reduce(
			(acc: Record<number, DeckConfigurationModel>, config: DeckConfiguration) => {
				acc[config.getId()] = config.getObject();

				return acc;
			},
			{}
		);

		this.entity.dconf = JSON.stringify(value);

		return this;
	}

	public updateDeckConfigurations(): Collection {
		this.setDeckConfigurations(this.deckConfigurations);

		return this;
	}

	public addDeckConfiguration(config: DeckConfiguration): Collection {
		this.deckConfigurations.push(config);

		this.updateDeckConfigurations();

		return this;
	}

	public removeDeckConfiguration(config: DeckConfiguration): Collection {
		this.deckConfigurations.splice(this.deckConfigurations.indexOf(config), 1);

		this.updateDeckConfigurations();

		return this;
	}

	public getTags(): string[] {
		return JSON.parse(this.entity.tags);
	}

	public setTags(tags: string[]): Collection {
		this.entity.tags = JSON.stringify(tags);

		return this;
	}
}
