import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js"; // adjust path when running

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const exists = await Admin.findOne({ username: "admin" });
  if (exists) {
    console.log("Admin already exists");
    process.exit();
  }
  const hashed = await bcrypt.hash("admin123", 10);
  await Admin.create({ username: "admin", password: hashed });
  console.log("Admin created: admin / admin123");
  process.exit();
};

run();
