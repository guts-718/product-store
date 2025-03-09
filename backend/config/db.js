import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected ${conn.connection.host}`);
  } catch (error) {
    process.exit(1);
    // process code=1 means that code exited with failure and 0 means success
  }
};
