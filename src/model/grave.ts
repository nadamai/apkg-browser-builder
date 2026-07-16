import { GraveTypeValue } from '../dictionary';

export type Grave = {
	usn: number;
	oid: number;
	type: GraveTypeValue;
};
