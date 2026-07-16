import { Object } from '../abstract';
import { CardTemplate as CardTemplateObject } from '../model';
import { Deck } from './deck';

/**
 * A card template of a {@link Model}: defines how the question and answer sides of
 * {@link Card}s are rendered from the {@link Note} fields. Each template of a model
 * generates one card per note.
 */
export class CardTemplate extends Object<CardTemplateObject> {
	protected object: CardTemplateObject = {
		name: 'Card 1',
		qfmt: '{{Front}}',
		afmt: '{{FrontSide}}\n\n<hr id="answer">\n\n{{Back}}',
		bqfmt: '',
		bafmt: '',
		did: null,
		ord: 0
	};

	protected deck: Deck | null = null;

	/**
	 * @param name The name of the template.
	 * @param questionFormat The question (front side) template of the card.
	 * @param answerFormat The answer (back side) template of the card.
	 */
	constructor(name?: string, questionFormat?: string, answerFormat?: string) {
		super();

		if (name) {
			this.object.name = name;
		}

		if (questionFormat) {
			this.object.qfmt = questionFormat;
		}

		if (answerFormat) {
			this.object.afmt = answerFormat;
		}
	}

	public getObject(): CardTemplateObject {
		if (this.deck) {
			this.object.did = this.deck.getId();
		}

		return this.object;
	}

	public getName(): string {
		return this.object.name;
	}

	/**
	 * @param name The name of the template, e.g. `Card 1`.
	 */
	public setName(name: string): CardTemplate {
		this.object.name = name;

		return this;
	}

	public getAnswerFormat(): string {
		return this.object.afmt;
	}

	/**
	 * @param format The template of the answer (back) side, where `{{FrontSide}}` embeds the
	 * rendered question side and field names in double braces are replaced with the note's
	 * content, e.g. `{{FrontSide}}\n\n<hr id="answer">\n\n{{Back}}`.
	 */
	public setAnswerFormat(format: string): CardTemplate {
		this.object.afmt = format;

		return this;
	}

	public getBrowserAnswerFormat(): string {
		return this.object.bafmt;
	}

	/**
	 * @param format An optional alternative answer template used by Anki's card browser
	 * (empty = the regular one is used).
	 */
	public setBrowserAnswerFormat(format: string): CardTemplate {
		this.object.bafmt = format;

		return this;
	}

	public getQuestionFormat(): string {
		return this.object.qfmt;
	}

	/**
	 * @param format The template of the question (front) side — field names in double braces
	 * are replaced with the note's content, e.g. `{{Front}}`.
	 */
	public setQuestionFormat(format: string): CardTemplate {
		this.object.qfmt = format;

		return this;
	}

	public getBrowserQuestionFormat(): string {
		return this.object.bqfmt;
	}

	/**
	 * @param format An optional alternative question template used by Anki's card browser
	 * (empty = the regular one is used).
	 */
	public setBrowserQuestionFormat(format: string): CardTemplate {
		this.object.bqfmt = format;

		return this;
	}

	public getDeck(): Deck | null {
		return this.deck;
	}

	/**
	 * @param deck A {@link Deck} override, linked by ID: cards generated from this template
	 * are placed in it instead of the note's deck, or `null` to remove the override.
	 */
	public setDeck(deck: Deck | null): CardTemplate {
		this.object.did = deck?.getId() ?? null;
		this.deck = deck;

		return this;
	}

	public getOrdinal(): number {
		return this.object.ord;
	}

	/**
	 * @param ordinal The position of the template within its model. Managed by the parent
	 * {@link Model} — assigned automatically from the template order, so manually set values
	 * are overwritten.
	 */
	public setOrdinal(ordinal: number): CardTemplate {
		this.object.ord = ordinal;

		return this;
	}
}
