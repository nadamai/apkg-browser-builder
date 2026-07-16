import { Object } from '../abstract';
import { ReviewCardConfig as ReviewCardConfigObject } from '../model';

/**
 * The scheduling options of a {@link DeckConfiguration} for review cards — cards that
 * have graduated from learning.
 */
export class ReviewCardConfig extends Object<ReviewCardConfigObject> {
	protected object: ReviewCardConfigObject = {
		bury: false,
		ease4: 1.3,
		fuzz: 0.05,
		ivlFct: 1,
		maxIvl: 36500,
		minSpace: 1,
		perDay: 200
	};

	public getBury(): boolean {
		return this.object.bury;
	}

	/**
	 * @param bury Whether review sibling cards — other cards of the same note — are buried
	 * (hidden) until the next day once one of them is answered.
	 */
	public setBury(bury: boolean): ReviewCardConfig {
		this.object.bury = bury;

		return this;
	}

	public getEasyBonus(): number {
		return this.object.ease4;
	}

	/**
	 * @param bonus The extra multiplier applied to the interval when a card is answered `Easy`,
	 * as a fraction (e.g. `1.3` = 130% of the usual next interval).
	 */
	public setEasyBonus(bonus: number): ReviewCardConfig {
		this.object.ease4 = bonus;

		return this;
	}

	public getFuzz(): number {
		return this.object.fuzz;
	}

	/**
	 * @param fuzz The random variation applied to intervals as a fraction (e.g. `0.05` = 5%),
	 * so that cards introduced together do not always stay due on the same days. Legacy —
	 * newer Anki schedulers compute their own fuzz.
	 */
	public setFuzz(fuzz: number): ReviewCardConfig {
		this.object.fuzz = fuzz;

		return this;
	}

	public getIntervalModifier(): number {
		return this.object.ivlFct;
	}

	/**
	 * @param modifier The multiplier applied to all review intervals, as a fraction
	 * (e.g. `1` = 100%, no change).
	 */
	public setIntervalModifier(modifier: number): ReviewCardConfig {
		this.object.ivlFct = modifier;

		return this;
	}

	public getMaximumInterval(): number {
		return this.object.maxIvl;
	}

	/**
	 * @param interval The maximum interval in days a review card can reach
	 * (e.g. `36500` = 100 years).
	 */
	public setMaximumInterval(interval: number): ReviewCardConfig {
		this.object.maxIvl = interval;

		return this;
	}

	public getMinimumSpace(): number {
		return this.object.minSpace;
	}

	/**
	 * @param space Legacy option. Unused by Anki; kept for schema completeness.
	 */
	public setMinimumSpace(space: number): ReviewCardConfig {
		this.object.minSpace = space;

		return this;
	}

	public getMaximumCardsPerDay(): number {
		return this.object.perDay;
	}

	/**
	 * @param cards The maximum number of review cards shown per day.
	 */
	public setMaximumCardsPerDay(cards: number): ReviewCardConfig {
		this.object.perDay = cards;

		return this;
	}
}
