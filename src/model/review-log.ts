import { ReviewLogEaseValue } from '../dictionary/review-log-ease';
import { ReviewLogTypeValue } from '../dictionary/review-log-type';

export type ReviewLog = {
	id: number;
	cid: number;
	usn: number;
	ease: ReviewLogEaseValue;
	ivl: number;
	lastIvl: number;
	factor: number;
	time: number;
	type: ReviewLogTypeValue;
};
