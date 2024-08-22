import { Entity } from '../interface/entity';
import { Card as Model } from '../model/card';

export class Card implements Entity {
	private name: string = '';

	mapping(card: Model): string {
		return '';
	}
}
