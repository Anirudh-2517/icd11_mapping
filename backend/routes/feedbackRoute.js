import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Get all feedbacks
router.get('/list', async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection('feedbacks');
    console.log('📡 Fetching data from feedbacks collection...');
    
    const count = await collection.countDocuments();
    console.log(`📊 Total feedback documents: ${count}`);
    
    const feedbacks = await collection.find({}).limit(50).toArray();
    console.log(`✅ Fetched ${feedbacks.length} feedbacks`);
    
    if (feedbacks.length > 0) {
      console.log('📝 Sample feedback:', feedbacks[0]);
    }

    res.json(feedbacks);
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Add new feedback
router.post('/add', async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection('feedbacks');
    const newFeedback = {
      ...req.body,
      createdAt: new Date()
    };
    
    const result = await collection.insertOne(newFeedback);
    console.log('✅ Feedback added:', result);
    res.status(201).json(newFeedback);
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;