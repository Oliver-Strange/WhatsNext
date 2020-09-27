import express, { Request, Response } from "express";
import { Vehicle } from "../models/vehicle";
import { requireAuth } from "./../middleware/require-auth";

const router = express.Router();

router.get(
  "/api/myVehicles",
  requireAuth,
  async (req: Request, res: Response) => {
    const vehicles = await Vehicle.find({
      userId: req.currentUser!.id,
    });

    res.send(vehicles);
  }
);

export { router as vehicleIndexRouter };
