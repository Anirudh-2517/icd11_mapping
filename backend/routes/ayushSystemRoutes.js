const express = require('express');
const router = express.Router();
const ayushSystemController = require('../controllers/ayushSystemController');
const { protect, admin } = require('../middleware/authMiddleware');

// Routes
router.get('/', protect, ayushSystemController.getAyushSystems);
router.post('/', protect, admin, ayushSystemController.createAyushSystem);
router.put('/:id/status', protect, admin, ayushSystemController.updateSystemStatus);

module.exports = router;