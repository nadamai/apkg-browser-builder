import { Object } from '../abstract';
import { LapseCardConfig as LapseCardConfigObject } from '../model';
import { LeechAction, LeechActionKey } from '../dictionary/leech-action';

/**
 * The scheduling options of a {@link DeckConfiguration} for lapsed cards — cards answered
 * `Again` during review.
 */
export class LapseCardConfig extends Object<LapseCardConfigObject> {
	protected object: LapseCardConfigObject = {
		delays: [10],
		leechAction: LeechAction.suspend,
		leechFails: 8,
		minInt: 1,
		mult: 0
	};

	public getDelays(): number[] {
		return this.object.delays;
	}

	/**
	 * @param delays The relearning steps in minutes, e.g. `[10]` = a single 10-minute step.
	 * When empty, lapsed cards go straight back to the review queue.
	 */
	public setDelays(delays: number[]): LapseCardConfig {
		this.object.delays = delays;

		return this;
	}

	public getLeechAction(): LeechActionKey {
		return this.getDictionaryKey(LeechAction, this.object.leechAction) || 'suspend';
	}

	/**
	 * @param action What happens to a card marked as a leech: `suspend` or `mark` (tag only).
	 */
	public setLeechAction(action: LeechActionKey): LapseCardConfig {
		this.object.leechAction = LeechAction[action];

		return this;
	}

	public getLeechFails(): number {
		return this.object.leechFails;
	}

	/**
	 * @param fails The number of lapses after which a card is tagged as a leech
	 * (`0` = leeches disabled).
	 */
	public setLeechFails(fails: number): LapseCardConfig {
		this.object.leechFails = fails;

		return this;
	}

	public getMinimumInterval(): number {
		return this.object.minInt;
	}

	/**
	 * @param interval The minimum interval in days a card is given after a lapse.
	 */
	public setMinimumInterval(interval: number): LapseCardConfig {
		this.object.minInt = interval;

		return this;
	}

	public getMultiplier(): number {
		return this.object.mult;
	}

	/**
	 * @param multiplier The fraction of the previous interval a lapsed card keeps, e.g.
	 * `0` = the interval is reset (Anki's "new interval" option).
	 */
	public setMultiplier(multiplier: number): LapseCardConfig {
		this.object.mult = multiplier;

		return this;
	}
}
