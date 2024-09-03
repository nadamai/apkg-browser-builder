import { Object } from '../abstract';
import { DeckConfig as DeckConfigObject } from '../model';
import { LapseCardConfig } from './lapse-card-config';
import { NewCardConfig } from './new-card-config';
import { ReviewCardConfig } from './review-card-config';

export class DeckConfig extends Object<DeckConfigObject> {
	protected lapseCardConfig: LapseCardConfig = new LapseCardConfig();
	protected newCardConfig: NewCardConfig = new NewCardConfig();
	protected reviewCardConfig: ReviewCardConfig = new ReviewCardConfig();

	protected object: DeckConfigObject = {
		autoplay: false,
		dyn: false,
		id: 1,
		lapse: this.lapseCardConfig.getObject(),
		maxTaken: 0,
		mod: 0,
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

	public setId(id?: number): DeckConfig {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	public setName(name: string): DeckConfig {
		this.object.name = name;

		return this;
	}

	public getAutoplay(): boolean {
		return this.object.autoplay;
	}

	public setAutoplay(autoplay: boolean): DeckConfig {
		this.object.autoplay = autoplay;

		return this;
	}

	public getDynamic(): boolean {
		return this.object.dyn;
	}

	public setDynamic(dynamic: boolean): DeckConfig {
		this.object.dyn = dynamic;

		return this;
	}

	public getMaxTaken(): number {
		return this.object.maxTaken;
	}

	public setMaxTaken(maxTaken: number): DeckConfig {
		this.object.maxTaken = maxTaken;

		return this;
	}

	public getModificationTime(): number {
		return this.object.mod;
	}

	public setModificationTime(time: number): DeckConfig {
		this.object.mod = time;

		return this;
	}

	public getReplay(): boolean {
		return this.object.replayq;
	}

	public setReplay(replay: boolean): DeckConfig {
		this.object.replayq = replay;

		return this;
	}

	public getTimer(): boolean {
		return this.object.timer;
	}

	public setTimer(timer: boolean): DeckConfig {
		this.object.timer = timer;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.object.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): DeckConfig {
		this.object.usn = updateSequenceNumber;

		return this;
	}

	public getLapseCardConfig(): LapseCardConfig {
		return this.lapseCardConfig;
	}

	public setLapseCardConfig(config: LapseCardConfig): DeckConfig {
		this.lapseCardConfig = config;
		this.object.lapse = this.lapseCardConfig.getObject();

		return this;
	}

	public getNewCardConfig(): NewCardConfig {
		return this.newCardConfig;
	}

	public setNewCardConfig(config: NewCardConfig): DeckConfig {
		this.newCardConfig = config;
		this.object.new = this.newCardConfig.getObject();

		return this;
	}

	public getReviewCardConfig(): ReviewCardConfig {
		return this.reviewCardConfig;
	}

	public setReviewCardConfig(config: ReviewCardConfig): DeckConfig {
		this.reviewCardConfig = config;
		this.object.rev = this.reviewCardConfig.getObject();

		return this;
	}
}
