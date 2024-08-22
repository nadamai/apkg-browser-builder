import { Entity } from '../abstract/entity';
import { Card as CardModel } from '../model/card';

export class Card extends Entity<CardModel> {
	protected entity: CardModel = {} as CardModel; // TODO: temporary

	public getFront(front: string): string {
		return '';
		// return this.name;
	}

	public setFront(front: string): Card {
		return this;
	}

	public setBack(front: string): Card {
		return this;
	}
}
