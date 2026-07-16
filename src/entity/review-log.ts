import { ReviewLog as ReviewLogModel } from '../model';
import { Entity } from '../abstract';
import { Card } from './card';
import {
	ReviewLogType,
	ReviewLogTypeKey,
	LearnLogEase,
	ReviewLogEase,
	ReviewLogEaseKey,
	ReviewLogEaseValue,
	ReviewLogLearnEaseKey,
	ReviewLogReviewEaseKey
} from '../dictionary';
import { Generator } from '../service/generator';

/**
 * A single review history entry of a {@link Card}, stored in the collection's `revlog`
 * table. Exported review history keeps Anki's statistics and scheduling intact after
 * the package is imported.
 */
export class ReviewLog extends Entity<ReviewLogModel> {
	protected table: string = 'revlog';

	protected entity: ReviewLogModel = {
		id: Date.now(),
		cid: 0,
		usn: -1,
		ease: ReviewLogEase.wrong,
		ivl: 0,
		lastIvl: 0,
		factor: 0,
		time: 0,
		type: 0
	};

	protected card: Card | null = null;
	protected ease: ReviewLogEaseKey = 'wrong';

	public getEntity(): ReviewLogModel {
		if (this.card) {
			this.entity.cid = this.card.getId();
		}

		this.entity.ease = this.getEaseValue(this.ease);

		return this.entity;
	}

	public getId(): number {
		return this.entity.id;
	}

	/**
	 * @param id The review log ID: the time in milliseconds of when the review happened
	 * (by default the time of the creation of this entry).
	 */
	public setId(id?: number): ReviewLog {
		this.entity.id = id ?? Date.now();

		return this;
	}

	public getCard(): Card | null {
		return this.card;
	}

	/**
	 * @param card The reviewed {@link Card}, linked by ID.
	 */
	public setCard(card: Card): ReviewLog {
		this.entity.cid = card.getId();
		this.card = card;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number, used to find changes when
	 * synchronising. `-1` indicates changes that have not been synced yet.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): ReviewLog {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getEase(): ReviewLogEaseKey {
		return this.ease;
	}

	/**
	 * @param ease The button pressed to answer the card: `wrong`, `hard`, `ok` or `easy`.
	 * The value is serialized according to the log's type — `learn` and `relearn` entries
	 * use a three-button scale where `hard` falls back to `wrong`.
	 */
	public setEase(ease: ReviewLogEaseKey): ReviewLog {
		this.ease = ease;
		this.entity.ease = this.getEaseValue(ease);

		return this;
	}

	private getEaseValue(ease: ReviewLogEaseKey): ReviewLogEaseValue {
		switch (this.entity.type) {
			case ReviewLogType.learn:
			case ReviewLogType.relearn:
				return LearnLogEase[ease as ReviewLogLearnEaseKey] ?? LearnLogEase.wrong;
			default:
				return ReviewLogEase[ease as ReviewLogReviewEaseKey] ?? ReviewLogEase.wrong;
		}
	}

	public getInterval(): number {
		return this.entity.ivl;
	}

	/**
	 * @param interval The interval of the card after the review. Positive values are days,
	 * negative values are seconds.
	 */
	public setInterval(interval: number): ReviewLog {
		this.entity.ivl = interval;

		return this;
	}

	public getLastInterval(): number {
		return this.entity.lastIvl;
	}

	/**
	 * @param interval The interval of the card before the review. Positive values are days,
	 * negative values are seconds.
	 */
	public setLastInterval(interval: number): ReviewLog {
		this.entity.lastIvl = interval;

		return this;
	}

	public getFactor(): number {
		return this.entity.factor;
	}

	/**
	 * @param factor The ease factor of the card after the review, in permille (e.g. `2500`
	 * means 250%). `0` for cards in learning.
	 */
	public setFactor(factor: number): ReviewLog {
		this.entity.factor = factor;

		return this;
	}

	public getTime(): number {
		return this.entity.time;
	}

	/**
	 * @param time The duration of the review in milliseconds (Anki records at most `60000`).
	 */
	public setTime(time: number): ReviewLog {
		this.entity.time = time;

		return this;
	}

	public getType(): ReviewLogTypeKey {
		return this.getDictionaryKey(ReviewLogType, this.entity.type) || 'learn';
	}

	/**
	 * @param type The kind of the review: `learn`, `review`, `relearn`, `filtered`
	 * (reviewed in a filtered deck), `manual` or `rescheduled`.
	 */
	public setType(type: ReviewLogTypeKey): ReviewLog {
		this.entity.type = ReviewLogType[type];

		return this;
	}
}
