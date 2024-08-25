export class Entity<Model> {
	protected table: string = '';
	protected entity: Model = {} as Model;

	public getTable(): string {
		return this.table;
	}

	public getEntity(): Model {
		return this.entity;
	}
}
