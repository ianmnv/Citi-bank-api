const express = require("express");

const { getUsersData } = require("./bank.controller");

const bankRouter = express.Router();

bankRouter.get("/", getUsersData);

module.exports = bankRouter;
