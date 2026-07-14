# APK Browser Builder v1.0.0

## Classes

### ApkgBuilder

The main (`export default`) class used for generating .apkg package.

#### Methods

##### Constructor

> **new ApkgBuilder**(`collection`: `Collection`, `config?`: `Partial`\<[`ApkgBuilderConfig`](#apkgbuilderconfig)\>): [`ApkgBuilder`](#apkgbuilder)

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`collection`

</td>
<td>

`Collection`

</td>
<td>

The Collection object.

</td>
</tr>
<tr>
<td>

`config?`

</td>
<td>

`Partial`\<[`ApkgBuilderConfig`](#apkgbuilderconfig)\>

</td>
<td>

Optional builder configuration.

</td>
</tr>
</tbody>
</table>

###### Returns

[`ApkgBuilder`](#apkgbuilder)

##### addMedia()

> **addMedia**(`filename`: `string`, `file`: `Blob`): [`ApkgBuilder`](#apkgbuilder)

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`filename`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`file`

</td>
<td>

`Blob`

</td>
</tr>
</tbody>
</table>

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

> **save**(`filename`: `string`): `Promise`\<`void`\>

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`filename`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`void`\>

##### setCollection()

> **setCollection**(`collection`: `Collection`): [`ApkgBuilder`](#apkgbuilder)

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`collection`

</td>
<td>

`Collection`

</td>
</tr>
</tbody>
</table>

###### Returns

[`ApkgBuilder`](#apkgbuilder)

## Type Aliases

### ApkgBuilderConfig

> **ApkgBuilderConfig** = \{ `sqljs`: `SqlJsConfig`; \}

Optional configuration of [ApkgBuilder](#apkgbuilder).

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="sqljs"></a> `sqljs`

</td>
<td>

`SqlJsConfig`

</td>
<td>

Options forwarded to [`initSqlJs()`](https://sql.js.org/documentation/global.html#initSqlJs)
of sql.js, which loads the WebAssembly build of SQLite used to create the ANKI database when
[ApkgBuilder](#apkgbuilder) `build` is called.

By default, the `sql-wasm-browser.wasm` binary bundled with this package is used. Provide
a `locateFile` callback to load the `.wasm` file from somewhere else instead, such as a CDN
or your own static assets:

```ts
const builder = new ApkgBuilder(collection, {
	sqljs: {
		locateFile: (file) => `https://sql.js.org/dist/${file}`
	}
});
```

</td>
</tr>
</tbody>
</table>
