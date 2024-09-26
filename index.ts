import ApkgBuilder from './src/builder';
import { Card, Collection, Note } from './src/entity';
import { Deck, DeckConfiguration, Model } from './src/object';
import { Configuration } from './src/object/configuration';


// // Full customizable example
// const collection = new Collection();
// const config = new Configuration();
// const deck = new Deck('Mój imported deck', 'description of my deck');
// const deckConfig = new DeckConfiguration('Default deck config');
// const model = new Model();

// collection.setConfiguration(config);
// collection.addDeck(deck);

// deck.setConfiguration(deckConfig);
// deck.setModel(model);

// const note = new Note('This is front', 'This is back');
// note.setModel(model)

// const card = new Card();
// card.setNote(note);

// deck.addCard(card);


// Simple example
const collection = new Collection();
const deck = new Deck('My imported deck', 'description of my deck');
const model = new Model();

collection.addDeck(deck);

deck.setModel(model);

const note = new Note('This is front', 'This is back');
note.setModel(model)

const card = new Card();
card.setNote(note);

deck.addCard(card);


// Creating apkg from the given collection
const apkg = new ApkgBuilder(collection);

apkg.init().then(() => {
	apkg.save('anki.apkg');
});
