import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/namaste-db';

const run = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection.db;
    const users = await db.collection('users').find({}).project({ password: 0 }).toArray();
    console.log(JSON.stringify(users, null, 2));
    await mongoose.disconnect();
  } catch (err) {
    console.error('ERROR', err.message || err);
    process.exit(1);
  }
};

run();
