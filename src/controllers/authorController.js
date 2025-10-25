const Author = require('../models/Author');

const createAuthor = async (request, reply) => {
  try {
    const author = new Author(request.body);
    await author.save();
    return reply.code(201).send(author);
  } catch (error) {
    if (error.code === 11000) {
      return reply.code(400).send({ 
        error: 'An author with this name already exists' 
      });
    }
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

module.exports = {
  createAuthor,
  getAllAuthors
};