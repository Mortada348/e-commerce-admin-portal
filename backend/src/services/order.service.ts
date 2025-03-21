import { prisma } from "../config/db.config";

export const getAllOrders = async () => {
  return prisma.order.findMany();
};

export const getOrderById = async (id: number) => {
  return await prisma.order.findUnique({ where: { id: Number(id) } });
};

export const createOrder = async (data: {
  username: string;
  quantity: number;
  productName: string;
  date: string;
  isDeleted: false;
}) => {
  return await prisma.order.create({ data });
};

export const updateOrder = async (
  id: number,
  data: {
    username?: string;
    quantity?: number;
    productName?: string;
    date?: string;
    isDeleted?: boolean;
  }
) => {
  return prisma.order.update({ where: { id: Number(id) }, data });
};

export const deleteOrder = async (id: number) => {
  return await prisma.order.delete({ where: { id: Number(id) } });
};
