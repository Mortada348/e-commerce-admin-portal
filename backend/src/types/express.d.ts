// types/express.d.ts
import { Admin } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: Admin;
    }
  }
}
