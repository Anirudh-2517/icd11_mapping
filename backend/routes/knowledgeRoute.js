import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Get all knowledge entries from MongoDB
router.get('/', async (req, res) => {
    try {
        const collection = mongoose.connection.db.collection('knowledge');
        console.log('📡 Fetching data from knowledge collection...');
        
        const entries = await collection.find({}).toArray();
        console.log(`✅ Fetched ${entries.length} knowledge entries`);
        
        if (entries.length > 0) {
            console.log('📝 Sample entry:', entries[0]);
        }

        res.json(entries);
    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Add new knowledge entry to MongoDB
router.post('/', async (req, res) => {
    try {
        const collection = mongoose.connection.db.collection('knowledge');
        const newEntry = {
            ...req.body,
            createdAt: new Date()
        };
        
        const result = await collection.insertOne(newEntry);
        console.log('✅ Knowledge entry added:', newEntry);
        res.status(201).json(newEntry);
    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: err.message });
    }
});

export default router;