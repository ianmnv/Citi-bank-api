const { getUser, users } = require("../models/bank.model");

function getUserData(req, res) {
  const userId = +req.params.id;
  return res.status(200).json(getUser(userId));
}

function getAllUsers(req, res) {
  return res.status(200).json(users);
}

module.exports = { getUserData, getAllUsers };
