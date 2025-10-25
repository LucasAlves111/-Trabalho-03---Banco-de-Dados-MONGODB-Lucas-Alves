const Book = require('../models/Book');
const Author = require('../models/Author');

const createBook = async (request, reply) => {
  try {
    const { title, synopsis, year, author } = request.body;

    const authorExists = await Author.findById(author);
    if (!authorExists) {
      return reply.code(404).send({ 
        error: 'Author not found. Please provide a valid author ID.' 
      });
    }

    const book = new Book({ title, synopsis, year, author });
    await book.save();
    
 
    await book.populate('author');
    
    return reply.code(201).send(book);
  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
};

const getOneBook = async (request, reply) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id).populate('author');
    if (!book) {
      return reply.code(404).send({ error: 'Book not found' });
    }
    return reply.code(200).send(book);
  } catch (error) {
    return reply.code(500).send({ error: error.message });
  }
};


const getAllBooks = async (request, reply) => {
  try {

    const books = await Book.find().populate('author');
    return reply.code(200).send(books);
  } catch (error) {
    return reply.code(500).send({ error: error.message });
  }
};

module.exports = {
  createBook,
  getOneBook, 
  getAllBooks
};