import initSqlJs, { Database as SqlJsDatabase, SqlJsConfig, SqlJsStatic } from 'sql.js';

export type QueryBuilderResult = {
	query: string;
	params: Record<string, any>;
};

export class QueryBuilder {
	public static insert(table: string, data: Record<string, any>): QueryBuilderResult {
		const columns = Object.keys(data);
		const values = columns.map((column: string) => `:${column}`);

		const query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${values.join(', ')})`;

		const params = columns.reduce((output: Record<string, any>, column: string) => {
			return {
				...output,
				[`:${column}`]: data[column]
			};
		}, {});

		return { query, params };
	}
}
