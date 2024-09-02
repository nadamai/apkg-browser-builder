import { Object } from '../abstract';
import { Deck as DeckObject } from '../model';

export class Deck extends Object<DeckObject> {
	protected object: DeckObject = {
		name: '',
		extendRev: null,
		usn: 0,
		collapsed: false,
		browserCollapsed: false,
		newToday: [0, 0],
		revToday: [0, 0],
		lrnToday: [0, 0],
		timeToday: [0, 0],
		dyn: false,
		extendNew: null,
		conf: 0,
		id: Date.now(),
		mod: 0,
		desc: ''
	};

	constructor(name: string, description?: string) {
		super();

		this.object.name = name;

		if (!description) {
			return;
		}

		this.object.desc = description;
	}

	public getId(): number {
		return this.object.id;
	}

	public setId(id?: number): Deck {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	public setName(name: string): Deck {
		this.object.name = name;

		return this;
	}

	public getDescription(): string {
		return this.object.desc;
	}

	public setDescription(description: string): Deck {
		this.object.desc = description;

		return this;
	}
}
