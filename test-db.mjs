import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://ali:abc1234567@cluster0.xht8ahs.mongodb.net/zero-master";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
