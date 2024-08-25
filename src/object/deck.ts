import { Deck as DeckModel } from '../model';

export class Deck extends Object {
	protected object: DeckModel = {
		name: '',
		extendRev: null,
		usn: 0,
		collapsed: true,
		browserCollapsed: true,
		newToday: [0, 0],
		revToday: [0, 0],
		lrnToday: [0, 0],
		timeToday: [0, 0],
		dyn: false,
		extendNew: null,
		conf: 0,
		id: 0,
		mod: 0,
		desc: ''
	};
}
