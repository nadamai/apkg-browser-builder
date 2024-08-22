import ApkgBuilder from './src/builder';
import { Card, Deck } from './src/entity';

const apkg = new ApkgBuilder();

setTimeout(() => {
	
	const deck = new Deck();
	const card = new Card();

	// deck.add(card);



	apkg.save(deck, 'anki.apkg');
}, 1000);