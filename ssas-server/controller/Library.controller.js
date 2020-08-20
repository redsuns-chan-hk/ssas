
const Library = require("../model/Library.model");

const LibraryService = require("../service/Library.service.js");

class LibraryController {

	insert(req, res) {
		console.debug("START LibraryController::insert()");
		LibraryService.find(req.body).then((library) => {
			console.debug("END LibraryController::insert()");
			return res.json({
				success : true,
				message : "Inserted"
			});
		});
	}

	find(req, res) {
		console.debug("START LibraryController::find()");
		LibraryService.find(req.body).then((library) => {
			console.debug("END LibraryController::find()");
			return res.json({
				success : true,
				message : "Searching Finished.",
				data : library
			});
		});
	}

	findAll(req, res) {
		console.debug("START LibraryController::findAll()");
		LibraryService.findAll().then((libraries) => {
			let logMessage = "Found " + libraries.length + " record(s).";
			console.debug(logMessage);
			console.debug("END  LibraryController::findAll()");
			return res.json({
				success : true,
				message : logMessage,
				data: libraries
			});
		});
	}

}

module.exports = new LibraryController();
