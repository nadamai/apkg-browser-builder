import ApkgBuilder from './src/builder';
import { Card, Collection, Note } from './src/entity';
import { Deck, DeckConfiguration, Model } from './src/object';

const apkg = new ApkgBuilder();

setTimeout(() => {

	const collection = new Collection();
	const config = new DeckConfiguration('Default deck config');
	const deck = new Deck('Mój imported deck', 'description of my deck');
	const model = new Model();

	deck.setDeckConfiguration(config);
	model.setDeck(deck);

	collection.addDeckConfiguration(config);
	collection.addModel(model);

	apkg.setCollection(collection);
	apkg.addDeck(deck);



	const note = new Note('This is front', 'This is back');
	note.setModel(model)

	const card = new Card();
	card.setDeck(deck);
	card.setNote(note);

	apkg.cards.push(card);
	apkg.notes.push(note);



	const note2 = new Note('This is another card', 'This is another back');
	note2.setModel(model)

	const card2 = new Card();
	card2.setDeck(deck);
	card2.setNote(note2);

	apkg.cards.push(card2);
	apkg.notes.push(note2);

	
	// TODO
	// deck.addCard(card);

	apkg.save('anki.apkg');
}, 1000);