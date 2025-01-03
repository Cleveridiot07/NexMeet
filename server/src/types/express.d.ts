// src/types/express.d.ts or at the root of your project
import { User } from "../models/user.model"; // Import your user model here

declare global {
  namespace Express {
    interface Request {
      user?: User;  // Adding the `user` property to the Request interface
    }
  }
}
