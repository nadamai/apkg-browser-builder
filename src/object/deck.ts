import { Object } from '../abstract';
import { Card, Collection } from '../entity';
import { Deck as DeckObject } from '../model';
import { Generator } from '../service/generator';
import { DeckConfiguration } from './deck-config';
import { Model } from './model';

export class Deck extends Object<DeckObject> {
	protected object: DeckObject = {
		id: Generator.id(),
		name: '',
		extendRev: null,
		usn: -1,
		collapsed: false,
		browserCollapsed: false,
		newToday: [0, 0],
		revToday: [0, 0],
		lrnToday: [0, 0],
		timeToday: [0, 0],
		dyn: false,
		extendNew: null,
		conf: 0,
		mod: Generator.now(),
		desc: ''
	};

	protected collection: Collection | null = null;
	protected cards: Card[] = [];
	protected configuration: DeckConfiguration | null = null;
	protected model: Model | null = null;

	constructor(name: string, description?: string) {
		super();

		this.object.name = name;
		this.setConfiguration(new DeckConfiguration());

		if (!description) {
			return;
		}

		this.object.desc = description;
	}

	public getId(): number {
		return this.object.id;
	}

	public setId(id?: number): Deck {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	public setName(name: string): Deck {
		this.object.name = name;

		return this;
	}

	public getDescription(): string {
		return this.object.desc;
	}

	public setDescription(description: string): Deck {
		this.object.desc = description;

		return this;
	}

	public getExtendedReviewCardLimit(): number | null {
		return this.object.extendRev;
	}

	public setExtendedReviewCardLimit(extendRev: number | null): Deck {
		this.object.extendRev = extendRev;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.object.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): Deck {
		this.object.usn = updateSequenceNumber;

		return this;
	}

	public getCollapsed(): boolean {
		return this.object.collapsed;
	}

	public setCollapsed(collapsed: boolean): Deck {
		this.object.collapsed = collapsed;

		return this;
	}

	public getBrowserCollapsed(): boolean {
		return this.object.collapsed;
	}

	public setBrowserCollapsed(collapsed: boolean): Deck {
		this.object.browserCollapsed = collapsed;

		return this;
	}

	public getNewToday(): [number, number] {
		return this.object.newToday;
	}

	public setNewToday(newToday: [number, number]): Deck {
		this.object.newToday = newToday;

		return this;
	}

	public getReviewToday(): [number, number] {
		return this.object.revToday;
	}

	public setReviewToday(revToday: [number, number]): Deck {
		this.object.revToday = revToday;

		return this;
	}

	public getLearningToday(): [number, number] {
		return this.object.lrnToday;
	}

	public setLearningToday(lrnToday: [number, number]): Deck {
		this.object.lrnToday = lrnToday;

		return this;
	}

	public getDynamic(): boolean {
		return this.object.dyn;
	}

	public setDynamic(dynamic: boolean): Deck {
		this.object.dyn = dynamic;

		return this;
	}

	public getExtendedNewCardLimit(): number | null {
		return this.object.extendNew;
	}

	public setExtendedNewCardLimit(extendNew: number | null): Deck {
		this.object.extendNew = extendNew;

		return this;
	}

	public getConfiguration(): DeckConfiguration | null {
		return this.configuration;
	}

	public setConfiguration(config: DeckConfiguration): Deck {
		this.configuration = config;
		this.object.conf = config.getId();

		if (this.collection) {
			this.collection.addDeckConfiguration(config);
		}

		return this;
	}

	public getModel(): Model | null {
		return this.model;
	}

	public setModel(model: Model): Deck {
		this.model = model;
		model.setDeck(this);

		if (this.collection) {
			this.collection.addModel(model);
		}

		return this;
	}

	public getModificationTime(): number {
		return this.object.mod;
	}

	public setModificationTime(time: number): Deck {
		this.object.mod = time;

		return this;
	}

	public addCard(card: Card): Deck {
		card.setDeck(this);

		this.cards.push(card);

		return this;
	}

	public removeCard(card: Card): Deck {
		card.setDeck(null);

		const index = this.cards.indexOf(card);

		if (index > -1) {
			this.cards.splice(index, 1);
		}

		return this;
	}

	public getCards(): Card[] {
		return this.cards;
	}

	public getCollection(): Collection | null {
		return this.collection;
	}

	public setCollection(collection: Collection): Deck {
		this.collection = collection;

		return this;
	}
}
