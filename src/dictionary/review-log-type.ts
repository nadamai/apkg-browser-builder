export const ReviewLogType = {
	learn: 0,
	review: 1,
	relearn: 2,
	filtered: 3,
	manula: 4
} as const;

export type ReviewLogTypeKey = keyof typeof ReviewLogType;
