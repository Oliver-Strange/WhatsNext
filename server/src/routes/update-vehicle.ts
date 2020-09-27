import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  requireAuth,
  validateRequest,
  NotAuthorizedError,
  NotFoundError,
  currentUser,
} from "../middleware";
import { Vehicle } from "../models/vehicle";

const router = express.Router();

router.put(
  "/api/myVehicle/:id",
  currentUser,
  requireAuth,
  [
    body("make")
      .notEmpty()
      .withMessage("You must supply a make of the vehicle"),
    body("modelType")
      .notEmpty()
      .withMessage("You must supply a model of the vehicle"),
    body("miles")
      .notEmpty()
      .isNumeric()
      .withMessage("You must supply the miles of the vehicle as a number"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      throw new NotFoundError();
    }

    if (vehicle.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    vehicle.set({
      nickname: req.body.nickname,
      make: req.body.make,
      modelType: req.body.modelType,
      miles: req.body.miles,
      picLink: req.body.picLink,
      lastOil: req.body.lastOil,
    });
    await vehicle.save();

    res.send(vehicle);
  }
);

export { router as updateVehicleRouter };
