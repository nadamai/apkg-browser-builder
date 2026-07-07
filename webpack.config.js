const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
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
			{
				loader: 'file-loader',
				test: /\.wasm$/i,
			},
        ],
    },
	resolve: {
		extensions: ['.ts'],
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
        path: path.resolve(__dirname, 'dist'),
    },
};
