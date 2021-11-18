import express from "express";
import { getUsers, createUser, getUser } from "../controllers/users.js";
const router = express.Router();
router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
export default router;
