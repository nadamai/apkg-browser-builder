import { Object } from '../abstract';
import { NewCardConfig as NewCardConfigObject } from '../model';
import { CardsOrder, CardsOrderKey } from '../dictionary/order';

export class NewCardConfig extends Object<NewCardConfigObject> {
	protected object: NewCardConfigObject = {
		bury: false,
		delays: [],
		initialFactor: 0,
		ints: [],
		order: CardsOrder.new_cards_random,
		perDay: 20,
		separate: 0
	};

	public getBury(): boolean {
		return this.object.bury;
	}

	public setBury(bury: boolean): NewCardConfig {
		this.object.bury = bury;

		return this;
	}

	public getDelays(): number[] {
		return this.object.delays;
	}

	public setDelays(delays: number[]): NewCardConfig {
		this.object.delays = delays;

		return this;
	}

	public getInitialEaseFactor(): number {
		return this.object.initialFactor;
	}

	public setInitialEaseFactor(factor: number): NewCardConfig {
		this.object.initialFactor = factor;

		return this;
	}

	public getIntervals(): number[] {
		return this.object.ints;
	}

	public setIntervals(intervals: number[]): NewCardConfig {
		this.object.ints = intervals;

		return this;
	}

	public getCardsOrder(): CardsOrderKey {
		return this.getDictionaryKey(CardsOrder, this.object.order) || 'new_cards_random';
	}

	public setCardsOrder(order: CardsOrderKey): NewCardConfig {
		this.object.order = CardsOrder[order] || 0;

		return this;
	}

	public getMaximumCardsPerDay(): number {
		return this.object.perDay;
	}

	public setMaximumCardsPerDay(cards: number): NewCardConfig {
		this.object.perDay = cards;

		return this;
	}
}
