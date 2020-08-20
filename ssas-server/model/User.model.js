let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	hkid: String,
	gender: String,
	birth: String
});

let User = mongoose.model("User", UserSchema);

module.exports = User;