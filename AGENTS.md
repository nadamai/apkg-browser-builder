# AGENTS.md

Operating manual for AI coding agents working on this repository. Every rule below is derived from the actual codebase — when in doubt, open a neighboring file and match it.

## 1. System Overview & Role

- **Library Name:** `apkg-browser-builder`
- **Primary Purpose:** Building [Anki](https://apps.ankiweb.net) `.apkg` flashcard packages **entirely in the browser** — no server or CLI. The library is a small ORM over the [Anki SQLite schema](https://github.com/ankidroid/Anki-Android/wiki/Database-Structure): users compose a `Collection` of decks, cards, notes and models and `ApkgBuilder` serializes it into a real SQLite database (via sql.js/WASM), zips it (JSZip) and returns a `Blob` or triggers a download (FileSaver).
- **Core Stack:** TypeScript (`strict: true`, target ES2022) · webpack 5 + ts-loader + file-loader (bundles `.wasm`/`.sqlite` as asset URLs) · Vitest (tests) · Prettier (formatting; no ESLint) · TypeDoc + typedoc-plugin-markdown (generated API reference) · husky + pretty-quick (pre-commit formatting) · npm (package-lock.json).
- **Runtime dependencies (frozen at 3):** `sql.js`, `jszip`, `file-saver`. Everything else is a devDependency.
- **Core Philosophy:**
  1. **Faithful Anki mappings.** Classes, fields, defaults and units mirror the Anki database structure exactly. Defaults match what stock Anki writes (e.g. `factor: 2500`, review `perDay: 200`, `ver: 11`).
  2. **Strict type safety.** `strict` mode, no `any` in public APIs (the sole exception: `Configuration.setValue/getValue` escape hatch), literal-union types generated from `as const` dictionaries.
  3. **Browser-first.** No Node-only APIs in `src/`. The bundle must stay self-contained.
  4. **Self-explanatory generated docs.** Every public setter documents the schema fact behind it; the docs build must stay at **zero warnings**.

## 2. Codebase Architecture & Directory Map

```
apkg-browser-builder/
├── src/
│   ├── index.ts          # ApkgBuilder class + the ENTIRE public export surface
│   ├── anki.sqlite       # Anki schema DDL, loaded via file-loader at runtime
│   ├── abstract/         # Entity<Model> and Object<Model> base classes
│   ├── entity/           # DB-row classes → rows in collection.anki2 tables
│   │                     #   (Collection, Card, Note, ReviewLog, Grave)
│   ├── object/           # Classes serialized as JSON *inside* the col table
│   │                     #   (Deck, Model, Field, CardTemplate, Configuration,
│   │                     #    DeckConfiguration, New/Review/LapseCardConfig)
│   ├── model/            # Plain TS types mirroring Anki schema shapes (NO classes)
│   ├── dictionary/       # Anki enums as `as const` maps + derived Key/Value types
│   ├── type/             # Standalone types (ApkgBuilderConfig, ModelRequirement, …)
│   ├── service/          # Machinery: Database (sql.js wrapper), Generator, QueryBuilder
│   └── builder/          # Builder-domain classes (Media)
├── tests/                # Vitest tests + setup.ts (Node shims for .wasm/.sqlite/fetch)
├── dev/                  # webpack-dev-server playground + numbered usage examples
├── docs/                 # Generated REFERENCE.md — never edit by hand
├── typedoc.json          # Docs config (zero-warning policy, intentionallyNotExported)
├── typedoc-theme.mjs     # Local TypeDoc theme (hides returns/hierarchy/inheritance
│                         #   sections, member group headings; holds CLASS_ORDER)
├── webpack.config.js     # Production bundle → dist/index.min.js
└── webpack.dev.js        # Dev server config
```

**Where a new file goes:** a class stored as a row in the SQLite DB → `src/entity/`; a class serialized into a JSON column → `src/object/`; its plain schema type → `src/model/`; an Anki enum → `src/dictionary/`; a helper type → `src/type/`; packaging/builder concerns → `src/builder/`. Every directory has an `index.ts` barrel — add new files to it.

## 3. Strict Coding Standards & Patterns

### TypeScript Usage
- `type` aliases, not `interface`, for all schema shapes (see `src/model/*`).
- Enums are **never** TS `enum`s. Use the dictionary pattern:
  ```ts
  export const CardType = { new: 0, learning: 1, review: 2, relearning: 3 } as const;
  export type CardTypeKey = keyof typeof CardType;
  export type CardTypeValue = ValueOf<typeof CardType>;
  ```
  Dictionary keys are **snake_case** (`new_cards_random`, `user_buried`). Public APIs accept/return `…Key` strings; the numeric `…Value` is a serialization detail. Readers use `getDictionaryKey(Dict, value) || 'fallback'`.
- Booleans stay booleans in JSON-serialized objects — do **not** convert to `0`/`1`.
- Formatting is Prettier's job: tabs, 140-char print width, single quotes, no trailing commas. Never hand-format against it.

### The Class Grammar (the most important section)
Every entity/object class follows one uniform grammar. Deviating from it is a bug:

1. **Fluent accessors:** `getX()` / `setX(value): ClassName` returning `this`. Getters are undocumented; setters carry a `@param` TSDoc with the *schema fact* (meaning, units, allowed values).
2. **`add*`/`remove*` guards:** `add*` skips duplicates via `indexOf(...) > -1`; `remove*` only splices inside an `if (index > -1)` block.
3. **Collection setters delegate:** `setXs(items)` clears the array, loops `this.addX(item)`, then calls the serializer once (covers the empty-array case).
4. **Serializer helpers are pure:** `private update*()` / `updateEntity*()` methods only serialize state into `this.object`/`this.entity`. They must **never** call a `set*` method which may cause infinite recursion issues.
5. **Read-time reference refresh:** any class holding a linked object (`protected deck: Deck | null`, …) overrides `getEntity()`/`getObject()` to re-read linked IDs / re-serialize children at read time, so late `setId()` calls can't produce stale foreign keys. Sole deliberate exception: `Grave` (a tombstone snapshots IDs by design; its `setType` resets `oid`).
6. **Units are law:** `col.mod` is **milliseconds**; every other `mod` field is **seconds** (`Generator.now()`); IDs double as epoch-millisecond creation timestamps; `crt` is seconds. State the unit in the setter's doc comment. When unsure, verify against the AnkiDroid wiki or Anki's Rust source — not memory.

### Export Strategy
- Source is ESM (`module: esnext`, `moduleResolution: bundler`); webpack emits a single minified bundle `dist/index.min.js`; types come from `tsc` declarations (`dist/src/index.d.ts`). Only `dist/` is published.
- `src/index.ts` is the **single public surface**: `ApkgBuilder` is both the default export and a named export; every public class is a named export; type-only exports use `export type { … }`.
- **Never export a class with `export type`** — TypeDoc then documents it as an interface and consumers lose `new`.
- Checklist for exposing a new class: named export in `src/index.ts` → add to `CLASS_ORDER` in `typedoc-theme.mjs` (controls docs order) → `npm run docs` → confirm **zero warnings**. Deliberately undocumented referenced types go in `intentionallyNotExported` in `typedoc.json`.

### Documentation Comments
- TSDoc on: class summaries, constructors (constructors only render in docs when documented — that's a deliberate `excludeNotDocumented` rule) and setters. Getters stay bare.
- `{@link X}` only for classes that are exported and documented; use `` `backticks` `` for everything else (broken links = docs warnings = failed standard).
- `@internal` marks plumbing (`getEntity`/`getObject` overrides inherit it from the base classes); `@hidden` removes something from docs entirely.
- Doc prose that quotes dictionary keys goes stale silently on renames — `grep` old key names after changing any dictionary.

### Asynchronous Patterns & Error Handling
- `async/await` only; no raw `.then()` chains.
- The async surface is intentionally tiny: `ApkgBuilder.build()`/`save()` and `Database.init()`. Everything else is synchronous.
- `Database` methods throw plain `Error` with a descriptive message when used uninitialized; `build()` wraps DB work in `try/finally` with `db.close()`. Follow that pattern for new resources.

### Dependency & Performance Constraints
- **Do not add runtime dependencies.** The three existing ones are the budget. New capability = devDependency or hand-rolled.
- No Node built-ins in `src/` (`fs`, `path`, `crypto`, …) — this code runs in browsers; `crypto.subtle` is acceptable only inside `async` paths.
- `.wasm`/`.sqlite` assets go through file-loader `require()` calls (see `src/service/database.ts`); `tests/setup.ts` shims those for Node — touching that loading path requires keeping both environments working.

## 4. Testing Requirements & Workflow

- **Runner:** Vitest, configured in `vitest.config.ts` with `tests/setup.ts` (registers Node handlers for `.wasm`/`.sqlite` imports and a file-serving `fetch` shim).
- **Location:** dedicated `tests/` directory (not co-located). Shared utilities live in `tests/helpers.ts`.
- **Style:** end-to-end over mocks. Tests build a real package through the public API, unzip it, open the actual SQLite database with sql.js and assert on real rows/JSON columns (see `tests/apkg-builder.test.ts`). Do not mock sql.js or JSZip; there is no network to mock.
- **Commands:**
  - `npm test` — run the suite once (CI style).
  - `npx vitest` — watch mode.
  - Coverage is **not configured** (no coverage provider installed). Don't invent a coverage command; propose adding `@vitest/coverage-v8` first if coverage is required.

## 5. Agent Instructions & Workflow Guardrails

1. **Analyze first.** Read the sibling class in the same directory before writing a new one — the grammar in §3 is enforced by convention and every existing file is a template. Check `src/abstract/` before adding any base behavior; check barrels before adding imports (deep imports like `./object/field` are not used in `src/index.ts`).
2. **Plan before complex changes.** Anything touching serialization, the export surface or the build pipeline gets a short written plan for the user before code.
3. **No placeholders.** Complete implementations only — no `// TODO`, no stubbed methods, no "implement later". If schema knowledge is missing, verify it (AnkiDroid wiki, Anki source) instead of guessing.
4. **Verify before declaring done.** The full battery, in order:
   ```bash
   npx tsc --noEmit          # typecheck (webpack's ts-loader won't catch everything)
   npm run prettier:check    # formatting
   npm test                  # Vitest suite
   npm run build             # webpack production bundle
   npm run docs              # TypeDoc — MUST end with zero warnings
   ```
   A change is not finished while any of these fails or the docs emit warnings.
5. **Respect generated artifacts.** `docs/REFERENCE.md` and `dist/` are outputs. Regenerate them; never hand-edit.
6. **Report honestly.** If a check fails, say so with the output — don't declare success on a red battery.

## 6. Project-Specific Pitfalls & Anti-Patterns

1. **Time-unit traps.** `col.mod` is milliseconds while `cards.mod`, `notes.mod`, deck/model/dconf `mod` are seconds; `crt` is seconds; IDs are epoch milliseconds. Mixing these produces packages that import fine but corrupt statistics/scheduling. Never trust memory — this project verifies units against Anki's own source.
2. **`update → set` recursion.** Serializer helpers (`updateEntity*`, `updateFields`, …) must stay pure. Wiring one back through a `set*` method may cause infinite recursion problems; the current architecture exists specifically to prevent it.
3. **Incomplete export wiring.** A new public class needs *all three*: `src/index.ts` named export, `CLASS_ORDER` entry in `typedoc-theme.mjs` and a warning-free `npm run docs` run. Forgetting one gives missing docs, wrong ordering or link warnings. And `export type` on a class silently degrades it to an interface in the docs.
4. **Zero-value defaults that break Anki.** A `0` that "looks safe" can be catastrophic (`ivlFct: 0` freezes all intervals; `maxIvl: 0` caps them at zero days; empty `ints` crashes Anki's scheduler). New fields take Anki's stock default, not a zero placeholder.
5. **Node leaking into the browser bundle.** Tests run in Node only thanks to `tests/setup.ts` shims — that does not license Node APIs in `src/`. Anything imported there ships to browsers through webpack; check the loaders before adding new asset types and keep the three-dependency budget intact.
