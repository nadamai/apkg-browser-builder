import ApkgBuilder from './src/module/builder';

const apkg = new ApkgBuilder();

setTimeout(() => {
	apkg.save();
}, 1000);