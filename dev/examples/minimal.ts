import ApkgBuilder from '../../src';
import { Card, Collection } from '../../src/entity';
import { Deck } from '../../src/object';

/**
 * This is the minimal example of how to create an .apkg file.
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

// Building and saving the .apkg file
const apkg = new ApkgBuilder(collection);

apkg.init().then(() => {
	apkg.save('minimal-example.apkg');
});
