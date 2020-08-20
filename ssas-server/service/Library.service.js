
const Library = require("../model/Library.model");

class LibraryService {

	insert(docs) {
		return Library.insert(docs);
	}

	update(conditions) {
		// return Library.updateOne()
	}

	delete(conditions) {
		return Library.deleteOne(conditions);
	}

	find(conditions) {
		return Library.find(conditions, () => {}).select("-_id -__v");
	}

	findAll() {
		return Library.find().select("-_id -__v");
	}
}

module.exports = new LibraryService;
