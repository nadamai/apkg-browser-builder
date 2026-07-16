import { LapseCardConfig } from './lapse-card-config';
import { NewCardConfig } from './new-card-config';
import { ReviewCardConfig } from './review-card-config';

export type DeckConfiguration = {
	autoplay: boolean;
	dyn: boolean;
	id: number;
	lapse: LapseCardConfig;
	maxTaken: number;
	mod: number;
	name: string;
	new: NewCardConfig;
	replayq: boolean;
	rev: ReviewCardConfig;
	timer: boolean;
	usn: number;
};
