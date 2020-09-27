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

import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./middleware/errors/not-found-error";
import { deleteVehicleRouter } from "./routes/delete-vehicle";

const app = express();
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

// Routes
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(newVehicleRouter);
app.use(deleteVehicleRouter);

// checks incoming request for route that doesn't exist
// throwing a new error for the errorHandler to deal with
app.all("*", () => {
  throw new NotFoundError();
});

// Error handler middleware
app.use(errorHandler);

export { app };
