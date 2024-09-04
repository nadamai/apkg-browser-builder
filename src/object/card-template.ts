import { Object } from '../abstract';
import { CardTemplate as CardTemplateObject } from '../model';
import { Deck } from './deck';

export class CardTemplate extends Object<CardTemplateObject> {
	protected object: CardTemplateObject = {
		name: '',
		afmt: '',
		bafmt: '',
		qfmt: '',
		bqfmt: '',
		did: null,
		ord: 0
	};

	constructor(name?: string) {
		super();

		if (!name) {
			return;
		}

		this.object.name = name;
	}

	public getName(): string {
		return this.object.name;
	}

	public setName(name: string): CardTemplate {
		this.object.name = name;

		return this;
	}

	public getAnswerFormat(): string {
		return this.object.afmt;
	}

	public setAnswerFormat(format: string): CardTemplate {
		this.object.afmt = format;

		return this;
	}

	public getBrowserAnswerFormat(): string {
		return this.object.bafmt;
	}

	public setBrowserAnswerFormat(format: string): CardTemplate {
		this.object.bafmt = format;

		return this;
	}

	public getQuestionFormat(): string {
		return this.object.qfmt;
	}

	public setQuestionFormat(format: string): CardTemplate {
		this.object.qfmt = format;

		return this;
	}

	public getBrowserQuestionFormat(): string {
		return this.object.bqfmt;
	}

	public setBrowserQuestionFormat(format: string): CardTemplate {
		this.object.bqfmt = format;

		return this;
	}

	public getDeckId(): number | null {
		return this.object.did;
	}

	public setDeckId(deckId: number | null): CardTemplate {
		this.object.did = deckId;

		return this;
	}

	public setDeck(deck: Deck): CardTemplate {
		this.object.did = deck.getObject().id;

		return this;
	}

	public getOrdinal(): number {
		return this.object.ord;
	}

	public setOrdinal(ordinal: number): CardTemplate {
		this.object.ord = ordinal;

		return this;
	}
}
