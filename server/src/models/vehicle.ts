import mongoose from "mongoose";

// new vehicle properties interface
interface VehicleAttrs {
  make: string;
  model: string;
  miles: number;
  picLink: string;
  lastOil: Date;
}

// new vehicle document properties interface
interface VehicleDoc extends mongoose.Document {
  make: string;
  model: string;
  miles: number;
  picLink: string;
  lastOil: Date;
}

// new vehicle model properties interface
interface VehicleModel extends mongoose.Model<VehicleDoc> {
  build(attrs: VehicleAttrs): VehicleDoc;
}

const vehicleSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    miles: {
      type: Number,
      required: true,
    },
    picLink: {
      type: String,
      required: false,
    },
    lastOil: {
      type: Date,
      required: false,
    },
  },
  // define response data
  {
    toJSON: {
      transform(doc, ret) {
        // change how the mongoose id is shown
        ret.id = ret._id;
        // get rid of the old id
        delete ret._id;
        // don't need the version
        delete ret.__v;
      },
    },
  }
);

vehicleSchema.statics.build = (attrs: VehicleAttrs) => {
  return new Vehicle(attrs);
};

const Vehicle = mongoose.model<VehicleDoc, VehicleModel>(
  "Vehicle",
  vehicleSchema
);

export { Vehicle };
