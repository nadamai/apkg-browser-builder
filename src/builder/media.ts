/**
 * A media file (e.g. an image or audio) attached to the `.apkg` package, referenced
 * from the {@link Note} contents by its filename.
 */
export class Media {
	private filename: string;
	private file: Blob;

	/**
	 * @param filename The unique name under which the file is stored in the package.
	 * @param file The file contents as a `Blob`.
	 */
	constructor(filename: string, file: Blob) {
		this.filename = filename;
		this.file = file;
	}

	public getFilename(): string {
		return this.filename;
	}

	/**
	 * @param filename The unique name under which the file is stored in the package.
	 * {@link Note} contents reference media by this exact name, e.g. `<img src="photo.jpg">`
	 * or `[sound:audio.mp3]`.
	 */
	public setFilename(filename: string): Media {
		this.filename = filename;

		return this;
	}

	public getFile(): Blob {
		return this.file;
	}

	/**
	 * @param file The file contents as a `Blob`.
	 */
	public setFile(file: Blob): Media {
		this.file = file;

		return this;
	}
}
