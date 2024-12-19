const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body); // Uses the User model to create a new user
    res.status(201).json(user); // Sends back the newly created user
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };    