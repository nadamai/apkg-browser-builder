const GUID_BASE91_TABLE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~';

export class Generator {
	public static id(): number {
		const min = 10 ** 11;
		const max = 10 ** 12 - 1;

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	public static guid(): string {
		const high = BigInt(Math.floor(Math.random() * 0x100000000));
		const low = BigInt(Math.floor(Math.random() * 0x100000000));
		const base = BigInt(GUID_BASE91_TABLE.length);

		let n = (high << BigInt(32)) | low;
		let guid = '';

		while (n > BigInt(0)) {
			const remainder = n % base;
			n /= base;
			guid = GUID_BASE91_TABLE[Number(remainder)] + guid;
		}

		return guid;
	}

	public static now(): number {
		return Math.floor(Date.now() / 1000);
	}
}
