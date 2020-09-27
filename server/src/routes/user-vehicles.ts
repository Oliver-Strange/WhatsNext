import express, { Request, Response } from "express";
import { Vehicle } from "../models/vehicle";
import { requireAuth, currentUser } from "./../middleware";

const router = express.Router();

router.get(
  "/api/myVehicles",
  currentUser,
  requireAuth,
  async (req: Request, res: Response) => {
    const vehicles = await Vehicle.find({
      userId: req.currentUser!.id,
    });

    res.send(vehicles);
  }
);

export { router as vehicleIndexRouter };
