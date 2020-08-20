
const User = require("../model/User.model");

class UserService {

	register(info) {
		let newUser = new User(info);
		return newUser.save()
		.then((document) => {
			
		})
		.catch((error) => {
			console.error(error);
		});
	}

	login() {

	}

	logout() {

	}

	suspend() {

	}

	lock() {

	}

}

module.exports = new UserService();
