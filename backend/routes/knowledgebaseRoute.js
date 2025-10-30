import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Get all knowledge base entries
router.get('/list', async (req, res) => {
  console.log("maashya")
  try {
    const collection = mongoose.connection.db.collection('knowledge');
    console.log('📡 Fetching data from knowledge collection...');
    
    const count = await collection.countDocuments();
    console.log(`📊 Total knowledge base documents: ${count}`);
    
    const entries = await collection.find({}).limit(50).toArray();
    console.log(`✅ Fetched ${entries.length} entries`);
    
    if (entries.length > 0) {
      console.log('📝 Sample entry:', entries[0]);
    }

    res.json(entries);
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Add new knowledge base entry
router.post('/add', async (req, res) => {
  try {
    const collection = mongoose.connection.db.collection('knowledge');
    const newEntry = {
      ...req.body,
      createdAt: new Date()
    };
    
    const result = await collection.insertOne(newEntry);
    console.log('✅ Knowledge base entry added:', result);
    res.status(201).json(newEntry);
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;