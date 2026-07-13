import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import ApkgBuilder, { Card, Collection, Configuration, Deck, DeckConfiguration, Model, Note } from '../src/index';
import { loadDatabase, loadZip, queryColumn, queryRow } from './helpers';
import { JSZipObject } from 'jszip';

describe('APKG Browser Builder', () => {
	it('bundles minimal deck', async () => {
		const collection = new Collection();

		const deck = new Deck('European capitals');
		const card = new Card('What is the capital of Poland?', 'Warsaw');

		deck.addCard(card);
		collection.addDeck(deck);

		const apkg = new ApkgBuilder(collection);
		const zip = await loadZip(apkg);
		const manifest = zip.file('media');

		expect(Object.keys(zip.files).sort()).toEqual(['collection.anki2', 'media']);
		expect(manifest).toBeDefined();

		const manifestContent = JSON.parse(await (manifest as JSZipObject).async('string'));

		expect(manifestContent).toEqual({});

		const db = await loadDatabase(apkg);
		const tables = queryColumn(db, "SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name");

		expect(tables).toEqual(['cards', 'col', 'graves', 'notes', 'revlog']);

		expect(queryColumn(db, 'SELECT flds FROM notes')[0]).toBe('What is the capital of Poland?\x1fWarsaw');
		expect(queryColumn(db, 'SELECT did FROM cards')[0]).toBe(deck.getId());

		db.close();
	});

	it('bundles deck with configuration, model and a note built separately', async () => {
		const collection = new Collection();
		const config = new Configuration();
		const model = new Model();

		const deck = new Deck('European capitals', 'Flashcards containing european capitals');
		const deckConfig = new DeckConfiguration('Default deck configuration');

		collection.setConfiguration(config);
		collection.addDeck(deck);

		deck.setConfiguration(deckConfig);
		deck.setModel(model);

		const note = new Note('What is the capital of Poland?', 'Warsaw');
		note.setModel(model);

		const card = new Card();
		card.setNote(note);

		deck.addCard(card);

		const apkg = new ApkgBuilder(collection);
		const db = await loadDatabase(apkg);

		const [conf, decks, dconf, models] = queryRow(db, 'SELECT conf, decks, dconf, models FROM col');

		expect(typeof conf).toBe('string');
		expect(typeof decks).toBe('string');
		expect(typeof dconf).toBe('string');
		expect(typeof models).toBe('string');

		expect(JSON.parse(conf as string)).toEqual(config.getObject());
		expect(JSON.parse(decks as string)[deck.getId()].name).toBe('European capitals');
		expect(JSON.parse(decks as string)[deck.getId()].desc).toBe('Flashcards containing european capitals');
		expect(JSON.parse(dconf as string)[deckConfig.getId()].name).toBe('Default deck configuration');
		expect(JSON.parse(models as string)[model.getId()]).toBeDefined();

		const [flds, mid] = queryRow(db, 'SELECT flds, mid FROM notes');

		expect(flds).toBe('What is the capital of Poland?\x1fWarsaw');
		expect(mid).toBe(model.getId());

		const [did, nid] = queryRow(db, 'SELECT did, nid FROM cards');

		expect(did).toBe(deck.getId());
		expect(nid).toBe(note.getId());

		db.close();
	});

	it('bundles deck with local media', async () => {
		const collection = new Collection();

		const deck = new Deck('European capitals');
		const card = new Card('What is the flag of Poland?', 'This one: <img src="pl.png" />');

		deck.addCard(card);
		collection.addDeck(deck);

		const image = readFileSync(new URL('../dev/examples/media/anki.png', import.meta.url));
		const apkg = new ApkgBuilder(collection);

		apkg.addMedia('pl.png', new Blob([image]));

		const zip = await loadZip(apkg);

		expect(Object.keys(zip.files).sort()).toEqual(['0', 'collection.anki2', 'media']);

		const manifest = zip.file('media');
		const media = zip.file('0');

		expect(manifest).toBeDefined();
		expect(media).toBeDefined();

		const manifestContent = JSON.parse(await (manifest as JSZipObject).async('string'));
		const mediaContent = await (media as JSZipObject).async('uint8array');

		expect(manifestContent).toEqual({ '0': 'pl.png' });
		expect(mediaContent).toEqual(new Uint8Array(image));

		const db = await loadDatabase(apkg);

		expect(queryColumn(db, 'SELECT flds FROM notes')[0]).toBe('What is the flag of Poland?\x1fThis one: <img src="pl.png" />');

		db.close();
	});
});
