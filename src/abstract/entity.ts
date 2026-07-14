export abstract class Entity<Model = {}> {
	protected abstract table: string;
	protected abstract entity: Model;

	/** @internal */
	public getTable(): string {
		return this.table;
	}

	/** @internal */
	public getEntity(): Model {
		return this.entity;
	}

	/** @internal */
	protected getDictionaryKey<DictionaryKey extends string | number | symbol>(
		dictionary: Record<DictionaryKey, number>,
		value: number
	): DictionaryKey | undefined {
		return (Object.keys(dictionary) as DictionaryKey[]).find((key: DictionaryKey) => dictionary[key] === value);
	}
}
