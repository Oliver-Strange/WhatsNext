// mongoose as an easy database to work with
import mongoose from "mongoose";
// password to handle encryption
import { Password } from "../services/password";

// New user properties interface
interface UserAttrs {
  email: string;
  password: string;
}

// New user document properties interface
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

// New user model properties interface
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // defining the form of the response data
  {
    toJSON: {
      transform(doc, ret) {
        // change how the mongoose id is shown
        ret.id = ret._id;
        // get rid of the old id
        delete ret._id;
        // don't return the password
        delete ret.password;
        // don't need the version
        delete ret.__v;
      },
    },
  }
);

// mongoose pre-save middleware function to hash the password before save and handle async functions
userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
