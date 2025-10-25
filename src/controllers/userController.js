const User = require('../models/User');

const createUser = async (request, reply) => {
  try {
    const user = new User(request.body);
    await user.save();
    return reply.code(201).send(user);
  } catch (error) {
    // Handle duplicate name error
    if (error.code === 11000) {
      return reply.code(400).send({ 
        error: 'A user with this name already exists' 
      });
    }
    return reply.code(400).send({ error: error.message });
  }
};

const getAllUsers = async (request, reply) => {
  try {
    const users = await User.find();
    return reply.code(200).send(users);
  } catch (error) {
    return reply.code(500).send({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers
};