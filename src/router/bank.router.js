const express = require("express");

const { getUserData, getAllUsers, postNewUser } = require("./bank.controller");

const bankRouter = express.Router();

bankRouter.get("/", getAllUsers);
bankRouter.get("/:id", getUserData);
bankRouter.post("/", postNewUser);

module.exports = bankRouter;
