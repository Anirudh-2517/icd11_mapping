import express from "express";
import * as ctrl from "../controllers/diseaseController.js";

const router = express.Router();

// Public endpoints with no auth
router.get("/", ctrl.listDiseases);
router.get("/export", ctrl.exportCsv);
router.get("/:id", ctrl.getDisease);

export default router;