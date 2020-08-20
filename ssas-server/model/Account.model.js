let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let AccountSchema = new Schema({
	loginName: String,
	password: String
});

let Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
