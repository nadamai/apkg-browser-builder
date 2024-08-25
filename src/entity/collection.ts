import { Entity } from '../abstract';
import { Collection as CollectionModel } from '../model';

export class Collection extends Entity<CollectionModel> {
	protected table: string = 'col';

	protected entity: CollectionModel = {
		id: 0,
		crt: 0,
		mod: 0,
		scm: 0,
		ver: 0,
		dty: 0,
		usn: -1,
		ls: 0,
		conf: '{}',
		models: '{}',
		decks: '{}',
		dconf: '{}',
		tags: ''
	};
}
