import mongoose from 'mongoose';
import User from '../models/userModel.js';

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/namaste-db")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Test users to create
const users = [
  {
    username: "admin",
    password: "admin123",
    userType: "admin"
  },
  {
    username: "doctor",
    password: "doctor123",
    userType: "doctor"
  },
  {
    username: "researcher",
    password: "researcher123",
    userType: "researcher"
  }
];

async function createUsers() {
  try {
    // Clear existing users
    await User.deleteMany({});
    console.log("Cleared existing users");

    // Create new users
    for (const userData of users) {
      const user = new User(userData);
      await user.save();
      console.log(`Created user: ${userData.username} (${userData.userType})`);
    }

    console.log("✅ Test users created successfully");
  } catch (err) {
    console.error("Error creating users:", err);
  } finally {
    mongoose.disconnect();
  }
}

createUsers();