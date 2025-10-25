require('dotenv').config();
const mongoose = require('mongoose');

const resetCollections = async () => {
  try {
  
    const MONGO_URL = process.env.MONGO_URL;
    const MONGO_DATABASE = process.env.MONGO_DATABASE;
    
    if (!MONGO_URL || !MONGO_DATABASE) {
      throw new Error('MONGO_URL and MONGO_DATABASE must be defined in .env file');
    }

    const MONGODB_URI = `${MONGO_URL}${MONGO_DATABASE}`;

    console.log(' Connecting to MongoDB...');
    console.log('URI:', MONGODB_URI);
    await mongoose.connect(MONGODB_URI);
    console.log(' Connected to MongoDB');

    const collections = await mongoose.connection.db.collections();

    if (collections.length === 0) {
      console.log(' No collections found in database');
    } else {
      console.log(` Found ${collections.length} collection(s)`);
      
      for (let collection of collections) {
        await collection.drop();
        console.log(`  Dropped collection: ${collection.collectionName}`);
      }
    }

    console.log(' All collections reset successfully!');
    await mongoose.connection.close();
    console.log(' Disconnected from MongoDB');
    
    process.exit(0);
  } catch (error) {
    console.error(' Error resetting collections:', error.message);
    
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
    }
    
    process.exit(1);
  }
};

resetCollections();