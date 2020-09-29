import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

// Routes
import { currentUserRouter } from "./routes/current-user";
import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { newVehicleRouter } from "./routes/new-vehicle";
import { updateVehicleRouter } from "./routes/update-vehicle";

import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./middleware/errors/not-found-error";
import { deleteVehicleRouter } from "./routes/delete-vehicle";
import { vehicleIndexRouter } from "./routes/user-vehicles";

const cors = require("cors");

const app = express();
app.use(json());
app.use(cors());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

// Routes
// User
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
// Vehicle
app.use(newVehicleRouter);
app.use(deleteVehicleRouter);
app.use(vehicleIndexRouter);
app.use(updateVehicleRouter);

// checks incoming request for route that doesn't exist
// throwing a new error for the errorHandler to deal with
app.all("*", () => {
  throw new NotFoundError();
});

// Error handler middleware
app.use(errorHandler);

export { app };
