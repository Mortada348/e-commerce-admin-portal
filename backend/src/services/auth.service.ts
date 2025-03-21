// services/auth.service.ts
import { prisma } from "../config/db.config";
import bcrypt from "bcryptjs";
import { Admin } from "@prisma/client";

export const authService = {
  login: async (email: string, password: string): Promise<Admin> => {
    const admin = await prisma.admin.findFirst({
      where: { email },
    });

    if (!admin) {
      throw new Error("Admin not found");
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    return admin;
  },
};
