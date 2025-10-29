const express = require('express');
const router = express.Router();
const analyticController = require('../controllers/analyticController');
const { protect, admin } = require('../middleware/authMiddleware');

// Routes
router.get('/', protect, analyticController.getAnalytics);
router.post('/', protect, admin, analyticController.createAnalytic);
router.get('/category/:category', protect, analyticController.getAnalyticsByCategory);

module.exports = router;