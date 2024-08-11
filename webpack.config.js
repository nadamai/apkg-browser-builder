const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

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
	plugins: [
		new CopyPlugin({
		  	patterns: [
				{ from: "src/db", to: "src/db" },
		  	],
		}),
	],
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
