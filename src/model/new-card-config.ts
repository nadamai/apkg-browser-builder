import { CardsOrderValue } from '../dictionary/order';

export type NewCardConfig = {
	bury: boolean;
	delays: number[];
	initialFactor: number;
	ints: number[];
	order: CardsOrderValue;
	perDay: number;
	separate: boolean;
};
