const db = require("../database/database.js");
const Bcrypt = require('bcrypt');

require('dotenv').config()

class UserService {

	User = db.users
	FileService = require(`../file/file.service.js`)

	/**
	 * It creates a new user in the database
	 * @param firstName - The first name of the user
	 * @param password - User password
	 * @param email - The email address of the user.
	 * @returns return `OK`;
	 */
	async create(firstName, password, email) {
		const oldUser = await this.User.findOne({where: {email: email}});

		if (oldUser) return `User with this email exists`

		let info = {
			firstName,
			password: Bcrypt.hashSync(password, process.env.SALT),
			email,
			createdDate: new Date()
		}
		const user = await this.User.create(info);

		return `OK`;
	}

	/**
	 * > This function updates the user's data
	 * @param id - id of the user to be updated
	 * @param body - User Info
	 * @returns `OK`
	 */
	async update(id, body) {
		if (body.password || body.id || body.createdDate) return `Bad data`;

		if (body.image) {
			const image = body.image;

			const file = await this.FileService.checkFile(image);
			if (!file) return `Image not found`

			const format = await this.FileService.checkFormats(image, [`.jpg`, `.png`]);
			if (!format) return `File format error`;

    		const imageSize = this.FileService.getSize(image);
			if (imageSize>10) return `Size of image more than 10 MB`
		}

		const oldUser = await this.User.findOne({where: {id: id}});
		if (!oldUser) return `User not found`;

		const user = await this.User.update(body, {where: {id: id}});
		return `OK`;
	}

	/**
	 * It returns a user with the given id.
	 * @param id - The id of the user you want to get.
	 * @returns The user object or a string.
	 */
	async get(id) {
		const user = await this.User.findOne({where: {id: id}});
		return user? user : `User not found`;
	}

	/**
	 * It returns a list of all users, sorted by their creation date
	 * @returns An array of users sorted by createdDate.
	 */
	async getAll() {
		const users = await this.User.findAll({});
		return users.sort((a, b) => a.createdDate - b.createdDate);
	}

	async findOneByEmail(email) {
		return this.User.findOne({where: {email: email}});
	}

}

module.exports =  new UserService();