import { ReviewLog as ReviewLogModel } from '../model/review-log';
import { Entity } from '../abstract/entity';

export class ReviewLog extends Entity<ReviewLogModel> {
	protected entity: ReviewLogModel = {
		id: 0,
		cid: 0,
		usn: 0,
		ease: 1,
		ivl: 0,
		lastIvl: 0,
		factor: 0,
		time: 0,
		type: 0
	};
}
