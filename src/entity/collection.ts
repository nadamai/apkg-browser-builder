import { Entity } from '../abstract';
import { Collection as CollectionModel, Deck as DeckModel, DeckConfig as DeckConfigModel } from '../model';
import { Deck, DeckConfig } from '../object';

export class Collection extends Entity<CollectionModel> {
	protected table: string = 'col';

	protected entity: CollectionModel = {
		id: 0,
		crt: 0,
		mod: 0,
		scm: 0,
		ver: 11,
		dty: 0,
		usn: -1,
		ls: 0,
		conf: '{}', // TODO: add getters & setters
		models: '{}', // TODO: add getters & setters
		decks: '{}',
		dconf: '{}',
		tags: '{}'
	};

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

	public getDecks(): Deck[] {
		return Object.values(JSON.parse(this.entity.decks));
	}

	public setDecks(decks: Deck[]): Collection {
		const value = decks.reduce((acc: Record<number, DeckModel>, deck: Deck) => {
			acc[deck.getId()] = deck.getObject();

			return acc;
		}, {});

		this.entity.decks = JSON.stringify(value);

		return this;
	}

	public addDeck(deck: Deck): Collection {
		const decks = this.getDecks();

		decks.push(deck);

		this.setDecks(decks);

		return this;
	}

	public removeDeck(deck: Deck): Collection {
		const decks = this.getDecks();

		decks.splice(decks.indexOf(deck), 1);

		this.setDecks(decks);

		return this;
	}

	public getDeckConfigs(): DeckConfig[] {
		return Object.values(JSON.parse(this.entity.dconf));
	}

	public setDeckConfigs(configs: DeckConfig[]): Collection {
		const value = configs.reduce((acc: Record<number, DeckConfigModel>, config: DeckConfig) => {
			acc[config.getId()] = config.getObject();

			return acc;
		}, {});

		this.entity.dconf = JSON.stringify(value);

		return this;
	}

	public addDeckConfig(config: DeckConfig): Collection {
		const configs = this.getDeckConfigs();

		configs.push(config);

		this.setDeckConfigs(configs);

		return this;
	}

	public removeDeckConfig(config: DeckConfig): Collection {
		const configs = this.getDeckConfigs();

		configs.splice(configs.indexOf(config), 1);

		this.setDeckConfigs(configs);

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
