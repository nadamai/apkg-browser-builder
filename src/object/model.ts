import { Object } from '../abstract';
import { ModelType, ModelTypeKey } from '../dictionary/model-type';
import { Model as ModelObject } from '../model';
import { Deck } from '../object';
import { Field } from './field';
import { CardTemplate } from './card-template';

export class Model extends Object<ModelObject> {
	protected fields: Field[] = [];
	protected templates: CardTemplate[] = [];

	protected object: ModelObject = {
		id: Date.now(),
		name: 'test',
		css: '.card {\n font-family: arial;\n font-size: 20px;\n text-align: center;\n color: black;\n background-color: white;\n}\n',
		did: 1,
		flds: [],
		latexPre:
			'\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n',
		latexPost: '',
		mod: Math.floor(Date.now() / 1000),
		req: [],
		sortf: 0,
		tags: [],
		tmpls: [],
		type: ModelType.standard,
		usn: 0,
		vers: []
	};

	constructor(name?: string) {
		super();

		const front = new Field('Front');
		const back = new Field('Back');
		const template = new CardTemplate();

		front.setOrdinal(0);
		back.setOrdinal(1);

		this.addField(front);
		this.addField(back);
		this.addTemplate(template);

		if (!name) {
			return;
		}

		this.object.name = name;
	}

	public getId(): number {
		return this.object.id;
	}

	public setId(id?: number): Model {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getCss(): string {
		return this.object.css;
	}

	public setCss(css: string): Model {
		this.object.css = css;

		return this;
	}

	public getDeckId(): number {
		return this.object.did;
	}

	public setDeckId(deckId: number): Model {
		this.object.did = deckId;

		return this;
	}

	public setDeck(deck: Deck): Model {
		this.object.did = deck.getObject().id;

		return this;
	}

	public getFields(): Field[] {
		return this.fields;
	}

	public setFields(fields: Field[]): Model {
		this.fields = fields;

		const value = this.fields.map((field: Field) => {
			return field.getObject();
		});

		this.object.flds = value;

		return this;
	}

	public updateFields(): Model {
		this.setFields(this.fields);
		this.setTemplates(this.templates);

		return this;
	}

	public addField(field: Field): Model {
		this.fields.push(field);

		this.updateFields();

		return this;
	}

	public removeField(field: Field): Model {
		this.fields.splice(this.fields.indexOf(field), 1);

		this.updateFields();

		return this;
	}

	public getTemplates(): CardTemplate[] {
		return this.templates;
	}

	public setTemplates(templates: CardTemplate[]): Model {
		this.templates = templates;

		const value = this.templates.map((template: CardTemplate) => {
			return template.getObject();
		});

		this.object.tmpls = value;

		return this;
	}

	public updateTemplates(): Model {
		this.setTemplates(this.templates);

		return this;
	}

	public addTemplate(template: CardTemplate): Model {
		this.templates.push(template);

		this.updateFields();

		return this;
	}

	public removeTemplate(template: CardTemplate): Model {
		this.templates.splice(this.templates.indexOf(template), 1);

		this.updateFields();

		return this;
	}

	public getLatexPreamble(): string {
		return this.object.latexPre;
	}

	public setLatexPreamble(preamble: string): Model {
		this.object.latexPre = preamble;

		return this;
	}

	public getLatexPostamble(): string {
		return this.object.latexPost;
	}

	public setLatexPostamble(postamble: string): Model {
		this.object.latexPost = postamble;

		return this;
	}

	public getModificationTime(): number {
		return this.object.mod;
	}

	public setModificationTime(time: number): Model {
		this.object.mod = time;

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	public setName(name: string): Model {
		this.object.name = name;

		return this;
	}

	public getSortField(): number {
		return this.object.sortf;
	}

	public setSortField(sort: number): Model {
		this.object.sortf = sort;

		return this;
	}

	public getType(): ModelTypeKey {
		return this.getDictionaryKey(ModelType, this.object.type) || 'standard';
	}

	public setType(type: ModelTypeKey): Model {
		this.object.type = ModelType[type];

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.object.usn;
	}

	public setUpdateSequenceNumber(updateSequenceNumber: number): Model {
		this.object.usn = updateSequenceNumber;

		return this;
	}
}
