import ApkgBuilder, { Card, Collection, Deck } from 'apkg-browser-builder';

/**
 * This is the example of how to create an .apkg file with a custom .wasm provided.
 *
 * The collection object is the main object contained within the .apkg file.
 * When the card is created it can be added to the deck which is linked to the collection.
 */

// Creating a new collection
const collection = new Collection();

// Creating a deck
const deck = new Deck('My deck');

// Adding the deck to the collection
collection.addDeck(deck);

// Creating a card with the initial note data
const card = new Card('This is front', 'This is back');

// Adding the card to the deck
deck.addCard(card);

// Building and saving the .apkg file with a custom .wasm CDN source
const apkg = new ApkgBuilder(collection, {
	sqljs: {
		locateFile: (file) => `https://cdn.jsdelivr.net/npm/sql.js@1.14.1/dist/${file}`
	}
});

await apkg.save('custom-wasm-example.apkg');
