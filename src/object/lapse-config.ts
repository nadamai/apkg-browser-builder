import { Object } from '../abstract';
import { LapseConfig as LapseConfigObject } from '../model';
import { LeechAction, LeechActionKey } from '../dictionary/leech-action';

export class LapseConfig extends Object<LapseConfigObject> {
	protected object: LapseConfigObject = {
		delays: [],
		leechAction: LeechAction.suspend,
		leechFails: 0,
		minInt: 0,
		mult: 0
	};

	public getDelays(): number[] {
		return this.object.delays;
	}

	public setDelays(delays: number[]): LapseConfig {
		this.object.delays = delays;

		return this;
	}

	public getLeechAction(): LeechActionKey {
		return this.getDictionaryKey(LeechAction, this.object.leechAction) || 'suspend';
	}

	public setLechAction(action: LeechActionKey): LapseConfig {
		this.object.leechAction = LeechAction[action] || 0;

		return this;
	}

	public getLeechFails(): number {
		return this.object.leechFails;
	}

	public setLechFails(fails: number): LapseConfig {
		this.object.leechFails = fails;

		return this;
	}

	public getMinimumInterval(): number {
		return this.object.minInt;
	}

	public setMinimumInterval(interval: number): LapseConfig {
		this.object.minInt = interval;

		return this;
	}

	public getMultiplier(): number {
		return this.object.mult;
	}

	public setMultiplier(multiplier: number): LapseConfig {
		this.object.mult = multiplier;

		return this;
	}
}
