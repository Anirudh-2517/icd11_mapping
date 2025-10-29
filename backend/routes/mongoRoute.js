import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Simple route to get ICD mappings directly from MongoDB
router.get('/mappings', async (req, res) => {
  try {
    // Get the collection
    const collection = mongoose.connection.db.collection('icd_mappings');
    
    console.log('📡 Fetching data from icd_mappings collection...');
    
    // Count documents
    const count = await collection.countDocuments();
    console.log(`📊 Total documents: ${count}`);
    
    // Fetch documents
    const mappings = await collection.find({}).limit(50).toArray();
    console.log(`✅ Fetched ${mappings.length} documents`);
    
    if (mappings.length > 0) {
      console.log('📝 Sample document:', mappings[0]);
    }

    res.json(mappings);
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Get knowledge base entries
router.get('/list-knowledge', async (req, res) => {
    try {
        const collection = mongoose.connection.db.collection('knowledge');
        const entries = await collection.find({}).toArray();
        console.log(`✅ Fetched ${entries.length} knowledge entries`);
        res.json(entries);
    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Add knowledge base entry
router.post('/add-knowledge', async (req, res) => {
    try {
        const collection = mongoose.connection.db.collection('knowledge');
        const newEntry = {
            ...req.body,
            createdAt: new Date()
        };
        
        await collection.insertOne(newEntry);
        console.log('✅ Knowledge entry added:', newEntry);
        res.status(201).json(newEntry);
    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: err.message });
    }
});

export default router;