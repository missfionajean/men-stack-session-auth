// imports mongoose dependency
const mongoose = require("mongoose");

// schema for user login information
const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
});

// properly encodes user schema
const User = mongoose.model("User", userSchema);

// exports user schema
module.exports = User;