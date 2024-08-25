import { ReviewLogEaseValue, ReviewLogTypeValue } from '../dictionary';

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
