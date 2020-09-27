import express, { Request, Response } from "express";
import { requireAuth } from "./../middleware/require-auth";
import { NotFoundError } from "./../middleware/errors/not-found-error";
import { NotAuthorizedError } from "./../middleware/errors/not-authorized-error";
import { Vehicle } from "../models/vehicle";

const router = express.Router();

router.delete(
  "/api/vehicle/:vehicleId",
  requireAuth,
  async (req: Request, res: Response) => {
    const { vehicleId } = req.params;
    console.log(vehicleId);

    const vehicle = await Vehicle.findById(vehicleId);

    // if (!vehicle) {
    //   throw new NotFoundError();
    // }

    // if (vehicle.userId !== req.currentUser!.id) {
    //   throw new NotAuthorizedError();
    // }

    // Vehicle.deleteOne({ id: vehicleId });

    res.status(204).send(vehicle);
  }
);

export { router as deleteVehicleRouter };
