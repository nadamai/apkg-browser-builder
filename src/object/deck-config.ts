import { Object } from '../abstract';
import { Order } from '../dictionary/order';
import { DeckConfig as DeckConfigObject } from '../model';
import { LapseCardConfig } from './lapse-card-config';

export class DeckConfig extends Object<DeckConfigObject> {
	protected lapse: LapseCardConfig = new LapseCardConfig();
	// protected new: NewCardConfig = new NewCardConfig();

	protected object: DeckConfigObject = {
		autoplay: false,
		dyn: false,
		id: 1,
		lapse: this.lapse.getObject(),
		maxTaken: 0,
		mod: 0,
		name: '',
		new: {
			bury: false,
			delays: [],
			initialFactor: 0,
			ints: [],
			order: Order.new_cards_random,
			perDay: 0,
			separate: 0
		},
		replayq: false,
		rev: {
			bury: false,
			ease4: 0,
			fuzz: 0,
			ivlFct: 0,
			maxIvl: 0,
			minSpace: 0,
			perDay: 0
		},
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
		return this.lapse;
	}

	public setLapseCardConfig(lapse: LapseCardConfig): DeckConfig {
		this.lapse = lapse;
		this.object.lapse = this.lapse.getObject();

		return this;
	}
}
