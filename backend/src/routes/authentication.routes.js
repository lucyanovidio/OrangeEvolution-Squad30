import { Router } from "express";
import { login } from "../controllers/authentication.controller.js";

const router = Router();

router.post("/login", login);

export default router;
