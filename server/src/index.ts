require("dotenv").config();
import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  console.log("Now Starting Server...");

  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(
      "mongodb+srv://Preston:" +
        process.env.MONGO_URI +
        "@carstatsdb.fquur.mongodb.net/CarStatsDB?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }

  app.listen(4000, () => {
    console.log("Now listening on port 4000!");
  });
};

start();
