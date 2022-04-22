var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Eric",
		added: new Date(),
	},

	{
		text: "Bye bruv!",
		user: "Kevin",
		added: new Date(),
	},
];

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

// GET new page
router.get("/new", function (req, res, next) {
	res.render("form", { title: "Express" });
});

router.post("/new", function (req, res, next) {
	info = {};
	info.text = req.body.message;
	info.user = req.body.name;
	info.added = new Date();
	messages.unshift(info);
	res.redirect("/");
});

module.exports = router;
