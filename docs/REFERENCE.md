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

Adds a media file to be used in the [Note](#note) contents.

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

The timestamp of the creation date in seconds. Anki uses it as the epoch for
scheduling day arithmetic — e.g. a review card's due value is the number of days since this timestamp.

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

The last schema modification time in milliseconds. If it differs between
the client and the server, a full sync is required.

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

The Anki schema version number (`11` for the legacy `anki2` format).

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

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

The last synchronisation time in milliseconds (`0` if the collection has never been synced).

</td>
</tr>
</tbody>
</table>

### getConfiguration()

> **getConfiguration**(): [`Configuration`](#configuration) \| `null`

### setConfiguration()

> **setConfiguration**(`configuration`: [`Configuration`](#configuration)): [`Collection`](#collection)

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

[`Configuration`](#configuration)

</td>
<td>

A collection [Configuration](#configuration). It is serialized into the
collection immediately, so mutations made afterwards require setting it again.

</td>
</tr>
</tbody>
</table>

### getModels()

> **getModels**(): [`Model`](#model)[]

### setModels()

> **setModels**(`models`: [`Model`](#model)[]): [`Collection`](#collection)

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

[`Model`](#model)[]

</td>
<td>

An array of [Model](#model)s replacing the current ones. Each model is
added via `addModel`, so duplicates are skipped.

</td>
</tr>
</tbody>
</table>

### addModel()

> **addModel**(`model`: [`Model`](#model)): [`Collection`](#collection)

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

[`Model`](#model)

</td>
<td>

A [Model](#model) to be added and serialized into the collection.
Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

### removeModel()

> **removeModel**(`model`: [`Model`](#model)): [`Collection`](#collection)

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

[`Model`](#model)

</td>
<td>

A [Model](#model) to be removed.

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

An array of [Deck](#deck)s replacing the current ones. Each deck is added
via `addDeck`, including all of its automatic wiring and registrations.

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

A [Deck](#deck) to be added. The deck is wired back to this collection, and
its [Model](#model), [DeckConfiguration](#deckconfiguration) and the models of its cards' notes are
registered automatically. Duplicates are skipped.

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

> **getDeckConfigurations**(): [`DeckConfiguration`](#deckconfiguration)[]

### setDeckConfigurations()

> **setDeckConfigurations**(`configs`: [`DeckConfiguration`](#deckconfiguration)[]): [`Collection`](#collection)

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

[`DeckConfiguration`](#deckconfiguration)[]

</td>
<td>

An array of [DeckConfiguration](#deckconfiguration)s replacing the current ones.
Each configuration is added via `addDeckConfiguration`, so duplicates are skipped.

</td>
</tr>
</tbody>
</table>

### addDeckConfiguration()

> **addDeckConfiguration**(`config`: [`DeckConfiguration`](#deckconfiguration)): [`Collection`](#collection)

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

[`DeckConfiguration`](#deckconfiguration)

</td>
<td>

A [DeckConfiguration](#deckconfiguration) to be added and serialized into the collection.
Duplicates are skipped.

</td>
</tr>
</tbody>
</table>

### removeDeckConfiguration()

> **removeDeckConfiguration**(`config`: [`DeckConfiguration`](#deckconfiguration)): [`Collection`](#collection)

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

[`DeckConfiguration`](#deckconfiguration)

</td>
<td>

A [DeckConfiguration](#deckconfiguration) to be removed.

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

The cache of all tags used in the collection.

</td>
</tr>
</tbody>
</table>

***

## Deck

A deck contained within a [Collection](#collection) made of [Card](#card)s.

### Constructor

> **new Deck**(`name`: `string`, `description?`: `string`): [`Deck`](#deck)

Creates a deck with a default [DeckConfiguration](#deckconfiguration) and [Model](#model) attached.

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

The deck ID (by default the time in milliseconds of when the deck was created).

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

The name of the deck. Use `::` to nest decks, e.g. `"Languages::Polish::Verbs"`.

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

The description of the deck, shown on its overview screen.

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

If `false` it renders the description with legacy HTML rendering.
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

The extended review card limit for a custom study session.

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

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

Whether the deck is collapsed in the main deck list.

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

Whether the deck is collapsed in the card browser's sidebar.

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
new cards seen today in this deck minus the number of new cards in custom study today.

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
review cards seen today in this deck minus the number of review cards in custom study today.

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
learning cards seen today in this deck minus the number of learning cards in custom study today.

</td>
</tr>
</tbody>
</table>

### getTimeToday()

> **getTimeToday**(): \[`number`, `number`\]

### setTimeToday()

> **setTimeToday**(`timeToday`: \[`number`, `number`\]): [`Deck`](#deck)

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

Whether the deck is dynamic (filtered) — a deck that temporarily gathers
cards from other decks based on a search.

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

The extended new card limit for a custom study session.

</td>
</tr>
</tbody>
</table>

### getConfiguration()

> **getConfiguration**(): [`DeckConfiguration`](#deckconfiguration) \| `null`

### setConfiguration()

> **setConfiguration**(`config`: [`DeckConfiguration`](#deckconfiguration)): [`Deck`](#deck)

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

### getModel()

> **getModel**(): [`Model`](#model) \| `null`

### setModel()

> **setModel**(`model`: [`Model`](#model)): [`Deck`](#deck)

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

The last modification time in seconds.

</td>
</tr>
</tbody>
</table>

### addCard()

> **addCard**(`card`: [`Card`](#card)): [`Deck`](#deck)

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

### removeCard()

> **removeCard**(`card`: [`Card`](#card)): [`Deck`](#deck)

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

[`Card`](#card)

</td>
<td>

A [Card](#card) to be removed and detached from this deck.

</td>
</tr>
</tbody>
</table>

### getCards()

> **getCards**(): [`Card`](#card)[]

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

## Card

A single flashcard generated from a [Note](#note), contained within a [Deck](#deck).

### Constructor

> **new Card**(...`fields`: `string`[]): [`Card`](#card)

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

### getId()

> **getId**(): `number`

### setId()

> **setId**(`id?`: `number`): [`Card`](#card)

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

### setNote()

> **setNote**(`note`: [`Note`](#note)): [`Card`](#card)

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

### getNote()

> **getNote**(): [`Note`](#note) \| `null`

### setDeck()

> **setDeck**(`deck`: [`Deck`](#deck) \| `null`): [`Card`](#card)

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

[`Deck`](#deck) \| `null`

</td>
<td>

A [Deck](#deck) the card belongs to or `null` to detach the card from its deck.

</td>
</tr>
</tbody>
</table>

### getDeck()

> **getDeck**(): [`Deck`](#deck) \| `null`

### getOrdinal()

> **getOrdinal**(): `number`

### setOrdinal()

> **setOrdinal**(`ordinal`: `number`): [`Card`](#card)

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

### getModificationTime()

> **getModificationTime**(): `number`

### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Card`](#card)

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

The last modification time in seconds.

</td>
</tr>
</tbody>
</table>

### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Card`](#card)

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

The update sequence number, used to find changes when
synchronising. `-1` indicates changes that have not been synced yet.

</td>
</tr>
</tbody>
</table>

### getType()

> **getType**(): `"new"` \| `"learning"` \| `"review"` \| `"relearning"`

### setType()

> **setType**(`type`: `"new"` \| `"learning"` \| `"review"` \| `"relearning"`): [`Card`](#card)

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

### getQueue()

> **getQueue**(): `"new"` \| `"suspended"` \| `"userBuried"` \| `"scheduleBuried"` \| `"learning"` \| `"review"` \| `"inLearning"` \| `"preview"`

### setQueue()

> **setQueue**(`queue`: `"new"` \| `"suspended"` \| `"userBuried"` \| `"scheduleBuried"` \| `"learning"` \| `"review"` \| `"inLearning"` \| `"preview"`): [`Card`](#card)

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

`queue`

</td>
<td>

`"new"` \| `"suspended"` \| `"userBuried"` \| `"scheduleBuried"` \| `"learning"` \| `"review"` \| `"inLearning"` \| `"preview"`

</td>
<td>

The scheduling queue the card is placed in: `new`, `learning`, `review`,
`inLearning`, `preview`, `suspended`, `userBuried` or `scheduleBuried`.
Keep it consistent with the `type` property.

</td>
</tr>
</tbody>
</table>

### getDue()

> **getDue**(): `number`

### setDue()

> **setDue**(`due`: `number`): [`Card`](#card)

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

### getInterval()

> **getInterval**(): `number`

### setInterval()

> **setInterval**(`interval`: `number`): [`Card`](#card)

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

### getFactor()

> **getFactor**(): `number`

### setFactor()

> **setFactor**(`factor`: `number`): [`Card`](#card)

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

### getNumberOfReviews()

> **getNumberOfReviews**(): `number`

### setNumberOfReviews()

> **setNumberOfReviews**(`numberOfReviews`: `number`): [`Card`](#card)

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

### getLapses()

> **getLapses**(): `number`

### setLapses()

> **setLapses**(`lapses`: `number`): [`Card`](#card)

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

### getLeft()

> **getLeft**(): `number`

### setLeft()

> **setLeft**(`left`: `number`): [`Card`](#card)

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

### getOriginalDue()

> **getOriginalDue**(): `number`

### setOriginalDue()

> **setOriginalDue**(`originalDue`: `number`): [`Card`](#card)

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

### getOriginalDeck()

> **getOriginalDeck**(): [`Deck`](#deck) \| `null`

### setOriginalDeck()

> **setOriginalDeck**(`deck`: [`Deck`](#deck) \| `null`): [`Card`](#card)

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

[`Deck`](#deck) \| `null`

</td>
<td>

The original [Deck](#deck) of the card before it was moved to a filtered deck
or `null` to clear it.

</td>
</tr>
</tbody>
</table>

### getFlags()

> **getFlags**(): `number`

### setFlags()

> **setFlags**(`flags`: `number`): [`Card`](#card)

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

### getData()

> **getData**(): `string`

### setData()

> **setData**(`data`: `string`): [`Card`](#card)

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

## Note

A data container holding field values, used to generate [Card](#card)s based on a [Model](#model).

### getId()

> **getId**(): `number`

### setId()

> **setId**(`id?`: `number`): [`Note`](#note)

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

`id?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getGuid()

> **getGuid**(): `string`

### setGuid()

> **setGuid**(`guid`: `string`): [`Note`](#note)

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

`guid`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

### getModel()

> **getModel**(): [`Model`](#model) \| `null`

### setModel()

> **setModel**(`model`: [`Model`](#model)): [`Note`](#note)

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

`model`

</td>
<td>

[`Model`](#model)

</td>
</tr>
</tbody>
</table>

### getModificationTime()

> **getModificationTime**(): `number`

### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Note`](#note)

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

`time`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Note`](#note)

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

`updateSequenceNumber`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getTags()

> **getTags**(): `string`[]

### setTags()

> **setTags**(`tags`: `string`[]): [`Note`](#note)

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

`tags`

</td>
<td>

`string`[]

</td>
</tr>
</tbody>
</table>

### getFields()

> **getFields**(): `string`[]

### setFields()

> **setFields**(`fields`: `string`[]): [`Note`](#note)

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

`fields`

</td>
<td>

`string`[]

</td>
</tr>
</tbody>
</table>

### getSortField()

> **getSortField**(): `number`

### setSortField()

> **setSortField**(`sort`: `number`): [`Note`](#note)

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

`sort`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getChecksum()

> **getChecksum**(): `number`

### setChecksum()

> **setChecksum**(`checksum`: `number`): [`Note`](#note)

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

`checksum`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

## Configuration

### getCurrentDeck()

> **getCurrentDeck**(): [`Deck`](#deck) \| `null`

### setCurrentDeck()

> **setCurrentDeck**(`deck`: [`Deck`](#deck)): [`Configuration`](#configuration)

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

`deck`

</td>
<td>

[`Deck`](#deck)

</td>
</tr>
</tbody>
</table>

### getActiveDecks()

> **getActiveDecks**(): [`Deck`](#deck)[]

### setActiveDecks()

> **setActiveDecks**(`decks`: [`Deck`](#deck)[]): [`Configuration`](#configuration)

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

`decks`

</td>
<td>

[`Deck`](#deck)[]

</td>
</tr>
</tbody>
</table>

### addActiveDeck()

> **addActiveDeck**(`deck`: [`Deck`](#deck)): [`Configuration`](#configuration)

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

`deck`

</td>
<td>

[`Deck`](#deck)

</td>
</tr>
</tbody>
</table>

### removeActiveDeck()

> **removeActiveDeck**(`deck`: [`Deck`](#deck)): [`Configuration`](#configuration)

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

`deck`

</td>
<td>

[`Deck`](#deck)

</td>
</tr>
</tbody>
</table>

### getNewSpread()

> **getNewSpread**(): `"newCardsDistribute"` \| `"newCardsLast"` \| `"newCardsFirst"` \| `null`

### setNewSpread()

> **setNewSpread**(`newSpread`: `"newCardsDistribute"` \| `"newCardsLast"` \| `"newCardsFirst"`): [`Configuration`](#configuration)

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

`newSpread`

</td>
<td>

`"newCardsDistribute"` \| `"newCardsLast"` \| `"newCardsFirst"`

</td>
</tr>
</tbody>
</table>

### getLearnAheadLimit()

> **getLearnAheadLimit**(): `number` \| `null`

### setLearnAheadLimit()

> **setLearnAheadLimit**(`collapseTime`: `number`): [`Configuration`](#configuration)

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

`collapseTime`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getTimeboxTimeLimit()

> **getTimeboxTimeLimit**(): `number` \| `null`

### setTimeboxTimeLimit()

> **setTimeboxTimeLimit**(`timeLim`: `number`): [`Configuration`](#configuration)

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

`timeLim`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getShowNextReviewTimeAboveAnswerButtons()

> **getShowNextReviewTimeAboveAnswerButtons**(): `boolean` \| `null`

### setShowNextReviewTimeAboveAnswerButtons()

> **setShowNextReviewTimeAboveAnswerButtons**(`estTimes`: `boolean`): [`Configuration`](#configuration)

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

`estTimes`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getShowRemainingCardCountDuringReview()

> **getShowRemainingCardCountDuringReview**(): `boolean` \| `null`

### setShowRemainingCardCountDuringReview()

> **setShowRemainingCardCountDuringReview**(`dueCounts`: `boolean`): [`Configuration`](#configuration)

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

`dueCounts`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getCurrentModel()

> **getCurrentModel**(): [`Model`](#model) \| `null`

### setCurrentModel()

> **setCurrentModel**(`model`: [`Model`](#model)): [`Configuration`](#configuration)

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

`model`

</td>
<td>

[`Model`](#model)

</td>
</tr>
</tbody>
</table>

### getNextPosition()

> **getNextPosition**(): `number` \| `null`

### setNextPosition()

> **setNextPosition**(`nextPos`: `number`): [`Configuration`](#configuration)

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

`nextPos`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getSortType()

> **getSortType**(): `string` \| `null`

### setSortType()

> **setSortType**(`sortType`: `string`): [`Configuration`](#configuration)

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

`sortType`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

### getSortBackwrds()

> **getSortBackwrds**(): `boolean` \| `null`

### setSortBackwrds()

> **setSortBackwrds**(`sortBackwards`: `boolean`): [`Configuration`](#configuration)

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

`sortBackwards`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getAddToCurrentDeck()

> **getAddToCurrentDeck**(): `boolean` \| `null`

### setAddToCurrentDeck()

> **setAddToCurrentDeck**(`addToCur`: `boolean`): [`Configuration`](#configuration)

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

`addToCur`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getShowLearningCardsWithLargerSteps()

> **getShowLearningCardsWithLargerSteps**(): `boolean` \| `null`

### setShowLearningCardsWithLargerSteps()

> **setShowLearningCardsWithLargerSteps**(`dayLearnFirst`: `boolean`): [`Configuration`](#configuration)

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

`dayLearnFirst`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getNewBury()

> **getNewBury**(): `boolean` \| `null`

### setNewBury()

> **setNewBury**(`newBury`: `boolean`): [`Configuration`](#configuration)

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

`newBury`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getLastUnburied()

> **getLastUnburied**(): `number` \| `null`

### setLastUnburied()

> **setLastUnburied**(`lastUnburied`: `number`): [`Configuration`](#configuration)

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

`lastUnburied`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getActiveColumns()

> **getActiveColumns**(): (`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[] \| `null`

### setActiveColumns()

> **setActiveColumns**(`columns`: (`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[]): [`Configuration`](#configuration)

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

`columns`

</td>
<td>

(`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[]

</td>
</tr>
</tbody>
</table>

### addActiveColumn()

> **addActiveColumn**(`column`: `"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`): [`Configuration`](#configuration)

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

`column`

</td>
<td>

`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`

</td>
</tr>
</tbody>
</table>

### removeActiveColumn()

> **removeActiveColumn**(`column`: `"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`): [`Configuration`](#configuration)

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

`column`

</td>
<td>

`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`

</td>
</tr>
</tbody>
</table>

### setValue()

> **setValue**(`attribute`: `string`, `value`: `any`): [`Configuration`](#configuration)

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

`attribute`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

### getValue()

> **getValue**(`attribute`: `string`): `any`

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

`attribute`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

## DeckConfiguration

### getId()

> **getId**(): `number`

### setId()

> **setId**(`id?`: `number`): [`DeckConfiguration`](#deckconfiguration)

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

`id?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getName()

> **getName**(): `string`

### setName()

> **setName**(`name`: `string`): [`DeckConfiguration`](#deckconfiguration)

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

`name`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

### getAutoplay()

> **getAutoplay**(): `boolean`

### setAutoplay()

> **setAutoplay**(`autoplay`: `boolean`): [`DeckConfiguration`](#deckconfiguration)

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

`autoplay`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getDynamic()

> **getDynamic**(): `boolean`

### setDynamic()

> **setDynamic**(`dynamic`: `boolean`): [`DeckConfiguration`](#deckconfiguration)

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

`dynamic`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getMaxTaken()

> **getMaxTaken**(): `number`

### setMaxTaken()

> **setMaxTaken**(`maxTaken`: `number`): [`DeckConfiguration`](#deckconfiguration)

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

`maxTaken`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getModificationTime()

> **getModificationTime**(): `number`

### setModificationTime()

> **setModificationTime**(`time`: `number`): [`DeckConfiguration`](#deckconfiguration)

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

`time`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getReplay()

> **getReplay**(): `boolean`

### setReplay()

> **setReplay**(`replay`: `boolean`): [`DeckConfiguration`](#deckconfiguration)

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

`replay`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getTimer()

> **getTimer**(): `boolean`

### setTimer()

> **setTimer**(`timer`: `boolean`): [`DeckConfiguration`](#deckconfiguration)

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

`timer`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`DeckConfiguration`](#deckconfiguration)

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

`updateSequenceNumber`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getLapseCardConfig()

> **getLapseCardConfig**(): `LapseCardConfig`

### setLapseCardConfig()

> **setLapseCardConfig**(`config`: `LapseCardConfig`): [`DeckConfiguration`](#deckconfiguration)

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

`config`

</td>
<td>

`LapseCardConfig`

</td>
</tr>
</tbody>
</table>

### getNewCardConfig()

> **getNewCardConfig**(): `NewCardConfig`

### setNewCardConfig()

> **setNewCardConfig**(`config`: `NewCardConfig`): [`DeckConfiguration`](#deckconfiguration)

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

`config`

</td>
<td>

`NewCardConfig`

</td>
</tr>
</tbody>
</table>

### getReviewCardConfig()

> **getReviewCardConfig**(): `ReviewCardConfig`

### setReviewCardConfig()

> **setReviewCardConfig**(`config`: `ReviewCardConfig`): [`DeckConfiguration`](#deckconfiguration)

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

`config`

</td>
<td>

`ReviewCardConfig`

</td>
</tr>
</tbody>
</table>

***

## Model

### getId()

> **getId**(): `number`

### setId()

> **setId**(`id?`: `number`): [`Model`](#model)

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

`id?`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getCss()

> **getCss**(): `string`

### setCss()

> **setCss**(`css`: `string`): [`Model`](#model)

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

`css`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

### getDeck()

> **getDeck**(): [`Deck`](#deck) \| `null`

### setDeck()

> **setDeck**(`deck`: [`Deck`](#deck)): [`Model`](#model)

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

`deck`

</td>
<td>

[`Deck`](#deck)

</td>
</tr>
</tbody>
</table>

### getFields()

> **getFields**(): `Field`[]

### setFields()

> **setFields**(`fields`: `Field`[]): [`Model`](#model)

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

`fields`

</td>
<td>

`Field`[]

</td>
</tr>
</tbody>
</table>

### addField()

> **addField**(`field`: `Field`): [`Model`](#model)

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

`field`

</td>
<td>

`Field`

</td>
</tr>
</tbody>
</table>

### removeField()

> **removeField**(`field`: `Field`): [`Model`](#model)

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

`field`

</td>
<td>

`Field`

</td>
</tr>
</tbody>
</table>

### getTemplates()

> **getTemplates**(): `CardTemplate`[]

### setTemplates()

> **setTemplates**(`templates`: `CardTemplate`[]): [`Model`](#model)

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

`templates`

</td>
<td>

`CardTemplate`[]

</td>
</tr>
</tbody>
</table>

### addTemplate()

> **addTemplate**(`template`: `CardTemplate`): [`Model`](#model)

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

`template`

</td>
<td>

`CardTemplate`

</td>
</tr>
</tbody>
</table>

### removeTemplate()

> **removeTemplate**(`template`: `CardTemplate`): [`Model`](#model)

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

`template`

</td>
<td>

`CardTemplate`

</td>
</tr>
</tbody>
</table>

### getLatexPreamble()

> **getLatexPreamble**(): `string`

### setLatexPreamble()

> **setLatexPreamble**(`preamble`: `string`): [`Model`](#model)

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

`preamble`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

### getLatexPostamble()

> **getLatexPostamble**(): `string`

### setLatexPostamble()

> **setLatexPostamble**(`postamble`: `string`): [`Model`](#model)

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

`postamble`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

### getModificationTime()

> **getModificationTime**(): `number`

### setModificationTime()

> **setModificationTime**(`time`: `number`): [`Model`](#model)

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

`time`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getName()

> **getName**(): `string`

### setName()

> **setName**(`name`: `string`): [`Model`](#model)

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

`name`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

### getSortField()

> **getSortField**(): `number`

### setSortField()

> **setSortField**(`sort`: `number`): [`Model`](#model)

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

`sort`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

### getType()

> **getType**(): `"standard"` \| `"cloze"`

### setType()

> **setType**(`type`: `"standard"` \| `"cloze"`): [`Model`](#model)

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

`type`

</td>
<td>

`"standard"` \| `"cloze"`

</td>
</tr>
</tbody>
</table>

### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`: `number`): [`Model`](#model)

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

`updateSequenceNumber`

</td>
<td>

`number`

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
