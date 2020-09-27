import express, { Request, Response } from "express";
import {
  requireAuth,
  currentUser,
  NotFoundError,
  NotAuthorizedError,
} from "../middleware";
import { Vehicle } from "../models/vehicle";

const router = express.Router();

router.delete(
  "/api/vehicle/:vehicleId",
  currentUser,
  requireAuth,
  async (req: Request, res: Response) => {
    const { vehicleId } = req.params;

    const vehicle = await Vehicle.findById(vehicleId);

    if (!vehicle) {
      throw new NotFoundError();
    }

    if (vehicle.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    await Vehicle.findByIdAndDelete(vehicleId);

    res.status(200).send(vehicle);
  }
);

export { router as deleteVehicleRouter };
