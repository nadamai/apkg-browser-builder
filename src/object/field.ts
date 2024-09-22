import { Object } from '../abstract';
import { Field as FieldObject } from '../model';

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

	constructor(name?: string) {
		super();

		if (!name) {
			return;
		}

		this.object.name = name;
	}

	public getName(): string {
		return this.object.name;
	}

	public setName(name: string): Field {
		this.object.name = name;

		return this;
	}

	public getFont(): string {
		return this.object.font;
	}

	public setFont(font: string): Field {
		this.object.font = font;

		return this;
	}

	public getOrdinal(): number {
		return this.object.ord;
	}

	public setOrdinal(ordinal: number): Field {
		this.object.ord = ordinal;

		return this;
	}

	public getRightToLeft(): boolean {
		return this.object.rtl;
	}

	public setRightToLeft(rtl: boolean): Field {
		this.object.rtl = rtl;

		return this;
	}

	public getSize(): number {
		return this.object.size;
	}

	public setSize(size: number): Field {
		this.object.size = size;

		return this;
	}

	public getSticky(): boolean {
		return this.object.sticky;
	}

	public setSticky(sticky: boolean): Field {
		this.object.sticky = sticky;

		return this;
	}
}
