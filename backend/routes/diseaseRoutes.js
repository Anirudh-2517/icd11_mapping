import express from "express";
import * as ctrl from "../controllers/diseaseController.js";
import { verifyToken, requireRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// public read/search endpoints - no auth required
router.get("/", ctrl.listDiseases);
router.get("/export", ctrl.exportCsv);
router.get("/:id", ctrl.getDisease);

// admin-only CRUD
router.post("/", verifyToken, requireRole(["admin"]), ctrl.createDisease);
router.put("/:id", verifyToken, requireRole(["admin"]), ctrl.updateDisease);
router.delete("/:id", verifyToken, requireRole(["admin"]), ctrl.deleteDisease);

export default router;
