import JSZip from 'jszip';
import initSqlJs, { Database as SqlJsDatabase, SqlValue } from 'sql.js';
import ApkgBuilder, { Collection } from '../src/index';

export async function loadCollectionZip(collection: Collection): Promise<JSZip> {
	const builder = new ApkgBuilder(collection);
	const apkg = await builder.build();

	return JSZip.loadAsync(await apkg.arrayBuffer());
}

export async function loadCollectionDatabase(collection: Collection): Promise<SqlJsDatabase> {
	const zip = await loadCollectionZip(collection);

	const sqlite = await zip.file('collection.anki2')?.async('uint8array');
	const sql = await initSqlJs();

	return new sql.Database(sqlite);
}

export function queryColumn(db: SqlJsDatabase, sql: string): SqlValue[] {
	const [result] = db.exec(sql);

	return result?.values.flat() ?? [];
}

export function queryRow(db: SqlJsDatabase, sql: string): SqlValue[] {
	const [result] = db.exec(sql);

	return result?.values[0] ?? [];
}
