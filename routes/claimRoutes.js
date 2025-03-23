import { Router } from "express";
import { createClaimController } from "../controllers/claimController.js";

const router = Router();

router.post("/claims", createClaimController);

export default router;
