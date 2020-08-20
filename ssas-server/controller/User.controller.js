
const User = require("../model/User.model");
const UserService = require("../service/User.service");

class UserController {
	register(req, res) {
		console.debug("START UserController::register()");
		console.log("Register Request:");
		console.log(req);
		return res.json({
			success : true,
			message : "registered"
		});
		/*
		UserService.register().then((user) => {
			console.debug("END UserController:register()");
			return res.json({
				success : true,
				message : "registered"
			});
		});
		*/
	}
}

module.exports = new UserController();
