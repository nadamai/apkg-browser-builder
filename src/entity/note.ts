import { Entity } from '../abstract/entity';
import { Note as NoteModel } from '../model/note';

export class Note extends Entity<NoteModel> {
	protected entity: NoteModel = {
		id: 0,
		guid: 0,
		mid: 0,
		mod: 0,
		usn: 0,
		tags: '',
		flds: '',
		sfld: 0,
		csum: 0,
		flags: 0,
		data: ''
	};
}
