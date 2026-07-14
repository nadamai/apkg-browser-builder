# APK Browser Builder v1.0.0

## Interfaces

### ApkgBuilder

The main (`export default`) class used for generating .apkg package.

#### Methods

##### addMedia()

> **addMedia**(`filename`, `file`): [`ApkgBuilder`](#apkgbuilder)

###### Parameters

###### filename

`string`

###### file

`Blob`

###### Returns

[`ApkgBuilder`](#apkgbuilder)

##### build()

> **build**(): `Promise`\<`Blob`\>

###### Returns

`Promise`\<`Blob`\>

##### getCollection()

> **getCollection**(): `Collection`

###### Returns

`Collection`

##### getMedia()

> **getMedia**(): `Media`[]

###### Returns

`Media`[]

##### save()

> **save**(`filename`): `Promise`\<`void`\>

###### Parameters

###### filename

`string`

###### Returns

`Promise`\<`void`\>

##### setCollection()

> **setCollection**(`collection`): [`ApkgBuilder`](#apkgbuilder)

###### Parameters

###### collection

`Collection`

###### Returns

[`ApkgBuilder`](#apkgbuilder)

## Type Aliases

### ApkgBuilderConfig

> **ApkgBuilderConfig** = \{ `sqljs`: `SqlJsConfig`; \}

Optional configuration of [ApkgBuilder](#apkgbuilder).

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="sqljs"></a> `sqljs` | `SqlJsConfig` | Options forwarded to [`initSqlJs()`](https://sql.js.org/documentation/global.html#initSqlJs) of sql.js, which loads the WebAssembly build of SQLite used to create the ANKI database when [ApkgBuilder](#apkgbuilder) `build` is called. By default, the `sql-wasm-browser.wasm` binary bundled with this package is used. Provide a `locateFile` callback to load the `.wasm` file from somewhere else instead, such as a CDN or your own static assets: `const builder = new ApkgBuilder(collection, { 	sqljs: { 		locateFile: (file) => `https://sql.js.org/dist/${file}` 	} });` |
