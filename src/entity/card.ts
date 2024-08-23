import { Entity } from '../abstract/entity';
import { Card as CardModel } from '../model/card';

export class Card extends Entity<CardModel> {
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
