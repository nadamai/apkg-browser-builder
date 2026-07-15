import { Object } from '../abstract';
import { Card, Collection } from '../entity';
import { Deck as DeckObject } from '../model';
import { Generator } from '../service/generator';
import { DeckConfiguration } from './deck-config';
import { Model } from './model';

/**
 * A deck contained within a {@link Collection} made of {@link Card}s.
 *
 * @group Deck
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
	 * Creates a deck with a default {@link DeckConfiguration} and {@link Model} attached.
	 *
	 * @param name The name of the deck. Use `::` to nest decks, e.g. `"Languages::Polish::Verbs"`.
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
	 * @param id The deck ID (by default the time in milliseconds of when the deck was created).
	 */
	public setId(id?: number): Deck {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	/**
	 * @param name The name of the deck. Use `::` to nest decks, e.g. `"Languages::Polish::Verbs"`.
	 */
	public setName(name: string): Deck {
		this.object.name = name;

		return this;
	}

	public getDescription(): string {
		return this.object.desc;
	}

	/**
	 * @param description The description of the deck, shown on its overview screen.
	 */
	public setDescription(description: string): Deck {
		this.object.desc = description;

		return this;
	}

	public getMarkdownDescription(): boolean {
		return this.object.md;
	}

	/**
	 * @param description If `false` it renders the description with legacy HTML rendering.
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
	 * @param extendRev The extended review card limit for a custom study session.
	 */
	public setExtendedReviewCardLimit(extendRev: number | null): Deck {
		this.object.extendRev = extendRev;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.object.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number, used to find changes when
	 * synchronising. `-1` indicates changes that have not been synced yet.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): Deck {
		this.object.usn = updateSequenceNumber;

		return this;
	}

	public getCollapsed(): boolean {
		return this.object.collapsed;
	}

	/**
	 * @param collapsed Whether the deck is collapsed in the main deck list.
	 */
	public setCollapsed(collapsed: boolean): Deck {
		this.object.collapsed = collapsed;

		return this;
	}

	public getBrowserCollapsed(): boolean {
		return this.object.browserCollapsed;
	}

	/**
	 * @param collapsed Whether the deck is collapsed in the card browser's sidebar.
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
	 * new cards seen today in this deck minus the number of new cards in custom study today.
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
	 * review cards seen today in this deck minus the number of review cards in custom study today.
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
	 * learning cards seen today in this deck minus the number of learning cards in custom study today.
	 */
	public setLearningToday(lrnToday: [number, number]): Deck {
		this.object.lrnToday = lrnToday;

		return this;
	}

	public getTimeToday(): [number, number] {
		return this.object.timeToday;
	}

	/**
	 * @param timeToday The first number is the number of days that have passed between the
	 * collection was created and the deck was last updated. The second is the time spent
	 * studying in this deck today, in milliseconds.
	 */
	public setTimeToday(timeToday: [number, number]): Deck {
		this.object.timeToday = timeToday;

		return this;
	}

	public getDynamic(): boolean {
		return this.object.dyn;
	}

	/**
	 * @param dynamic Whether the deck is dynamic (filtered) — a deck that temporarily gathers
	 * cards from other decks based on a search.
	 */
	public setDynamic(dynamic: boolean): Deck {
		this.object.dyn = dynamic;

		return this;
	}

	public getExtendedNewCardLimit(): number | null {
		return this.object.extendNew;
	}

	/**
	 * @param extendNew The extended new card limit for a custom study session.
	 */
	public setExtendedNewCardLimit(extendNew: number | null): Deck {
		this.object.extendNew = extendNew;

		return this;
	}

	public getConfiguration(): DeckConfiguration | null {
		return this.configuration;
	}

	/**
	 * @param config A {@link DeckConfiguration} with the deck's scheduling options, linked by ID.
	 * It is registered in the parent collection immediately if the deck is attached to one,
	 * otherwise when the deck is added to a collection.
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
	 * @param model The note {@link Model} used by the deck's cards. The model is back-referenced
	 * to this deck and registered in the parent collection immediately if the deck is attached
	 * to one, otherwise when the deck is added to a collection.
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
	 * @param time The last modification time in seconds.
	 */
	public setModificationTime(time: number): Deck {
		this.object.mod = time;

		return this;
	}

	/**
	 * @param card A {@link Card} to be added. The card is wired back to this deck, and its
	 * note's model is registered in the parent collection if the deck is attached to one.
	 * Duplicates are skipped.
	 */
	public addCard(card: Card): Deck {
		if (this.cards.indexOf(card) > -1) {
			return this;
		}

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
	 * @param card A {@link Card} to be removed and detached from this deck.
	 */
	public removeCard(card: Card): Deck {
		const index = this.cards.indexOf(card);

		if (index > -1) {
			card.setDeck(null);

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
	 * @param collection The {@link Collection} the deck belongs to. Set automatically when
	 * the deck is added to a collection.
	 */
	public setCollection(collection: Collection): Deck {
		this.collection = collection;

		return this;
	}
}
