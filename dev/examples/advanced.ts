import ApkgBuilder from '../../src';
import { Card, Collection, Note } from '../../src/entity';
import { Deck, DeckConfiguration, Model } from '../../src/object';
import { Configuration } from '../../src/object/configuration';

/**
 * This is more advanced example of how to create an .apkg file.
 *
 * The collection object is the main object contained within the .apkg file.
 * The collection can contain the configuration and multiple decks with their own configs.
 * Decks and notes can have separate models (in this example we set the same model for both).
 * We then append the node to the card and add it to the deck in the collection.
 *
 * All the objects here can be modified using the proper getters/setters defined in their classes.
 */

// Creating a new collection
const collection = new Collection();

// Creating a configuration for collection
const config = new Configuration();

// Creating a deck together with its config
const deck = new Deck('My deck', 'My deck description');
const deckConfig = new DeckConfiguration('Default deck configuration');

// Adding the configuration and the deck for the collection
collection.setConfiguration(config);
collection.addDeck(deck);

// Creating a model
const model = new Model();

// Setting the configuration and the model for the deck
deck.setConfiguration(deckConfig);
deck.setModel(model);

// Creating a new note and appending some model to it
const note = new Note('This is front', 'This is back');
note.setModel(model);

// Creating a card and appending the note to it
const card = new Card();
card.setNote(note);

// Adding the card to the deck
deck.addCard(card);

// Building and saving the .apkg file
const apkg = new ApkgBuilder(collection);

apkg.init().then(() => {
	apkg.save('advanced-example.apkg');
});
