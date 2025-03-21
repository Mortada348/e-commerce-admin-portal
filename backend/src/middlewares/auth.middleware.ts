// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import { Request, Response, NextFunction } from "express";
// import { Admin } from "@prisma/client";

// // Secret key for JWT token (should be kept in environment variable)
// const JWT_SECRET = process.env.JWT_SECRET || "opushfjnlncvojwbg135468432rg";

// declare module "express" {
//   interface Request {
//     user?: Admin;
//   }
// }

// let users: { email: string; password: string }[] = [];

// // Login user and issue JWT
// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password }: { email: string; password: string } = req.body;

//     // Find user from database
//     const user = users.find((user) => user.email === email);
//     if (!user) {
//       return res.status(400).json({ error: "User not found" });
//     }

//     // Compare password with hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Create a JWT token
//     const token = jwt.sign({ username: user.email }, JWT_SECRET, {
//       expiresIn: "1h", // Token expires in 1 hour
//     });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: "Error logging in" });
//   }
// };

// export const authenticate = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");

//   if (!token) {
//     res.status(401).json({ error: "Access denied. No token provided." });
//     return;
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET) as Admin;
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };
// middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Admin } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as Admin;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
