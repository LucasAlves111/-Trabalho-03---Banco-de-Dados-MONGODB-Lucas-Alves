const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    trim: true
  },
  birthDate: {
    type: Date,
    required: [true, 'Birth date is required']
  },
  sex: {
    type: String,
    required: [true, 'Sex is required'],
    trim: true
  },
  writingGenre: {
    type: String,
    required: [true, 'Writing genre is required'],
    enum: {
      values: ['Novel', 'Poetry', 'Fantasy', 'Fiction', 'Mystery', 'Suspense'],
      message: '{VALUE} is not a valid writing genre'
    }
  }
}, {
  timestamps: true,
  collection: 'Authors'
});

module.exports = mongoose.model('Author', authorSchema);
