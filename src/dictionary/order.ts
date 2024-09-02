import { ValueOf } from '../type';

export const Order = {
	new_cards_random: 0,
	new_cards_due: 1
} as const;

export type OrdernKey = keyof typeof Order;
export type OrderValue = ValueOf<typeof Order>;
