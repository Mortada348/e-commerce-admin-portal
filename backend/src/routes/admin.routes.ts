import express from "express";
import { Request, Response } from "express";
import { getAdminById, updateAdmin } from "../controllers/admin.controller";

const router = express.Router();

router.get("/getAdminById/:id", async (req: Request, res: Response) => {
  await getAdminById(req, res);
});

router.put("/updateAdmin/:id", async (req: Request, res: Response) => {
  await updateAdmin(req, res);
});

export default router;
