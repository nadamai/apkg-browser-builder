import { Object } from '../abstract';
import { Order } from '../dictionary/order';
import { DeckConfig as DeckConfigObject } from '../model';

export class DeckConfig extends Object<DeckConfigObject> {
	protected object: DeckConfigObject = {
		autoplay: false,
		dyn: false,
		id: 1,
		lapse: {
			delays: [],
			leechAction: 0,
			leechFails: 0,
			minInt: 0,
			mult: 0
		},
		maxTaken: 0,
		mod: 0,
		name: '',
		new: {
			bury: false,
			delays: [],
			initialFactor: 0,
			ints: [],
			order: Order.new_cards_random,
			perDay: 0,
			separate: 0
		},
		replayq: false,
		rev: {
			bury: false,
			ease4: 0,
			fuzz: 0,
			ivlFct: 0,
			maxIvl: 0,
			minSpace: 0,
			perDay: 0
		},
		timer: false,
		usn: -1
	};

	constructor(name?: string) {
		super();

		if (!name) {
			return;
		}

		this.object.name = name;
	}

	public getId(): number {
		return this.object.id;
	}

	public setId(id?: number): DeckConfig {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	public setName(name: string): DeckConfig {
		this.object.name = name;

		return this;
	}
}
