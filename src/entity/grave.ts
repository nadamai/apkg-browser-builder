import { Grave as GraveModel, Card, Note } from '../model';
import { GraveType, GraveTypeKey } from '../dictionary';
import { Entity } from '../abstract';

export class Grave extends Entity<GraveModel> {
	protected table: string = 'graves';

	protected entity: GraveModel = {
		usn: -1,
		oid: 0,
		type: 0
	};

	public getOriginalId(): number {
		return this.entity.oid;
	}

	public setOriginalId(oid: number): Grave {
		this.entity.oid = oid;

		return this;
	}

	public setCard(card: Card): Grave {
		this.entity.oid = card.id;

		return this;
	}

	public setNote(note: Note): Grave {
		this.entity.oid = note.id;

		return this;
	}

	// public setDeck(deck: Deck): Grave {
	// 	this.entity.oid = deck.id;

	// 	return this;
	// }

	public getType(): GraveTypeKey {
		return this.getDictionaryKey(GraveType, this.entity.type) || 'card';
	}

	public setType(type: GraveTypeKey): Grave {
		this.entity.type = GraveType[type];

		return this;
	}
}
