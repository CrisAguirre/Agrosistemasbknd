const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://Cris87:MorgothTheLord88@cluster0.r79rn7k.mongodb.net/agrosistemas?appName=Cluster0';
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    // No matamos el proceso inmediatamente para permitir que el servidor responda errores HTTP
  }
};

module.exports = connectDB;
