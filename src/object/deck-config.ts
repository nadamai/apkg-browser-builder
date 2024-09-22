import { Object } from '../abstract';
import { DeckConfiguration as DeckConfigurationObject } from '../model';
import { LapseCardConfig } from './lapse-card-config';
import { NewCardConfig } from './new-card-config';
import { ReviewCardConfig } from './review-card-config';

export class DeckConfiguration extends Object<DeckConfigurationObject> {
	protected lapseCardConfig: LapseCardConfig = new LapseCardConfig();
	protected newCardConfig: NewCardConfig = new NewCardConfig();
	protected reviewCardConfig: ReviewCardConfig = new ReviewCardConfig();

	protected object: DeckConfigurationObject = {
		autoplay: false,
		dyn: false,
		id: 1,
		lapse: this.lapseCardConfig.getObject(),
		maxTaken: 0,
		mod: Math.floor(Date.now() / 1000),
		name: '',
		new: this.newCardConfig.getObject(),
		replayq: false,
		rev: this.reviewCardConfig.getObject(),
		timer: false,
		usn: -1
	};

	constructor(name?: string) {
		super();

		if (!name) {
			return;
		}

		this.object.name = name;
	}

	public getId(): number {
		return this.object.id;
	}

	public setId(id?: number): DeckConfiguration {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	public setName(name: string): DeckConfiguration {
		this.object.name = name;

		return this;
	}

	public getAutoplay(): boolean {
		return this.object.autoplay;
	}

	public setAutoplay(autoplay: boolean): DeckConfiguration {
		this.object.autoplay = autoplay;

		return this;
	}

	public getDynamic(): boolean {
		return this.object.dyn;
	}

	public setDynamic(dynamic: boolean): DeckConfiguration {
		this.object.dyn = dynamic;

		return this;
	}

	public getMaxTaken(): number {
		return this.object.maxTaken;
	}

	public setMaxTaken(maxTaken: number): DeckConfiguration {
		this.object.maxTaken = maxTaken;

		return this;
	}

	public getModificationTime(): number {
		return this.object.mod;
	}

	public setModificationTime(time: number): DeckConfiguration {
		this.object.mod = time;

		return this;
	}

	public getReplay(): boolean {
		return this.object.replayq;
	}

	public setReplay(replay: boolean): DeckConfiguration {
		this.object.replayq = replay;

		return this;
	}

	public getTimer(): boolean {
		return this.object.timer;
	}

	public setTimer(timer: boolean): DeckConfiguration {
		this.object.timer = timer;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.object.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): DeckConfiguration {
		this.object.usn = updateSequenceNumber;

		return this;
	}

	public getLapseCardConfig(): LapseCardConfig {
		return this.lapseCardConfig;
	}

	public setLapseCardConfig(config: LapseCardConfig): DeckConfiguration {
		this.lapseCardConfig = config;
		this.object.lapse = this.lapseCardConfig.getObject();

		return this;
	}

	public getNewCardConfig(): NewCardConfig {
		return this.newCardConfig;
	}

	public setNewCardConfig(config: NewCardConfig): DeckConfiguration {
		this.newCardConfig = config;
		this.object.new = this.newCardConfig.getObject();

		return this;
	}

	public getReviewCardConfig(): ReviewCardConfig {
		return this.reviewCardConfig;
	}

	public setReviewCardConfig(config: ReviewCardConfig): DeckConfiguration {
		this.reviewCardConfig = config;
		this.object.rev = this.reviewCardConfig.getObject();

		return this;
	}
}
