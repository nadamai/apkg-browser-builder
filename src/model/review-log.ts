export type ReviewLog = {
	id: number;
	cid: number;
	usn: number;
	ease: 1 | 2 | 3 | 4;
	ivl: number;
	lastIvl: number;
	factor: number;
	time: number;
	type: 0 | 1 | 2 | 3 | 4;
};
