import { ValueOf } from '../type/value-of';

export const ReviewLogEase = {
	wrong: 1,
	hard: 2,
	ok: 3,
	easy: 4
} as const;

export const LearnLogEase = {
	wrong: 1,
	ok: 2,
	easy: 3
} as const;

export const RelearnLogEase = LearnLogEase;

export type ReviewLogReviewEaseKey = keyof typeof ReviewLogEase;
export type ReviewLogLearnEaseKey = keyof typeof LearnLogEase;
export type ReviewLogRelearnEaseKey = keyof typeof RelearnLogEase;

export type ReviewLogReviewEaseValue = ValueOf<typeof ReviewLogEase>;
export type ReviewLogLearnEaseValue = ValueOf<typeof LearnLogEase>;
export type ReviewLogRelearnEaseValue = ValueOf<typeof RelearnLogEase>;

export type ReviewLogEaseKey = ReviewLogReviewEaseKey | ReviewLogLearnEaseKey | ReviewLogRelearnEaseKey;
export type ReviewLogEaseValue = ReviewLogReviewEaseValue | ReviewLogLearnEaseValue | ReviewLogRelearnEaseValue;
