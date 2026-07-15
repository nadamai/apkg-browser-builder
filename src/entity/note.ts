import { Entity } from '../abstract';
import { Note as NoteModel } from '../model';
import { Model } from '../object';
import { Generator } from '../service/generator';

/**
 * A data container holding field values, used to generate {@link Card}s based on a {@link Model}.
 *
 * @group Note
 */
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
		sfld: '',
		csum: 0,
		flags: 0,
		data: ''
	};

	protected model: Model | null = null;

	/**
	 * Creates a note with a default {@link Model} attached.
	 *
	 * @param fields The values of the note's fields, in the order defined by its {@link Model}.
	 */
	constructor(...fields: string[]) {
		super();

		this.setModel(new Model());
		this.setFields(fields);
	}

	public getEntity(): NoteModel {
		if (this.model) {
			this.entity.mid = this.model.getId();
		}

		return this.entity;
	}

	public getId(): number {
		return this.entity.id;
	}

	/**
	 * @param id The note ID (by default the time in milliseconds of when the note was created).
	 */
	public setId(id?: number): Note {
		this.entity.id = id ?? Date.now();

		return this;
	}

	public getGuid(): string {
		return this.entity.guid;
	}

	/**
	 * @param guid A globally unique identifier of the note. Anki uses it when re-importing
	 * a package to match and update existing notes instead of duplicating them.
	 */
	public setGuid(guid: string): Note {
		this.entity.guid = guid;

		return this;
	}

	public getModel(): Model | null {
		return this.model;
	}

	/**
	 * @param model The {@link Model} defining the note's fields and card templates, linked by ID.
	 */
	public setModel(model: Model): Note {
		this.model = model;
		this.entity.mid = model.getId();

		return this;
	}

	public getModificationTime(): number {
		return this.entity.mod;
	}

	/**
	 * @param time The last modification time in seconds.
	 */
	public setModificationTime(time: number): Note {
		this.entity.mod = time;

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number, used to find changes when
	 * synchronising. `-1` indicates changes that have not been synced yet.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): Note {
		this.entity.usn = updateSequenceNumber;

		return this;
	}

	public getTags(): string[] {
		const tags = this.entity.tags.trim();

		return tags ? tags.split(' ') : [];
	}

	/**
	 * @param tags An array of tags. Tags must not contain spaces, as Anki stores the list
	 * space-separated.
	 */
	public setTags(tags: string[]): Note {
		this.entity.tags = tags.length ? ` ${tags.join(' ')} ` : '';

		return this;
	}

	public getFields(): string[] {
		return this.entity.flds.split('\x1f');
	}

	/**
	 * @param fields The values of the note's fields in the order defined by its {@link Model}.
	 * Stored joined with the `0x1f` unit separator. The first field (stripped of HTML) also
	 * becomes the note's sort field.
	 */
	public setFields(fields: string[]): Note {
		this.entity.flds = fields.join('\x1f');
		this.setSortField((fields[0] ?? '').replace(/<[^>]+>/g, ''));

		return this;
	}

	public getSortField(): string {
		return this.entity.sfld;
	}

	/**
	 * @param sort The value of the note's sort field used for ordering in Anki's card browser
	 * (normally the content of the first field, set automatically by `setFields`). Numeric
	 * values sort numerically — Anki's database stores them as numbers.
	 */
	public setSortField(sort: string): Note {
		this.entity.sfld = sort;

		return this;
	}

	public getChecksum(): number {
		return this.entity.csum;
	}

	/**
	 * @param checksum An integer checksum of the note's first field, used by Anki for duplicate
	 * detection - the first 8 hex digits of the SHA1 of the stripped field text, as an integer.
	 */
	public setChecksum(checksum: number): Note {
		this.entity.csum = checksum;

		return this;
	}

	public getFlags(): number {
		return this.entity.flags;
	}

	/**
	 * @param flags Unused by Anki; kept for schema completeness.
	 */
	public setFlags(flags: number): Note {
		this.entity.flags = flags;

		return this;
	}

	public getData(): string {
		return this.entity.data;
	}

	/**
	 * @param data Additional note data. Unused by Anki; kept for schema completeness.
	 */
	public setData(data: string): Note {
		this.entity.data = data;

		return this;
	}
}
