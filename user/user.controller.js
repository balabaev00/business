const UserService = require('./user.service.js');

class UserController {

	async update(req, res) {
		const body = req.body;
		const id = req.params.id;

		const result = await UserService.update(id, body);
		if (result === `User not found`) return res.status(400).send(result)
		if (result === `Bad data`) return res.status(400).send(result)
		if (result === `File format error`) return res.status(400).send(result)
		if (result === `Size of image more than 10 MB`) return res.status(400).send(result)
		if (result === `Image not found`) return res.status(400).send(result)
		if (result === `OK`) return res.status(200).send(result)

		return res.status(500).send(`Server error`);
	}

	async get(req, res) {
		const id = req.params.id;

		const result = await UserService.get(id);
		if (result === `User not found`) return res.status(400).send(result)

		return res.status(200).send(res.json(result));
	}

	async getAll(req, res) {
		const result = await UserService.getAll();

		const pageLimit = 10;
		const pageCount = Math.ceil(result.length / 10);
		let page = parseInt(req.query.page);
		if (!page) page = 1;
		if (page > pageCount) page = pageCount
		return res.status(200).send({
			"page": page,
			"pageCount": pageCount,
			"users": result.slice(page * pageLimit - pageLimit, page * pageLimit)
  		});
	}
}

module.exports = new UserController();