# apkg-browser-builder v1.0.0

## Classes

### Card

Defined in: [entity/card.ts:8](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L8)

#### Extends

- `Entity`\<`CardModel`\>

#### Constructors

##### Constructor

> **new Card**(...`fields`): [`Card`](#card)

Defined in: [entity/card.ts:36](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L36)

###### Parameters

###### fields

...`string`[]

###### Returns

[`Card`](#card)

###### Overrides

`Entity<CardModel>.constructor`

#### Methods

##### getDeck()

> **getDeck**(): [`Deck`](#deck) \| `null`

Defined in: [entity/card.ts:70](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L70)

###### Returns

[`Deck`](#deck) \| `null`

##### getDue()

> **getDue**(): `number`

Defined in: [entity/card.ts:124](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L124)

###### Returns

`number`

##### getEntity()

> **getEntity**(): `Card`

Defined in: [abstract/entity.ts:9](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/entity.ts#L9)

###### Returns

`Card`

###### Inherited from

`Entity.getEntity`

##### getFactor()

> **getFactor**(): `number`

Defined in: [entity/card.ts:144](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L144)

###### Returns

`number`

##### getFlags()

> **getFlags**(): `number`

Defined in: [entity/card.ts:205](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L205)

###### Returns

`number`

##### getId()

> **getId**(): `number`

Defined in: [entity/card.ts:42](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L42)

###### Returns

`number`

##### getInterval()

> **getInterval**(): `number`

Defined in: [entity/card.ts:134](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L134)

###### Returns

`number`

##### getLapses()

> **getLapses**(): `number`

Defined in: [entity/card.ts:164](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L164)

###### Returns

`number`

##### getLeft()

> **getLeft**(): `number`

Defined in: [entity/card.ts:174](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L174)

###### Returns

`number`

##### getModificationTime()

> **getModificationTime**(): `number`

Defined in: [entity/card.ts:84](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L84)

###### Returns

`number`

##### getNote()

> **getNote**(): [`Note`](#note) \| `null`

Defined in: [entity/card.ts:59](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L59)

###### Returns

[`Note`](#note) \| `null`

##### getNumberOfReviews()

> **getNumberOfReviews**(): `number`

Defined in: [entity/card.ts:154](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L154)

###### Returns

`number`

##### getOrdinal()

> **getOrdinal**(): `number`

Defined in: [entity/card.ts:74](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L74)

###### Returns

`number`

##### getOriginalDeck()

> **getOriginalDeck**(): [`Deck`](#deck) \| `null`

Defined in: [entity/card.ts:194](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L194)

###### Returns

[`Deck`](#deck) \| `null`

##### getOriginalDue()

> **getOriginalDue**(): `number`

Defined in: [entity/card.ts:184](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L184)

###### Returns

`number`

##### getQueue()

> **getQueue**(): `"new"` \| `"suspended"` \| `"userBuried"` \| `"scheduleBuried"` \| `"learning"` \| `"review"` \| `"inLearning"` \| `"preview"`

Defined in: [entity/card.ts:114](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L114)

###### Returns

`"new"` \| `"suspended"` \| `"userBuried"` \| `"scheduleBuried"` \| `"learning"` \| `"review"` \| `"inLearning"` \| `"preview"`

##### getTable()

> **getTable**(): `string`

Defined in: [abstract/entity.ts:5](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/entity.ts#L5)

###### Returns

`string`

###### Inherited from

`Entity.getTable`

##### getType()

> **getType**(): `"new"` \| `"learning"` \| `"review"` \| `"relearning"`

Defined in: [entity/card.ts:104](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L104)

###### Returns

`"new"` \| `"learning"` \| `"review"` \| `"relearning"`

##### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

Defined in: [entity/card.ts:94](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L94)

###### Returns

`number`

##### setDeck()

> **setDeck**(`deck`): [`Card`](#card)

Defined in: [entity/card.ts:63](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L63)

###### Parameters

###### deck

[`Deck`](#deck) \| `null`

###### Returns

[`Card`](#card)

##### setDue()

> **setDue**(`due`): [`Card`](#card)

Defined in: [entity/card.ts:128](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L128)

###### Parameters

###### due

`number`

###### Returns

[`Card`](#card)

##### setFactor()

> **setFactor**(`factor`): [`Card`](#card)

Defined in: [entity/card.ts:148](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L148)

###### Parameters

###### factor

`number`

###### Returns

[`Card`](#card)

##### setFlags()

> **setFlags**(`flags`): [`Card`](#card)

Defined in: [entity/card.ts:209](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L209)

###### Parameters

###### flags

`number`

###### Returns

[`Card`](#card)

##### setId()

> **setId**(`id?`): [`Card`](#card)

Defined in: [entity/card.ts:46](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L46)

###### Parameters

###### id?

`number`

###### Returns

[`Card`](#card)

##### setInterval()

> **setInterval**(`interval`): [`Card`](#card)

Defined in: [entity/card.ts:138](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L138)

###### Parameters

###### interval

`number`

###### Returns

[`Card`](#card)

##### setLapses()

> **setLapses**(`lapses`): [`Card`](#card)

Defined in: [entity/card.ts:168](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L168)

###### Parameters

###### lapses

`number`

###### Returns

[`Card`](#card)

##### setLeft()

> **setLeft**(`left`): [`Card`](#card)

Defined in: [entity/card.ts:178](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L178)

###### Parameters

###### left

`number`

###### Returns

[`Card`](#card)

##### setModificationTime()

> **setModificationTime**(`time`): [`Card`](#card)

Defined in: [entity/card.ts:88](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L88)

###### Parameters

###### time

`number`

###### Returns

[`Card`](#card)

##### setNote()

> **setNote**(`note`): [`Card`](#card)

Defined in: [entity/card.ts:52](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L52)

###### Parameters

###### note

[`Note`](#note)

###### Returns

[`Card`](#card)

##### setNumberOfReviews()

> **setNumberOfReviews**(`numberOfReviews`): [`Card`](#card)

Defined in: [entity/card.ts:158](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L158)

###### Parameters

###### numberOfReviews

`number`

###### Returns

[`Card`](#card)

##### setOrdinal()

> **setOrdinal**(`ordinal`): [`Card`](#card)

Defined in: [entity/card.ts:78](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L78)

###### Parameters

###### ordinal

`number`

###### Returns

[`Card`](#card)

##### setOriginalDeck()

> **setOriginalDeck**(`deck`): [`Card`](#card)

Defined in: [entity/card.ts:198](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L198)

###### Parameters

###### deck

[`Deck`](#deck)

###### Returns

[`Card`](#card)

##### setOriginalDue()

> **setOriginalDue**(`originalDue`): [`Card`](#card)

Defined in: [entity/card.ts:188](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L188)

###### Parameters

###### originalDue

`number`

###### Returns

[`Card`](#card)

##### setQueue()

> **setQueue**(`queue`): [`Card`](#card)

Defined in: [entity/card.ts:118](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L118)

###### Parameters

###### queue

`"new"` \| `"suspended"` \| `"userBuried"` \| `"scheduleBuried"` \| `"learning"` \| `"review"` \| `"inLearning"` \| `"preview"`

###### Returns

[`Card`](#card)

##### setType()

> **setType**(`type`): [`Card`](#card)

Defined in: [entity/card.ts:108](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L108)

###### Parameters

###### type

`"new"` \| `"learning"` \| `"review"` \| `"relearning"`

###### Returns

[`Card`](#card)

##### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`): [`Card`](#card)

Defined in: [entity/card.ts:98](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/card.ts#L98)

###### Parameters

###### updateSequenceNumber

`number`

###### Returns

[`Card`](#card)

***

### Collection

Defined in: [entity/collection.ts:12](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L12)

#### Extends

- `Entity`\<`CollectionModel`\>

#### Constructors

##### Constructor

> **new Collection**(): [`Collection`](#collection)

###### Returns

[`Collection`](#collection)

###### Inherited from

`Entity<CollectionModel>.constructor`

#### Methods

##### addDeck()

> **addDeck**(`deck`): [`Collection`](#collection)

Defined in: [entity/collection.ts:183](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L183)

###### Parameters

###### deck

[`Deck`](#deck)

###### Returns

[`Collection`](#collection)

##### addDeckConfiguration()

> **addDeckConfiguration**(`config`): [`Collection`](#collection)

Defined in: [entity/collection.ts:255](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L255)

###### Parameters

###### config

[`DeckConfiguration`](#deckconfiguration)

###### Returns

[`Collection`](#collection)

##### addModel()

> **addModel**(`model`): [`Collection`](#collection)

Defined in: [entity/collection.ts:139](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L139)

###### Parameters

###### model

[`Model`](#model)

###### Returns

[`Collection`](#collection)

##### getConfiguration()

> **getConfiguration**(): [`Configuration`](#configuration) \| `null`

Defined in: [entity/collection.ts:106](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L106)

###### Returns

[`Configuration`](#configuration) \| `null`

##### getCreationTime()

> **getCreationTime**(): `number`

Defined in: [entity/collection.ts:46](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L46)

###### Returns

`number`

##### getDeckConfigurations()

> **getDeckConfigurations**(): [`DeckConfiguration`](#deckconfiguration)[]

Defined in: [entity/collection.ts:230](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L230)

###### Returns

[`DeckConfiguration`](#deckconfiguration)[]

##### getDecks()

> **getDecks**(): [`Deck`](#deck)[]

Defined in: [entity/collection.ts:161](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L161)

###### Returns

[`Deck`](#deck)[]

##### getEntity()

> **getEntity**(): `Collection`

Defined in: [abstract/entity.ts:9](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/entity.ts#L9)

###### Returns

`Collection`

###### Inherited from

`Entity.getEntity`

##### getId()

> **getId**(): `number`

Defined in: [entity/collection.ts:36](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L36)

###### Returns

`number`

##### getLastSyncTime()

> **getLastSyncTime**(): `number`

Defined in: [entity/collection.ts:96](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L96)

###### Returns

`number`

##### getModels()

> **getModels**(): [`Model`](#model)[]

Defined in: [entity/collection.ts:117](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L117)

###### Returns

[`Model`](#model)[]

##### getModificationTime()

> **getModificationTime**(): `number`

Defined in: [entity/collection.ts:56](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L56)

###### Returns

`number`

##### getSchemaModificationTime()

> **getSchemaModificationTime**(): `number`

Defined in: [entity/collection.ts:66](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L66)

###### Returns

`number`

##### getTable()

> **getTable**(): `string`

Defined in: [abstract/entity.ts:5](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/entity.ts#L5)

###### Returns

`string`

###### Inherited from

`Entity.getTable`

##### getTags()

> **getTags**(): `string`[]

Defined in: [entity/collection.ts:275](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L275)

###### Returns

`string`[]

##### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

Defined in: [entity/collection.ts:86](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L86)

###### Returns

`number`

##### getVersion()

> **getVersion**(): `number`

Defined in: [entity/collection.ts:76](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L76)

###### Returns

`number`

##### removeDeck()

> **removeDeck**(`deck`): [`Collection`](#collection)

Defined in: [entity/collection.ts:219](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L219)

###### Parameters

###### deck

[`Deck`](#deck)

###### Returns

[`Collection`](#collection)

##### removeDeckConfiguration()

> **removeDeckConfiguration**(`config`): [`Collection`](#collection)

Defined in: [entity/collection.ts:263](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L263)

###### Parameters

###### config

[`DeckConfiguration`](#deckconfiguration)

###### Returns

[`Collection`](#collection)

##### removeModel()

> **removeModel**(`model`): [`Collection`](#collection)

Defined in: [entity/collection.ts:150](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L150)

###### Parameters

###### model

[`Model`](#model)

###### Returns

[`Collection`](#collection)

##### setConfiguration()

> **setConfiguration**(`configuration`): [`Collection`](#collection)

Defined in: [entity/collection.ts:110](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L110)

###### Parameters

###### configuration

[`Configuration`](#configuration)

###### Returns

[`Collection`](#collection)

##### setCreationTime()

> **setCreationTime**(`time`): [`Collection`](#collection)

Defined in: [entity/collection.ts:50](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L50)

###### Parameters

###### time

`number`

###### Returns

[`Collection`](#collection)

##### setDeckConfigurations()

> **setDeckConfigurations**(`configs`): [`Collection`](#collection)

Defined in: [entity/collection.ts:234](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L234)

###### Parameters

###### configs

[`DeckConfiguration`](#deckconfiguration)[]

###### Returns

[`Collection`](#collection)

##### setDecks()

> **setDecks**(`decks`): [`Collection`](#collection)

Defined in: [entity/collection.ts:165](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L165)

###### Parameters

###### decks

[`Deck`](#deck)[]

###### Returns

[`Collection`](#collection)

##### setId()

> **setId**(`id`): [`Collection`](#collection)

Defined in: [entity/collection.ts:40](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L40)

###### Parameters

###### id

`number`

###### Returns

[`Collection`](#collection)

##### setLastSyncTime()

> **setLastSyncTime**(`time`): [`Collection`](#collection)

Defined in: [entity/collection.ts:100](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L100)

###### Parameters

###### time

`number`

###### Returns

[`Collection`](#collection)

##### setModels()

> **setModels**(`models`): [`Collection`](#collection)

Defined in: [entity/collection.ts:121](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L121)

###### Parameters

###### models

[`Model`](#model)[]

###### Returns

[`Collection`](#collection)

##### setModificationTime()

> **setModificationTime**(`time`): [`Collection`](#collection)

Defined in: [entity/collection.ts:60](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L60)

###### Parameters

###### time

`number`

###### Returns

[`Collection`](#collection)

##### setSchemaModificationTime()

> **setSchemaModificationTime**(`time`): [`Collection`](#collection)

Defined in: [entity/collection.ts:70](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L70)

###### Parameters

###### time

`number`

###### Returns

[`Collection`](#collection)

##### setTags()

> **setTags**(`tags`): [`Collection`](#collection)

Defined in: [entity/collection.ts:279](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L279)

###### Parameters

###### tags

`string`[]

###### Returns

[`Collection`](#collection)

##### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`): [`Collection`](#collection)

Defined in: [entity/collection.ts:90](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L90)

###### Parameters

###### updateSequenceNumber

`number`

###### Returns

[`Collection`](#collection)

##### setVersion()

> **setVersion**(`version`): [`Collection`](#collection)

Defined in: [entity/collection.ts:80](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/collection.ts#L80)

###### Parameters

###### version

`number`

###### Returns

[`Collection`](#collection)

***

### Configuration

Defined in: [object/configuration.ts:8](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L8)

#### Extends

- `Object`\<`ConfigurationObject`\>

#### Constructors

##### Constructor

> **new Configuration**(): [`Configuration`](#configuration)

###### Returns

[`Configuration`](#configuration)

###### Inherited from

`Object<ConfigurationObject>.constructor`

#### Methods

##### addActiveColumn()

> **addActiveColumn**(`column`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:208](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L208)

###### Parameters

###### column

`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`

###### Returns

[`Configuration`](#configuration)

##### addActiveDeck()

> **addActiveDeck**(`deck`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:37](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L37)

###### Parameters

###### deck

[`Deck`](#deck)

###### Returns

[`Configuration`](#configuration)

##### getActiveColumns()

> **getActiveColumns**(): (`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[] \| `null`

Defined in: [object/configuration.ts:198](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L198)

###### Returns

(`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[] \| `null`

##### getActiveDecks()

> **getActiveDecks**(): [`Deck`](#deck)[]

Defined in: [object/configuration.ts:26](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L26)

###### Returns

[`Deck`](#deck)[]

##### getAddToCurrentDeck()

> **getAddToCurrentDeck**(): `boolean` \| `null`

Defined in: [object/configuration.ts:158](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L158)

###### Returns

`boolean` \| `null`

##### getCurrentDeck()

> **getCurrentDeck**(): [`Deck`](#deck) \| `null`

Defined in: [object/configuration.ts:15](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L15)

###### Returns

[`Deck`](#deck) \| `null`

##### getCurrentModel()

> **getCurrentModel**(): [`Model`](#model) \| `null`

Defined in: [object/configuration.ts:117](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L117)

###### Returns

[`Model`](#model) \| `null`

##### getLastUnburied()

> **getLastUnburied**(): `number` \| `null`

Defined in: [object/configuration.ts:188](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L188)

###### Returns

`number` \| `null`

##### getLearnAheadLimit()

> **getLearnAheadLimit**(): `number` \| `null`

Defined in: [object/configuration.ts:77](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L77)

###### Returns

`number` \| `null`

##### getNewBury()

> **getNewBury**(): `boolean` \| `null`

Defined in: [object/configuration.ts:178](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L178)

###### Returns

`boolean` \| `null`

##### getNewSpread()

> **getNewSpread**(): `"newCardsDistribute"` \| `"newCardsLast"` \| `"newCardsFirst"` \| `null`

Defined in: [object/configuration.ts:63](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L63)

###### Returns

`"newCardsDistribute"` \| `"newCardsLast"` \| `"newCardsFirst"` \| `null`

##### getNextPosition()

> **getNextPosition**(): `number` \| `null`

Defined in: [object/configuration.ts:128](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L128)

###### Returns

`number` \| `null`

##### getObject()

> **getObject**(): `Configuration`

Defined in: [abstract/object.ts:4](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/object.ts#L4)

###### Returns

`Configuration`

###### Inherited from

`Object.getObject`

##### getShowLearningCardsWithLargerSteps()

> **getShowLearningCardsWithLargerSteps**(): `boolean` \| `null`

Defined in: [object/configuration.ts:168](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L168)

###### Returns

`boolean` \| `null`

##### getShowNextReviewTimeAboveAnswerButtons()

> **getShowNextReviewTimeAboveAnswerButtons**(): `boolean` \| `null`

Defined in: [object/configuration.ts:97](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L97)

###### Returns

`boolean` \| `null`

##### getShowRemainingCardCountDuringReview()

> **getShowRemainingCardCountDuringReview**(): `boolean` \| `null`

Defined in: [object/configuration.ts:107](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L107)

###### Returns

`boolean` \| `null`

##### getSortBackwrds()

> **getSortBackwrds**(): `boolean` \| `null`

Defined in: [object/configuration.ts:148](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L148)

###### Returns

`boolean` \| `null`

##### getSortType()

> **getSortType**(): `string` \| `null`

Defined in: [object/configuration.ts:138](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L138)

###### Returns

`string` \| `null`

##### getTimeboxTimeLimit()

> **getTimeboxTimeLimit**(): `number` \| `null`

Defined in: [object/configuration.ts:87](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L87)

###### Returns

`number` \| `null`

##### getValue()

> **getValue**(`attribute`): `any`

Defined in: [object/configuration.ts:238](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L238)

###### Parameters

###### attribute

`string`

###### Returns

`any`

##### removeActiveColumn()

> **removeActiveColumn**(`column`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:218](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L218)

###### Parameters

###### column

`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`

###### Returns

[`Configuration`](#configuration)

##### removeActiveDeck()

> **removeActiveDeck**(`deck`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:44](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L44)

###### Parameters

###### deck

[`Deck`](#deck)

###### Returns

[`Configuration`](#configuration)

##### setActiveColumns()

> **setActiveColumns**(`columns`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:202](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L202)

###### Parameters

###### columns

(`"answer"` \| `"template"` \| `"question"` \| `"deck"` \| `"noteFld"` \| `"noteCrt"` \| `"noteMod"` \| `"cardMod"` \| `"cardDue"` \| `"cardIvl"` \| `"cardEase"` \| `"cardReps"` \| `"cardLapses"` \| `"noteTags"` \| `"note"`)[]

###### Returns

[`Configuration`](#configuration)

##### setActiveDecks()

> **setActiveDecks**(`decks`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:30](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L30)

###### Parameters

###### decks

[`Deck`](#deck)[]

###### Returns

[`Configuration`](#configuration)

##### setAddToCurrentDeck()

> **setAddToCurrentDeck**(`addToCur`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:162](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L162)

###### Parameters

###### addToCur

`boolean`

###### Returns

[`Configuration`](#configuration)

##### setCurrentDeck()

> **setCurrentDeck**(`deck`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:19](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L19)

###### Parameters

###### deck

[`Deck`](#deck)

###### Returns

[`Configuration`](#configuration)

##### setCurrentModel()

> **setCurrentModel**(`model`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:121](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L121)

###### Parameters

###### model

[`Model`](#model)

###### Returns

[`Configuration`](#configuration)

##### setLastUnburied()

> **setLastUnburied**(`lastUnburied`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:192](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L192)

###### Parameters

###### lastUnburied

`number`

###### Returns

[`Configuration`](#configuration)

##### setLearnAheadLimit()

> **setLearnAheadLimit**(`collapseTime`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:81](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L81)

###### Parameters

###### collapseTime

`number`

###### Returns

[`Configuration`](#configuration)

##### setNewBury()

> **setNewBury**(`newBury`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:182](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L182)

###### Parameters

###### newBury

`boolean`

###### Returns

[`Configuration`](#configuration)

##### setNewSpread()

> **setNewSpread**(`newSpread`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:71](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L71)

###### Parameters

###### newSpread

`"newCardsDistribute"` \| `"newCardsLast"` \| `"newCardsFirst"`

###### Returns

[`Configuration`](#configuration)

##### setNextPosition()

> **setNextPosition**(`nextPos`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:132](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L132)

###### Parameters

###### nextPos

`number`

###### Returns

[`Configuration`](#configuration)

##### setShowLearningCardsWithLargerSteps()

> **setShowLearningCardsWithLargerSteps**(`dayLearnFirst`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:172](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L172)

###### Parameters

###### dayLearnFirst

`boolean`

###### Returns

[`Configuration`](#configuration)

##### setShowNextReviewTimeAboveAnswerButtons()

> **setShowNextReviewTimeAboveAnswerButtons**(`estTimes`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:101](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L101)

###### Parameters

###### estTimes

`boolean`

###### Returns

[`Configuration`](#configuration)

##### setShowRemainingCardCountDuringReview()

> **setShowRemainingCardCountDuringReview**(`dueCounts`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:111](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L111)

###### Parameters

###### dueCounts

`boolean`

###### Returns

[`Configuration`](#configuration)

##### setSortBackwrds()

> **setSortBackwrds**(`sortBackwards`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:152](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L152)

###### Parameters

###### sortBackwards

`boolean`

###### Returns

[`Configuration`](#configuration)

##### setSortType()

> **setSortType**(`sortType`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:142](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L142)

###### Parameters

###### sortType

`string`

###### Returns

[`Configuration`](#configuration)

##### setTimeboxTimeLimit()

> **setTimeboxTimeLimit**(`timeLim`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:91](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L91)

###### Parameters

###### timeLim

`number`

###### Returns

[`Configuration`](#configuration)

##### setValue()

> **setValue**(`attribute`, `value`): [`Configuration`](#configuration)

Defined in: [object/configuration.ts:232](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/configuration.ts#L232)

###### Parameters

###### attribute

`string`

###### value

`any`

###### Returns

[`Configuration`](#configuration)

***

### Deck

Defined in: [object/deck.ts:8](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L8)

#### Extends

- `Object`\<`DeckObject`\>

#### Constructors

##### Constructor

> **new Deck**(`name`, `description?`): [`Deck`](#deck)

Defined in: [object/deck.ts:33](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L33)

###### Parameters

###### name

`string`

###### description?

`string`

###### Returns

[`Deck`](#deck)

###### Overrides

`Object<DeckObject>.constructor`

#### Methods

##### addCard()

> **addCard**(`card`): [`Deck`](#deck)

Defined in: [object/deck.ts:217](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L217)

###### Parameters

###### card

[`Card`](#card)

###### Returns

[`Deck`](#deck)

##### getBrowserCollapsed()

> **getBrowserCollapsed**(): `boolean`

Defined in: [object/deck.ts:117](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L117)

###### Returns

`boolean`

##### getCards()

> **getCards**(): [`Card`](#card)[]

Defined in: [object/deck.ts:255](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L255)

###### Returns

[`Card`](#card)[]

##### getCollapsed()

> **getCollapsed**(): `boolean`

Defined in: [object/deck.ts:107](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L107)

###### Returns

`boolean`

##### getCollection()

> **getCollection**(): [`Collection`](#collection) \| `null`

Defined in: [object/deck.ts:259](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L259)

###### Returns

[`Collection`](#collection) \| `null`

##### getConfiguration()

> **getConfiguration**(): [`DeckConfiguration`](#deckconfiguration) \| `null`

Defined in: [object/deck.ts:177](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L177)

###### Returns

[`DeckConfiguration`](#deckconfiguration) \| `null`

##### getDescription()

> **getDescription**(): `string`

Defined in: [object/deck.ts:67](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L67)

###### Returns

`string`

##### getDynamic()

> **getDynamic**(): `boolean`

Defined in: [object/deck.ts:157](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L157)

###### Returns

`boolean`

##### getExtendedNewCardLimit()

> **getExtendedNewCardLimit**(): `number` \| `null`

Defined in: [object/deck.ts:167](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L167)

###### Returns

`number` \| `null`

##### getExtendedReviewCardLimit()

> **getExtendedReviewCardLimit**(): `number` \| `null`

Defined in: [object/deck.ts:87](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L87)

###### Returns

`number` \| `null`

##### getId()

> **getId**(): `number`

Defined in: [object/deck.ts:47](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L47)

###### Returns

`number`

##### getLearningToday()

> **getLearningToday**(): \[`number`, `number`\]

Defined in: [object/deck.ts:147](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L147)

###### Returns

\[`number`, `number`\]

##### getMarkdownDescription()

> **getMarkdownDescription**(): `boolean`

Defined in: [object/deck.ts:77](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L77)

###### Returns

`boolean`

##### getModel()

> **getModel**(): [`Model`](#model) \| `null`

Defined in: [object/deck.ts:192](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L192)

###### Returns

[`Model`](#model) \| `null`

##### getModificationTime()

> **getModificationTime**(): `number`

Defined in: [object/deck.ts:207](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L207)

###### Returns

`number`

##### getName()

> **getName**(): `string`

Defined in: [object/deck.ts:57](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L57)

###### Returns

`string`

##### getNewToday()

> **getNewToday**(): \[`number`, `number`\]

Defined in: [object/deck.ts:127](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L127)

###### Returns

\[`number`, `number`\]

##### getObject()

> **getObject**(): `Deck`

Defined in: [abstract/object.ts:4](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/object.ts#L4)

###### Returns

`Deck`

###### Inherited from

`Object.getObject`

##### getReviewToday()

> **getReviewToday**(): \[`number`, `number`\]

Defined in: [object/deck.ts:137](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L137)

###### Returns

\[`number`, `number`\]

##### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

Defined in: [object/deck.ts:97](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L97)

###### Returns

`number`

##### removeCard()

> **removeCard**(`card`): [`Deck`](#deck)

Defined in: [object/deck.ts:243](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L243)

###### Parameters

###### card

[`Card`](#card)

###### Returns

[`Deck`](#deck)

##### setBrowserCollapsed()

> **setBrowserCollapsed**(`collapsed`): [`Deck`](#deck)

Defined in: [object/deck.ts:121](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L121)

###### Parameters

###### collapsed

`boolean`

###### Returns

[`Deck`](#deck)

##### setCollapsed()

> **setCollapsed**(`collapsed`): [`Deck`](#deck)

Defined in: [object/deck.ts:111](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L111)

###### Parameters

###### collapsed

`boolean`

###### Returns

[`Deck`](#deck)

##### setCollection()

> **setCollection**(`collection`): [`Deck`](#deck)

Defined in: [object/deck.ts:263](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L263)

###### Parameters

###### collection

[`Collection`](#collection)

###### Returns

[`Deck`](#deck)

##### setConfiguration()

> **setConfiguration**(`config`): [`Deck`](#deck)

Defined in: [object/deck.ts:181](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L181)

###### Parameters

###### config

[`DeckConfiguration`](#deckconfiguration)

###### Returns

[`Deck`](#deck)

##### setDescription()

> **setDescription**(`description`): [`Deck`](#deck)

Defined in: [object/deck.ts:71](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L71)

###### Parameters

###### description

`string`

###### Returns

[`Deck`](#deck)

##### setDynamic()

> **setDynamic**(`dynamic`): [`Deck`](#deck)

Defined in: [object/deck.ts:161](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L161)

###### Parameters

###### dynamic

`boolean`

###### Returns

[`Deck`](#deck)

##### setExtendedNewCardLimit()

> **setExtendedNewCardLimit**(`extendNew`): [`Deck`](#deck)

Defined in: [object/deck.ts:171](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L171)

###### Parameters

###### extendNew

`number` \| `null`

###### Returns

[`Deck`](#deck)

##### setExtendedReviewCardLimit()

> **setExtendedReviewCardLimit**(`extendRev`): [`Deck`](#deck)

Defined in: [object/deck.ts:91](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L91)

###### Parameters

###### extendRev

`number` \| `null`

###### Returns

[`Deck`](#deck)

##### setId()

> **setId**(`id?`): [`Deck`](#deck)

Defined in: [object/deck.ts:51](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L51)

###### Parameters

###### id?

`number`

###### Returns

[`Deck`](#deck)

##### setLearningToday()

> **setLearningToday**(`lrnToday`): [`Deck`](#deck)

Defined in: [object/deck.ts:151](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L151)

###### Parameters

###### lrnToday

\[`number`, `number`\]

###### Returns

[`Deck`](#deck)

##### setMarkdownDescription()

> **setMarkdownDescription**(`description`): [`Deck`](#deck)

Defined in: [object/deck.ts:81](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L81)

###### Parameters

###### description

`boolean`

###### Returns

[`Deck`](#deck)

##### setModel()

> **setModel**(`model`): [`Deck`](#deck)

Defined in: [object/deck.ts:196](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L196)

###### Parameters

###### model

[`Model`](#model)

###### Returns

[`Deck`](#deck)

##### setModificationTime()

> **setModificationTime**(`time`): [`Deck`](#deck)

Defined in: [object/deck.ts:211](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L211)

###### Parameters

###### time

`number`

###### Returns

[`Deck`](#deck)

##### setName()

> **setName**(`name`): [`Deck`](#deck)

Defined in: [object/deck.ts:61](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L61)

###### Parameters

###### name

`string`

###### Returns

[`Deck`](#deck)

##### setNewToday()

> **setNewToday**(`newToday`): [`Deck`](#deck)

Defined in: [object/deck.ts:131](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L131)

###### Parameters

###### newToday

\[`number`, `number`\]

###### Returns

[`Deck`](#deck)

##### setReviewToday()

> **setReviewToday**(`revToday`): [`Deck`](#deck)

Defined in: [object/deck.ts:141](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L141)

###### Parameters

###### revToday

\[`number`, `number`\]

###### Returns

[`Deck`](#deck)

##### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`): [`Deck`](#deck)

Defined in: [object/deck.ts:101](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck.ts#L101)

###### Parameters

###### updateSequenceNumber

`number`

###### Returns

[`Deck`](#deck)

***

### DeckConfiguration

Defined in: [object/deck-config.ts:8](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L8)

#### Extends

- `Object`\<`DeckConfigurationObject`\>

#### Constructors

##### Constructor

> **new DeckConfiguration**(`name?`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:28](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L28)

###### Parameters

###### name?

`string`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

###### Overrides

`Object<DeckConfigurationObject>.constructor`

#### Methods

##### getAutoplay()

> **getAutoplay**(): `boolean`

Defined in: [object/deck-config.ts:58](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L58)

###### Returns

`boolean`

##### getDynamic()

> **getDynamic**(): `boolean`

Defined in: [object/deck-config.ts:68](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L68)

###### Returns

`boolean`

##### getId()

> **getId**(): `number`

Defined in: [object/deck-config.ts:38](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L38)

###### Returns

`number`

##### getLapseCardConfig()

> **getLapseCardConfig**(): `LapseCardConfig`

Defined in: [object/deck-config.ts:128](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L128)

###### Returns

`LapseCardConfig`

##### getMaxTaken()

> **getMaxTaken**(): `number`

Defined in: [object/deck-config.ts:78](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L78)

###### Returns

`number`

##### getModificationTime()

> **getModificationTime**(): `number`

Defined in: [object/deck-config.ts:88](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L88)

###### Returns

`number`

##### getName()

> **getName**(): `string`

Defined in: [object/deck-config.ts:48](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L48)

###### Returns

`string`

##### getNewCardConfig()

> **getNewCardConfig**(): `NewCardConfig`

Defined in: [object/deck-config.ts:139](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L139)

###### Returns

`NewCardConfig`

##### getObject()

> **getObject**(): `DeckConfiguration`

Defined in: [abstract/object.ts:4](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/object.ts#L4)

###### Returns

`DeckConfiguration`

###### Inherited from

`Object.getObject`

##### getReplay()

> **getReplay**(): `boolean`

Defined in: [object/deck-config.ts:98](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L98)

###### Returns

`boolean`

##### getReviewCardConfig()

> **getReviewCardConfig**(): `ReviewCardConfig`

Defined in: [object/deck-config.ts:150](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L150)

###### Returns

`ReviewCardConfig`

##### getTimer()

> **getTimer**(): `boolean`

Defined in: [object/deck-config.ts:108](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L108)

###### Returns

`boolean`

##### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

Defined in: [object/deck-config.ts:118](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L118)

###### Returns

`number`

##### setAutoplay()

> **setAutoplay**(`autoplay`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:62](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L62)

###### Parameters

###### autoplay

`boolean`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setDynamic()

> **setDynamic**(`dynamic`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:72](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L72)

###### Parameters

###### dynamic

`boolean`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setId()

> **setId**(`id?`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:42](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L42)

###### Parameters

###### id?

`number`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setLapseCardConfig()

> **setLapseCardConfig**(`config`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:132](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L132)

###### Parameters

###### config

`LapseCardConfig`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setMaxTaken()

> **setMaxTaken**(`maxTaken`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:82](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L82)

###### Parameters

###### maxTaken

`number`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setModificationTime()

> **setModificationTime**(`time`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:92](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L92)

###### Parameters

###### time

`number`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setName()

> **setName**(`name`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:52](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L52)

###### Parameters

###### name

`string`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setNewCardConfig()

> **setNewCardConfig**(`config`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:143](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L143)

###### Parameters

###### config

`NewCardConfig`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setReplay()

> **setReplay**(`replay`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:102](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L102)

###### Parameters

###### replay

`boolean`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setReviewCardConfig()

> **setReviewCardConfig**(`config`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:154](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L154)

###### Parameters

###### config

`ReviewCardConfig`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setTimer()

> **setTimer**(`timer`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:112](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L112)

###### Parameters

###### timer

`boolean`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

##### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`): [`DeckConfiguration`](#deckconfiguration)

Defined in: [object/deck-config.ts:122](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/deck-config.ts#L122)

###### Parameters

###### updateSequenceNumber

`number`

###### Returns

[`DeckConfiguration`](#deckconfiguration)

***

### default

Defined in: [index.ts:14](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L14)

#### Constructors

##### Constructor

> **new default**(`collection?`, `config?`): [`default`](#default)

Defined in: [index.ts:19](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L19)

###### Parameters

###### collection?

[`Collection`](#collection)

###### config?

`Partial`\<\{ `sqljs`: `SqlJsConfig`; \}\>

###### Returns

[`default`](#default)

#### Methods

##### addMedia()

> **addMedia**(`filename`, `file`): [`default`](#default)

Defined in: [index.ts:55](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L55)

###### Parameters

###### filename

`string`

###### file

`Blob`

###### Returns

[`default`](#default)

##### build()

> **build**(): `Promise`\<`Blob`\>

Defined in: [index.ts:67](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L67)

###### Returns

`Promise`\<`Blob`\>

##### getCollection()

> **getCollection**(): [`Collection`](#collection)

Defined in: [index.ts:25](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L25)

###### Returns

[`Collection`](#collection)

##### getMedia()

> **getMedia**(): [`Media`](#media)[]

Defined in: [index.ts:63](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L63)

###### Returns

[`Media`](#media)[]

##### save()

> **save**(`filename`): `Promise`\<`void`\>

Defined in: [index.ts:103](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L103)

###### Parameters

###### filename

`string`

###### Returns

`Promise`\<`void`\>

##### setCollection()

> **setCollection**(`collection`): [`default`](#default)

Defined in: [index.ts:29](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L29)

###### Parameters

###### collection

[`Collection`](#collection)

###### Returns

[`default`](#default)

***

### Media

Defined in: [service/media.ts:1](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/service/media.ts#L1)

#### Constructors

##### Constructor

> **new Media**(`filename`, `file`): [`Media`](#media)

Defined in: [service/media.ts:5](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/service/media.ts#L5)

###### Parameters

###### filename

`string`

###### file

`Blob`

###### Returns

[`Media`](#media)

#### Methods

##### getFile()

> **getFile**(): `Blob`

Defined in: [service/media.ts:20](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/service/media.ts#L20)

###### Returns

`Blob`

##### getFilename()

> **getFilename**(): `string`

Defined in: [service/media.ts:10](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/service/media.ts#L10)

###### Returns

`string`

##### setFile()

> **setFile**(`file`): [`Media`](#media)

Defined in: [service/media.ts:24](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/service/media.ts#L24)

###### Parameters

###### file

`Blob`

###### Returns

[`Media`](#media)

##### setFilename()

> **setFilename**(`filename`): [`Media`](#media)

Defined in: [service/media.ts:14](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/service/media.ts#L14)

###### Parameters

###### filename

`string`

###### Returns

[`Media`](#media)

***

### Model

Defined in: [object/model.ts:9](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L9)

#### Extends

- `Object`\<`ModelObject`\>

#### Constructors

##### Constructor

> **new Model**(`name?`): [`Model`](#model)

Defined in: [object/model.ts:34](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L34)

###### Parameters

###### name?

`string`

###### Returns

[`Model`](#model)

###### Overrides

`Object<ModelObject>.constructor`

#### Methods

##### addField()

> **addField**(`field`): [`Model`](#model)

Defined in: [object/model.ts:107](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L107)

###### Parameters

###### field

`Field`

###### Returns

[`Model`](#model)

##### addTemplate()

> **addTemplate**(`template`): [`Model`](#model)

Defined in: [object/model.ts:145](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L145)

###### Parameters

###### template

`CardTemplate`

###### Returns

[`Model`](#model)

##### getCss()

> **getCss**(): `string`

Defined in: [object/model.ts:65](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L65)

###### Returns

`string`

##### getDeck()

> **getDeck**(): [`Deck`](#deck) \| `null`

Defined in: [object/model.ts:75](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L75)

###### Returns

[`Deck`](#deck) \| `null`

##### getFields()

> **getFields**(): `Field`[]

Defined in: [object/model.ts:86](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L86)

###### Returns

`Field`[]

##### getId()

> **getId**(): `number`

Defined in: [object/model.ts:55](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L55)

###### Returns

`number`

##### getLatexPostamble()

> **getLatexPostamble**(): `string`

Defined in: [object/model.ts:173](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L173)

###### Returns

`string`

##### getLatexPreamble()

> **getLatexPreamble**(): `string`

Defined in: [object/model.ts:163](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L163)

###### Returns

`string`

##### getModificationTime()

> **getModificationTime**(): `number`

Defined in: [object/model.ts:183](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L183)

###### Returns

`number`

##### getName()

> **getName**(): `string`

Defined in: [object/model.ts:193](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L193)

###### Returns

`string`

##### getObject()

> **getObject**(): `Model`

Defined in: [abstract/object.ts:4](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/object.ts#L4)

###### Returns

`Model`

###### Inherited from

`Object.getObject`

##### getSortField()

> **getSortField**(): `number`

Defined in: [object/model.ts:203](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L203)

###### Returns

`number`

##### getTemplates()

> **getTemplates**(): `CardTemplate`[]

Defined in: [object/model.ts:125](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L125)

###### Returns

`CardTemplate`[]

##### getType()

> **getType**(): `"standard"` \| `"cloze"`

Defined in: [object/model.ts:213](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L213)

###### Returns

`"standard"` \| `"cloze"`

##### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

Defined in: [object/model.ts:223](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L223)

###### Returns

`number`

##### removeField()

> **removeField**(`field`): [`Model`](#model)

Defined in: [object/model.ts:114](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L114)

###### Parameters

###### field

`Field`

###### Returns

[`Model`](#model)

##### removeTemplate()

> **removeTemplate**(`template`): [`Model`](#model)

Defined in: [object/model.ts:152](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L152)

###### Parameters

###### template

`CardTemplate`

###### Returns

[`Model`](#model)

##### setCss()

> **setCss**(`css`): [`Model`](#model)

Defined in: [object/model.ts:69](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L69)

###### Parameters

###### css

`string`

###### Returns

[`Model`](#model)

##### setDeck()

> **setDeck**(`deck`): [`Model`](#model)

Defined in: [object/model.ts:79](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L79)

###### Parameters

###### deck

[`Deck`](#deck)

###### Returns

[`Model`](#model)

##### setFields()

> **setFields**(`fields`): [`Model`](#model)

Defined in: [object/model.ts:90](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L90)

###### Parameters

###### fields

`Field`[]

###### Returns

[`Model`](#model)

##### setId()

> **setId**(`id?`): [`Model`](#model)

Defined in: [object/model.ts:59](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L59)

###### Parameters

###### id?

`number`

###### Returns

[`Model`](#model)

##### setLatexPostamble()

> **setLatexPostamble**(`postamble`): [`Model`](#model)

Defined in: [object/model.ts:177](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L177)

###### Parameters

###### postamble

`string`

###### Returns

[`Model`](#model)

##### setLatexPreamble()

> **setLatexPreamble**(`preamble`): [`Model`](#model)

Defined in: [object/model.ts:167](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L167)

###### Parameters

###### preamble

`string`

###### Returns

[`Model`](#model)

##### setModificationTime()

> **setModificationTime**(`time`): [`Model`](#model)

Defined in: [object/model.ts:187](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L187)

###### Parameters

###### time

`number`

###### Returns

[`Model`](#model)

##### setName()

> **setName**(`name`): [`Model`](#model)

Defined in: [object/model.ts:197](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L197)

###### Parameters

###### name

`string`

###### Returns

[`Model`](#model)

##### setSortField()

> **setSortField**(`sort`): [`Model`](#model)

Defined in: [object/model.ts:207](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L207)

###### Parameters

###### sort

`number`

###### Returns

[`Model`](#model)

##### setTemplates()

> **setTemplates**(`templates`): [`Model`](#model)

Defined in: [object/model.ts:129](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L129)

###### Parameters

###### templates

`CardTemplate`[]

###### Returns

[`Model`](#model)

##### setType()

> **setType**(`type`): [`Model`](#model)

Defined in: [object/model.ts:217](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L217)

###### Parameters

###### type

`"standard"` \| `"cloze"`

###### Returns

[`Model`](#model)

##### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`): [`Model`](#model)

Defined in: [object/model.ts:227](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/object/model.ts#L227)

###### Parameters

###### updateSequenceNumber

`number`

###### Returns

[`Model`](#model)

***

### Note

Defined in: [entity/note.ts:6](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L6)

#### Extends

- `Entity`\<`NoteModel`\>

#### Constructors

##### Constructor

> **new Note**(...`fields`): [`Note`](#note)

Defined in: [entity/note.ts:25](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L25)

###### Parameters

###### fields

...`string`[]

###### Returns

[`Note`](#note)

###### Overrides

`Entity<NoteModel>.constructor`

#### Methods

##### getChecksum()

> **getChecksum**(): `number`

Defined in: [entity/note.ts:113](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L113)

###### Returns

`number`

##### getEntity()

> **getEntity**(): `Note`

Defined in: [abstract/entity.ts:9](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/entity.ts#L9)

###### Returns

`Note`

###### Inherited from

`Entity.getEntity`

##### getFields()

> **getFields**(): `string`[]

Defined in: [entity/note.ts:93](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L93)

###### Returns

`string`[]

##### getGuid()

> **getGuid**(): `string`

Defined in: [entity/note.ts:42](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L42)

###### Returns

`string`

##### getId()

> **getId**(): `number`

Defined in: [entity/note.ts:32](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L32)

###### Returns

`number`

##### getModel()

> **getModel**(): [`Model`](#model) \| `null`

Defined in: [entity/note.ts:52](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L52)

###### Returns

[`Model`](#model) \| `null`

##### getModificationTime()

> **getModificationTime**(): `number`

Defined in: [entity/note.ts:63](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L63)

###### Returns

`number`

##### getSortField()

> **getSortField**(): `number`

Defined in: [entity/note.ts:103](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L103)

###### Returns

`number`

##### getTable()

> **getTable**(): `string`

Defined in: [abstract/entity.ts:5](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/abstract/entity.ts#L5)

###### Returns

`string`

###### Inherited from

`Entity.getTable`

##### getTags()

> **getTags**(): `string`[]

Defined in: [entity/note.ts:83](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L83)

###### Returns

`string`[]

##### getUpdateSequenceNumber()

> **getUpdateSequenceNumber**(): `number`

Defined in: [entity/note.ts:73](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L73)

###### Returns

`number`

##### setChecksum()

> **setChecksum**(`checksum`): [`Note`](#note)

Defined in: [entity/note.ts:117](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L117)

###### Parameters

###### checksum

`number`

###### Returns

[`Note`](#note)

##### setFields()

> **setFields**(`fields`): [`Note`](#note)

Defined in: [entity/note.ts:97](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L97)

###### Parameters

###### fields

`string`[]

###### Returns

[`Note`](#note)

##### setGuid()

> **setGuid**(`guid`): [`Note`](#note)

Defined in: [entity/note.ts:46](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L46)

###### Parameters

###### guid

`string`

###### Returns

[`Note`](#note)

##### setId()

> **setId**(`id?`): [`Note`](#note)

Defined in: [entity/note.ts:36](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L36)

###### Parameters

###### id?

`number`

###### Returns

[`Note`](#note)

##### setModel()

> **setModel**(`model`): [`Note`](#note)

Defined in: [entity/note.ts:56](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L56)

###### Parameters

###### model

[`Model`](#model)

###### Returns

[`Note`](#note)

##### setModificationTime()

> **setModificationTime**(`time`): [`Note`](#note)

Defined in: [entity/note.ts:67](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L67)

###### Parameters

###### time

`number`

###### Returns

[`Note`](#note)

##### setSortField()

> **setSortField**(`sort`): [`Note`](#note)

Defined in: [entity/note.ts:107](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L107)

###### Parameters

###### sort

`number`

###### Returns

[`Note`](#note)

##### setTags()

> **setTags**(`tags`): [`Note`](#note)

Defined in: [entity/note.ts:87](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L87)

###### Parameters

###### tags

`string`[]

###### Returns

[`Note`](#note)

##### setUpdateSequenceNumber()

> **setUpdateSequenceNumber**(`updateSequenceNumber`): [`Note`](#note)

Defined in: [entity/note.ts:77](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/entity/note.ts#L77)

###### Parameters

###### updateSequenceNumber

`number`

###### Returns

[`Note`](#note)

## Type Aliases

### ApkgBuilderConfig

> **ApkgBuilderConfig** = `Partial`\<\{ `sqljs`: `SqlJsConfig`; \}\>

Defined in: [index.ts:10](https://github.com/nadamai/apkg-browser-builder/blob/5769f7bccfb3b91c71d289eade4af393462575ef/src/index.ts#L10)
