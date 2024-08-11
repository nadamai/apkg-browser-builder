import * as FileSaver from 'file-saver';

const ApkgBuilder = {
	init(): void {
		const uri = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

		FileSaver.saveAs(uri, 'apkg.gif');
	}
};

export default ApkgBuilder;
