const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'User name is required'],
    trim: true
  },
  book: {
    type: String,
    required: [true, 'Book name is required'],
    trim: true
  },
  loanDate: {
    type: String,
    required: [true, 'Loan date is required']
  },
  returnDate: {
    type: String,
    required: [true, 'Return date is required']
  }
}, {
  timestamps: true,
  collection: 'Loans'
});

module.exports = mongoose.model('Loan', loanSchema);