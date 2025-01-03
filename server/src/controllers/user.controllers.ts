
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";
import { uploadOnCloudinary } from "../services/cloudinary";

export const registerUser = async (req: Request, res: Response) => {
    const profilePicture = req.file?.profilePicture?.[0].path;
  const { name, email, password, firebaseUID } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the user already exists
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Upload profile picture to Cloudinary if provided
    let profilePictureUrl = "";
    if (profilePicture) {
      profilePictureUrl = await uploadOnCloudinary(profilePicture);
    }

    // Hash the password
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    user = new UserModel({
      name,
      email,
      password: hashedPassword,
      firebaseUID: firebaseUID || null,
      profilePictureUrl,
    });

    await user.save();

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    // Send response
    return res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
