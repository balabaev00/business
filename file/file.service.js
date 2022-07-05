
const path = require('path')
const fs = require("fs");

class FileService {

	baseDir = path.dirname(require.main.filename);
	imageDir = `/images/`;

	/**
	 * It checks if a file exists in the image directory
	 * @param fileName - The name of the file to check for.
	 * @returns A boolean value.
	 */
	async checkFile(fileName) {
		return fs.existsSync(`${this.baseDir}${this.imageDir}${fileName}`)
	}

	/**
	 * It checks if the file extension of the image is in the list of allowed formats
	 * @param fileName - The name of the file you want to check.
	 * @param formats - an array of strings that represent the file formats you want to check for.
	 * @returns a boolean value.
	 */
	async checkFormats(fileName, formats) {
		const format = path.extname(`${this.baseDir}${this.imageDir}${fileName}`);
		return formats
			.map((item, i) => item.indexOf(format) >= 0 ? i : -1)
			.filter(item => item >= 0);

	}

	/**
	 * It returns the size of a file in megabytes
	 * @param fileName - The name of the file to get the size of.
	 * @returns The size of the file in megabytes.
	 */
	async getSize(fileName) {
		const stats = fs.statSync(`${this.baseDir}${this.imageDir}${fileName}`);
		const mBytes= stats.size/(1024*1024);

		return mBytes;
	}
}

module.exports =  new FileService();