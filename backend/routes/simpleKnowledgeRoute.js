import express from 'express';
const router = express.Router();

// In-memory array for testing
let knowledgeEntries = [
    {
        _id: "1",
        title: "Understanding Blood Pressure",
        content: "Normal blood pressure: Less than 120/80 mm Hg\nElevated: 120-129/less than 80 mm Hg\nHigh: 130/80 mm Hg or higher",
        category: "guide",
        createdAt: new Date()
    },
    {
        _id: "2",
        title: "Common Health Tips",
        content: "1. Stay hydrated\n2. Exercise regularly\n3. Get enough sleep\n4. Maintain a balanced diet",
        category: "general",
        createdAt: new Date()
    }
];

// Get all entries
router.get('/', (req, res) => {
    try {
        console.log('📡 Fetching knowledge base entries...');
        console.log(`✅ Found ${knowledgeEntries.length} entries`);
        res.json(knowledgeEntries);
    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: err.message });
    }
});

// Add new entry
router.post('/', (req, res) => {
    try {
        const newEntry = {
            _id: Date.now().toString(),
            ...req.body,
            createdAt: new Date()
        };
        knowledgeEntries.unshift(newEntry); // Add to beginning of array
        console.log('✅ New knowledge entry added:', newEntry.title);
        res.status(201).json(newEntry);
    } catch (err) {
        console.error('❌ Error:', err);
        res.status(500).json({ error: err.message });
    }
});

export default router;