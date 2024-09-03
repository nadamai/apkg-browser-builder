import { ValueOf } from '../type';

export const CardsOrder = {
	new_cards_random: 0,
	new_cards_due: 1
} as const;

export type CardsOrderKey = keyof typeof CardsOrder;
export type CardsOrderValue = ValueOf<typeof CardsOrder>;
