import { Entity } from '../abstract';
import { Note as NoteModel } from '../model';
import { Model } from '../object';
import { Generator } from '../service/generator';

export class Note extends Entity<NoteModel> {
	protected table: string = 'notes';

	protected entity: NoteModel = {
		id: Generator.id(),
		guid: Generator.guid(),
		mid: 0,
		mod: Generator.now(),
		usn: -1,
		tags: '',
		flds: '',
		sfld: 0,
		csum: 0,
		flags: 0,
		data: ''
	};

	protected model: Model | null = null;

	constructor(...fields: string[]) {
		super();

		this.entity.flds = fields.join('\x1f');
	}

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

	public getModel(): Model | null {
		return this.model;
	}

	public setModel(model: Model): Note {
		this.model = model;
		this.entity.mid = model.getId();

		return this;
	}

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

	public getTags(): string[] {
		return this.entity.tags.trim().split(' ');
	}

	public setTags(tags: string[]): Note {
		this.entity.tags = ` ${tags.join(' ')} `;

		return this;
	}

	public getFields(): string[] {
		return this.entity.flds.split('\x1f');
	}

	public setFields(fields: string[]): Note {
		this.entity.flds = fields.join('\x1f');

		return this;
	}

	public getSortField(): number {
		return this.entity.sfld;
	}

	public setSortField(sort: number): Note {
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
