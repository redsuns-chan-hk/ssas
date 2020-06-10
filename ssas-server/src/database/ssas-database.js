const mongoose = require("mongoose");

class database {

	constructor() {
		this.connection = null;
		this.url = null;
	}

	connect(server, port, database, user, password, config) {
		this.url = "mongodb://" + ((!(user === null) && !(password === null)) ? user + ":" + password + "@" : "") + server + ":" + port + "/" + database;
		console.log("Connecting To: " + this.url);
		mongoose.set("useFindAndModify", false);

		mongoose.connect(this.url, config)
		mongoose.Promise = global.Promise;

		this.connection = mongoose.connection;
		this.connection.once("open", this.onOpen);
		this.connection.on("connected", this.onConnected);
		this.connection.on("disconnected", this.onDisconnected);
		this.connection.on("error", this.onError);
	}

	onOpen() {
		console.log("Database Opened");
	}

	onConnected() {
		console.log("Database Connected.");
	}

	onDisconnected() {
		console.log("Disconnected with Database...");
	}

	onError() {
		console.log("Error Occurred During Connection!");
	}
}

module.exports = new database();
