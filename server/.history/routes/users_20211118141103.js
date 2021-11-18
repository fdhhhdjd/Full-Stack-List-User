import express from "express";
import { getUsers, createUser } from "../controllers/users";
const router = express.Route();

router.get("/users", getUsers);
router.post("/users", createUser);
