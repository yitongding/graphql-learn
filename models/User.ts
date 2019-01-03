import { model, Schema } from "mongoose";
import { IUser } from "./types";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    passwordHash: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const User = model<IUser>("User", UserSchema);
export default User;
