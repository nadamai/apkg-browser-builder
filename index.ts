import ApkgBuilder from './src/builder';
import { Card, Deck } from './src/entity';

const apkg = new ApkgBuilder();

setTimeout(() => {
	const card = new Deck();


	apkg.save('anki.apkg');
}, 1000);