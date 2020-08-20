
const express = require("express");
const Library = require("../model/User.model");
const Account = require("../model/Account.model");
const router = express.Router();

const UserController = require("../controller/User.controller");

router.get("/register", UserController.register);

module.exports = router;
