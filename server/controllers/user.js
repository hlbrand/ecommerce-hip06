const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  if (!email || !password || !lastname || !firstname) {
    return res.status(400).json({
      success: true,
      message: "Missing inputs",
    });
  }
  const response = await User.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    user: response,
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  return res.status(200).json({
    success: true,
    count: users.length,
    users: users,
  });
});

module.exports = {
  register,
  getAllUsers,
};
