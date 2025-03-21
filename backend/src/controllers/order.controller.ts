import { Request, Response } from "express";
import * as orderService from "../services/order.service";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const order = await orderService.getOrderById(id);
    return res.json(order);
  } catch (error) {
    res.status(404).json({ error: "Order Not Found" });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { username, quantity, productName, date, isDeleted } = req.body;
    const order = await orderService.createOrder({
      username,
      quantity,
      productName,
      date,
      isDeleted,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Error creating order" });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid Order ID" });

    const { username, quantity, productName, date, isDeleted } = req.body;
    const Order = await orderService.updateOrder(id, {
      username,
      quantity,
      productName,
      date,
      isDeleted,
    });

    res.json(Order);
  } catch (error) {
    res.status(500).json({ error: "Error updating Order" });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid order ID" });

    await orderService.deleteOrder(id);
    res.json({ message: "order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting order" });
  }
};
