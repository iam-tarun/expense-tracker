import { connect } from 'mongoose';
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log('Database connected');
  } catch (e)  {
    console.error('Failed to connect to database' + e.message);
  }
};

export default connectDB;