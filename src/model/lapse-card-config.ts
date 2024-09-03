import { LeechActionValue } from '../dictionary/leech-action';

export type LapseCardConfig = {
	delays: number[];
	leechAction: LeechActionValue;
	leechFails: number;
	minInt: number;
	mult: number;
};
