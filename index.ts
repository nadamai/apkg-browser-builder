import ApkgBuilder from './src/module/builder';

const apkg = new ApkgBuilder();

setTimeout(() => {
	apkg.save('anki.apkg');
}, 1000);