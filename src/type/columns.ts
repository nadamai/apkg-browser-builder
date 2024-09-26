export const Columns = [
	'question',
	'answer',
	'template',
	'deck',
	'noteFld',
	'noteCrt',
	'noteMod',
	'cardMod',
	'cardDue',
	'cardIvl',
	'cardEase',
	'cardReps',
	'cardLapses',
	'noteTags',
	'note'
] as const;

export type ColumnValue = (typeof Columns)[number];
