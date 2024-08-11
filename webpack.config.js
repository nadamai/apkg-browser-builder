const path = require('path');

module.exports = {
    entry: './index.ts',
    output: {
		filename: 'apkg-browser-builder.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                loader: 'ts-loader',
				exclude: /node_modules/,
            },
        ],
    },
	resolve: {
		extensions: ['.ts'],
	},
	target: 'web',
};
