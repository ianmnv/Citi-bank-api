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
  // Create validation in case there's empty fields in the req.body
  if (
    newUser.username &&
    newUser.fullName &&
    newUser.email &&
    newUser.password &&
    newUser.gender &&
    newUser.card
  ) {
    addNewUser(newUser);
    return res.status(201).json(newUser);
  } else {
    return res.status(400).json({ error: "Must fill all inputs" });
  }
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
  console.log(req);
  // Create validation in case req.params and req.body.id are the same
  const updatedData = modifyUsersData(req.body.id, req.body);

  if (updatedData) {
    return res.status(200).json(updatedData);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
}

module.exports = { getAllUsers, postNewUser, getUser, putNewUserData };
