export class Entity<Model> {
	protected entity: Model = {} as Model;

	public getEntity(): Model {
		return this.entity;
	}
}
