// dbConfig/dbconfig.js
import mongoose from "mongoose";

export async function connect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME || "e-shop", // optional
    });

    mongoose.connection.on("connected", () => {
      console.log("✅ Mongoose connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ Mongoose connection error:", err);
      process.exit(1);
    });

    return connection;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}
