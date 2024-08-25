export abstract class Entity<Model = {}> {
	protected abstract table: string;
	protected abstract entity: Model;

	public getTable(): string {
		return this.table;
	}

	public getEntity(): Model {
		return this.entity;
	}
}
