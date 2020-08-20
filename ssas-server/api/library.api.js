
const express = require("express");
const Library = require("../model/Library.model");
const router = express.Router();

const LibraryController = require("../controller/Library.controller");

router.get("/insert", (req, res) => {
	req.body;
});

router.get("/find", LibraryController.find);

router.get("/find/all", LibraryController.findAll);

module.exports = router;
