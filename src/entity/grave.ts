import { Grave as GraveModel } from '../model';
import { GraveType, GraveTypeKey } from '../dictionary';
import { Entity } from '../abstract';
import { Deck } from '../object';
import { Card } from './card';
import { Note } from './note';

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
		this.setType('card');
		this.entity.oid = card.getId();

		return this;
	}

	public setNote(note: Note): Grave {
		this.setType('note');
		this.entity.oid = note.getId();

		return this;
	}

	public setDeck(deck: Deck): Grave {
		this.setType('deck');
		this.entity.oid = deck.getId();

		return this;
	}

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
