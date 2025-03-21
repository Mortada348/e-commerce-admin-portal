import { prisma } from "../config/db.config";

export const getAdminById = async (id: number) => {
  return prisma.admin.findUnique({ where: { id } });
};

export const updateAdmin = async (
  id: number,
  data: {
    usename?: string;
    birthdate?: string;
    email?: string;
    password?: string;
  }
) => {
  return prisma.admin.update({ where: { id: Number(id) }, data });
};
