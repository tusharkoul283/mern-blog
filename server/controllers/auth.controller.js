const User = require("../models/user.model");
const errorHandler = require("../utils/error.js");
const bcrypt = require("bcrypt");
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required!"));
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password : hashedPassword });

  try {
    await newUser.save();
    res.json("Signup Successfull!");
  } catch (err) {
    next(err);
  }
};

module.exports = signup;
