const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
const rourer = express.Router();

rourer.route("/").post(registerUser);
rourer.route("/login").post(authUser);
module.exports = rourer;
