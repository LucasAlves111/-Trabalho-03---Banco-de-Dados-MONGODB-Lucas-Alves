const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    
    const uri = `${process.env.MONGO_URL}${process.env.MONGO_DATABASE}`;
    
    if (!uri || uri === 'undefined') {
      throw new Error('MongoDB connection variables are not defined in .env file');
    }
    
    console.log('Connecting to:', uri);
    await mongoose.connect(uri);
    console.log(' MongoDB connected successfully');
  } catch (error) {
    console.error(' MongoDB connection error:', error.message);
    process.exit(1);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB error:', err);
});

module.exports = connectDB;