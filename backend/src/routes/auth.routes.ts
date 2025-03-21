import express from "express";
import { authController } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", async (req: express.Request, res: express.Response) => {
  await authController.login(req, res);
});

export default router;
