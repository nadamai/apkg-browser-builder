import { ModelTypeValue } from '../dictionary/model-type';
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
	req: [];
	sortf: number;
	tags: [];
	tmpls: CardTemplate[];
	type: ModelTypeValue;
	usn: number;
	vers: [];
};
