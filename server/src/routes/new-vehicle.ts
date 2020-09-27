import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import { Vehicle } from "../models/vehicle";
import { validateRequest } from "../middleware";

const router = express.Router();

router.post(
  "/api/newVehicle",
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
    const {
      userId,
      nickname,
      make,
      modelType,
      miles,
      picLink,
      lastOil,
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!nickname) {
      nickname: null;
    }

    if (!picLink) {
      picLink: null;
    }

    if (!lastOil) {
      lastOil: null;
    }

    const vehicle = Vehicle.build({
      userId,
      nickname,
      make,
      modelType,
      miles,
      picLink,
      lastOil,
    });
    await vehicle.save();

    res.status(201).send(vehicle);
  }
);

export { router as newVehicleRouter };
