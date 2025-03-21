import { Request, Response } from "express";
import * as adminsService from "../services/admin.service";

export const getAdminById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const admin = await adminsService.getAdminById(id);
    return res.json(admin);
  } catch (error) {
    res.status(404).json({ error: "admin not found" });
  }
};

export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid Order ID" });
    const { usename, birthdate, email, password } = req.body;
    const Admin = await adminsService.updateAdmin(id, {
      usename,
      birthdate,
      email,
      password,
    });

    res.json(Admin);
  } catch (error) {
    res.status(500).json({ error: "Error updating Admin" });
  }
};
