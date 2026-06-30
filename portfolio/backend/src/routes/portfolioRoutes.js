import { Router } from "express";
import { getPortfolioSummary } from "../controllers/portfolioController.js";

const router = Router();

router.get("/summary", getPortfolioSummary);

export default router;
