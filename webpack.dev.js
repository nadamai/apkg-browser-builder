const path = require('path');

module.exports = {
	entry: './dev/index.ts',
	mode: 'development',
	module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/i,
            },
        ],
    },
	resolve: {
		extensions: ['.ts', '.js'],
	},
	devServer: {
		open: '/index.html',
		port: 3000,
		static: [
			{ directory: path.join(__dirname, 'dev'), publicPath: '/' },
			{ directory: path.join(__dirname, 'dist'), publicPath: '/dist' },
		],
	},
};
