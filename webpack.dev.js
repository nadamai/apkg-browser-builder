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
				test: /\.sqlite$/i,
				type: 'asset/source',
			},
			{
				loader: 'file-loader',
				test: /\.wasm$/i,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	performance: {
		assetFilter: (filename) => !filename.endsWith('.wasm'),
	},
	output: {
		filename: 'index.dev.js',
		library: 'ApkgBrowserBuilder',
		libraryTarget: 'window',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
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
				const files = fs.readdirSync(EXAMPLES_DIR)
					.filter((filename) => filename.endsWith('.ts'))
					.map((filename) => ({
						filename,
						content: fs.readFileSync(path.join(EXAMPLES_DIR, filename), 'utf8'),
					}));

				response.json(files);
			});

			return middlewares;
		},
	},
};
