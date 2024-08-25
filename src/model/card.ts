import { CardQueueValue, CardTypeValue } from '../dictionary';

export type Card = {
	id: number;
	nid: number;
	did: number;
	ord: number;
	mod: number;
	usn: number;
	type: CardTypeValue;
	queue: CardQueueValue;
	due: number;
	ivl: number;
	factor: number;
	reps: number;
	lapses: number;
	left: number;
	odue: number;
	odid: number;
	flags: number;
	data: string;
};
