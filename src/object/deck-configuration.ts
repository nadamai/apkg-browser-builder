import { Object } from '../abstract';
import { DeckConfiguration as DeckConfigurationObject } from '../model';
import { Generator } from '../service/generator';
import { LapseCardConfig } from './lapse-card-config';
import { NewCardConfig } from './new-card-config';
import { ReviewCardConfig } from './review-card-config';

/**
 * A named group of study options shared by the {@link Deck}s it is assigned to: timers,
 * audio playback and the {@link NewCardConfig}, {@link ReviewCardConfig} and
 * {@link LapseCardConfig} scheduling settings.
 */
export class DeckConfiguration extends Object<DeckConfigurationObject> {
	protected lapseCardConfig: LapseCardConfig = new LapseCardConfig();
	protected newCardConfig: NewCardConfig = new NewCardConfig();
	protected reviewCardConfig: ReviewCardConfig = new ReviewCardConfig();

	protected object: DeckConfigurationObject = {
		id: Generator.id(),
		name: 'Default',
		autoplay: true,
		dyn: false,
		lapse: this.lapseCardConfig.getObject(),
		maxTaken: 60,
		mod: Generator.now(),
		new: this.newCardConfig.getObject(),
		replayq: true,
		rev: this.reviewCardConfig.getObject(),
		timer: false,
		usn: -1
	};

	/**
	 * @param name The name of the configuration.
	 */
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

	/**
	 * @param id The configuration ID (by default the time in milliseconds of when the
	 * configuration was created).
	 */
	public setId(id?: number): DeckConfiguration {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	/**
	 * @param name The name of the configuration.
	 */
	public setName(name: string): DeckConfiguration {
		this.object.name = name;

		return this;
	}

	public getAutoplay(): boolean {
		return this.object.autoplay;
	}

	/**
	 * @param autoplay Whether the question audio is played automatically when the question
	 * is shown.
	 */
	public setAutoplay(autoplay: boolean): DeckConfiguration {
		this.object.autoplay = autoplay;

		return this;
	}

	public getDynamic(): boolean {
		return this.object.dyn;
	}

	/**
	 * @param dynamic Whether the configuration belongs to a dynamic (filtered) deck.
	 */
	public setDynamic(dynamic: boolean): DeckConfiguration {
		this.object.dyn = dynamic;

		return this;
	}

	public getMaxTaken(): number {
		return this.object.maxTaken;
	}

	/**
	 * @param maxTaken The maximum number of seconds a single answer can take: answers taking
	 * longer are recorded as this value.
	 */
	public setMaxTaken(maxTaken: number): DeckConfiguration {
		this.object.maxTaken = maxTaken;

		return this;
	}

	public getModificationTime(): number {
		return this.object.mod;
	}

	/**
	 * @param time The last modification time in seconds.
	 */
	public setModificationTime(time: number): DeckConfiguration {
		this.object.mod = time;

		return this;
	}

	public getReplay(): boolean {
		return this.object.replayq;
	}

	/**
	 * @param replay Whether the question audio is replayed when the answer is shown.
	 */
	public setReplay(replay: boolean): DeckConfiguration {
		this.object.replayq = replay;

		return this;
	}

	public getTimer(): boolean {
		return this.object.timer;
	}

	/**
	 * @param timer Whether the answer timer is shown during review.
	 */
	public setTimer(timer: boolean): DeckConfiguration {
		this.object.timer = timer;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.object.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number, used to find changes when
	 * synchronising. `-1` indicates changes that have not been synced yet.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): DeckConfiguration {
		this.object.usn = updateSequenceNumber;

		return this;
	}

	public getLapseCardConfig(): LapseCardConfig {
		return this.lapseCardConfig;
	}

	/**
	 * @param config The {@link LapseCardConfig} with the scheduling options for lapsed
	 * (forgotten) cards, serialized into the configuration.
	 */
	public setLapseCardConfig(config: LapseCardConfig): DeckConfiguration {
		this.lapseCardConfig = config;
		this.object.lapse = this.lapseCardConfig.getObject();

		return this;
	}

	public getNewCardConfig(): NewCardConfig {
		return this.newCardConfig;
	}

	/**
	 * @param config The {@link NewCardConfig} with the scheduling options for new cards,
	 * serialized into the configuration.
	 */
	public setNewCardConfig(config: NewCardConfig): DeckConfiguration {
		this.newCardConfig = config;
		this.object.new = this.newCardConfig.getObject();

		return this;
	}

	public getReviewCardConfig(): ReviewCardConfig {
		return this.reviewCardConfig;
	}

	/**
	 * @param config The {@link ReviewCardConfig} with the scheduling options for review cards,
	 * serialized into the configuration.
	 */
	public setReviewCardConfig(config: ReviewCardConfig): DeckConfiguration {
		this.reviewCardConfig = config;
		this.object.rev = this.reviewCardConfig.getObject();

		return this;
	}
}
