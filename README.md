# APKG Browser Builder ✨

A compact npm package for building [Anki](https://apps.ankiweb.net/) `.apkg` flashcard decks directly in a browser — no server or CLI needed.

It ships a small ORM layer for the [Anki SQLite database](https://github.com/ankidroid/Anki-Android/wiki/Database-Structure) that can be used to build an `.apkg` deck and retrieve it as a blob or downloadable file. The package uses [sql.js](https://github.com/sql-js/sql.js) which needs the SQLite `.wasm` binary at runtime. While it comes bundled within the package by default, you can switch to any remote copy or CDN.

## Installation

```bash
npm install apkg-browser-builder
```

## Instructions

### The simplest example with one-card deck
```ts
import ApkgBuilder, { Collection, Deck, Card } from 'apkg-browser-builder';

const collection = new Collection();
const deck = new Deck('My deck');
const card = new Card('This is front', 'This is back');

collection.addDeck(deck);
deck.addCard(card);

const builder = new ApkgBuilder(collection);

await builder.init();
await builder.save('my-deck.apkg');
```

Everything revolves around a `Collection` object — the root entity used for constructing the `.apkg` file. You build up a tree of decks, cards and other optional entities to hand the collection over to `ApkgBuilder`.

The `init()` loads the WASM SQLite engine and `save(filename: string)` builds the package and triggers a browser download. If you'd rather handle the file yourself, you can call `build()` instead, which returns the package as a `Blob`.

### Custom `.wasm` binary

To use a custom SQLite `.wasm` binary, you can pass an additional `ApkgBuilderConfig` argument to specify configuration for [sql.js](https://github.com/sql-js/sql.js). The `sqljs` config is passed directly to the [`initSqlJs`](https://sql.js.org/#/?id=initsqljs) function of [sql.js](https://github.com/sql-js/sql.js).
```ts
const builder = new ApkgBuilder(collection, {
	sqljs: {
		locateFile: (file) => `https://cdn.jsdelivr.net/npm/sql.js@1.14.1/dist/${file}`
	},
});
```

To see more examples on how to build a package, please check the `dev/examples` files.
