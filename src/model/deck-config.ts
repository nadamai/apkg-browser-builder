import { LapseCardConfig } from './lapse-card-config';
import { NewCardConfig } from './new-card-config';

export type DeckConfig = {
	autoplay: boolean;
	dyn: boolean;
	id: number;
	lapse: LapseCardConfig;
	maxTaken: number;
	mod: number;
	name: string;
	new: NewCardConfig;
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
