const { getUser } = require("../models/bank.model");

function getUserData(req, res) {
  const userId = +req.params.id;
  return res.status(200).json(getUser(userId));
}

module.exports = { getUserData };
