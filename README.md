# APKG Browser Builder ✨

An npm package for building [Anki](https://apps.ankiweb.net) `.apkg` flashcard collections directly in a browser — no server or CLI needed.

It ships a small ORM layer for the [Anki SQLite database](https://github.com/ankidroid/Anki-Android/wiki/Database-Structure) that can be used to build an `.apkg` package and retrieve it as a blob or downloadable file. The package uses [sql.js](https://github.com/sql-js/sql.js) which needs the SQLite `.wasm` binary at runtime. While it comes bundled within the package by default, you can switch to any remote copy or CDN.

## Installation

```bash
npm install apkg-browser-builder
```

## Examples

### A minimal example with a one-card deck
```ts
import ApkgBuilder, { Card, Collection, Deck } from 'apkg-browser-builder';

const collection = new Collection();
const deck = new Deck('My deck');
const card = new Card('This is front', 'This is back');

collection.addDeck(deck);
deck.addCard(card);

const builder = new ApkgBuilder(collection);

await builder.save('my-deck.apkg');
```

Everything revolves around a `Collection` object — the root Anki database entity used for constructing the `.apkg` file. You then build up a tree of decks, cards and other optional entities to hand the collection over to `ApkgBuilder`.

The `save(filename: string)` builds the package and triggers a browser download. If you'd rather handle the file yourself, you can call `build()` instead, which returns the package as a `Blob`.

To see more examples on how to build a package, please check the [`dev/examples`](dev/examples) files.

## Documentation

The library exposes an `ApkgBuilder` object together with the classes that mirror the original [Anki SQLite schema](https://github.com/ankidroid/Anki-Android/wiki/Database-Structure). The object composition is as follows:

- `ApkgBuilder` — wraps a `Collection` and turns it into a downloadable `.apkg` file,
  - `Collection` — root schema object holding a `Configuration` and every `Deck`, `Model` and `DeckConfiguration` used in the package,
    - `Deck` — holds its `Card`s, `Model` and `DeckConfiguration`,
      - `Card` — holds a `Note`,
        - `Note` — holds a `Model` (fields/tags for the card content).

For the detailed documentation please refer to the [docs/REFERENCE.md](docs/REFERENCE.md). For any specific configuration please consult the original database structure which is the source of truth.

Every schema class exposes proper getters/setters on top of it. Setters return the instance so methods can be chained.

## Contributing

Contributions are welcome! A few things to know before diving in:

```bash
npm install          # install dependencies
npm run prepare      # initialize prettier pre-commit hooks
npm run dev          # local dev playground at localhost:3000 with typedoc watch
npm run prettier     # run prettier
npm test             # run the vitest suite
```

The dev playground allows previewing and manually testing every example file under [`dev/examples`](dev/examples). A pre-commit hook runs a `tsgo` type check and `prettier` automatically.

Tests live in [`tests`](tests) and run with [Vitest](https://vitest.dev). Each test builds an `.apkg` package, unzips it and asserts against the actual zip and SQLite contents.

The [`docs/REFERENCE.md`](docs/REFERENCE.md) documentation is automatically generated from the source code using the [TypeDoc](https://typedoc.org).

When you add a custom feature or change a behavior, please add or update both:

- a working example under [`dev/examples`](dev/examples), so it's testable in the dev playground,
- a test under [`tests`](tests), so it's verified automatically by CI.

## Support

If this package saved you some time, consider [buying me a coffee](https://buymeacoffee.com/nadamai)! ☕
