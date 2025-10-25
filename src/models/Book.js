const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
    trim: true
  },
  synopsis: {
    type: String,
    required: [true, 'Synopsis is required'],
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: [1000, 'Year must be at least 1000'],
    max: [new Date().getFullYear(), 'Year cannot be in the future']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: [true, 'Author is required']
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  expectedReturnDate: {
    type: Date,
    default: null
  }
}, {
  timestamps: true,
  collection: 'Books'
});

module.exports = mongoose.model('Book', bookSchema);