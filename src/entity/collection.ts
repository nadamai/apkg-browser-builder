import { Entity } from '../abstract/entity';
import { Collection as CollectionModel } from '../model/collection';

export class Collection extends Entity<CollectionModel> {
	protected entity: CollectionModel = {
		id: 0,
		crt: 0,
		mod: 0,
		scm: 0,
		ver: 0,
		dty: 0,
		usn: 0,
		ls: 0,
		conf: '{}',
		models: '{}',
		decks: '{}',
		dconf: '{}',
		tags: ''
	};
}
