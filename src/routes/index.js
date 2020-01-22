"use strict";

const express = require("express");
const router = express.Router();

const varTitle = process.env.TITLE || "Sample NodeJs deployed by Digital Rig";
const varMessage = process.env.MESSAGE || "Hello world!";

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: varTitle, message: varMessage });
});

module.exports = router;
