import ApkgBuilder from './src/builder';
import { Card, Collection, Note } from './src/entity';
import { Deck, DeckConfiguration, Model } from './src/object';

const apkg = new ApkgBuilder();

setTimeout(() => {

	const collection = new Collection();
	const config = new DeckConfiguration('Default deck config');
	const deck = new Deck('My deck', 'description of my deck');
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


	// TODO
	// deck.addCard(card);



	apkg.save('anki.apkg');
}, 1000);