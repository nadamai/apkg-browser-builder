import ApkgBuilder from './src/builder';
import { Collection } from './src/entity';
import { Deck, DeckConfiguration } from './src/object';

const apkg = new ApkgBuilder();

setTimeout(() => {
	const deck = new Deck('My deck', 'description of my deck');

	// This is not needed but possible
	const collection = new Collection();
	const config = new DeckConfiguration('Default deck config');

	collection.addDeckConfiguration(config);

	apkg.setCollection(collection);
	// End

	apkg.addDeck(deck);



	apkg.save('anki.apkg');
}, 1000);