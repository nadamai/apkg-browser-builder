import { Object } from '../abstract';
import { ModelType, ModelTypeKey } from '../dictionary/model-type';
import { Model as ModelObject } from '../model';
import { ModelRequirement } from '../type';
import { Deck } from '../object';
import { Field } from './field';
import { CardTemplate } from './card-template';
import { Generator } from '../service/generator';

/**
 * A note type: defines the {@link Field}s, {@link CardTemplate}s and styling used to
 * generate {@link Card}s from {@link Note}s.
 */
export class Model extends Object<ModelObject> {
	protected fields: Field[] = [];
	protected templates: CardTemplate[] = [];

	protected object: ModelObject = {
		id: Generator.id(),
		name: 'Basic',
		css: '.card {\n font-family: arial;\n font-size: 20px;\n text-align: center;\n color: black;\n background-color: white;\n}\n',
		did: 1,
		flds: [],
		latexPre:
			'\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n',
		latexPost: '',
		mod: Generator.now(),
		req: [],
		sortf: 0,
		tags: [],
		tmpls: [],
		type: ModelType.standard,
		usn: -1,
		vers: []
	};

	protected deck: Deck | null = null;

	/**
	 * Creates a model with the given {@link Field}s (`Front` and `Back` by default) and a
	 * single {@link CardTemplate} generated from the first two of them: the first field
	 * becomes the question, the second the answer.
	 *
	 * @param name The name of the model.
	 * @param fields The fields of the model, replacing the default `Front` and `Back` ones.
	 */
	constructor(name?: string, fields?: Field[]) {
		super();

		this.setFields(fields ?? [new Field('Front'), new Field('Back')]);

		const [question, answer] = this.fields;

		this.addTemplate(
			new CardTemplate(
				undefined,
				question && `{{${question.getName()}}}`,
				answer ? `{{FrontSide}}\n\n<hr id="answer">\n\n{{${answer.getName()}}}` : '{{FrontSide}}'
			)
		);

		if (!name) {
			return;
		}

		this.object.name = name;
	}

	public getObject(): ModelObject {
		if (this.deck) {
			this.object.did = this.deck.getId();
		}

		this.updateFields();
		this.updateTemplates();

		return this.object;
	}

	public getId(): number {
		return this.object.id;
	}

	/**
	 * @param id The model ID (by default the time in milliseconds of when the model was created).
	 */
	public setId(id?: number): Model {
		this.object.id = id ?? Date.now();

		return this;
	}

	public getCss(): string {
		return this.object.css;
	}

	/**
	 * @param css The CSS shared by all card templates of the model.
	 */
	public setCss(css: string): Model {
		this.object.css = css;

		return this;
	}

	public getDeck(): Deck | null {
		return this.deck;
	}

	/**
	 * @param deck The {@link Deck}, linked by ID, that cards created with this model are
	 * added to by default.
	 */
	public setDeck(deck: Deck): Model {
		this.deck = deck;
		this.object.did = deck.getId();

		return this;
	}

	public getFields(): Field[] {
		return this.fields;
	}

	/**
	 * @param fields An array of {@link Field}s replacing the current ones. Each field is
	 * added via `addField`, so duplicates are skipped; field ordinals are assigned
	 * automatically from the array order.
	 */
	public setFields(fields: Field[]): Model {
		this.fields = [];

		for (const field of fields) {
			this.addField(field);
		}

		this.updateFields();

		return this;
	}

	private updateFields(): void {
		const value = this.fields.map((field: Field, index: number) => {
			return field.setOrdinal(index).getObject();
		});

		this.object.flds = value;
	}

	/**
	 * @param field A {@link Field} to be added and serialized into the model.
	 */
	public addField(field: Field): Model {
		if (this.fields.indexOf(field) > -1) {
			return this;
		}

		this.fields.push(field);
		this.updateFields();

		return this;
	}

	/**
	 * @param field A {@link Field} to be removed.
	 */
	public removeField(field: Field): Model {
		const index = this.fields.indexOf(field);

		if (index > -1) {
			this.fields.splice(index, 1);
			this.updateFields();
		}

		return this;
	}

	public getTemplates(): CardTemplate[] {
		return this.templates;
	}

	/**
	 * @param templates An array of {@link CardTemplate}s replacing the current ones. Each
	 * template is added via `addTemplate`, so duplicates are skipped; template ordinals are
	 * assigned automatically from the array order.
	 */
	public setTemplates(templates: CardTemplate[]): Model {
		this.templates = [];

		for (const template of templates) {
			this.addTemplate(template);
		}

		this.updateTemplates();

		return this;
	}

	private updateTemplates(): void {
		const value = this.templates.map((template: CardTemplate, index: number) => {
			return template.setOrdinal(index).getObject();
		});

		this.object.tmpls = value;
	}

	/**
	 * @param template A {@link CardTemplate} to be added and serialized into the model.
	 */
	public addTemplate(template: CardTemplate): Model {
		if (this.templates.indexOf(template) > -1) {
			return this;
		}

		this.templates.push(template);
		this.updateTemplates();

		return this;
	}

	/**
	 * @param template A {@link CardTemplate} to be removed.
	 */
	public removeTemplate(template: CardTemplate): Model {
		const index = this.templates.indexOf(template);

		if (index > -1) {
			this.templates.splice(index, 1);
			this.updateTemplates();
		}

		return this;
	}

	public getLatexPreamble(): string {
		return this.object.latexPre;
	}

	/**
	 * @param preamble The LaTeX preamble used when rendering `[latex]` blocks in fields.
	 */
	public setLatexPreamble(preamble: string): Model {
		this.object.latexPre = preamble;

		return this;
	}

	public getLatexPostamble(): string {
		return this.object.latexPost;
	}

	/**
	 * @param postamble The LaTeX postamble used when rendering `[latex]` blocks in fields.
	 */
	public setLatexPostamble(postamble: string): Model {
		this.object.latexPost = postamble;

		return this;
	}

	public getModificationTime(): number {
		return this.object.mod;
	}

	/**
	 * @param time The last modification time in seconds.
	 */
	public setModificationTime(time: number): Model {
		this.object.mod = time;

		return this;
	}

	public getName(): string {
		return this.object.name;
	}

	/**
	 * @param name The name of the model.
	 */
	public setName(name: string): Model {
		this.object.name = name;

		return this;
	}

	public getSortField(): number {
		return this.object.sortf;
	}

	/**
	 * @param sort The index of the field used for sorting notes in Anki's card browser
	 * (`0` = the first field).
	 */
	public setSortField(sort: number): Model {
		this.object.sortf = sort;

		return this;
	}

	public getType(): ModelTypeKey {
		return this.getDictionaryKey(ModelType, this.object.type) || 'standard';
	}

	/**
	 * @param type The type of the model: `standard` or `cloze`.
	 */
	public setType(type: ModelTypeKey): Model {
		this.object.type = ModelType[type];

		return this;
	}

	public getUpdateSequenceNumber(): number {
		return this.object.usn;
	}

	/**
	 * @param updateSequenceNumber The update sequence number, used to find changes when
	 * synchronising. `-1` indicates changes that have not been synced yet.
	 */
	public setUpdateSequenceNumber(updateSequenceNumber: number): Model {
		this.object.usn = updateSequenceNumber;

		return this;
	}

	public getRequirements(): ModelRequirement[] {
		return this.object.req;
	}

	/**
	 * @param requirements Legacy card-generation requirements as {@link ModelRequirement} tuples,
	 * used by old Anki clients to decide which cards to generate. Modern Anki recomputes them
	 * and ignores this value.
	 */
	public setRequirements(requirements: ModelRequirement[]): Model {
		this.object.req = requirements;

		return this;
	}

	public getTags(): string[] {
		return this.object.tags;
	}

	/**
	 * @param tags Legacy cache of the tags of the last note added with this model. Unused by modern Anki.
	 */
	public setTags(tags: string[]): Model {
		this.object.tags = tags;

		return this;
	}

	public getVersions(): number[] {
		return this.object.vers;
	}

	/**
	 * @param versions Legacy version array. Unused by modern Anki.
	 */
	public setVersions(versions: number[]): Model {
		this.object.vers = versions;

		return this;
	}
}
