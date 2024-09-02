import { Entity } from '../abstract';
import { Note as NoteModel } from '../model';

export class Note extends Entity<NoteModel> {
	protected table: string = 'notes';

	protected entity: NoteModel = {
		id: Date.now(),
		guid: 0,
		mid: 0,
		mod: 0,
		usn: -1,
		tags: '',
		flds: '',
		sfld: 0,
		csum: 0,
		flags: 0,
		data: ''
	};

	public getId(): number {
		return this.entity.id;
	}

	public setId(id?: number): Note {
		this.entity.id = id ?? Date.now();

		return this;
	}

	public getGuid(): number {
		return this.entity.guid;
	}

	public setGuid(guid: number): Note {
		this.entity.guid = guid;

		return this;
	}

	public getModelId(): number {
		return this.entity.mid;
	}

	public setModelId(modelId: number): Note {
		this.entity.mid = modelId;

		return this;
	}

	// public setModel(model: Model): Note {
	// 	this.entity.mid = model.id;

	// 	return this;
	// }

	public getModificationTime(): number {
		return this.entity.mod;
	}

	public setModificationTime(time: number): Note {
		this.entity.mod = time;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): Note {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getTags(): string {
		return this.entity.tags;
	}

	public setTags(tags: string): Note {
		this.entity.tags = tags;

		return this;
	}

	public getFields(): string[] {
		return this.entity.flds.split('\x1f');
	}

	public setFields(fields: string[]): Note {
		this.entity.flds = fields.join('\x1f');

		return this;
	}

	public getSortFields(): number {
		return this.entity.sfld;
	}

	public setSortFields(sort: number): Note {
		this.entity.sfld = sort;

		return this;
	}

	public getChecksum(): number {
		return this.entity.csum;
	}

	public setChecksum(checksum: number): Note {
		this.entity.csum = checksum;

		return this;
	}
}
