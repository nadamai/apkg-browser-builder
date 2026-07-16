import { Object } from '../abstract';
import { Field as FieldObject } from '../model';

/**
 * A field definition of a {@link Model} — a named slot for the {@link Note} content,
 * e.g. `Front` or `Back`.
 */
export class Field extends Object<FieldObject> {
	protected object: FieldObject = {
		name: '',
		font: 'Arial',
		media: [],
		ord: 0,
		rtl: false,
		size: 20,
		sticky: false
	};

	/**
	 * @param name The name of the field, unique within the model. Card templates reference
	 * the field's content by this name, e.g. `{{Front}}`.
	 */
	constructor(name: string) {
		super();

		this.object.name = name;
	}

	public getName(): string {
		return this.object.name;
	}

	/**
	 * @param name The name of the field, unique within the model. Card templates reference
	 * the field's content by this name, e.g. `{{Front}}`.
	 */
	public setName(name: string): Field {
		this.object.name = name;

		return this;
	}

	public getFont(): string {
		return this.object.font;
	}

	/**
	 * @param font The font used for the field in Anki's note editor. The appearance on cards
	 * is controlled by the model's CSS instead.
	 */
	public setFont(font: string): Field {
		this.object.font = font;

		return this;
	}

	public getOrdinal(): number {
		return this.object.ord;
	}

	/**
	 * @param ordinal The position of the field within its model. Managed by the parent
	 * {@link Model} — assigned automatically from the field order, so manually set values
	 * are overwritten.
	 */
	public setOrdinal(ordinal: number): Field {
		this.object.ord = ordinal;

		return this;
	}

	public getRightToLeft(): boolean {
		return this.object.rtl;
	}

	/**
	 * @param rtl Whether the field contains a right-to-left script.
	 */
	public setRightToLeft(rtl: boolean): Field {
		this.object.rtl = rtl;

		return this;
	}

	public getSize(): number {
		return this.object.size;
	}

	/**
	 * @param size The font size used for the field in Anki's note editor.
	 */
	public setSize(size: number): Field {
		this.object.size = size;

		return this;
	}

	public getSticky(): boolean {
		return this.object.sticky;
	}

	/**
	 * @param sticky Whether the field's content is kept in Anki's `Add` dialog after a note
	 * is added, instead of being cleared.
	 */
	public setSticky(sticky: boolean): Field {
		this.object.sticky = sticky;

		return this;
	}

	public getMedia(): string[] {
		return this.object.media;
	}

	/**
	 * @param media Legacy media list. Unused by Anki; kept for schema completeness.
	 */
	public setMedia(media: string[]): Field {
		this.object.media = media;

		return this;
	}
}
