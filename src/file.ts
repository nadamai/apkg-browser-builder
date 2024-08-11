export const File = {
	save(filename: string, uri: string): void {
		const link = document.createElement('a');

		if (typeof link.download !== 'string') {
			window.open(uri);

			return;
		}

		link.href = uri;
		link.download = filename;

		document.body.appendChild(link);

		link.click();

		document.body.removeChild(link);
	}
};
