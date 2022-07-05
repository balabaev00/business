const UserController = require('../user/user.controller.js');
const AuthController = require('../auth/auth.controller.js');
const {body} = require('express-validator');

const router = require('express').Router()

router.post(
	`/user/register`, 
	[
		body(`firstName`).isLength({min:2}),
		body(`email`).isEmail(),
		body(`password`).isLength({min:5}),
	], 
	AuthController.register
	);
router.post(`/user/login`,
	[
		body(`email`).isEmail(),
		body(`password`).isLength({min:5}),
	], 
	AuthController.login
	);
router.put(`/profile/:id`, UserController.update)
router.get(`/profile/:id`, UserController.get)
router.get(`/profiles`, UserController.getAll)

module.exports = router