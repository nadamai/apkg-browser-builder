import { ValueOf } from '../type';

export const LeechAction = {
	suspend: 0,
	mark: 1
} as const;

export type LeechActionKey = keyof typeof LeechAction;
export type LeechActionValue = ValueOf<typeof LeechAction>;
