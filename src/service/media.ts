export class Media {
	private filename: string;
	private file: Blob;

	constructor(filename: string, file: Blob) {
		this.filename = filename;
		this.file = file;
	}

	public getFilename(): string {
		return this.filename;
	}

	public setFilename(filename: string): Media {
		this.filename = filename;

		return this;
	}

	public getFile(): Blob {
		return this.file;
	}

	public setFile(file: Blob): Media {
		this.file = file;

		return this;
	}
}
