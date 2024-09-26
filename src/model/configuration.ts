import { NewSpreadValue } from '../dictionary/new-spread';
import { ColumnValue } from '../type';

export type Configuration = Partial<{
	curDeck: number;
	activeDecks: number[];
	newSpread: NewSpreadValue;
	collapseTime: number;
	timeLim: number;
	estTimes: boolean;
	dueCounts: boolean;
	curModel: string;
	nextPos: number;
	sortType: string;
	sortBackwards: boolean;
	addToCur: boolean;
	dayLearnFirst: boolean;
	newBury: boolean;
	lastUnburied: number;
	activeCols: ColumnValue[];
}> &
	Record<string, any>;
