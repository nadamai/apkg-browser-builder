import { ValueOf } from '../type';

export const NewSpread = {
	newCardsDistribute: 0,
	newCardsLast: 1,
	newCardsFirst: 2
} as const;

export type NewSpreadKey = keyof typeof NewSpread;
export type NewSpreadValue = ValueOf<typeof NewSpread>;
