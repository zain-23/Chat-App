import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const con = await mongoose.connect('mongodb://127.0.0.1:27017', {
      dbName: 'chat'
    });
    console.log(`MONGODB CONNECTED: ${con.connection.host}`);
  } catch (error) {
    console.error('MONGODB CONNECTION ERROR:', error);
    process.exit(1);
  }
};

export default connectDB;
