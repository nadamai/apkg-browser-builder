import { ReviewLog as ReviewLogModel, Card } from '../model';
import { Entity } from '../abstract';
import {
	ReviewLogType,
	ReviewLogTypeKey,
	LearnLogEase,
	RelearnLogEase,
	ReviewLogEase,
	ReviewLogEaseKey,
	ReviewLogLearnEaseKey,
	ReviewLogRelearnEaseKey,
	ReviewLogReviewEaseKey
} from '../dictionary';

export class ReviewLog extends Entity<ReviewLogModel> {
	protected table: string = 'revlog';

	protected entity: ReviewLogModel = {
		id: Date.now(),
		cid: 0,
		usn: -1,
		ease: 1,
		ivl: 0,
		lastIvl: 0,
		factor: 0,
		time: 0,
		type: 0
	};

	public getId(): number {
		return this.entity.id;
	}

	public setId(id?: number): ReviewLog {
		this.entity.id = Date.now();

		if (id) {
			this.entity.id = id;
		}

		return this;
	}

	public getCardId(): number {
		return this.entity.cid;
	}

	public setCardId(cardId: number): ReviewLog {
		this.entity.cid = cardId;

		return this;
	}

	public setCard(card: Card): ReviewLog {
		this.entity.cid = card.id;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): ReviewLog {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getEase(): ReviewLogEaseKey {
		switch (this.entity.type) {
			case ReviewLogType.learn:
				return this.getDictionaryKey(LearnLogEase, this.entity.ease) ?? 'wrong';
			case ReviewLogType.relearn:
				return this.getDictionaryKey(RelearnLogEase, this.entity.ease) ?? 'wrong';
			default:
				return this.getDictionaryKey(ReviewLogEase, this.entity.ease) ?? 'wrong';
		}
	}

	public setEase(ease: ReviewLogEaseKey): ReviewLog {
		switch (this.entity.type) {
			case ReviewLogType.learn:
				this.entity.ease = LearnLogEase[ease as ReviewLogLearnEaseKey] ?? LearnLogEase.wrong;
				break;
			case ReviewLogType.relearn:
				this.entity.ease = RelearnLogEase[ease as ReviewLogRelearnEaseKey] ?? LearnLogEase.wrong;
				break;
			default:
				this.entity.ease = ReviewLogEase[ease as ReviewLogReviewEaseKey] ?? LearnLogEase.wrong;
				break;
		}

		return this;
	}

	public getInterval(): number {
		return this.entity.ivl;
	}

	public setInterval(interval: number): ReviewLog {
		this.entity.ivl = interval;

		return this;
	}

	public getLastInterval(): number {
		return this.entity.lastIvl;
	}

	public setLastInterval(interval: number): ReviewLog {
		this.entity.lastIvl = interval;

		return this;
	}

	public getFactor(): number {
		return this.entity.factor;
	}

	public setFactor(factor: number): ReviewLog {
		this.entity.factor = factor;

		return this;
	}

	public getTime(): number {
		return this.entity.time;
	}

	public setTime(time: number): ReviewLog {
		this.entity.time = time;

		return this;
	}

	public getType(): ReviewLogTypeKey {
		return this.getDictionaryKey(ReviewLogType, this.entity.type) || 'learn';
	}

	public setType(type: ReviewLogTypeKey): ReviewLog {
		this.entity.type = ReviewLogType[type];

		return this;
	}
}
