const path = require('path');

module.exports = {
	entry: './src/index.ts',
	mode: 'development',
	module: {
		rules: [
			{
				loader: 'ts-loader',
				test: /\.ts$/i,
				options: {
					onlyCompileBundledFiles: true,
				},
			},
			{
				loader: 'file-loader',
				test: /\.sqlite$/i,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'index.dev.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		library: 'ApkgBrowserBuilder',
		libraryTarget: 'window',
	},
	devServer: {
		open: '/index.html',
		port: 3000,
		static: [
			{ directory: path.join(__dirname, 'dev'), publicPath: '/' },
			{ directory: path.join(__dirname, 'dist'), publicPath: '/dist' },
		],
	},
};
