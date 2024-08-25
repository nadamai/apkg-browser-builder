import ApkgBuilder from './src/builder';
import { Card, Collection, Note } from './src/entity';

const apkg = new ApkgBuilder();

setTimeout(() => {
	const card = new Card().setFront('front').setBack('test back');
	const col = new Collection();
	const note = new Note();

	const entities = [card, col, note];

	// TODO: different method of attaching entities to the apkg
	apkg.save(entities, 'anki.apkg');
}, 1000);