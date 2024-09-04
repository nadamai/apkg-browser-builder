import { Object } from '../abstract';
import { ModelType } from '../dictionary/model-type';
import { Model as ModelObject } from '../model';

export class Model extends Object<ModelObject> {
	protected object: ModelObject = {
		css: '',
		did: 1,
		flds: [],
		id: 1,
		latexPre:
			'\\documentclass[12pt]{article}' +
			'\\special{papersize=3in,5in}' +
			'\\usepackage[utf8]{inputenc}' +
			'\\usepackage{amssymb,amsmath}' +
			'\\pagestyle{empty}' +
			'\\setlength{\\parindent}{0in}' +
			'\\begin{document}',
		latexPost: '\\end{document}',
		mod: 0,
		name: '',
		req: [],
		sortf: 0,
		tags: [],
		tmpls: [],
		type: ModelType.standard,
		usn: 0,
		vers: []
	};

	public getId(): number {
		return this.object.id;
	}

	public setId(id?: number): Model {
		this.object.id = id ?? Date.now();

		return this;
	}
}
