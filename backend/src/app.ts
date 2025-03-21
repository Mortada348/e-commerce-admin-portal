import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";
import authRoutes from "./routes/auth.routes";
import adminRoutes from "./routes/admin.routes";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/auth", authRoutes);
export default app;
