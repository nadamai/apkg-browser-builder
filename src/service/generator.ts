export class Generator {
	public static id(): number {
		const min = 10 ** 11;
		const max = 10 ** 12 - 1;

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	public static guid(): number {
		const high = Math.floor(Math.random() * 0xffffffff);
		const low = Math.floor(Math.random() * 0xffffffff);

		return high * Math.pow(2, 32) + low;
	}

	public static now(): number {
		return Math.floor(Date.now() / 1000);
	}
}
