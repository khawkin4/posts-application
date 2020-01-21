const express = require("express");
const router = express.Router();

//User model
const User = require("../../models/User");

//@route POST api/users
//@desc Register new user
//@access Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
});

module.exports = router;
