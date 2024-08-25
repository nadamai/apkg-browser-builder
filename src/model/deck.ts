export type Deck = {
	name: string;
	extendRev: number | null;
	usn: number;
	collapsed: boolean;
	browserCollapsed: boolean;
	newToday: [number, number];
	revToday: [number, number];
	lrnToday: [number, number];
	timeToday: [number, number];
	dyn: boolean;
	extendNew: number | null;
	conf: number | null;
	id: number;
	mod: number;
	desc: string;
};
