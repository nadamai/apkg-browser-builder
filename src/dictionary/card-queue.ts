import { ValueOf } from '../type';

export const CardQueue = {
	userBuried: -3,
	scheduleBuried: -2,
	suspended: -1,
	new: 0,
	learning: 1,
	review: 2,
	inLearning: 3,
	preview: 4
} as const;

export type CardQueueKey = keyof typeof CardQueue;
export type CardQueueValue = ValueOf<typeof CardQueue>;
