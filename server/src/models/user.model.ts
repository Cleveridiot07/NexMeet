import { model, Schema, Types } from "mongoose";

enum SubscriptionType {
  FREE = "FREE",
  PAID = "PAID",
}

export default interface User {
  _id: Types.ObjectId;
  name?: string;
  profilePictureUrl?: string;
  email?: string;
  password?: string;
  firebaseUID?: string;
  subscriptionType?: SubscriptionType;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<User>(
  {
    firebaseUID: {
      type: Schema.Types.String,
      required: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
    profilePictureUrl: {
      type: Schema.Types.String,
      required: false,
      default: null,
    },
    email: {
      type: Schema.Types.String,
      unique: true,
      required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    subscriptionType: {
      type: String,
      enum: Object.values(SubscriptionType),
      default: SubscriptionType.FREE,
      required: true,
    },
  },
  { timestamps: true } // Corrected line for timestamps
);

export const UserModel = model<User>("User", userSchema);
