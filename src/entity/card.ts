import { Entity } from '../abstract';
import { CardQueue, CardQueueKey, CardType, CardTypeKey } from '../dictionary';
import { Card as CardModel, Note } from '../model';

export class Card extends Entity<CardModel> {
	protected table: string = 'cards';

	protected entity: CardModel = {
		id: 0,
		nid: 0,
		did: 0,
		ord: 0,
		mod: 0,
		usn: -1,
		type: 0,
		queue: 0,
		due: 1,
		ivl: 0,
		factor: 0,
		reps: 0,
		lapses: 0,
		left: 0,
		odue: 0,
		odid: 0,
		flags: 0,
		data: ''
	};

	public getId(): number {
		return this.entity.id;
	}

	public setId(id?: number): Card {
		this.entity.id = id ?? Date.now();

		return this;
	}

	public getNoteId(): number {
		return this.entity.nid;
	}

	public setNoteId(noteId: number): Card {
		this.entity.nid = noteId;

		return this;
	}

	public setNote(note: Note): Card {
		this.entity.nid = note.id;

		return this;
	}

	public getDeckId(): number {
		return this.entity.did;
	}

	public setDeckId(deckId: number): Card {
		this.entity.did = deckId;

		return this;
	}

	// public setDeck(deck: Deck): Card {
	// 	this.entity.did = deck.id;

	// 	return this;
	// }

	public getOrdinal(): number {
		return this.entity.ord;
	}

	public setOrdinal(ordinal: number): Card {
		this.entity.ord = ordinal;

		return this;
	}

	public getModificationTime(): number {
		return this.entity.mod;
	}

	public setModificationTime(time: number): Card {
		this.entity.mod = time;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): Card {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getType(): CardTypeKey {
		return this.getDictionaryKey(CardType, this.entity.type) || 'new';
	}

	public setType(type: CardTypeKey): Card {
		this.entity.type = CardType[type];

		return this;
	}

	public getQueue(): CardQueueKey {
		return this.getDictionaryKey(CardQueue, this.entity.queue) || 'new';
	}

	public setQueue(queue: CardQueueKey): Card {
		this.entity.queue = CardQueue[queue];

		return this;
	}

	public getDue(): number {
		return this.entity.due;
	}

	public setDue(due: number): Card {
		this.entity.due = due;

		return this;
	}

	public getInterval(): number {
		return this.entity.ivl;
	}

	public setInterval(interval: number): Card {
		this.entity.ivl = interval;

		return this;
	}

	public getFactor(): number {
		return this.entity.factor;
	}

	public setFactor(factor: number): Card {
		this.entity.factor = factor;

		return this;
	}

	public getNumberOfReviews(): number {
		return this.entity.reps;
	}

	public setNumberOfReviews(numberOfReviews: number): Card {
		this.entity.reps = numberOfReviews;

		return this;
	}

	public getLapses(): number {
		return this.entity.lapses;
	}

	public setLapses(lapses: number): Card {
		this.entity.lapses = lapses;

		return this;
	}

	public getLeft(): number {
		return this.entity.left;
	}

	public setLeft(left: number): Card {
		this.entity.left = left;

		return this;
	}

	public getOriginalDue(): number {
		return this.entity.odue;
	}

	public setOriginalDue(originalDue: number): Card {
		this.entity.odue = originalDue;

		return this;
	}

	public getOriginalDeckId(): number {
		return this.entity.odid;
	}

	public setOriginalDeckId(originalDeckId: number): Card {
		this.entity.odid = originalDeckId;

		return this;
	}

	public getFlags(): number {
		return this.entity.flags;
	}

	public setFlags(flags: number): Card {
		this.entity.flags = flags;

		return this;
	}
}
