import { ModelTypeValue } from '../dictionary/model-type';
import { ModelRequirement } from '../type';
import { CardTemplate } from './card-template';
import { Field } from './field';

export type Model = {
	css: string;
	did: number;
	flds: Field[];
	id: number;
	latexPost: string;
	latexPre: string;
	mod: number;
	name: string;
	req: ModelRequirement[];
	sortf: number;
	tags: string[];
	tmpls: CardTemplate[];
	type: ModelTypeValue;
	usn: number;
	vers: number[];
};
