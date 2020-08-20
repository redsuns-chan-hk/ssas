let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let AccountSchema = new Schema({
	loginName: String,
	password: String,
	role: String,
	passwordErrorCount: Number,
	accountLocked: Boolean,
	requiredLogin: Boolean,
	lastPasswordChanged: Date,
	lastLoginIP: String,
	lastPasswordChangerIP: String
});

let Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
