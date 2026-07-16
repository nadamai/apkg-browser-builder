import { Grave as GraveModel } from '../model';
import { GraveType, GraveTypeKey } from '../dictionary';
import { Entity } from '../abstract';
import { Deck } from '../object';
import { Card } from './card';
import { Note } from './note';

/**
 * A deletion marker (tombstone) stored in the collection's `graves` table: tells Anki
 * during synchronisation that a {@link Card}, {@link Note} or {@link Deck} was deleted,
 * so the deletion propagates to other devices.
 */
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

	/**
	 * @param originalId The ID of the deleted object the grave marks.
	 */
	public setOriginalId(originalId: number): Grave {
		this.entity.oid = originalId;

		return this;
	}

	/**
	 * @param card The deleted {@link Card} the grave marks, linked by ID. Sets the type accordingly.
	 */
	public setCard(card: Card): Grave {
		this.setType('card');
		this.entity.oid = card.getId();

		return this;
	}

	/**
	 * @param note The deleted {@link Note} the grave marks, linked by ID. Sets the type accordingly.
	 */
	public setNote(note: Note): Grave {
		this.setType('note');
		this.entity.oid = note.getId();

		return this;
	}

	/**
	 * @param deck The deleted {@link Deck} the grave marks, linked by ID. Sets the type accordingly.
	 */
	public setDeck(deck: Deck): Grave {
		this.setType('deck');
		this.entity.oid = deck.getId();

		return this;
	}

	public getType(): GraveTypeKey {
		return this.getDictionaryKey(GraveType, this.entity.type) || 'card';
	}

	/**
	 * @param type The kind of the deleted object: `card`, `note` or `deck`. Changing the
	 * type resets the original ID, as it identifies a different kind of object.
	 */
	public setType(type: GraveTypeKey): Grave {
		if (this.entity.type !== GraveType[type]) {
			this.entity.oid = 0;
		}

		this.entity.type = GraveType[type];

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.entity.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number, used to find changes when
	 * synchronising. `-1` indicates changes that have not been synced yet.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): Grave {
		this.entity.usn = updateSequenceNumber;

		return this;
	}
}
