import { Entity } from '../abstract';
import { CardQueue, CardQueueKey, CardType, CardTypeKey } from '../dictionary';
import { Card as CardModel } from '../model';
import { Deck } from '../object';
import { Generator } from '../service/generator';
import { Note } from './note';

/**
 * A single flashcard generated from a {@link Note}, contained within a {@link Deck}.
 *
 * @group Card
 */
export class Card extends Entity<CardModel> {
	protected table: string = 'cards';

	protected entity: CardModel = {
		id: Generator.id(),
		nid: 0,
		did: 0,
		ord: 0,
		mod: Generator.now(),
		usn: -1,
		type: CardType.new,
		queue: CardQueue.new,
		due: 1,
		ivl: 0,
		factor: 2500,
		reps: 0,
		lapses: 0,
		left: 0,
		odue: 0,
		odid: 0,
		flags: 0,
		data: ''
	};

	protected note: Note | null = null;
	protected deck: Deck | null = null;
	protected originalDeck: Deck | null = null;

	/**
	 * @param fields The field values of the {@link Note} the card is created with.
	 */
	constructor(...fields: string[]) {
		super();

		this.setNote(new Note(...fields));
	}

	public getEntity(): CardModel {
		if (this.note) {
			this.entity.nid = this.note.getId();
		}

		if (this.deck) {
			this.entity.did = this.deck.getId();
		}

		if (this.originalDeck) {
			this.entity.odid = this.originalDeck.getId();
		}

		return this.entity;
	}

	public getId(): number {
		return this.entity.id;
	}

	/**
	 * @param id The card ID (by default the time in milliseconds of when the card was created).
	 */
	public setId(id?: number): Card {
		this.entity.id = id ?? Date.now();

		return this;
	}

	/**
	 * @param note A {@link Note} containing the card's content.
	 */
	public setNote(note: Note): Card {
		this.entity.nid = note.getId();
		this.note = note;

		return this;
	}

	public getNote(): Note | null {
		return this.note;
	}

	/**
	 * @param deck A {@link Deck} the card belongs to or `null` to detach the card from its deck.
	 */
	public setDeck(deck: Deck | null): Card {
		this.entity.did = deck?.getId() ?? 0;
		this.deck = deck;

		return this;
	}

	public getDeck(): Deck | null {
		return this.deck;
	}

	public getOrdinal(): number {
		return this.entity.ord;
	}

	/**
	 * @param ordinal Identifies which of the note model's card templates the card was generated from.
	 */
	public setOrdinal(ordinal: number): Card {
		this.entity.ord = ordinal;

		return this;
	}

	public getModificationTime(): number {
		return this.entity.mod;
	}

	/**
	 * @param time The last modification time in seconds.
	 */
	public setModificationTime(time: number): Card {
		this.entity.mod = time;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): Card {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getType(): CardTypeKey {
		return this.getDictionaryKey(CardType, this.entity.type) || 'new';
	}

	/**
	 * @param type The learning state of the card: `new`, `learning`, `review` or `relearning`.
	 * Keep it consistent with the `queue` property.
	 */
	public setType(type: CardTypeKey): Card {
		this.entity.type = CardType[type];

		return this;
	}

	public getQueue(): CardQueueKey {
		return this.getDictionaryKey(CardQueue, this.entity.queue) || 'new';
	}

	/**
	 * @param queue The scheduling queue the card is placed in: `new`, `learning`, `review`,
	 * `inLearning`, `preview`, `suspended`, `userBuried` or `scheduleBuried`.
	 * Keep it consistent with the `type` property.
	 */
	public setQueue(queue: CardQueueKey): Card {
		this.entity.queue = CardQueue[queue];

		return this;
	}

	public getDue(): number {
		return this.entity.due;
	}

	/**
	 * @param due When the card is due. The meaning depends on the card type: for `new` cards
	 * it is the position in the new-card queue, for `learning` cards a timestamp in seconds,
	 * and for `review` cards the number of days since the collection was created.
	 */
	public setDue(due: number): Card {
		this.entity.due = due;

		return this;
	}

	public getInterval(): number {
		return this.entity.ivl;
	}

	/**
	 * @param interval The interval between reviews. Positive values are days, negative values are seconds.
	 */
	public setInterval(interval: number): Card {
		this.entity.ivl = interval;

		return this;
	}

	public getFactor(): number {
		return this.entity.factor;
	}

	/**
	 * @param factor The ease factor in permille (e.g. `2500` means 250%).
	 */
	public setFactor(factor: number): Card {
		this.entity.factor = factor;

		return this;
	}

	public getNumberOfReviews(): number {
		return this.entity.reps;
	}

	/**
	 * @param numberOfReviews The number of times the card has been reviewed.
	 */
	public setNumberOfReviews(numberOfReviews: number): Card {
		this.entity.reps = numberOfReviews;

		return this;
	}

	public getLapses(): number {
		return this.entity.lapses;
	}

	/**
	 * @param lapses The number of times the card was forgotten (went from the `review` state
	 * back to relearning).
	 */
	public setLapses(lapses: number): Card {
		this.entity.lapses = lapses;

		return this;
	}

	public getLeft(): number {
		return this.entity.left;
	}

	/**
	 * @param left The learning steps left, of the form `a * 1000 + b`, where `b` is the number
	 * of repetitions left until graduation and `a` is the number of repetitions left today.
	 */
	public setLeft(left: number): Card {
		this.entity.left = left;

		return this;
	}

	public getOriginalDue(): number {
		return this.entity.odue;
	}

	/**
	 * @param originalDue The original due value of the card before it was moved to a filtered deck.
	 */
	public setOriginalDue(originalDue: number): Card {
		this.entity.odue = originalDue;

		return this;
	}

	public getOriginalDeck(): Deck | null {
		return this.originalDeck;
	}

	/**
	 * @param deck The original {@link Deck} of the card before it was moved to a filtered deck
	 * or `null` to clear it.
	 */
	public setOriginalDeck(deck: Deck | null): Card {
		this.entity.odid = deck?.getId() ?? 0;
		this.originalDeck = deck;

		return this;
	}

	public getFlags(): number {
		return this.entity.flags;
	}

	/**
	 * @param flags The flag colour of the card: `0` = none, `1` = red, `2` = orange, `3` = green,
	 * `4` = blue, `5` = pink, `6` = turquoise, `7` = purple.
	 */
	public setFlags(flags: number): Card {
		this.entity.flags = flags;

		return this;
	}

	public getData(): string {
		return this.entity.data;
	}

	/**
	 * @param data Additional card data. Unused by the legacy schema; modern Anki versions
	 * store scheduler (FSRS) information here as JSON.
	 */
	public setData(data: string): Card {
		this.entity.data = data;

		return this;
	}
}
