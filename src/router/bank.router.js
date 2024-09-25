const express = require("express");

const {
  getAllUsers,
  postNewUser,
  getUserByUsername,
} = require("./bank.controller");

const bankRouter = express.Router();

bankRouter.get("/", getAllUsers);
bankRouter.get("/:username", getUserByUsername);
bankRouter.post("/", postNewUser);

module.exports = bankRouter;
