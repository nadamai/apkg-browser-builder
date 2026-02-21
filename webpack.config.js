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
	},
	target: 'web',
};
