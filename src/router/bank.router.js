const express = require("express");

const { getUserData, getAllUsers } = require("./bank.controller");

const bankRouter = express.Router();

bankRouter.get("/", getAllUsers);
bankRouter.get("/:id", getUserData);

module.exports = bankRouter;
