const fs = require('fs');
const path = require('path');

const EXAMPLES_DIR = path.join(__dirname, 'dev', 'examples');

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
			{ directory: path.join(__dirname, 'node_modules', 'typescript', 'lib'), publicPath: '/typescript' },
		],
		setupMiddlewares: (middlewares, server) => {
			server.app.get('/examples', (_request, response) => {
				const files = fs.readdirSync(EXAMPLES_DIR).map((filename) => ({
					filename,
					content: fs.readFileSync(path.join(EXAMPLES_DIR, filename), 'utf8'),
				}));

				response.json(files);
			});

			return middlewares;
		},
	},
};
