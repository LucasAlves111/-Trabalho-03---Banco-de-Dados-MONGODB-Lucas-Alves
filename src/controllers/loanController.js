const Loan = require('../models/Loan');
const Book = require('../models/Book');
const User = require('../models/User');

const createLoan = async (request, reply) => {
  try {
    const { userId, bookId } = request.body;


    const user = await User.findById(userId);
    if (!user) {
      return reply.code(404).send({ error: 'User not found' });
    }


    const book = await Book.findById(bookId);
    if (!book) {
      return reply.code(404).send({ error: 'Book not found' });
    }

 
    const currentDate = new Date();
   
    if (!book.isAvailable) {
      if (book.expectedReturnDate && new Date(book.expectedReturnDate) < currentDate) {
      
        console.log('Book was overdue, new loan available');
      } else {
      
        return reply.code(400).send({ 
          error: `Book is currently unavailable. Expected return date: ${book.expectedReturnDate}` 
        });
      }
    }


    const loanDate = currentDate.toISOString().split('T')[0]; 
    const returnDate = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    const returnDateStr = returnDate.toISOString().split('T')[0];


    const loan = new Loan({
      user: user.name,
      book: book.title,
      loanDate: loanDate,
      returnDate: returnDateStr
    });
    await loan.save();


    book.isAvailable = false;
    book.expectedReturnDate = returnDate;
    await book.save();

    return reply.code(201).send({
      message: 'Loan created successfully',
      loan: loan,
      book: {
        title: book.title,
        isAvailable: book.isAvailable,
        expectedReturnDate: book.expectedReturnDate
      }
    });

  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
};

module.exports = {
  createLoan
};