// imports bcrypt for password hashing
const bcrypt = require("bcrypt");

// imports user data model
const User = require("../models/user.js");

// initialize express router
const express = require("express");
const router = express.Router();

// defines path after "/auth"
router.get("/sign-up", (req, res) => {
	res.render("auth/sign-up.ejs");
});

// response to POST request to "/auth/sign-up"
router.post("/sign-up", async (req, res) => {
    // check if username is already in database
    const userInDatabase = await User.findOne({ username: req.body.username });
    if (userInDatabase) {
        return res.send("Username already taken!");
    }
    // check if password and confirmPassword match
    if (req.body.password !== req.body.confirmPassword) {
        return res.send("Password and Confirm Password must match");
      }

    // process to hash (encrypt) password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;
});

// export router for use in server.js
module.exports = router;
