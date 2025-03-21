// controllers/auth.controller.ts
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { authService } from "../services/auth.service";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const admin = await authService.login(email, password);

      const token = jwt.sign(
        {
          id: admin.id,
          email: admin.email,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(401).json({
        error: error instanceof Error ? error.message : "Login failed",
      });
    }
  },
};
