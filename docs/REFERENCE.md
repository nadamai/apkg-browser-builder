# APK Browser Builder v1.0.0

## Classes

### ApkgBuilder

The main (`export default`) class used for generating `.apkg` packages.

#### Constructor

> **new ApkgBuilder**(`collection`: [`Collection`](#collection), `config?`: `Partial`\<[`ApkgBuilderConfig`](#apkgbuilderconfig)\>): [`ApkgBuilder`](#apkgbuilder)

##### Parameters

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

#### getCollection()

> **getCollection**(): [`Collection`](#collection)

#### setCollection()

> **setCollection**(`collection`: [`Collection`](#collection)): [`ApkgBuilder`](#apkgbuilder)

##### Parameters

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

#### getMedia()

> **getMedia**(): [`Media`](#media)[]

#### addMedia()

> **addMedia**(`filename`: `string`, `file`: `Blob`): [`ApkgBuilder`](#apkgbuilder)

Adds a media file to be used in the [Note](#note) contents.

##### Parameters

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
[Note](#note) contents reference media by this exact name, e.g. `<img src="photo.jpg">`.

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

#### removeMedia()

> **removeMedia**(`media`: [`Media`](#media)): [`ApkgBuilder`](#apkgbuilder)

##### Parameters

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

`media`

</td>
<td>

[`Media`](#media)

</td>
<td>

A [Media](#media) file to be removed from the package.

</td>
</tr>
</tbody>
</table>

#### getReviewLogs()

> **getReviewLogs**(): [`ReviewLog`](#reviewlog)[]

#### addReviewLog()

> **addReviewLog**(`reviewLog`: [`ReviewLog`](#reviewlog)): [`ApkgBuilder`](#apkgbuilder)

Adds a review history entry, exported into the collection's `revlog` table.

##### Parameters

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

`reviewLog`

</td>
<td>

[`ReviewLog`](#reviewlog)

</td>
<td>

A [ReviewLog](#reviewlog) to be added. Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### removeReviewLog()

> **removeReviewLog**(`reviewLog`: [`ReviewLog`](#reviewlog)): [`ApkgBuilder`](#apkgbuilder)

##### Parameters

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

`reviewLog`

</td>
<td>

[`ReviewLog`](#reviewlog)

</td>
<td>

A [ReviewLog](#reviewlog) to be removed.

</td>
</tr>
</tbody>
</table>

#### getGraves()

> **getGraves**(): [`Grave`](#grave)[]

#### addGrave()

> **addGrave**(`grave`: [`Grave`](#grave)): [`ApkgBuilder`](#apkgbuilder)

Adds a deletion marker, exported into the collection's `graves` table.

##### Parameters

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

`grave`

</td>
<td>

[`Grave`](#grave)

</td>
<td>

A [Grave](#grave) to be added. Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### removeGrave()

> **removeGrave**(`grave`: [`Grave`](#grave)): [`ApkgBuilder`](#apkgbuilder)

##### Parameters

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

`grave`

</td>
<td>

[`Grave`](#grave)

</td>
<td>

A [Grave](#grave) to be removed.

</td>
</tr>
</tbody>
</table>

#### build()

> **build**(): `Promise`\<`Blob`\>

Returns the generated `.apkg` package as a `Blob`.

#### save()

> **save**(`filename`: `string`): `Promise`\<`void`\>

Triggers the generated `.apkg` package download.

##### Parameters

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

### Collection

The root Anki database entity containing decks, cards and all the other information.

#### getId()

> **getId**(): `number`

#### setId()

> **setId**(`id`: `number`): [`Collection`](#collection)

##### Parameters

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

#### getCreationTime()

> **getCreationTime**(): `number`

#### setCreationTime()

> **setCreationTime**(`time`: `number`): [`Collection`](#collection)

##### Parameters

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

The timestamp of the creation date in seconds. Anki uses it as the epoch for
scheduling day arithmetic — e.g. a review card's due value is the number of days since this timestamp.

</td>
</tr>
</tbody>
</table>

#### getModificationTime()

> **getModificationTime**(): `number`

#### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Collection`](#collection)

##### Parameters

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

#### getSchemaModificationTime()

> **getSchemaModificationTime**(): `number`

#### setSchemaModificationTime()

> **setSchemaModificationTime**(`time`: `number`): [`Collection`](#collection)

##### Parameters

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

The last schema modification time in milliseconds. If it differs between
the client and the server, a full sync is required.

</td>
</tr>
</tbody>
</table>

#### getVersion()

> **getVersion**(): `number`

#### setVersion()

> **setVersion**(`version`: `number`): [`Collection`](#collection)

##### Parameters

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

The Anki schema version number (`11` for the legacy `anki2` format).

</td>
</tr>
</tbody>
</table>

#### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

#### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Collection`](#collection)

##### Parameters

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

#### getLastSyncTime()

> **getLastSyncTime**(): `number`

#### setLastSyncTime()

> **setLastSyncTime**(`time`: `number`): [`Collection`](#collection)

##### Parameters

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

The last synchronisation time in milliseconds (`0` if the collection has never been synced).

</td>
</tr>
</tbody>
</table>

#### getConfiguration()

> **getConfiguration**(): [`Configuration`](#configuration) \| `null`

#### setConfiguration()

> **setConfiguration**(`configuration`: [`Configuration`](#configuration)): [`Collection`](#collection)

##### Parameters

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

[`Configuration`](#configuration)

</td>
<td>

A collection [Configuration](#configuration). It is serialized into the
collection immediately, so mutations made afterwards require setting it again.

</td>
</tr>
</tbody>
</table>

#### getModels()

> **getModels**(): [`Model`](#model)[]

#### setModels()

> **setModels**(`models`: [`Model`](#model)[]): [`Collection`](#collection)

##### Parameters

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

[`Model`](#model)[]

</td>
<td>

An array of [Model](#model)s replacing the current ones. Each model is
added via `addModel`, so duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### addModel()

> **addModel**(`model`: [`Model`](#model)): [`Collection`](#collection)

##### Parameters

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

[`Model`](#model)

</td>
<td>

A [Model](#model) to be added and serialized into the collection.
Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### removeModel()

> **removeModel**(`model`: [`Model`](#model)): [`Collection`](#collection)

##### Parameters

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

[`Model`](#model)

</td>
<td>

A [Model](#model) to be removed.

</td>
</tr>
</tbody>
</table>

#### getDecks()

> **getDecks**(): [`Deck`](#deck)[]

#### setDecks()

> **setDecks**(`decks`: [`Deck`](#deck)[]): [`Collection`](#collection)

##### Parameters

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

An array of [Deck](#deck)s replacing the current ones. Each deck is added
via `addDeck`, including all of its automatic wiring and registrations.

</td>
</tr>
</tbody>
</table>

#### addDeck()

> **addDeck**(`deck`: [`Deck`](#deck)): [`Collection`](#collection)

##### Parameters

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

A [Deck](#deck) to be added. The deck is wired back to this collection, and
its [Model](#model), [DeckConfiguration](#deckconfiguration) and the models of its cards' notes are
registered automatically. Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### removeDeck()

> **removeDeck**(`deck`: [`Deck`](#deck)): [`Collection`](#collection)

##### Parameters

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

#### getDeckConfigurations()

> **getDeckConfigurations**(): [`DeckConfiguration`](#deckconfiguration)[]

#### setDeckConfigurations()

> **setDeckConfigurations**(`configs`: [`DeckConfiguration`](#deckconfiguration)[]): [`Collection`](#collection)

##### Parameters

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

[`DeckConfiguration`](#deckconfiguration)[]

</td>
<td>

An array of [DeckConfiguration](#deckconfiguration)s replacing the current ones.
Each configuration is added via `addDeckConfiguration`, so duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### addDeckConfiguration()

> **addDeckConfiguration**(`config`: [`DeckConfiguration`](#deckconfiguration)): [`Collection`](#collection)

##### Parameters

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

[`DeckConfiguration`](#deckconfiguration)

</td>
<td>

A [DeckConfiguration](#deckconfiguration) to be added and serialized into the collection.
Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### removeDeckConfiguration()

> **removeDeckConfiguration**(`config`: [`DeckConfiguration`](#deckconfiguration)): [`Collection`](#collection)

##### Parameters

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

[`DeckConfiguration`](#deckconfiguration)

</td>
<td>

A [DeckConfiguration](#deckconfiguration) to be removed.

</td>
</tr>
</tbody>
</table>

#### getTags()

> **getTags**(): `string`[]

#### setTags()

> **setTags**(`tags`: `string`[]): [`Collection`](#collection)

##### Parameters

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

The cache of all tags used in the collection.

</td>
</tr>
</tbody>
</table>

***

### Deck

A deck contained within a [Collection](#collection) made of [Card](#card)s.

#### Constructor

> **new Deck**(`name`: `string`, `description?`: `string`): [`Deck`](#deck)

Creates a deck with a default [DeckConfiguration](#deckconfiguration) and [Model](#model) attached.

##### Parameters

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

The name of the deck. Use `::` to nest decks, e.g. `"Languages::Polish::Verbs"`.

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

#### getId()

> **getId**(): `number`

#### setId()

> **setId**(`id?`: `number`): [`Deck`](#deck)

##### Parameters

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

The deck ID (by default the time in milliseconds of when the deck was created).

</td>
</tr>
</tbody>
</table>

#### getName()

> **getName**(): `string`

#### setName()

> **setName**(`name`: `string`): [`Deck`](#deck)

##### Parameters

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

The name of the deck. Use `::` to nest decks, e.g. `"Languages::Polish::Verbs"`.

</td>
</tr>
</tbody>
</table>

#### getDescription()

> **getDescription**(): `string`

#### setDescription()

> **setDescription**(`description`: `string`): [`Deck`](#deck)

##### Parameters

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

The description of the deck, shown on its overview screen.

</td>
</tr>
</tbody>
</table>

#### getMarkdownDescription()

> **getMarkdownDescription**(): `boolean`

#### setMarkdownDescription()

> **setMarkdownDescription**(`description`: `boolean`): [`Deck`](#deck)

##### Parameters

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

If `false` it renders the description with legacy HTML rendering.
If `true` it uses markdown rendering with `img` tags stripped.

</td>
</tr>
</tbody>
</table>

#### getExtendedReviewCardLimit()

> **getExtendedReviewCardLimit**(): `number` \| `null`

#### setExtendedReviewCardLimit()

> **setExtendedReviewCardLimit**(`extendRev`: `number` \| `null`): [`Deck`](#deck)

##### Parameters

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

The extended review card limit for a custom study session.

</td>
</tr>
</tbody>
</table>

#### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

#### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Deck`](#deck)

##### Parameters

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

#### getCollapsed()

> **getCollapsed**(): `boolean`

#### setCollapsed()

> **setCollapsed**(`collapsed`: `boolean`): [`Deck`](#deck)

##### Parameters

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

Whether the deck is collapsed in the main deck list.

</td>
</tr>
</tbody>
</table>

#### getBrowserCollapsed()

> **getBrowserCollapsed**(): `boolean`

#### setBrowserCollapsed()

> **setBrowserCollapsed**(`collapsed`: `boolean`): [`Deck`](#deck)

##### Parameters

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

Whether the deck is collapsed in the card browser's sidebar.

</td>
</tr>
</tbody>
</table>

#### getNewToday()

> **getNewToday**(): \[`number`, `number`\]

#### setNewToday()

> **setNewToday**(`newToday`: \[`number`, `number`\]): [`Deck`](#deck)

##### Parameters

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
new cards seen today in this deck minus the number of new cards in custom study today.

</td>
</tr>
</tbody>
</table>

#### getReviewToday()

> **getReviewToday**(): \[`number`, `number`\]

#### setReviewToday()

> **setReviewToday**(`revToday`: \[`number`, `number`\]): [`Deck`](#deck)

##### Parameters

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
review cards seen today in this deck minus the number of review cards in custom study today.

</td>
</tr>
</tbody>
</table>

#### getLearningToday()

> **getLearningToday**(): \[`number`, `number`\]

#### setLearningToday()

> **setLearningToday**(`lrnToday`: \[`number`, `number`\]): [`Deck`](#deck)

##### Parameters

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
learning cards seen today in this deck minus the number of learning cards in custom study today.

</td>
</tr>
</tbody>
</table>

#### getTimeToday()

> **getTimeToday**(): \[`number`, `number`\]

#### setTimeToday()

> **setTimeToday**(`timeToday`: \[`number`, `number`\]): [`Deck`](#deck)

##### Parameters

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

`timeToday`

</td>
<td>

\[`number`, `number`\]

</td>
<td>

The first number is the number of days that have passed between the
collection was created and the deck was last updated. The second is the time spent
studying in this deck today, in milliseconds.

</td>
</tr>
</tbody>
</table>

#### getDynamic()

> **getDynamic**(): `boolean`

#### setDynamic()

> **setDynamic**(`dynamic`: `boolean`): [`Deck`](#deck)

##### Parameters

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

Whether the deck is dynamic (filtered) — a deck that temporarily gathers
cards from other decks based on a search.

</td>
</tr>
</tbody>
</table>

#### getExtendedNewCardLimit()

> **getExtendedNewCardLimit**(): `number` \| `null`

#### setExtendedNewCardLimit()

> **setExtendedNewCardLimit**(`extendNew`: `number` \| `null`): [`Deck`](#deck)

##### Parameters

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

The extended new card limit for a custom study session.

</td>
</tr>
</tbody>
</table>

#### getConfiguration()

> **getConfiguration**(): [`DeckConfiguration`](#deckconfiguration) \| `null`

#### setConfiguration()

> **setConfiguration**(`config`: [`DeckConfiguration`](#deckconfiguration)): [`Deck`](#deck)

##### Parameters

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

[`DeckConfiguration`](#deckconfiguration)

</td>
<td>

A [DeckConfiguration](#deckconfiguration) with the deck's scheduling options, linked by ID.
It is registered in the parent collection immediately if the deck is attached to one,
otherwise when the deck is added to a collection.

</td>
</tr>
</tbody>
</table>

#### getModel()

> **getModel**(): [`Model`](#model) \| `null`

#### setModel()

> **setModel**(`model`: [`Model`](#model)): [`Deck`](#deck)

##### Parameters

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

[`Model`](#model)

</td>
<td>

The note [Model](#model) used by the deck's cards. The model is back-referenced
to this deck and registered in the parent collection immediately if the deck is attached
to one, otherwise when the deck is added to a collection.

</td>
</tr>
</tbody>
</table>

#### getModificationTime()

> **getModificationTime**(): `number`

#### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Deck`](#deck)

##### Parameters

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

The last modification time in seconds.

</td>
</tr>
</tbody>
</table>

#### addCard()

> **addCard**(`card`: [`Card`](#card)): [`Deck`](#deck)

##### Parameters

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

[`Card`](#card)

</td>
<td>

A [Card](#card) to be added. The card is wired back to this deck, and its
note's model is registered in the parent collection if the deck is attached to one.
Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### removeCard()

> **removeCard**(`card`: [`Card`](#card)): [`Deck`](#deck)

##### Parameters

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

[`Card`](#card)

</td>
<td>

A [Card](#card) to be removed and detached from this deck.

</td>
</tr>
</tbody>
</table>

#### getCards()

> **getCards**(): [`Card`](#card)[]

#### getCollection()

> **getCollection**(): [`Collection`](#collection) \| `null`

#### setCollection()

> **setCollection**(`collection`: [`Collection`](#collection)): [`Deck`](#deck)

##### Parameters

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

The [Collection](#collection) the deck belongs to. Set automatically when
the deck is added to a collection.

</td>
</tr>
</tbody>
</table>

***

### Card

A single flashcard generated from a [Note](#note), contained within a [Deck](#deck).

#### Constructor

> **new Card**(...`fields`: `string`[]): [`Card`](#card)

##### Parameters

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

...`fields`

</td>
<td>

`string`[]

</td>
<td>

The field values of the [Note](#note) the card is created with.

</td>
</tr>
</tbody>
</table>

#### getId()

> **getId**(): `number`

#### setId()

> **setId**(`id?`: `number`): [`Card`](#card)

##### Parameters

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

#### setNote()

> **setNote**(`note`: [`Note`](#note)): [`Card`](#card)

##### Parameters

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

`note`

</td>
<td>

[`Note`](#note)

</td>
<td>

A [Note](#note) containing the card's content.

</td>
</tr>
</tbody>
</table>

#### getNote()

> **getNote**(): [`Note`](#note) \| `null`

#### setDeck()

> **setDeck**(`deck`: [`Deck`](#deck) \| `null`): [`Card`](#card)

##### Parameters

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

[`Deck`](#deck) \| `null`

</td>
<td>

A [Deck](#deck) the card belongs to or `null` to detach the card from its deck.

</td>
</tr>
</tbody>
</table>

#### getDeck()

> **getDeck**(): [`Deck`](#deck) \| `null`

#### getOrdinal()

> **getOrdinal**(): `number`

#### setOrdinal()

> **setOrdinal**(`ordinal`: `number`): [`Card`](#card)

##### Parameters

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

`ordinal`

</td>
<td>

`number`

</td>
<td>

Identifies which of the note model's card templates the card was generated from.

</td>
</tr>
</tbody>
</table>

#### getModificationTime()

> **getModificationTime**(): `number`

#### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Card`](#card)

##### Parameters

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

The last modification time in seconds.

</td>
</tr>
</tbody>
</table>

#### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

#### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Card`](#card)

##### Parameters

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

#### getType()

> **getType**(): `"new"` \| `"learning"` \| `"review"` \| `"relearning"`

#### setType()

> **setType**(`type`: `"new"` \| `"learning"` \| `"review"` \| `"relearning"`): [`Card`](#card)

##### Parameters

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

`type`

</td>
<td>

`"new"` \| `"learning"` \| `"review"` \| `"relearning"`

</td>
<td>

The learning state of the card: `new`, `learning`, `review` or `relearning`.
Keep it consistent with the `queue` property.

</td>
</tr>
</tbody>
</table>

#### getQueue()

> **getQueue**(): `"new"` \| `"suspended"` \| `"user_buried"` \| `"schedule_buried"` \| `"learning"` \| `"review"` \| `"in_learning"` \| `"preview"`

#### setQueue()

> **setQueue**(`queue`: `"new"` \| `"suspended"` \| `"user_buried"` \| `"schedule_buried"` \| `"learning"` \| `"review"` \| `"in_learning"` \| `"preview"`): [`Card`](#card)

##### Parameters

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

`queue`

</td>
<td>

`"new"` \| `"suspended"` \| `"user_buried"` \| `"schedule_buried"` \| `"learning"` \| `"review"` \| `"in_learning"` \| `"preview"`

</td>
<td>

The scheduling queue the card is placed in: `new`, `learning`, `review`,
`in_learning`, `preview`, `suspended`, `user_buried` or `schedule_buried`.
Keep it consistent with the `type` property.

</td>
</tr>
</tbody>
</table>

#### getDue()

> **getDue**(): `number`

#### setDue()

> **setDue**(`due`: `number`): [`Card`](#card)

##### Parameters

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

`due`

</td>
<td>

`number`

</td>
<td>

When the card is due. The meaning depends on the card type: for `new` cards
it is the position in the new-card queue, for `learning` cards a timestamp in seconds,
and for `review` cards the number of days since the collection was created.

</td>
</tr>
</tbody>
</table>

#### getInterval()

> **getInterval**(): `number`

#### setInterval()

> **setInterval**(`interval`: `number`): [`Card`](#card)

##### Parameters

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

`interval`

</td>
<td>

`number`

</td>
<td>

The interval between reviews. Positive values are days, negative values are seconds.

</td>
</tr>
</tbody>
</table>

#### getFactor()

> **getFactor**(): `number`

#### setFactor()

> **setFactor**(`factor`: `number`): [`Card`](#card)

##### Parameters

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

`factor`

</td>
<td>

`number`

</td>
<td>

The ease factor in permille (e.g. `2500` means 250%).

</td>
</tr>
</tbody>
</table>

#### getNumberOfReviews()

> **getNumberOfReviews**(): `number`

#### setNumberOfReviews()

> **setNumberOfReviews**(`numberOfReviews`: `number`): [`Card`](#card)

##### Parameters

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

`numberOfReviews`

</td>
<td>

`number`

</td>
<td>

The number of times the card has been reviewed.

</td>
</tr>
</tbody>
</table>

#### getLapses()

> **getLapses**(): `number`

#### setLapses()

> **setLapses**(`lapses`: `number`): [`Card`](#card)

##### Parameters

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

`lapses`

</td>
<td>

`number`

</td>
<td>

The number of times the card was forgotten (went from the `review` state
back to relearning).

</td>
</tr>
</tbody>
</table>

#### getLeft()

> **getLeft**(): `number`

#### setLeft()

> **setLeft**(`left`: `number`): [`Card`](#card)

##### Parameters

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

`left`

</td>
<td>

`number`

</td>
<td>

The learning steps left, of the form `a * 1000 + b`, where `b` is the number
of repetitions left until graduation and `a` is the number of repetitions left today.

</td>
</tr>
</tbody>
</table>

#### getOriginalDue()

> **getOriginalDue**(): `number`

#### setOriginalDue()

> **setOriginalDue**(`originalDue`: `number`): [`Card`](#card)

##### Parameters

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

`originalDue`

</td>
<td>

`number`

</td>
<td>

The original due value of the card before it was moved to a filtered deck.

</td>
</tr>
</tbody>
</table>

#### getOriginalDeck()

> **getOriginalDeck**(): [`Deck`](#deck) \| `null`

#### setOriginalDeck()

> **setOriginalDeck**(`deck`: [`Deck`](#deck) \| `null`): [`Card`](#card)

##### Parameters

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

[`Deck`](#deck) \| `null`

</td>
<td>

The original [Deck](#deck) of the card before it was moved to a filtered deck
or `null` to clear it.

</td>
</tr>
</tbody>
</table>

#### getFlags()

> **getFlags**(): `number`

#### setFlags()

> **setFlags**(`flags`: `number`): [`Card`](#card)

##### Parameters

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

`flags`

</td>
<td>

`number`

</td>
<td>

The flag colour of the card: `0` = none, `1` = red, `2` = orange, `3` = green,
`4` = blue, `5` = pink, `6` = turquoise, `7` = purple.

</td>
</tr>
</tbody>
</table>

#### getData()

> **getData**(): `string`

#### setData()

> **setData**(`data`: `string`): [`Card`](#card)

##### Parameters

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

`data`

</td>
<td>

`string`

</td>
<td>

Additional card data. Unused by the legacy schema; modern Anki versions
store scheduler (FSRS) information here as JSON.

</td>
</tr>
</tbody>
</table>

***

### Note

A data container holding field values, used to generate [Card](#card)s based on a [Model](#model).

#### Constructor

> **new Note**(...`fields`: `string`[]): [`Note`](#note)

Creates a note with a default [Model](#model) attached.

##### Parameters

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

...`fields`

</td>
<td>

`string`[]

</td>
<td>

The values of the note's fields, in the order defined by its [Model](#model).

</td>
</tr>
</tbody>
</table>

#### getId()

> **getId**(): `number`

#### setId()

> **setId**(`id?`: `number`): [`Note`](#note)

##### Parameters

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

The note ID (by default the time in milliseconds of when the note was created).

</td>
</tr>
</tbody>
</table>

#### getGuid()

> **getGuid**(): `string`

#### setGuid()

> **setGuid**(`guid`: `string`): [`Note`](#note)

##### Parameters

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

`guid`

</td>
<td>

`string`

</td>
<td>

A globally unique identifier of the note. Anki uses it when re-importing
a package to match and update existing notes instead of duplicating them.

</td>
</tr>
</tbody>
</table>

#### getModel()

> **getModel**(): [`Model`](#model) \| `null`

#### setModel()

> **setModel**(`model`: [`Model`](#model)): [`Note`](#note)

##### Parameters

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

[`Model`](#model)

</td>
<td>

The [Model](#model) defining the note's fields and card templates, linked by ID.

</td>
</tr>
</tbody>
</table>

#### getModificationTime()

> **getModificationTime**(): `number`

#### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Note`](#note)

##### Parameters

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

The last modification time in seconds.

</td>
</tr>
</tbody>
</table>

#### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

#### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Note`](#note)

##### Parameters

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

#### getTags()

> **getTags**(): `string`[]

#### setTags()

> **setTags**(`tags`: `string`[]): [`Note`](#note)

##### Parameters

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

An array of tags. Tags must not contain spaces, as Anki stores the list
space-separated.

</td>
</tr>
</tbody>
</table>

#### getFields()

> **getFields**(): `string`[]

#### setFields()

> **setFields**(`fields`: `string`[]): [`Note`](#note)

##### Parameters

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

`fields`

</td>
<td>

`string`[]

</td>
<td>

The values of the note's fields in the order defined by its [Model](#model).
Stored joined with the `0x1f` unit separator. The first field (stripped of HTML) also
becomes the note's sort field.

</td>
</tr>
</tbody>
</table>

#### getSortField()

> **getSortField**(): `string`

#### setSortField()

> **setSortField**(`sort`: `string`): [`Note`](#note)

##### Parameters

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

`sort`

</td>
<td>

`string`

</td>
<td>

The value of the note's sort field used for ordering in Anki's card browser
(normally the content of the first field, set automatically by `setFields`). Numeric
values sort numerically — Anki's database stores them as numbers.

</td>
</tr>
</tbody>
</table>

#### getChecksum()

> **getChecksum**(): `number`

#### setChecksum()

> **setChecksum**(`checksum`: `number`): [`Note`](#note)

##### Parameters

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

`checksum`

</td>
<td>

`number`

</td>
<td>

An integer checksum of the note's first field, used by Anki for duplicate
detection - the first 8 hex digits of the SHA1 of the stripped field text, as an integer.

</td>
</tr>
</tbody>
</table>

#### getFlags()

> **getFlags**(): `number`

#### setFlags()

> **setFlags**(`flags`: `number`): [`Note`](#note)

##### Parameters

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

`flags`

</td>
<td>

`number`

</td>
<td>

Unused by Anki; kept for schema completeness.

</td>
</tr>
</tbody>
</table>

#### getData()

> **getData**(): `string`

#### setData()

> **setData**(`data`: `string`): [`Note`](#note)

##### Parameters

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

`data`

</td>
<td>

`string`

</td>
<td>

Additional note data. Unused by Anki; kept for schema completeness.

</td>
</tr>
</tbody>
</table>

***

### Model

A note type: defines the [Field](#field)s, [CardTemplate](#cardtemplate)s and styling used to
generate [Card](#card)s from [Note](#note)s.

#### Constructor

> **new Model**(`name?`: `string`, `fields?`: [`Field`](#field)[]): [`Model`](#model)

Creates a model with the given [Field](#field)s (`Front` and `Back` by default) and a
single [CardTemplate](#cardtemplate) generated from the first two of them: the first field
becomes the question, the second the answer.

##### Parameters

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

`name?`

</td>
<td>

`string`

</td>
<td>

The name of the model.

</td>
</tr>
<tr>
<td>

`fields?`

</td>
<td>

[`Field`](#field)[]

</td>
<td>

The fields of the model, replacing the default `Front` and `Back` ones.

</td>
</tr>
</tbody>
</table>

#### getId()

> **getId**(): `number`

#### setId()

> **setId**(`id?`: `number`): [`Model`](#model)

##### Parameters

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

The model ID (by default the time in milliseconds of when the model was created).

</td>
</tr>
</tbody>
</table>

#### getCss()

> **getCss**(): `string`

#### setCss()

> **setCss**(`css`: `string`): [`Model`](#model)

##### Parameters

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

`css`

</td>
<td>

`string`

</td>
<td>

The CSS shared by all card templates of the model.

</td>
</tr>
</tbody>
</table>

#### getDeck()

> **getDeck**(): [`Deck`](#deck) \| `null`

#### setDeck()

> **setDeck**(`deck`: [`Deck`](#deck)): [`Model`](#model)

##### Parameters

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

The [Deck](#deck), linked by ID, that cards created with this model are
added to by default.

</td>
</tr>
</tbody>
</table>

#### getFields()

> **getFields**(): [`Field`](#field)[]

#### setFields()

> **setFields**(`fields`: [`Field`](#field)[]): [`Model`](#model)

##### Parameters

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

`fields`

</td>
<td>

[`Field`](#field)[]

</td>
<td>

An array of [Field](#field)s replacing the current ones. Each field is
added via `addField`, so duplicates are skipped; field ordinals are assigned
automatically from the array order.

</td>
</tr>
</tbody>
</table>

#### addField()

> **addField**(`field`: [`Field`](#field)): [`Model`](#model)

##### Parameters

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

`field`

</td>
<td>

[`Field`](#field)

</td>
<td>

A [Field](#field) to be added and serialized into the model.

</td>
</tr>
</tbody>
</table>

#### removeField()

> **removeField**(`field`: [`Field`](#field)): [`Model`](#model)

##### Parameters

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

`field`

</td>
<td>

[`Field`](#field)

</td>
<td>

A [Field](#field) to be removed.

</td>
</tr>
</tbody>
</table>

#### getTemplates()

> **getTemplates**(): [`CardTemplate`](#cardtemplate)[]

#### setTemplates()

> **setTemplates**(`templates`: [`CardTemplate`](#cardtemplate)[]): [`Model`](#model)

##### Parameters

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

`templates`

</td>
<td>

[`CardTemplate`](#cardtemplate)[]

</td>
<td>

An array of [CardTemplate](#cardtemplate)s replacing the current ones. Each
template is added via `addTemplate`, so duplicates are skipped; template ordinals are
assigned automatically from the array order.

</td>
</tr>
</tbody>
</table>

#### addTemplate()

> **addTemplate**(`template`: [`CardTemplate`](#cardtemplate)): [`Model`](#model)

##### Parameters

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

`template`

</td>
<td>

[`CardTemplate`](#cardtemplate)

</td>
<td>

A [CardTemplate](#cardtemplate) to be added and serialized into the model.

</td>
</tr>
</tbody>
</table>

#### removeTemplate()

> **removeTemplate**(`template`: [`CardTemplate`](#cardtemplate)): [`Model`](#model)

##### Parameters

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

`template`

</td>
<td>

[`CardTemplate`](#cardtemplate)

</td>
<td>

A [CardTemplate](#cardtemplate) to be removed.

</td>
</tr>
</tbody>
</table>

#### getLatexPreamble()

> **getLatexPreamble**(): `string`

#### setLatexPreamble()

> **setLatexPreamble**(`preamble`: `string`): [`Model`](#model)

##### Parameters

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

`preamble`

</td>
<td>

`string`

</td>
<td>

The LaTeX preamble used when rendering `[latex]` blocks in fields.

</td>
</tr>
</tbody>
</table>

#### getLatexPostamble()

> **getLatexPostamble**(): `string`

#### setLatexPostamble()

> **setLatexPostamble**(`postamble`: `string`): [`Model`](#model)

##### Parameters

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

`postamble`

</td>
<td>

`string`

</td>
<td>

The LaTeX postamble used when rendering `[latex]` blocks in fields.

</td>
</tr>
</tbody>
</table>

#### getModificationTime()

> **getModificationTime**(): `number`

#### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Model`](#model)

##### Parameters

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

The last modification time in seconds.

</td>
</tr>
</tbody>
</table>

#### getName()

> **getName**(): `string`

#### setName()

> **setName**(`name`: `string`): [`Model`](#model)

##### Parameters

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

The name of the model.

</td>
</tr>
</tbody>
</table>

#### getSortField()

> **getSortField**(): `number`

#### setSortField()

> **setSortField**(`sort`: `number`): [`Model`](#model)

##### Parameters

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

`sort`

</td>
<td>

`number`

</td>
<td>

The index of the field used for sorting notes in Anki's card browser
(`0` = the first field).

</td>
</tr>
</tbody>
</table>

#### getType()

> **getType**(): `"standard"` \| `"cloze"`

#### setType()

> **setType**(`type`: `"standard"` \| `"cloze"`): [`Model`](#model)

##### Parameters

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

`type`

</td>
<td>

`"standard"` \| `"cloze"`

</td>
<td>

The type of the model: `standard` or `cloze`.

</td>
</tr>
</tbody>
</table>

#### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

#### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Model`](#model)

##### Parameters

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

#### getRequirements()

> **getRequirements**(): `ModelRequirement`[]

#### setRequirements()

> **setRequirements**(`requirements`: `ModelRequirement`[]): [`Model`](#model)

##### Parameters

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

`requirements`

</td>
<td>

`ModelRequirement`[]

</td>
<td>

Legacy card-generation requirements as `ModelRequirement` tuples,
used by old Anki clients to decide which cards to generate. Modern Anki recomputes them
and ignores this value.

</td>
</tr>
</tbody>
</table>

#### getTags()

> **getTags**(): `string`[]

#### setTags()

> **setTags**(`tags`: `string`[]): [`Model`](#model)

##### Parameters

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

Legacy cache of the tags of the last note added with this model. Unused by modern Anki.

</td>
</tr>
</tbody>
</table>

#### getVersions()

> **getVersions**(): `number`[]

#### setVersions()

> **setVersions**(`versions`: `number`[]): [`Model`](#model)

##### Parameters

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

`versions`

</td>
<td>

`number`[]

</td>
<td>

Legacy version array. Unused by modern Anki.

</td>
</tr>
</tbody>
</table>

***

### Field

A field definition of a [Model](#model) — a named slot for the [Note](#note) content,
e.g. `Front` or `Back`.

#### Constructor

> **new Field**(`name`: `string`): [`Field`](#field)

##### Parameters

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

The name of the field, unique within the model. Card templates reference
the field's content by this name, e.g. `{{Front}}`.

</td>
</tr>
</tbody>
</table>

#### getName()

> **getName**(): `string`

#### setName()

> **setName**(`name`: `string`): [`Field`](#field)

##### Parameters

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

The name of the field, unique within the model. Card templates reference
the field's content by this name, e.g. `{{Front}}`.

</td>
</tr>
</tbody>
</table>

#### getFont()

> **getFont**(): `string`

#### setFont()

> **setFont**(`font`: `string`): [`Field`](#field)

##### Parameters

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

`font`

</td>
<td>

`string`

</td>
<td>

The font used for the field in Anki's note editor. The appearance on cards
is controlled by the model's CSS instead.

</td>
</tr>
</tbody>
</table>

#### getOrdinal()

> **getOrdinal**(): `number`

#### setOrdinal()

> **setOrdinal**(`ordinal`: `number`): [`Field`](#field)

##### Parameters

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

`ordinal`

</td>
<td>

`number`

</td>
<td>

The position of the field within its model. Managed by the parent
[Model](#model) — assigned automatically from the field order, so manually set values
are overwritten.

</td>
</tr>
</tbody>
</table>

#### getRightToLeft()

> **getRightToLeft**(): `boolean`

#### setRightToLeft()

> **setRightToLeft**(`rtl`: `boolean`): [`Field`](#field)

##### Parameters

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

`rtl`

</td>
<td>

`boolean`

</td>
<td>

Whether the field contains a right-to-left script.

</td>
</tr>
</tbody>
</table>

#### getSize()

> **getSize**(): `number`

#### setSize()

> **setSize**(`size`: `number`): [`Field`](#field)

##### Parameters

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

`size`

</td>
<td>

`number`

</td>
<td>

The font size used for the field in Anki's note editor.

</td>
</tr>
</tbody>
</table>

#### getSticky()

> **getSticky**(): `boolean`

#### setSticky()

> **setSticky**(`sticky`: `boolean`): [`Field`](#field)

##### Parameters

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

`sticky`

</td>
<td>

`boolean`

</td>
<td>

Whether the field's content is kept in Anki's `Add` dialog after a note
is added, instead of being cleared.

</td>
</tr>
</tbody>
</table>

#### getMedia()

> **getMedia**(): `string`[]

#### setMedia()

> **setMedia**(`media`: `string`[]): [`Field`](#field)

##### Parameters

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

`media`

</td>
<td>

`string`[]

</td>
<td>

Legacy media list. Unused by Anki; kept for schema completeness.

</td>
</tr>
</tbody>
</table>

***

### CardTemplate

A card template of a [Model](#model): defines how the question and answer sides of
[Card](#card)s are rendered from the [Note](#note) fields. Each template of a model
generates one card per note.

#### Constructor

> **new CardTemplate**(`name?`: `string`, `questionFormat?`: `string`, `answerFormat?`: `string`): [`CardTemplate`](#cardtemplate)

##### Parameters

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

`name?`

</td>
<td>

`string`

</td>
<td>

The name of the template.

</td>
</tr>
<tr>
<td>

`questionFormat?`

</td>
<td>

`string`

</td>
<td>

The question (front side) template of the card.

</td>
</tr>
<tr>
<td>

`answerFormat?`

</td>
<td>

`string`

</td>
<td>

The answer (back side) template of the card.

</td>
</tr>
</tbody>
</table>

#### getName()

> **getName**(): `string`

#### setName()

> **setName**(`name`: `string`): [`CardTemplate`](#cardtemplate)

##### Parameters

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

The name of the template, e.g. `Card 1`.

</td>
</tr>
</tbody>
</table>

#### getAnswerFormat()

> **getAnswerFormat**(): `string`

#### setAnswerFormat()

> **setAnswerFormat**(`format`: `string`): [`CardTemplate`](#cardtemplate)

##### Parameters

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

`format`

</td>
<td>

`string`

</td>
<td>

The template of the answer (back) side, where `{{FrontSide}}` embeds the
rendered question side and field names in double braces are replaced with the note's
content, e.g. `{{FrontSide}}\n\n<hr id="answer">\n\n{{Back}}`.

</td>
</tr>
</tbody>
</table>

#### getBrowserAnswerFormat()

> **getBrowserAnswerFormat**(): `string`

#### setBrowserAnswerFormat()

> **setBrowserAnswerFormat**(`format`: `string`): [`CardTemplate`](#cardtemplate)

##### Parameters

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

`format`

</td>
<td>

`string`

</td>
<td>

An optional alternative answer template used by Anki's card browser
(empty = the regular one is used).

</td>
</tr>
</tbody>
</table>

#### getQuestionFormat()

> **getQuestionFormat**(): `string`

#### setQuestionFormat()

> **setQuestionFormat**(`format`: `string`): [`CardTemplate`](#cardtemplate)

##### Parameters

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

`format`

</td>
<td>

`string`

</td>
<td>

The template of the question (front) side — field names in double braces
are replaced with the note's content, e.g. `{{Front}}`.

</td>
</tr>
</tbody>
</table>

#### getBrowserQuestionFormat()

> **getBrowserQuestionFormat**(): `string`

#### setBrowserQuestionFormat()

> **setBrowserQuestionFormat**(`format`: `string`): [`CardTemplate`](#cardtemplate)

##### Parameters

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

`format`

</td>
<td>

`string`

</td>
<td>

An optional alternative question template used by Anki's card browser
(empty = the regular one is used).

</td>
</tr>
</tbody>
</table>

#### getDeck()

> **getDeck**(): [`Deck`](#deck) \| `null`

#### setDeck()

> **setDeck**(`deck`: [`Deck`](#deck) \| `null`): [`CardTemplate`](#cardtemplate)

##### Parameters

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

[`Deck`](#deck) \| `null`

</td>
<td>

A [Deck](#deck) override, linked by ID: cards generated from this template
are placed in it instead of the note's deck, or `null` to remove the override.

</td>
</tr>
</tbody>
</table>

#### getOrdinal()

> **getOrdinal**(): `number`

#### setOrdinal()

> **setOrdinal**(`ordinal`: `number`): [`CardTemplate`](#cardtemplate)

##### Parameters

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

`ordinal`

</td>
<td>

`number`

</td>
<td>

The position of the template within its model. Managed by the parent
[Model](#model) — assigned automatically from the template order, so manually set values
are overwritten.

</td>
</tr>
</tbody>
</table>

***

### Configuration

Anki client preferences stored in the collection — new-card scheduling, timeboxing,
card browser appearance and the currently selected [Deck](#deck) and [Model](#model).
All attributes are optional; Anki falls back to its defaults for absent ones.

#### getCurrentDeck()

> **getCurrentDeck**(): [`Deck`](#deck) \| `null`

#### setCurrentDeck()

> **setCurrentDeck**(`deck`: [`Deck`](#deck)): [`Configuration`](#configuration)

##### Parameters

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

The currently selected [Deck](#deck), linked by ID.

</td>
</tr>
</tbody>
</table>

#### getActiveDecks()

> **getActiveDecks**(): [`Deck`](#deck)[]

#### setActiveDecks()

> **setActiveDecks**(`decks`: [`Deck`](#deck)[]): [`Configuration`](#configuration)

##### Parameters

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

The [Deck](#deck)s (linked by IDs) currently selected for study — typically
the current deck and its subdecks.

</td>
</tr>
</tbody>
</table>

#### addActiveDeck()

> **addActiveDeck**(`deck`: [`Deck`](#deck)): [`Configuration`](#configuration)

##### Parameters

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

A [Deck](#deck) to be added to the active ones. Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### removeActiveDeck()

> **removeActiveDeck**(`deck`: [`Deck`](#deck)): [`Configuration`](#configuration)

##### Parameters

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

A [Deck](#deck) to be removed from the active ones.

</td>
</tr>
</tbody>
</table>

#### getNewSpread()

> **getNewSpread**(): `"new_cards_distribute"` \| `"new_cards_last"` \| `"new_cards_first"` \| `null`

#### setNewSpread()

> **setNewSpread**(`newSpread`: `"new_cards_distribute"` \| `"new_cards_last"` \| `"new_cards_first"`): [`Configuration`](#configuration)

##### Parameters

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

`newSpread`

</td>
<td>

`"new_cards_distribute"` \| `"new_cards_last"` \| `"new_cards_first"`

</td>
<td>

How new cards are mixed with reviews: `new_cards_distribute` (spread
among the reviews), `new_cards_last` or `new_cards_first`.

</td>
</tr>
</tbody>
</table>

#### getLearnAheadLimit()

> **getLearnAheadLimit**(): `number` \| `null`

#### setLearnAheadLimit()

> **setLearnAheadLimit**(`collapseTime`: `number`): [`Configuration`](#configuration)

##### Parameters

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

`collapseTime`

</td>
<td>

`number`

</td>
<td>

The learn-ahead limit in seconds (e.g. `1200` = 20 minutes): when
nothing else is due, cards in learning are shown up to this amount of time earlier.

</td>
</tr>
</tbody>
</table>

#### getTimeboxTimeLimit()

> **getTimeboxTimeLimit**(): `number` \| `null`

#### setTimeboxTimeLimit()

> **setTimeboxTimeLimit**(`timeLim`: `number`): [`Configuration`](#configuration)

##### Parameters

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

`timeLim`

</td>
<td>

`number`

</td>
<td>

The timeboxing period in seconds (`0` = disabled): Anki shows the number
of cards studied after each such period during a study session.

</td>
</tr>
</tbody>
</table>

#### getShowNextReviewTimeAboveAnswerButtons()

> **getShowNextReviewTimeAboveAnswerButtons**(): `boolean` \| `null`

#### setShowNextReviewTimeAboveAnswerButtons()

> **setShowNextReviewTimeAboveAnswerButtons**(`estTimes`: `boolean`): [`Configuration`](#configuration)

##### Parameters

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

`estTimes`

</td>
<td>

`boolean`

</td>
<td>

Whether the next review time is shown above the answer buttons.

</td>
</tr>
</tbody>
</table>

#### getShowRemainingCardCountDuringReview()

> **getShowRemainingCardCountDuringReview**(): `boolean` \| `null`

#### setShowRemainingCardCountDuringReview()

> **setShowRemainingCardCountDuringReview**(`dueCounts`: `boolean`): [`Configuration`](#configuration)

##### Parameters

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

`dueCounts`

</td>
<td>

`boolean`

</td>
<td>

Whether the remaining card counts are shown during review.

</td>
</tr>
</tbody>
</table>

#### getCurrentModel()

> **getCurrentModel**(): [`Model`](#model) \| `null`

#### setCurrentModel()

> **setCurrentModel**(`model`: [`Model`](#model)): [`Configuration`](#configuration)

##### Parameters

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

[`Model`](#model)

</td>
<td>

The most recently used [Model](#model), linked by ID.

</td>
</tr>
</tbody>
</table>

#### getNextPosition()

> **getNextPosition**(): `number` \| `null`

#### setNextPosition()

> **setNextPosition**(`nextPos`: `number`): [`Configuration`](#configuration)

##### Parameters

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

`nextPos`

</td>
<td>

`number`

</td>
<td>

The `due` position assigned to the next added new card (starts at `1`).

</td>
</tr>
</tbody>
</table>

#### getSortType()

> **getSortType**(): `string` \| `null`

#### setSortType()

> **setSortType**(`sortType`: `string`): [`Configuration`](#configuration)

##### Parameters

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

`sortType`

</td>
<td>

`string`

</td>
<td>

The card browser column used for sorting, e.g. `noteFld` or `cardDue`.

</td>
</tr>
</tbody>
</table>

#### getSortBackwards()

> **getSortBackwards**(): `boolean` \| `null`

#### setSortBackwards()

> **setSortBackwards**(`sortBackwards`: `boolean`): [`Configuration`](#configuration)

##### Parameters

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

`sortBackwards`

</td>
<td>

`boolean`

</td>
<td>

Whether the card browser sorting order is reversed.

</td>
</tr>
</tbody>
</table>

#### getAddToCurrentDeck()

> **getAddToCurrentDeck**(): `boolean` \| `null`

#### setAddToCurrentDeck()

> **setAddToCurrentDeck**(`addToCur`: `boolean`): [`Configuration`](#configuration)

##### Parameters

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

`addToCur`

</td>
<td>

`boolean`

</td>
<td>

Whether new cards are added to the currently selected deck (`true`) or
to the deck the note's model is linked to (`false`).

</td>
</tr>
</tbody>
</table>

#### getShowLearningCardsWithLargerSteps()

> **getShowLearningCardsWithLargerSteps**(): `boolean` \| `null`

#### setShowLearningCardsWithLargerSteps()

> **setShowLearningCardsWithLargerSteps**(`dayLearnFirst`: `boolean`): [`Configuration`](#configuration)

##### Parameters

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

`dayLearnFirst`

</td>
<td>

`boolean`

</td>
<td>

Whether learning cards with steps of a day or more are shown
before reviews.

</td>
</tr>
</tbody>
</table>

#### getNewBury()

> **getNewBury**(): `boolean` \| `null`

#### setNewBury()

> **setNewBury**(`newBury`: `boolean`): [`Configuration`](#configuration)

##### Parameters

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

`newBury`

</td>
<td>

`boolean`

</td>
<td>

Legacy option for burying new sibling cards, superseded by per-deck
options in modern Anki.

</td>
</tr>
</tbody>
</table>

#### getLastUnburied()

> **getLastUnburied**(): `number` \| `null`

#### setLastUnburied()

> **setLastUnburied**(`lastUnburied`: `number`): [`Configuration`](#configuration)

##### Parameters

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

`lastUnburied`

</td>
<td>

`number`

</td>
<td>

The day the cards were last unburied, in days since the collection
creation. Legacy scheduler bookkeeping.

</td>
</tr>
</tbody>
</table>

#### getActiveColumns()

> **getActiveColumns**(): (`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[] \| `null`

#### setActiveColumns()

> **setActiveColumns**(`columns`: (`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[]): [`Configuration`](#configuration)

##### Parameters

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

`columns`

</td>
<td>

(`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[]

</td>
<td>

The columns displayed in the card browser.

</td>
</tr>
</tbody>
</table>

#### addActiveColumn()

> **addActiveColumn**(`column`: `"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`): [`Configuration`](#configuration)

##### Parameters

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

`column`

</td>
<td>

`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`

</td>
<td>

A column to be added to the ones displayed in the card browser.
Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

#### removeActiveColumn()

> **removeActiveColumn**(`column`: `"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`): [`Configuration`](#configuration)

##### Parameters

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

`column`

</td>
<td>

`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`

</td>
<td>

A column to be removed from the ones displayed in the card browser.

</td>
</tr>
</tbody>
</table>

#### setValue()

> **setValue**(`attribute`: `string`, `value`: `any`): [`Configuration`](#configuration)

Sets an arbitrary configuration attribute not covered by the typed setters.

##### Parameters

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

`attribute`

</td>
<td>

`string`

</td>
<td>

The name of the attribute as stored in the collection's `conf` JSON.

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`any`

</td>
<td>

The value of the attribute.

</td>
</tr>
</tbody>
</table>

#### getValue()

> **getValue**(`attribute`: `string`): `any`

##### Parameters

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

`attribute`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### DeckConfiguration

A named group of study options shared by the [Deck](#deck)s it is assigned to: timers,
audio playback and the [NewCardConfig](#newcardconfig), [ReviewCardConfig](#reviewcardconfig) and
[LapseCardConfig](#lapsecardconfig) scheduling settings.

#### Constructor

> **new DeckConfiguration**(`name?`: `string`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

`name?`

</td>
<td>

`string`

</td>
<td>

The name of the configuration.

</td>
</tr>
</tbody>
</table>

#### getId()

> **getId**(): `number`

#### setId()

> **setId**(`id?`: `number`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

The configuration ID (by default the time in milliseconds of when the
configuration was created).

</td>
</tr>
</tbody>
</table>

#### getName()

> **getName**(): `string`

#### setName()

> **setName**(`name`: `string`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

The name of the configuration.

</td>
</tr>
</tbody>
</table>

#### getAutoplay()

> **getAutoplay**(): `boolean`

#### setAutoplay()

> **setAutoplay**(`autoplay`: `boolean`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

`autoplay`

</td>
<td>

`boolean`

</td>
<td>

Whether the question audio is played automatically when the question
is shown.

</td>
</tr>
</tbody>
</table>

#### getDynamic()

> **getDynamic**(): `boolean`

#### setDynamic()

> **setDynamic**(`dynamic`: `boolean`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

Whether the configuration belongs to a dynamic (filtered) deck.

</td>
</tr>
</tbody>
</table>

#### getMaxTaken()

> **getMaxTaken**(): `number`

#### setMaxTaken()

> **setMaxTaken**(`maxTaken`: `number`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

`maxTaken`

</td>
<td>

`number`

</td>
<td>

The maximum number of seconds a single answer can take: answers taking
longer are recorded as this value.

</td>
</tr>
</tbody>
</table>

#### getModificationTime()

> **getModificationTime**(): `number`

#### setModificationTime()

> **setModificationTime**(`time`: `number`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

The last modification time in seconds.

</td>
</tr>
</tbody>
</table>

#### getReplay()

> **getReplay**(): `boolean`

#### setReplay()

> **setReplay**(`replay`: `boolean`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

`replay`

</td>
<td>

`boolean`

</td>
<td>

Whether the question audio is replayed when the answer is shown.

</td>
</tr>
</tbody>
</table>

#### getTimer()

> **getTimer**(): `boolean`

#### setTimer()

> **setTimer**(`timer`: `boolean`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

`timer`

</td>
<td>

`boolean`

</td>
<td>

Whether the answer timer is shown during review.

</td>
</tr>
</tbody>
</table>

#### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

#### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

#### getLapseCardConfig()

> **getLapseCardConfig**(): [`LapseCardConfig`](#lapsecardconfig)

#### setLapseCardConfig()

> **setLapseCardConfig**(`config`: [`LapseCardConfig`](#lapsecardconfig)): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

[`LapseCardConfig`](#lapsecardconfig)

</td>
<td>

The [LapseCardConfig](#lapsecardconfig) with the scheduling options for lapsed
(forgotten) cards, serialized into the configuration.

</td>
</tr>
</tbody>
</table>

#### getNewCardConfig()

> **getNewCardConfig**(): [`NewCardConfig`](#newcardconfig)

#### setNewCardConfig()

> **setNewCardConfig**(`config`: [`NewCardConfig`](#newcardconfig)): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

[`NewCardConfig`](#newcardconfig)

</td>
<td>

The [NewCardConfig](#newcardconfig) with the scheduling options for new cards,
serialized into the configuration.

</td>
</tr>
</tbody>
</table>

#### getReviewCardConfig()

> **getReviewCardConfig**(): [`ReviewCardConfig`](#reviewcardconfig)

#### setReviewCardConfig()

> **setReviewCardConfig**(`config`: [`ReviewCardConfig`](#reviewcardconfig)): [`DeckConfiguration`](#deckconfiguration)

##### Parameters

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

[`ReviewCardConfig`](#reviewcardconfig)

</td>
<td>

The [ReviewCardConfig](#reviewcardconfig) with the scheduling options for review cards,
serialized into the configuration.

</td>
</tr>
</tbody>
</table>

***

### NewCardConfig

The scheduling options of a [DeckConfiguration](#deckconfiguration) for new cards — cards that have
not been studied yet.

#### getBury()

> **getBury**(): `boolean`

#### setBury()

> **setBury**(`bury`: `boolean`): [`NewCardConfig`](#newcardconfig)

##### Parameters

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

`bury`

</td>
<td>

`boolean`

</td>
<td>

Whether new sibling cards — other cards of the same note — are buried
(hidden) until the next day once one of them is answered.

</td>
</tr>
</tbody>
</table>

#### getDelays()

> **getDelays**(): `number`[]

#### setDelays()

> **setDelays**(`delays`: `number`[]): [`NewCardConfig`](#newcardconfig)

##### Parameters

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

`delays`

</td>
<td>

`number`[]

</td>
<td>

The learning steps in minutes, e.g. `[1, 10]` = steps of 1 and 10 minutes.

</td>
</tr>
</tbody>
</table>

#### getInitialEaseFactor()

> **getInitialEaseFactor**(): `number`

#### setInitialEaseFactor()

> **setInitialEaseFactor**(`factor`: `number`): [`NewCardConfig`](#newcardconfig)

##### Parameters

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

`factor`

</td>
<td>

`number`

</td>
<td>

The ease factor in permille that cards graduate from learning with
(e.g. `2500` means 250%).

</td>
</tr>
</tbody>
</table>

#### getIntervals()

> **getIntervals**(): `number`[]

#### setIntervals()

> **setIntervals**(`intervals`: `number`[]): [`NewCardConfig`](#newcardconfig)

##### Parameters

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

`intervals`

</td>
<td>

`number`[]

</td>
<td>

The intervals in days applied when a card leaves learning: the first
for the `Good` (graduating) answer, the second for `Easy`; the third is legacy and unused.

</td>
</tr>
</tbody>
</table>

#### getCardsOrder()

> **getCardsOrder**(): `"new_cards_random"` \| `"new_cards_due"`

#### setCardsOrder()

> **setCardsOrder**(`order`: `"new_cards_random"` \| `"new_cards_due"`): [`NewCardConfig`](#newcardconfig)

##### Parameters

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

`order`

</td>
<td>

`"new_cards_random"` \| `"new_cards_due"`

</td>
<td>

Whether new cards are shown in random order (`new_cards_random`) or in the
order they were added (`new_cards_due`).

</td>
</tr>
</tbody>
</table>

#### getMaximumCardsPerDay()

> **getMaximumCardsPerDay**(): `number`

#### setMaximumCardsPerDay()

> **setMaximumCardsPerDay**(`cards`: `number`): [`NewCardConfig`](#newcardconfig)

##### Parameters

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

`cards`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

#### getSeparate()

> **getSeparate**(): `boolean`

#### setSeparate()

> **setSeparate**(`separate`: `boolean`): [`NewCardConfig`](#newcardconfig)

##### Parameters

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

`separate`

</td>
<td>

`boolean`

</td>
<td>

Legacy option. Unused by Anki; kept for schema completeness.

</td>
</tr>
</tbody>
</table>

***

### ReviewCardConfig

The scheduling options of a [DeckConfiguration](#deckconfiguration) for review cards — cards that
have graduated from learning.

#### getBury()

> **getBury**(): `boolean`

#### setBury()

> **setBury**(`bury`: `boolean`): [`ReviewCardConfig`](#reviewcardconfig)

##### Parameters

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

`bury`

</td>
<td>

`boolean`

</td>
<td>

Whether review sibling cards — other cards of the same note — are buried
(hidden) until the next day once one of them is answered.

</td>
</tr>
</tbody>
</table>

#### getEasyBonus()

> **getEasyBonus**(): `number`

#### setEasyBonus()

> **setEasyBonus**(`bonus`: `number`): [`ReviewCardConfig`](#reviewcardconfig)

##### Parameters

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

`bonus`

</td>
<td>

`number`

</td>
<td>

The extra multiplier applied to the interval when a card is answered `Easy`,
as a fraction (e.g. `1.3` = 130% of the usual next interval).

</td>
</tr>
</tbody>
</table>

#### getFuzz()

> **getFuzz**(): `number`

#### setFuzz()

> **setFuzz**(`fuzz`: `number`): [`ReviewCardConfig`](#reviewcardconfig)

##### Parameters

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

`fuzz`

</td>
<td>

`number`

</td>
<td>

The random variation applied to intervals as a fraction (e.g. `0.05` = 5%),
so that cards introduced together do not always stay due on the same days. Legacy —
newer Anki schedulers compute their own fuzz.

</td>
</tr>
</tbody>
</table>

#### getIntervalModifier()

> **getIntervalModifier**(): `number`

#### setIntervalModifier()

> **setIntervalModifier**(`modifier`: `number`): [`ReviewCardConfig`](#reviewcardconfig)

##### Parameters

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

`modifier`

</td>
<td>

`number`

</td>
<td>

The multiplier applied to all review intervals, as a fraction
(e.g. `1` = 100%, no change).

</td>
</tr>
</tbody>
</table>

#### getMaximumInterval()

> **getMaximumInterval**(): `number`

#### setMaximumInterval()

> **setMaximumInterval**(`interval`: `number`): [`ReviewCardConfig`](#reviewcardconfig)

##### Parameters

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

`interval`

</td>
<td>

`number`

</td>
<td>

The maximum interval in days a review card can reach
(e.g. `36500` = 100 years).

</td>
</tr>
</tbody>
</table>

#### getMinimumSpace()

> **getMinimumSpace**(): `number`

#### setMinimumSpace()

> **setMinimumSpace**(`space`: `number`): [`ReviewCardConfig`](#reviewcardconfig)

##### Parameters

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

`space`

</td>
<td>

`number`

</td>
<td>

Legacy option. Unused by Anki; kept for schema completeness.

</td>
</tr>
</tbody>
</table>

#### getMaximumCardsPerDay()

> **getMaximumCardsPerDay**(): `number`

#### setMaximumCardsPerDay()

> **setMaximumCardsPerDay**(`cards`: `number`): [`ReviewCardConfig`](#reviewcardconfig)

##### Parameters

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

`cards`

</td>
<td>

`number`

</td>
<td>

The maximum number of review cards shown per day.

</td>
</tr>
</tbody>
</table>

***

### LapseCardConfig

The scheduling options of a [DeckConfiguration](#deckconfiguration) for lapsed cards — cards answered
`Again` during review.

#### getDelays()

> **getDelays**(): `number`[]

#### setDelays()

> **setDelays**(`delays`: `number`[]): [`LapseCardConfig`](#lapsecardconfig)

##### Parameters

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

`delays`

</td>
<td>

`number`[]

</td>
<td>

The relearning steps in minutes, e.g. `[10]` = a single 10-minute step.
When empty, lapsed cards go straight back to the review queue.

</td>
</tr>
</tbody>
</table>

#### getLeechAction()

> **getLeechAction**(): `"mark"` \| `"suspend"`

#### setLeechAction()

> **setLeechAction**(`action`: `"mark"` \| `"suspend"`): [`LapseCardConfig`](#lapsecardconfig)

##### Parameters

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

`action`

</td>
<td>

`"mark"` \| `"suspend"`

</td>
<td>

What happens to a card marked as a leech: `suspend` or `mark` (tag only).

</td>
</tr>
</tbody>
</table>

#### getLeechFails()

> **getLeechFails**(): `number`

#### setLeechFails()

> **setLeechFails**(`fails`: `number`): [`LapseCardConfig`](#lapsecardconfig)

##### Parameters

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

`fails`

</td>
<td>

`number`

</td>
<td>

The number of lapses after which a card is tagged as a leech
(`0` = leeches disabled).

</td>
</tr>
</tbody>
</table>

#### getMinimumInterval()

> **getMinimumInterval**(): `number`

#### setMinimumInterval()

> **setMinimumInterval**(`interval`: `number`): [`LapseCardConfig`](#lapsecardconfig)

##### Parameters

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

`interval`

</td>
<td>

`number`

</td>
<td>

The minimum interval in days a card is given after a lapse.

</td>
</tr>
</tbody>
</table>

#### getMultiplier()

> **getMultiplier**(): `number`

#### setMultiplier()

> **setMultiplier**(`multiplier`: `number`): [`LapseCardConfig`](#lapsecardconfig)

##### Parameters

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

`multiplier`

</td>
<td>

`number`

</td>
<td>

The fraction of the previous interval a lapsed card keeps, e.g.
`0` = the interval is reset (Anki's "new interval" option).

</td>
</tr>
</tbody>
</table>

***

### ReviewLog

A single review history entry of a [Card](#card), stored in the collection's `revlog`
table. Exported review history keeps Anki's statistics and scheduling intact after
the package is imported.

#### getId()

> **getId**(): `number`

#### setId()

> **setId**(`id?`: `number`): [`ReviewLog`](#reviewlog)

##### Parameters

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

The review log ID: the time in milliseconds of when the review happened
(by default the time of the creation of this entry).

</td>
</tr>
</tbody>
</table>

#### getCard()

> **getCard**(): [`Card`](#card) \| `null`

#### setCard()

> **setCard**(`card`: [`Card`](#card)): [`ReviewLog`](#reviewlog)

##### Parameters

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

[`Card`](#card)

</td>
<td>

The reviewed [Card](#card), linked by ID.

</td>
</tr>
</tbody>
</table>

#### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

#### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`ReviewLog`](#reviewlog)

##### Parameters

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

#### getEase()

> **getEase**(): `ReviewLogEaseKey`

#### setEase()

> **setEase**(`ease`: `ReviewLogEaseKey`): [`ReviewLog`](#reviewlog)

##### Parameters

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

`ease`

</td>
<td>

`ReviewLogEaseKey`

</td>
<td>

The button pressed to answer the card: `wrong`, `hard`, `ok` or `easy`.
The value is serialized according to the log's type — `learn` and `relearn` entries
use a three-button scale where `hard` falls back to `wrong`.

</td>
</tr>
</tbody>
</table>

#### getInterval()

> **getInterval**(): `number`

#### setInterval()

> **setInterval**(`interval`: `number`): [`ReviewLog`](#reviewlog)

##### Parameters

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

`interval`

</td>
<td>

`number`

</td>
<td>

The interval of the card after the review. Positive values are days,
negative values are seconds.

</td>
</tr>
</tbody>
</table>

#### getLastInterval()

> **getLastInterval**(): `number`

#### setLastInterval()

> **setLastInterval**(`interval`: `number`): [`ReviewLog`](#reviewlog)

##### Parameters

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

`interval`

</td>
<td>

`number`

</td>
<td>

The interval of the card before the review. Positive values are days,
negative values are seconds.

</td>
</tr>
</tbody>
</table>

#### getFactor()

> **getFactor**(): `number`

#### setFactor()

> **setFactor**(`factor`: `number`): [`ReviewLog`](#reviewlog)

##### Parameters

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

`factor`

</td>
<td>

`number`

</td>
<td>

The ease factor of the card after the review, in permille (e.g. `2500`
means 250%). `0` for cards in learning.

</td>
</tr>
</tbody>
</table>

#### getTime()

> **getTime**(): `number`

#### setTime()

> **setTime**(`time`: `number`): [`ReviewLog`](#reviewlog)

##### Parameters

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

The duration of the review in milliseconds (Anki records at most `60000`).

</td>
</tr>
</tbody>
</table>

#### getType()

> **getType**(): `"manual"` \| `"review"` \| `"learn"` \| `"relearn"` \| `"filtered"` \| `"rescheduled"`

#### setType()

> **setType**(`type`: `"manual"` \| `"review"` \| `"learn"` \| `"relearn"` \| `"filtered"` \| `"rescheduled"`): [`ReviewLog`](#reviewlog)

##### Parameters

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

`type`

</td>
<td>

`"manual"` \| `"review"` \| `"learn"` \| `"relearn"` \| `"filtered"` \| `"rescheduled"`

</td>
<td>

The kind of the review: `learn`, `review`, `relearn`, `filtered`
(reviewed in a filtered deck), `manual` or `rescheduled`.

</td>
</tr>
</tbody>
</table>

***

### Grave

A deletion marker (tombstone) stored in the collection's `graves` table: tells Anki
during synchronisation that a [Card](#card), [Note](#note) or [Deck](#deck) was deleted,
so the deletion propagates to other devices.

#### getOriginalId()

> **getOriginalId**(): `number`

#### setOriginalId()

> **setOriginalId**(`originalId`: `number`): [`Grave`](#grave)

##### Parameters

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

`originalId`

</td>
<td>

`number`

</td>
<td>

The ID of the deleted object the grave marks.

</td>
</tr>
</tbody>
</table>

#### setCard()

> **setCard**(`card`: [`Card`](#card)): [`Grave`](#grave)

##### Parameters

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

[`Card`](#card)

</td>
<td>

The deleted [Card](#card) the grave marks, linked by ID. Sets the type accordingly.

</td>
</tr>
</tbody>
</table>

#### setNote()

> **setNote**(`note`: [`Note`](#note)): [`Grave`](#grave)

##### Parameters

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

`note`

</td>
<td>

[`Note`](#note)

</td>
<td>

The deleted [Note](#note) the grave marks, linked by ID. Sets the type accordingly.

</td>
</tr>
</tbody>
</table>

#### setDeck()

> **setDeck**(`deck`: [`Deck`](#deck)): [`Grave`](#grave)

##### Parameters

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

The deleted [Deck](#deck) the grave marks, linked by ID. Sets the type accordingly.

</td>
</tr>
</tbody>
</table>

#### getType()

> **getType**(): `"deck"` \| `"note"` \| `"card"`

#### setType()

> **setType**(`type`: `"deck"` \| `"note"` \| `"card"`): [`Grave`](#grave)

##### Parameters

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

`type`

</td>
<td>

`"deck"` \| `"note"` \| `"card"`

</td>
<td>

The kind of the deleted object: `card`, `note` or `deck`. Changing the
type resets the original ID, as it identifies a different kind of object.

</td>
</tr>
</tbody>
</table>

#### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

#### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Grave`](#grave)

##### Parameters

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

***

### Media

A media file (e.g. an image or audio) attached to the `.apkg` package, referenced
from the [Note](#note) contents by its filename.

#### Constructor

> **new Media**(`filename`: `string`, `file`: `Blob`): [`Media`](#media)

##### Parameters

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

The file contents as a `Blob`.

</td>
</tr>
</tbody>
</table>

#### getFilename()

> **getFilename**(): `string`

#### setFilename()

> **setFilename**(`filename`: `string`): [`Media`](#media)

##### Parameters

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
[Note](#note) contents reference media by this exact name, e.g. `<img src="photo.jpg">`
or `[sound:audio.mp3]`.

</td>
</tr>
</tbody>
</table>

#### getFile()

> **getFile**(): `Blob`

#### setFile()

> **setFile**(`file`: `Blob`): [`Media`](#media)

##### Parameters

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

`file`

</td>
<td>

`Blob`

</td>
<td>

The file contents as a `Blob`.

</td>
</tr>
</tbody>
</table>

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
