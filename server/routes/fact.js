"use strict";
var express = require("express");
var router = express.Router();
const fs = require("fs");
const facts = require("../services/facts");

router.get("/", function (req, res, next) {
	try {
		res.json(facts.getSingle(req.query.page));
    
	} catch (err) {
		console.error(err.message);
		next(err);
	}
});

module.exports = router;
