const path = require('path');

module.exports = {
    entry: './index.ts',
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
    output: {
		filename: 'apkg-browser-builder.min.js',
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
