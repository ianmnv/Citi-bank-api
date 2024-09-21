const express = require("express");

const { getUserData } = require("./bank.controller");

const bankRouter = express.Router();

bankRouter.get("/:id", getUserData);

module.exports = bankRouter;
