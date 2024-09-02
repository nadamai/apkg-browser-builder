import { Object } from '../abstract';
import { DeckConfig as DeckConfigObject } from '../model';

export class DeckConfig extends Object<DeckConfigObject> {
	protected object: DeckConfigObject = {
		id: Date.now()
	};

	public getId(): number {
		return this.object.id;
	}

	public setId(id?: number): DeckConfig {
		this.object.id = id ?? Date.now();

		return this;
	}
}
