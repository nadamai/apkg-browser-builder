const path = require('path');

module.exports = {
	entry: './dev/playground.ts',
	mode: 'development',
	output: {
		filename: 'playground.ts',
		path: path.resolve(__dirname, 'dev'),
	},
	devServer: {
		static: [
			{ directory: path.join(__dirname, 'dev'), publicPath: '/' },
			{ directory: path.join(__dirname, 'dist'), publicPath: '/dist' },
		],
		port: 3000,
		open: '/index.html',
	},
};
