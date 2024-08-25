export abstract class Object<Model = {}> {
	protected abstract object: Model;

	public getObject(): Model {
		return this.object;
	}
}
