import { GraveTypeValue } from '../dictionary/grave-type';

export type Grave = {
	usn: -1;
	oid: number;
	type: GraveTypeValue;
};
