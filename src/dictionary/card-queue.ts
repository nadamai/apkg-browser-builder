import { ValueOf } from '../type';

export const CardQueue = {
	user_buried: -3,
	schedule_buried: -2,
	suspended: -1,
	new: 0,
	learning: 1,
	review: 2,
	in_learning: 3,
	preview: 4
} as const;

export type CardQueueKey = keyof typeof CardQueue;
export type CardQueueValue = ValueOf<typeof CardQueue>;
