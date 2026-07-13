import ApkgBuilder, { Card, Collection, Deck } from 'apkg-browser-builder';

/**
 * This is the example of how to create an .apkg cards with some media files attached to the package.
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

// Creating a card with the initial note data (it can contain any HTML)
const card = new Card('This is front', 'This is back together with some image: <img src="image.png" />');

// Adding the card to the deck
deck.addCard(card);

// Building and saving the .apkg file
const apkg = new ApkgBuilder(collection);

const resource = await fetch('../examples/media/anki.png');
const image = await resource.blob();

apkg.addMedia('image.png', image);

await apkg.init();
await apkg.save('local-media-example.apkg');
