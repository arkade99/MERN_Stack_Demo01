const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const registerUser = async (req, res) => {
  //console.log(req.body);
  const { name, email, password, pic } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const userCreate = await User.create({
      name,
      email,
      password,
      pic,
    });

    if (userCreate) {
      console.log("res /ok", res.body);
      res.status(201).json({
        _id: userCreate.id,
        name: userCreate.name,
        email: userCreate.email,
        isAdmin: userCreate.isAdmin,
        pic: userCreate.pic,
        token: generateToken(userCreate._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          pic: user.pic,
          token: generateToken(user._id),
        });
      } else {
        res.json("Invalid Email or Password ");
      }
    });
  } else {
    res.status(404);
    throw new Error("Error Occurs!!");
  }
});
module.exports = { registerUser, authUser };
