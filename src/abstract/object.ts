export abstract class Object<Model = {}> {
	protected abstract object: Model;

	public getObject(): Model {
		return this.object;
	}

	protected getDictionaryKey<DictionaryKey extends string | number | symbol>(
		dictionary: Record<DictionaryKey, number>,
		value: number
	): DictionaryKey | undefined {
		return (globalThis.Object.keys(dictionary) as DictionaryKey[]).find((key: DictionaryKey) => dictionary[key] === value);
	}
}
