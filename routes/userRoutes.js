import express from "express";
import { registerUser } from "../controller/user.js";

const router = express.Router();

// POST endpoint for user registration
router.post("/", registerUser);

export default router;
