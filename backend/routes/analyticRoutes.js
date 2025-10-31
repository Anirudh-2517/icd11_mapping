// backend/routes/analyticRoutes.js
import express from "express";
import {
  getAnalytics,
  createAnalytic,
  getAnalyticsByCategory,
} from "../controllers/analyticController.js";

const router = express.Router();

router.get("/", getAnalytics);
router.post("/", createAnalytic);
router.get("/category/:category", getAnalyticsByCategory);

export default router;
