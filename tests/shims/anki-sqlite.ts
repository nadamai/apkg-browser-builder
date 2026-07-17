import { readFileSync } from 'node:fs';

/**
 * Test-only stand-in for the anki.sqlite asset import, wired up via the `resolve.alias`
 * entry in vitest.config.ts. At build time webpack inlines the file's text content
 * (asset/source); this module mirrors that in Node, so production code receives the
 * schema DDL the same way it does in the browser bundle.
 */
export default readFileSync(new URL('../../src/anki.sqlite', import.meta.url), 'utf8');
