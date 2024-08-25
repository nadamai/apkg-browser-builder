export const GraveType = {
	card: 0,
	note: 1,
	deck: 2
} as const;

export type GraveTypeKey = keyof typeof GraveType;
