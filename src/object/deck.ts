import { Object } from '../abstract';
import { Card, Collection } from '../entity';
import { Deck as DeckObject } from '../model';
import { Generator } from '../service/generator';
import { DeckConfiguration } from './deck-config';
import { Model } from './model';

/**
 * A deck contained within a collection.
 */
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
		desc: '',
		md: false
	};

	protected collection: Collection | null = null;
	protected cards: Card[] = [];
	protected configuration: DeckConfiguration | null = null;
	protected model: Model | null = null;

	/**
	 * @param name The name of the deck.
	 * @param description The optional description of the deck.
	 */
	constructor(name: string, description?: string) {
		super();

		this.object.name = name;
		this.setConfiguration(new DeckConfiguration());
		this.setModel(new Model());

		if (!description) {
			return;
		}

		this.object.desc = description;
	}

	public getId(): number {
		return this.object.id;
	}

	/**
	 * @param id The card ID (by default the time in milliseconds of when the card was created).
	 */
	public setId(id?: number): Deck {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	/**
	 * @param name The name of the deck.
	 */
	public setName(name: string): Deck {
		this.object.name = name;

		return this;
	}

	public getDescription(): string {
		return this.object.desc;
	}

	/**
	 * @param description The description of the deck.
	 */
	public setDescription(description: string): Deck {
		this.object.desc = description;

		return this;
	}

	public getMarkdownDescription(): boolean {
		return this.object.md;
	}

	/**
	 * @param description If `false` it render description with legacy HTML rendering.
	 * If `true` it uses markdown rendering with `img` tags stripped.
	 */
	public setMarkdownDescription(description: boolean): Deck {
		this.object.md = description;

		return this;
	}

	public getExtendedReviewCardLimit(): number | null {
		return this.object.extendRev;
	}

	/**
	 * @param extendRev Extended review card limit.
	 */
	public setExtendedReviewCardLimit(extendRev: number | null): Deck {
		this.object.extendRev = extendRev;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.object.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): Deck {
		this.object.usn = updateSequenceNumber;

		return this;
	}

	public getCollapsed(): boolean {
		return this.object.collapsed;
	}

	/**
	 * @param collapsed Whether the deck is collapsed.
	 */
	public setCollapsed(collapsed: boolean): Deck {
		this.object.collapsed = collapsed;

		return this;
	}

	public getBrowserCollapsed(): boolean {
		return this.object.browserCollapsed;
	}

	/**
	 * @param collapsed Whether the deck is collapsed in a browser.
	 */
	public setBrowserCollapsed(collapsed: boolean): Deck {
		this.object.browserCollapsed = collapsed;

		return this;
	}

	public getNewToday(): [number, number] {
		return this.object.newToday;
	}

	/**
	 * @param newToday The first number is the number of days that have passed between the
	 * collection was created and the deck was last updated. The second is equal to the number of
	 * cards seen today in this deck minus the number of new cards in custom study today.
	 */
	public setNewToday(newToday: [number, number]): Deck {
		this.object.newToday = newToday;

		return this;
	}

	public getReviewToday(): [number, number] {
		return this.object.revToday;
	}

	/**
	 * @param revToday The first number is the number of days that have passed between the
	 * collection was created and the deck was last updated. The second is equal to the number of
	 * cards seen today in this deck minus the number of new cards in custom study today.
	 */
	public setReviewToday(revToday: [number, number]): Deck {
		this.object.revToday = revToday;

		return this;
	}

	public getLearningToday(): [number, number] {
		return this.object.lrnToday;
	}

	/**
	 * @param lrnToday The first number is the number of days that have passed between the
	 * collection was created and the deck was last updated. The second is equal to the number of
	 * cards seen today in this deck minus the number of new cards in custom study today.
	 */
	public setLearningToday(lrnToday: [number, number]): Deck {
		this.object.lrnToday = lrnToday;

		return this;
	}

	public getDynamic(): boolean {
		return this.object.dyn;
	}

	/**
	 * @param dynamic Whether the deck is dynamic (filtered).
	 */
	public setDynamic(dynamic: boolean): Deck {
		this.object.dyn = dynamic;

		return this;
	}

	public getExtendedNewCardLimit(): number | null {
		return this.object.extendNew;
	}

	/**
	 * @param extendNew Extended new card limit.
	 */
	public setExtendedNewCardLimit(extendNew: number | null): Deck {
		this.object.extendNew = extendNew;

		return this;
	}

	public getConfiguration(): DeckConfiguration | null {
		return this.configuration;
	}

	/**
	 * @param config A {@link DeckConfiguration}.
	 */
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

	/**
	 * @param model A {@link Model}.
	 */
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

	/**
	 * @param time The last modification time in milliseconds.
	 */
	public setModificationTime(time: number): Deck {
		this.object.mod = time;

		return this;
	}

	/**
	 * @param card A {@link Card}.
	 */
	public addCard(card: Card): Deck {
		card.setDeck(this);

		this.cards.push(card);

		if (!this.collection) {
			return this;
		}

		const note = card.getNote();

		if (!note) {
			return this;
		}

		const model = note.getModel();

		if (!model) {
			return this;
		}

		this.collection.addModel(model);

		return this;
	}

	/**
	 * @param card A {@link Card}.
	 */
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

	/**
	 * @param card A {@link Collection}.
	 */
	public setCollection(collection: Collection): Deck {
		this.collection = collection;

		return this;
	}
}
