import ApkgBuilder from './src/builder';
import { Card, Collection, Note } from './src/entity';
import { Deck } from './src/object/deck';

const apkg = new ApkgBuilder();

setTimeout(() => {
	// This is not needed but possible
	const collection = new Collection();

	apkg.setCollection(collection);
	// End

	

	// apkg.addDeck(deck);

	// for (let entity of entities) {
	// 	this.db.insert(entity.getTable(), entity.getEntity());
	// }

	apkg.save('anki.apkg');
}, 1000);