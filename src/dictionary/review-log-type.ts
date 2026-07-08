import { ValueOf } from '../type';

export const ReviewLogType = {
	learn: 0,
	review: 1,
	relearn: 2,
	filtered: 3,
	manual: 4,
	rescheduled: 5
} as const;

export type ReviewLogTypeKey = keyof typeof ReviewLogType;
export type ReviewLogTypeValue = ValueOf<typeof ReviewLogType>;
