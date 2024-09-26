const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/builder.ts',
    module: {
        rules: [
            {
				exclude: /node_modules/,
                loader: 'ts-loader',
                test: /\.ts$/i,
            },
			{
				loader: 'file-loader',
				test: /\.sqlite$/i,
			},
        ],
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
	resolve: {
		extensions: ['.ts'],
		fallback: {
            crypto: false,
			fs: false,
			path: false,
        },
	},
	target: 'web',
};
