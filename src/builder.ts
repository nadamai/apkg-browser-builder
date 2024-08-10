import { File } from "./file.js";

const ApkgBuilder = {
	init(): void
	{
		console.log(123);

		const uri = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

		File.save("file.gif", uri);
	}
}

export default ApkgBuilder;