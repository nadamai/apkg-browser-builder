# APK Browser Builder v1.0.0

## Classes

### ApkgBuilder

The main (`export default`) class used for generating .apkg package.

#### Constructors

##### Constructor

> **new ApkgBuilder**(`collection?`, `config?`): [`ApkgBuilder`](#apkgbuilder)

###### Parameters

###### collection?

`Collection`

###### config?

`Partial`\<\{ `sqljs`: `SqlJsConfig`; \}\>

###### Returns

[`ApkgBuilder`](#apkgbuilder)

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

> **ApkgBuilderConfig** = `Partial`\<\{ `sqljs`: `SqlJsConfig`; \}\>
