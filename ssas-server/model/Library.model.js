let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let LibrarySchema = new Schema({
	shortName: String,
	fullName: String,
	address: String
});

let Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;
