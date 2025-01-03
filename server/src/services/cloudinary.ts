import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || '',
  api_key: process.env.CLOUDINARY_API_KEY || '',
  api_secret: process.env.CLOUDINARY_API_SECRET || '',
});

interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  [key: string]: any; 
}

const uploadOnCloudinary = async (localFilePath: string): Promise<CloudinaryResponse | null> => {
  try {
    if (!localFilePath) {
      console.error("Local file path is not provided.");
      return null;
    }

    const fileExtension = path.extname(localFilePath).toLowerCase();
    let resourceType: 'image' | 'raw' | 'auto' = 'auto';

    if (fileExtension === '.pdf') {
      resourceType = 'raw';
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: resourceType,
    });

    console.log("Cloudinary Response:", response);

    if (response.secure_url) {
      console.log("File uploaded on Cloudinary", response.secure_url);
      // Clean up the local file after uploading.
      try {
        fs.unlinkSync(localFilePath);
      } catch (err) {
        console.error("Error deleting local file after upload:", err);
      }
      return response;
    } else {
      console.error("Failed to get secure_url from Cloudinary response.");
      return null;
    }
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    try {
      fs.unlinkSync(localFilePath); // Remove the file locally in case of an error.
    } catch (err) {
      console.error("Error deleting local file on failure:", err);
    }
    return null;
  }
};

export { uploadOnCloudinary };
