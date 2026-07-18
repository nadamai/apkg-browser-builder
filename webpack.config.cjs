const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
	mode: 'production',
    module: {
		parser: {
			javascript: {
				url: false,
				importMeta: false,
			},
		},
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
				use: [path.resolve(__dirname, 'webpack.sql-loader.cjs')],
			},
        ],
    },
	resolve: {
		extensions: ['.ts'],
	},
	performance: {
		assetFilter: (filename) => !filename.endsWith('.wasm'),
	},
	optimization: {
		minimizer: [new TerserPlugin({
		  	extractComments: false,
			terserOptions: {
				format: {
					comments: false,
				},
			},
		})],
	},
	experiments: {
		outputModule: true,
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: require.resolve('sql.js/dist/sql-wasm-browser.wasm') }],
		}),
	],
	output: {
		filename: 'index.min.js',
		assetModuleFilename: '[name][ext]',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		library: {
			type: 'module',
		},
		module: true,
	},
};
