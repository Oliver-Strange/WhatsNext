import mongoose from "mongoose";

// new vehicle properties interface
interface VehicleAttrs {
  userId: string;
  nickname: string;
  make: string;
  modelType: string;
  miles: number;
  picLink: string;
  lastOil: Date;
}

// new vehicle document properties interface
interface VehicleDoc extends mongoose.Document {
  userId: string;
  nickname: string;
  make: string;
  modelType: string;
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
    userId: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: false,
    },
    make: {
      type: String,
      required: true,
    },
    modelType: {
      type: String,
      required: true,
    },
    miles: {
      type: Number,
      required: true,
      min: 0,
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
