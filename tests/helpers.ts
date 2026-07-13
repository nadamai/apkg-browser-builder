import JSZip from 'jszip';
import initSqlJs, { Database, SqlValue } from 'sql.js';
import ApkgBuilder from '../src/index';

export async function loadZip(apkg: ApkgBuilder): Promise<JSZip> {
	const zip = await apkg.build();

	return JSZip.loadAsync(await zip.arrayBuffer());
}

export async function loadDatabase(apkg: ApkgBuilder): Promise<Database> {
	const zip = await loadZip(apkg);

	const sqlite = await zip.file('collection.anki2')?.async('uint8array');
	const sql = await initSqlJs();

	return new sql.Database(sqlite);
}

export function queryColumn(db: Database, sql: string): SqlValue[] {
	const [result] = db.exec(sql);

	return result?.values.flat() ?? [];
}

export function queryRow(db: Database, sql: string): SqlValue[] {
	const [result] = db.exec(sql);

	return result?.values[0] ?? [];
}
