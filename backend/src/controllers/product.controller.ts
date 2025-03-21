import { Request, Response } from "express";

import * as productService from "../services/product.service";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const product = await productService.getProductById(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: "Product Not Found" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock, categoryName, isDeleted } =
      req.body;
    const product = await productService.createProduct({
      name,
      description,
      price,
      stock,
      categoryName,

      isDeleted,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error creating product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid product ID" });

    const { name, description, price, stock, categoryName, isDeleted } =
      req.body;

    const product = await productService.updateProduct(id, {
      name,
      description,
      price,
      stock,
      categoryName,

      isDeleted,
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error: any) {
    console.error("Error updating product:", error);

    if (error.code === "P2025") {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(500).json({ error: "Error updating product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid product ID" });

    await productService.deleteProduct(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
};
