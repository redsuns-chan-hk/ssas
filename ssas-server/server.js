const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const database = require("./src/database/ssas-database");
const { Library } = require("./model/Library.model");

const server = express();

const SERVER_PORT = 8787;

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: "all" }));

server.get("/library/add", (req, res) => {
	console.log("START library add");
	let newLibrary = new Library({
		shortName: "PSTSWPL",
		fullName: "Ping Shan Tin Shui Wai Public Library",
		address: "Tin Shui Wai West Rail Station"
	});
	try {
		newLibrary.save((err) => {
			if (!err) {
				console.log("Library Saved!");
				return res.json({
					success: true,
					message: "Saved!"
				});
			} else {
				console.error(err);
				return res.json({
					success: false,
					message: "Unable to save"
				});
			}
		});
	} catch (err) {
		console.error(err);
		return res.json({
			success: false,
			message: "Save Exception"
		});
	}
});

server.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Hello World"
	});
});

server.listen(SERVER_PORT, () => {
	console.log("Server started at port " + SERVER_PORT);
	database.connect(
		"127.0.0.1", 27017, "ssas",
		null, null,
		{
			useNewUrlParser : true,
			useUnifiedTopology: true,
			socketTimeoutMS : 0,
			keepAlive : true
		}
	);
});
