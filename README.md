# APKG Browser Builder ✨

A compact npm package for building [Anki](https://apps.ankiweb.net/) `.apkg` flashcard decks directly in a browser — no server or CLI needed.

It ships a small ORM layer for the [Anki SQLite database](https://github.com/ankidroid/Anki-Android/wiki/Database-Structure) that can be used to build an `.apkg` deck and retrieve it as a blob or downloadable file.

It uses [sql.js](https://github.com/sql-js/sql.js) to 










--

It ships a small object model for the pieces of an Anki collection (decks, notes, cards, models, configuration...) and compiles them into a real `collection.anki2` SQLite database using [sql.js](https://github.com/sql-js/sql.js) (SQLite compiled to WebAssembly), then zips it up into a valid `.apkg` file with [JSZip](https://github.com/Stuk/jszip) and triggers a download with [FileSaver](https://github.com/eligrey/FileSaver.js).

Because the SQLite engine runs as WASM, the package needs to fetch a `.wasm` binary at runtime. It comes bundled with a sensible default but you can point it at your own copy (e.g. if you self-host it or serve it from a CDN) — see [Custom WASM location](#custom-wasm-location) below.

## Installation

```bash
npm install apkg-browser-builder
```

## How it works

Everything revolves around a `Collection` — the root entity stored inside the `.apkg` file. You build up a tree of decks, cards and notes, then hand the collection to `ApkgBuilder` to compile and download it.

### Minimal example

```ts
import ApkgBuilder from 'apkg-browser-builder';
import { Card, Collection } from 'apkg-browser-builder';
import { Deck } from 'apkg-browser-builder';

// Creating a new collection
const collection = new Collection();

// Creating a deck
const deck = new Deck('My deck');

// Adding the deck to the collection
collection.addDeck(deck);

// Creating a card with the initial note data
const card = new Card('This is front', 'This is back');

// Adding the card to the deck
deck.addCard(card);

// Building and downloading the .apkg file
const builder = new ApkgBuilder(collection);

await builder.init();
await builder.save('my-deck.apkg');
```

`init()` loads the WASM SQLite engine and must be awaited before `build()` or `save()` is called. `save(filename)` builds the archive and triggers a browser download; if you'd rather handle the file yourself (upload it, inspect it, etc.), call `build()` instead — it resolves to a `Blob`.

### Full example

Decks, notes and cards can be composed with their own configuration and note-type models:

```ts
import { Card, Collection, Note } from 'apkg-browser-builder';
import { Configuration, Deck, DeckConfiguration, Model } from 'apkg-browser-builder';

// Creating a new collection
const collection = new Collection();

// Creating a configuration for the collection
const config = new Configuration();

// Creating a deck together with its config
const deck = new Deck('My deck', 'My deck description');
const deckConfig = new DeckConfiguration('Default deck configuration');

// Adding the configuration and the deck to the collection
collection.setConfiguration(config);
collection.addDeck(deck);

// Creating a model (note type)
const model = new Model();

// Setting the configuration and the model for the deck
deck.setConfiguration(deckConfig);
deck.setModel(model);

// Creating a new note and attaching the model to it
const note = new Note('This is front', 'This is back');
note.setModel(model);

// Creating a card and attaching the note to it
const card = new Card();
card.setNote(note);

// Adding the card to the deck
deck.addCard(card);
```

Every entity/object exposes getters and setters (`getDecks()`, `setModel()`, `addCard()`, ...) so you can inspect or mutate the tree at any point before building.

More runnable examples live in [`dev/examples`](dev/examples) — they're loaded straight into the local dev playground (see [Local dev server](#local-dev-server)), so they double as a live, interactive reference for the API.

### Custom WASM location

By default, `ApkgBuilder` resolves the sql.js WASM binary that's bundled with the package. To serve it from a different location (your own static host, a CDN, a specific version pin, etc.), pass a `sqljs` config through — it's forwarded directly to [`initSqlJs`](https://sql.js.org/#/?id=initsqljs):

```ts
import ApkgBuilder from 'apkg-browser-builder';

const builder = new ApkgBuilder(collection, {
	sqljs: {
		locateFile: () => 'https://my-cdn.example.com/sql-wasm.wasm',
	},
});

await builder.init();
```

## Contributing

Contributions are welcome! A few things to know before diving in:

```bash
npm install       # install dependencies
npm run dev       # local dev playground at http://localhost:3000
npm test          # run the test suite (vitest)
npm run build     # production build to dist/
```

### Local dev server

`npm run dev` starts a webpack-dev-server backed playground (see [`dev/index.html`](dev/index.html) and [`webpack.dev.js`](webpack.dev.js)) that lists every file under [`dev/examples`](dev/examples), lets you inspect its source, and builds/downloads the resulting `.apkg` from it. It's the fastest way to manually verify a change end-to-end in a real browser.

### Tests

Tests live in [`tests/`](tests) and run with [Vitest](https://vitest.dev/). They build a collection through the public API, unzip the resulting `.apkg`, and assert against the actual SQLite contents (see [`tests/helpers.ts`](tests/helpers.ts) for the zip/db loading helpers).

**When you add a feature or change behavior, please add or update both:**

- an example under [`dev/examples`](dev/examples), so it's discoverable and manually testable in the dev playground, and
- a test under [`tests/`](tests), so it's verified automatically.

A pre-commit hook runs a type check (`tsgo`) and `prettier` automatically, so make sure `npm test` passes locally before opening a PR.

## License

[MIT](LICENSE) © [Daniel Stasiak](https://digitibox.pl)

---

If this package saved you some time, consider [buying me a coffee](https://buymeacoffee.com/your-username-here) ☕
