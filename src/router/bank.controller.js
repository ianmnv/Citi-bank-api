const {
  users,
  addNewUser,
  getUsername,
  modifyUsersData,
} = require("../models/bank.model");

function getAllUsers(req, res) {
  return res.status(200).json(users);
}

function postNewUser(req, res) {
  const newUser = req.body;
  addNewUser(newUser);
  return res.status(201).json(newUser);
}

function getUser(req, res) {
  const user = req.params.username;
  return res.status(200).json(getUsername(user));
}

function putNewUserData(req, res) {
  console.log(req.body);
  return res.status(200).json(modifyUsersData(req.body.id, req.body));
}

module.exports = { getAllUsers, postNewUser, getUser, putNewUserData };
