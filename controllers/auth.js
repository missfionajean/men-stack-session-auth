// initialize express router
const express = require("express");
const router = express.Router();

// defines path after "/auth"
router.get("/sign-up", (req, res) => {
	res.render("auth/sign-up.ejs");
});

// export router for use in server.js
module.exports = router;
