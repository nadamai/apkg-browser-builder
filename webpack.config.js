const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
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
				use: [path.resolve(__dirname, 'webpack.sql-loader.js')],
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
		path: path.resolve(__dirname, 'dist'),
	}
};

module.exports = [
	// UMD build — script tags (window.ApkgBrowserBuilder), AMD and CommonJS-in-browser.
	{
		...config,
		output: {
			...config.output,
			globalObject: 'this',
			library: {
				name: 'ApkgBrowserBuilder',
				type: 'umd',
			},
		},
	},
	// ESM build — `import` consumers and Node (assets resolve via import.meta.url,
	// so loading the module outside a browser does not crash).
	{
		...config,
		experiments: {
			outputModule: true,
		},
		output: {
			...config.output,
			library: {
				type: 'module',
			},
			module: true,
		},
	},
];
