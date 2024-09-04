import { ValueOf } from '../type';

export const ModelType = {
	standard: 0,
	cloze: 1
} as const;

export type ModelTypeKey = keyof typeof ModelType;
export type ModelTypeValue = ValueOf<typeof ModelType>;
