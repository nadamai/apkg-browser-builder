import { describe, expect, it } from 'vitest';
import ApkgBuilder, { Card, Collection, Deck, Note } from '../src/index';
import { loadDatabase, queryRow } from './helpers';

describe('Generator', () => {
	it('assigns unique monotonically increasing IDs to entities created at the same millisecond', () => {
		const ids = Array.from({ length: 100 }, () => new Note('front', 'back').getId());

		expect(new Set(ids).size).toBe(ids.length);
		expect(ids).toEqual([...ids].sort((a, b) => a - b));
	});

	it("assigns IDs following Anki's convention of the creation time in epoch milliseconds", async () => {
		const before = Date.now();

		const collection = new Collection();
		const deck = new Deck('European capitals');

		for (let i = 0; i < 100; i++) {
			deck.addCard(new Card(`What is the capital of country ${i}?`, `Capital ${i}`));
		}

		collection.addDeck(deck);

		const db = await loadDatabase(new ApkgBuilder(collection));

		const [cards, distinctCards, minCardId] = queryRow(db, 'SELECT COUNT(id), COUNT(DISTINCT id), MIN(id) FROM cards');
		const [notes, distinctNotes, minNoteId] = queryRow(db, 'SELECT COUNT(id), COUNT(DISTINCT id), MIN(id) FROM notes');

		expect(cards).toBe(100);
		expect(distinctCards).toBe(100);
		expect(notes).toBe(100);
		expect(distinctNotes).toBe(100);

		expect(typeof minCardId).toBe('number');
		expect(typeof minNoteId).toBe('number');

		expect(minCardId as number).toBeGreaterThanOrEqual(before);
		expect(minNoteId as number).toBeGreaterThanOrEqual(before);

		db.close();
	});
});
