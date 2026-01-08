import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/namaste-db';

const run = async () => {
  try {
    await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 });

    const username = 'test_doctor';
    const plain = 'Password123!';
    const role = 'doctor';

    const hashed = await bcrypt.hash(plain, 10);

    const doc = await User.findOneAndUpdate(
      { username },
      { username, name: 'Test Doctor', email: 'test_doctor@local', password: hashed, role, status: 'active' },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log('Created/Updated user:', { username: doc.username, role: doc.role, id: doc._id });
    console.log('Plain password for test:', plain);

    await mongoose.disconnect();
  } catch (err) {
    console.error('ERROR creating test user:', err.message || err);
    process.exit(1);
  }
};

run();
