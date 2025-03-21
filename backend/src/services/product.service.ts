import { prisma } from "../config/db.config";

export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

export const getProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id: Number(id) },
  });
};

export const createProduct = async (data: {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryName: string;

  isDeleted: false;
}) => {
  return await prisma.product.create({ data });
};

export const updateProduct = async (
  id: number,
  data: {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    categoryName?: string;

    isDeleted?: boolean;
  }
) => {
  return await prisma.product.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({ where: { id: Number(id) } });
};
