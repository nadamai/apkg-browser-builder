import ApkgBuilder, { Card, Collection, Deck } from 'apkg-browser-builder';

/**
 * This is the example of how to create an .apkg file with multiple decks at once.
 *
 * The collection object is the main object contained within the .apkg file.
 * When the card is created it can be added to the deck which is linked to the collection.
 */

// Creating a new collection
const collection = new Collection();

// Creating decks
const deckA = new Deck('My deck A');
const deckB = new Deck('My deck B');

// Adding decks to the collection
collection.addDeck(deckA);
collection.addDeck(deckB);

// Creating cards with the initial note data
const cardA = new Card('This is front A', 'This is back A');
const cardB = new Card('This is front B', 'This is back B');

// Adding cards to the decks
deckA.addCard(cardA);
deckB.addCard(cardB);

// Building and saving the .apkg file
const apkg = new ApkgBuilder(collection);

await apkg.init();
await apkg.save('multiple-decks-example.apkg');
