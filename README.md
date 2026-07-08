# APKG Browser Builder ✨

A compact npm package for building [Anki](https://apps.ankiweb.net/) `.apkg` flashcard decks directly in a browser — no server or CLI needed.

It ships a small ORM layer for the [Anki SQLite database](https://github.com/ankidroid/Anki-Android/wiki/Database-Structure) that can be used to build an `.apkg` deck and retrieve it as a blob or downloadable file. The package uses [sql.js](https://github.com/sql-js/sql.js) which needs the SQLite `.wasm` binary at runtime. While it comes bundled within the package, you can point it to a remote copy or CDN .

## Installation

```bash
npm install apkg-browser-builder
```
