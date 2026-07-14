# APK Browser Builder v1.0.0

## ApkgBuilder

The main (`export default`) class used for generating `.apkg` packages.

### Constructor

> **new ApkgBuilder**(`collection`: [`Collection`](#collection), `config?`: `Partial`\<[`ApkgBuilderConfig`](#apkgbuilderconfig)\>): [`ApkgBuilder`](#apkgbuilder)

#### Parameters

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

[`Collection`](#collection)

</td>
<td>

The [Collection](#collection) to be exported.

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

### getCollection()

> **getCollection**(): [`Collection`](#collection)

### setCollection()

> **setCollection**(`collection`: [`Collection`](#collection)): [`ApkgBuilder`](#apkgbuilder)

#### Parameters

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

[`Collection`](#collection)

</td>
<td>

The [Collection](#collection) to be exported.

</td>
</tr>
</tbody>
</table>

### addMedia()

> **addMedia**(`filename`: `string`, `file`: `Blob`): [`ApkgBuilder`](#apkgbuilder)

Adds a media file to be used in the Note contents.

#### Parameters

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

`filename`

</td>
<td>

`string`

</td>
<td>

The unique name under which the file is stored in the package.
Note contents reference media by this exact name, e.g. `<img src="photo.jpg">`.

</td>
</tr>
<tr>
<td>

`file`

</td>
<td>

`Blob`

</td>
<td>

The file as a `Blob`.

</td>
</tr>
</tbody>
</table>

### getMedia()

> **getMedia**(): `Media`[]

### build()

> **build**(): `Promise`\<`Blob`\>

Returns the generated `.apkg` package as a `Blob`.

### save()

> **save**(`filename`: `string`): `Promise`\<`void`\>

Triggers the generated `.apkg` package download.

#### Parameters

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

`filename`

</td>
<td>

`string`

</td>
<td>

The downloaded package filename, including extension — e.g. "my-deck.apkg".

</td>
</tr>
</tbody>
</table>

***

## Collection

The root Anki database entity containing decks, cards and all the other information.

### getId()

> **getId**(): `number`

### setId()

> **setId**(`id`: `number`): [`Collection`](#collection)

#### Parameters

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

`id`

</td>
<td>

`number`

</td>
<td>

The ID of the collection (it can be some arbitrary number as there's only one collection).

</td>
</tr>
</tbody>
</table>

### getCreationTime()

> **getCreationTime**(): `number`

### setCreationTime()

> **setCreationTime**(`time`: `number`): [`Collection`](#collection)

#### Parameters

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

`time`

</td>
<td>

`number`

</td>
<td>

The timestamp of the creation date in seconds.

</td>
</tr>
</tbody>
</table>

### getModificationTime()

> **getModificationTime**(): `number`

### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Collection`](#collection)

#### Parameters

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

`time`

</td>
<td>

`number`

</td>
<td>

The last modification time in milliseconds.

</td>
</tr>
</tbody>
</table>

### getSchemaModificationTime()

> **getSchemaModificationTime**(): `number`

### setSchemaModificationTime()

> **setSchemaModificationTime**(`time`: `number`): [`Collection`](#collection)

#### Parameters

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

`time`

</td>
<td>

`number`

</td>
<td>

The last schema modification time in milliseconds.

</td>
</tr>
</tbody>
</table>

### getVersion()

> **getVersion**(): `number`

### setVersion()

> **setVersion**(`version`: `number`): [`Collection`](#collection)

#### Parameters

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

`version`

</td>
<td>

`number`

</td>
<td>

The Anki schema version number.

</td>
</tr>
</tbody>
</table>

### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Collection`](#collection)

#### Parameters

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

`updateSequenceNumber`

</td>
<td>

`number`

</td>
<td>

The update sequence number.

</td>
</tr>
</tbody>
</table>

### getLastSyncTime()

> **getLastSyncTime**(): `number`

### setLastSyncTime()

> **setLastSyncTime**(`time`: `number`): [`Collection`](#collection)

#### Parameters

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

`time`

</td>
<td>

`number`

</td>
<td>

The last synchronisation time in milliseconds.

</td>
</tr>
</tbody>
</table>

### getConfiguration()

> **getConfiguration**(): `Configuration` \| `null`

### setConfiguration()

> **setConfiguration**(`configuration`: `Configuration`): [`Collection`](#collection)

#### Parameters

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

`configuration`

</td>
<td>

`Configuration`

</td>
<td>

A collection Configuration.

</td>
</tr>
</tbody>
</table>

### getModels()

> **getModels**(): `Model`[]

### setModels()

> **setModels**(`models`: `Model`[]): [`Collection`](#collection)

#### Parameters

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

`models`

</td>
<td>

`Model`[]

</td>
<td>

An array of possible Models.

</td>
</tr>
</tbody>
</table>

### addModel()

> **addModel**(`model`: `Model`): [`Collection`](#collection)

#### Parameters

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

`model`

</td>
<td>

`Model`

</td>
<td>

A Model to be added.

</td>
</tr>
</tbody>
</table>

### removeModel()

> **removeModel**(`model`: `Model`): [`Collection`](#collection)

#### Parameters

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

`model`

</td>
<td>

`Model`

</td>
<td>

A Model to be removed.

</td>
</tr>
</tbody>
</table>

### getDecks()

> **getDecks**(): [`Deck`](#deck)[]

### setDecks()

> **setDecks**(`decks`: [`Deck`](#deck)[]): [`Collection`](#collection)

#### Parameters

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

`decks`

</td>
<td>

[`Deck`](#deck)[]

</td>
<td>

An array of [Deck](#deck)s to be set.

</td>
</tr>
</tbody>
</table>

### addDeck()

> **addDeck**(`deck`: [`Deck`](#deck)): [`Collection`](#collection)

#### Parameters

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

`deck`

</td>
<td>

[`Deck`](#deck)

</td>
<td>

A [Deck](#deck) to be added.

</td>
</tr>
</tbody>
</table>

### removeDeck()

> **removeDeck**(`deck`: [`Deck`](#deck)): [`Collection`](#collection)

#### Parameters

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

`deck`

</td>
<td>

[`Deck`](#deck)

</td>
<td>

A [Deck](#deck) to be removed.

</td>
</tr>
</tbody>
</table>

### getDeckConfigurations()

> **getDeckConfigurations**(): `DeckConfiguration`[]

### setDeckConfigurations()

> **setDeckConfigurations**(`configs`: `DeckConfiguration`[]): [`Collection`](#collection)

#### Parameters

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

`configs`

</td>
<td>

`DeckConfiguration`[]

</td>
<td>

An array of DeckConfigurations.

</td>
</tr>
</tbody>
</table>

### addDeckConfiguration()

> **addDeckConfiguration**(`config`: `DeckConfiguration`): [`Collection`](#collection)

#### Parameters

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

`config`

</td>
<td>

`DeckConfiguration`

</td>
<td>

A DeckConfiguration.

</td>
</tr>
</tbody>
</table>

### removeDeckConfiguration()

> **removeDeckConfiguration**(`config`: `DeckConfiguration`): [`Collection`](#collection)

#### Parameters

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

`config`

</td>
<td>

`DeckConfiguration`

</td>
<td>

A DeckConfiguration.

</td>
</tr>
</tbody>
</table>

### getTags()

> **getTags**(): `string`[]

### setTags()

> **setTags**(`tags`: `string`[]): [`Collection`](#collection)

#### Parameters

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

`tags`

</td>
<td>

`string`[]

</td>
<td>

An array of collection tags.

</td>
</tr>
</tbody>
</table>

***

## Deck

A deck contained within a collection.

### Constructor

> **new Deck**(`name`: `string`, `description?`: `string`): [`Deck`](#deck)

#### Parameters

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

`name`

</td>
<td>

`string`

</td>
<td>

The name of the deck.

</td>
</tr>
<tr>
<td>

`description?`

</td>
<td>

`string`

</td>
<td>

The optional description of the deck.

</td>
</tr>
</tbody>
</table>

### getId()

> **getId**(): `number`

### setId()

> **setId**(`id?`: `number`): [`Deck`](#deck)

#### Parameters

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

`id?`

</td>
<td>

`number`

</td>
<td>

The card ID (by default the time in milliseconds of when the card was created).

</td>
</tr>
</tbody>
</table>

### getName()

> **getName**(): `string`

### setName()

> **setName**(`name`: `string`): [`Deck`](#deck)

#### Parameters

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

`name`

</td>
<td>

`string`

</td>
<td>

The name of the deck.

</td>
</tr>
</tbody>
</table>

### getDescription()

> **getDescription**(): `string`

### setDescription()

> **setDescription**(`description`: `string`): [`Deck`](#deck)

#### Parameters

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

`description`

</td>
<td>

`string`

</td>
<td>

The description of the deck.

</td>
</tr>
</tbody>
</table>

### getMarkdownDescription()

> **getMarkdownDescription**(): `boolean`

### setMarkdownDescription()

> **setMarkdownDescription**(`description`: `boolean`): [`Deck`](#deck)

#### Parameters

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

`description`

</td>
<td>

`boolean`

</td>
<td>

If `false` it render description with legacy HTML rendering.
If `true` it uses markdown rendering with `img` tags stripped.

</td>
</tr>
</tbody>
</table>

### getExtendedReviewCardLimit()

> **getExtendedReviewCardLimit**(): `number` \| `null`

### setExtendedReviewCardLimit()

> **setExtendedReviewCardLimit**(`extendRev`: `number` \| `null`): [`Deck`](#deck)

#### Parameters

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

`extendRev`

</td>
<td>

`number` \| `null`

</td>
<td>

Extended review card limit.

</td>
</tr>
</tbody>
</table>

### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Deck`](#deck)

#### Parameters

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

`updateSequenceNumber`

</td>
<td>

`number`

</td>
<td>

The update sequence number.

</td>
</tr>
</tbody>
</table>

### getCollapsed()

> **getCollapsed**(): `boolean`

### setCollapsed()

> **setCollapsed**(`collapsed`: `boolean`): [`Deck`](#deck)

#### Parameters

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

`collapsed`

</td>
<td>

`boolean`

</td>
<td>

Whether the deck is collapsed.

</td>
</tr>
</tbody>
</table>

### getBrowserCollapsed()

> **getBrowserCollapsed**(): `boolean`

### setBrowserCollapsed()

> **setBrowserCollapsed**(`collapsed`: `boolean`): [`Deck`](#deck)

#### Parameters

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

`collapsed`

</td>
<td>

`boolean`

</td>
<td>

Whether the deck is collapsed in a browser.

</td>
</tr>
</tbody>
</table>

### getNewToday()

> **getNewToday**(): \[`number`, `number`\]

### setNewToday()

> **setNewToday**(`newToday`: \[`number`, `number`\]): [`Deck`](#deck)

#### Parameters

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

`newToday`

</td>
<td>

\[`number`, `number`\]

</td>
<td>

The first number is the number of days that have passed between the
collection was created and the deck was last updated. The second is equal to the number of
cards seen today in this deck minus the number of new cards in custom study today.

</td>
</tr>
</tbody>
</table>

### getReviewToday()

> **getReviewToday**(): \[`number`, `number`\]

### setReviewToday()

> **setReviewToday**(`revToday`: \[`number`, `number`\]): [`Deck`](#deck)

#### Parameters

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

`revToday`

</td>
<td>

\[`number`, `number`\]

</td>
<td>

The first number is the number of days that have passed between the
collection was created and the deck was last updated. The second is equal to the number of
cards seen today in this deck minus the number of new cards in custom study today.

</td>
</tr>
</tbody>
</table>

### getLearningToday()

> **getLearningToday**(): \[`number`, `number`\]

### setLearningToday()

> **setLearningToday**(`lrnToday`: \[`number`, `number`\]): [`Deck`](#deck)

#### Parameters

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

`lrnToday`

</td>
<td>

\[`number`, `number`\]

</td>
<td>

The first number is the number of days that have passed between the
collection was created and the deck was last updated. The second is equal to the number of
cards seen today in this deck minus the number of new cards in custom study today.

</td>
</tr>
</tbody>
</table>

### getDynamic()

> **getDynamic**(): `boolean`

### setDynamic()

> **setDynamic**(`dynamic`: `boolean`): [`Deck`](#deck)

#### Parameters

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

`dynamic`

</td>
<td>

`boolean`

</td>
<td>

Whether the deck is dynamic (filtered).

</td>
</tr>
</tbody>
</table>

### getExtendedNewCardLimit()

> **getExtendedNewCardLimit**(): `number` \| `null`

### setExtendedNewCardLimit()

> **setExtendedNewCardLimit**(`extendNew`: `number` \| `null`): [`Deck`](#deck)

#### Parameters

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

`extendNew`

</td>
<td>

`number` \| `null`

</td>
<td>

Extended new card limit.

</td>
</tr>
</tbody>
</table>

### getConfiguration()

> **getConfiguration**(): `DeckConfiguration` \| `null`

### setConfiguration()

> **setConfiguration**(`config`: `DeckConfiguration`): [`Deck`](#deck)

#### Parameters

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

`config`

</td>
<td>

`DeckConfiguration`

</td>
<td>

A DeckConfiguration.

</td>
</tr>
</tbody>
</table>

### getModel()

> **getModel**(): `Model` \| `null`

### setModel()

> **setModel**(`model`: `Model`): [`Deck`](#deck)

#### Parameters

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

`model`

</td>
<td>

`Model`

</td>
<td>

A Model.

</td>
</tr>
</tbody>
</table>

### getModificationTime()

> **getModificationTime**(): `number`

### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Deck`](#deck)

#### Parameters

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

`time`

</td>
<td>

`number`

</td>
<td>

The last modification time in milliseconds.

</td>
</tr>
</tbody>
</table>

### addCard()

> **addCard**(`card`: `Card`): [`Deck`](#deck)

#### Parameters

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

`card`

</td>
<td>

`Card`

</td>
<td>

A Card.

</td>
</tr>
</tbody>
</table>

### removeCard()

> **removeCard**(`card`: `Card`): [`Deck`](#deck)

#### Parameters

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

`card`

</td>
<td>

`Card`

</td>
<td>

A Card.

</td>
</tr>
</tbody>
</table>

### getCards()

> **getCards**(): `Card`[]

### getCollection()

> **getCollection**(): [`Collection`](#collection) \| `null`

### setCollection()

> **setCollection**(`collection`: [`Collection`](#collection)): [`Deck`](#deck)

#### Parameters

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

[`Collection`](#collection)

</td>
</tr>
</tbody>
</table>

***

## ApkgBuilderConfig

> **ApkgBuilderConfig** = \{ `sqljs`: `SqlJsConfig`; \}

Optional configuration of [ApkgBuilder](#apkgbuilder).

### Properties

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
