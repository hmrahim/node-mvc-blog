const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signupGetController = (req, res, next) => {
  res.render("pages/auth/signup", { title: "Create a new account" });
};
exports.signupPostController = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 11);

    const createdUser = new User({
      username,
      email,
      password: hashPass,
    });
    const result = await createdUser.save();
    res.render("pages/auth/signup", { title: "Create a new account", result });
  } catch (e) {
    console.log(e);
  }
};

exports.loginGetController = (req, res, next) => {
  res.render("pages/auth/login", { title: "Login your account" });
};

exports.loginPostController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.json("invalid email ");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.json("invalid password");
    } else {
      console.log(user);
    }
  } catch (e) {
    console.log(e);
  }
};
exports.logoutController = (req, res, next) => {};
