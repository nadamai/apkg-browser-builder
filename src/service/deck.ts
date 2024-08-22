import { Card } from '../entity';

export class Deck {
	private cards: Card[] = [];

	public getCards(): Card[] {
		return this.cards;
	}

	public add(card: Card): Deck {
		this.cards.push(card);

		return this;
	}
}
