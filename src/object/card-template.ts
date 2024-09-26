import { Object } from '../abstract';
import { CardTemplate as CardTemplateObject } from '../model';
import { Deck } from './deck';

export class CardTemplate extends Object<CardTemplateObject> {
	protected object: CardTemplateObject = {
		name: 'Card 1',
		qfmt: '{{Front}}',
		afmt: '{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}',
		bqfmt: '',
		bafmt: '',
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

	public setDeck(deck: Deck): CardTemplate {
		this.object.did = deck.getId();

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
