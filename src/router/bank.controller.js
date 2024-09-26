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
  const userFound = getUsername(req.params.username);

  if (userFound) {
    return res.status(200).json(userFound);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
}

function putNewUserData(req, res) {
  const updatedData = modifyUsersData(req.body.id, req.body);

  if (updatedData) {
    return res.status(200).json(updatedData);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
}

module.exports = { getAllUsers, postNewUser, getUser, putNewUserData };
