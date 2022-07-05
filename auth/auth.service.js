const UserService = require(`../user/user.service`);
const Bcrypt = require(`bcrypt`)
const Jwt = require(`jsonwebtoken`)
require('dotenv').config()

class AuthService {

	/**
	 * It takes an email and password, finds the user in the database, checks the password, and returns a
	 * token if the password is correct
	 * @param email - The email of the user
	 * @param password - The password that the user entered in the login form.
	 * @returns A token
	 */
	async login(email, password) {
		const user = await UserService.findOneByEmail(email);

		if (!user) return `User not found`;

		const checkPassword = Bcrypt.compareSync(password, user.password);
		if (!checkPassword) return `Invalid password`;

		const token = generateToken(user.id);
		return token;
	}

}

/**
 * It takes an id, creates a payload object with that id, and then signs that payload with the secret
 * key and an expiration time of 1 hour
 * @param id - The user's id
 * @returns A token that is signed with the secret key and expires in 1 hour.
 */
function generateToken(id) {
	const payload = {id};
	return Jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: `1h`});
}

module.exports = new AuthService();