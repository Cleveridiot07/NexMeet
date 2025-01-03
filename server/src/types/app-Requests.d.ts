import { Request } from "express";
import User from "../models/user.model";

declare interface CustomRequest extends Request{
    user:User,
}

