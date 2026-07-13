import ApkgBuilder, { Card, Collection, Deck } from 'apkg-browser-builder';

/**
 * This is the example of how to create an .apkg cards with Base64 media attached.
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

// Base64 PNG image
const base64 =
	'iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII=';

// Creating a card with the initial note data containing a Base64 image (it can contain any HTML)
const card = new Card(
	'This is front',
	`This is back together with some Base64 image: <img src="data:image/png;base64,${base64}" />`
);

// Adding the card to the deck
deck.addCard(card);

// Building and saving the .apkg file
const apkg = new ApkgBuilder(collection);

await apkg.init();
await apkg.save('base64-media-example.apkg');
