const AuthService = require(`./auth.service.js`);
const UserService = require(`../user/user.service.js`);
const {validationResult} = require('express-validator');

class AuthController {

	async register(req, res) {
		const {firstName, password, email} = req.body;

		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()})
		
		const result = await UserService.create(firstName, password, email);

		if (result === `OK`) return res.status(201).send(result)
		if (result === `User with this email exists`) return res.status(400).send(result);

		return res.status(500).send(`Server error`);
	}

	async login(req, res) {
		const {email, password} = req.body;

		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()})

		const result = await AuthService.login(email, password);

		if (result ===`User not found`) return res.status(400).send(result);
		if (result ===`Invalid password`) return res.status(400).send(result);

		return res.status(200).send({
			token: result
		});
	}
}

module.exports = new AuthController();