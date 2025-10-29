import express from "express";
import * as userCtrl from "../controllers/userController.js";
import { verifyToken, requireRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public GET list for admin UI (no token required in simplified setup)
router.get("/", userCtrl.listUsers);

// Protect create/update/delete operations for admins only
router.post("/", verifyToken, requireRole(["admin"]), userCtrl.createUser);
router.put("/:id", verifyToken, requireRole(["admin"]), userCtrl.updateUser);
router.delete("/:id", verifyToken, requireRole(["admin"]), userCtrl.deleteUser);

export default router;
