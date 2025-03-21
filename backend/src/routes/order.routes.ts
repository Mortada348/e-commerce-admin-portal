import express from "express";
import { Request, Response } from "express";
import {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  updateOrder,
} from "../controllers/order.controller";

const router = express.Router();
router.get("/getAllOrders", async (req: Request, res: Response) => {
  await getAllOrders(req, res);
});
router.get("/getOrderById/:id", async (req: Request, res: Response) => {
  await getOrderById(req, res);
});
router.post("/createOrder", createOrder);
router.put("/updateOrder/:id", async (req: Request, res: Response) => {
  await updateOrder(req, res);
});
router.delete("/deleteOrder/:id", async (req: Request, res: Response) => {
  await deleteOrder(req, res);
});

export default router;
