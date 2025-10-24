const Author = require('../models/Author');

const createAuthor = async (request, reply) => {
  try {
    const author = new Author(request.body);
    await author.save();
    return reply.code(201).send(author);
  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
};

const getAllAuthors = async (request, reply) => {
  try {
    const authors = await Author.find();
    return reply.code(200).send(authors);
  } catch (error) {
    return reply.code(500).send({ error: error.message });
  }
};

// Export all functions
module.exports = {
  createAuthor,
  getAllAuthors
};