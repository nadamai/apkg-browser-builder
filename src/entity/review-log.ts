import { ReviewLog as ReviewLogModel } from '../model/review-log';
import { Entity } from '../abstract/entity';
import { Card } from '../model';

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

	// TODO: ease argument
	public getEase(): number {
		return this.entity.ease;
	}

	public setEase(ease: 1 | 2 | 3 | 4): ReviewLog {
		this.entity.ease = ease;

		return this;
	}
	// TODO: ease argument end

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
}
