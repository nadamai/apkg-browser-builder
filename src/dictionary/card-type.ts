import { ValueOf } from '../type';

export const CardType = {
	new: 0,
	learning: 1,
	review: 2,
	relearning: 3
} as const;

export type CardTypeKey = keyof typeof CardType;
export type CardTypeValue = ValueOf<typeof CardType>;
