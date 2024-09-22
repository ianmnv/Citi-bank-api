const { getUser, users, addNewUser } = require("../models/bank.model");

function getUserData(req, res) {
  const userId = +req.params.id;
  return res.status(200).json(getUser(userId));
}

function getAllUsers(req, res) {
  return res.status(200).json(users);
}

function postNewUser(req, res) {
  const newUser = req.body;
  addNewUser(newUser);
  return res.status(201).json(newUser);
}

module.exports = { getUserData, getAllUsers, postNewUser };
