import { Object } from '../abstract';
import { NewCardConfig as NewCardConfigObject } from '../model';
import { CardsOrder, CardsOrderKey } from '../dictionary/order';

/**
 * The scheduling options of a {@link DeckConfiguration} for new cards — cards that have
 * not been studied yet.
 */
export class NewCardConfig extends Object<NewCardConfigObject> {
	protected object: NewCardConfigObject = {
		bury: false,
		delays: [1, 10],
		initialFactor: 2500,
		ints: [1, 4, 7],
		order: CardsOrder.new_cards_due,
		perDay: 20,
		separate: true
	};

	public getBury(): boolean {
		return this.object.bury;
	}

	/**
	 * @param bury Whether new sibling cards — other cards of the same note — are buried
	 * (hidden) until the next day once one of them is answered.
	 */
	public setBury(bury: boolean): NewCardConfig {
		this.object.bury = bury;

		return this;
	}

	public getDelays(): number[] {
		return this.object.delays;
	}

	/**
	 * @param delays The learning steps in minutes, e.g. `[1, 10]` = steps of 1 and 10 minutes.
	 */
	public setDelays(delays: number[]): NewCardConfig {
		this.object.delays = delays;

		return this;
	}

	public getInitialEaseFactor(): number {
		return this.object.initialFactor;
	}

	/**
	 * @param factor The ease factor in permille that cards graduate from learning with
	 * (e.g. `2500` means 250%).
	 */
	public setInitialEaseFactor(factor: number): NewCardConfig {
		this.object.initialFactor = factor;

		return this;
	}

	public getIntervals(): number[] {
		return this.object.ints;
	}

	/**
	 * @param intervals The intervals in days applied when a card leaves learning: the first
	 * for the `Good` (graduating) answer, the second for `Easy`; the third is legacy and unused.
	 */
	public setIntervals(intervals: number[]): NewCardConfig {
		this.object.ints = intervals;

		return this;
	}

	public getCardsOrder(): CardsOrderKey {
		return this.getDictionaryKey(CardsOrder, this.object.order) || 'new_cards_random';
	}

	/**
	 * @param order Whether new cards are shown in random order (`new_cards_random`) or in the
	 * order they were added (`new_cards_due`).
	 */
	public setCardsOrder(order: CardsOrderKey): NewCardConfig {
		this.object.order = CardsOrder[order];

		return this;
	}

	public getMaximumCardsPerDay(): number {
		return this.object.perDay;
	}

	public setMaximumCardsPerDay(cards: number): NewCardConfig {
		this.object.perDay = cards;

		return this;
	}

	public getSeparate(): boolean {
		return this.object.separate;
	}

	/**
	 * @param separate Legacy option. Unused by Anki; kept for schema completeness.
	 */
	public setSeparate(separate: boolean): NewCardConfig {
		this.object.separate = separate;

		return this;
	}
}
