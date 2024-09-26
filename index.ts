import ApkgBuilder from './src/builder';
import { Card, Collection, Note } from './src/entity';
import { Deck, DeckConfiguration, Model } from './src/object';
import { Configuration } from './src/object/configuration';


const deck = new Deck('Mój imported deck', 'description of my deck');
const deckConfig = new DeckConfiguration('Default deck config');
const model = new Model();

deck.setDeckConfiguration(deckConfig);
deck.setModel(model);

const note = new Note('This is front', 'This is back');
note.setModel(model)

const card = new Card();
card.setNote(note);

deck.addCard(card);

const collection = new Collection();
const config = new Configuration();

collection.setConfiguration(config);
collection.addDeckConfiguration(deckConfig);
collection.addDeck(deck);

// Creating apkg from the given collection
const apkg = new ApkgBuilder(collection);

// TODO: async
setTimeout(() => {
	apkg.save('anki.apkg');
}, 1000);