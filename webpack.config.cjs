const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

// ESM-only build — `import` consumers, Node and `<script type="module">` tags.
// Assets resolve via import.meta.url, so the module also loads outside a browser.
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
	output: {
		filename: 'index.min.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		library: {
			type: 'module',
		},
		module: true,
	},
};
