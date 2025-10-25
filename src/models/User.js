const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  }
}, {
  timestamps: true,
  collection: 'Users'
});

module.exports = mongoose.model('User', userSchema);