import { ValueOf } from '../type';

export const CardType = {
	card: 0,
	note: 1,
	deck: 2
} as const;

export type CardTypeKey = keyof typeof CardType;
export type CardTypeValue = ValueOf<typeof CardType>;
