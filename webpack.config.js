const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
	mode: 'production',
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
    output: {
		filename: 'index.min.js',
		library: 'ApkgBrowserBuilder',
        path: path.resolve(__dirname, 'dist'),
    },
};
