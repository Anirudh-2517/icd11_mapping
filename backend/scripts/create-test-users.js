import mongoose from 'mongoose';
import User from './models/userModel.js';
import { config } from './config/db.js';

// Connect to MongoDB
mongoose.connect(config.mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Test users to create
const users = [
  { username: 'admin1', password: 'admin123', userType: 'admin' },
  { username: 'doctor1', password: 'doctor123', userType: 'doctor' },
  { username: 'researcher1', password: 'researcher123', userType: 'researcher' }
];

// Create the users
async function createTestUsers() {
  try {
    // Clear existing users first (optional - remove if you want to keep existing users)
    await User.deleteMany({});

    // Create new users
    for (const userData of users) {
      const user = new User(userData);
      await user.save();
      console.log('Created user:', userData.username, 'with role:', userData.userType);
    }

    console.log('✅ Test users created successfully');
  } catch (err) {
    console.error('Error creating test users:', err);
  } finally {
    mongoose.connection.close();
  }
}

createTestUsers();