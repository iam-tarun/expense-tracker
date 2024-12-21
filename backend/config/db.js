const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected');
  } catch (e)  {
    console.error('Failed to connect to database' + e.message);
  }
};

module.exports = connectDB;