import { Grave as GraveModel } from '../model/grave';
import { GraveType, GraveTypeKey } from '../dictionary/grave-type';
import { Entity } from '../abstract/entity';

export class Grave extends Entity<GraveModel> {
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

	public getType(): GraveTypeKey {
		return (
			(Object.keys(GraveType) as GraveTypeKey[]).find(
				(type: GraveTypeKey) => GraveType[type] === this.entity.oid
			) || 'card'
		);
	}

	public setType(oid: GraveTypeKey): Grave {
		this.entity.oid = GraveType[oid];

		return this;
	}
}
