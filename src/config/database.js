const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL;
    const MONGO_DATABASE = process.env.MONGO_DATABASE;
    
    if (!MONGO_URL || !MONGO_DATABASE) {
      throw new Error('MONGO_URL and MONGO_DATABASE are not defined in .env file');
    }

    const uri = `${MONGO_URL}${MONGO_DATABASE}`;
    
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