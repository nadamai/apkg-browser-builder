import { Object } from '../abstract';
import { Model as ModelObject } from '../model';

export class Model extends Object<ModelObject> {
	protected object: ModelObject = {
		id: 1
	};

	public getId(): number {
		return this.object.id;
	}

	public setId(id?: number): Model {
		this.object.id = id ?? Date.now();

		return this;
	}
}
