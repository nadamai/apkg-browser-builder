/**
 * Optional configuration of {@link ApkgBuilder}.
 */
export type ApkgBuilderConfig = {
	/**
	 * Options forwarded to [`initSqlJs()`](https://sql.js.org/documentation/global.html#initSqlJs)
	 * of sql.js, which loads the WebAssembly build of SQLite used to create the Anki database when
	 * {@link ApkgBuilder} `build` is called.
	 *
	 * By default, the `sql-wasm-browser.wasm` binary bundled with this package is used. Provide
	 * a `locateFile` callback to load the `.wasm` file from somewhere else instead, such as a CDN
	 * or your own static assets:
	 *
	 * ```ts
	 * const builder = new ApkgBuilder(collection, {
	 * 	sqljs: {
	 * 		locateFile: (file) => `https://sql.js.org/dist/${file}`
	 * 	}
	 * });
	 * ```
	 *
	 * You can also directly provide a `wasmBinary: ArrayBuffer` instead.
	 */
	sqljs: {
		/**
		 * Returns the URL to load the sql.js `.wasm` binary from, given its filename.
		 */
		locateFile?: (filename: string) => string;

		/**
		 * The sql.js `.wasm` binary itself, skipping the loading step entirely.
		 */
		wasmBinary?: ArrayBuffer;
	};
};
