import { LeechActionValue } from '../dictionary/leech-action';

export type LapseConfig = {
	delays: number[];
	leechAction: LeechActionValue;
	leechFails: number;
	minInt: number;
	mult: number;
};
