const express = require("express");

const {
  getAllUsers,
  postNewUser,
  getUser,
  putNewUserData,
} = require("./bank.controller");

const bankRouter = express.Router();

bankRouter.get("/", getAllUsers);
bankRouter.post("/", postNewUser);
bankRouter.get("/:username", getUser);
bankRouter.put("/:id", putNewUserData);

module.exports = bankRouter;
