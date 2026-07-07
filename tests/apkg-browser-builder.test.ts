import JSZip from 'jszip';
import initSqlJs from 'sql.js';
import { describe, expect, it } from 'vitest';
import ApkgBuilder, { Card, Collection, Deck } from '../src/index';

describe('APKG Browser Builder', () => {
	it('bundles minimal deck', async () => {
		const collection = new Collection();

		const deck = new Deck('European capitals');
		const card = new Card('What is the capital of Poland?', 'Warsaw');

		deck.addCard(card);
		collection.addDeck(deck);

		const builder = new ApkgBuilder(collection);
		
		await builder.init();

		const apkg = await builder.build();
		const zip = await JSZip.loadAsync(await apkg.arrayBuffer());

		expect(Object.keys(zip.files).sort()).toEqual(['collection.anki2', 'media/']);

		const sqlite = await zip.file('collection.anki2')?.async('uint8array');

		expect(sqlite).toBeDefined();

		const sql = await initSqlJs();
		const db = new sql.Database(sqlite);

		const [tables] = db.exec("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name");
		expect(tables.values.flat()).toEqual(['cards', 'col', 'graves', 'notes', 'revlog']);

		const [notes] = db.exec('SELECT flds FROM notes');
		expect(notes.values[0][0]).toBe('What is the capital of Poland?\x1fWarsaw');

		const [cards] = db.exec('SELECT did FROM cards');
		expect(cards.values[0][0]).toBe(deck.getId());

		db.close();
	});
});
