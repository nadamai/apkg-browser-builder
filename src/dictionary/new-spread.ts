import { ValueOf } from '../type';

export const NewSpread = {
	new_cards_distribute: 0,
	new_cards_last: 1,
	new_cards_first: 2
} as const;

export type NewSpreadKey = keyof typeof NewSpread;
export type NewSpreadValue = ValueOf<typeof NewSpread>;
