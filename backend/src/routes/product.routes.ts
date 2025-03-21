import express from "express";
import { Request, Response } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", async (req: Request, res: Response) => {
  await updateProduct(req, res);
});
router.delete("/deleteProduct/:id", async (req: Request, res: Response) => {
  await deleteProduct(req, res);
});
export default router;
