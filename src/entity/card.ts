import { Entity } from '../interface/entity';
import { Card as Model } from '../model/card';

export class Card implements Entity {
	private name: string = '';

	public getFront(front: string): string {
		return this.name;
	}

	public setFront(front: string): Card {
		return this;
	}

	public setBack(front: string): Card {
		return this;
	}
}
