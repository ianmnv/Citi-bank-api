const { users, addNewUser, getUsername } = require("../models/bank.model");

function getAllUsers(req, res) {
  return res.status(200).json(users);
}

function postNewUser(req, res) {
  const newUser = req.body;
  addNewUser(newUser);
  return res.status(201).json(newUser);
}

function getUserByUsername(req, res) {
  const user = req.params.username;
  return res.status(200).json(getUsername(user));
}

module.exports = { getAllUsers, postNewUser, getUserByUsername };
