import { Grave as GraveModel, Card, Note } from '../model';
import { GraveType, GraveTypeKey } from '../dictionary';
import { Entity } from '../abstract';

export class Grave extends Entity<GraveModel> {
	protected table: string = 'graves';

	protected entity: GraveModel = {
		usn: -1,
		oid: 0,
		type: GraveType.card
	};

	public getOriginalId(): number {
		return this.entity.oid;
	}

	public setOriginalId(originalId: number): Grave {
		this.entity.oid = originalId;

		return this;
	}

	public setCard(card: Card): Grave {
		this.entity.oid = card.id;

		this.setType('card');

		return this;
	}

	public setNote(note: Note): Grave {
		this.entity.oid = note.id;

		this.setType('note');

		return this;
	}

	// public setDeck(deck: Deck): Grave {
	// 	this.entity.oid = deck.id;
	//
	//  this.setType('deck');

	// 	return this;
	// }

	public getType(): GraveTypeKey {
		return this.getDictionaryKey(GraveType, this.entity.type) || 'card';
	}

	public setType(type: GraveTypeKey): Grave {
		if (this.entity.type !== GraveType[type]) {
			this.entity.oid = 0;
		}

		this.entity.type = GraveType[type];

		return this;
	}
}
