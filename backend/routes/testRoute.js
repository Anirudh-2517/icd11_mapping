import express from 'express';
const router = express.Router();

// Simple test route that returns static data
router.get('/test', (req, res) => {
  res.json({ message: 'Test route working!' });
});

// Simple route to get ICD mappings
router.get('/mappings', async (req, res) => {
  try {
    const data = [
      {
        code: "TEST001",
        name: "Test Disease 1",
        definition: "This is a test disease",
        icd_tm2: "TM2-001",
        icd_biomed: "BIO-001",
        ayush_system: "Ayurveda"
      },
      {
        code: "TEST002",
        name: "Test Disease 2",
        definition: "This is another test disease",
        icd_tm2: "TM2-002",
        icd_biomed: "BIO-002",
        ayush_system: "Unani"
      }
    ];
    res.json(data);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;