import { LeechActionValue } from '../dictionary/leech-action';
import { OrderValue } from '../dictionary/order';

export type DeckConfig = {
	autoplay: boolean;
	dyn: boolean;
	id: number;
	lapse: {
		delays: number[];
		leechAction: LeechActionValue;
		leechFails: number;
		minInt: number;
		mult: number;
	};
	maxTaken: number;
	mod: number;
	name: string;
	new: {
		bury: boolean;
		delays: number[];
		initialFactor: number;
		ints: number[];
		order: OrderValue;
		perDay: number;
		separate: number;
	};
	replayq: boolean;
	rev: {
		bury: boolean;
		ease4: number;
		fuzz: number;
		ivlFct: number;
		maxIvl: number;
		minSpace: number;
		perDay: number;
	};
	timer: boolean;
	usn: number;
};
