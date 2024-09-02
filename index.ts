import ApkgBuilder from './src/builder';
import { Collection } from './src/entity';
import { Deck, DeckConfig } from './src/object';

const apkg = new ApkgBuilder();

setTimeout(() => {
	const deck = new Deck('My deck', 'description of my deck');

	// This is not needed but possible
	const collection = new Collection();
	const config = new DeckConfig();

	collection.addDeckConfig(config);

	apkg.setCollection(collection);
	// End

	apkg.addDeck(deck);

	// apkg.addDeck(deck);

	// for (let entity of entities) {
	// 	this.db.insert(entity.getTable(), entity.getEntity());
	// }

	apkg.save('anki.apkg');
}, 1000);