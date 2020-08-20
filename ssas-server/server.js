const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const config = require("./config");

const database = require("./src/database/ssas-database");
const Library = require("./model/Library.model");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: "all" }));

server.use("/api/library", require("./api/library.api"));
server.use("/api/user", require("./api/user.api"));

server.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Hello World"
	});
});

server.listen(config.server.port, () => {
	console.log("Server started at port " + config.server.port);
	database.connect(
		config.database.host, config.database.port, config.database.name,
		config.database.user, config.database.password,
		{
			useNewUrlParser : true,
			useUnifiedTopology: true,
			socketTimeoutMS : 10000,
			keepAlive : true
		}
	);
});
