import ApkgBuilder from './src/builder';
import { Card, Collection, Note } from './src/entity';
import { Deck } from './src/object/deck';

const apkg = new ApkgBuilder();

setTimeout(() => {
	// const card = new Card();
	// const col = new Collection();
	// const note = new Note();

	// const entities = [card, col, note];

	const deck = new Deck();

	

	// apkg.addDeck(deck);

	// for (let entity of entities) {
	// 	this.db.insert(entity.getTable(), entity.getEntity());
	// }

	apkg.save('anki.apkg');
}, 1000);