import { Object } from '../abstract';
import { LapseCardConfig as LapseCardConfigObject } from '../model';
import { LeechAction, LeechActionKey } from '../dictionary/leech-action';

export class LapseCardConfig extends Object<LapseCardConfigObject> {
	protected object: LapseCardConfigObject = {
		delays: [],
		leechAction: LeechAction.suspend,
		leechFails: 0,
		minInt: 0,
		mult: 0
	};

	public getDelays(): number[] {
		return this.object.delays;
	}

	public setDelays(delays: number[]): LapseCardConfig {
		this.object.delays = delays;

		return this;
	}

	public getLeechAction(): LeechActionKey {
		return this.getDictionaryKey(LeechAction, this.object.leechAction) || 'suspend';
	}

	public setLechAction(action: LeechActionKey): LapseCardConfig {
		this.object.leechAction = LeechAction[action] || 0;

		return this;
	}

	public getLeechFails(): number {
		return this.object.leechFails;
	}

	public setLechFails(fails: number): LapseCardConfig {
		this.object.leechFails = fails;

		return this;
	}

	public getMinimumInterval(): number {
		return this.object.minInt;
	}

	public setMinimumInterval(interval: number): LapseCardConfig {
		this.object.minInt = interval;

		return this;
	}

	public getMultiplier(): number {
		return this.object.mult;
	}

	public setMultiplier(multiplier: number): LapseCardConfig {
		this.object.mult = multiplier;

		return this;
	}
}
